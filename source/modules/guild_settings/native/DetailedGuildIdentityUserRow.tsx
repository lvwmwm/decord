// Module ID: 10170
// Function ID: 78580
// Name: memoResult1
// Dependencies: []

// Module 10170 (memoResult1)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = { mainIdentity: {} };
obj = { marginRight: importDefault(dependencyMap[5]).space.PX_4 };
obj.primaryAvatar = obj;
obj1 = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
obj.mainTag = obj1;
let closure_7 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((height) => {
  let guildId;
  let user;
  ({ guildId, user } = height);
  const tmp = callback2();
  let obj = importDefault(dependencyMap[6]);
  let nickname = obj.getNickname(guildId, undefined, user);
  if (null == nickname) {
    let obj1 = importDefault(dependencyMap[7]);
    nickname = obj1.getGlobalName(user);
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
  obj = { style: { height: height.contentHeight } };
  obj = { user, nick: nickname };
  const items = [callback(importDefault(dependencyMap[8]), obj), ];
  if (hasAvatarForGuildResult) {
    obj1 = { style: tmp.mainIdentity };
    let tmp11 = null;
    if (hasAvatarForGuildResult) {
      const obj2 = { size: arg1(dependencyMap[9]).AvatarSizes.SIZE_16, style: tmp.primaryAvatar, user, guildId: undefined };
      tmp11 = callback(arg1(dependencyMap[9]).Avatar, obj2);
    }
    const items1 = [tmp11, ];
    const obj3 = { user, usernameStyle: tmp.mainTag, hideBotTag: true };
    items1[1] = callback(importDefault(dependencyMap[8]), obj3);
    obj1.children = items1;
    let tmp9Result = closure_6(View, obj1);
    const tmp10 = View;
    const tmp9 = closure_6;
  } else {
    tmp9Result = null;
  }
  items[1] = tmp9Result;
  obj.children = items;
  return closure_6(View, obj);
});
const tmp2 = arg1(dependencyMap[3]);
const memoResult1 = importAllResult.memo(function DetailedGuildIdentityUserRow(arrow) {
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let contentHeight;
  let deprecatedFormRow;
  let disabled;
  let end;
  let guildId;
  let leading;
  let onPress;
  let start;
  let subLabel;
  let trailing;
  ({ accessibilityLabel, contentHeight, deprecatedFormRow } = arrow);
  if (deprecatedFormRow === undefined) {
    deprecatedFormRow = false;
  }
  ({ disabled, guildId, leading, onPress, trailing, userId: closure_0, subLabel, accessibilityRole, accessibilityState } = arrow);
  ({ end, start } = arrow);
  let obj = arg1(dependencyMap[10]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(closure_0));
  let tmp = null;
  if (null == stateFromStores) {
    return null;
  } else {
    let FormRow = arg1;
    if (deprecatedFormRow) {
      FormRow = FormRow(tmp3[11]).FormRow;
      obj = { accessibilityLabel, disabled };
      if (tmp == leading) {
        accessibilityLabel = callback;
        obj = { source: stateFromStores.getAvatarSource(guildId), size: arg1(dependencyMap[9]).AvatarSizes.SMALL };
        leading = callback(arg1(dependencyMap[9]).Avatar, obj);
      }
      obj.leading = leading;
      tmp = callback;
      leading = memoResult;
      const obj1 = { contentHeight, user: stateFromStores, guildId };
      obj.label = callback(memoResult, obj1);
      obj.onPress = onPress;
      obj.subLabel = subLabel;
      obj.trailing = trailing;
      obj.accessibilityRole = accessibilityRole;
      obj.accessibilityState = accessibilityState;
      let tmp2Result = tmp2(FormRow, obj);
    } else {
      const obj2 = { accessibilityLabel, arrow: arrow.arrow, disabled, end };
      let tmp4 = leading;
      if (tmp == leading) {
        const obj3 = { source: stateFromStores.getAvatarSource(guildId), size: arg1(dependencyMap[9]).AvatarSizes.SMALL };
        tmp4 = callback(arg1(dependencyMap[9]).Avatar, obj3);
      }
      obj2.icon = tmp4;
      const obj4 = { contentHeight, user: stateFromStores, guildId };
      obj2.label = callback(memoResult, obj4);
      obj2.onPress = onPress;
      obj2.start = start;
      obj2.subLabel = subLabel;
      obj2.trailing = trailing;
      obj2.accessibilityRole = accessibilityRole;
      obj2.accessibilityState = accessibilityState;
      tmp2Result = tmp2(FormRow(tmp3[12]).TableRow, obj2);
    }
  }
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx");

export default memoResult1;
export const DetailedGuildIdentityUser = memoResult;
