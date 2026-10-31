// Module ID: 18619
// Function ID: 18620
// Name: GuildOnboardingHomePage
// Dependencies: [19, 5238, 7398, 8340, 1072, 21, 5095, 504, 7400, 13818, 1252, 5760, 6902, 18620, 18621, 18625, 18629, 18630, 18633, 7397, 2]
// Exports: default

// Module 18619 (GuildOnboardingHomePage)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5760 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import GuildOnboardingHomeSettingsStore2 from "GuildOnboardingHomeSettingsStore" /* 7398 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 13818 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 5238 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8340 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const GuildOnboardingHomeSettingsStore = GuildOnboardingHomeSettingsStore2;
let dependencyMap;

let c10;
let c9;
let unpackModuleId;
function GuildOnboardingHomePage(guildId) {
  let closure_2;
  let items3;
  let items4;
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  let obj = guildId(5095);
  const sharedValue = obj.useSharedValue(-999);
  let obj2 = guildId(504);
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getSettings(guildId));
  const tmp5 = stateFromStores(7400)(guildId);
  let tmp6 = !tmp5;
  if (tmp6) {
    let num;
    if (stateFromStores != null) {
      let resourceChannels = stateFromStores.resourceChannels;
      if (resourceChannels != null) {
        num = resourceChannels.length;
      }
    }
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    tmp6 = 0 === num;
  }
  dependencyMap = tmp6;
  const items1 = [guildId, stateFromStores, tmp6];
  const effect = react.useEffect(() => {
    let completedActions;
    let keys;
    let num;
    let num2;
    if (stateFromStores === NO_SETTINGS) {
      const obj2 = GuildOnboardingHomeActionCreators;
      const guildHomeSettings = obj2.fetchGuildHomeSettings(guildId);
    } else if (null != stateFromStores) {
      const obj = { num_member_actions: num, num_member_actions_completed: keys(completedActions).length, num_resource_channels: num2 };
      const track = AnalyticsUtilsDefault.track;
      const SERVER_GUIDE_VIEWED = AnalyticEvents.SERVER_GUIDE_VIEWED;
      AnalyticsUtilsDefault;
      const obj4 = AppAnalyticsUtils;
      const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = tmp.newMemberActions;
      num = undefined;
      const tmp15 = guildId;
      if (newMemberActions != null) {
        num = newMemberActions.length;
      }
      if (num == null) {
        num = 0;
      }
      const _Object = Object;
      keys = Object.keys;
      completedActions = GuildOnboardingMemberActionStore.getCompletedActions(tmp15);
      if (completedActions == null) {
        completedActions = {};
      }
      const resourceChannels = tmp.resourceChannels;
      num2 = undefined;
      if (resourceChannels != null) {
        num2 = resourceChannels.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      track(SERVER_GUIDE_VIEWED, obj);
    }
  }, items1);
  const items2 = [guildId, tmp6, stateFromStores];
  const effect1 = react.useEffect(() => {
    const tmp = closure_2 && stateFromStores !== NO_SETTINGS;
    if (tmp) {
      const obj = GuildActionCreatorsDefault;
      const result = obj.escapeToDefaultChannel(guildId);
    }
  }, items2);
  let tmp11Result2 = null;
  if (!tmp6) {
    let tmp13Result;
    let obj4 = { guildId, hideDescription: tmp5 };
    const obj3 = { guildId, scrollValue: sharedValue, children: items3 };
    items3 = [, ];
    const tmp4Result = stateFromStores(18620);
    items3[0] = closure_9(stateFromStores(18621), obj4);
    if (tmp5) {
      let tmp15 = closure_10;
      const obj5 = { children: items4 };
      const obj6 = { guildId };
      items4 = [tmp13(tmp4(18625), obj6), , ];
      const obj7 = { guildId };
      items4[1] = closure_9(stateFromStores(18629), obj7);
      const obj8 = { guildId };
      items4[2] = closure_9(stateFromStores(18630), obj8);
      tmp13Result = tmp11(closure_10, obj5);
    } else {
      const obj9 = { guildId };
      tmp13Result = tmp13(tmp4(18633), obj9);
    }
    items3[1] = tmp13Result;
    tmp11Result2 = tmp11(tmp4Result, obj3);
  }
  return tmp11Result2;
}
const NO_SETTINGS = GuildOnboardingHomeSettingsStore2.NO_SETTINGS;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default function GuildOnboardingHomePageGuard(guildId) {
  let hasLoadedExperiments;
  guildId = guildId.guildId;
  let canSeeOnboardingHome;
  let obj = guildId(canSeeOnboardingHome[7]);
  const items = [ExperimentStore];
  const stateFromStores = obj.useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const obj2 = guildId(canSeeOnboardingHome[19]);
  canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(guildId);
  const items1 = [guildId, stateFromStores, canSeeOnboardingHome];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores;
    if (tmp) {
      const tmp2 = canSeeOnboardingHome;
      if (!tmp2) {
        const obj = GuildActionCreatorsDefault;
        const result = obj.escapeToDefaultChannel(guildId);
      }
    }
  }, items1);
  return closure_9(GuildOnboardingHomePage, { guildId });
};
