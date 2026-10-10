// Module ID: 18303
// Function ID: 18304
// Name: GuildSettingsModalEmoji/EmojiRow
// Dependencies: [32, 19, 17, 2087, 1390, 21, 5092, 587, 1382, 558, 576, 504, 8572, 9546, 4768, 18304, 5362, 5088, 1200, 4809, 1126, 6156, 1415, 5409, 4962, 6184, 18306, 6179, 2]

// Module 18303 (GuildSettingsModalEmoji/EmojiRow)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4768 */;
import UserUtilsDefault from "UserUtils" /* 4962 */;
import Text_Text from "Text/Text" /* 5088 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5362 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5409 */;
import FastImageDefault from "FastImage" /* 6156 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9546 */;
import showEmojiOverflowActionSheetDefault from "showEmojiOverflowActionSheet" /* 18304 */;
import AssetRegistryDefault from "AssetRegistry" /* 18306 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserStore from "UserStore" /* 1390 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import PlatformUtils_mod from "PlatformUtils" /* 1382 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let _slicedToArray = _slicedToArray_mod;
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
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiRow(guildId) {
  let closure_3;
  let closure_6;
  let closure_7;
  let closure_8;
  let disabled;
  let end;
  let first;
  let first1;
  let onChangeText;
  let onPress;
  let onSelectRolesForEmoji;
  let result;
  let start;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp = guildId;
  let tmp2 = onSelectRolesForEmoji;
  let obj = guildId(onSelectRolesForEmoji[10]);
  const cResult = obj.c(69);
  guildId = guildId.guildId;
  const emoji = guildId.emoji;
  ({ disabled, start, end, onSelectRolesForEmoji } = guildId);
  _slicedToArray = undefined !== disabled && disabled;
  react = onBlur();
  const tmp4 = onBlur();
  [first, closure_6] = react.useState(emoji.name);
  [GuildStore, UserStore] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp9 = GuildStore;
    let items = [GuildStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
    tmp10 = I;
  } else {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  let tmpResult = tmp(tmp2[11]);
  const stateFromStores = tmpResult.useStateFromStores(first1, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    let items1 = [UserStore];
    cResult[3] = items1;
    tmp12 = items1;
  } else {
    class I {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[4] !== emoji.user) {
    class O {
      constructor() {
        user = UserStore.getUser(emoji.user.id);
        const tmp = emoji;
        if (user == null) {
          user = tmp.user;
        }
        return user;
      }
    }
    const items2 = [emoji.user];
    cResult[4] = emoji.user;
    cResult[5] = O;
    cResult[6] = items2;
    tmp14 = items2;
    tmp13 = O;
  } else {
    class O {
      constructor() {
        user = UserStore.getUser(emoji.user.id);
        const tmp = emoji;
        if (user == null) {
          user = tmp.user;
        }
        return user;
      }
    }
    tmp14 = cResult[6];
  }
  const tmpResult3 = tmp(tmp2[11]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp13, tmp14);
  const tmpResult4 = tmp(tmp2[12]);
  const canManageGuildExpression = tmpResult4.useManageResourcePermissions(stateFromStores).canManageGuildExpression;
  if (cResult[7] === canManageGuildExpression) {
    class O {
      constructor() {
        user = UserStore.getUser(emoji.user.id);
        const tmp = emoji;
        if (user == null) {
          user = tmp.user;
        }
        return user;
      }
    }
    let closure_10 = result;
    if (cResult[10] === emoji.id) {
      class O {
        constructor() {
          user = UserStore.getUser(emoji.user.id);
          const tmp = emoji;
          if (user == null) {
            user = tmp.user;
          }
          return user;
        }
      }
    }
    function handleNameBlur() {
      let obj2;
      if (first !== emoji.name) {
        const obj = { guildId, emojiId: tmp2.id, name: obj2.sanitizeEmojiName(tmp) };
        const updateEmoji = EmojiActionCreators.updateEmoji;
        EmojiActionCreators;
        obj2 = EmojiUtilsDefault;
        updateEmoji(obj);
      }
      closure_8(false);
    }
    cResult[10] = emoji.id;
    cResult[11] = emoji.name;
    cResult[12] = guildId;
    cResult[13] = first;
    cResult[14] = handleNameBlur;
  }
  result = canManageGuildExpression(emoji);
  cResult[7] = canManageGuildExpression;
  cResult[8] = emoji;
  cResult[9] = result;
}) : (function EmojiRow(guildId) {
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
  let tmp16;
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
  let tmp = closure_11();
  const tmp2 = children(react.useState(emoji.name), 2);
  children = tmp2[0];
  react = tmp2[1];
  const tmp4 = children(react.useState(false), 2);
  let closure_5 = tmp4[1];
  const first1 = tmp4[0];
  let obj = guildId(onSelectRolesForEmoji[11]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(onSelectRolesForEmoji[11]);
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
  const obj3 = guildId(onSelectRolesForEmoji[12]);
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
  const obj4 = { icon: closure_9(onPress, obj5), trailing: closure_10(closure_5, obj11), label: null, disabled: null, onPress: null, onLongPress: null, start: null, end: null };
  obj5 = {
    onPress() {
      let intl;
      const obj = { text: intl.string(guildId(onSelectRolesForEmoji[20]).t.KUzI73) };
      const open = emoji(onSelectRolesForEmoji[19]).open;
      emoji(onSelectRolesForEmoji[19]);
      intl = guildId(onSelectRolesForEmoji[20]).intl;
      open("EMOJI_DISABLED", obj);
    },
    disabled: emoji.available,
    children: closure_9(tmp16, obj6)
  };
  const TableRow = guildId(onSelectRolesForEmoji[27]).TableRow;
  obj6 = { style: tmp.emojiImage, source: obj7 };
  obj7 = { uri: obj8.getEmojiURL(obj9) };
  tmp16 = emoji(onSelectRolesForEmoji[21]);
  obj8 = emoji(onSelectRolesForEmoji[22]);
  obj9 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const obj10 = emoji(onSelectRolesForEmoji[23]);
  const nickname = obj10.getNickname(guildId, undefined, stateFromStores1);
  let tmp14Result = null;
  obj11 = { style: tmp.flexCenterRow, children: items7 };
  const obj12 = { style: tmp.usernameContainer, children: items6 };
  if (null != nickname) {
    const obj13 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp14Result = tmp14(tmp6(tmp7[18]).LegacyText, obj13);
  }
  items6 = [tmp14Result, ];
  const obj14 = { numberOfLines: 1, style: tmp.username, children: tmp15Result.getUserTag(stateFromStores1) };
  const LegacyText = tmp6(tmp7[18]).LegacyText;
  tmp15Result = emoji(onSelectRolesForEmoji[24]);
  items6[1] = closure_9(LegacyText, obj14);
  items7 = [closure_10(closure_5, obj12), , ];
  const obj15 = { user: stateFromStores1, guildId, size: guildId(onSelectRolesForEmoji[18]).AvatarSizes.XSMALL };
  const Avatar = tmp6(tmp7[18]).Avatar;
  items7[1] = closure_9(Avatar, obj15);
  let tmp14Result3 = null;
  if (!flag) {
    const obj16 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: closure_9(Icon, obj17) };
    const PressableOpacity = tmp6(tmp7[25]).PressableOpacity;
    obj17 = { source: emoji(onSelectRolesForEmoji[26]), size: guildId(onSelectRolesForEmoji[18]).IconSizes.REFRESH_SMALL_16 };
    Icon = tmp6(tmp7[18]).Icon;
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
      const obj18 = { style: tmp.activeNameContainer, children: closure_9(guildId(onSelectRolesForEmoji[18]).TextInput, obj19) };
      obj19 = { autoCorrect: false, numberOfLines: 1, returnKeyType: "done", autoCapitalize: "none", autoFocus: true, onBlur: handleNameBlur, style: items8, onChangeText: updateName, value: children };
      items8 = [, ];
      ({ emojiText: arr10[0], flex: arr10[1] } = tmp);
      tmp14Result4 = tmp14(tmp19, obj18);
    }
    obj4.label = tmp14Result4;
    obj4.disabled = flag;
    obj4.onPress = callback1;
    obj4.onLongPress = callback2;
    obj4.start = start;
    obj4.end = end;
    return closure_9(TableRow, obj4);
  }
  const obj20 = { style: tmp.nameContainer, children: items9 };
  items9 = [, , ];
  const obj21 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  items9[0] = closure_9(guildId(onSelectRolesForEmoji[17]).Text, obj21);
  const obj22 = { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children };
  items9[1] = closure_9(guildId(onSelectRolesForEmoji[17]).Text, obj22);
  const obj23 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  items9[2] = closure_9(guildId(onSelectRolesForEmoji[17]).Text, obj23);
  tmp14Result4 = tmp18(tmp19, obj20);
});
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export const EmojiRow = tmp5;
