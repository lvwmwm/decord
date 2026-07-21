// Module ID: 1325
// Function ID: 15544
// Name: getUnitId
// Dependencies: []
// Exports: default

// Module 1325 (getUnitId)
function getUnitId(arg0, guildId) {
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return store.getId();
  } else if ("installation" === arg0) {
    const maybeExtractIdResult = guildId(dependencyMap[4]).maybeExtractId(store.getInstallationForTracking());
    let str2 = "";
    if (null != maybeExtractIdResult) {
      str2 = maybeExtractIdResult;
    }
    return str2;
  } else {
    guildId(dependencyMap[5]).assertNever(arg0);
  }
}
function useUnitId(arg0, guildId) {
  const items = [closure_4];
  callback(guildId(dependencyMap[6]).useStateFromStoresArray(items, () => {
    const items = [store.getId(), store.getInstallationForTracking()];
    return items;
  }), 2);
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp2;
  } else if ("installation" === arg0) {
    const maybeExtractIdResult = guildId(dependencyMap[4]).maybeExtractId(tmp3);
    let str3 = "";
    if (null != maybeExtractIdResult) {
      str3 = maybeExtractIdResult;
    }
    return str3;
  } else {
    guildId(dependencyMap[5]).assertNever(arg0);
  }
  const obj = guildId(dependencyMap[6]);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(__exportStarResult1) {
  return importDefault(dependencyMap[3])(__exportStarResult1, closure_5, getUnitId, useUnitId);
};
export const ApexExperiment = arg1(dependencyMap[3]).ApexExperiment;
export { getUnitId };
