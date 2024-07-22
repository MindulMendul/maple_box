import { axiosInstance } from "./axiosClient.js";

export const getOCID = async (name) => {
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
  return ocid;
};

export const getCharacterBasic = async (ocid) => {
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
  return characterBasicData;
};

export const getCharacterStat = async (ocid) => {
  let hyperStatData = undefined;
  try {
    const result = await axiosInstance.get(`/maplestory/v1/character/stat`, {
      params: { ocid: ocid },
      headers: { "x-nxopen-api-key": process.env.REACT_APP_APIKey },
    });
    hyperStatData = result?.data;
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
  return hyperStatData;
};

export const getCharacterHyperStat = async (ocid) => {
  let hyperStatData = undefined;
  try {
    const result = await axiosInstance.get(`/maplestory/v1/character/hyper-stat`, {
      params: { ocid: ocid },
      headers: { "x-nxopen-api-key": process.env.REACT_APP_APIKey },
    });
    hyperStatData = result?.data;
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
  return hyperStatData;
};

// // 유니온 정보 저장
export const getUserUnion = async (ocid) => {
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
  return unionData;
};

// 유니온 공격대 정보 저장
export const getUserUnionRaider = async (ocid) => {
  let unionRaiderData = undefined;
  try {
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
  return unionRaiderData;
};
