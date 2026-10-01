// Module ID: 10404
// Function ID: 10405
// Name: DetailedGuildIdentityUserRow
// Dependencies: [19, 17, 1372, 21, 4836, 576, 4988, 4678, 9094, 1177, 504, 8053, 5917, 2]

// Module 10404 (DetailedGuildIdentityUserRow)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import DiscordTagDefault from "DiscordTag" /* 9094 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { mainIdentity: { flexDirection: "row", alignItems: "center" }, primaryAvatar: obj2, mainTag: obj3 };
obj2 = { marginRight: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
let closure_7 = createStyles(obj);
const memoResult = react.memo((contentHeight) => {
  let guildId;
  let items;
  let items1;
  let tmp6Result;
  let user;
  ({ guildId, user } = contentHeight);
  contentHeight = contentHeight.contentHeight;
  const tmp = closure_7();
  const obj = NicknameUtilsDefault;
  let nickname = obj.getNickname(guildId, undefined, user);
  if (nickname == null) {
    const tmp2Result = UserUtilsDefault;
    nickname = tmp2Result.getGlobalName(user);
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
  const obj2 = { style: { height: contentHeight }, children: items };
  items = [hasOwnProperty(DiscordTagDefault, { user, nick: nickname }), ];
  if (hasAvatarForGuildResult) {
    let tmp8Result = null;
    const obj3 = { style: tmp.mainIdentity, children: items1 };
    if (hasAvatarForGuildResult) {
      const obj4 = { size: native.AvatarSizes.SIZE_16, style: tmp.primaryAvatar, user, guildId: "a" };
      const Avatar = native.Avatar;
      tmp8Result = tmp8(Avatar, obj4);
    }
    items1 = [tmp8Result, ];
    const obj5 = { user, usernameStyle: tmp.mainTag, hideBotTag: true };
    items1[1] = hasOwnProperty(DiscordTagDefault, obj5);
    tmp6Result = tmp6(tmp7, obj3);
  } else {
    tmp6Result = null;
  }
  items[1] = tmp6Result;
  return metroRequire(View, obj2);
});
const metroImportAll = memoResult;
const memoResult1 = react.memo(function DetailedGuildIdentityUserRow(arrow) {
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let contentHeight;
  let deprecatedFormRow;
  let disabled;
  let end;
  let guildId;
  let leading;
  let obj4;
  let obj7;
  let onPress;
  let start;
  let subLabel;
  let tmp4Result2;
  let trailing;
  ({ accessibilityLabel, contentHeight, deprecatedFormRow } = arrow);
  arrow = arrow.arrow;
  if (deprecatedFormRow === undefined) {
    deprecatedFormRow = false;
  }
  ({ disabled, guildId, leading, onPress, trailing, userId: require, subLabel, accessibilityRole, accessibilityState } = arrow);
  ({ end, start } = arrow);
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(require));
  let tmp3 = null;
  if (null != stateFromStores) {
    let tmp4Result;
    if (deprecatedFormRow) {
      const obj2 = { accessibilityLabel, disabled, leading, label: closure_5(closure_8, obj4), onPress, subLabel, trailing, accessibilityRole, accessibilityState };
      const FormRow = tmp(8053).FormRow;
      if (leading == null) {
        const obj3 = { source: stateFromStores.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
        const Avatar2 = tmp(1177).Avatar;
        leading = tmp4(Avatar2, obj3);
      }
      obj4 = { contentHeight, user: stateFromStores, guildId };
      tmp4Result = tmp4(FormRow, obj2);
    } else {
      const obj5 = { accessibilityLabel, arrow, disabled, end, icon: tmp4Result2, label: closure_5(closure_8, obj7), onPress, start, subLabel, trailing, accessibilityRole, accessibilityState };
      tmp4Result2 = leading;
      const TableRow = tmp(5917).TableRow;
      if (leading == null) {
        const obj6 = { source: stateFromStores.getAvatarSource(guildId), size: native.AvatarSizes.SMALL };
        const Avatar = tmp(1177).Avatar;
        tmp4Result2 = tmp4(Avatar, obj6);
      }
      obj7 = { contentHeight, user: stateFromStores, guildId };
      tmp4Result = tmp4(TableRow, obj5);
    }
    tmp3 = tmp4Result;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx");

export default memoResult1;
export const DetailedGuildIdentityUser = memoResult;
