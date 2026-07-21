// Module ID: 16121
// Function ID: 124300
// Name: num2
// Dependencies: []
// Exports: EmojiRow

// Module 16121 (num2)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, Image: closure_6, Pressable: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { flex: { flex: 1 }, flexCenterRow: {} };
obj = { -1437146132: true, -1907127711: true, 806923152: true, 692273813: true, borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj.nameContainer = obj;
const obj1 = {};
let obj4 = arg1(dependencyMap[7]);
let num = 4;
if (obj4.isAndroid()) {
  num = 0;
}
obj1.padding = num;
obj1.borderRadius = importDefault(dependencyMap[6]).radii.xs;
obj1.alignItems = "center";
obj1.flexDirection = "row";
obj.activeNameContainer = obj1;
obj.usernameContainer = {};
const obj2 = { fontSize: 16 };
const tmp3 = arg1(dependencyMap[4]);
let num2;
if (obj7.isAndroid()) {
  num2 = 0;
}
obj2.padding = num2;
obj2.color = importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.emojiText = obj2;
obj.colon = { width: 4 };
const obj7 = arg1(dependencyMap[7]);
obj.username = { fontSize: 13, color: importDefault(dependencyMap[6]).colors.TEXT_MUTED };
obj.emojiImage = { "Null": false, "Null": false, "Null": false };
obj4 = { justifyContent: "0e971a927dbdc3183654a0324b5f2831", alignItems: "ic_partnered_guild_icon_black_24px", height: "png", width: true, paddingLeft: importDefault(dependencyMap[6]).space.PX_8 };
obj.overflowIcon = obj4;
let closure_11 = obj.createStyles(obj);
const obj3 = { fontSize: 13, color: importDefault(dependencyMap[6]).colors.TEXT_MUTED };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji/EmojiRow.tsx");

export const EmojiRow = function EmojiRow(guildId) {
  let end;
  let start;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const emoji = guildId.emoji;
  const importDefault = emoji;
  let flag = guildId.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onSelectRolesForEmoji = guildId.onSelectRolesForEmoji;
  const dependencyMap = onSelectRolesForEmoji;
  let callback;
  let React;
  let closure_5;
  callback = undefined;
  ({ start, end } = guildId);
  const tmp = callback4();
  const tmp2 = callback(React.useState(emoji.name), 2);
  const first = tmp2[0];
  callback = first;
  React = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  closure_5 = tmp4[1];
  let obj = arg1(dependencyMap[8]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  let obj1 = arg1(dependencyMap[9]);
  const items1 = [guildId, emoji, onSelectRolesForEmoji];
  const result = obj1.useManageResourcePermissions(stateFromStores).canManageGuildExpression(emoji);
  callback = React.useCallback(() => {
    emoji(onSelectRolesForEmoji[12])({
      guildId,
      emoji,
      onEdit() {
        callback(true);
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
  let obj6 = importDefault(dependencyMap[19]);
  obj2.uri = obj6.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: 48 });
  obj1.source = obj2;
  obj.children = callback2(callback, obj1);
  obj.icon = callback2(closure_7, obj);
  let obj8 = importDefault(dependencyMap[20]);
  const nickname = obj8.getNickname(guildId, undefined, emoji.user);
  const obj4 = { style: tmp.flexCenterRow };
  const obj5 = { style: tmp.usernameContainer };
  let tmp14 = null;
  if (null != nickname) {
    obj6 = { numberOfLines: 1, style: tmp.username, children: nickname };
    tmp14 = callback2(arg1(dependencyMap[15]).LegacyText, obj6);
  }
  const items4 = [tmp14, ];
  const obj7 = { numberOfLines: 1, style: tmp.username };
  let obj13 = importDefault(dependencyMap[21]);
  obj7.children = obj13.getUserTag(emoji.user);
  items4[1] = callback2(arg1(dependencyMap[15]).LegacyText, obj7);
  obj5.children = items4;
  const items5 = [callback3(closure_5, obj5), , ];
  obj8 = { user: emoji.user, guildId, size: arg1(dependencyMap[15]).AvatarSizes.XSMALL };
  items5[1] = callback2(arg1(dependencyMap[15]).Avatar, obj8);
  let tmp18 = null;
  if (!flag) {
    const obj9 = { style: tmp.overflowIcon, onPress: callback, hitSlop: 8 };
    const obj10 = { source: importDefault(dependencyMap[23]), size: arg1(dependencyMap[15]).IconSizes.REFRESH_SMALL_16 };
    obj9.children = callback2(arg1(dependencyMap[15]).Icon, obj10);
    tmp18 = callback2(arg1(dependencyMap[22]).PressableOpacity, obj9);
  }
  items5[2] = tmp18;
  obj4.children = items5;
  obj.trailing = callback3(closure_5, obj4);
  if (tmp4[0]) {
    if (result) {
      const obj11 = { style: tmp.activeNameContainer };
      const obj12 = {
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
      obj11.children = callback2(arg1(dependencyMap[15]).TextInput, obj12);
      let tmp23 = callback2(closure_5, obj11);
    }
    obj.label = tmp23;
    obj.disabled = flag;
    obj.onPress = callback1;
    obj.onLongPress = callback2;
    obj.start = start;
    obj.end = end;
    return callback2(arg1(dependencyMap[16]).TableRow, obj);
  }
  obj13 = { style: tmp.nameContainer };
  const items7 = [callback2(arg1(dependencyMap[14]).Text, { style: tmp.colon }), callback2(arg1(dependencyMap[14]).Text, { style: tmp.emojiText, children: first }), callback2(arg1(dependencyMap[14]).Text, { style: tmp.colon })];
  obj13.children = items7;
  tmp23 = callback3(closure_5, obj13);
};
