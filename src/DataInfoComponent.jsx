import { useEffect } from "react";
import useStore from "./store.js";
import useCharacterClass from "./useCharacterClass.js";

export default function DataInfoComponent() {
  const { characterBasicData, statData, hyperStatData, unionData, unionRaiderData } = useStore();
  useCharacterClass();
  // useEffect(() => {
  //   console.log(characterBasicData);
  //   console.log(statData);
  //   console.log(hyperStatData);
  //   console.log(unionData);
  //   console.log(unionRaiderData);
  // }, []);

  return (
    <div className="md:w-4/5">
      {/* 기본 정보 */}
      <div className="p-5 bg-white flex flex-col justify-center items-center">
        <img src={characterBasicData["character_image"]} alt={"캐릭터 이미지"} />
        <div>{characterBasicData["character_name"]}</div>
        <div>레벨: {characterBasicData["character_level"]}</div>
      </div>

      {/* 유니온 정보 */}
      <div className="p-5 bg-white flex flex-col md:flex-row">
        <div className="md:basis-2/3">asdf</div>
        <div className={"md:basis-1/3"}>
          <div className="font-bold">{unionData["union_grade"]}</div>
          <div>유니온 레벨: {unionData["union_level"]}</div>
          <div>
            <div className="font-bold">유니온 점령 효과</div>
            {unionRaiderData["union_occupied_stat"].map((e) => (
              <div>{e}</div>
            ))}
          </div>
          <div>
            <div className="font-bold">유니온 공격대 효과</div>
            {unionRaiderData["union_raider_stat"].map((e) => (
              <div>{e}</div>
            ))}
          </div>
        </div>
      </div>

      {/* 하이퍼스텟 정보 */}
    </div>
  );
}
