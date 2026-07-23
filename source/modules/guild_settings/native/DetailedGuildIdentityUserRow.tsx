// Module ID: 10179
// Function ID: 78644
// Name: memoResult1
// Dependencies: [31, 27, 1849, 33, 4130, 689, 4319, 3969, 9429, 1273, 566, 7495, 5165, 2]

// Module 10179 (memoResult1)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { mainIdentity: { flexDirection: "row", alignItems: "center" } };
obj = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.primaryAvatar = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
obj.mainTag = _createForOfIteratorHelperLoose;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((height) => {
  let guildId;
  let user;
  ({ guildId, user } = height);
  const tmp = callback2();
  let obj = importDefault(4319);
  let nickname = obj.getNickname(guildId, undefined, user);
  if (null == nickname) {
    let obj1 = importDefault(3969);
    nickname = obj1.getGlobalName(user);
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
  obj = { style: { height: height.contentHeight } };
  obj = { user, nick: nickname };
  const items = [callback(importDefault(9429), obj), ];
  if (hasAvatarForGuildResult) {
    obj1 = { style: tmp.mainIdentity };
    let tmp11 = null;
    if (hasAvatarForGuildResult) {
      const obj2 = { size: require(1273) /* Button */.AvatarSizes.SIZE_16, style: tmp.primaryAvatar, user, guildId: undefined };
      tmp11 = callback(require(1273) /* Button */.Avatar, obj2);
    }
    const items1 = [tmp11, ];
    const obj3 = { user, usernameStyle: tmp.mainTag, hideBotTag: true };
    items1[1] = callback(importDefault(9429), obj3);
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
  let require;
  let start;
  let subLabel;
  let trailing;
  ({ accessibilityLabel, contentHeight, deprecatedFormRow } = arrow);
  if (deprecatedFormRow === undefined) {
    deprecatedFormRow = false;
  }
  ({ disabled, guildId, leading, onPress, trailing, userId: require, subLabel, accessibilityRole, accessibilityState } = arrow);
  ({ end, start } = arrow);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getUser(closure_0));
  let tmp = null;
  if (null == stateFromStores) {
    return null;
  } else {
    let FormRow = require;
    if (deprecatedFormRow) {
      FormRow = FormRow(7495).FormRow;
      obj = { accessibilityLabel, disabled };
      if (tmp == leading) {
        accessibilityLabel = callback;
        obj = { source: stateFromStores.getAvatarSource(guildId), size: require(1273) /* Button */.AvatarSizes.SMALL };
        leading = callback(require(1273) /* Button */.Avatar, obj);
      }
      obj.leading = leading;
      tmp = callback;
      leading = closure_8;
      const obj1 = { contentHeight, user: stateFromStores, guildId };
      obj.label = callback(closure_8, obj1);
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
        const obj3 = { source: stateFromStores.getAvatarSource(guildId), size: require(1273) /* Button */.AvatarSizes.SMALL };
        tmp4 = callback(require(1273) /* Button */.Avatar, obj3);
      }
      obj2.icon = tmp4;
      const obj4 = { contentHeight, user: stateFromStores, guildId };
      obj2.label = callback(closure_8, obj4);
      obj2.onPress = onPress;
      obj2.start = start;
      obj2.subLabel = subLabel;
      obj2.trailing = trailing;
      obj2.accessibilityRole = accessibilityRole;
      obj2.accessibilityState = accessibilityState;
      tmp2Result = tmp2(FormRow(5165).TableRow, obj2);
    }
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx");

export default memoResult1;
export const DetailedGuildIdentityUser = memoResult;
