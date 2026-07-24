// Module ID: 15392
// Function ID: 117470
// Name: FriendPresence
// Dependencies: [5, 57, 31, 27, 4122, 4217, 3767, 653, 33, 4130, 689, 4126, 3969, 9102, 566, 8568, 1273, 8467, 12485, 15393, 2]

// Module 15392 (FriendPresence)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
const require = arg1;
function FriendPresence(user) {
  let animate;
  let guildId;
  let type;
  user = user.user;
  ({ type, animate, guildId } = user);
  if (type === constants.PENDING_INCOMING) {
    let obj = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: require(3969) /* conceal */.getUserTag(user) };
    let tmp5 = callback(require(4126) /* Text */.Text, obj);
    const obj3 = require(3969) /* conceal */;
  } else {
    obj = { userId: user.id, guildId };
    ({ activityStatusIcon: obj.iconStyle, activityStatusText: obj.textStyle } = tmp);
    obj.emojiSize = 16;
    obj.animate = animate;
    tmp5 = callback(importDefault(9102), obj);
  }
  return tmp5;
}
({ View: closure_6, ActivityIndicator: closure_7 } = get_ActivityIndicator);
({ StatusTypes: closure_11, RelationshipTypes: closure_12 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
let obj = { activityStatusIcon: { width: 14, height: 14 } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, fontWeight: "400" };
obj.activityStatusText = obj;
obj.tag = { marginLeft: 4 };
obj.title = { flexDirection: "row" };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function DMRow(user) {
  let accessibilityActions;
  let onAccessibilityAction;
  let premiumSince;
  let stateFromStores1;
  user = user.user;
  ({ nickname: stateFromStores1, premiumSince } = user);
  const isOwner = user.isOwner;
  const type = user.type;
  const guildId = user.guildId;
  const onPress = user.onPress;
  let trailing = user.trailing;
  let name;
  ({ accessibilityActions, onAccessibilityAction } = user);
  const tmp = callback2();
  let closure_7 = tmp;
  let tmp2 = type(guildId.useState(false), 2);
  let closure_8 = tmp2[1];
  let obj = user(premiumSince[14]);
  let items = [isMobileOnline];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isMobileOnline: isMobileOnline.isMobileOnline(user.id), isVROnline: isMobileOnline.isVROnline(user.id), status: isMobileOnline.getStatus(user.id) }));
  isMobileOnline = stateFromStoresObject.isMobileOnline;
  const isVROnline = stateFromStoresObject.isVROnline;
  const status = stateFromStoresObject.status;
  const items1 = [closure_8];
  const stateFromStores = user(premiumSince[14]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj2 = user(premiumSince[14]);
  const items2 = [isVROnline];
  const fn = () => {
    if (null != stateFromStores1) {
      let nickname = stateFromStores1;
    } else {
      nickname = isVROnline.getNickname(user.id);
    }
    return nickname;
  };
  stateFromStores1 = user(premiumSince[14]).useStateFromStores(items2, fn);
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [onPress, user.id];
  name = stateFromStores1;
  const callback = guildId.useCallback(isOwner(fn), items3);
  if (null == stateFromStores1) {
    name = stateFromStores1(premiumSince[12]).getName(user);
    let obj4 = stateFromStores1(premiumSince[12]);
  }
  const items4 = [, , , , , ];
  ({ title: arr5[0], tag: arr5[1] } = tmp);
  items4[2] = name;
  items4[3] = user;
  items4[4] = isOwner;
  items4[5] = premiumSince;
  const items5 = [user, status, isMobileOnline, isVROnline, guildId];
  const memo = guildId.useMemo(() => {
    let obj = { style: tmp.title };
    obj = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
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
  const memo1 = guildId.useMemo(() => {
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
  const memo2 = guildId.useMemo(() => {
    let obj = stateFromStores1(premiumSince[12]);
    const userTag = obj.getUserTag(user);
    if (null != userTag) {
      if (!user.isProvisional) {
        obj = { variant: "text-sm/medium", color: "text-muted", children: userTag };
        let tmp6 = name(user(premiumSince[11]).Text, obj);
      }
      return tmp6;
    }
    let tmp7 = null;
    if (null != type) {
      obj = { user, guildId, type, animate: !stateFromStores };
      tmp7 = name(outer1_16, obj);
    }
    tmp6 = tmp7;
  }, items6);
  obj = { label: memo, subLabel: memo2, icon: memo1, onPress: callback };
  if (tmp2[0]) {
    trailing = name(closure_7, {});
  }
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return name(user(premiumSince[19]).SearchListRow, obj);
});
const result = require("result").fileFinishedImporting("modules/search/native/components/list/rows/DMRow.tsx");

export default memoResult;
