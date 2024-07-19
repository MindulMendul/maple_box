export default function DataInfoComponent({ characterBasicData, unionData }) {
  // Character Schema
  const data1 = {
    access_flag: "true",
    character_class: "엔젤릭버스터",
    character_class_level: "6",
    character_date_create: "2019-07-02T00:00+09:00",
    character_exp: 6379208278794,
    character_exp_rate: "15.668",
    character_gender: "여",
    character_guild_name: "기본",
    character_image:
      "https://open.api.nexon.com/static/maplestory/Character/ACPBKEPMEOBFCKMKMDMGKONPKIPBMDBENEDMOAKHOPNFLJMBEJDCEFBACJDJBKGNJGAGPNOHKOJCLMJAEHEIHFENKKCEPKOLEFEEBBNMIGNALOGJFELCBDLGCHOHKENGEEJEJJKAJDIEDFNEJODHEKBDDHBPLAFGPFIMCKNMPJAOHAEENOBIIFHHNOEIJEFLGDEKKAKNFDCAJIBLCDCCFOBJOIIMHCLMBBGDOEGHPKJDFFECFDFHBNKODJNOPGLM.png",
    character_level: 282,
    character_name: "민둘랭가이드",
    date: null,
    liberation_quest_clear_flag: "false",
    world_name: "엘리시움",
  };

  const data2 = {
    union_artifact_exp: 14147,
    union_artifact_level: 47,
    union_artifact_point: 16400,
    union_block: [
      {
        block_class: "메르세데스",
        block_control_point: { x: -11, y: -2 },
        block_level: "200",
        block_position: [
          { x: -11, y: -4 },
          { x: -11, y: -1 },
          { x: -11, y: -3 },
          { x: -11, y: -2 },
        ],
        block_type: "궁수",
      },
    ],
    union_grade: "그랜드 마스터 유니온 3",
    union_inner_stat: [
      { stat_field_id: "0", stat_field_effect: "유니온 최대 HP" },
      { stat_field_id: "1", stat_field_effect: "유니온 마력" },
      { stat_field_id: "2", stat_field_effect: "유니온 INT" },
      { stat_field_id: "3", stat_field_effect: "유니온 공격력" },
    ],
    union_level: 9133,
    union_occupied_stat: ["STR 5 증가", "크리티컬 데미지 20.00 증가"],
    union_raider_stat: ["STR 80 증가", "LUK 100 증가", "INT 80 증가"],
    union_raider_preset_1: {
      union_block: [
        {
          block_class: "메르세데스",
          block_control_point: { x: -11, y: -2 },
          block_level: "200",
          block_position: [
            { x: -11, y: -4 },
            { x: -11, y: -1 },
            { x: -11, y: -3 },
            { x: -11, y: -2 },
          ],
          block_type: "궁수",
        },
      ],
      union_inner_stat: [
        { stat_field_id: "0", stat_field_effect: "유니온 최대 HP" },
        { stat_field_id: "1", stat_field_effect: "유니온 마력" },
        { stat_field_id: "2", stat_field_effect: "유니온 INT" },
        { stat_field_id: "3", stat_field_effect: "유니온 공격력" },
      ],
      union_occupied_stat: ["STR 5 증가", "크리티컬 데미지 20.00 증가"],
      union_raider_stat: ["STR 80 증가", "LUK 100 증가", "INT 80 증가"],
    },
    use_preset_no: 1,
  };
  return (
    <div className="md:w-4/5">
      <div className="p-5 bg-white flex flex-col justify-center items-center">
        <img src={data1["character_image"]} alt={"캐릭터 이미지"} />
        <div>{data1["character_name"]}</div>
        <div>레벨: {data1["character_level"]}</div>
      </div>

      <div className="p-5 bg-white flex flex-col md:flex-row">
        <div className="md:basis-2/3">asdf</div>
        <div className={"md:basis-1/3"}>
          <div className="font-bold">{data2["union_grade"]}</div>
          <div>유니온 레벨: {data2["union_level"]}</div>
          <div>
            <div className="font-bold">유니온 점령 효과</div>
            {data2["union_occupied_stat"].map((e) => (
              <div>{e}</div>
            ))}
          </div>
          <div>
            <div className="font-bold">유니온 공격대 효과</div>
            {data2["union_raider_stat"].map((e) => (
              <div>{e}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
