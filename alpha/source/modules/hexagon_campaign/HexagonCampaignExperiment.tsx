// Module ID: 5033
// Function ID: 5034
// Name: HexagonCampaignExperiment
// Dependencies: [1452, 558, 576, 5031, 2]
// Exports: getIsHexagonCampaignEnabled, useIsHexagonCampaignQuestHomeHeaderEnabled

// Module 5033 (HexagonCampaignExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const HexagonCampaignUtils = tmp(5031);
let obj = { kind: "user", name: "2026-09-hexagon-campaign-client", defaultConfig: { enabled: false, questHomeRedirect: false }, variations: { 0: { enabled: false, questHomeRedirect: false }, 1: { enabled: true, questHomeRedirect: true }, 2: { enabled: true, questHomeRedirect: false } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsHexagonCampaignEnabled(location) {
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
  return apexExperiment.useConfig(tmp2).enabled;
}) : (function useIsHexagonCampaignEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
});
let closure_3 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsHexagonCampaignQuestHomeRedirectEnabled(location) {
  let tmp4;
  const obj = react;
  const cResult = obj.c(5);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const config = apexExperiment.useConfig(tmp4);
  if (cResult[2] === config.enabled) {
    let tmp6;
    if (cResult[3] === config.questHomeRedirect) {
      tmp6 = cResult[4];
    }
    return tmp6;
  }
  let tmp7 = config.enabled && config.questHomeRedirect;
  if (tmp7) {
    const tmpResult = HexagonCampaignUtils;
    tmp7 = !tmpResult.isHexagonCampaignTakeoverOver();
  }
  cResult[2] = config.enabled;
  cResult[3] = config.questHomeRedirect;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function useIsHexagonCampaignQuestHomeRedirectEnabled(location) {
  const obj = { location };
  const config = apexExperiment.useConfig(obj);
  let tmp2 = config.enabled && config.questHomeRedirect;
  if (tmp2) {
    const obj2 = HexagonCampaignUtils;
    tmp2 = !obj2.isHexagonCampaignTakeoverOver();
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignExperiment.tsx");

export const HexagonCampaignClientExperiment = apexExperiment;
export const useIsHexagonCampaignEnabled = tmp3;
export const getIsHexagonCampaignEnabled = function getIsHexagonCampaignEnabled(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
};
export const useIsHexagonCampaignQuestHomeRedirectEnabled = tmp4;
export const useIsHexagonCampaignQuestHomeHeaderEnabled = function useIsHexagonCampaignQuestHomeHeaderEnabled(HexagonCampaignQuestHomeHeader) {
  let tmp = closure_3(HexagonCampaignQuestHomeHeader);
  if (tmp) {
    const obj = HexagonCampaignUtils;
    tmp = !obj.isHexagonCampaignTakeoverOver();
  }
  return tmp;
};
