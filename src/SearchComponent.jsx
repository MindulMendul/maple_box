import useStore from "./store.js";
import { useState } from "react";

import {
  getCharacterBasic,
  getCharacterStat,
  getCharacterHyperStat,
  getOCID,
  getUserUnion,
  getUserUnionRaider,
} from "./axiosFunc.js";

export default function SearchComponent() {
  const { setCharacterBasicData, setStatData, setHyperStatData, setUnionData, setUnionRaiderData } = useStore();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const submit = async () => {
    const ocid = await getOCID(name);
    if (!ocid) return;

    // 캐릭터 기본 정보 저장
    const characterBasicData = await getCharacterBasic(ocid);
    if (!characterBasicData) return;
    setCharacterBasicData(characterBasicData);

    const statData = await getCharacterStat(ocid);
    if (!statData) return;
    setStatData(statData);

    // 캐릭터 하이퍼스텟 저장
    const hyperStatData = await getCharacterHyperStat(ocid);
    if (!hyperStatData) return;
    setHyperStatData(hyperStatData);

    // 유니온 정보 저장
    const unionData = await getUserUnion(ocid);
    if (!unionData) return;
    setUnionData(unionData);

    // 유니온 공격대 저장
    const unionRaiderData = await getUserUnionRaider(ocid);
    if (!unionRaiderData) return;
    setUnionRaiderData(unionRaiderData);
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
