// Module ID: 1368
// Function ID: 1369
// Name: getUnitId
// Dependencies: [32, 1218, 1212, 1369, 513, 1370, 589, 2]
// Exports: default

// Module 1368 (getUnitId)
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";
import initialize from "initialize";

const require = arg1;
function getUnitId(arg0, guildId) {
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return store.getId();
  } else if ("installation" === arg0) {
    let str2 = require(513) /* extractId */.maybeExtractId(store.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    require(1370) /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
}
function useUnitId(arg0, guildId) {
  let items = [fetchFingerprint];
  callback(require(589) /* initialize */.useStateFromStoresArray(items, () => {
    const items = [store.getId(), store.getInstallationForTracking()];
    return items;
  }), 2);
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp4;
  } else if ("installation" === arg0) {
    let tmpResult = tmp(513);
    let str3 = tmpResult.maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    tmpResult = tmp(1370);
    tmpResult.assertNever(arg0);
  }
  const obj = require(589) /* initialize */;
}
const result = require("initialize").fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(ApexExperiment) {
  return importDefault(1369)(ApexExperiment, initialize, getUnitId, useUnitId);
};
export const ApexExperiment = require("logger").ApexExperiment;
export { getUnitId };
