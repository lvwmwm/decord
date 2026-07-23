// Module ID: 11431
// Function ID: 88924
// Name: AutocompleteLabel
// Dependencies: [31, 27, 1838, 3767, 1849, 653, 9558, 33, 4130, 689, 7495, 566, 3969, 1273, 9429, 5165, 5174, 1212, 7806, 4593, 4320, 4126, 5085, 11432, 9600, 4660, 9615, 22, 2]

// Module 11431 (AutocompleteLabel)
import result from "result";
import { View } from "apply";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function AutocompleteLabel(text) {
  const tmp = _createForOfIteratorHelperLoose();
  return jsx(require(7495) /* Form */.FormRow.Label, { style: _createForOfIteratorHelperLoose().leading, text: text.text });
}
const ChannelTypes = ME.ChannelTypes;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: require("AUTOCOMPLETE_ROW_HEIGHT").AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.row = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.leading = { fontSize: 16, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: ME.Fonts.PRIMARY_SEMIBOLD };
let obj1 = { fontSize: 16, color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: ME.Fonts.PRIMARY_SEMIBOLD };
_createForOfIteratorHelperLoose.trailing = { fontSize: 14, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let obj2 = { fontSize: 14, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.username = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
_createForOfIteratorHelperLoose.emoji = { width: 32, height: 32 };
_createForOfIteratorHelperLoose.emojiImage = { resizeMode: "contain" };
let obj4 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.emojiText = obj4;
const obj5 = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.stickerContainer = obj5;
_createForOfIteratorHelperLoose.commandChoiceLoadingContainer = { flex: 1, justifyContent: "center" };
const obj3 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_400 };
_createForOfIteratorHelperLoose.commandChoiceLoadingItem = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
_createForOfIteratorHelperLoose.autocompleteIcon = { opacity: 0.6 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
const obj7 = {
  User(user) {
    let guildId;
    let nick;
    let onPress;
    let status;
    user = user.user;
    ({ nick, guildId } = user);
    ({ status, onPress } = user);
    const tmp = _createForOfIteratorHelperLoose();
    let obj = user(566);
    const items = [_isNativeReflectConstruct];
    let stateFromStores = obj.useStateFromStores(items, () => {
      let nickname = null;
      if (null == guildId) {
        nickname = outer1_6.getNickname(user.id);
      }
      return nickname;
    });
    obj = { DEPRECATED_style: tmp.row, onPress, accessibilityRole: "menuitem" };
    obj = {};
    if (null != nick) {
      stateFromStores = nick;
    }
    if (null == stateFromStores) {
      stateFromStores = guildId(3969).getName(user);
      const obj4 = guildId(3969);
    }
    obj.text = stateFromStores;
    obj.label = <AutocompleteLabel />;
    const obj1 = { status, user, size: user(1273).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
    obj.leading = jsx(user(1273).Avatar, { status, user, size: user(1273).AvatarSizes.SMALL, guildId, autoStatusCutout: true });
    const items1 = [, ];
    ({ trailing: arr2[0], username: arr2[1] } = tmp);
    obj.trailing = jsx(guildId(9429), { user, usernameStyle: items1, discriminatorStyle: tmp.trailing });
    return jsx(user(7495).FormRow, {});
  },
  Global(arg0) {
    let description;
    let onPress;
    let text;
    ({ text, description, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: <AutocompleteLabel text={text} />, trailing: jsx(require(5174) /* TableRowTrailingText */.TableRowTrailingText, { text: description }) };
    return jsx(require(5165) /* TableRowInner */.TableRow, { onPress, accessibilityRole: "menuitem", label: <AutocompleteLabel text={text} />, trailing: jsx(require(5174) /* TableRowTrailingText */.TableRowTrailingText, { text: description }) });
  },
  Role(colorString) {
    let name;
    let onPress;
    let showDescription;
    colorString = colorString.colorString;
    ({ onPress, showDescription, name } = colorString);
    let obj = { onPress, accessibilityRole: "menuitem" };
    obj = {};
    const items = [_createForOfIteratorHelperLoose().leading, ];
    let tmp4;
    if (null != colorString) {
      obj = { color: colorString };
      tmp4 = obj;
    }
    items[1] = tmp4;
    obj.style = items;
    obj.text = "@" + name;
    obj.label = jsx(require(7495) /* Form */.FormRow.Label, {});
    const obj1 = {};
    let str = "";
    if (showDescription) {
      const intl = require(1212) /* getSystemLocale */.intl;
      str = intl.string(require(1212) /* getSystemLocale */.t.HrUmDH);
    }
    obj1.text = str;
    obj.trailing = jsx(require(5174) /* TableRowTrailingText */.TableRowTrailingText, {});
    return jsx(require(5165) /* TableRowInner */.TableRow, {});
  },
  Channel(onPress) {
    let category;
    let channel;
    ({ channel, category } = onPress);
    const tmp = _createForOfIteratorHelperLoose();
    if (channel.type === ChannelTypes.GUILD_CATEGORY) {
      let channelIconWithGuild = importDefault(7806);
    } else {
      let obj = require(4593) /* getThreadChannelIcon */;
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp2);
    }
    obj = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
    const tmp8 = jsx(require(1273) /* Button */.Icon, { source: channelIconWithGuild, style: tmp.autocompleteIcon });
    const channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_7, _isNativeReflectConstruct);
    obj = { onPress: onPress.onPress, accessibilityRole: "menuitem", leading: tmp8, label: <AutocompleteLabel text={channelName} /> };
    const obj1 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted" };
    let name = null != category;
    if (name) {
      name = category.name;
    }
    obj1.children = name;
    obj.trailing = jsx(require(4126) /* Text */.Text, { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted" });
    return jsx(require(7495) /* Form */.FormRow, { onPress: onPress.onPress, accessibilityRole: "menuitem", leading: tmp8, label: <AutocompleteLabel text={channelName} /> });
  },
  Emoji(url) {
    let name;
    let onPress;
    let surrogates;
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = _createForOfIteratorHelperLoose();
    if ("" !== url) {
      let obj = {};
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj.style = items;
      obj = { uri: url };
      obj.source = obj;
      let tmp5 = jsx(importDefault(5085), { uri: url });
    } else {
      obj = {};
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.allowFontScaling = false;
      obj.children = surrogates;
      tmp5 = jsx(require(1273) /* Button */.LegacyText, {});
    }
    const obj1 = { onPress, accessibilityRole: "menuitem", leading: tmp5 };
    const obj2 = { text: ":" + name + ":" };
    obj1.label = <AutocompleteLabel text={":" + name + ":"} />;
    return jsx(require(7495) /* Form */.FormRow, { onPress, accessibilityRole: "menuitem", leading: tmp5 });
  },
  EmojiPremiumUpsell(arg0) {
    let onPress;
    let results;
    ({ results, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: jsx(importDefault(11432), { results }) };
    return jsx(require(7495) /* Form */.FormRow, { onPress, accessibilityRole: "menuitem", label: jsx(importDefault(11432), { results }) });
  },
  Choice(arg0) {
    let choice;
    let onPress;
    ({ choice, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem" };
    obj = { text: choice.displayName };
    obj.label = <AutocompleteLabel text={choice.displayName} />;
    return jsx(require(7495) /* Form */.FormRow, { text: choice.displayName });
  },
  ChoiceLoading() {
    const tmp = _createForOfIteratorHelperLoose();
    const memo = React.useMemo(() => outer1_1(outer1_2[27]).random(100, 300), []);
    let obj = { DEPRECATED_style: tmp.row };
    obj = { style: tmp.commandChoiceLoadingContainer };
    const items = [tmp.commandChoiceLoadingItem, { width: memo }];
    obj.children = <View style={items} />;
    obj.leading = <View style={tmp.commandChoiceLoadingContainer} />;
    return jsx(require(7495) /* Form */.FormRow, { style: tmp.commandChoiceLoadingContainer });
  },
  Sticker(arg0) {
    let isInteracting;
    let onLongPress;
    let onPress;
    let sticker;
    ({ sticker, onPress, onLongPress, isInteracting } = arg0);
    let obj = require(9600) /* _createForOfIteratorHelperLoose */;
    const shouldAnimateSticker = obj.useShouldAnimateSticker(isInteracting);
    obj = { accessibilityRole: "menuitem", style: _createForOfIteratorHelperLoose().stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: jsx(importDefault(9615), { sticker, size: 40, animated: shouldAnimateSticker }) };
    return jsx(require(4660) /* PressableBase */.PressableOpacity, { accessibilityRole: "menuitem", style: _createForOfIteratorHelperLoose().stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: jsx(importDefault(9615), { sticker, size: 40, animated: shouldAnimateSticker }) });
  },
  Label(text) {
    const obj = { label: <AutocompleteLabel text={arg0.label} /> };
    return jsx(require(7495) /* Form */.FormRow, { label: <AutocompleteLabel text={arg0.label} /> });
  }
};
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default obj7;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;
