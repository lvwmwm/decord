// Module ID: 1325
// Function ID: 15550
// Name: getUnitId
// Dependencies: [57, 1194, 1188, 1326, 490, 1327, 566, 2]
// Exports: default

// Module 1325 (getUnitId)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
function getUnitId(arg0, guildId) {
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return store.getId();
  } else if ("installation" === arg0) {
    const maybeExtractIdResult = require(490) /* extractId */.maybeExtractId(store.getInstallationForTracking());
    let str2 = "";
    if (null != maybeExtractIdResult) {
      str2 = maybeExtractIdResult;
    }
    return str2;
  } else {
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
}
function useUnitId(arg0, guildId) {
  let items = [_isNativeReflectConstruct];
  callback(require(566) /* initialize */.useStateFromStoresArray(items, () => {
    const items = [outer1_4.getId(), outer1_4.getInstallationForTracking()];
    return items;
  }), 2);
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp2;
  } else if ("installation" === arg0) {
    const maybeExtractIdResult = require(490) /* extractId */.maybeExtractId(tmp3);
    let str3 = "";
    if (null != maybeExtractIdResult) {
      str3 = maybeExtractIdResult;
    }
    return str3;
  } else {
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
  const obj = require(566) /* initialize */;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(ApexExperiment) {
  return importDefault(1326)(ApexExperiment, closure_5, getUnitId, useUnitId);
};
export const ApexExperiment = require("createApexExperimentCommon").ApexExperiment;
export { getUnitId };
