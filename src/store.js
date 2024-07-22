import { create } from "zustand";

const useStore = create((set) => ({
  // Character Basic Data
  characterBasicData: 0,
  setCharacterBasicData: (value) => set({ characterBasicData: value }),

  //Stat Data
  statData: 0,
  setStatData: (value) => set({ statData: value }),

  //Hyper Stat Data
  hyperStatData: 0,
  setHyperStatData: (value) => set({ hyperStatData: value }),

  //Union Data
  unionData: 0,
  setUnionData: (value) => set({ unionData: value }),

  //Union Raider Data
  unionRaiderData: 0,
  setUnionRaiderData: (value) => set({ unionRaiderData: value }),
}));

export default useStore;
