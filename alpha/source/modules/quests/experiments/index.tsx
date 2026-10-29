// Module ID: 9670
// Function ID: 9671
// Name: apexExperiment
// Dependencies: [1453, 558, 576, 9657, 9658, 9671, 2]

// Module 9670 (apexExperiment)
import react from "react" /* 576 */;
import QuestOrbMultiplierHooks from "QuestOrbMultiplierHooks" /* 9657 */;
import QuestOrbMultiplierUtils from "QuestOrbMultiplierUtils" /* 9658 */;
import QuestOrbsMultiplier from "QuestOrbsMultiplier" /* 9671 */;
import ApexExperiment_mod from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj11;
let obj14;
let obj2;
let obj20;
let obj22;
let obj25;
let obj27;
let obj29;
let obj4;
let obj6;
let obj8;
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2025-11-video-end-card-v2", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj3 = { name: "2026-05-app-store-overlay-feature-gate", kind: "user", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = { name: "2026-07-custom-app-store-overlay", kind: "user", defaultConfig: { enabled: false }, variations: obj6 };
obj6 = { 1: null };
obj6[1] = { enabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
ApexExperiment = ApexExperiment_mod;
const obj7 = { name: "2026-07-ios-attribution", kind: "user", defaultConfig: { enabled: false }, variations: obj8 };
obj8 = { 1: null };
obj8[1] = { enabled: true };
const obj9 = { DEFAULT: 0, [0]: "DEFAULT", AUTO_ENABLE_CAPTIONS: 1, [1]: "AUTO_ENABLE_CAPTIONS", AUTO_UNMUTE: 2, [2]: "AUTO_UNMUTE" };
const apexExperiment3 = ApexExperiment.createApexExperiment(obj7);
ApexExperiment = ApexExperiment_mod;
const obj10 = { name: "2026-03-muted-video-quest-new-defaults", kind: "user", defaultConfig: { enabled: false, variant: obj9.DEFAULT }, variations: obj11 };
obj11 = { 0: { enabled: false, variant: obj9.DEFAULT }, 1: { enabled: true, variant: obj9.AUTO_ENABLE_CAPTIONS }, 2: { enabled: true, variant: obj9.AUTO_UNMUTE } };
const apexExperiment4 = ApexExperiment.createApexExperiment(obj10);
ApexExperiment = ApexExperiment_mod;
const obj12 = { name: "2026-04-quests-premium-orb-multiplier-marketing", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj12);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useQuestOrbsMultiplierMarketing(location) {
  let tmp4;
  let tmp7;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const enabled = closure_2.useConfig(tmp4).enabled;
  const tmpResult = QuestOrbMultiplierHooks;
  const questOrbMultiplierEligibility = tmpResult.useQuestOrbMultiplierEligibility();
  const tmp6 = questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE && questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS && enabled;
  if (cResult[2] !== tmp6) {
    const obj3 = { shouldShowBonusOrbsUX: tmp6, multiplier: QuestOrbsMultiplier.QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100 };
    cResult[2] = tmp6;
    cResult[3] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (function useQuestOrbsMultiplierMarketing(location) {
  const obj = { location };
  const enabled = closure_2.useConfig(obj).enabled;
  const obj2 = QuestOrbMultiplierHooks;
  const questOrbMultiplierEligibility = obj2.useQuestOrbMultiplierEligibility();
  const tmp4 = questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.INELIGIBLE && questOrbMultiplierEligibility !== QuestOrbMultiplierUtils.QuestOrbMultiplierEligibilityType.XBOX_GAME_PASS && enabled;
  const obj3 = { shouldShowBonusOrbsUX: tmp4, multiplier: QuestOrbsMultiplier.QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100 };
  return obj3;
});
ApexExperiment = ApexExperiment_mod;
const obj13 = { name: "2026-04-composed-quest-player", kind: "user", defaultConfig: { enabled: false }, variations: obj14 };
obj14 = { 1: null };
obj14[1] = { enabled: true };
const apexExperiment5 = ApexExperiment.createApexExperiment(obj13);
ApexExperiment = ApexExperiment_mod;
const obj15 = { name: "2026-05-quest-home-tile-redesign", kind: "user", defaultConfig: { useNewLayoutWithSearch: false, useNewTile: false, useNewFeaturedTiles: false, ctaOnHover: false }, variations: { 0: { useNewLayoutWithSearch: false, useNewTile: false, useNewFeaturedTiles: false, ctaOnHover: false }, 1: { useNewLayoutWithSearch: true, useNewTile: false, useNewFeaturedTiles: false, ctaOnHover: false }, 2: { useNewLayoutWithSearch: true, useNewTile: true, useNewFeaturedTiles: true, ctaOnHover: true }, 3: { useNewLayoutWithSearch: true, useNewTile: true, useNewFeaturedTiles: false, ctaOnHover: true }, 4: { useNewLayoutWithSearch: true, useNewTile: true, useNewFeaturedTiles: true, ctaOnHover: false } } };
const apexExperiment6 = ApexExperiment.createApexExperiment(obj15);
ApexExperiment = ApexExperiment_mod;
const obj16 = { name: "2026-05-bounty-stale-refresh-quest-home", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment7 = ApexExperiment.createApexExperiment(obj16);
ApexExperiment = ApexExperiment_mod;
const obj18 = { CONTROL: 0, [0]: "CONTROL", NEW_LAYOUT_WITH_SEARCH: 1, [1]: "NEW_LAYOUT_WITH_SEARCH", LARGE_MASK_MARGIN: 2, [2]: "LARGE_MASK_MARGIN", REMOVE_QUEST_TITLE_SUFFIX: 3, [3]: "REMOVE_QUEST_TITLE_SUFFIX", REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER: 4, [4]: "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER" };
const obj17 = { name: "2026-09-mobile-quest-home-sort-priority", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment8 = ApexExperiment.createApexExperiment(obj17);
ApexExperiment = ApexExperiment_mod;
const obj19 = { name: "2026-06-quest-home-layout-visual-tweaks", kind: "user", defaultConfig: { enabled: false, variant: obj18.CONTROL }, variations: obj20 };
obj20 = { 0: { enabled: false, variant: obj18.CONTROL }, 1: { enabled: true, variant: obj18.NEW_LAYOUT_WITH_SEARCH }, 2: { enabled: true, variant: obj18.LARGE_MASK_MARGIN }, 3: { enabled: true, variant: obj18.REMOVE_QUEST_TITLE_SUFFIX }, 4: { enabled: true, variant: obj18.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER } };
const apexExperiment9 = ApexExperiment.createApexExperiment(obj19);
ApexExperiment = ApexExperiment_mod;
const obj21 = { name: "2026-09-quest-mobile-bar-secondary-cta", kind: "user", defaultConfig: { enabled: false }, variations: obj22 };
obj22 = { 1: null };
obj22[1] = { enabled: true };
const obj23 = { DEFAULT: 0, [0]: "DEFAULT", ALL_TIERS: 1, [1]: "ALL_TIERS", TIER_1_VISUALS: 2, [2]: "TIER_1_VISUALS", TIER_2_VISUALS: 3, [3]: "TIER_2_VISUALS", TIER_3_VISUALS: 4, [4]: "TIER_3_VISUALS" };
const apexExperiment10 = ApexExperiment.createApexExperiment(obj21);
ApexExperiment = ApexExperiment_mod;
const obj24 = { name: "2026-09-new-orb-reward-visuals", kind: "user", defaultConfig: { variant: obj23.DEFAULT }, variations: obj25 };
obj25 = { 0: { variant: obj23.DEFAULT }, 1: { variant: obj23.ALL_TIERS }, 2: { variant: obj23.TIER_2_VISUALS }, 3: { variant: obj23.TIER_3_VISUALS }, 4: { variant: obj23.TIER_1_VISUALS } };
const apexExperiment11 = ApexExperiment.createApexExperiment(obj24);
ApexExperiment = ApexExperiment_mod;
const obj26 = { name: "2026-09-mobile-quest-reward-button-to-secondary-button", kind: "user", defaultConfig: { enabled: false }, variations: obj27 };
obj27 = { 1: null };
obj27[1] = { enabled: true };
const apexExperiment12 = ApexExperiment.createApexExperiment(obj26);
ApexExperiment = ApexExperiment_mod;
const obj28 = { name: "2026-10-clickable-hero-banner", kind: "user", defaultConfig: { enabled: false }, variations: obj29 };
obj29 = { 1: null };
obj29[1] = { enabled: true };
const apexExperiment13 = ApexExperiment.createApexExperiment(obj28);
const result = size.fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = apexExperiment;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment1;
export const CustomAppStoreOverlayExperiment = apexExperiment2;
export const IosAttributionFeatureGate = apexExperiment3;
export const MutedVideoQuestNewDefaultsVariant = obj9;
export const MutedVideoQuestNewDefaultsExperiment = apexExperiment4;
export const useQuestOrbsMultiplierMarketing = tmp7;
export const ComposedQuestPlayerExperiment = apexExperiment5;
export const QuestHomeTileRedesignExperiment = apexExperiment6;
export const BountyStaleRefreshQuestHomeExperiment = apexExperiment7;
export const MobileQuestHomeSortPriorityExperiment = apexExperiment8;
export const QuestHomeLayoutVisualTweakVariant = obj18;
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment9;
export const QuestMobileBarSecondaryCtaExperiment = apexExperiment10;
export const QuestOrbTierVariant = obj23;
export const QuestOrbTierExperiment = apexExperiment11;
export const MobileQuestRewardButtonToSecondaryButtonExperiment = apexExperiment12;
export const ClickableHeroBannerExperiment = apexExperiment13;
