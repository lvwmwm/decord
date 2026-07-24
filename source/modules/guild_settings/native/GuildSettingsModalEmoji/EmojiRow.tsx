// Module ID: 16301
// Function ID: 126900
// Name: num2
// Dependencies: [57, 31, 27, 1838, 33, 4130, 689, 477, 566, 8446, 9427, 3775, 16302, 4528, 4126, 1273, 5165, 3831, 1212, 1392, 4319, 3969, 4660, 16304, 2]
// Exports: EmojiRow

// Module 16301 (num2)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_8 from "_createForOfIteratorHelperLoose";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "get ActivityIndicator";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ View: closure_5, Image: closure_6, Pressable: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 }, flexCenterRow: { flexDirection: "row", alignItems: "center" } };
_createForOfIteratorHelperLoose = { paddingVertical: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, alignItems: "center", flexDirection: "row" };
_createForOfIteratorHelperLoose.nameContainer = _createForOfIteratorHelperLoose;
let obj1 = {};
let num = 4;
if (set.isAndroid()) {
  num = 0;
}
obj1.padding = num;
obj1.borderRadius = require("_createForOfIteratorHelperLoose").radii.xs;
obj1.alignItems = "center";
obj1.flexDirection = "row";
_createForOfIteratorHelperLoose.activeNameContainer = obj1;
_createForOfIteratorHelperLoose.usernameContainer = { marginRight: 8, maxWidth: 150, flexShrink: 1 };
let obj2 = { fontSize: 16 };
let num2;
if (set.isAndroid()) {
  num2 = 0;
}
obj2.padding = num2;
obj2.color = require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY;
_createForOfIteratorHelperLoose.emojiText = obj2;
_createForOfIteratorHelperLoose.colon = { width: 4 };
_createForOfIteratorHelperLoose.username = { fontSize: 13, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.emojiImage = { width: 30, height: 30, resizeMode: "contain" };
set = { paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center", flexDirection: "row", height: "100%" };
_createForOfIteratorHelperLoose.overflowIcon = set;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = set.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export const EmojiRow = function EmojiRow(guildId) {
  let end;
  let start;
  guildId = guildId.guildId;
  const emoji = guildId.emoji;
  let flag = guildId.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onSelectRolesForEmoji = guildId.onSelectRolesForEmoji;
  let first;
  let React;
  let closure_5;
  let callback;
  ({ start, end } = guildId);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = first(React.useState(emoji.name), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp4 = first(React.useState(false), 2);
  closure_5 = tmp4[1];
  let obj = guildId(onSelectRolesForEmoji[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(guildId));
  let obj1 = guildId(onSelectRolesForEmoji[9]);
  const items1 = [guildId, emoji, onSelectRolesForEmoji];
  const result = obj1.useManageResourcePermissions(stateFromStores).canManageGuildExpression(emoji);
  callback = React.useCallback(() => {
    emoji(onSelectRolesForEmoji[12])({
      guildId,
      emoji,
      onEdit() {
        outer1_5(true);
      },
      onSelectRolesForEmoji
    });
  }, items1);
  const items2 = [callback];
  const items3 = [callback];
  const callback1 = React.useCallback(() => {
    if (obj.getIsScreenReaderEnabled()) {
      callback();
    } else {
      callback2(true);
    }
  }, items2);
  const callback2 = React.useCallback(() => {
    callback();
  }, items3);
  obj = {};
  obj = {
    onPress() {
      let obj = emoji(onSelectRolesForEmoji[17]);
      obj = { key: "EMOJI_DISABLED" };
      const intl = guildId(onSelectRolesForEmoji[18]).intl;
      obj.content = intl.string(guildId(onSelectRolesForEmoji[18]).t.KUzI73);
      obj.open(obj);
    },
    disabled: emoji.available
  };
  obj1 = { style: tmp.emojiImage };
  const obj2 = {};
  let obj6 = emoji(onSelectRolesForEmoji[19]);
  obj2.uri = obj6.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj1.source = obj2;
  obj.children = callback(callback, obj1);
  obj.icon = callback(closure_7, obj);
  let obj8 = emoji(onSelectRolesForEmoji[20]);
  const nickname = obj8.getNickname(guildId, undefined, emoji.user);
  const obj4 = { style: tmp.flexCenterRow };
  const obj5 = { style: tmp.usernameContainer };
  let tmp14 = null;
  if (null != nickname) {
    obj6 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp14 = callback(guildId(onSelectRolesForEmoji[15]).LegacyText, obj6);
  }
  const items4 = [tmp14, ];
  const obj7 = { numberOfLines: 1, style: tmp.username };
  let obj13 = emoji(onSelectRolesForEmoji[21]);
  obj7.children = obj13.getUserTag(emoji.user);
  items4[1] = callback(guildId(onSelectRolesForEmoji[15]).LegacyText, obj7);
  obj5.children = items4;
  const items5 = [callback2(closure_5, obj5), , ];
  obj8 = { user: emoji.user, guildId, size: guildId(onSelectRolesForEmoji[15]).AvatarSizes.XSMALL };
  items5[1] = callback(guildId(onSelectRolesForEmoji[15]).Avatar, obj8);
  let tmp18 = null;
  if (!flag) {
    const obj9 = { style: tmp.overflowIcon, onPress: callback, hitSlop: 8 };
    const obj10 = { source: emoji(onSelectRolesForEmoji[23]), size: guildId(onSelectRolesForEmoji[15]).IconSizes.REFRESH_SMALL_16 };
    obj9.children = callback(guildId(onSelectRolesForEmoji[15]).Icon, obj10);
    tmp18 = callback(guildId(onSelectRolesForEmoji[22]).PressableOpacity, obj9);
  }
  items5[2] = tmp18;
  obj4.children = items5;
  obj.trailing = callback2(closure_5, obj4);
  if (tmp4[0]) {
    if (result) {
      const obj11 = { style: tmp.activeNameContainer };
      const obj12 = {
        autoCorrect: false,
        numberOfLines: 1,
        returnKeyType: "done",
        autoCapitalize: "none",
        autoFocus: true,
        onBlur: function handleNameBlur() {
              if (first !== emoji.name) {
                let obj = guildId(onSelectRolesForEmoji[10]);
                obj = { guildId, emojiId: emoji.id, name: emoji(onSelectRolesForEmoji[11]).sanitizeEmojiName(first) };
                obj.updateEmoji(obj);
                const obj3 = emoji(onSelectRolesForEmoji[11]);
              }
              callback2(false);
            }
      };
      const items6 = [, ];
      ({ emojiText: arr8[0], flex: arr8[1] } = tmp);
      obj12.style = items6;
      obj12.onChangeText = function updateName(arg0) {
        callback(arg0);
      };
      obj12.value = first;
      obj11.children = callback(guildId(onSelectRolesForEmoji[15]).TextInput, obj12);
      let tmp23 = callback(closure_5, obj11);
    }
    obj.label = tmp23;
    obj.disabled = flag;
    obj.onPress = callback1;
    obj.onLongPress = callback2;
    obj.start = start;
    obj.end = end;
    return callback(guildId(onSelectRolesForEmoji[16]).TableRow, obj);
  }
  obj13 = { style: tmp.nameContainer };
  const obj14 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  const items7 = [callback(guildId(onSelectRolesForEmoji[14]).Text, obj14), , ];
  const obj15 = { lineClamp: 1, style: tmp.emojiText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: first };
  items7[1] = callback(guildId(onSelectRolesForEmoji[14]).Text, obj15);
  const obj16 = { style: tmp.colon, variant: "text-md/medium", color: "text-muted", children: ":" };
  items7[2] = callback(guildId(onSelectRolesForEmoji[14]).Text, obj16);
  obj13.children = items7;
  tmp23 = callback2(closure_5, obj13);
};
