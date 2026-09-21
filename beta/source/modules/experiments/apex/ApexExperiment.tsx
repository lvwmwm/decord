// Module ID: 1439
// Function ID: 1440
// Name: apex/ApexExperiment
// Dependencies: [32, 502, 1239, 1440, 1258, 1374, 558, 568, 504, 2]
// Exports: default

// Module 1439 (apex/ApexExperiment)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import FingerprintUtils from "FingerprintUtils" /* 1258 */;
import GlobalUtils from "GlobalUtils" /* 1374 */;
import discord_common_apex_ApexExperimentDefault from "discord_common/apex/ApexExperiment" /* 1440 */;
import _slicedToArray from "module_32" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1239 */;

require = fn;
function getUnitId(user, guildId) {
  if ("guild" === user) {
    return guildId.guildId;
  } else if ("user" === user) {
    return AuthenticationStore.getId();
  } else if ("installation" === user) {
    let str2 = FingerprintUtils.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    GlobalUtils.assertNever(user);
  }
}
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, guildId) => {
  const cResult = c.c(4);
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
  const tmpResult = initialize;
  const tmp9 = _slicedToArray(initialize.useStateFromStoresArray(tmp4, tmp5), 2)[1];
  if ("guild" === arg0) {
    return guildId.guildId;
  } else if ("user" === arg0) {
    return tmp8;
  } else if ("installation" === arg0) {
    if (cResult[2] !== tmp9) {
      let str3 = tmp(1258).maybeExtractId(tmp9);
      if (str3 == null) {
        str3 = "";
      }
      cResult[2] = tmp9;
      cResult[3] = str3;
      let tmp11 = str3;
      const tmpResult3 = tmp(1258);
    } else {
      tmp11 = cResult[3];
    }
    return tmp11;
  } else {
    tmp(1374).assertNever(arg0);
  }
  const tmp7 = _slicedToArray(initialize.useStateFromStoresArray(tmp4, tmp5), 2);
}) : ((arg0, guildId) => {
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
    let str3 = tmp(1258).maybeExtractId(tmp5);
    if (str3 == null) {
      str3 = "";
    }
    return str3;
  } else {
    tmp(1374).assertNever(arg0);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(arg0) {
  return discord_common_apex_ApexExperimentDefault(arg0, ApexExperimentStore, getUnitId, closure_7);
};
export const ApexExperiment = fn(1440).ApexExperiment;
export { getUnitId };
