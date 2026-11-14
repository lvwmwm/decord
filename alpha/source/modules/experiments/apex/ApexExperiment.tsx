// Module ID: 1453
// Function ID: 1454
// Name: apex/ApexExperiment
// Dependencies: [32, 502, 1246, 1454, 1253, 504, 1254, 1255, 2]
// Exports: default

// Module 1453 (apex/ApexExperiment)
import get_initialized from "get initialized" /* 504 */;
import ApexUnitUtils from "ApexUnitUtils" /* 1253 */;
import FingerprintUtils from "FingerprintUtils" /* 1254 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import discord_common_apex_ApexExperiment from "discord_common/apex/ApexExperiment" /* 1454 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import size from "module_2" /* 2 */;

const discord_common_apex_ApexExperimentDefault = discord_common_apex_ApexExperiment;

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
  const tmp = discord_common_apex_ApexExperimentDefault;
  return tmp(arg0, ApexExperimentStore, ApexUnitUtils.getUnitId, useUnitId);
};
export const ApexExperiment = discord_common_apex_ApexExperiment.ApexExperiment;
export const getUnitId = ApexUnitUtils.getUnitId;
