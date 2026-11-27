// Module ID: 10850
// Function ID: 10851
// Name: StickerDetailActionSheet
// Dependencies: [5, 32, 19, 17, 4914, 1387, 6927, 10801, 1071, 5272, 21, 5043, 1379, 575, 10831, 9768, 9766, 5257, 10832, 5725, 1112, 504, 1495, 1256, 5634, 10847, 5641, 10849, 10834, 10840, 2174, 4868, 6779, 10851, 2120, 6013, 6991, 6995, 10852, 8109, 10682, 7745, 9637, 10853, 8088, 9772, 5271, 2]

// Module 10850 (StickerDetailActionSheet)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5272 */;
import StickersUtils from "StickersUtils" /* 6779 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6991 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6995 */;
import openUserSettings from "openUserSettings" /* 8109 */;
import StickersHooks from "StickersHooks" /* 10831 */;
import stickers_StickersUtils from "stickers/StickersUtils" /* 10834 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 10840 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10849 */;
import openStickersPremiumUpsellAlertDefault from "openStickersPremiumUpsellAlert" /* 10853 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 4914 */;
import UserStore from "UserStore" /* 1387 */;
import StickersStore from "StickersStore" /* 6927 */;
import StickerPickerConstants from "StickerPickerConstants" /* 10801 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;
let c2, c3, importDefault;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_23;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function StandardStickerDetail(chatInputRef) {
  let channel;
  let intl;
  let obj10;
  let sticker;
  let stickers;
  let tmp13Result;
  ({ sticker, channel } = chatInputRef);
  chatInputRef = chatInputRef.chatInputRef;
  let memo;
  const pack_id = sticker.pack_id;
  const tmp = closure_24();
  const name = sticker.name;
  let obj = channel(pack_id[21]);
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => StickersStore.getStickerPack(pack_id));
  let obj2 = channel(pack_id[21]);
  const items1 = [StickersStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => StickersStore.isPremiumPack(pack_id));
  const obj3 = channel(pack_id[14]);
  const fetchStickerPack = obj3.useFetchStickerPack(pack_id);
  let tmp7 = chatInputRef;
  const diff = chatInputRef(pack_id[22])().width - 2 * closure_12;
  const rounded = Math.floor(Math.min(ACTION_SHEET_MAX_WIDTH, diff - closure_13) / (closure_14 + closure_13));
  const items2 = [channel.guild_id];
  memo = memo.useMemo(() => {
    let DM_CHANNEL;
    if (null != channel.guild_id) {
      DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items2);
  const items3 = [memo, stateFromStores];
  const effect = memo.useEffect(() => {
    if (null != stateFromStores) {
      const obj2 = { location: memo, type: "Sticker Upsell Sheet", sticker_pack_id: tmp.id };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants3.OPEN_POPOUT, obj2);
    }
  }, items3);
  if (null == stateFromStores) {
    tmp13Result = closure_21(closure_7, { size: "large" });
  } else {
    let formatResult;
    const intl2 = tmp2(tmp3[20]).intl;
    const format = intl2.format;
    const t = tmp2(tmp3[20]).t;
    if (stateFromStores1) {
      const obj4 = { stickerPackName: stateFromStores.name };
      formatResult = format(t.auckXz, obj4);
    } else {
      const obj5 = { stickerPackName: stateFromStores.name };
      formatResult = format(t.OzB6e3, obj5);
    }
    const obj6 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: name };
    const items4 = [closure_21(tmp2(tmp3[24]).Text, obj6), , , , ];
    const obj7 = { style: tmp.description, variant: "body-sm/medium", children: formatResult };
    items4[1] = closure_21(channel(pack_id[24]).Text, obj7);
    const obj8 = { containerWidth: diff, stickers: stickers.slice(0, rounded), rowSize: rounded };
    stickers = stateFromStores.stickers;
    const tmp7Result = tmp7(pack_id[25]);
    items4[2] = closure_21(tmp7Result, obj8);
    let tmp15Result = null;
    const tmp13 = closure_23;
    const tmp14 = closure_22;
    if (stateFromStores1) {
      const obj9 = { style: obj10 };
      obj10 = { height: tmp7(pack_id[13]).space.PX_16 };
      tmp15Result = tmp15(closure_6, obj9);
    }
    items4[3] = tmp15Result;
    let tmp15Result2 = stateFromStores1;
    if (tmp15Result2) {
      const obj11 = {
        variant: "secondary",
        text: intl.string(channel(pack_id[20]).t.GPy3Ar),
        onPress() {
              const obj = showStickerDetailActionSheet;
              const result = obj.hideStickerDetailActionSheet();
              const tmp4 = stateFromStores;
              if (null != stateFromStores) {
                const tmp5 = stateFromStores1;
                if (tmp5) {
                  if (null != chatInputRef) {
                    const tmpResult = stickers_StickersUtils;
                    const result1 = tmpResult.openStickerPickerToPackId(tmp6, pack_id);
                  }
                }
              }
              const obj2 = { analyticsLocation: memo, analyticsPopoutType: openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_UPSELL, stickerPack: tmp4 };
              const tmp7 = openStickerPackDetailActionSheetDefault;
              tmp7(obj2);
            }
      };
      const Button = tmp2(tmp3[26]).Button;
      intl = tmp2(tmp3[20]).intl;
      tmp15Result2 = tmp15(Button, obj11);
    }
    const obj12 = { children: items4 };
    items4[4] = tmp15Result2;
    tmp13Result = tmp13(tmp14, obj12);
  }
  return tmp13Result;
}
function UnavailableStickerDetail(arg0) {
  let MoreHorizontalIcon;
  let analyticsLocation;
  let channel;
  let intl2;
  let items2;
  let items3;
  let obj9;
  let renderableSticker;
  let stringResult;
  ({ renderableSticker, channel } = arg0);
  importDefault = undefined;
  let stickerAssetUrl;
  const tmp = closure_24();
  const currentUser = UserStore.getCurrentUser();
  let obj = require("PremiumUtils");
  const items = [channel.guild_id];
  const result = obj.canUseCustomStickersEverywhere(currentUser);
  const tmp3 = importDefault;
  importDefault = react.useMemo(() => {
    let DM_CHANNEL;
    if (null != channel.guild_id) {
      DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items);
  const DeveloperMode = channel(stickerAssetUrl[31]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let obj2 = channel(stickerAssetUrl[32]);
  stickerAssetUrl = obj2.getStickerAssetUrl(renderableSticker);
  const items1 = [stickerAssetUrl];
  let obj3 = { style: tmp.guildEmojiTopContainer, children: items2 };
  const callback = react.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequire(10851, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items1);
  items2 = [closure_21(require("Sticker"), { sticker: renderableSticker, size: 48 }), , ];
  let obj4 = { style: tmp.guildEmojiDescription, children: items3 };
  let obj5 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: renderableSticker.name };
  items3 = [closure_21(channel(stickerAssetUrl[24]).Text, obj5), ];
  const obj6 = { style: tmp.description, variant: "body-sm/medium", children: stringResult };
  const Text = channel(stickerAssetUrl[24]).Text;
  const intl = channel(stickerAssetUrl[20]).intl;
  if (result) {
    stringResult = intl.string(tmp6(tmp4[20]).t.vZaScH);
  } else {
    const obj7 = {
      openPremiumSettings() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = { location_page: analyticsLocation.page, location_section: analyticsLocation.section };
          obj2.track(constants3.PREMIUM_PROMOTION_OPENED, obj3);
          const obj4 = openUserSettings;
          const obj5 = { screen: constants4.PREMIUM, params: { analyticsLocation } };
          obj4.openUserSettings(obj5);
        }
    };
    stringResult = intl.format(tmp6(tmp4[20]).t.hGWuxU, obj7);
  }
  items3[1] = closure_21(Text, obj6);
  items2[1] = closure_23(closure_6, obj4);
  if (setting) {
    setting = null != stickerAssetUrl;
  }
  if (setting) {
    const obj8 = { accessibilityLabel: intl2.string(channel(stickerAssetUrl[20]).t.PdRCRg), style: tmp.moreMenuIcon, onPress: callback, children: closure_21(MoreHorizontalIcon, obj9) };
    intl2 = tmp6(tmp4[20]).intl;
    obj9 = { color: tmp3(stickerAssetUrl[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    MoreHorizontalIcon = tmp6(tmp4[41]).MoreHorizontalIcon;
    setting = tmp12(closure_8, obj8);
  }
  items2[2] = setting;
  return closure_23(closure_6, obj3);
}
let react = react_mod;
({ View: metroRequire, ActivityIndicator: metroImportDefault, Pressable: metroImportAll } = react_native);
({ PADDING_HORIZONTAL: closure_12, MIN_MARGIN: map1, STICKER_SIZE: closure_14 } = StickerPickerConstants);
({ AnalyticsPages: closure_15, AnalyticsSections: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18, UserSettingsSections: closure_19 } = Constants);
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = Fragment);
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj = { content: { padding: 16, paddingBottom: num }, description: { lineHeight: 18, marginTop: 4 }, guildEmojiTopContainer: { flexDirection: "row", alignItems: "center" }, buttonContainer: obj2, guildEmojiDescription: { paddingLeft: 16, flex: 1 }, divider: obj3, moreMenuIcon: { height: 32, width: 32, justifyContent: "center", alignItems: "center" }, favoriteContainer: obj4, starIcon: { height: 32, width: 32 }, starIconSelected: obj5, starIconUnselected: obj6 };
obj2 = { marginTop: nativeDefault.space.PX_12 };
obj3 = { marginLeft: 0, marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { paddingTop: nativeDefault.space.PX_4 };
obj5 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj6 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_24 = createStyles(obj);
function GuildStickerDetail(sticker) {
  let Button2;
  let MoreHorizontalIcon;
  let closure_5;
  let flag;
  let flag2;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items7;
  let items8;
  let obj13;
  let obj17;
  let obj21;
  let obj27;
  let str;
  let str2;
  let string3Result;
  let stringResult;
  sticker = sticker.sticker;
  const channel = sticker.channel;
  let first1;
  react = undefined;
  let stickerAssetUrl;
  let analyticsLocation;
  let obj6;
  let ref;
  let tmp = closure_24;
  let tmp2 = closure_24();
  let obj = react;
  const tmp3 = first1;
  const tmp4 = first1(react.useState(null), 2);
  let guild = tmp4[0];
  let closure_3 = tmp4[1];
  let obj2 = sticker(guild[21]);
  const items = [ref];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(sticker.guild_id));
  let tmp35Result5 = null != stateFromStores;
  let hasItem = null == stateFromStores;
  if (!hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants4.DISCOVERABLE);
  }
  const tmp3Result = tmp3(obj.useState(!hasItem), 2);
  first1 = tmp3Result[0];
  react = tmp3Result[1];
  const tmp15 = channel;
  const currentUser = UserStore.getCurrentUser();
  let obj3 = channel(tmp7[30]);
  let result = obj3.canUseCustomStickersEverywhere(currentUser);
  const DeveloperMode = tmp6(tmp7[31]).DeveloperMode;
  let setting = DeveloperMode.useSetting();
  let id = sticker.id;
  const tmpResult = tmp();
  let closure_1 = tmpResult;
  const tmp6Result = sticker(guild[14]);
  const favoriteStickerIds = tmp6Result.useFavoriteStickerIds();
  const hasItem1 = favoriteStickerIds.includes(id);
  const items1 = [tmpResult];
  const callback = obj.useCallback((arg0) => {
    let StarOutlineIcon;
    let style;
    const obj = {};
    const merged = Object.assign(starIcon.starIcon);
    if (arg0) {
      const merged1 = Object.assign(tmp.starIconSelected);
      style = obj;
    } else {
      const merged2 = Object.assign(tmp.starIconUnselected);
      style = obj;
    }
    const tmp8 = closure_2_21;
    if (arg0) {
      StarOutlineIcon = tmp9(tmp10[15]).StarIcon;
    } else {
      StarOutlineIcon = tmp9(tmp10[16]).StarOutlineIcon;
    }
    return tmp8(StarOutlineIcon, { style });
  }, items1);
  const items2 = [hasItem1, id];
  const callback1 = obj.useCallback(() => {
    let intl;
    let intl2;
    const obj = channel(first[17]);
    obj.hideActionSheet();
    const obj2 = sticker(first[18]);
    if (hasItem1) {
      obj2.unfavoriteSticker(id);
      const obj3 = { text: intl2.string(sticker(first[20]).t.in1rga), icon: sticker(first[16]).StarOutlineIcon };
      const open2 = channel(first[19]).open;
      channel(first[19]);
      intl2 = tmp4(tmp2[20]).intl;
      open2("STICKER_UNFAVORITED", obj3);
    } else {
      obj2.favoriteSticker(id);
      const obj4 = { text: intl.string(sticker(first[20]).t.mE2e8A), icon: sticker(first[15]).StarIcon, iconColor: channel(first[13]).colors.ICON_FEEDBACK_WARNING };
      const open = channel(first[19]).open;
      channel(first[19]);
      intl = tmp4(tmp2[20]).intl;
      open("STICKER_FAVORITED", obj4);
    }
  }, items2);
  const tmp6Result3 = sticker(guild[32]);
  stickerAssetUrl = tmp6Result3.getStickerAssetUrl(sticker);
  const items3 = [stickerAssetUrl];
  const items4 = [channel.guild_id];
  const callback2 = obj.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequire(10851, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items3);
  analyticsLocation = obj.useMemo(() => {
    let DM_CHANNEL;
    if (null != channel.guild_id) {
      DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items4);
  let obj4 = { guild_id: channel.getGuildId() };
  const useRef = obj.useRef;
  const tmp6Result4 = sticker(guild[35]);
  let merged = Object.assign(tmp6Result4.collectChannelAnalyticsMetadata(channel));
  const items5 = [sticker.id, first1];
  const current = useRef(obj4).current;
  const effect = obj.useEffect(() => {
    function fetchDiscoverableGuild() {
      return obj(...arguments);
    }
    let obj = function _fetchDiscoverableGuild() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let v3;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            let id;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                let closure_1 = tmp4;
                id = undefined;
                c2 = 1;
                c3 = 1;
                const obj4 = { value: channel(guild[38])(id.id), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              id = value;
              c3(id);
              closure_1_5(true);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp15) {
            c3 = 3;
            throw tmp15;
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = first1;
    if (!tmp) {
      fetchDiscoverableGuild();
    }
  }, items5);
  const tmp26 = sticker.guild_id === channel.getGuildId();
  let intl = tmp6(tmp7[20]).intl;
  if (result) {
    let string2Result1;
    const string2 = intl.string;
    const t2 = tmp6(tmp7[20]).t;
    if (tmp35Result5) {
      let string2Result;
      if (tmp26) {
        string2Result = string2(t2.fZ0DiG);
      } else {
        string2Result = string2(t2["1f6D9m"]);
      }
      string2Result1 = string2Result;
    } else if (null != guild) {
      string2Result1 = string2(t2.yHmoR9);
    } else {
      string2Result1 = string2(t2.vZaScH);
    }
    flag = false;
    str = "Custom Sticker Popout";
    stringResult = string2Result1;
    flag2 = false;
  } else if (tmp35Result5) {
    const string = intl.string;
    const t = tmp6(tmp7[20]).t;
    if (tmp26) {
      stringResult = string(t.jNphpt);
      flag = true;
      str = "Custom Sticker Popout (Upsell)";
      flag2 = true;
    } else {
      stringResult = string(t.lyD5ZW);
      flag = true;
      str = "Custom Sticker Popout (Upsell)";
      flag2 = true;
    }
  } else if (null != guild) {
    stringResult = intl.string(tmp6(tmp7[20]).t.IuXYch);
    flag = true;
    str = "Custom Sticker Popout (Upsell)";
    flag2 = true;
  } else {
    let obj5 = {
      openPremiumSettings() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = AnalyticsUtilsDefault;
          const obj3 = { location_page: analyticsLocation.page, location_section: analyticsLocation.section };
          obj2.track(constants3.PREMIUM_PROMOTION_OPENED, obj3);
          const obj4 = openUserSettings;
          const obj5 = { screen: constants4.PREMIUM, params: { analyticsLocation } };
          obj4.openUserSettings(obj5);
        }
    };
    stringResult = intl.format(tmp6(tmp7[20]).t.hGWuxU, obj5);
    flag = false;
    str = "Custom Sticker Popout (Soft Upsell)";
    flag2 = false;
  }
  obj6 = { popoutAnalyticsConfig: current, popoutType: str };
  ref = obj.useRef(obj6);
  const effect1 = obj.useEffect(() => {
    ref.current = obj6;
  });
  const items6 = [first1];
  const effect2 = obj.useEffect(() => {
    const popoutAnalyticsConfig = ref.current.popoutAnalyticsConfig;
    const tmp2 = first1;
    if (tmp2) {
      const obj = { type: tmp };
      const track = AnalyticsUtilsDefault.track;
      const OPEN_POPOUT = constants3.OPEN_POPOUT;
      AnalyticsUtilsDefault;
      const merged = Object.assign(popoutAnalyticsConfig);
      track(OPEN_POPOUT, obj);
    }
  }, items6);
  let tmp35Result6 = null;
  if (first1) {
    const obj7 = { style: tmp2.guildEmojiTopContainer, children: items7 };
    const obj8 = { sticker, size: 48 };
    items7 = [closure_21(tmp15(tmp7[40]), obj8), , ];
    const obj10 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: sticker.name };
    const obj9 = { style: tmp2.guildEmojiDescription, children: items8 };
    items8 = [closure_21(tmp6(tmp7[24]).Text, obj10), ];
    const obj11 = { style: tmp2.description, variant: "body-sm/medium", children: stringResult };
    items8[1] = closure_21(sticker(guild[24]).Text, obj11);
    items7[1] = closure_23(stickerAssetUrl, obj9);
    if (setting) {
      setting = null != stickerAssetUrl;
    }
    if (setting) {
      const obj12 = { accessibilityLabel: intl2.string(sticker(guild[20]).t.PdRCRg), style: tmp2.moreMenuIcon, onPress: callback2, children: closure_21(MoreHorizontalIcon, obj13) };
      intl2 = tmp6(tmp7[20]).intl;
      obj13 = { color: tmp15(guild[13]).colors.INTERACTIVE_TEXT_DEFAULT };
      MoreHorizontalIcon = tmp6(tmp7[41]).MoreHorizontalIcon;
      setting = tmp38(obj6, obj12);
    }
    items7[2] = setting;
    const items9 = [closure_23(stickerAssetUrl, obj7), , , , ];
    if (flag) {
      const obj14 = { style: tmp2.buttonContainer, children: items10 };
      const obj15 = {
        text: intl3.string(sticker(guild[20]).t["gl/XHJ"]),
        onPress() {
              return openStickersPremiumUpsellAlertDefault(analyticsLocation);
            }
      };
      const tmp15Result = tmp15(guild[42]);
      intl3 = tmp6(tmp7[20]).intl;
      items10 = [closure_21(tmp15Result, obj15), ];
      const obj16 = { style: obj17 };
      obj17 = { height: tmp15(guild[13]).space.PX_16 };
      items10[1] = closure_21(stickerAssetUrl, obj16);
      flag = tmp35(tmp37, obj14);
    }
    items9[1] = flag;
    let tmp35Result = tmp31;
    if (tmp35Result) {
      const obj18 = { style: tmp2.buttonContainer, children: items11 };
      const obj19 = {
        text: intl4.string(sticker(guild[20]).t.riu2R5),
        onPress() {
              if (null != first) {
                const id = first.id;
                let obj = GuildActionCreatorsDefault;
                const joinGuildResult = obj.joinGuild(id);
                const nextPromise = joinGuildResult.then(() => {
                  const obj = channel(guild[36]);
                  const result = obj.transitionToGuildSync(id);
                });
                nextPromise.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
              }
            }
      };
      const Button = tmp6(tmp7[26]).Button;
      intl4 = tmp6(tmp7[20]).intl;
      items11 = [closure_21(Button, obj19), ];
      const obj20 = { style: obj21 };
      obj21 = { height: tmp15(guild[13]).space.PX_16 };
      items11[1] = closure_21(stickerAssetUrl, obj20);
      tmp35Result = tmp35(tmp37, obj18);
    }
    items9[2] = tmp35Result;
    let tmp35Result4 = null != stateFromStores || null != guild;
    if (tmp35Result4) {
      const obj22 = { style: tmp2.divider };
      const items12 = [closure_21(tmp6(tmp7[44]).FormDivider, obj22), ];
      const tmp15Result2 = tmp15(guild[45]);
      if (guild == null) {
        guild = stateFromStores;
      }
      const obj23 = { guild, showingJoinGuildCta: !flag2 && !tmp35Result5 && null != guild, hasJoinedGuild: tmp35Result5, title: string3Result };
      const intl5 = tmp6(tmp7[20]).intl;
      const string3 = intl5.string;
      const t3 = tmp6(tmp7[20]).t;
      if (tmp35Result5) {
        string3Result = string3(t3.kx6pEG);
      } else {
        string3Result = string3(t3.pDE7Gb);
      }
      const obj24 = { children: items12 };
      items12[1] = closure_21(tmp15Result2, obj23);
      tmp35Result4 = tmp35(tmp36, obj24);
    }
    items9[3] = tmp35Result4;
    if (tmp35Result5) {
      let string4Result;
      const obj25 = { style: tmp2.divider };
      const items13 = [closure_21(tmp6(tmp7[44]).FormDivider, obj25), ];
      const obj26 = { style: tmp2.favoriteContainer, children: closure_21(Button2, obj27) };
      Button2 = tmp6(tmp7[26]).Button;
      const intl6 = tmp6(tmp7[20]).intl;
      const string4 = intl6.string;
      const t4 = tmp6(tmp7[20]).t;
      if (hasItem1) {
        string4Result = string4(t4.XhzKyF);
      } else {
        string4Result = string4(t4.kWmiPW);
      }
      obj27 = { text: string4Result, variant: str2, size: "md", onPress: callback1 };
      str2 = "primary";
      if (hasItem1) {
        str2 = "tertiary";
      }
      const obj28 = { children: items13 };
      items13[1] = closure_21(stickerAssetUrl, obj26);
      tmp35Result5 = tmp35(tmp36, obj28);
    }
    const obj29 = { children: items9 };
    items9[4] = tmp35Result5;
    tmp35Result6 = tmp35(tmp36, obj29);
  }
  return tmp35Result6;
}
const memoResult = react.memo(function StickerDetailActionSheet(chatInputRef) {
  let channel;
  let first;
  let obj4;
  let renderableSticker;
  let tmp6;
  let tmp7Result;
  ({ renderableSticker, channel } = chatInputRef);
  chatInputRef = chatInputRef.chatInputRef;
  const tmp = closure_24();
  const obj = StickersHooks;
  [first, tmp6] = obj.useStickerForRenderableSticker(renderableSticker, true);
  let tmp7Result2 = closure_21(metroImportDefault, { size: "large" });
  if (null == first) {
    if (tmp6) {
      const obj2 = { renderableSticker, channel };
      tmp7Result = tmp7(UnavailableStickerDetail, obj2);
    }
    const obj3 = { startExpanded: true, children: closure_21(metroRequire, obj4) };
    obj4 = { style: tmp.content, children: tmp7Result };
    const BottomSheet = tmp2(5271).BottomSheet;
    return closure_21(BottomSheet, obj3);
  }
  tmp7Result = tmp7Result2;
  if (null != first) {
    const tmp2Result = StickersUtils;
    if (tmp2Result.isStandardSticker(first)) {
      const obj5 = { sticker: first, channel, chatInputRef };
      tmp7Result2 = tmp7(StandardStickerDetail, obj5);
    } else {
      const tmp2Result2 = StickersUtils;
      if (tmp2Result2.isGuildSticker(first)) {
        const obj6 = { sticker: first, channel };
        tmp7Result2 = tmp7(GuildStickerDetail, obj6);
      }
    }
    tmp7Result = tmp7Result2;
  }
});
let result = size.fileFinishedImporting("modules/stickers/native/StickerDetailActionSheet.tsx");

export default memoResult;
