// Module ID: 11070
// Function ID: 11071
// Name: PinotExperiment
// Dependencies: [1258, 1453, 558, 576, 504, 2]
// Exports: isPinotAdminEnabled, isPinotMemberEnabled

// Module 11070 (PinotExperiment)
import react from "react" /* 576 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import ApexExperiment_mod from "ApexExperiment" /* 1453 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-10-pinot-admin", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj2 = { name: "2026-10-pinot-member", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-10-pinot-member-notice", kind: "guild", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotAdminEnabled(arg0, location) {
  const obj = react;
  const cResult = obj.c(3);
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  if (cResult[0] === location) {
    let tmp2;
    if (cResult[1] === str) {
      tmp2 = cResult[2];
    }
    const tmp4 = null != arg0 && apexExperiment.useConfig(tmp2).enabled;
    return tmp4;
  }
  const obj2 = { guildId: str, location };
  cResult[0] = location;
  cResult[1] = str;
  cResult[2] = obj2;
  tmp2 = obj2;
}) : (function useIsPinotAdminEnabled(arg0, location) {
  let str = arg0;
  const useConfig = apexExperiment.useConfig;
  if (arg0 == null) {
    str = "";
  }
  const obj = { guildId: str, location };
  const tmp2 = null != arg0 && useConfig(obj).enabled;
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotMemberNoticeEnabled(arg0, location) {
  const obj = react;
  const cResult = obj.c(3);
  let str = arg0;
  if (arg0 == null) {
    str = "";
  }
  if (cResult[0] === location) {
    let tmp2;
    if (cResult[1] === str) {
      tmp2 = cResult[2];
    }
    const tmp4 = null != arg0 && apexExperiment2.useConfig(tmp2).enabled;
    return tmp4;
  }
  const obj2 = { guildId: str, location };
  cResult[0] = location;
  cResult[1] = str;
  cResult[2] = obj2;
  tmp2 = obj2;
}) : (function useIsPinotMemberNoticeEnabled(arg0, location) {
  let str = arg0;
  const useConfig = apexExperiment2.useConfig;
  if (arg0 == null) {
    str = "";
  }
  const obj = { guildId: str, location };
  const tmp2 = null != arg0 && useConfig(obj).enabled;
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotMemberEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return apexExperiment1.useConfig(tmp2).enabled;
}) : (function useIsPinotMemberEnabled(location) {
  const obj = { location };
  return apexExperiment1.useConfig(obj).enabled;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotMemberEnabledWithoutExposure(_location) {
  let first;
  let tmp6;
  let tmp7;
  _require = _location;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApexExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== _location) {
    const fn = function u() {
      const obj = { location: _location };
      return apexExperiment1.getConfig(obj, { autoTrackExposure: false }).enabled;
    };
    const items1 = [_location];
    cResult[1] = _location;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useIsPinotMemberEnabledWithoutExposure(_location) {
  _require = _location;
  let obj = require("get initialized");
  const items = [ApexExperimentStore];
  const items1 = [_location];
  return obj.useStateFromStores(items, () => {
    const obj = { location: _location };
    return apexExperiment1.getConfig(obj, { autoTrackExposure: false }).enabled;
  }, items1);
});
const result = size.fileFinishedImporting("modules/pinot/PinotExperiment.tsx");

export const PinotAdminExperiment = apexExperiment;
export const PinotMemberExperiment = apexExperiment1;
export const PinotMemberNoticeExperiment = apexExperiment2;
export const useIsPinotAdminEnabled = tmp5;
export function isPinotAdminEnabled(guildId, location) {
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
}
export const useIsPinotMemberNoticeEnabled = tmp6;
export const useIsPinotMemberEnabled = tmp7;
export function isPinotMemberEnabled(location, arg1) {
  const obj = { location };
  return apexExperiment1.getConfig(obj, arg1).enabled;
}
export const useIsPinotMemberEnabledWithoutExposure = tmp8;
