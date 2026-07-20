// Module ID: 15144
// Function ID: 114264
// Name: GuildOnboardingHomePage
// Dependencies: []
// Exports: default

// Module 15144 (GuildOnboardingHomePage)
function GuildOnboardingHomePage(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  let dependencyMap;
  let obj = arg1(dependencyMap[6]);
  const sharedValue = obj.useSharedValue(-999);
  let obj1 = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => settings.getSettings(guildId));
  const importDefault = stateFromStores;
  const tmp3 = importDefault(dependencyMap[8])(guildId);
  let tmp4 = !tmp3;
  if (tmp4) {
    let length;
    if (null != stateFromStores) {
      const resourceChannels = stateFromStores.resourceChannels;
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
    if (stateFromStores === closure_6) {
      const guildHomeSettings = guildId(tmp4[9]).fetchGuildHomeSettings(guildId);
      const obj2 = guildId(tmp4[9]);
    } else if (null != stateFromStores) {
      const obj = {};
      const obj3 = stateFromStores(tmp4[10]);
      const merged = Object.assign(guildId(tmp4[11]).collectGuildAnalyticsMetadata(guildId));
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
      let completedActions = completedActions.getCompletedActions(guildId);
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
      obj3.track(constants.SERVER_GUIDE_VIEWED, obj);
      const obj5 = guildId(tmp4[11]);
    }
  }, items1);
  const items2 = [guildId, tmp4, stateFromStores];
  const effect1 = React.useEffect(() => {
    let tmp = tmp4;
    if (tmp4) {
      tmp = stateFromStores !== closure_6;
    }
    if (tmp) {
      const result = stateFromStores(stateFromStores[12]).escapeToDefaultChannel(guildId);
      const obj = stateFromStores(stateFromStores[12]);
    }
  }, items2);
  if (tmp4) {
    return null;
  } else {
    obj = { guildId, scrollValue: sharedValue };
    obj = { guildId, hideDescription: tmp3 };
    const items3 = [callback(importDefault(dependencyMap[14]), obj), ];
    if (tmp3) {
      obj1 = {};
      const obj2 = { guildId };
      const items4 = [callback(importDefault(dependencyMap[15]), obj2), , ];
      const obj3 = { guildId };
      items4[1] = callback(importDefault(dependencyMap[16]), obj3);
      const obj4 = { guildId };
      items4[2] = callback(importDefault(dependencyMap[17]), obj4);
      obj1.children = items4;
      let tmp17 = callback2(closure_10, obj1);
    } else {
      const obj5 = { guildId };
      tmp17 = callback(importDefault(dependencyMap[18]), obj5);
    }
    items3[1] = tmp17;
    obj.children = items3;
    callback2(importDefault(dependencyMap[13]), obj);
    const tmp12 = importDefault(dependencyMap[13]);
    const tmp9 = callback2;
  }
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const NO_SETTINGS = arg1(dependencyMap[2]).NO_SETTINGS;
let closure_7 = importDefault(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx");

export default function GuildOnboardingHomePageGuard(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => hasLoadedExperiments.hasLoadedExperiments);
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[7]);
  const canSeeOnboardingHome = arg1(dependencyMap[19]).useCanSeeOnboardingHome(guildId);
  const dependencyMap = canSeeOnboardingHome;
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
