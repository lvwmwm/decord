// Module ID: 15221
// Function ID: 114935
// Name: FriendPresence
// Dependencies: []

// Module 15221 (FriendPresence)
function FriendPresence(user) {
  let animate;
  let guildId;
  let type;
  user = user.user;
  ({ type, animate, guildId } = user);
  if (type === constants.PENDING_INCOMING) {
    let obj = { "Null": true, "Null": 15.1, "Null": 242, children: arg1(dependencyMap[12]).getUserTag(user) };
    let tmp5 = callback3(arg1(dependencyMap[11]).Text, obj);
    const obj3 = arg1(dependencyMap[12]);
  } else {
    obj = { userId: user.id, guildId };
    ({ activityStatusIcon: obj.iconStyle, activityStatusText: obj.textStyle } = tmp);
    obj.emojiSize = 16;
    obj.animate = animate;
    tmp5 = callback3(importDefault(dependencyMap[13]), obj);
  }
  return tmp5;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, ActivityIndicator: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[3]);
({ StatusTypes: closure_11, RelationshipTypes: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[8]));
const tmp4 = arg1(dependencyMap[8]);
let obj = { activityStatusIcon: { "Null": false, "Null": false } };
obj = { color: importDefault(dependencyMap[10]).colors.TEXT_SUBTLE };
obj.activityStatusText = obj;
obj.tag = { marginLeft: 4 };
obj.title = { flexDirection: "row" };
let closure_15 = arg1(dependencyMap[9]).createStyles(obj);
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function DMRow(user) {
  let accessibilityActions;
  let onAccessibilityAction;
  let premiumSince;
  user = user.user;
  const arg1 = user;
  ({ nickname: closure_1, premiumSince } = user);
  const dependencyMap = premiumSince;
  const isOwner = user.isOwner;
  let callback = isOwner;
  const type = user.type;
  const callback2 = type;
  const guildId = user.guildId;
  const onPress = user.onPress;
  let trailing = user.trailing;
  let name;
  ({ accessibilityActions, onAccessibilityAction } = user);
  const tmp = callback4();
  const tmp2 = callback2(guildId.useState(false), 2);
  let closure_8 = tmp2[1];
  let obj = arg1(dependencyMap[14]);
  const items = [closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isMobileOnline: isMobileOnline.isMobileOnline(user.id), isVROnline: isMobileOnline.isVROnline(user.id), status: isMobileOnline.getStatus(user.id) }));
  const isMobileOnline = stateFromStoresObject.isMobileOnline;
  closure_9 = isMobileOnline;
  const isVROnline = stateFromStoresObject.isVROnline;
  let closure_10 = isVROnline;
  const status = stateFromStoresObject.status;
  const items1 = [closure_8];
  const stateFromStores = arg1(dependencyMap[14]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const obj2 = arg1(dependencyMap[14]);
  const items2 = [closure_10];
  const fn = () => {
    if (null != stateFromStores1) {
      let nickname = stateFromStores1;
    } else {
      nickname = isVROnline.getNickname(user.id);
    }
    return nickname;
  };
  const stateFromStores1 = arg1(dependencyMap[14]).useStateFromStores(items2, fn);
  const importDefault = stateFromStores1;
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [onPress, user.id];
  name = stateFromStores1;
  callback = importAllResult.useCallback(callback(fn), items3);
  if (null == stateFromStores1) {
    name = importDefault(dependencyMap[12]).getName(user);
    const obj4 = importDefault(dependencyMap[12]);
  }
  const items4 = [, , , , , ];
  ({ title: arr5[0], tag: arr5[1] } = tmp);
  items4[2] = name;
  items4[3] = user;
  items4[4] = isOwner;
  items4[5] = premiumSince;
  const items5 = [user, status, isMobileOnline, isVROnline, guildId];
  const memo = importAllResult.useMemo(() => {
    let obj = { style: tmp.title };
    obj = { "Null": true, "Null": 15.1, "Null": 253, children: name };
    const items = [name(user(premiumSince[11]).Text, obj), , , ];
    const bot = user.bot;
    if (!bot) {
      items[1] = bot;
      let tmp13 = isOwner;
      if (isOwner) {
        obj = { style: tmp.tag };
        const obj1 = { size: user(premiumSince[16]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(premiumSince[17]), disableColor: true };
        obj.children = name(user(premiumSince[16]).Icon, obj1);
        tmp13 = name(onPress, obj);
      }
      items[2] = tmp13;
      let tmp23 = null != premiumSince;
      if (tmp23) {
        const obj2 = { style: tmp.tag };
        const obj3 = { size: user(premiumSince[16]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(premiumSince[18]), disableColor: true };
        obj2.children = name(user(premiumSince[16]).Icon, obj3);
        tmp23 = name(onPress, obj2);
      }
      items[3] = tmp23;
      obj.children = items;
      return tmp(onPress, obj);
    } else {
      const obj4 = { style: tmp.tag, verified: user.isVerifiedBot() };
      const tmp3 = name;
      const tmp6 = stateFromStores1(premiumSince[15]);
      const Types = stateFromStores1(premiumSince[15]).Types;
      obj4.type = user.isSystemUser() ? Types.SYSTEM_DM : Types.BOT;
      tmp3(tmp6, obj4);
      const isSystemUserResult = user.isSystemUser();
    }
  }, items4);
  const items6 = [user, guildId, type, stateFromStores];
  const memo1 = importAllResult.useMemo(() => {
    const obj = { user, guildId };
    let tmp2 = null;
    if (status.OFFLINE !== status) {
      tmp2 = status;
    }
    obj.status = tmp2;
    obj.isMobileOnline = isMobileOnline;
    obj.isVROnline = isVROnline;
    obj.size = user(premiumSince[16]).AvatarSizes.LARGE_48;
    obj.avatarDecoration = user.avatarDecoration;
    obj.autoStatusCutout = true;
    return name(user(premiumSince[16]).Avatar, obj);
  }, items5);
  const memo2 = importAllResult.useMemo(() => {
    let obj = stateFromStores1(premiumSince[12]);
    const userTag = obj.getUserTag(user);
    if (null != userTag) {
      if (!user.isProvisional) {
        obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", children: userTag };
        let tmp6 = name(user(premiumSince[11]).Text, obj);
      }
      return tmp6;
    }
    let tmp7 = null;
    if (null != type) {
      obj = { user, guildId, type, animate: !stateFromStores };
      tmp7 = name(closure_16, obj);
    }
    tmp6 = tmp7;
  }, items6);
  obj = { label: memo, subLabel: memo2, icon: memo1, onPress: callback };
  if (tmp2[0]) {
    trailing = name(tmp, {});
  }
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return name(arg1(dependencyMap[19]).SearchListRow, obj);
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/search/native/components/list/rows/DMRow.tsx");

export default memoResult;
