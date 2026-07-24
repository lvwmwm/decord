// Module ID: 15324
// Function ID: 116856
// Name: GuildOnboardingHomePage
// Dependencies: [31, 4044, 4333, 4334, 653, 33, 3991, 566, 5606, 11412, 675, 4324, 5048, 15325, 15326, 15331, 15335, 15336, 15339, 5605, 2]
// Exports: default

// Module 15324 (GuildOnboardingHomePage)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { NO_SETTINGS } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function GuildOnboardingHomePage(guildId) {
  guildId = guildId.guildId;
  let dependencyMap;
  let obj = guildId(3991);
  const sharedValue = obj.useSharedValue(-999);
  let obj1 = guildId(566);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getSettings(guildId));
  const tmp3 = stateFromStores(5606)(guildId);
  let tmp4 = !tmp3;
  if (tmp4) {
    let length;
    if (null != stateFromStores) {
      let resourceChannels = stateFromStores.resourceChannels;
      if (null != resourceChannels) {
        length = resourceChannels.length;
      }
    }
    let num2 = 0;
    if (null != length) {
      num2 = length;
    }
    tmp4 = 0 === num2;
  }
  dependencyMap = tmp4;
  const items1 = [guildId, stateFromStores, tmp4];
  const effect = React.useEffect(() => {
    if (stateFromStores === outer1_6) {
      const guildHomeSettings = guildId(_undefined[9]).fetchGuildHomeSettings(guildId);
      const obj2 = guildId(_undefined[9]);
    } else if (null != stateFromStores) {
      const obj = {};
      const obj3 = stateFromStores(_undefined[10]);
      const merged = Object.assign(guildId(_undefined[11]).collectGuildAnalyticsMetadata(guildId));
      const newMemberActions = stateFromStores.newMemberActions;
      let length;
      if (null != newMemberActions) {
        length = newMemberActions.length;
      }
      let num = 0;
      if (null != length) {
        num = length;
      }
      obj["num_member_actions"] = num;
      let completedActions = outer1_7.getCompletedActions(guildId);
      if (null == completedActions) {
        completedActions = {};
      }
      obj["num_member_actions_completed"] = Object.keys(completedActions).length;
      const resourceChannels = stateFromStores.resourceChannels;
      let length1;
      if (null != resourceChannels) {
        length1 = resourceChannels.length;
      }
      let num2 = 0;
      if (null != length1) {
        num2 = length1;
      }
      obj["num_resource_channels"] = num2;
      obj3.track(outer1_8.SERVER_GUIDE_VIEWED, obj);
      const obj5 = guildId(_undefined[11]);
    }
  }, items1);
  const items2 = [guildId, tmp4, stateFromStores];
  const effect1 = React.useEffect(() => {
    let tmp = _undefined;
    if (_undefined) {
      tmp = stateFromStores !== outer1_6;
    }
    if (tmp) {
      const result = stateFromStores(_undefined[12]).escapeToDefaultChannel(guildId);
      const obj = stateFromStores(_undefined[12]);
    }
  }, items2);
  if (tmp4) {
    return null;
  } else {
    obj = { guildId, scrollValue: sharedValue };
    obj = { guildId, hideDescription: tmp3 };
    const items3 = [callback(stateFromStores(15326), obj), ];
    if (tmp3) {
      obj1 = {};
      let obj2 = { guildId };
      const items4 = [callback(stateFromStores(15331), obj2), , ];
      let obj3 = { guildId };
      items4[1] = callback(stateFromStores(15335), obj3);
      const obj4 = { guildId };
      items4[2] = callback(stateFromStores(15336), obj4);
      obj1.children = items4;
      let tmp17 = callback2(closure_10, obj1);
    } else {
      let obj5 = { guildId };
      tmp17 = callback(stateFromStores(15339), obj5);
    }
    items3[1] = tmp17;
    obj.children = items3;
    callback2(stateFromStores(15325), obj);
    const tmp12 = stateFromStores(15325);
    const tmp9 = callback2;
  }
}
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default function GuildOnboardingHomePageGuard(guildId) {
  guildId = guildId.guildId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = guildId(canSeeOnboardingHome[7]).useStateFromStores(items, () => outer1_4.hasLoadedExperiments);
  let obj = guildId(canSeeOnboardingHome[7]);
  canSeeOnboardingHome = guildId(canSeeOnboardingHome[19]).useCanSeeOnboardingHome(guildId);
  const items1 = [guildId, stateFromStores, canSeeOnboardingHome];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!canSeeOnboardingHome) {
        const result = stateFromStores(canSeeOnboardingHome[12]).escapeToDefaultChannel(guildId);
        const obj = stateFromStores(canSeeOnboardingHome[12]);
      }
    }
  }, items1);
  return callback(GuildOnboardingHomePage, { guildId });
};
