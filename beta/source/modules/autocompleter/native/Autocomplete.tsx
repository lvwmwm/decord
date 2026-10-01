// Module ID: 11875
// Function ID: 11876
// Name: Autocomplete
// Dependencies: [19, 17, 2067, 4479, 1372, 1074, 9726, 21, 4836, 576, 8053, 504, 4678, 1177, 9094, 5917, 5926, 1115, 7581, 5335, 4989, 4832, 5899, 11876, 9848, 5435, 9636, 12, 5330, 11877, 2010, 2011, 8021, 11878, 2]

// Module 11875 (Autocomplete)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2010 */;
import StringUtils from "StringUtils" /* 2011 */;
import Text_Text from "Text/Text" /* 4832 */;
import useChannelName from "useChannelName" /* 4989 */;
import TimestampUtils from "TimestampUtils" /* 5330 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5335 */;
import Pressables from "Pressables" /* 5435 */;
import FastImageDefault from "FastImage" /* 5899 */;
import TableRow2 from "TableRow" /* 5917 */;
import AssetRegistryDefault from "AssetRegistry" /* 7581 */;
import Form from "Form" /* 8053 */;
import StickerDefault from "Sticker" /* 9636 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 9726 */;
import StickersHooks from "StickersHooks" /* 9848 */;
import ChannelAutocompleteEmojiUpsellDefault from "ChannelAutocompleteEmojiUpsell" /* 11876 */;
import GameSearchRowExperimentDefault from "GameSearchRowExperiment" /* 11877 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let Fonts;
let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let tmp3;
const TableRowTrailingText2 = tmp3(5926);
function AutocompleteLabel(text) {
  const obj = { style: closure_11().leading, text: text.text };
  return React4(Form.FormRow.Label, obj);
}
const View = react_native.View;
({ ChannelTypes: metroImportAll, Fonts } = Constants);
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, leading: obj3, trailing: obj4, username: obj5, emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: obj6, stickerContainer: size, commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" }, commandChoiceLoadingItem: obj7, autocompleteIcon: { opacity: 0.6 }, gameIcon: size1, labelRow: obj8 };
obj2 = { height: AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj4 = { fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj6 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: nativeDefault.colors.TEXT_DEFAULT };
size = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
const obj9 = {
  User(user) {
    let Avatar;
    let guildId;
    let items1;
    let nick;
    let obj4;
    let obj5;
    let onPress;
    let status;
    let tmp6;
    user = user.user;
    ({ nick, guildId } = user);
    ({ status, onPress } = user);
    const tmp = closure_11();
    const items = [RelationshipStore];
    const obj = user(504);
    const stateFromStores = obj.useStateFromStores(items, () => {
      let nickname = null;
      if (null == guildId) {
        nickname = RelationshipStore.getNickname(user.id);
      }
      return nickname;
    });
    const obj2 = { DEPRECATED_style: tmp.row, onPress, accessibilityRole: "menuitem", label: closure_9(tmp6, { text: nick }), leading: closure_9(Avatar, obj4), trailing: closure_9(guildId(9094), obj5) };
    const FormRow = user(8053).FormRow;
    tmp6 = AutocompleteLabel;
    if (nick == null) {
      nick = stateFromStores;
    }
    if (nick == null) {
      const obj3 = guildId(4678);
      nick = obj3.getName(user);
    }
    obj4 = { status, user, size: user(1177).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
    Avatar = tmp2(1177).Avatar;
    obj5 = { user, usernameStyle: items1, discriminatorStyle: tmp.trailing };
    items1 = [, ];
    ({ trailing: arr2[0], username: arr2[1] } = tmp);
    return closure_9(FormRow, obj2);
  },
  Global(arg0) {
    let badge;
    let description;
    let items;
    let onPress;
    let text;
    let tmp2Result;
    ({ text, badge } = arg0);
    ({ description, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: tmp2Result, trailing: React4(TableRowTrailingText2.TableRowTrailingText, { text: description }) };
    const tmp = closure_11();
    const TableRow = TableRow2.TableRow;
    if (null != badge) {
      const obj2 = { style: tmp.labelRow, children: items };
      const obj3 = { text };
      items = [React4(AutocompleteLabel, obj3), badge];
      tmp2Result = authStore(View, obj2);
    } else {
      const obj4 = { text };
      tmp2Result = tmp2(AutocompleteLabel, obj4);
    }
    return React4(TableRow, obj);
  },
  Role(colorString) {
    let Label;
    let TableRowTrailingText;
    let name;
    let obj3;
    let onPress;
    let showDescription;
    let str;
    colorString = colorString.colorString;
    ({ onPress, showDescription, name } = colorString);
    const obj = { onPress, accessibilityRole: "menuitem", label: React4(Label, obj3), trailing: React4(TableRowTrailingText, { text: str }) };
    const tmp = closure_11();
    const TableRow = TableRow2.TableRow;
    const items = [tmp.leading, ];
    let tmp5;
    Label = Form.FormRow.Label;
    if (null != colorString) {
      tmp5 = { color: colorString };
      const obj2 = { color: colorString };
    }
    items[1] = tmp5;
    str = "";
    obj3 = { style: items, text: "@" + name };
    TableRowTrailingText = tmp3(5926).TableRowTrailingText;
    if (showDescription) {
      const intl = tmp3(1115).intl;
      str = intl.string(tmp3(1115).t.HrUmDH);
    }
    return React4(TableRow, obj);
  },
  Channel(onPress) {
    let Text;
    let category;
    let channel;
    let channelIconWithGuild;
    let name;
    let obj5;
    ({ channel, category } = onPress);
    onPress = onPress.onPress;
    const tmp = closure_11();
    if (channel.type === metroImportAll.GUILD_CATEGORY) {
      channelIconWithGuild = AssetRegistryDefault;
    } else {
      const obj = utils_ChannelUtils;
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp2);
    }
    const obj2 = { source: channelIconWithGuild, style: tmp.autocompleteIcon };
    const tmp9 = React4(native.Icon, obj2);
    const obj3 = useChannelName;
    const channelName = obj3.computeChannelName(channel, UserStore, RelationshipStore);
    const obj4 = { onPress, accessibilityRole: "menuitem", leading: tmp9, label: React4(AutocompleteLabel, { text: channelName }), trailing: React4(Text, obj5) };
    const FormRow = Form.FormRow;
    obj5 = { style: tmp.trailing, variant: "text-sm/medium", color: "text-muted", children: name };
    name = null != category;
    Text = Text_Text.Text;
    if (name) {
      name = category.name;
    }
    return React4(FormRow, obj4);
  },
  Emoji(url) {
    let items;
    let items1;
    let name;
    let obj3;
    let obj5;
    let onPress;
    let surrogates;
    let tmp2;
    let tmp5;
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_11();
    if ("" !== url) {
      const obj2 = { style: items, source: obj3 };
      items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj3 = { uri: url };
      tmp5 = React4(FastImageDefault, obj2);
      tmp2 = React4;
    } else {
      tmp2 = React4;
      const obj = { style: items1, allowFontScaling: false, children: surrogates };
      items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      tmp5 = React4(native.LegacyText, obj);
    }
    const obj4 = { onPress, accessibilityRole: "menuitem", leading: tmp5, label: tmp2(AutocompleteLabel, obj5) };
    obj5 = { text: ":" + name + ":" };
    const FormRow = Form.FormRow;
    return tmp2(FormRow, obj4);
  },
  EmojiPremiumUpsell(arg0) {
    let onPress;
    let results;
    ({ results, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: React4(ChannelAutocompleteEmojiUpsellDefault, { results }) };
    const FormRow = Form.FormRow;
    return React4(FormRow, obj);
  },
  Choice(arg0) {
    let choice;
    let obj2;
    let onPress;
    ({ choice, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: React4(AutocompleteLabel, obj2) };
    obj2 = { text: choice.displayName };
    const FormRow = Form.FormRow;
    return React4(FormRow, obj);
  },
  ChoiceLoading() {
    let items;
    let obj2;
    let obj3;
    const tmp = closure_11();
    const memo = react.useMemo(() => {
      const obj = _modDef12;
      return obj.random(100, 300);
    }, []);
    let obj = { DEPRECATED_style: tmp.row, leading: React4(View, obj2) };
    obj2 = { style: tmp.commandChoiceLoadingContainer, children: React4(View, obj3) };
    obj3 = { style: items };
    items = [tmp.commandChoiceLoadingItem, { width: memo }];
    const FormRow = Form.FormRow;
    return React4(FormRow, obj);
  },
  Sticker(arg0) {
    let isInteracting;
    let onLongPress;
    let onPress;
    let sticker;
    ({ sticker, onPress, onLongPress, isInteracting } = arg0);
    const tmp = closure_11();
    const obj = StickersHooks;
    const shouldAnimateSticker = obj.useShouldAnimateSticker(isInteracting);
    const obj2 = { accessibilityRole: "menuitem", style: tmp.stickerContainer, onPress, onLongPress, pointerEvents: "box-only", children: React4(StickerDefault, { sticker, size: 40, animated: shouldAnimateSticker }) };
    const PressableOpacity = Pressables.PressableOpacity;
    return React4(PressableOpacity, obj2);
  },
  Label(label) {
    label = label.label;
    const obj = { label: React4(AutocompleteLabel, { text: label }) };
    const FormRow = Form.FormRow;
    return React4(FormRow, obj);
  },
  Game(game) {
    let obj5;
    let obj7;
    let tmp6Result;
    let tmp8;
    let tmp8Result;
    game = game.game;
    const onPress = game.onPress;
    const tmp = closure_11();
    const obj = GameSearchRowExperimentDefault;
    const extraChromeEnabled = obj.useConfig({ location: "game_mention_autocomplete_native" }).extraChromeEnabled;
    const tmp4 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
    const obj2 = StringUtils;
    if (obj2.isNullOrEmpty(tmp4)) {
      const obj3 = { size: "sm", style: tmp.gameIcon };
      tmp6Result = tmp6(tmp5(8021).UnknownGameIcon, obj3);
      tmp8 = tmp6;
    } else {
      const obj4 = { style: tmp.gameIcon, source: obj5 };
      obj5 = { uri: tmp4 };
      tmp6Result = tmp6(tmp2(5899), obj4);
      tmp8 = tmp6;
    }
    const obj6 = { onPress, accessibilityRole: "menuitem", leading: tmp6Result, label: tmp8(AutocompleteLabel, obj7), trailing: tmp8Result };
    obj7 = { text: game.name };
    const FormRow = tmp5(8053).FormRow;
    tmp8Result = undefined;
    if (extraChromeEnabled) {
      const obj8 = { platforms: game.platformAvailability };
      tmp8Result = tmp8(tmp2(11878), obj8);
    }
    return tmp8(FormRow, obj6);
  },
  Timestamp(description) {
    let TableRowTrailingText;
    let mention;
    let obj3;
    let obj4;
    let onPress;
    let str = description.description;
    ({ mention, onPress } = description);
    const obj = TimestampUtils;
    const result = obj.formatTimestampMention(mention);
    let tmp5Result = null;
    if (null != result) {
      const obj2 = { onPress, accessibilityRole: "menuitem", label: React4(AutocompleteLabel, obj3), trailing: React4(TableRowTrailingText, obj4) };
      obj3 = { text: result.formatted };
      const TableRow = tmp(5917).TableRow;
      TableRowTrailingText = tmp(5926).TableRowTrailingText;
      if (str == null) {
        str = "";
      }
      obj4 = { text: str };
      tmp5Result = tmp5(TableRow, obj2);
    }
    return tmp5Result;
  }
};
size = size_mod;
let result = size.fileFinishedImporting("modules/autocompleter/native/Autocomplete.tsx");

export default obj9;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;
