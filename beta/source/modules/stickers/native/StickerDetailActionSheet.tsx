// Module ID: 9866
// Function ID: 9867
// Name: StickerDetailActionSheet
// Dependencies: [5, 32, 19, 17, 2067, 1372, 5814, 9736, 1074, 6572, 21, 4836, 1364, 576, 9848, 9698, 9704, 4800, 4832, 1115, 9849, 4528, 504, 1479, 1241, 9863, 5281, 9865, 9850, 9856, 4488, 6609, 2021, 5198, 9867, 1981, 5016, 5832, 9868, 6800, 9636, 7365, 9425, 9869, 8053, 9803, 6571, 2]

// Module 9866 (StickerDetailActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6572 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import StickersHooks from "StickersHooks" /* 9848 */;
import stickers_StickersUtils from "stickers/StickersUtils" /* 9850 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 9856 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 9865 */;
import openStickersPremiumUpsellAlertDefault from "openStickersPremiumUpsellAlert" /* 9869 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import StickersStore from "StickersStore" /* 5814 */;
import StickerPickerConstants from "StickerPickerConstants" /* 9736 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;
let BottomSheet, c2, c3, importDefault;

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
  let obj = channel(pack_id[22]);
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => StickersStore.getStickerPack(pack_id));
  let obj2 = channel(pack_id[22]);
  const items1 = [StickersStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => StickersStore.isPremiumPack(pack_id));
  const obj3 = channel(pack_id[14]);
  const fetchStickerPack = obj3.useFetchStickerPack(pack_id);
  let tmp7 = chatInputRef;
  const diff = chatInputRef(pack_id[23])().width - 2 * closure_12;
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
    const intl2 = tmp2(tmp3[19]).intl;
    const format = intl2.format;
    const t = tmp2(tmp3[19]).t;
    if (stateFromStores1) {
      const obj4 = { stickerPackName: stateFromStores.name };
      formatResult = format(t.auckXz, obj4);
    } else {
      const obj5 = { stickerPackName: stateFromStores.name };
      formatResult = format(t.OzB6e3, obj5);
    }
    const obj6 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: name };
    const items4 = [closure_21(tmp2(tmp3[18]).Text, obj6), , , , ];
    const obj7 = { style: tmp.description, variant: "text-sm/medium", children: formatResult };
    items4[1] = closure_21(channel(pack_id[18]).Text, obj7);
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
        text: intl.string(channel(pack_id[19]).t.GPy3Ar),
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
      intl = tmp2(tmp3[19]).intl;
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
  let obj10;
  let renderableSticker;
  let stringResult;
  ({ renderableSticker, channel } = arg0);
  importDefault = undefined;
  let stickerAssetUrl;
  const tmp = closure_24();
  const currentUser = UserStore.getCurrentUser();
  let obj = require("PremiumUtils");
  let obj2 = react;
  const items = [channel.guild_id];
  const result = obj.canUseCustomStickersEverywhere(currentUser);
  importDefault = react.useMemo(() => {
    let DM_CHANNEL;
    if (null != channel.guild_id) {
      DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items);
  let obj3 = require("TidaWebformExperiment");
  let tidaWebformEnabled = obj3.useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = channel(stickerAssetUrl[32]).DeveloperMode;
  if (tidaWebformEnabled) {
    tidaWebformEnabled = DeveloperMode.useSetting();
  }
  const tmp6Result = channel(stickerAssetUrl[33]);
  stickerAssetUrl = tmp6Result.getStickerAssetUrl(renderableSticker);
  const items1 = [stickerAssetUrl];
  let obj4 = { style: tmp.guildEmojiTopContainer, children: items2 };
  const callback = obj2.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequire(9867, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items1);
  items2 = [closure_21(tmp3(tmp4[40]), { sticker: renderableSticker, size: 48 }), , ];
  let obj5 = { style: tmp.guildEmojiDescription, children: items3 };
  items3 = [, ];
  const obj6 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: renderableSticker.name };
  items3[0] = closure_21(channel(stickerAssetUrl[18]).Text, obj6);
  const obj7 = { style: tmp.description, variant: "text-sm/medium", children: stringResult };
  const Text = tmp6(tmp4[18]).Text;
  const intl = tmp6(tmp4[19]).intl;
  if (result) {
    stringResult = intl.string(tmp6(tmp4[19]).t.vZaScH);
  } else {
    const obj8 = {
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
    stringResult = intl.format(tmp6(tmp4[19]).t.hGWuxU, obj8);
  }
  items3[1] = closure_21(Text, obj7);
  items2[1] = closure_23(closure_6, obj5);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = null != stickerAssetUrl;
  }
  if (tidaWebformEnabled) {
    const obj9 = { accessibilityLabel: intl2.string(channel(stickerAssetUrl[19]).t.PdRCRg), style: tmp.moreMenuIcon, onPress: callback, children: closure_21(MoreHorizontalIcon, obj10) };
    intl2 = tmp6(tmp4[19]).intl;
    obj10 = { color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
    MoreHorizontalIcon = tmp6(tmp4[41]).MoreHorizontalIcon;
    tidaWebformEnabled = tmp11(closure_8, obj9);
  }
  items2[2] = tidaWebformEnabled;
  return closure_23(closure_6, obj4);
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
  let obj14;
  let obj18;
  let obj22;
  let obj28;
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
  let obj7;
  let ref;
  let tmp = closure_24;
  let tmp2 = closure_24();
  let obj = react;
  const tmp3 = first1;
  const tmp4 = first1(react.useState(null), 2);
  let guild = tmp4[0];
  let closure_3 = tmp4[1];
  let obj2 = sticker(guild[22]);
  const items = [ref];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(sticker.guild_id));
  const tmp9 = null != stateFromStores;
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
  let obj4 = channel(tmp7[31]);
  let tidaWebformEnabled = obj4.useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = tmp6(tmp7[32]).DeveloperMode;
  let id = sticker.id;
  const setting = DeveloperMode.useSetting();
  let tmpResult = tmp();
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
  const items2 = [hasItem1, id, callback];
  const callback1 = obj.useCallback(() => {
    function content() {
      let stringResult;
      const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: stringResult };
      const Text = id(hasItem1[18]).Text;
      const intl = id(hasItem1[19]).intl;
      const string = intl.string;
      const t = id(hasItem1[19]).t;
      const tmp = closure_2_21;
      if (closure_1_2) {
        stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      return tmp(Text, obj);
    }
    let tmp = channel;
    let obj = channel(first[17]);
    obj.hideActionSheet();
    const obj2 = sticker(first[20]);
    if (hasItem1) {
      obj2.unfavoriteSticker(id);
      const obj3 = {
        key: "STICKER_UNFAVORITED",
        icon() {
            return callback(false);
          },
        content
      };
      const tmpResult = tmp(first[21]);
      tmpResult.open(obj3);
    } else {
      obj2.favoriteSticker(id);
      const obj4 = {
        key: "STICKER_FAVORITED",
        icon() {
            return callback(true);
          },
        content
      };
      const tmpResult2 = tmp(first[21]);
      tmpResult2.open(obj4);
    }
  }, items2);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = setting;
  }
  const tmp6Result3 = sticker(guild[33]);
  stickerAssetUrl = tmp6Result3.getStickerAssetUrl(sticker);
  const items3 = [stickerAssetUrl];
  const items4 = [channel.guild_id];
  const callback2 = obj.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequire(9867, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
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
  let obj5 = { guild_id: channel.getGuildId() };
  const useRef = obj.useRef;
  const tmp6Result4 = sticker(guild[36]);
  let merged = Object.assign(tmp6Result4.collectChannelAnalyticsMetadata(channel));
  const items5 = [sticker.id, first1];
  const current = useRef(obj5).current;
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
  let intl = tmp6(tmp7[19]).intl;
  if (result) {
    let string2Result1;
    const string2 = intl.string;
    const t2 = tmp6(tmp7[19]).t;
    if (tmp9) {
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
  } else if (tmp9) {
    let string = intl.string;
    let t = tmp6(tmp7[19]).t;
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
    stringResult = intl.string(tmp6(tmp7[19]).t.IuXYch);
    flag = true;
    str = "Custom Sticker Popout (Upsell)";
    flag2 = true;
  } else {
    const obj6 = {
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
    stringResult = intl.format(tmp6(tmp7[19]).t.hGWuxU, obj6);
    flag = false;
    str = "Custom Sticker Popout (Soft Upsell)";
    flag2 = false;
  }
  obj7 = { popoutAnalyticsConfig: current, popoutType: str };
  ref = obj.useRef(obj7);
  const effect1 = obj.useEffect(() => {
    ref.current = obj7;
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
  let tmp35Result4 = null;
  if (first1) {
    const obj8 = { style: tmp2.guildEmojiTopContainer, children: items7 };
    const obj9 = { sticker, size: 48 };
    items7 = [closure_21(tmp15(tmp7[40]), obj9), , ];
    const obj10 = { style: tmp2.guildEmojiDescription, children: items8 };
    const obj11 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
    items8 = [closure_21(tmp6(tmp7[18]).Text, obj11), ];
    const obj12 = { style: tmp2.description, variant: "text-sm/medium", children: stringResult };
    items8[1] = closure_21(sticker(guild[18]).Text, obj12);
    items7[1] = closure_23(stickerAssetUrl, obj10);
    let tmp38Result = tidaWebformEnabled && null != stickerAssetUrl;
    if (tmp38Result) {
      const obj13 = { accessibilityLabel: intl2.string(sticker(guild[19]).t.PdRCRg), style: tmp2.moreMenuIcon, onPress: callback2, children: closure_21(MoreHorizontalIcon, obj14) };
      intl2 = tmp6(tmp7[19]).intl;
      obj14 = { color: tmp15(guild[13]).colors.INTERACTIVE_TEXT_DEFAULT };
      MoreHorizontalIcon = tmp6(tmp7[41]).MoreHorizontalIcon;
      tmp38Result = tmp38(obj7, obj13);
    }
    items7[2] = tmp38Result;
    const items9 = [closure_23(stickerAssetUrl, obj8), , , , ];
    if (flag) {
      const obj15 = { style: tmp2.buttonContainer, children: items10 };
      const obj16 = {
        text: intl3.string(sticker(guild[19]).t["gl/XHJ"]),
        onPress() {
              return openStickersPremiumUpsellAlertDefault(analyticsLocation);
            }
      };
      const tmp15Result = tmp15(guild[42]);
      intl3 = tmp6(tmp7[19]).intl;
      items10 = [closure_21(tmp15Result, obj16), ];
      const obj17 = { style: obj18 };
      obj18 = { height: tmp15(guild[13]).space.PX_16 };
      items10[1] = closure_21(stickerAssetUrl, obj17);
      flag = tmp35(tmp37, obj15);
    }
    items9[1] = flag;
    let tmp35Result = tmp31;
    if (tmp35Result) {
      const obj19 = { style: tmp2.buttonContainer, children: items11 };
      const obj20 = {
        text: intl4.string(sticker(guild[19]).t.riu2R5),
        onPress() {
              if (null != first) {
                const id = first.id;
                let obj = GuildActionCreatorsDefault;
                const joinGuildResult = obj.joinGuild(id);
                joinGuildResult.then(() => {
                  const obj = channel(guild[37]);
                  const result = obj.transitionToGuildSync(id);
                });
              }
            }
      };
      const Button = tmp6(tmp7[26]).Button;
      intl4 = tmp6(tmp7[19]).intl;
      items11 = [closure_21(Button, obj20), ];
      const obj21 = { style: obj22 };
      obj22 = { height: tmp15(guild[13]).space.PX_16 };
      items11[1] = closure_21(stickerAssetUrl, obj21);
      tmp35Result = tmp35(tmp37, obj19);
    }
    items9[2] = tmp35Result;
    let tmp35Result3 = null != stateFromStores || null != guild;
    if (tmp35Result3) {
      const obj23 = { style: tmp2.divider };
      const items12 = [closure_21(tmp6(tmp7[44]).FormDivider, obj23), ];
      const tmp15Result2 = tmp15(guild[45]);
      if (guild == null) {
        guild = stateFromStores;
      }
      const obj24 = { guild, showingJoinGuildCta: !flag2 && !tmp9 && null != guild, hasJoinedGuild: tmp9, title: string3Result };
      const intl5 = tmp6(tmp7[19]).intl;
      const string3 = intl5.string;
      const t3 = tmp6(tmp7[19]).t;
      if (tmp9) {
        string3Result = string3(t3.kx6pEG);
      } else {
        string3Result = string3(t3.pDE7Gb);
      }
      const obj25 = { children: items12 };
      items12[1] = closure_21(tmp15Result2, obj24);
      tmp35Result3 = tmp35(tmp36, obj25);
    }
    items9[3] = tmp35Result3;
    if (tidaWebformEnabled) {
      tidaWebformEnabled = tmp9;
    }
    if (tidaWebformEnabled) {
      let string4Result;
      const obj26 = { style: tmp2.divider };
      const items13 = [closure_21(tmp6(tmp7[44]).FormDivider, obj26), ];
      const obj27 = { style: tmp2.favoriteContainer, children: closure_21(Button2, obj28) };
      Button2 = tmp6(tmp7[26]).Button;
      const intl6 = tmp6(tmp7[19]).intl;
      const string4 = intl6.string;
      const t4 = tmp6(tmp7[19]).t;
      if (hasItem1) {
        string4Result = string4(t4.XhzKyF);
      } else {
        string4Result = string4(t4.kWmiPW);
      }
      obj28 = { text: string4Result, variant: str2, size: "md", onPress: callback1 };
      str2 = "primary";
      if (hasItem1) {
        str2 = "tertiary";
      }
      const obj29 = { children: items13 };
      items13[1] = closure_21(stickerAssetUrl, obj27);
      tidaWebformEnabled = tmp35(tmp36, obj29);
    }
    const obj30 = { children: items9 };
    items9[4] = tidaWebformEnabled;
    tmp35Result4 = tmp35(tmp36, obj30);
  }
  return tmp35Result4;
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
    BottomSheet = tmp2(6571).BottomSheet;
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
