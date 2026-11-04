// Module ID: 9295
// Function ID: 9296
// Name: GuildTag
// Dependencies: [19, 17, 1383, 8393, 21, 5014, 575, 1375, 5717, 1113, 5624, 6980, 504, 8736, 5258, 9296, 1994, 2]

// Module 9295 (GuildTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import GuildTagConstants from "GuildTagConstants" /* 8393 */;
import GuildTagUtils from "GuildTagUtils" /* 8736 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import PlatformUtils_mod from "PlatformUtils" /* 1375 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let str;
const View = react_native.View;
let GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, tag: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 4, paddingHorizontal: 4, paddingVertical: 1, columnGap: 2 };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj3 = { lineHeight: num, textAlignVertical: str, overflow: "hidden" };
PlatformUtils = PlatformUtils_mod;
str = undefined;
if (PlatformUtils.isAndroid()) {
  str = "center";
}
let closure_10 = createStyles(obj);
const memoResult = react.memo(function GuildTagBadge(arg0) {
  let intl;
  let size1;
  let source;
  ({ source, size } = arg0);
  if (size === undefined) {
    size = GuildTagBadgeSize.SIZE_12;
  }
  let tmp2 = null;
  if (null != source) {
    const obj = { source, accessibilityLabel: intl.string(intl2.t.HHYPgJ), style: size1 };
    const tmp6 = FastImageDefault;
    intl = intl2.intl;
    size1 = { width: size, height: size };
    tmp2 = metroImportDefault(tmp6, obj);
  }
  return tmp2;
});
const unpackModuleId = memoResult;
const memoResult1 = react.memo(function BaseGuildTagChiplet(textVariant) {
  let badgeSize;
  let children;
  let containerStyles;
  let disabled;
  let items;
  let items1;
  let obj3;
  let onPress;
  let tag;
  let tmp5;
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
  ({ textStyle: View, badgeSize } = textVariant);
  if (badgeSize === undefined) {
    let tmp = GuildTagBadgeSize;
    badgeSize = GuildTagBadgeSize.SIZE_12;
  }
  function renderContent() {
    let items;
    let items1;
    let obj3;
    let tmp4 = importDefault;
    const tmp = React4;
    const tmp2 = metroImportAll;
    if (null != importDefault) {
      tmp4 = tmp3;
      if (typeof importDefault === "string") {
        const obj2 = { source: obj3, size: badgeSize };
        obj3 = { uri: importDefault };
        tmp4 = metroImportDefault(unpackModuleId, obj2);
      }
    }
    const obj = { children: items };
    items = [tmp4, ];
    const obj4 = { variant: str, color: str2, lineClamp: 1, ellipsizeMode: "tail", style: items1, children: require };
    items1 = [tag.tag, View];
    items[1] = metroImportDefault(Text_Text.Text, obj4);
    return tmp(tmp2, obj);
  }
  let tmp2 = closure_10();
  GuildTagBadgeSize = tmp2;
  if (null != onPress) {
    let obj2 = { onPress, style: items, disabled, accessibilityRole: "button", accessibilityState: obj3, children: renderContent() };
    items = [tmp2.container, containerStyles];
    obj3 = { disabled };
    const PressableHighlight = require("Pressables").PressableHighlight;
    tmp5 = closure_7(PressableHighlight, obj2);
  } else {
    const tmp3 = closure_7;
    let tmp4 = View;
    let obj = { style: items1, children: renderContent() };
    items1 = [tmp2.container, containerStyles];
    tmp5 = closure_7(View, obj);
  }
  return tmp5;
});
const memoResult2 = react.memo(function GuildTagChiplet(primaryGuild) {
  let guildId;
  let tag;
  let tmp13;
  let tmp3Result;
  let tmp6;
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
  const merged = Object.assign(primaryGuild, Object.assign({ primaryGuild: 0, userId: 0, disabledTooltip: 0, badgeSize: 0 }));
  guildId = undefined;
  const tmp4 = guildId;
  let obj = primaryGuild(guildId[12]);
  const items = [UserStore];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const user = UserStore.getUser(userId);
    primaryGuild = undefined;
    if (user != null) {
      primaryGuild = user.primaryGuild;
    }
    const obj = GuildTagUtils;
    const userPrimaryGuild = obj.getUserPrimaryGuild(primaryGuild);
    return { tag: userPrimaryGuild.tag, badge: userPrimaryGuild.badge, guildId: userPrimaryGuild.guildId };
  }, items1);
  ({ tag, guildId } = stateFromStoresObject);
  [][0] = guildId;
  const badge = stateFromStoresObject.badge;
  let tmp8Result = null;
  const tmp3 = primaryGuild;
  if (null != guildId) {
    tmp8Result = null;
    if (null != tag) {
      const obj2 = { guildTag: tag, guildBadge: tmp3Result.getGuildTagBadgeUrl(guildId, badge, SIZE_12), badgeSize: SIZE_12, onPress: tmp13 };
      tmp3Result = tmp3(tmp4[13]);
      const merged1 = Object.assign(merged);
      tmp13 = undefined;
      const tmp8 = closure_7;
      const tmp9 = memoResult1;
      if (!flag) {
        tmp13 = tmp6;
      }
      tmp8Result = tmp8(tmp9, obj2);
    }
  }
  return tmp8Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_tag/native/GuildTag.tsx");

export default memoResult2;
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memoResult1;
