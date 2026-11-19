// Module ID: 4823
// Function ID: 4824
// Name: HexagonCampaignExperiment
// Dependencies: [1452, 4820, 2]
// Exports: getIsHexagonCampaignEnabled, getIsHexagonCampaignQuestHomeRedirectEnabled, useIsHexagonCampaignEnabled, useIsHexagonCampaignQuestHomeHeaderEnabled, useIsHexagonCampaignQuestHomeRedirectEnabled, useShouldShowHexagonCampaignIntroCard

// Module 4823 (HexagonCampaignExperiment)
import HexagonCampaignUtils from "HexagonCampaignUtils" /* 4820 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-09-hexagon-campaign-client", defaultConfig: { enabled: false, questHomeRedirect: false }, variations: { 0: { enabled: false, questHomeRedirect: false }, 1: { enabled: true, questHomeRedirect: true }, 2: { enabled: true, questHomeRedirect: false } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
let result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignExperiment.tsx");

export const HexagonCampaignClientExperiment = apexExperiment;
export function useIsHexagonCampaignEnabled(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
}
export function getIsHexagonCampaignEnabled(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
}
export function useIsHexagonCampaignQuestHomeRedirectEnabled(location) {
  const obj = { location };
  const config = apexExperiment.useConfig(obj);
  let tmp2 = config.enabled && config.questHomeRedirect;
  if (tmp2) {
    const obj2 = HexagonCampaignUtils;
    tmp2 = !obj2.isHexagonCampaignTakeoverOver();
  }
  return tmp2;
}
export function getIsHexagonCampaignQuestHomeRedirectEnabled(location) {
  const obj = HexagonCampaignUtils;
  if (obj.isHexagonCampaignTakeoverOver()) {
    return false;
  } else {
    const obj2 = { location };
    const config = apexExperiment.getConfig(obj2);
    return config.enabled && config.questHomeRedirect;
  }
}
export function useIsHexagonCampaignQuestHomeHeaderEnabled(HexagonCampaignQuestHomeHeader) {
  const obj = { location: HexagonCampaignQuestHomeHeader };
  let enabled = apexExperiment.useConfig(obj).enabled;
  if (enabled) {
    const obj2 = HexagonCampaignUtils;
    enabled = !obj2.isHexagonCampaignTakeoverOver();
  }
  return enabled;
}
export function useShouldShowHexagonCampaignIntroCard(stateFromStores) {
  const obj = HexagonCampaignUtils;
  let result = obj.isHexagonCampaignHero(stateFromStores);
  if (result) {
    const tmpResult = HexagonCampaignUtils;
    result = !tmpResult.isHexagonCampaignTakeoverOver();
  }
  return result;
}
