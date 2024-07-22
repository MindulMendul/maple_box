const parseStat = (value) => {
  if (!value) return undefined;
  const regex = /[0-9]+(\.)?[0-9]*/gi;
  return Number(value.match(regex)[0].trim());
};

export const makeMap = (array, name, value) => {
  return new Map(array.map((e) => [e[name], parseStat(e[value])]));
};
