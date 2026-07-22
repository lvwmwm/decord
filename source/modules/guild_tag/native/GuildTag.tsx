// Module ID: 8570
// Function ID: 68098
// Name: memoResult1
// Dependencies: []

// Module 8570 (memoResult1)
const importAllResult = importAll(dependencyMap[0]);
({ Image: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const GuildTagBadgeSize = arg1(dependencyMap[3]).GuildTagBadgeSize;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, Fragment: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_STRONG };
obj.container = obj;
obj1 = {};
const tmp3 = arg1(dependencyMap[4]);
let num = 16;
if (obj6.isAndroid()) {
  num = 14;
}
obj1.lineHeight = num;
const obj6 = arg1(dependencyMap[7]);
let str;
if (obj7.isAndroid()) {
  str = "center";
}
obj1.textAlignVertical = str;
obj1.overflow = "hidden";
obj.tag = obj1;
let closure_11 = obj1.createStyles(obj);
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
    const intl = arg1(dependencyMap[8]).intl;
    obj.alt = intl.string(arg1(dependencyMap[8]).t.HHYPgJ);
    obj = { width: size, height: size };
    obj.style = obj;
    tmp2 = callback(closure_4, obj);
  }
  return tmp2;
});
const memoResult1 = importAllResult.memo((textVariant) => {
  let badgeSize;
  let containerStyles;
  let disabled;
  let onPress;
  ({ containerStyles, guildTag: closure_0, guildBadge: closure_1, onPress, disabled } = textVariant);
  if (disabled === undefined) {
    disabled = false;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/semibold";
  }
  const dependencyMap = str;
  let str2 = textVariant.textColor;
  if (str2 === undefined) {
    str2 = "text-default";
  }
  ({ textStyle: closure_4, badgeSize } = textVariant);
  if (badgeSize === undefined) {
    badgeSize = GuildTagBadgeSize.SIZE_12;
  }
  let closure_6;
  function renderContent() {
    let obj = {};
    if (null != closure_1) {
      if ("string" === typeof closure_1) {
        obj = {};
        obj = { uri: closure_1 };
        obj.source = obj;
        obj.size = badgeSize;
        let tmp4 = callback2(closure_12, obj);
      }
      const items = [tmp4, ];
      const obj1 = { variant: "string", color: str2, lineClamp: 1, ellipsizeMode: "tail" };
      const items1 = [tmp2.tag, closure_4];
      obj1.style = items1;
      obj1.children = callback;
      items[1] = callback2(callback("string"[9]).Text, obj1);
      obj.children = items;
      return tmp(tmp2, obj);
    }
    tmp4 = closure_1;
  }
  const tmp2 = callback2();
  closure_6 = tmp2;
  if (null != onPress) {
    let obj = { onPress };
    const items = [tmp2.container, containerStyles];
    obj.style = items;
    obj.disabled = disabled;
    obj.accessibilityRole = "button";
    obj = { disabled };
    obj.accessibilityState = obj;
    obj.children = renderContent();
    let tmp5 = callback(arg1(dependencyMap[10]).PressableHighlight, obj);
  } else {
    obj = {};
    const items1 = [tmp2.container, containerStyles];
    obj.style = items1;
    obj.children = renderContent();
    tmp5 = callback(badgeSize, obj);
  }
  return tmp5;
});
const obj7 = arg1(dependencyMap[7]);
const memoResult2 = importAllResult.memo((primaryGuild) => {
  let guildId;
  let tag;
  primaryGuild = primaryGuild.primaryGuild;
  const arg1 = primaryGuild;
  const userId = primaryGuild.userId;
  const importDefault = userId;
  let flag = primaryGuild.disabledTooltip;
  if (flag === undefined) {
    flag = false;
  }
  let SIZE_12 = primaryGuild.badgeSize;
  if (SIZE_12 === undefined) {
    SIZE_12 = GuildTagBadgeSize.SIZE_12;
  }
  let obj = { marginTop: -24, padding: null, paddingRight: 1, alignSelf: "Malaysia" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(primaryGuild, obj);
  let dependencyMap;
  const items = [closure_6];
  const items1 = [userId, primaryGuild];
  const stateFromStoresObject = arg1(dependencyMap[11]).useStateFromStoresObject(items, () => {
    const user = user.getUser(userId);
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
  dependencyMap = guildId;
  [][0] = guildId;
  let tmp7Result = null;
  if (null != guildId) {
    tmp7Result = null;
    if (null != tag) {
      obj = { guildTag: tag, guildBadge: arg1(dependencyMap[12]).getGuildTagBadgeUrl(guildId, stateFromStoresObject.badge, SIZE_12), badgeSize: SIZE_12 };
      const merged1 = Object.assign(merged);
      let tmp14;
      if (!flag) {
        tmp14 = tmp5;
      }
      obj["onPress"] = tmp14;
      tmp7Result = closure_8(memoResult1, obj);
      const obj4 = arg1(dependencyMap[12]);
      const tmp7 = closure_8;
      const tmp8 = memoResult1;
    }
  }
  return tmp7Result;
});
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_tag/native/GuildTag.tsx");

export default memoResult2;
export const GuildTagBadge = memoResult;
export const BaseGuildTagChiplet = memoResult1;
