// Module ID: 14911
// Function ID: 112313
// Name: ProgressBar
// Dependencies: []
// Exports: NewMemberActionsProgress

// Module 14911 (ProgressBar)
function ProgressBar(percent) {
  const tmp = callback3();
  let obj = { style: tmp.progressBackground };
  obj = {};
  const items = [tmp.progressForeground, ];
  obj = { width: "" + percent.percent + "%" };
  items[1] = obj;
  obj.style = items;
  obj.colors = [null, null];
  obj.useAngle = true;
  obj.angle = -90;
  obj.children = callback(importDefault(dependencyMap[10]), obj);
  return callback(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const StaticChannelRoute = arg1(dependencyMap[5]).StaticChannelRoute;
const GuildMemberFlags = arg1(dependencyMap[6]).GuildMemberFlags;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { container: { padding: 16 }, horizontal: { "Null": 7, "Null": 370 }, spaceBetween: { justifyContent: "space-between" }, spaceBelow: { marginBottom: 8 } };
obj = { borderRadius: importDefault(dependencyMap[9]).radii.round, height: 8, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_NORMAL };
obj.progressBackground = obj;
const tmp2 = arg1(dependencyMap[7]);
obj.progressForeground = { backgroundColor: importDefault(dependencyMap[9]).colors.STATUS_POSITIVE_BACKGROUND, borderRadius: importDefault(dependencyMap[9]).radii.round, height: 8 };
let closure_12 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.STATUS_POSITIVE_BACKGROUND, borderRadius: importDefault(dependencyMap[9]).radii.round, height: 8 };
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx");

export const NewMemberActionsProgress = function NewMemberActionsProgress(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => newMemberActions.getNewMemberActions(guildId), items1);
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[11]);
  const items2 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => completedActions.getCompletedActions(guildId));
  const dependencyMap = stateFromStores1;
  let obj2 = arg1(dependencyMap[11]);
  const items3 = [closure_5];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => selfMember.getSelfMember(guildId));
  let length;
  if (null != stateFromStores) {
    length = stateFromStores.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  const items4 = [stateFromStores1, stateFromStores];
  const memo = React.useMemo(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        let closure_0 = 0;
        const item = stateFromStores.forEach((arg0) => {
          if (null != closure_2[arg0.channelId]) {
            closure_0 = closure_0 + 1;
          }
        });
        return closure_0;
      }
    }
    return 0;
  }, items4);
  let obj3 = arg1(dependencyMap[12]);
  let flags;
  if (null != stateFromStores2) {
    flags = stateFromStores2.flags;
  }
  let num2 = 0;
  if (null != flags) {
    num2 = flags;
  }
  let tmp7 = null;
  if (!obj3.hasFlag(num2, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
    tmp7 = null;
    if (0 !== num) {
      tmp7 = null;
      if (memo + num !== 0) {
        obj = {
          animated: true,
          hasHandledScroll: true,
          style: tmp.container,
          onPress() {
                  guildId(stateFromStores1[14]).transitionTo(constants.GUILD_HOME);
                }
        };
        obj = {};
        const items5 = [, , ];
        ({ horizontal: arr7[0], spaceBetween: arr7[1], spaceBelow: arr7[2] } = tmp);
        obj.style = items5;
        obj1 = { hasMaxConnections: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000945657790066763, isBoostOnlySubscription: 28104481620574716000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
        const intl = arg1(dependencyMap[16]).intl;
        obj1.children = intl.string(arg1(dependencyMap[16]).t.LhlgY9);
        const items6 = [callback(arg1(dependencyMap[15]).Text, obj1), ];
        obj2 = { style: tmp.horizontal };
        obj3 = { hasMaxConnections: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000945657790066763, isBoostOnlySubscription: 28104481620574716000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, children: memo };
        const items7 = [callback(arg1(dependencyMap[15]).Text, obj3), callback(arg1(dependencyMap[15]).Text, {}), , ];
        const obj4 = { hasMaxConnections: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000945657790066763, isBoostOnlySubscription: 28104481620574716000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, children: num };
        items7[2] = callback(arg1(dependencyMap[15]).Text, obj4);
        const obj5 = { size: arg1(dependencyMap[17]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[18]) };
        items7[3] = callback(arg1(dependencyMap[17]).Icon, obj5);
        obj2.children = items7;
        items6[1] = callback2(View, obj2);
        obj.children = items6;
        const items8 = [callback2(View, obj), ];
        const obj6 = { percent: memo / num * 100 + 3 };
        items8[1] = callback(ProgressBar, obj6);
        obj.children = items8;
        tmp7 = callback2(arg1(dependencyMap[13]).PressableOpacity, obj);
      }
    }
  }
  return tmp7;
};
