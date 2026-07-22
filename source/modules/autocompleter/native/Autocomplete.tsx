// Module ID: 11421
// Function ID: 88874
// Name: AutocompleteLabel
// Dependencies: []

// Module 11421 (AutocompleteLabel)
function AutocompleteLabel(text) {
  const tmp = callback();
  return jsx(arg1(dependencyMap[10]).FormRow.Label, { style: callback().leading, text: text.text });
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[5]);
const ChannelTypes = tmp2.ChannelTypes;
const jsx = arg1(dependencyMap[7]).jsx;
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { height: arg1(dependencyMap[6]).AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH };
obj.row = obj;
obj.leading = { fontSize: 16, color: importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: tmp2.Fonts.PRIMARY_SEMIBOLD };
const obj1 = { fontSize: 16, color: importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: tmp2.Fonts.PRIMARY_SEMIBOLD };
obj.trailing = { fontSize: 14, color: importDefault(dependencyMap[9]).colors.TEXT_MUTED };
const obj2 = { fontSize: 14, color: importDefault(dependencyMap[9]).colors.TEXT_MUTED };
obj.username = { color: importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_400 };
obj.emoji = { "Null": true, "Null": true };
obj.emojiImage = { resizeMode: "contain" };
const obj4 = { -1398941826: true, 541046124: false, 1600327841: false, color: importDefault(dependencyMap[9]).colors.TEXT_DEFAULT };
obj.emojiText = obj4;
const obj5 = { "Bool(false)": 53965145564882740000000000000000000000000000000000000000000000000000, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012688740650804652, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004778310225153025, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013283776541903, "Bool(false)": -92483392220510860000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.stickerContainer = obj5;
obj.commandChoiceLoadingContainer = { "Null": "<string:3942646034>", "Null": "<string:3355444267>" };
const obj3 = { color: importDefault(dependencyMap[9]).unsafe_rawColors.PRIMARY_400 };
obj.commandChoiceLoadingItem = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: importDefault(dependencyMap[9]).radii.lg, alignSelf: "flex-start" };
obj.autocompleteIcon = { opacity: 0.6 };
let closure_10 = obj.createStyles(obj);
const obj6 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: importDefault(dependencyMap[9]).radii.lg, alignSelf: "flex-start" };
const obj7 = {
  User(user) {
    let guildId;
    let nick;
    let onPress;
    let status;
    user = user.user;
    const arg1 = user;
    ({ nick, guildId } = user);
    const importDefault = guildId;
    ({ status, onPress } = user);
    const tmp = callback();
    let obj = arg1(dependencyMap[11]);
    const items = [closure_6];
    let stateFromStores = obj.useStateFromStores(items, () => {
      let nickname = null;
      if (null == guildId) {
        nickname = nickname.getNickname(user.id);
      }
      return nickname;
    });
    obj = { DEPRECATED_style: tmp.row, onPress, accessibilityRole: "menuitem" };
    obj = {};
    if (null != nick) {
      stateFromStores = nick;
    }
    if (null == stateFromStores) {
      stateFromStores = importDefault(dependencyMap[12]).getName(user);
      const obj4 = importDefault(dependencyMap[12]);
    }
    obj.text = stateFromStores;
    obj.label = <AutocompleteLabel {...obj} />;
    const obj1 = { status, user, size: arg1(dependencyMap[13]).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
    obj.leading = jsx(arg1(dependencyMap[13]).Avatar, obj1);
    const items1 = [, ];
    ({ trailing: arr2[0], username: arr2[1] } = tmp);
    obj.trailing = jsx(importDefault(dependencyMap[14]), { user, usernameStyle: items1, discriminatorStyle: tmp.trailing });
    return jsx(arg1(dependencyMap[10]).FormRow, obj);
  },
  Global(arg0) {
    let description;
    let onPress;
    let text;
    ({ text, description, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: <AutocompleteLabel text={text} />, trailing: jsx(arg1(dependencyMap[16]).TableRowTrailingText, { text: description }) };
    return jsx(arg1(dependencyMap[15]).TableRow, obj);
  },
  Role(colorString) {
    let name;
    let onPress;
    let showDescription;
    colorString = colorString.colorString;
    ({ onPress, showDescription, name } = colorString);
    let obj = { onPress, accessibilityRole: "menuitem" };
    obj = {};
    const items = [callback().leading, ];
    let tmp4;
    if (null != colorString) {
      obj = { color: colorString };
      tmp4 = obj;
    }
    items[1] = tmp4;
    obj.style = items;
    obj.text = "@" + name;
    obj.label = jsx(arg1(dependencyMap[10]).FormRow.Label, obj);
    const obj1 = {};
    let str = "";
    if (showDescription) {
      const intl = arg1(dependencyMap[17]).intl;
      str = intl.string(arg1(dependencyMap[17]).t.HrUmDH);
    }
    obj1.text = str;
    obj.trailing = jsx(arg1(dependencyMap[16]).TableRowTrailingText, obj1);
    return jsx(arg1(dependencyMap[15]).TableRow, obj);
  },
  Channel(onPress) {
    let category;
    let channel;
    ({ channel, category } = onPress);
    const tmp = callback();
    if (channel.type === ChannelTypes.GUILD_CATEGORY) {
      let channelIconWithGuild = importDefault(dependencyMap[18]);
    } else {
      let obj = arg1(dependencyMap[19]);
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp2);
    }
    obj = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
    const tmp8 = jsx(arg1(dependencyMap[13]).Icon, obj);
    const channelName = arg1(dependencyMap[20]).computeChannelName(channel, closure_7, closure_6);
    obj = { onPress: onPress.onPress, accessibilityRole: "menuitem", leading: tmp8, label: <AutocompleteLabel text={channelName} /> };
    const obj1 = { style: tmp.trailing };
    let name = null != category;
    if (name) {
      name = category.name;
    }
    obj1.children = name;
    obj.trailing = jsx(arg1(dependencyMap[21]).Text, obj1);
    return jsx(arg1(dependencyMap[10]).FormRow, obj);
  },
  Emoji(url) {
    let name;
    let onPress;
    let surrogates;
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = callback();
    if ("" !== url) {
      let obj = {};
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj.style = items;
      obj = { uri: url };
      obj.source = obj;
      let tmp5 = jsx(importDefault(dependencyMap[22]), obj);
    } else {
      obj = {};
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.allowFontScaling = false;
      obj.children = surrogates;
      tmp5 = jsx(arg1(dependencyMap[13]).LegacyText, obj);
    }
    const obj1 = { onPress, accessibilityRole: "menuitem", leading: tmp5 };
    const obj2 = { text: ":" + name + ":" };
    obj1.label = <AutocompleteLabel {...obj2} />;
    return jsx(arg1(dependencyMap[10]).FormRow, obj1);
  },
  EmojiPremiumUpsell(arg0) {
    let onPress;
    let results;
    ({ results, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: jsx(importDefault(dependencyMap[23]), { results }) };
    return jsx(arg1(dependencyMap[10]).FormRow, obj);
  },
  Choice(arg0) {
    let choice;
    let onPress;
    ({ choice, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem" };
    obj = { text: choice.displayName };
    obj.label = <AutocompleteLabel {...obj} />;
    return jsx(arg1(dependencyMap[10]).FormRow, obj);
  },
  ChoiceLoading() {
    const tmp = callback();
    const memo = React.useMemo(() => callback(closure_2[27]).random(100, 300), []);
    let obj = { DEPRECATED_style: tmp.row };
    obj = { style: tmp.commandChoiceLoadingContainer };
    const items = [tmp.commandChoiceLoadingItem, { width: memo }];
    obj.children = <View style={items} />;
    obj.leading = <View {...obj} />;
    return jsx(arg1(dependencyMap[10]).FormRow, obj);
  },
  Sticker(arg0) {
    let isInteracting;
    let onLongPress;
    let onPress;
    let sticker;
    ({ sticker, onPress, onLongPress, isInteracting } = arg0);
    let obj = arg1(dependencyMap[24]);
    const shouldAnimateSticker = obj.useShouldAnimateSticker(isInteracting);
    obj = { accessibilityRole: "menuitem", style: callback().stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: jsx(importDefault(dependencyMap[26]), { sticker, size: 40, animated: shouldAnimateSticker }) };
    return jsx(arg1(dependencyMap[25]).PressableOpacity, obj);
  },
  Label(text) {
    const obj = { label: <AutocompleteLabel text={arg0.label} /> };
    return jsx(arg1(dependencyMap[10]).FormRow, obj);
  }
};
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default obj7;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;
