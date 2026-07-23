// Module ID: 11689
// Function ID: 90668
// Name: WelcomeChannelRow
// Dependencies: [31, 27, 4991, 1348, 1838, 3758, 11686, 11690, 653, 1852, 482, 33, 4130, 689, 5052, 566, 4320, 1198, 4098, 5085, 1392, 3771, 4126, 1273, 10949, 7495, 686, 11688, 675, 5500, 11691, 1212, 2]
// Exports: default

// Module 11689 (WelcomeChannelRow)
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "_fetchWelcomeScreen";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { NO_WELCOME_SCREEN } from "_isNativeReflectConstruct";
import { WELCOME_SCREEN_TYPE } from "WELCOME_SCREEN_TYPE";
import ME from "ME";
import { EMOJI_URL_BASE_SIZE } from "set";
import { Permissions } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let Fonts;
let closure_13;
let closure_14;
let closure_17;
let closure_18;
let closure_4;
let closure_5;
const require = arg1;
class WelcomeChannelRow {
  constructor(arg0) {
    welcomeChannel = global.welcomeChannel;
    trackOptionSelect = global.trackOptionSelect;
    tmp = jsx();
    obj = require("initialize");
    items = [];
    items[0] = c7;
    stateFromStores = obj.useStateFromStores(items, () => outer1_7.getChannel(welcomeChannel.channel_id));
    useStateFromStores = stateFromStores;
    tmp3 = require("computeDefaultGroupDmNameFromUserIds")(stateFromStores, true);
    obj2 = require("initialize");
    items1 = [];
    items1[0] = c9;
    stateFromStores1 = obj2.useStateFromStores(items1, () => {
      let canResult = null != stateFromStores;
      if (canResult) {
        canResult = outer1_9.can(outer1_16.VIEW_CHANNEL, stateFromStores);
      }
      return canResult;
    });
    obj3 = require("initialize");
    items2 = [];
    items2[0] = c6;
    items3 = [];
    items3[0] = welcomeChannel.emoji_id;
    stateFromStores2 = obj3.useStateFromStores(items2, () => {
      let customEmojiById = null;
      if (null != welcomeChannel.emoji_id) {
        customEmojiById = outer1_6.getCustomEmojiById(welcomeChannel.emoji_id);
      }
      return customEmojiById;
    }, items3);
    items4 = [, ];
    items4[0] = stateFromStores;
    items4[1] = trackOptionSelect;
    tmp25Result = null;
    if (null != stateFromStores) {
      tmp25Result = null;
      if (stateFromStores1) {
        if (null != stateFromStores2) {
          tmp20 = jsx;
          tmp21 = trackOptionSelect;
          tmp22 = useStateFromStores;
          num5 = 19;
          obj = {};
          obj.style = tmp.emoji;
          obj1 = {};
          num6 = 20;
          tmp23 = require("preload");
          obj11 = require("getAvatarURL");
          obj2 = {};
          ({ id: obj12.id, animated: obj12.animated } = stateFromStores2);
          tmp24 = EMOJI_URL_BASE_SIZE;
          obj2.size = EMOJI_URL_BASE_SIZE;
          obj1.uri = obj11.getEmojiURL(obj2);
          obj.source = obj1;
          str2 = "contain";
          obj.resizeMode = "contain";
          tmp16 = jsx(tmp23, obj);
        } else {
          if (null != welcomeChannel.emoji_name) {
            tmp8 = trackOptionSelect;
            tmp9 = useStateFromStores;
            num = 21;
            obj4 = require("_createForOfIteratorHelperLoose");
            obj5 = require("_createForOfIteratorHelperLoose");
            flag = false;
            if (null != obj4.getByName(obj5.convertSurrogateToName(welcomeChannel.emoji_name, false))) {
              tmp17 = jsx;
              tmp18 = welcomeChannel;
              tmp19 = useStateFromStores;
              num4 = 22;
              obj3 = {};
              obj3.style = tmp.emoji;
              str = "text-sm/medium";
              obj3.variant = "text-sm/medium";
              obj3.children = welcomeChannel.emoji_name;
              tmp16 = jsx(require("Text").Text, obj3);
            }
          }
          tmp10 = jsx;
          tmp11 = View;
          obj4 = {};
          obj4.style = tmp.placeholderEmojiWrapper;
          tmp12 = jsx;
          tmp13 = welcomeChannel;
          tmp14 = useStateFromStores;
          num2 = 23;
          obj5 = {};
          obj5.size = require("Button").Icon.Sizes.REFRESH_SMALL_16;
          tmp15 = trackOptionSelect;
          num3 = 24;
          obj5.source = require("registerAsset");
          obj4.children = jsx(require("Button").Icon, obj5);
          tmp16 = jsx(View, obj4);
        }
        tmp26 = welcomeChannel;
        tmp27 = useStateFromStores;
        num7 = 25;
        tmp25 = jsx;
        obj6 = {};
        obj6.DEPRECATED_style = tmp.welcomeChannel;
        obj6.leading = tmp16;
        tmp28 = jsx;
        num8 = 22;
        obj7 = { variant: "text-sm/semibold", color: "interactive-text-active" };
        obj7.children = welcomeChannel.description;
        obj6.label = jsx(require("Text").Text, obj7);
        tmp29 = null;
        if (null != stateFromStores) {
          tmp30 = jsx;
          tmp31 = welcomeChannel;
          tmp32 = useStateFromStores;
          obj8 = { variant: "text-sm/medium", color: "text-default" };
          obj8.children = tmp3;
          tmp29 = jsx(require("Text").Text, obj8);
        }
        obj6.subLabel = tmp29;
        obj6.onPress = tmp6;
        tmp33 = jsx;
        tmp34 = welcomeChannel;
        tmp35 = useStateFromStores;
        obj6.trailing = jsx(require("Form").FormRow.Arrow, {});
        tmp25Result = tmp25(require("Form").FormRow, obj6);
      }
    }
    return tmp25Result;
  }
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_13, Fonts, Routes: closure_14 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", paddingHorizontal: 16, width: "100%", paddingVertical: 32, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, width: 64, height: 64, marginBottom: 16 };
_createForOfIteratorHelperLoose.guildIcon = obj1;
let obj2 = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 24));
obj2["marginBottom"] = 8;
obj2["textAlign"] = "center";
_createForOfIteratorHelperLoose.header = obj2;
let obj3 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
_createForOfIteratorHelperLoose.headerGuildName = obj3;
_createForOfIteratorHelperLoose.guildDescription = { textAlign: "center", marginBottom: 30 };
_createForOfIteratorHelperLoose.welcomeChannel = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.channelsTitle = { alignSelf: "flex-start" };
_createForOfIteratorHelperLoose.emoji = { width: 24, height: 24 };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginTop: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.placeholderEmojiWrapper = { padding: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj5 = { padding: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/welcome_screen/native/GuildWelcomeActionSheet.tsx");

export default function GuildWelcomeActionSheet(guildId) {
  guildId = guildId.guildId;
  const onHide = guildId.onHide;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = guildId(566);
  let items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(guildId));
  let obj1 = guildId(566);
  let items1 = [closure_10];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ welcomeScreen: outer1_10.get(guildId), fetching: outer1_10.isFetching(), hasError: outer1_10.hasError() }));
  const welcomeScreen = stateFromStoresObject.welcomeScreen;
  const fetching = stateFromStoresObject.fetching;
  const hasError = stateFromStoresObject.hasError;
  const items2 = [guildId, welcomeScreen];
  const effect = welcomeScreen.useEffect(() => {
    if (null == welcomeScreen) {
      onHide(onHide[26]).wait(() => guildId(table[27]).fetchWelcomeScreen(outer1_0));
      const obj = onHide(onHide[26]);
    }
  }, items2);
  const items3 = [fetching, hasError];
  const effect1 = welcomeScreen.useEffect(() => {
    let tmp = false === fetching;
    if (tmp) {
      tmp = true === hasError;
    }
    if (tmp) {
      onHide(tmp[18]).hideActionSheet();
      const obj = onHide(tmp[18]);
    }
  }, items3);
  const items4 = [guildId, welcomeScreen];
  const effect2 = welcomeScreen.useEffect(() => {
    if (null != welcomeScreen) {
      onHide(onHide[26]).wait(() => guildId(table[27]).welcomeScreenViewed(outer1_0));
      const obj = onHide(onHide[26]);
    }
  }, items4);
  const items5 = [welcomeScreen];
  const effect3 = welcomeScreen.useEffect(() => {
    if (welcomeScreen === outer1_11) {
      onHide(onHide[18]).hideActionSheet();
      const obj = onHide(onHide[18]);
    }
  }, items5);
  const items6 = [guildId];
  const effect4 = welcomeScreen.useEffect(() => {
    let obj = onHide(tmp[28]);
    obj = { type: outer1_12, guild_id: guildId };
    obj.track(outer1_13.OPEN_MODAL, obj);
  }, items6);
  const items7 = [onHide];
  const effect5 = welcomeScreen.useEffect(() => () => {
    if (null != outer1_1) {
      outer1_1();
    }
  }, items7);
  const items8 = [guildId, welcomeScreen];
  let _isNativeReflectConstruct = welcomeScreen.useCallback((index) => {
    if (null != welcomeScreen) {
      const items = [];
      const items1 = [];
      let c2 = false;
      const welcome_channels = welcomeScreen.welcome_channels;
      const item = welcome_channels.forEach((description) => {
        items.push(description.description);
        items1.push(description.channel_id);
        if (null != description.emoji_id) {
          let c2 = true;
        }
      });
      let obj = onHide(tmp[28]);
      obj = { index, guild_id: items, options: items, options_channel_ids: items1, guild_description: welcomeScreen.description, has_custom_emojis: c2 };
      obj.track(outer1_13.GUILD_WELCOME_SCREEN_OPTION_SELECTED, obj);
    }
  }, items8);
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = null;
    if (null != welcomeScreen) {
      obj = { startExpanded: true };
      obj = { contentContainerStyle: tmp.container };
      obj1 = { style: tmp.guildIcon, guild: stateFromStores, size: onHide(11691).Sizes.MEDIUM, textScale: 2 };
      const items9 = [callback(onHide(11691), obj1), , , , ];
      const obj2 = { style: tmp.header, variant: "heading-xl/extrabold", color: "text-default" };
      const intl = guildId(1212).intl;
      const obj3 = {
        guildName: stateFromStores.name,
        guildNameHook(children) {
              const obj = { style: tmp.headerGuildName, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children };
              return outer1_17(guildId(tmp[22]).Text, obj, arg1);
            }
      };
      obj2.children = intl.format(guildId(1212).t["0aydCN"], obj3);
      items9[1] = callback(guildId(4126).Text, obj2);
      const obj4 = { style: tmp.guildDescription, variant: "text-sm/medium", color: "text-default", children: welcomeScreen.description };
      items9[2] = callback(guildId(4126).Text, obj4);
      const obj5 = { style: tmp.channelsTitle, variant: "eyebrow", color: "text-default" };
      const intl2 = guildId(1212).intl;
      const tmp18 = onHide(11691);
      obj5.children = intl2.string(guildId(1212).t["haj5+i"]).toUpperCase();
      items9[3] = callback(guildId(4126).Text, obj5);
      let welcome_channels = welcomeScreen.welcome_channels;
      items9[4] = welcome_channels.map((welcomeChannel) => {
        let closure_0 = arg1;
        return outer1_17(outer1_20, {
          welcomeChannel,
          trackOptionSelect(arg0) {
            return outer1_6(closure_0);
          }
        }, arg1);
      });
      obj.children = items9;
      obj.children = callback2(hasError, obj);
      tmp10 = callback(guildId(5500).ActionSheet, obj);
      const str = intl2.string(guildId(1212).t["haj5+i"]);
    }
  }
  return tmp10;
};
export { WelcomeChannelRow };
