// Module ID: 1449
// Function ID: 1450
// Name: apex/ApexExperiment
// Dependencies: [32, 502, 1247, 1450, 1266, 1380, 504, 2]
// Exports: default

// Module 1449 (apex/ApexExperiment)
import get_initialized from "get initialized" /* 504 */;
import FingerprintUtils from "FingerprintUtils" /* 1266 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import discord_common_apex_ApexExperiment from "discord_common/apex/ApexExperiment" /* 1450 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import size from "module_2" /* 2 */;

const discord_common_apex_ApexExperimentDefault = discord_common_apex_ApexExperiment;

function getUnitId(arg0, guildId) {
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return AuthenticationStore.getId();
  } else if ("installation" === arg0) {
    const obj2 = FingerprintUtils;
    let str2 = obj2.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    const obj = GlobalUtils;
    obj.assertNever(arg0);
  }
}
function useUnitId(arg0, guildId) {
  let items = [AuthenticationStore];
  const obj = get_initialized;
  _slicedToArray(obj.useStateFromStoresArray(items, () => {
    const items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
    return items;
  }), 2);
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp4;
  } else if ("installation" === arg0) {
    const tmpResult = FingerprintUtils;
    let str3 = tmpResult.maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    const tmpResult2 = GlobalUtils;
    tmpResult2.assertNever(arg0);
  }
}
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(arg0) {
  return discord_common_apex_ApexExperimentDefault(arg0, ApexExperimentStore, getUnitId, useUnitId);
};
export const ApexExperiment = discord_common_apex_ApexExperiment.ApexExperiment;
export { getUnitId };
