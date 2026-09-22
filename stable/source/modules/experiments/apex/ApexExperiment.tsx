// Module ID: 1434
// Function ID: 1435
// Name: apex/ApexExperiment
// Dependencies: [32, 502, 1234, 1435, 1253, 1369, 504, 2]
// Exports: default

// Module 1434 (apex/ApexExperiment)
import initialize from "initialize" /* 504 */;
import FingerprintUtils from "FingerprintUtils" /* 1253 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import discord_common_apex_ApexExperimentDefault from "discord_common/apex/ApexExperiment" /* 1435 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1234 */;

require = fn;
function getUnitId(arg0, guildId) {
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return AuthenticationStore.getId();
  } else if ("installation" === arg0) {
    let str2 = FingerprintUtils.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    GlobalUtils.assertNever(arg0);
  }
}
function useUnitId(arg0, guildId) {
  let items = [AuthenticationStore];
  _slicedToArray(initialize.useStateFromStoresArray(items, () => {
    const items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
    return items;
  }), 2);
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp4;
  } else if ("installation" === arg0) {
    let str3 = tmp(1253).maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    tmp(1369).assertNever(arg0);
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(arg0) {
  return discord_common_apex_ApexExperimentDefault(arg0, ApexExperimentStore, getUnitId, useUnitId);
};
export const ApexExperiment = fn(1435).ApexExperiment;
export { getUnitId };
