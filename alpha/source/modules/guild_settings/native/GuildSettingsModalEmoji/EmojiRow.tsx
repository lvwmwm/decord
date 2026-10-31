// Module ID: 19726
// Function ID: 19727
// Name: EmojiRow
// Dependencies: [32, 19, 17, 4885, 1383, 21, 5014, 575, 1375, 7294, 504, 9020, 10057, 4964, 19727, 5274, 5624, 1187, 6975, 5712, 1113, 5717, 1409, 6041, 5068, 6980, 19729, 2]
// Exports: EmojiRow

// Module 19726 (EmojiRow)
import nativeDefault from "native" /* 575 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4964 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5274 */;
import EmojiActionCreators from "EmojiActionCreators" /* 10057 */;
import showEmojiOverflowActionSheetDefault from "showEmojiOverflowActionSheet" /* 19727 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import PlatformUtils_mod from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
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
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export function EmojiRow(guildId) {
  let Icon;
  let closure_4;
  let end;
  let first;
  let items10;
  let items11;
  let items8;
  let items9;
  let obj10;
  let obj11;
  let obj13;
  let obj19;
  let obj21;
  let obj7;
  let obj8;
  let obj9;
  let start;
  let tmp16Result;
  let tmp17;
  guildId = guildId.guildId;
  const emoji = guildId.emoji;
  let flag = guildId.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onSelectRolesForEmoji = guildId.onSelectRolesForEmoji;
  let children;
  ({ start, end } = guildId);
  let tmp = closure_11();
  const tmp2 = guildId;
  let obj = guildId(onSelectRolesForEmoji[9]);
  const items = [emoji.id];
  const tmp4 = children(obj.useRecyclingState(emoji.name, items), 2);
  children = tmp4[0];
  react = tmp4[1];
  let obj2 = guildId(onSelectRolesForEmoji[9]);
  const items1 = [emoji.id];
  const tmp6 = children(obj2.useRecyclingState(false, items1), 2);
  let closure_5 = tmp8;
  const first1 = tmp6[0];
  const items2 = [GuildStore];
  const obj3 = guildId(onSelectRolesForEmoji[10]);
  const stateFromStores = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  const items3 = [UserStore];
  const items4 = [emoji.user];
  const obj4 = guildId(onSelectRolesForEmoji[10]);
  const stateFromStores1 = obj4.useStateFromStores(items3, () => {
    let user = UserStore.getUser(emoji.user.id);
    const tmp = emoji;
    if (user == null) {
      user = tmp.user;
    }
    return user;
  }, items4);
  const items5 = [guildId, emoji, onSelectRolesForEmoji, tmp6[1]];
  const obj5 = guildId(onSelectRolesForEmoji[11]);
  const result = obj5.useManageResourcePermissions(stateFromStores).canManageGuildExpression(emoji);
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
  }, items5);
  const items6 = [onPress, tmp6[1]];
  const items7 = [onPress];
  const callback1 = react.useCallback(() => {
    const obj = useIsScreenReaderEnabled;
    if (obj.getIsScreenReaderEnabled()) {
      callback();
    } else {
      closure_5(true);
    }
  }, items6);
  const callback2 = react.useCallback(() => {
    callback();
  }, items7);
  const obj6 = { icon: closure_9(onPress, obj7), trailing: closure_10(closure_5, obj13), label: null, disabled: null, onPress: null, onLongPress: null, start: null, end: null };
  obj7 = {
    onPress() {
      let intl;
      const obj = { text: intl.string(guildId(onSelectRolesForEmoji[20]).t.KUzI73) };
      const open = emoji(onSelectRolesForEmoji[19]).open;
      emoji(onSelectRolesForEmoji[19]);
      intl = guildId(onSelectRolesForEmoji[20]).intl;
      open("EMOJI_DISABLED", obj);
    },
    disabled: emoji.available,
    children: closure_9(tmp17, obj8)
  };
  const TableRow = guildId(onSelectRolesForEmoji[18]).TableRow;
  obj8 = { style: tmp.emojiImage, source: obj9 };
  obj9 = { uri: obj10.getEmojiURL(obj11) };
  tmp17 = emoji(onSelectRolesForEmoji[21]);
  obj10 = emoji(onSelectRolesForEmoji[22]);
  obj11 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const obj12 = emoji(onSelectRolesForEmoji[23]);
  const nickname = obj12.getNickname(guildId, undefined, stateFromStores1);
  let tmp15Result = null;
  obj13 = { style: tmp.flexCenterRow, children: items9 };
  const obj14 = { style: tmp.usernameContainer, children: items8 };
  if (null != nickname) {
    const obj15 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp15Result = tmp15(tmp2(tmp3[17]).LegacyText, obj15);
  }
  items8 = [tmp15Result, ];
  const obj16 = { numberOfLines: 1, style: tmp.username, children: tmp16Result.getUserTag(stateFromStores1) };
  const LegacyText = tmp2(tmp3[17]).LegacyText;
  tmp16Result = emoji(onSelectRolesForEmoji[24]);
  items8[1] = closure_9(LegacyText, obj16);
  items9 = [closure_10(closure_5, obj14), , ];
  const obj17 = { user: stateFromStores1, guildId, size: tmp2(onSelectRolesForEmoji[17]).AvatarSizes.XSMALL };
  const Avatar = tmp2(tmp3[17]).Avatar;
  items9[1] = closure_9(Avatar, obj17);
  let tmp15Result3 = null;
  if (!flag) {
    const obj18 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: closure_9(Icon, obj19) };
    const PressableOpacity = tmp2(tmp3[25]).PressableOpacity;
    obj19 = { source: emoji(onSelectRolesForEmoji[26]), size: tmp2(onSelectRolesForEmoji[17]).IconSizes.REFRESH_SMALL_16 };
    Icon = tmp2(tmp3[17]).Icon;
    tmp15Result3 = tmp15(PressableOpacity, obj18);
  }
  items9[2] = tmp15Result3;
  if (first1) {
    let tmp15Result4;
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
      const obj20 = { style: tmp.activeNameContainer, children: closure_9(tmp2(onSelectRolesForEmoji[17]).TextInput, obj21) };
      obj21 = { autoCorrect: false, numberOfLines: 1, returnKeyType: "done", autoCapitalize: "none", autoFocus: true, onBlur: handleNameBlur, style: items10, onChangeText: updateName, value: children };
      items10 = [, ];
      ({ emojiText: arr12[0], flex: arr12[1] } = tmp);
      tmp15Result4 = tmp15(tmp20, obj20);
    }
    obj6.label = tmp15Result4;
    obj6.disabled = flag;
    obj6.onPress = callback1;
    obj6.onLongPress = callback2;
    obj6.start = start;
    obj6.end = end;
    return closure_9(TableRow, obj6);
  }
  const obj22 = { style: tmp.nameContainer, children: items11 };
  items11 = [, , ];
  const obj23 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  items11[0] = closure_9(tmp2(onSelectRolesForEmoji[16]).Text, obj23);
  const obj24 = { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children };
  items11[1] = closure_9(tmp2(onSelectRolesForEmoji[16]).Text, obj24);
  const obj25 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  items11[2] = closure_9(tmp2(onSelectRolesForEmoji[16]).Text, obj25);
  tmp15Result4 = tmp19(tmp20, obj22);
}
