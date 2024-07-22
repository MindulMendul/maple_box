import useStore from "./store.js";
import { makeMap } from "./util.js";

const classStatDict = {
  엔젤릭버스터: { Justat: "DEX", Bustat: "STR" },
  카데나: { Justat: "LUK", Bustat: "STR", Bustat2: "DEX" },
};

const hyperStatRequiredPoint = [1, 2, 4, 8, 10, 15, 20, 25, 30, 35, 50, 65, 80, 95, 110];

export default function useCharacterClass() {
  const { characterBasicData, statData, hyperStatData, unionData, unionRaiderData } = useStore();

  if (characterBasicData["character_class"] == "제논") {
    return;
  }
  if (characterBasicData["character_class"] == "데몬어벤져") {
    return;
  }

  const characterClassStat = classStatDict[characterBasicData["character_class"]];
  if (!characterClassStat) return;

  const statDict = makeMap(statData.final_stat, "stat_name", "stat_value");
  // 변수 전부 계산
  [
    makeMap(hyperStatData.hyper_stat_preset_1, "stat_type", "stat_increase"),
    makeMap(hyperStatData.hyper_stat_preset_2, "stat_type", "stat_increase"),
    makeMap(hyperStatData.hyper_stat_preset_3, "stat_type", "stat_increase"),
  ].forEach((hs) => {
    const _ajustat = hs.get(characterClassStat.Justat); // 하이퍼스텟으로 증가한 주스텟
    const _abustat =
      hs.get(characterClassStat.Bustat) + (characterClassStat.Bustat2 ? hs.get(characterClassStat.Bustat2) : 0); // 하이퍼스텟으로 증가한 부스텟
    const _justat = statDict.get(characterClassStat.Justat) - _ajustat; // 하이퍼스텟이 빠진 주스텟
    const _bustat = statDict.get(characterClassStat.Bustat) - _abustat; // 하이퍼스텟이 빠진 부스텟
    const _statDMG = (_justat * 4 + _bustat) * 0.01; // 하이퍼스텟이 빠진 데미지
    const _prevStatDMG = (statDict.get(characterClassStat.Justat) * 4 + statDict.get(characterClassStat.Bustat)) * 0.01; // 하이퍼스텟이 포함된 데미지
    const _optimizedDMG =
      (statDict.get(characterClassStat.Justat) * 4 + statDict.get(characterClassStat.Bustat)) * 0.01; // 하이퍼스텟이 최적화된 데미지

    const hyperStatScore = ((_statDMG / _optimizedDMG) * 100).toFixed(2);

    console.log(hyperStatScore);
  });
}
