// Module ID: 11459
// Function ID: 89164
// Name: AutocompleteLabel
// Dependencies: [31, 27, 1838, 3767, 1849, 653, 9594, 33, 4130, 689, 7636, 566, 3969, 1273, 9465, 5165, 5174, 1212, 7897, 4593, 4320, 4126, 5085, 11460, 9636, 4660, 9651, 22, 4160, 1832, 11461, 2]

// Module 11459 (AutocompleteLabel)
import set from "set";
import { View } from "apply";
import closure_5 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function AutocompleteLabel(text) {
  const tmp = _createForOfIteratorHelperLoose();
  return callback(require(7636) /* Form */.FormRow.Label, { style: _createForOfIteratorHelperLoose().leading, text: text.text });
}
const ChannelTypes = ME.ChannelTypes;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
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
const obj7 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.gameIcon = obj7;
const obj8 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.labelRow = obj8;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
const obj9 = {
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
    obj.label = callback(AutocompleteLabel, obj);
    const obj1 = { status, user, size: user(1273).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
    obj.leading = callback(user(1273).Avatar, obj1);
    const items1 = [, ];
    ({ trailing: arr2[0], username: arr2[1] } = tmp);
    obj.trailing = callback(guildId(9465), { user, usernameStyle: items1, discriminatorStyle: tmp.trailing });
    return callback(user(7636).FormRow, obj);
  },
  Global(arg0) {
    let badge;
    let description;
    let onPress;
    let text;
    ({ text, badge } = arg0);
    ({ description, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem" };
    if (null != badge) {
      obj = { style: tmp.labelRow };
      obj = { text };
      const items = [callback(AutocompleteLabel, obj), badge];
      obj.children = items;
      let tmp5 = callback2(View, obj);
    } else {
      const obj1 = { text };
      tmp5 = callback(AutocompleteLabel, obj1);
    }
    obj.label = tmp5;
    obj.trailing = callback(require(5174) /* TableRowTrailingText */.TableRowTrailingText, { text: description });
    return callback(require(5165) /* TableRowInner */.TableRow, obj);
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
    obj.label = closure_9(require(7636) /* Form */.FormRow.Label, obj);
    const obj1 = {};
    let str = "";
    if (showDescription) {
      const intl = require(1212) /* getSystemLocale */.intl;
      str = intl.string(require(1212) /* getSystemLocale */.t.HrUmDH);
    }
    obj1.text = str;
    obj.trailing = closure_9(require(5174) /* TableRowTrailingText */.TableRowTrailingText, obj1);
    return closure_9(require(5165) /* TableRowInner */.TableRow, obj);
  },
  Channel(onPress) {
    let category;
    let channel;
    ({ channel, category } = onPress);
    const tmp = _createForOfIteratorHelperLoose();
    if (channel.type === ChannelTypes.GUILD_CATEGORY) {
      let channelIconWithGuild = importDefault(7897);
    } else {
      let obj = require(4593) /* getThreadChannelIcon */;
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp2);
    }
    obj = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
    const tmp8 = callback(require(1273) /* Button */.Icon, obj);
    const channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel, closure_7, _isNativeReflectConstruct);
    obj = { onPress: onPress.onPress, accessibilityRole: "menuitem", leading: tmp8, label: callback(AutocompleteLabel, { text: channelName }) };
    const obj1 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted" };
    let name = null != category;
    if (name) {
      name = category.name;
    }
    obj1.children = name;
    obj.trailing = callback(require(4126) /* Text */.Text, obj1);
    return callback(require(7636) /* Form */.FormRow, obj);
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
      let tmp5 = callback(importDefault(5085), obj);
    } else {
      obj = {};
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.allowFontScaling = false;
      obj.children = surrogates;
      tmp5 = callback(require(1273) /* Button */.LegacyText, obj);
    }
    const obj1 = { onPress, accessibilityRole: "menuitem", leading: tmp5 };
    const obj2 = { text: ":" + name + ":" };
    obj1.label = callback(AutocompleteLabel, obj2);
    return callback(require(7636) /* Form */.FormRow, obj1);
  },
  EmojiPremiumUpsell(arg0) {
    let onPress;
    let results;
    ({ results, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: callback(importDefault(11460), { results }) };
    return callback(require(7636) /* Form */.FormRow, obj);
  },
  Choice(arg0) {
    let choice;
    let onPress;
    ({ choice, onPress } = arg0);
    let obj = { onPress, accessibilityRole: "menuitem" };
    obj = { text: choice.displayName };
    obj.label = callback(AutocompleteLabel, obj);
    return callback(require(7636) /* Form */.FormRow, obj);
  },
  ChoiceLoading() {
    const tmp = _createForOfIteratorHelperLoose();
    const memo = React.useMemo(() => outer1_1(outer1_2[27]).random(100, 300), []);
    let obj = { DEPRECATED_style: tmp.row };
    obj = { style: tmp.commandChoiceLoadingContainer };
    const items = [tmp.commandChoiceLoadingItem, { width: memo }];
    obj.children = callback(View, { style: items });
    obj.leading = callback(View, obj);
    return callback(require(7636) /* Form */.FormRow, obj);
  },
  Sticker(arg0) {
    let isInteracting;
    let onLongPress;
    let onPress;
    let sticker;
    ({ sticker, onPress, onLongPress, isInteracting } = arg0);
    let obj = require(9636) /* _createForOfIteratorHelperLoose */;
    const shouldAnimateSticker = obj.useShouldAnimateSticker(isInteracting);
    obj = { accessibilityRole: "menuitem", style: _createForOfIteratorHelperLoose().stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: callback(importDefault(9651), { sticker, size: 40, animated: shouldAnimateSticker }) };
    return callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  },
  Label(text) {
    const obj = { label: callback(AutocompleteLabel, { text: text.label }) };
    return callback(require(7636) /* Form */.FormRow, obj);
  },
  Game(game) {
    game = game.game;
    const tmp = _createForOfIteratorHelperLoose();
    const tmp2 = importDefault(4160)(game.id, game.icon, { size: 32 });
    let obj = require(1832) /* isNullOrEmpty */;
    if (obj.isNullOrEmpty(tmp2)) {
      obj = { size: "sm", style: tmp.gameIcon };
      let tmp3Result = tmp3(require(11461) /* UnknownGameIcon */.UnknownGameIcon, obj);
    } else {
      obj = { style: tmp.gameIcon };
      const obj1 = { uri: tmp2 };
      obj.source = obj1;
      tmp3Result = tmp3(importDefault(5085), obj);
    }
    const obj2 = { onPress: game.onPress, accessibilityRole: "menuitem", leading: tmp3Result, label: callback(AutocompleteLabel, { text: game.name }) };
    return callback(require(7636) /* Form */.FormRow, obj2);
  }
};
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default obj9;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;
