// Module ID: 1441
// Function ID: 1442
// Name: apex/ApexExperiment
// Dependencies: [32, 502, 1246, 1442, 1265, 1375, 558, 576, 504, 2]
// Exports: default

// Module 1441 (apex/ApexExperiment)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import FingerprintUtils from "FingerprintUtils" /* 1265 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import discord_common_apex_ApexExperiment from "discord_common/apex/ApexExperiment" /* 1442 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1246 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, guildId) => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthenticationStore];
    const fn = function l() {
      const items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
      return items;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const tmp9 = _slicedToArray(tmpResult.useStateFromStoresArray(tmp4, tmp5), 2)[1];
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp8;
  } else if ("installation" === arg0) {
    let tmp11;
    if (cResult[2] !== tmp9) {
      const tmpResult3 = FingerprintUtils;
      let str3 = tmpResult3.maybeExtractId(tmp9);
      if (str3 == null) {
        str3 = "";
      }
      cResult[2] = tmp9;
      cResult[3] = str3;
      tmp11 = str3;
    } else {
      tmp11 = cResult[3];
    }
    return tmp11;
  } else {
    const tmpResult4 = GlobalUtils;
    tmpResult4.assertNever(arg0);
  }
}) : ((arg0, guildId) => {
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
});
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(arg0) {
  return discord_common_apex_ApexExperimentDefault(arg0, ApexExperimentStore, getUnitId, closure_7);
};
export const ApexExperiment = discord_common_apex_ApexExperiment.ApexExperiment;
export { getUnitId };
