// Module ID: 10456
// Function ID: 80941
// Name: date
// Dependencies: []
// Exports: useMobileQuestOrbRewardModalCtaPriorityExperiment, useQuestOrbsMultiplierMarketing, useShouldRemoveQuestHomeHero

// Module 10456 (date)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const QuestsExperimentLocations = arg1(dependencyMap[2]).QuestsExperimentLocations;
let obj = arg1(dependencyMap[3]);
obj = { y: -21905553586439330000, DateToSystemTimezoneSetter: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009150645822286791, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = obj.createApexExperiment(obj);
let obj2 = arg1(dependencyMap[3]);
obj = { y: -1353646079, DateToSystemTimezoneSetter: 3175222, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment1 = obj2.createApexExperiment(obj);
let obj4 = arg1(dependencyMap[3]);
const obj1 = { y: 48, DateToSystemTimezoneSetter: 8, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment2 = obj4.createApexExperiment(obj1);
let obj6 = arg1(dependencyMap[3]);
obj2 = { DEFAULT: 0, [0]: "DEFAULT", AUTO_ENABLE_CAPTIONS: 1, [1]: "AUTO_ENABLE_CAPTIONS", AUTO_UNMUTE: 2, [2]: "AUTO_UNMUTE" };
const apexExperiment3 = obj6.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
let obj8 = arg1(dependencyMap[3]);
const obj3 = { y: "track", DateToSystemTimezoneSetter: "skuId", defaultConfig: { enabled: false, variant: obj2.DEFAULT } };
obj4 = { enabled: false, variant: obj2.DEFAULT };
obj6 = { enabled: true, variant: obj2.AUTO_UNMUTE };
obj3.variations = { [0]: obj4, [1]: { enabled: true, variant: obj2.AUTO_ENABLE_CAPTIONS }, [2]: obj6 };
const apexExperiment4 = obj8.createApexExperiment(obj3);
let obj13 = arg1(dependencyMap[3]);
const obj7 = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_5 = obj13.createApexExperiment(obj7);
let obj15 = arg1(dependencyMap[3]);
obj8 = { y: "r", DateToSystemTimezoneSetter: "downgraded", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment5 = obj15.createApexExperiment(obj8);
let obj17 = arg1(dependencyMap[3]);
const obj9 = { CONTROL: 0, [0]: "CONTROL", EARN_ORBS_PRIMARY: 1, [1]: "EARN_ORBS_PRIMARY", EARN_ORBS_ONLY: 2, [2]: "EARN_ORBS_ONLY" };
const apexExperiment6 = obj17.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
let obj19 = arg1(dependencyMap[3]);
const obj10 = { y: "useShouldUseAltGateway", DateToSystemTimezoneSetter: "accessibilityLabelCalendarFormat", defaultConfig: { enabled: false, variant: obj9.CONTROL } };
obj13 = { enabled: true, variant: obj9.EARN_ORBS_ONLY };
obj10.variations = { [0]: { enabled: false, variant: obj9.CONTROL }, [1]: { enabled: true, variant: obj9.EARN_ORBS_PRIMARY }, [2]: obj13 };
let closure_6 = obj19.createApexExperiment(obj10);
const obj14 = { y: -571146238, DateToSystemTimezoneSetter: 1090584578, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment7 = arg1(dependencyMap[3]).createApexExperiment(obj14);
const obj11 = { enabled: false, variant: obj9.CONTROL };
const obj12 = { enabled: true, variant: obj9.EARN_ORBS_PRIMARY };
const obj25 = arg1(dependencyMap[3]);
const obj5 = { enabled: true, variant: obj2.AUTO_ENABLE_CAPTIONS };
const apexExperiment8 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: { "Bool(true)": false, "Bool(true)": null, "Bool(true)": false, "Bool(true)": false }, variations: { [0]: { "Bool(true)": false, "Bool(true)": null, "Bool(true)": false, "Bool(true)": false }, [1]: { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null }, [2]: {}, [3]: { "Bool(true)": false, "Bool(true)": false, "Bool(true)": false, "Bool(true)": false }, [4]: {} } });
const obj27 = arg1(dependencyMap[3]);
obj15 = { y: "must be a valid timestamp or number of milliseconds", DateToSystemTimezoneSetter: "must be a valid timestamp or number of seconds", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment9 = arg1(dependencyMap[3]).createApexExperiment(obj15);
const obj28 = arg1(dependencyMap[3]);
const obj16 = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_7 = arg1(dependencyMap[3]).createApexExperiment(obj16);
const date = new Date("2026-07-31T10:00:00-07:00");
const date1 = new Date("2026-08-07T10:00:00-07:00");
let closure_10 = 5 * importDefault(dependencyMap[7]).Millis.MINUTE;
obj17 = { CONTROL: 0, [0]: "CONTROL", NEW_LAYOUT_WITH_SEARCH: 1, [1]: "NEW_LAYOUT_WITH_SEARCH", LARGE_MASK_MARGIN: 2, [2]: "LARGE_MASK_MARGIN", REMOVE_QUEST_TITLE_SUFFIX: 3, [3]: "REMOVE_QUEST_TITLE_SUFFIX", REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER: 4, [4]: "REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER" };
const obj30 = arg1(dependencyMap[3]);
const obj18 = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false, variant: obj17.CONTROL } };
obj19 = { enabled: false, variant: obj17.CONTROL };
obj18.variations = { [0]: obj19, [1]: { enabled: true, variant: obj17.NEW_LAYOUT_WITH_SEARCH }, [2]: { enabled: true, variant: obj17.LARGE_MASK_MARGIN }, [3]: { enabled: true, variant: obj17.REMOVE_QUEST_TITLE_SUFFIX }, [4]: { enabled: true, variant: obj17.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER } };
const apexExperiment10 = arg1(dependencyMap[3]).createApexExperiment(obj18);
const obj20 = { enabled: true, variant: obj17.NEW_LAYOUT_WITH_SEARCH };
const obj21 = { enabled: true, variant: obj17.LARGE_MASK_MARGIN };
const obj22 = { enabled: true, variant: obj17.REMOVE_QUEST_TITLE_SUFFIX };
const obj23 = { enabled: true, variant: obj17.REPLACE_QUEST_NAME_WITH_GAME_PUBLISHER };
const obj33 = arg1(dependencyMap[3]);
const apexExperiment11 = arg1(dependencyMap[3]).createApexExperiment({ defaultConfig: {}, variations: { [0]: {}, [1]: {}, [2]: {} } });
const obj40 = arg1(dependencyMap[3]);
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
export const QuestHomeLayoutVisualTweakVariant = obj17;
export const QuestHomeLayoutVisualTweaksExperiment = apexExperiment10;
export const QuestBarSecondaryCtaExperiment = apexExperiment11;
