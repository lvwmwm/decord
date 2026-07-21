// Module ID: 10455
// Function ID: 80917
// Name: date
// Dependencies: []
// Exports: useMobileQuestOrbRewardModalCtaPriorityExperiment, useQuestOrbsMultiplierMarketing, useShouldRemoveQuestHomeHero

// Module 10455 (date)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const QuestsExperimentLocations = arg1(dependencyMap[2]).QuestsExperimentLocations;
let obj = arg1(dependencyMap[3]);
obj = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = obj.createApexExperiment(obj);
let obj2 = arg1(dependencyMap[3]);
obj = { 9223372036854775807: -215780689457756750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0: 19504263653139370000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment1 = obj2.createApexExperiment(obj);
let obj4 = arg1(dependencyMap[3]);
const obj1 = { 9223372036854775807: "Array", 0: "_maybeSaveSession", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = obj4.createApexExperiment(obj1);
let obj6 = arg1(dependencyMap[3]);
obj2 = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const obj3 = { DEFAULT: 0, [0]: "DEFAULT", AUTO_ENABLE_CAPTIONS: 1, [1]: "AUTO_ENABLE_CAPTIONS", AUTO_UNMUTE: 2, [2]: "AUTO_UNMUTE" };
const apexExperiment3 = obj6.createApexExperiment(obj2);
let obj9 = arg1(dependencyMap[3]);
obj4 = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false, variant: obj3.DEFAULT } };
obj6 = { enabled: true, variant: obj3.AUTO_ENABLE_CAPTIONS };
obj4.variations = { [0]: { enabled: false, variant: obj3.DEFAULT }, [1]: obj6, [2]: { enabled: true, variant: obj3.AUTO_UNMUTE } };
const apexExperiment4 = obj9.createApexExperiment(obj4);
let obj14 = arg1(dependencyMap[3]);
const obj8 = { 9223372036854775807: "must be a number of milliseconds or valid date string", 0: "must be a string with one of the following formats {{format}}", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_5 = obj14.createApexExperiment(obj8);
let obj16 = arg1(dependencyMap[3]);
const apexExperiment5 = obj16.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
let obj17 = arg1(dependencyMap[3]);
obj9 = { 9223372036854775807: "shopBlocks", 0: "dist", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const obj10 = { CONTROL: 0, [0]: "CONTROL", EARN_ORBS_PRIMARY: 1, [1]: "EARN_ORBS_PRIMARY", EARN_ORBS_ONLY: 2, [2]: "EARN_ORBS_ONLY" };
const apexExperiment6 = obj17.createApexExperiment(obj9);
let obj20 = arg1(dependencyMap[3]);
const obj11 = { 9223372036854775807: true, 0: true, defaultConfig: { enabled: false, variant: obj10.CONTROL } };
obj14 = { enabled: true, variant: obj10.EARN_ORBS_ONLY };
obj11.variations = { [0]: { enabled: false, variant: obj10.CONTROL }, [1]: { enabled: true, variant: obj10.EARN_ORBS_PRIMARY }, [2]: obj14 };
let closure_6 = obj20.createApexExperiment(obj11);
const obj15 = { 9223372036854775807: true, 0: true, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment7 = arg1(dependencyMap[3]).createApexExperiment(obj15);
const obj12 = { enabled: false, variant: obj10.CONTROL };
const obj13 = { enabled: true, variant: obj10.EARN_ORBS_PRIMARY };
const obj26 = arg1(dependencyMap[3]);
const obj5 = { enabled: false, variant: obj3.DEFAULT };
const obj7 = { enabled: true, variant: obj3.AUTO_UNMUTE };
const apexExperiment8 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const obj28 = arg1(dependencyMap[3]);
const apexExperiment9 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: {}, variations: { [0]: {}, [1]: {}, [2]: {}, [3]: { -867029884: "<string:138477570>", 1627682562: "<string:16777801>", -1942138450: "<string:35807810>", 1554667108: "<string:18157568>" }, [4]: { -867029884: "<string:1375602070>", 1627682562: "<string:4150368988>", -1942138450: "<string:1339649>", 1554667108: "<string:3275816960>" } } });
const obj29 = arg1(dependencyMap[3]);
const apexExperiment10 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const obj30 = arg1(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } });
const date = new Date("2026-07-31T10:00:00-07:00");
const date1 = new Date("2026-08-07T10:00:00-07:00");
let closure_10 = 5 * importDefault(dependencyMap[7]).Millis.MINUTE;
obj16 = { CONTROL: 0, [0]: "CONTROL", NEW_LAYOUT_WITH_SEARCH: 1, [1]: "NEW_LAYOUT_WITH_SEARCH", LARGE_MASK_MARGIN: 2, [2]: "LARGE_MASK_MARGIN", REMOVE_QUEST_TITLE_SUFFIX: 3, [3]: "REMOVE_QUEST_TITLE_SUFFIX", REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER: 4, [4]: "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER" };
const obj31 = arg1(dependencyMap[3]);
obj17 = { enabled: false, variant: obj16.CONTROL };
obj20 = { enabled: true, variant: obj16.LARGE_MASK_MARGIN };
const apexExperiment11 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: obj17, variations: { [0]: { enabled: false, variant: obj16.CONTROL }, [1]: { enabled: true, variant: obj16.NEW_LAYOUT_WITH_SEARCH }, [2]: obj20, [3]: { enabled: true, variant: obj16.REMOVE_QUEST_TITLE_SUFFIX }, [4]: { enabled: true, variant: obj16.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER } } });
const obj18 = { enabled: false, variant: obj16.CONTROL };
const obj19 = { enabled: true, variant: obj16.NEW_LAYOUT_WITH_SEARCH };
const obj21 = { enabled: true, variant: obj16.REMOVE_QUEST_TITLE_SUFFIX };
const obj22 = { enabled: true, variant: obj16.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER };
const obj33 = arg1(dependencyMap[3]);
const obj23 = { 9223372036854775807: null, 0: null, defaultConfig: { test: null, padding: null }, variations: { [0]: { test: null, padding: null }, [1]: { test: true, padding: true }, [2]: { test: null, padding: null } } };
const apexExperiment12 = arg1(dependencyMap[3]).createApexExperiment(obj23);
const obj40 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/quests/experiments/index.tsx");

export const VideoEndCardV2Experiment = apexExperiment;
export const NewVideoQuestProgressBarStylingExperiment = apexExperiment1;
export const AppStoreBottomSheetOverlayFeatureGate = apexExperiment2;
export const QuestReloadVideoOnObscuredExperiment = apexExperiment3;
export const MutedVideoQuestNewDefaultsVariant = obj3;
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
export const MobileQuestOrbRewardModalCtaPriorityVariant = obj10;
export const useMobileQuestOrbRewardModalCtaPriorityExperiment = function useMobileQuestOrbRewardModalCtaPriorityExperiment() {
  return closure_6.useConfig({ location: QuestsExperimentLocations.ORBS_REWARD_MODAL });
};
export const MobileQuestHomeRedDotNotificationExperiment = apexExperiment7;
export const QuestHeartbeatExecutableFingerprintExperiment = apexExperiment8;
export const QuestHomeTileRedesignExperiment = apexExperiment9;
export const BountyStaleRefreshQuestHomeExperiment = apexExperiment10;
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
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment11;
export const QuestBarSecondaryCtaExperiment = apexExperiment12;
