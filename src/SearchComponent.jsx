import { useState } from "react";
import { axiosInstance } from "./axiosClient.js";

export default function SearchComponent({ setCharacterBasicData, setUnionData }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const submit = async () => {
    let ocid = undefined;
    try {
      const result = await axiosInstance.get(`/maplestory/v1/id`, {
        params: { character_name: name },
        headers: { "x-nxopen-api-key": process.env.REACT_APP_APIKey },
      });
      ocid = result?.data.ocid;
    } catch (err) {
      // Error Schema
      // {
      //   "error": {
      //     "name": "string",
      //     "message": "string"
      //   }
      // }
      console.log(err.response.data.error);
      return;
    }
    console.log(ocid);

    // 캐릭터 기본 정보 저장
    let characterBasicData = undefined;
    try {
      const result = await axiosInstance.get(`/maplestory/v1/character/basic`, {
        params: { ocid: ocid },
        headers: { "x-nxopen-api-key": process.env.REACT_APP_APIKey },
      });
      characterBasicData = result?.data;
    } catch (err) {
      // Error Schema
      // {
      //   "error": {
      //     "name": "string",
      //     "message": "string"
      //   }
      // }
      console.log(err.response.data.error);
      return;
    }
    setCharacterBasicData(characterBasicData);

    // // 유니온 정보 저장
    let unionData = undefined;
    try {
      const result = await axiosInstance.get(`/maplestory/v1/user/union`, {
        params: { ocid: ocid },
        headers: { "x-nxopen-api-key": process.env.REACT_APP_APIKey },
      });
      unionData = result?.data;
    } catch (err) {
      // Error Schema
      // {
      //   "error": {
      //     "name": "string",
      //     "message": "string"
      //   }
      // }
      console.log(err.response.data.error);
      return;
    }

    // 유니온 공격대 정보 저장
    let unionRaiderData = undefined;
    try {
      console.log(ocid);
      const result = await axiosInstance.get(`/maplestory/v1/user/union-raider`, {
        params: { ocid: ocid },
        headers: { "x-nxopen-api-key": process.env.REACT_APP_APIKey },
      });
      unionRaiderData = result?.data;
    } catch (err) {
      // Error Schema
      // {
      //   "error": {
      //     "name": "string",
      //     "message": "string"
      //   }
      // }
      console.log(err);
      //console.log(err.response.data.error);
      return;
    }

    console.log(unionData);
    console.log(unionRaiderData);
    setUnionData({ ...unionData, ...unionRaiderData });
  };

  return (
    <>
      <h1 className="text-4xl font-bold break-keep my-20 text-emerald-200">메이플 기본 컨텐츠 최적화 툴</h1>
      <label htmlFor={"#searchName"} className={"text-xl text-emerald-200"}>
        캐릭터명을 입력하세요
      </label>
      <div className="flex justify-center">
        <input id={"searchName"} className="bg-green-800" onChange={handleChange} data={name} />
        <button className="bg-green-900" onClick={submit}>
          검색
        </button>
      </div>
    </>
  );
}
