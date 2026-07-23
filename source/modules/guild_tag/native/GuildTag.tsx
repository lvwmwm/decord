// Module ID: 8577
// Function ID: 68138
// Name: memoResult1
// Dependencies: [31, 27, 1849, 7632, 33, 4130, 689, 477, 1212, 4126, 4660, 566, 7845, 4098, 8578, 1934, 2]

// Module 8577 (memoResult1)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildTagBadgeSize } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "_isNativeReflectConstruct";

let closure_10;
let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
({ Image: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1, columnGap: 2 };
obj.container = obj;
_createForOfIteratorHelperLoose = {};
let num = 16;
if (set.isAndroid()) {
  num = 14;
}
_createForOfIteratorHelperLoose.lineHeight = num;
let str;
if (set.isAndroid()) {
  str = "center";
}
_createForOfIteratorHelperLoose.textAlignVertical = str;
_createForOfIteratorHelperLoose.overflow = "hidden";
obj.tag = _createForOfIteratorHelperLoose;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let size;
  let source;
  ({ source, size } = arg0);
  if (size === undefined) {
    size = GuildTagBadgeSize.SIZE_12;
  }
  let tmp2 = null;
  if (null != source) {
    let obj = { source };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.alt = intl.string(require(1212) /* getSystemLocale */.t.HHYPgJ);
    obj = { width: size, height: size };
    obj.style = obj;
    tmp2 = callback(closure_4, obj);
  }
  return tmp2;
});
const memoResult1 = importAllResult.memo((textVariant) => {
  let badgeSize;
  let closure_4;
  let containerStyles;
  let disabled;
  let importDefault;
  let onPress;
  let require;
  ({ containerStyles, guildTag: require, guildBadge: importDefault, onPress, disabled } = textVariant);
  if (disabled === undefined) {
    disabled = false;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/semibold";
  }
  let str2 = textVariant.textColor;
  if (str2 === undefined) {
    str2 = "text-default";
  }
  ({ textStyle: closure_4, badgeSize } = textVariant);
  if (badgeSize === undefined) {
    badgeSize = GuildTagBadgeSize.SIZE_12;
  }
  let c6;
  function renderContent() {
    let obj = {};
    if (null != closure_1) {
      if ("string" === typeof closure_1) {
        obj = {};
        obj = { uri: closure_1 };
        obj.source = obj;
        obj.size = badgeSize;
        let tmp4 = outer1_8(outer1_12, obj);
      }
      const items = [tmp4, ];
      const obj1 = { variant: "string", color: str2, lineClamp: 1, ellipsizeMode: "tail" };
      const items1 = [_undefined.tag, closure_4];
      obj1.style = items1;
      obj1.children = closure_0;
      items[1] = outer1_8(outer1_0("string"[9]).Text, obj1);
      obj.children = items;
      return tmp(tmp2, obj);
    }
    tmp4 = closure_1;
  }
  const tmp2 = callback2();
  c6 = tmp2;
  if (null != onPress) {
    let obj = { onPress };
    let items = [tmp2.container, containerStyles];
    obj.style = items;
    obj.disabled = disabled;
    obj.accessibilityRole = "button";
    obj = { disabled };
    obj.accessibilityState = obj;
    obj.children = renderContent();
    let tmp5 = callback(require(str[10]).PressableHighlight, obj);
  } else {
    obj = {};
    let items1 = [tmp2.container, containerStyles];
    obj.style = items1;
    obj.children = renderContent();
    tmp5 = callback(badgeSize, obj);
  }
  return tmp5;
});
const result = set.fileFinishedImporting("modules/guild_tag/native/GuildTag.tsx");

export default importAllResult.memo((primaryGuild) => {
  let guildId;
  let tag;
  primaryGuild = primaryGuild.primaryGuild;
  const userId = primaryGuild.userId;
  let flag = primaryGuild.disabledTooltip;
  if (flag === undefined) {
    flag = false;
  }
  let SIZE_12 = primaryGuild.badgeSize;
  if (SIZE_12 === undefined) {
    SIZE_12 = GuildTagBadgeSize.SIZE_12;
  }
  let obj = { primaryGuild: 0, userId: 0, disabledTooltip: 0, badgeSize: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(primaryGuild, obj);
  guildId = undefined;
  const items = [_isNativeReflectConstruct];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = primaryGuild(guildId[11]).useStateFromStoresObject(items, () => {
    const user = outer1_6.getUser(userId);
    let primaryGuild;
    if (null != user) {
      primaryGuild = user.primaryGuild;
    }
    let obj = primaryGuild(guildId[12]);
    const userPrimaryGuild = obj.getUserPrimaryGuild(primaryGuild);
    obj = { tag: userPrimaryGuild.tag, badge: userPrimaryGuild.badge, guildId: userPrimaryGuild.guildId };
    return obj;
  }, items1);
  ({ tag, guildId } = stateFromStoresObject);
  [][0] = guildId;
  let tmp7Result = null;
  if (null != guildId) {
    tmp7Result = null;
    if (null != tag) {
      obj = { guildTag: tag, guildBadge: primaryGuild(guildId[12]).getGuildTagBadgeUrl(guildId, stateFromStoresObject.badge, SIZE_12), badgeSize: SIZE_12 };
      const merged1 = Object.assign(merged);
      let tmp14;
      if (!flag) {
        tmp14 = tmp5;
      }
      obj["onPress"] = tmp14;
      tmp7Result = closure_8(memoResult1, obj);
      const obj4 = primaryGuild(guildId[12]);
      const tmp7 = closure_8;
      const tmp8 = memoResult1;
    }
  }
  return tmp7Result;
});
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memoResult1;
