// Module ID: 19100
// Function ID: 19101
// Name: GuildSettingsModalEmoji/EmojiRow
// Dependencies: [32, 19, 17, 4877, 1392, 21, 5003, 587, 1384, 558, 576, 7252, 504, 8976, 9975, 4953, 19101, 5299, 5266, 1202, 5695, 1128, 5701, 1417, 6021, 5057, 6940, 19103, 6935, 2]

// Module 19100 (GuildSettingsModalEmoji/EmojiRow)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1202 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4953 */;
import UserUtilsDefault from "UserUtils" /* 5057 */;
import Text_Text from "Text/Text" /* 5266 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5299 */;
import FastImageDefault from "FastImage" /* 5701 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6021 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9975 */;
import showEmojiOverflowActionSheetDefault from "showEmojiOverflowActionSheet" /* 19101 */;
import AssetRegistryDefault from "AssetRegistry" /* 19103 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore_mod from "GuildStore" /* 4877 */;
import UserStore_mod from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import PlatformUtils_mod from "PlatformUtils" /* 1384 */;
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
let GuildStore = GuildStore_mod;
let UserStore = UserStore_mod;
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiRow(guildId) {
  let closure_3;
  let closure_6;
  let closure_7;
  let closure_8;
  let disabled;
  let end;
  let first;
  let onChangeText;
  let onPress;
  let onSelectRolesForEmoji;
  let result;
  let start;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp5;
  let tmp9;
  let tmp = guildId;
  let tmp2 = onSelectRolesForEmoji;
  let obj = guildId(onSelectRolesForEmoji[10]);
  const cResult = obj.c(78);
  guildId = guildId.guildId;
  const emoji = guildId.emoji;
  ({ disabled, start, end, onSelectRolesForEmoji } = guildId);
  _slicedToArray = undefined !== disabled && disabled;
  let user = onBlur();
  const tmp4 = onBlur();
  if (cResult[0] !== emoji.id) {
    let items = [emoji.id];
    cResult[0] = emoji.id;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  let tmpResult = tmp(tmp2[11]);
  [first, closure_6] = tmpResult.useRecyclingState(emoji.name, tmp5);
  const tmp6 = _slicedToArray;
  if (cResult[2] !== emoji.id) {
    let items1 = [];
    ({ id: arr2[0], id: tmp3[2] } = emoji);
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  const tmpResult5 = tmp(tmp2[11]);
  const tmp6Result = tmp6(tmpResult5.useRecyclingState(false, tmp9), 2);
  GuildStore = tmp6Result[0];
  UserStore = tmp11;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = GuildStore;
    const items2 = [GuildStore];
    cResult[4] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    class M {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    cResult[5] = guildId;
    cResult[6] = M;
    tmp14 = M;
  } else {
    class M {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  const tmpResult6 = tmp(tmp2[12]);
  const stateFromStores = tmpResult6.useStateFromStores(tmp12, tmp14);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
    const items3 = [UserStore];
    cResult[7] = items3;
    tmp16 = items3;
  } else {
    class M {
      constructor() {
        return GuildStore.getGuild(guildId);
      }
    }
  }
  if (cResult[8] !== emoji.user) {
    class D {
      constructor() {
        user = UserStore.getUser(emoji.user.id);
        const tmp = emoji;
        if (user == null) {
          user = tmp.user;
        }
        return user;
      }
    }
    const items4 = [emoji.user];
    cResult[8] = emoji.user;
    cResult[9] = D;
    cResult[10] = items4;
    tmp18 = items4;
    tmp17 = D;
  } else {
    class D {
      constructor() {
        user = UserStore.getUser(emoji.user.id);
        const tmp = emoji;
        if (user == null) {
          user = tmp.user;
        }
        return user;
      }
    }
    tmp18 = cResult[10];
  }
  const tmpResult7 = tmp(tmp2[12]);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp16, tmp17, tmp18);
  const tmpResult8 = tmp(tmp2[13]);
  const canManageGuildExpression = tmpResult8.useManageResourcePermissions(stateFromStores).canManageGuildExpression;
  if (cResult[11] === canManageGuildExpression) {
    class D {
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
    if (cResult[14] === emoji.id) {
      class D {
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
    cResult[14] = emoji.id;
    cResult[15] = emoji.name;
    cResult[16] = guildId;
    cResult[17] = first;
    cResult[18] = tmp6Result[1];
    cResult[19] = handleNameBlur;
  }
  result = canManageGuildExpression(emoji);
  cResult[11] = canManageGuildExpression;
  cResult[12] = emoji;
  cResult[13] = result;
}) : (function EmojiRow(guildId) {
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
  let obj = guildId(onSelectRolesForEmoji[11]);
  const items = [emoji.id];
  const tmp4 = children(obj.useRecyclingState(emoji.name, items), 2);
  children = tmp4[0];
  react = tmp4[1];
  let obj2 = guildId(onSelectRolesForEmoji[11]);
  const items1 = [emoji.id];
  const tmp6 = children(obj2.useRecyclingState(false, items1), 2);
  let closure_5 = tmp8;
  const first1 = tmp6[0];
  const items2 = [GuildStore];
  const obj3 = guildId(onSelectRolesForEmoji[12]);
  const stateFromStores = obj3.useStateFromStores(items2, () => GuildStore.getGuild(guildId));
  const items3 = [UserStore];
  const items4 = [emoji.user];
  const obj4 = guildId(onSelectRolesForEmoji[12]);
  const stateFromStores1 = obj4.useStateFromStores(items3, () => {
    let user = UserStore.getUser(emoji.user.id);
    const tmp = emoji;
    if (user == null) {
      user = tmp.user;
    }
    return user;
  }, items4);
  const items5 = [guildId, emoji, onSelectRolesForEmoji, tmp6[1]];
  const obj5 = guildId(onSelectRolesForEmoji[13]);
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
      const obj = { text: intl.string(guildId(onSelectRolesForEmoji[21]).t.KUzI73) };
      const open = emoji(onSelectRolesForEmoji[20]).open;
      emoji(onSelectRolesForEmoji[20]);
      intl = guildId(onSelectRolesForEmoji[21]).intl;
      open("EMOJI_DISABLED", obj);
    },
    disabled: emoji.available,
    children: closure_9(tmp17, obj8)
  };
  const TableRow = guildId(onSelectRolesForEmoji[28]).TableRow;
  obj8 = { style: tmp.emojiImage, source: obj9 };
  obj9 = { uri: obj10.getEmojiURL(obj11) };
  tmp17 = emoji(onSelectRolesForEmoji[22]);
  obj10 = emoji(onSelectRolesForEmoji[23]);
  obj11 = { id: emoji.id, animated: emoji.animated, size: 48 };
  const obj12 = emoji(onSelectRolesForEmoji[24]);
  const nickname = obj12.getNickname(guildId, undefined, stateFromStores1);
  let tmp15Result = null;
  obj13 = { style: tmp.flexCenterRow, children: items9 };
  const obj14 = { style: tmp.usernameContainer, children: items8 };
  if (null != nickname) {
    const obj15 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp15Result = tmp15(tmp2(tmp3[19]).LegacyText, obj15);
  }
  items8 = [tmp15Result, ];
  const obj16 = { numberOfLines: 1, style: tmp.username, children: tmp16Result.getUserTag(stateFromStores1) };
  const LegacyText = tmp2(tmp3[19]).LegacyText;
  tmp16Result = emoji(onSelectRolesForEmoji[25]);
  items8[1] = closure_9(LegacyText, obj16);
  items9 = [closure_10(closure_5, obj14), , ];
  const obj17 = { user: stateFromStores1, guildId, size: tmp2(onSelectRolesForEmoji[19]).AvatarSizes.XSMALL };
  const Avatar = tmp2(tmp3[19]).Avatar;
  items9[1] = closure_9(Avatar, obj17);
  let tmp15Result3 = null;
  if (!flag) {
    const obj18 = { style: tmp.overflowIcon, onPress, hitSlop: 8, children: closure_9(Icon, obj19) };
    const PressableOpacity = tmp2(tmp3[26]).PressableOpacity;
    obj19 = { source: emoji(onSelectRolesForEmoji[27]), size: tmp2(onSelectRolesForEmoji[19]).IconSizes.REFRESH_SMALL_16 };
    Icon = tmp2(tmp3[19]).Icon;
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
      const obj20 = { style: tmp.activeNameContainer, children: closure_9(tmp2(onSelectRolesForEmoji[19]).TextInput, obj21) };
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
  items11[0] = closure_9(tmp2(onSelectRolesForEmoji[18]).Text, obj23);
  const obj24 = { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children };
  items11[1] = closure_9(tmp2(onSelectRolesForEmoji[18]).Text, obj24);
  const obj25 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  items11[2] = closure_9(tmp2(onSelectRolesForEmoji[18]).Text, obj25);
  tmp15Result4 = tmp19(tmp20, obj22);
});
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export const EmojiRow = tmp5;
