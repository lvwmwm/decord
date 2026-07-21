// Module ID: 10455
// Function ID: 80928
// Name: date
// Dependencies: []
// Exports: useMobileQuestOrbRewardModalCtaPriorityExperiment, useQuestOrbsMultiplierMarketing, useShouldRemoveQuestHomeHero

// Module 10455 (date)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const QuestsExperimentLocations = arg1(dependencyMap[2]).QuestsExperimentLocations;
let obj = arg1(dependencyMap[3]);
const apexExperiment = obj.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
let obj1 = arg1(dependencyMap[3]);
obj = { 844175713: null, 1387159956: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment1 = obj1.createApexExperiment(obj);
let obj3 = arg1(dependencyMap[3]);
obj = { 844175713: null, 1387159956: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = obj3.createApexExperiment(obj);
let obj5 = arg1(dependencyMap[3]);
obj1 = { 844175713: "r", 1387159956: "wzzjk9", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const obj2 = { DEFAULT: 0, [0]: "DEFAULT", AUTO_ENABLE_CAPTIONS: 1, [1]: "AUTO_ENABLE_CAPTIONS", AUTO_UNMUTE: 2, [2]: "AUTO_UNMUTE" };
const apexExperiment3 = obj5.createApexExperiment(obj1);
let obj8 = arg1(dependencyMap[3]);
obj3 = { enabled: false, variant: obj2.DEFAULT };
obj5 = { enabled: true, variant: obj2.AUTO_ENABLE_CAPTIONS };
const apexExperiment4 = obj8.createApexExperiment({ defaultConfig: obj3, variations: { [0]: { enabled: false, variant: obj2.DEFAULT }, [1]: obj5, [2]: { enabled: true, variant: obj2.AUTO_UNMUTE } } });
let obj13 = arg1(dependencyMap[3]);
let closure_5 = obj13.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
let obj14 = arg1(dependencyMap[3]);
const obj7 = { 844175713: "STICKER_PACK_VIEW_ALL", 1387159956: "CHECKBOX_BACKGROUND_DEFAULT", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment5 = obj14.createApexExperiment(obj7);
let obj16 = arg1(dependencyMap[3]);
obj8 = { 844175713: true, 1387159956: true, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const obj9 = { CONTROL: 0, [0]: "CONTROL", EARN_ORBS_PRIMARY: 1, [1]: "EARN_ORBS_PRIMARY", EARN_ORBS_ONLY: 2, [2]: "EARN_ORBS_ONLY" };
const apexExperiment6 = obj16.createApexExperiment(obj8);
let obj19 = arg1(dependencyMap[3]);
obj13 = { enabled: true, variant: obj9.EARN_ORBS_ONLY };
let closure_6 = obj19.createApexExperiment({ defaultConfig: { enabled: false, variant: obj9.CONTROL }, variations: { [0]: { enabled: false, variant: obj9.CONTROL }, [1]: { enabled: true, variant: obj9.EARN_ORBS_PRIMARY }, [2]: obj13 } });
obj14 = { 844175713: "Array", 1387159956: "isArray", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment7 = arg1(dependencyMap[3]).createApexExperiment(obj14);
const obj10 = { enabled: false, variant: obj9.CONTROL };
const obj11 = { enabled: false, variant: obj9.CONTROL };
const obj12 = { enabled: true, variant: obj9.EARN_ORBS_PRIMARY };
const obj25 = arg1(dependencyMap[3]);
const obj4 = { enabled: false, variant: obj2.DEFAULT };
const obj6 = { enabled: true, variant: obj2.AUTO_UNMUTE };
const obj15 = { 844175713: "r", 1387159956: "isArray", defaultConfig: { PATTERN_POSITION_TABLE: false, G15: false, G18: false, G15_MASK: false }, variations: { [0]: { PATTERN_POSITION_TABLE: false, G15: false, G18: false, G15_MASK: false }, [1]: {}, [2]: {}, [3]: { PATTERN_POSITION_TABLE: null, G15: null, G18: null, G15_MASK: null }, [4]: { PATTERN_POSITION_TABLE: "%parseFloat%", G15: "isArray", G18: "script", G15_MASK: "isArray" } } };
const apexExperiment8 = arg1(dependencyMap[3]).createApexExperiment(obj15);
const obj27 = arg1(dependencyMap[3]);
const apexExperiment9 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const obj29 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const date = new Date("2026-07-31T10:00:00-07:00");
const date1 = new Date("2026-08-07T10:00:00-07:00");
let closure_10 = 5 * importDefault(dependencyMap[7]).Millis.MINUTE;
obj16 = { CONTROL: 0, [0]: "CONTROL", NEW_LAYOUT_WITH_SEARCH: 1, [1]: "NEW_LAYOUT_WITH_SEARCH", LARGE_MASK_MARGIN: 2, [2]: "LARGE_MASK_MARGIN", REMOVE_QUEST_TITLE_SUFFIX: 3, [3]: "REMOVE_QUEST_TITLE_SUFFIX", REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER: 4, [4]: "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER" };
const obj30 = arg1(dependencyMap[3]);
const obj17 = { 844175713: null, 1387159956: null, defaultConfig: { enabled: false, variant: obj16.CONTROL } };
obj19 = { enabled: true, variant: obj16.NEW_LAYOUT_WITH_SEARCH };
obj17.variations = { [0]: { enabled: false, variant: obj16.CONTROL }, [1]: obj19, [2]: { enabled: true, variant: obj16.LARGE_MASK_MARGIN }, [3]: { enabled: true, variant: obj16.REMOVE_QUEST_TITLE_SUFFIX }, [4]: { enabled: true, variant: obj16.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER } };
const apexExperiment10 = arg1(dependencyMap[3]).createApexExperiment(obj17);
const obj18 = { enabled: false, variant: obj16.CONTROL };
const obj20 = { enabled: true, variant: obj16.LARGE_MASK_MARGIN };
const obj21 = { enabled: true, variant: obj16.REMOVE_QUEST_TITLE_SUFFIX };
const obj22 = { enabled: true, variant: obj16.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER };
const obj32 = arg1(dependencyMap[3]);
const obj23 = { 844175713: "r", 1387159956: "trusted", defaultConfig: { 9223372036854775807: null, 0: null }, variations: { [0]: { 9223372036854775807: null, 0: null }, [1]: { 9223372036854775807: null, 0: null }, [2]: { 9223372036854775807: null, 0: null } } };
const apexExperiment11 = arg1(dependencyMap[3]).createApexExperiment(obj23);
const obj39 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = apexExperiment;
export const NewVideoQuestProgressBarStylingExperiment = apexExperiment1;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment2;
export const QuestReloadVideoOnObscuredExperiment = apexExperiment3;
export const MutedVideoQuestNewDefaultsVariant = obj2;
export const MutedVideoQuestNewDefaultsExperiment = apexExperiment4;
export const useQuestOrbsMultiplierMarketing = function useQuestOrbsMultiplierMarketing(location) {
  let obj = { location };
  const questOrbMultiplierEligibility = arg1(dependencyMap[4]).useQuestOrbMultiplierEligibility();
  obj = {};
  let enabled = questOrbMultiplierEligibility !== arg1(dependencyMap[5]).QuestOrbMultiplierEligibilityType.INELIGIBLE;
  if (enabled) {
    enabled = questOrbMultiplierEligibility !== arg1(dependencyMap[5]).QuestOrbMultiplierEligibilityType.CREPE;
  }
  if (enabled) {
    enabled = closure_5.useConfig(obj).enabled;
  }
  obj.shouldShowBonusOrbsUX = enabled;
  obj.multiplier = arg1(dependencyMap[6]).QuestOrbsMultiplier.PREMIUM_TIER_2_MULTIPLIER_PERCENTAGE_POINTS / 100;
  return obj;
};
export const VideoQuestPlayerRefactorExperiment = apexExperiment5;
export const ComposedQuestPlayerExperiment = apexExperiment6;
export const MobileQuestOrbRewardModalCtaPriorityVariant = obj9;
export const useMobileQuestOrbRewardModalCtaPriorityExperiment = function useMobileQuestOrbRewardModalCtaPriorityExperiment() {
  return closure_6.useConfig({ location: QuestsExperimentLocations.ORBS_REWARD_MODAL });
};
export const MobileQuestHomeRedDotNotificationExperiment = apexExperiment7;
export const QuestHomeTileRedesignExperiment = apexExperiment8;
export const BountyStaleRefreshQuestHomeExperiment = apexExperiment9;
export const useShouldRemoveQuestHomeHero = function useShouldRemoveQuestHomeHero() {
  const tmp = callback(React.useState(() => new Date()), 2);
  const first = tmp[0];
  let closure_0 = tmp[1];
  const effect = React.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), closure_10);
    return () => clearInterval(closure_0);
  }, []);
  let tmp4 = first >= date;
  if (tmp4) {
    tmp4 = first < date1;
  }
  const obj = {};
  let str = "remove-quest-home-hero-ineligible";
  if (tmp4) {
    str = "remove-quest-home-hero-eligible";
  }
  obj.location = str;
  let enabled = tmp4;
  if (tmp4) {
    enabled = closure_7.useConfig(obj).enabled;
  }
  return enabled;
};
export const QuestHomeLayoutVisualTweakVariant = obj16;
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment10;
export const QuestBarSecondaryCtaExperiment = apexExperiment11;
