// Module ID: 17271
// Function ID: 17272
// Name: DMRow
// Dependencies: [5, 32, 19, 17, 5080, 5107, 4719, 1085, 21, 5091, 587, 558, 576, 4923, 5087, 10205, 504, 8750, 1200, 8606, 13717, 17257, 2]

// Module 17271 (DMRow)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import UserUtils from "UserUtils" /* 4923 */;
import Text_Text from "Text/Text" /* 5087 */;
import AssetRegistryDefault from "AssetRegistry" /* 8606 */;
import BotTagDefault from "BotTag" /* 8750 */;
import ActivityStatusDefault from "ActivityStatus" /* 10205 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13717 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import PresenceStore from "PresenceStore" /* 5107 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const UserUtilsDefault = UserUtils;
let c1, c4, closure_2;

let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
({ View: metroRequire, ActivityIndicator: metroImportDefault } = react_native);
({ StatusTypes: unpackModuleId, RelationshipTypes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { activityStatusIcon: { width: 14, height: 14 }, activityStatusText: obj2, tag: { marginLeft: 4 }, title: { flexDirection: "row" } };
obj2 = { color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, fontWeight: "400" };
let closure_15 = createStyles.createStyles(obj);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function FriendPresence(type) {
  let animate;
  let guildId;
  let tmp5;
  let user;
  const obj = react2;
  const cResult = obj.c(10);
  ({ user, animate, guildId } = type);
  type = type.type;
  const tmp4 = closure_15();
  if (type === constants2.PENDING_INCOMING) {
    let tmp9;
    let tmp11;
    if (cResult[0] !== user) {
      const tmpResult = UserUtils;
      const userTag = tmpResult.getUserTag(user);
      cResult[0] = user;
      cResult[1] = userTag;
      tmp9 = userTag;
    } else {
      tmp9 = cResult[1];
    }
    if (cResult[2] !== tmp9) {
      const obj3 = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: tmp9 };
      const tmp13 = map1(Text_Text.Text, obj3);
      cResult[2] = tmp9;
      cResult[3] = tmp13;
      tmp11 = tmp13;
    } else {
      tmp11 = cResult[3];
    }
    tmp5 = tmp11;
  } else {
    if (cResult[4] === animate) {
      if (cResult[5] === guildId) {
        if (cResult[6] === tmp4.activityStatusIcon) {
          if (cResult[7] === tmp4.activityStatusText) {
            if (cResult[8] === user.id) {
              tmp5 = cResult[9];
            }
          }
        }
      }
    }
    const obj4 = { userId: user.id, guildId, iconStyle: null, textStyle: null, emojiSize: 16, animate };
    ({ activityStatusIcon: obj2.iconStyle, activityStatusText: obj2.textStyle } = tmp4);
    const tmp8 = map1(ActivityStatusDefault, obj4);
    cResult[4] = animate;
    cResult[5] = guildId;
    cResult[6] = tmp4.activityStatusIcon;
    cResult[7] = tmp4.activityStatusText;
    cResult[8] = user.id;
    cResult[9] = tmp8;
    tmp5 = tmp8;
  }
  return tmp5;
}) : (function FriendPresence(user) {
  let animate;
  let guildId;
  let obj3;
  let tmp5;
  let type;
  user = user.user;
  ({ type, animate, guildId } = user);
  const tmp = closure_15();
  if (type === constants2.PENDING_INCOMING) {
    const obj2 = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: obj3.getUserTag(user) };
    const Text = Text_Text.Text;
    obj3 = UserUtils;
    tmp5 = map1(Text, obj2);
  } else {
    const obj = { userId: user.id, guildId, iconStyle: null, textStyle: null, emojiSize: 16, animate };
    ({ activityStatusIcon: obj.iconStyle, activityStatusText: obj.textStyle } = tmp);
    tmp5 = map1(ActivityStatusDefault, obj);
  }
  return tmp5;
});
const memoResult = react.memo(function DMRow(user) {
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
  let isMobileOnline;
  ({ accessibilityActions, onAccessibilityAction } = user);
  let tmp = closure_15();
  const title = tmp;
  let obj = guildId;
  let tmp2 = type(guildId.useState(false), 2);
  const useReducedMotion = tmp2[1];
  let tmp5 = premiumSince;
  const first = tmp2[0];
  let tmp4 = user;
  let obj2 = user(premiumSince[16]);
  let items = [isMobileOnline];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id), status: PresenceStore.getStatus(user.id) };
    return obj;
  });
  isMobileOnline = stateFromStoresObject.isMobileOnline;
  const isVROnline = stateFromStoresObject.isVROnline;
  const status = stateFromStoresObject.status;
  let obj3 = user(premiumSince[16]);
  const items1 = [useReducedMotion];
  const stateFromStores = obj3.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj4 = user(premiumSince[16]);
  const items2 = [isVROnline];
  stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let nickname = stateFromStores1;
    if (stateFromStores1 == null) {
      nickname = RelationshipStore.getNickname(user.id);
    }
    return nickname;
  });
  const items3 = [onPress, user.id];
  let name = stateFromStores1;
  const callback = guildId.useCallback(isOwner(function*(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            useReducedMotion(true);
            c3 = 1;
            c1 = 2;
            c4 = 1;
            const obj4 = { value: onPress(user.id), done: false };
            return obj4;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_8(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        closure_2 = tmp20;
        if (0 === c3) {
          c4 = 3;
          throw tmp20;
        } else {
          c1 = 1;
        }
      }
    }
  }), items3);
  if (stateFromStores1 == null) {
    let obj5 = stateFromStores1(tmp5[13]);
    name = obj5.getName(user);
  }
  const items4 = [, , , , , ];
  ({ title: arr5[0], tag: arr5[1] } = tmp);
  items4[2] = name;
  items4[3] = user;
  items4[4] = isOwner;
  items4[5] = premiumSince;
  const items5 = [user, status, isMobileOnline, isVROnline, guildId];
  const memo = obj.useMemo(() => {
    let Icon;
    let Icon2;
    let Types;
    let isSystemUserResult;
    let items;
    let obj6;
    let obj8;
    const obj = { style: title.title, children: items };
    items = [, , , ];
    const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    items[0] = map1(Text_Text.Text, obj2);
    let bot = user.bot;
    const tmp = authStore3;
    if (bot) {
      const obj4 = { style: title.tag, verified: user.isVerifiedBot(), type: isSystemUserResult ? Types.SYSTEM_DM : Types.BOT };
      const tmp8 = BotTagDefault;
      isSystemUserResult = user.isSystemUser();
      Types = BotTagDefault.Types;
      bot = tmp4(tmp8, obj4);
    }
    items[1] = bot;
    let tmp4Result = isOwner;
    if (tmp4Result) {
      const obj5 = { style: title.tag, children: map1(Icon, obj6) };
      obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault, disableColor: true };
      Icon = tmp5(1200).Icon;
      tmp4Result = tmp4(tmp2, obj5);
    }
    items[2] = tmp4Result;
    let tmp4Result2 = null != premiumSince;
    if (tmp4Result2) {
      const obj7 = { style: title.tag, children: map1(Icon2, obj8) };
      obj8 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault2, disableColor: true };
      Icon2 = tmp5(1200).Icon;
      tmp4Result2 = tmp4(tmp2, obj7);
    }
    items[3] = tmp4Result2;
    return tmp(metroRequire, obj);
  }, items4);
  const items6 = [user, guildId, type, stateFromStores];
  const memo1 = obj.useMemo(() => {
    let tmp4;
    let tmp5;
    const obj = { user, guildId, status: tmp5, isMobileOnline, isVROnline, size: native.AvatarSizes.LARGE_48, avatarDecoration: tmp4.avatarDecoration, autoStatusCutout: true };
    tmp5 = null;
    const Avatar = native.Avatar;
    const tmp = map1;
    tmp4 = user;
    if (unpackModuleId.OFFLINE !== status) {
      tmp5 = status;
    }
    return tmp(Avatar, obj);
  }, items5);
  const memo2 = obj.useMemo(() => {
    const obj = UserUtilsDefault;
    const userTag = obj.getUserTag(user);
    if (null != userTag) {
      let tmp6;
      if (!user.isProvisional) {
        const obj2 = { variant: "text-sm/medium", color: "text-muted", children: userTag };
        tmp6 = map1(Text_Text.Text, obj2);
      }
      return tmp6;
    }
    let tmp8 = null;
    if (null != type) {
      const obj3 = { user, guildId, type: tmp7, animate: !stateFromStores };
      tmp8 = map1(closure_16, obj3);
    }
    tmp6 = tmp8;
  }, items6);
  let obj6 = { label: memo, subLabel: memo2, icon: memo1, onPress: callback, trailing, accessibilityActions, onAccessibilityAction };
  const SearchListRow = tmp4(tmp5[21]).SearchListRow;
  if (first) {
    trailing = tmp15(title, {});
  }
  return name(SearchListRow, obj6);
});
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/DMRow.tsx");

export default memoResult;
