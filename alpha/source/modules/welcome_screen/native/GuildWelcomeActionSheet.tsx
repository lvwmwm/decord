// Module ID: 14181
// Function ID: 14182
// Name: GuildWelcomeActionSheet
// Dependencies: [19, 17, 6790, 4858, 4880, 4941, 14178, 14182, 1072, 1387, 1083, 21, 5009, 575, 6717, 504, 5647, 1100, 5253, 5712, 1410, 4955, 5619, 1188, 13181, 8169, 14180, 1253, 7360, 14183, 1114, 2]
// Exports: default

// Module 14181 (GuildWelcomeActionSheet)
import nativeDefault from "native" /* 575 */;
import Constants2 from "Constants" /* 1083 */;
import router_utils from "router_utils" /* 1100 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import EmojiConstants from "EmojiConstants" /* 1387 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import WelcomeScreenStore2 from "WelcomeScreenStore" /* 14178 */;
import WelcomeScreenActionCreators from "WelcomeScreenActionCreators" /* 14180 */;
import WelcomeScreenConstants from "WelcomeScreenConstants" /* 14182 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmojiStore from "EmojiStore" /* 6790 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles_mod from "TextStyles" /* 6717 */;
import size_mod from "module_2" /* 2 */;

const WelcomeScreenStore = WelcomeScreenStore2;
let c2, dependencyMap, has_custom_emojis;

let Fonts;
let closure_14;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
class WelcomeChannelRow {
  constructor(welcomeChannel) {
    let Icon;
    let obj12;
    let obj5;
    let obj6;
    let obj9;
    let tmp12Result;
    let tmp5Result4;
    welcomeChannel = welcomeChannel.welcomeChannel;
    const trackOptionSelect = welcomeChannel.trackOptionSelect;
    let stateFromStores;
    const tmp = closure_19();
    let obj = welcomeChannel(stateFromStores[15]);
    const items = [ChannelStore];
    stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(welcomeChannel.channel_id));
    const tmp6 = trackOptionSelect(stateFromStores[16])(stateFromStores, true);
    let obj2 = welcomeChannel(stateFromStores[15]);
    const items1 = [PermissionStore];
    const stateFromStores1 = obj2.useStateFromStores(items1, () => {
      const canResult = null != stateFromStores && PermissionStore.can(Permissions.VIEW_CHANNEL, tmp);
      return canResult;
    });
    const items2 = [EmojiStore];
    const items3 = [welcomeChannel.emoji_id];
    const obj3 = welcomeChannel(stateFromStores[15]);
    const stateFromStores2 = obj3.useStateFromStores(items2, () => {
      let customEmojiById = null;
      if (null != welcomeChannel.emoji_id) {
        customEmojiById = EmojiStore.getCustomEmojiById(tmp.emoji_id);
      }
      return customEmojiById;
    }, items3);
    const items4 = [stateFromStores, trackOptionSelect];
    let tmp12Result2 = null;
    if (null != stateFromStores) {
      tmp12Result2 = null;
      if (stateFromStores1) {
        let tmp14;
        let tmp12;
        if (null != stateFromStores2) {
          const obj4 = { style: tmp.emoji, source: obj5, resizeMode: "contain" };
          obj5 = { uri: tmp5Result4.getEmojiURL(obj6) };
          obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj11.id, animated: obj11.animated } = stateFromStores2);
          const tmp5Result = trackOptionSelect(stateFromStores[19]);
          tmp5Result4 = trackOptionSelect(stateFromStores[20]);
          tmp14 = closure_17(tmp5Result, obj4);
          tmp12 = closure_17;
        } else {
          if (null != welcomeChannel.emoji_name) {
            const getByName = tmp5(tmp3[21]).getByName;
            trackOptionSelect(stateFromStores[21]);
            const tmp5Result6 = trackOptionSelect(stateFromStores[21]);
            if (null != getByName(tmp5Result6.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
              const obj7 = { style: tmp.emoji, variant: "text-sm/medium", children: welcomeChannel.emoji_name };
              tmp14 = closure_17(tmp2(tmp3[22]).Text, obj7);
              tmp12 = closure_17;
            }
          }
          tmp12 = closure_17;
          const obj8 = { style: tmp.placeholderEmojiWrapper, children: closure_17(Icon, obj9) };
          obj9 = { size: welcomeChannel(stateFromStores[23]).Icon.Sizes.REFRESH_SMALL_16, source: trackOptionSelect(stateFromStores[24]) };
          Icon = tmp2(tmp3[23]).Icon;
          tmp14 = closure_17(closure_4, obj8);
        }
        const obj10 = { DEPRECATED_style: tmp.welcomeChannel, leading: tmp14, label: tmp12(welcomeChannel(stateFromStores[22]).Text, obj12), subLabel: tmp12Result, onPress: tmp9, trailing: tmp12(welcomeChannel(stateFromStores[25]).FormRow.Arrow, {}) };
        const FormRow = tmp2(tmp3[25]).FormRow;
        tmp12Result = null;
        obj12 = { variant: "text-sm/semibold", color: "interactive-text-active", children: welcomeChannel.description };
        if (null != stateFromStores) {
          const obj13 = { variant: "text-sm/medium", color: "text-default", children: tmp6 };
          tmp12Result = tmp12(tmp2(tmp3[22]).Text, obj13);
        }
        tmp12Result2 = tmp12(FormRow, obj10);
      }
    }
    return tmp12Result2;
  }
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const NO_WELCOME_SCREEN = WelcomeScreenStore2.NO_WELCOME_SCREEN;
const WELCOME_SCREEN_TYPE = WelcomeScreenConstants.WELCOME_SCREEN_TYPE;
({ AnalyticEvents: map1, Fonts, Routes: closure_14 } = Constants);
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const Permissions = Constants2.Permissions;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildIcon: size, header: obj3, headerGuildName: obj4, guildDescription: { textAlign: "center", marginBottom: 30 }, welcomeChannel: obj5, channelsTitle: { alignSelf: "flex-start" }, emoji: { width: 24, height: 24 }, placeholderEmojiWrapper: obj6 };
obj2 = { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.sm, width: 64, height: 64, marginBottom: 16 };
obj3 = { marginBottom: 8, textAlign: "center" };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 24));
obj4 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: nativeDefault.radii.sm };
obj6 = { padding: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.xs };
let closure_19 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default function GuildWelcomeActionSheet(guildId) {
  let intl;
  let items9;
  let obj4;
  let obj7;
  let str;
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  let tmp = closure_19();
  dependencyMap = tmp;
  let obj = guildId(504);
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj2 = guildId(504);
  let items1 = [WelcomeScreenStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { welcomeScreen: WelcomeScreenStore.get(guildId), fetching: WelcomeScreenStore.isFetching(), hasError: WelcomeScreenStore.hasError() };
    return obj;
  });
  let welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  const items2 = [guildId, welcomeScreen];
  const effect = welcomeScreen.useEffect(() => {
    if (null == welcomeScreen) {
      const obj = WelcomeScreenActionCreators;
      welcomeScreen = obj.fetchWelcomeScreen(guildId);
    }
  }, items2);
  const items3 = [fetching, hasError];
  const effect1 = welcomeScreen.useEffect(() => {
    const tmp = false === fetching && true === hasError;
    if (tmp) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items3);
  const items4 = [guildId, welcomeScreen];
  const effect2 = welcomeScreen.useEffect(() => {
    if (null != welcomeScreen) {
      const obj = WelcomeScreenActionCreators;
      obj.welcomeScreenViewed(guildId);
    }
  }, items4);
  const items5 = [welcomeScreen];
  const effect3 = welcomeScreen.useEffect(() => {
    if (welcomeScreen === NO_WELCOME_SCREEN) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items5);
  const items6 = [guildId];
  const effect4 = welcomeScreen.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: WELCOME_SCREEN_TYPE, guild_id: guildId };
    obj.track(map1.OPEN_MODAL, obj2);
  }, items6);
  const items7 = [onHide];
  const effect5 = welcomeScreen.useEffect(() => () => {
    if (onHide != null) {
      tmp();
    }
  }, items7);
  const items8 = [guildId, welcomeScreen];
  let closure_6 = welcomeScreen.useCallback((index) => {
    if (null != welcomeScreen) {
      const items = [];
      const items1 = [];
      has_custom_emojis = false;
      const welcome_channels = tmp.welcome_channels;
      const item = welcome_channels.forEach((description) => {
        items.push(description.description);
        items1.push(description.channel_id);
        if (null != description.emoji_id) {
          c2 = true;
        }
      });
      const obj2 = { index, guild_id: guildId, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis };
      const obj = AnalyticsUtilsDefault;
      obj.track(map1.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj2);
    }
  }, items8);
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if (null != welcomeScreen) {
      const obj3 = { startExpanded: true, children: closure_18(hasError, obj4) };
      obj4 = { contentContainerStyle: tmp.container, children: items9 };
      const ActionSheet = tmp2(7360).ActionSheet;
      const obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: onHide(14183).Sizes.MEDIUM, textScale: 2 };
      const tmp17 = onHide(14183);
      items9 = [closure_17(tmp17, obj5), , , , ];
      const obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "text-default", children: intl.format(guildId(1114).t["0aydCN"], obj7) };
      const Text = tmp2(5619).Text;
      intl = tmp2(1114).intl;
      obj7 = {
        guildName: stateFromStores.name,
        guildNameHook(children, arg1) {
              const obj = { style: has_custom_emojis.headerGuildName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children };
              return closure_17(Text_Text.Text, obj, arg1);
            }
      };
      items9[1] = closure_17(Text, obj6);
      const obj8 = { style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: welcomeScreen.description };
      items9[2] = closure_17(guildId(5619).Text, obj8);
      const obj9 = { style: tmp.channelsTitle, variant: "eyebrow", color: "text-default", children: str.toUpperCase() };
      const Text2 = tmp2(5619).Text;
      const intl2 = tmp2(1114).intl;
      str = intl2.string(guildId(1114).t["haj5+i"]);
      items9[3] = closure_17(Text2, obj9);
      let welcome_channels = welcomeScreen.welcome_channels;
      items9[4] = welcome_channels.map((welcomeChannel, index) => {
        let closure_0 = index;
        const obj = {
          welcomeChannel,
          trackOptionSelect() {
            return closure_6(index);
          }
        };
        return closure_1_17(WelcomeChannelRow, obj, index);
      });
      tmp12 = closure_17(ActionSheet, obj3);
    }
  }
  return tmp12;
};
export { WelcomeChannelRow };
