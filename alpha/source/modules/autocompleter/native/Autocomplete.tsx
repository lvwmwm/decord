// Module ID: 13930
// Function ID: 13931
// Name: Autocomplete
// Dependencies: [19, 17, 4885, 4956, 1383, 1072, 10225, 21, 5014, 575, 8177, 504, 5068, 1187, 9201, 6975, 6986, 1113, 8708, 8603, 5652, 5624, 5717, 13931, 10266, 6980, 10282, 12, 8600, 13932, 2025, 2026, 8143, 13933, 2]

// Module 13930 (Autocomplete)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2025 */;
import StringUtils from "StringUtils" /* 2026 */;
import Text_Text from "Text/Text" /* 5624 */;
import useChannelName from "useChannelName" /* 5652 */;
import FastImageDefault from "FastImage" /* 5717 */;
import TableRow2 from "TableRow" /* 6975 */;
import Pressables from "Pressables" /* 6980 */;
import _mod8177 from "module_8177" /* 8177 */;
import TimestampUtils from "TimestampUtils" /* 8600 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8603 */;
import AssetRegistryDefault from "AssetRegistry" /* 8708 */;
import ApplicationCommandsConstants from "ApplicationCommandsConstants" /* 10225 */;
import StickersHooks from "StickersHooks" /* 10266 */;
import StickerDefault from "Sticker" /* 10282 */;
import ChannelAutocompleteEmojiUpsellDefault from "ChannelAutocompleteEmojiUpsell" /* 13931 */;
import GameSearchRowExperimentDefault from "GameSearchRowExperiment" /* 13932 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
const TableRowTrailingText2 = tmp3(6986);
function AutocompleteLabel(text) {
  const obj = { style: closure_11().leading, text: text.text };
  return React4(_mod8177.FormRow.Label, obj);
}
const View = react_native.View;
({ ChannelTypes: metroImportAll, Fonts } = Constants);
const AUTOCOMPLETE_ROW_HEIGHT = ApplicationCommandsConstants.AUTOCOMPLETE_ROW_HEIGHT;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, leading: obj3, trailing: obj4, username: obj5, emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: obj6, stickerContainer: size, commandChoiceLoadingContainer: { flex: 1, justifyContent: "center" }, commandChoiceLoadingItem: obj7, autocompleteIcon: { opacity: 0.6 }, gameIcon: size1, gameIconBackground: obj8, labelRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 } };
obj2 = { height: AUTOCOMPLETE_ROW_HEIGHT, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 16, color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj4 = { fontSize: 14, color: nativeDefault.colors.TEXT_MUTED };
obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_400 };
obj6 = { lineHeight: 32, fontSize: 27, textAlign: "center", color: nativeDefault.colors.TEXT_DEFAULT };
size = { width: 56, height: 56, marginHorizontal: 4, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: 16, borderRadius: nativeDefault.radii.lg, alignSelf: "flex-start" };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
obj8 = { backgroundColor: nativeDefault.unsafe_rawColors.NEUTRAL_36 };
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
let closure_11 = createStyles(obj);
const obj10 = {
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
    const obj2 = { DEPRECATED_style: tmp.row, onPress, accessibilityRole: "menuitem", label: closure_9(tmp6, { text: nick }), leading: closure_9(Avatar, obj4), trailing: closure_9(guildId(9201), obj5) };
    const FormRow = user(8177).FormRow;
    tmp6 = AutocompleteLabel;
    if (nick == null) {
      nick = stateFromStores;
    }
    if (nick == null) {
      const obj3 = guildId(5068);
      nick = obj3.getName(user);
    }
    obj4 = { status, user, size: user(1187).AvatarSizes.SMALL, guildId, autoStatusCutout: true };
    Avatar = tmp2(1187).Avatar;
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
    Label = _mod8177.FormRow.Label;
    if (null != colorString) {
      tmp5 = { color: colorString };
      const obj2 = { color: colorString };
    }
    items[1] = tmp5;
    str = "";
    obj3 = { style: items, text: "@" + name };
    TableRowTrailingText = tmp3(6986).TableRowTrailingText;
    if (showDescription) {
      const intl = tmp3(1113).intl;
      str = intl.string(tmp3(1113).t.HrUmDH);
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
    const FormRow = _mod8177.FormRow;
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
    const FormRow = _mod8177.FormRow;
    return tmp2(FormRow, obj4);
  },
  EmojiPremiumUpsell(arg0) {
    let onPress;
    let results;
    ({ results, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: React4(ChannelAutocompleteEmojiUpsellDefault, { results }) };
    const FormRow = _mod8177.FormRow;
    return React4(FormRow, obj);
  },
  Choice(arg0) {
    let choice;
    let obj2;
    let onPress;
    ({ choice, onPress } = arg0);
    const obj = { onPress, accessibilityRole: "menuitem", label: React4(AutocompleteLabel, obj2) };
    obj2 = { text: choice.displayName };
    const FormRow = _mod8177.FormRow;
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
    const FormRow = _mod8177.FormRow;
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
    const FormRow = _mod8177.FormRow;
    return React4(FormRow, obj);
  },
  Game(game) {
    let obj5;
    let obj7;
    let tmp6Result;
    let tmp9;
    let tmp9Result;
    game = game.game;
    const onPress = game.onPress;
    const tmp = closure_11();
    const obj = GameSearchRowExperimentDefault;
    const extraChromeEnabled = obj.useConfig({ location: "game_mention_autocomplete_native" }).extraChromeEnabled;
    const tmp4 = getGameMediaRefURLDefault(game.id, game.icon, { size: 32 });
    const obj2 = StringUtils;
    if (obj2.isNullOrEmpty(tmp4)) {
      const obj3 = { size: "sm", style: tmp.gameIcon };
      tmp6Result = tmp6(tmp5(8143).UnknownGameIcon, obj3);
      tmp9 = tmp6;
    } else {
      const items = [tmp.gameIcon, ];
      let gameIconBackground = extraChromeEnabled;
      const tmp2Result = FastImageDefault;
      if (extraChromeEnabled) {
        gameIconBackground = tmp.gameIconBackground;
      }
      const obj4 = { style: items, source: obj5 };
      items[1] = gameIconBackground;
      obj5 = { uri: tmp4 };
      tmp6Result = tmp6(tmp2Result, obj4);
      tmp9 = tmp6;
    }
    const obj6 = { onPress, accessibilityRole: "menuitem", leading: tmp6Result, label: tmp9(AutocompleteLabel, obj7), trailing: tmp9Result };
    obj7 = { text: game.name };
    const FormRow = tmp5(8177).FormRow;
    tmp9Result = undefined;
    if (extraChromeEnabled) {
      const obj8 = { platforms: game.platformAvailability };
      tmp9Result = tmp9(tmp2(13933), obj8);
    }
    return tmp9(FormRow, obj6);
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
      const TableRow = tmp(6975).TableRow;
      TableRowTrailingText = tmp(6986).TableRowTrailingText;
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

export default obj10;
export const AUTOCOMPLETE_STICKER_NODE_SIZE = 56;
export const AUTOCOMPLETE_STICKER_NODE_MARGIN = 4;
