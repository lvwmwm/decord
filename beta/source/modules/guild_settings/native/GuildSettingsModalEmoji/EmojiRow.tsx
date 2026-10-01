// Module ID: 17365
// Function ID: 17366
// Name: EmojiRow
// Dependencies: [32, 19, 17, 2067, 1372, 21, 4836, 576, 1364, 504, 8952, 9797, 4487, 17366, 5266, 4832, 1177, 5917, 4528, 1115, 1397, 4988, 4678, 5435, 17368, 2]
// Exports: EmojiRow

// Module 17365 (EmojiRow)
import nativeDefault from "native" /* 576 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4487 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9797 */;
import showEmojiOverflowActionSheetDefault from "showEmojiOverflowActionSheet" /* 17366 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let c10;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
let react = react_mod;
({ View: hasOwnProperty, Image: metroRequire, Pressable: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, flexCenterRow: { flexDirection: "row", alignItems: "center" }, nameContainer: obj2, activeNameContainer: obj3, usernameContainer: { marginRight: 8, maxWidth: 150, flexShrink: 1 }, emojiText: obj4, colon: { width: 4 }, username: obj5, emojiImage: { width: 30, height: 30, resizeMode: "contain" }, overflowIcon: obj6 };
obj2 = { paddingVertical: 4, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
createStyles = createStyles.createStyles;
let PlatformUtils = PlatformUtils_mod;
let num = 4;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
obj3 = { padding: num, borderRadius: nativeDefault.radii.xs, alignItems: "center", flexDirection: "row" };
PlatformUtils = PlatformUtils_mod;
let num2;
if (PlatformUtils.isAndroid()) {
  num2 = 0;
}
obj4 = { fontSize: 16, padding: num2, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj5 = { fontSize: 13, color: nativeDefault.colors.TEXT_MUTED };
obj6 = { paddingLeft: nativeDefault.space.PX_8, alignItems: "center", flexDirection: "row", height: "100%" };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export const EmojiRow = function EmojiRow(guildId) {
  let Icon;
  let closure_4;
  let end;
  let first;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj11;
  let obj17;
  let obj19;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let start;
  let tmp15Result;
  guildId = guildId.guildId;
  const emoji = guildId.emoji;
  let flag = guildId.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onSelectRolesForEmoji = guildId.onSelectRolesForEmoji;
  let children;
  react = undefined;
  ({ start, end } = guildId);
  let tmp = closure_12();
  const tmp2 = children(react.useState(emoji.name), 2);
  children = tmp2[0];
  react = tmp2[1];
  const tmp4 = children(react.useState(false), 2);
  let closure_5 = tmp4[1];
  const first1 = tmp4[0];
  let obj = guildId(onSelectRolesForEmoji[9]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(onSelectRolesForEmoji[9]);
  const items1 = [UserStore];
  const items2 = [emoji.user];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let user = UserStore.getUser(emoji.user.id);
    const tmp = emoji;
    if (user == null) {
      user = tmp.user;
    }
    return user;
  }, items2);
  const items3 = [guildId, emoji, onSelectRolesForEmoji];
  const obj3 = guildId(onSelectRolesForEmoji[10]);
  const result = obj3.useManageResourcePermissions(stateFromStores).canManageGuildExpression(emoji);
  const onPress = react.useCallback(() => {
    const obj = {
      guildId,
      emoji,
      onEdit() {
        closure_1_5(true);
      },
      onSelectRolesForEmoji
    };
    showEmojiOverflowActionSheetDefault(obj);
  }, items3);
  const items4 = [onPress];
  const items5 = [onPress];
  const callback1 = react.useCallback(() => {
    const obj = useIsScreenReaderEnabled;
    if (obj.getIsScreenReaderEnabled()) {
      callback();
    } else {
      closure_5(true);
    }
  }, items4);
  const callback2 = react.useCallback(() => {
    callback();
  }, items5);
  const obj4 = { icon: closure_10(closure_7, obj5), trailing: closure_11(closure_5, obj11), label: null, disabled: null, onPress: null, onLongPress: null, start: null, end: null };
  obj5 = {
    onPress() {
      let intl;
      const obj = { key: "EMOJI_DISABLED", content: intl.string(guildId(onSelectRolesForEmoji[19]).t.KUzI73) };
      const open = emoji(onSelectRolesForEmoji[18]).open;
      emoji(onSelectRolesForEmoji[18]);
      intl = guildId(onSelectRolesForEmoji[19]).intl;
      open(obj);
    },
    disabled: emoji.available,
    children: closure_10(onPress, obj6)
  };
  obj6 = { style: tmp.emojiImage, source: obj7 };
  obj7 = { uri: obj8.getEmojiURL(obj9) };
  const TableRow = guildId(onSelectRolesForEmoji[17]).TableRow;
  obj8 = emoji(onSelectRolesForEmoji[20]);
  obj9 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const obj10 = emoji(onSelectRolesForEmoji[21]);
  const nickname = obj10.getNickname(guildId, undefined, stateFromStores1);
  let tmp14Result = null;
  obj11 = { style: tmp.flexCenterRow, children: items7 };
  const obj12 = { style: tmp.usernameContainer, children: items6 };
  if (null != nickname) {
    const obj13 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp14Result = tmp14(tmp6(tmp7[16]).LegacyText, obj13);
  }
  items6 = [tmp14Result, ];
  const obj14 = { numberOfLines: 1, style: tmp.username, children: tmp15Result.getUserTag(stateFromStores1) };
  const LegacyText = tmp6(tmp7[16]).LegacyText;
  tmp15Result = emoji(onSelectRolesForEmoji[22]);
  items6[1] = closure_10(LegacyText, obj14);
  items7 = [closure_11(closure_5, obj12), , ];
  const obj15 = { user: stateFromStores1, guildId, size: guildId(onSelectRolesForEmoji[16]).AvatarSizes.XSMALL };
  const Avatar = tmp6(tmp7[16]).Avatar;
  items7[1] = closure_10(Avatar, obj15);
  let tmp14Result3 = null;
  if (!flag) {
    const obj16 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: closure_10(Icon, obj17) };
    const PressableOpacity = tmp6(tmp7[23]).PressableOpacity;
    obj17 = { source: emoji(onSelectRolesForEmoji[24]), size: guildId(onSelectRolesForEmoji[16]).IconSizes.REFRESH_SMALL_16 };
    Icon = tmp6(tmp7[16]).Icon;
    tmp14Result3 = tmp14(PressableOpacity, obj16);
  }
  items7[2] = tmp14Result3;
  if (first1) {
    let tmp14Result4;
    if (result) {
      function handleNameBlur() {
        let obj2;
        if (first !== emoji.name) {
          const obj = { guildId, emojiId: tmp2.id, name: obj2.sanitizeEmojiName(tmp) };
          const updateEmoji = EmojiActionCreators.updateEmoji;
          EmojiActionCreators;
          obj2 = EmojiUtilsDefault;
          updateEmoji(obj);
        }
        closure_5(false);
      }
      function updateName(arg0) {
        closure_4(arg0);
      }
      const obj18 = { style: tmp.activeNameContainer, children: closure_10(guildId(onSelectRolesForEmoji[16]).TextInput, obj19) };
      obj19 = { autoCorrect: false, numberOfLines: 1, returnKeyType: "done", autoCapitalize: "none", autoFocus: true, onBlur: handleNameBlur, style: items8, onChangeText: updateName, value: children };
      items8 = [, ];
      ({ emojiText: arr10[0], flex: arr10[1] } = tmp);
      tmp14Result4 = tmp14(tmp18, obj18);
    }
    obj4.label = tmp14Result4;
    obj4.disabled = flag;
    obj4.onPress = callback1;
    obj4.onLongPress = callback2;
    obj4.start = start;
    obj4.end = end;
    return closure_10(TableRow, obj4);
  }
  const obj20 = { style: tmp.nameContainer, children: items9 };
  items9 = [, , ];
  const obj21 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  items9[0] = closure_10(guildId(onSelectRolesForEmoji[15]).Text, obj21);
  const obj22 = { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children };
  items9[1] = closure_10(guildId(onSelectRolesForEmoji[15]).Text, obj22);
  const obj23 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  items9[2] = closure_10(guildId(onSelectRolesForEmoji[15]).Text, obj23);
  tmp14Result4 = tmp17(tmp18, obj20);
};
