// Module ID: 17534
// Function ID: 17535
// Name: PinotExperiment
// Dependencies: [1452, 558, 576, 2]
// Exports: isPinotAdminEnabled, isPinotMemberEnabled

// Module 17534 (PinotExperiment)
import react from "react" /* 576 */;
import ApexExperiment_mod from "ApexExperiment" /* 1452 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotMemberNoticeEnabled(arg0, location) {
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
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPinotMemberEnabled(location) {
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
const result = size.fileFinishedImporting("modules/pinot/PinotExperiment.tsx");

export const PinotAdminExperiment = apexExperiment;
export const PinotMemberExperiment = apexExperiment1;
export const PinotMemberNoticeExperiment = apexExperiment2;
export const useIsPinotAdminEnabled = tmp5;
export const isPinotAdminEnabled = function isPinotAdminEnabled(guildId, location) {
  let enabled = null != guildId;
  if (enabled) {
    const obj = { guildId, location };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
export const useIsPinotMemberNoticeEnabled = tmp6;
export const useIsPinotMemberEnabled = tmp7;
export const isPinotMemberEnabled = function isPinotMemberEnabled(location, arg1) {
  const obj = { location };
  return apexExperiment1.getConfig(obj, arg1).enabled;
};
