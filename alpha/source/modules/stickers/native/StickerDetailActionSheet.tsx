// Module ID: 9749
// Function ID: 9750
// Name: StickerDetailActionSheet
// Dependencies: [5, 32, 19, 17, 2086, 1390, 6037, 9698, 1085, 6837, 21, 5091, 1382, 587, 558, 576, 9728, 9523, 9521, 5055, 9729, 4768, 1126, 504, 1497, 1265, 5087, 9743, 5376, 9748, 9730, 9736, 4728, 6878, 2041, 5746, 9750, 2000, 5106, 6104, 6913, 9751, 7087, 9744, 9214, 9752, 9753, 8563, 9527, 6836, 2]

// Module 9749 (StickerDetailActionSheet)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import StickersUtils from "StickersUtils" /* 5746 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6104 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6837 */;
import JoinGuildRefusedError from "JoinGuildRefusedError" /* 6913 */;
import openUserSettings from "openUserSettings" /* 7087 */;
import StarOutlineIcon2 from "StarOutlineIcon" /* 9521 */;
import StarIcon from "StarIcon" /* 9523 */;
import StickersHooks from "StickersHooks" /* 9728 */;
import StickersActionCreators from "StickersActionCreators" /* 9729 */;
import stickers_StickersUtils from "stickers/StickersUtils" /* 9730 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 9736 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 9748 */;
import openStickersPremiumUpsellAlertDefault from "openStickersPremiumUpsellAlert" /* 9753 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore_mod from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1390 */;
import StickersStore from "StickersStore" /* 6037 */;
import StickerPickerConstants from "StickerPickerConstants" /* 9698 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;
let BottomSheet, _require, c2, c3, dependencyMap, importDefault;

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
  const DeveloperMode = channel(stickerAssetUrl[34]).DeveloperMode;
  if (tidaWebformEnabled) {
    tidaWebformEnabled = DeveloperMode.useSetting();
  }
  const tmp6Result = channel(stickerAssetUrl[35]);
  stickerAssetUrl = tmp6Result.getStickerAssetUrl(renderableSticker);
  const items1 = [stickerAssetUrl];
  let obj4 = { style: tmp.guildEmojiTopContainer, children: items2 };
  const callback = obj2.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequire(9750, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items1);
  items2 = [closure_21(tmp3(tmp4[43]), { sticker: renderableSticker, size: 48 }), , ];
  let obj5 = { style: tmp.guildEmojiDescription, children: items3 };
  items3 = [, ];
  const obj6 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: renderableSticker.name };
  items3[0] = closure_21(channel(stickerAssetUrl[26]).Text, obj6);
  const obj7 = { style: tmp.description, variant: "text-sm/medium", children: stringResult };
  const Text = tmp6(tmp4[26]).Text;
  const intl = tmp6(tmp4[22]).intl;
  if (result) {
    stringResult = intl.string(tmp6(tmp4[22]).t.vZaScH);
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
    stringResult = intl.format(tmp6(tmp4[22]).t.hGWuxU, obj8);
  }
  items3[1] = closure_21(Text, obj7);
  items2[1] = closure_23(closure_6, obj5);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = null != stickerAssetUrl;
  }
  if (tidaWebformEnabled) {
    const obj9 = { accessibilityLabel: intl2.string(channel(stickerAssetUrl[22]).t.PdRCRg), style: tmp.moreMenuIcon, onPress: callback, children: closure_21(MoreHorizontalIcon, obj10) };
    intl2 = tmp6(tmp4[22]).intl;
    obj10 = { color: require("native").colors.INTERACTIVE_TEXT_DEFAULT };
    MoreHorizontalIcon = tmp6(tmp4[44]).MoreHorizontalIcon;
    tidaWebformEnabled = tmp11(closure_8, obj9);
  }
  items2[2] = tidaWebformEnabled;
  return closure_23(closure_6, obj4);
}
let react = react_mod;
({ View: metroRequire, ActivityIndicator: metroImportDefault, Pressable: metroImportAll } = react_native);
let GuildStore = GuildStore_mod;
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStickerFavorite(arg0) {
  let closure_0;
  let closure_2;
  let starIcon;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(12);
  const tmp2 = closure_24();
  importDefault = tmp2;
  let obj2 = require("StickersHooks");
  const favoriteStickerIds = obj2.useFavoriteStickerIds();
  if (cResult[0] === favoriteStickerIds) {
    let tmp3;
    let tmp5;
    if (cResult[1] === arg0) {
      tmp3 = cResult[2];
    }
    dependencyMap = tmp3;
    if (cResult[3] !== tmp2) {
      const fn = function s(arg0) {
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
        const tmp8 = closure_21;
        if (arg0) {
          StarOutlineIcon = tmp9(9523).StarIcon;
        } else {
          StarOutlineIcon = tmp9(9521).StarOutlineIcon;
        }
        return tmp8(StarOutlineIcon, { style });
      };
      cResult[3] = tmp2;
      class S {
        constructor() {
          let intl;
          let intl2;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = StickersActionCreators;
          if (closure_2) {
            obj2.unfavoriteSticker(closure_0);
            const obj3 = { text: intl2.string(intl7.t.in1rga), icon: StarOutlineIcon2.StarOutlineIcon };
            const openMana2 = ToastActionCreatorsDefault.openMana;
            ToastActionCreatorsDefault;
            intl2 = tmp4(1126).intl;
            openMana2("STICKER_UNFAVORITED", obj3);
          } else {
            obj2.favoriteSticker(closure_0);
            const obj4 = { text: intl.string(intl7.t.mE2e8A), icon: StarIcon.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
            const openMana = ToastActionCreatorsDefault.openMana;
            ToastActionCreatorsDefault;
            intl = tmp4(1126).intl;
            openMana("STICKER_FAVORITED", obj4);
          }
        }
      }
      tmp5 = fn;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] === tmp3) {
      let tmp6;
      if (cResult[6] === arg0) {
        tmp6 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        if (cResult[9] === tmp3) {
          let tmp7;
          if (cResult[10] === tmp5) {
            tmp7 = cResult[11];
          }
          return tmp7;
        }
      }
      let obj3 = { isFavorite: tmp3, handleFavorite: null, renderStarIcon: tmp5 };
      class S {
        constructor() {
          let intl;
          let intl2;
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          const obj2 = StickersActionCreators;
          if (closure_2) {
            obj2.unfavoriteSticker(closure_0);
            const obj3 = { text: intl2.string(intl7.t.in1rga), icon: StarOutlineIcon2.StarOutlineIcon };
            const openMana2 = ToastActionCreatorsDefault.openMana;
            ToastActionCreatorsDefault;
            intl2 = tmp4(1126).intl;
            openMana2("STICKER_UNFAVORITED", obj3);
          } else {
            obj2.favoriteSticker(closure_0);
            const obj4 = { text: intl.string(intl7.t.mE2e8A), icon: StarIcon.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
            const openMana = ToastActionCreatorsDefault.openMana;
            ToastActionCreatorsDefault;
            intl = tmp4(1126).intl;
            openMana("STICKER_FAVORITED", obj4);
          }
        }
      }
      cResult[8] = tmp6;
      cResult[9] = tmp3;
      cResult[10] = tmp5;
      cResult[11] = obj3;
      tmp7 = obj3;
    }
    class S {
      constructor() {
        let intl;
        let intl2;
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = StickersActionCreators;
        if (closure_2) {
          obj2.unfavoriteSticker(closure_0);
          const obj3 = { text: intl2.string(intl7.t.in1rga), icon: StarOutlineIcon2.StarOutlineIcon };
          const openMana2 = ToastActionCreatorsDefault.openMana;
          ToastActionCreatorsDefault;
          intl2 = tmp4(1126).intl;
          openMana2("STICKER_UNFAVORITED", obj3);
        } else {
          obj2.favoriteSticker(closure_0);
          const obj4 = { text: intl.string(intl7.t.mE2e8A), icon: StarIcon.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
          const openMana = ToastActionCreatorsDefault.openMana;
          ToastActionCreatorsDefault;
          intl = tmp4(1126).intl;
          openMana("STICKER_FAVORITED", obj4);
        }
      }
    }
    cResult[5] = tmp3;
    cResult[6] = arg0;
    cResult[7] = S;
    tmp6 = S;
  }
  const hasItem = favoriteStickerIds.includes(arg0);
  cResult[0] = favoriteStickerIds;
  cResult[1] = arg0;
  cResult[2] = hasItem;
  tmp3 = hasItem;
}) : (function useStickerFavorite(arg0) {
  let closure_0;
  let hasItem;
  _require = arg0;
  const tmp = closure_24();
  const starIcon = tmp;
  let obj = require("StickersHooks");
  const favoriteStickerIds = obj.useFavoriteStickerIds();
  hasItem = favoriteStickerIds.includes(arg0);
  const items = [tmp];
  const items1 = [hasItem, arg0];
  const callback = react.useCallback((arg0) => {
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
    const tmp8 = closure_21;
    if (arg0) {
      StarOutlineIcon = tmp9(9523).StarIcon;
    } else {
      StarOutlineIcon = tmp9(9521).StarOutlineIcon;
    }
    return tmp8(StarOutlineIcon, { style });
  }, items);
  let obj2 = {
    isFavorite: hasItem,
    handleFavorite: react.useCallback(() => {
      let intl;
      let intl2;
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = StickersActionCreators;
      if (hasItem) {
        obj2.unfavoriteSticker(closure_0);
        const obj3 = { text: intl2.string(intl7.t.in1rga), icon: StarOutlineIcon2.StarOutlineIcon };
        const openMana2 = ToastActionCreatorsDefault.openMana;
        ToastActionCreatorsDefault;
        intl2 = tmp4(1126).intl;
        openMana2("STICKER_UNFAVORITED", obj3);
      } else {
        obj2.favoriteSticker(closure_0);
        const obj4 = { text: intl.string(intl7.t.mE2e8A), icon: StarIcon.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
        const openMana = ToastActionCreatorsDefault.openMana;
        ToastActionCreatorsDefault;
        intl = tmp4(1126).intl;
        openMana("STICKER_FAVORITED", obj4);
      }
    }, items1),
    renderStarIcon: callback
  };
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function StandardStickerDetail(channel) {
  let DM_CHANNEL;
  let chatInputRef;
  let closure_1;
  let first;
  let items2;
  let pack_id;
  let sticker;
  let tmp11;
  let tmp7;
  let tmp9;
  let tmp = chatInputRef;
  let obj = chatInputRef(pack_id[15]);
  const cResult = obj.c(25);
  ({ sticker, chatInputRef } = channel);
  channel = channel.channel;
  let tmp4 = closure_24();
  importDefault = tmp4;
  pack_id = sticker.pack_id;
  const name = sticker.name;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = StickersStore;
    const items = [StickersStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== pack_id) {
    const fn = function o() {
      return StickersStore.getStickerPack(pack_id);
    };
    cResult[1] = pack_id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let tmpResult = tmp(tmp2[23]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [StickersStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== pack_id) {
    class O {
      constructor() {
        return StickersStore.isPremiumPack(pack_id);
      }
    }
    cResult[4] = pack_id;
    cResult[5] = O;
    tmp11 = O;
  } else {
    class O {
      constructor() {
        return StickersStore.isPremiumPack(pack_id);
      }
    }
  }
  const tmpResult3 = tmp(pack_id[23]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp11);
  let closure_6 = tmp13;
  const tmpResult4 = tmp(pack_id[16]);
  const fetchStickerPack = tmpResult4.useFetchStickerPack(pack_id);
  const diff = require("useWindowDimensions")().width - 2 * closure_12;
  const containerWidth = diff;
  const rounded = Math.floor(Math.min(ACTION_SHEET_MAX_WIDTH, diff - closure_13) / (closure_14 + closure_13));
  if (null != channel.guild_id) {
    class O {
      constructor() {
        return StickersStore.isPremiumPack(pack_id);
      }
    }
    DM_CHANNEL = constants.GUILD_CHANNEL;
  } else {
    class O {
      constructor() {
        return StickersStore.isPremiumPack(pack_id);
      }
    }
    DM_CHANNEL = constants.DM_CHANNEL;
  }
  if (cResult[6] !== DM_CHANNEL) {
    class O {
      constructor() {
        return StickersStore.isPremiumPack(pack_id);
      }
    }
    tmp18[0] = DM_CHANNEL;
    tmp18[1] = constants2.STICKER_POPOUT;
    cResult[6] = DM_CHANNEL;
    cResult[7] = tmp18;
  } else {
    class O {
      constructor() {
        return StickersStore.isPremiumPack(pack_id);
      }
    }
  }
  const GuildStore = tmp17;
  if (cResult[8] === tmp17) {
    class O {
      constructor() {
        return StickersStore.isPremiumPack(pack_id);
      }
    }
    const effect = stateFromStores1.useEffect(K, items2);
    if (cResult[12] === tmp17) {
      class O {
        constructor() {
          return StickersStore.isPremiumPack(pack_id);
        }
      }
    }
    function upsellContent(name) {
      let analyticsLocation;
      let formatResult;
      let intl2;
      let obj7;
      let stickers;
      const stickerPack = name;
      let tmp = stateFromStores1;
      const intl = chatInputRef(pack_id[22]).intl;
      const format = intl.format;
      const t = chatInputRef(pack_id[22]).t;
      if (stateFromStores1) {
        let obj2 = { stickerPackName: name.name };
        formatResult = format(t.auckXz, obj2);
      } else {
        let obj = { stickerPackName: name.name };
        formatResult = format(t.OzB6e3, obj);
      }
      const tmp5 = closure_1_21;
      let tmp4 = closure_1_22;
      const children = [, , , , ];
      const obj3 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: name };
      children[0] = closure_1_21(chatInputRef(pack_id[26]).Text, obj3);
      const obj4 = { style: closure_1.description, variant: "text-sm/medium", children: formatResult };
      children[1] = closure_1_21(chatInputRef(pack_id[26]).Text, obj4);
      const obj5 = { containerWidth, stickers: stickers.slice(0, rounded), rowSize: rounded };
      stickers = name.stickers;
      let tmp7 = closure_1(pack_id[27]);
      children[2] = closure_1_21(tmp7, obj5);
      let tmp5Result = null;
      const tmp3 = closure_1_23;
      const tmp6 = closure_1;
      if (tmp) {
        const obj6 = { style: obj7 };
        obj7 = { height: tmp6(pack_id[13]).space.PX_16 };
        tmp5Result = tmp5(closure_6, obj6);
      }
      children[3] = tmp5Result;
      if (tmp) {
        const obj8 = {
          variant: "secondary",
          text: intl2.string(chatInputRef(pack_id[22]).t.GPy3Ar),
          onPress() {
              const obj = showStickerDetailActionSheet;
              const result = obj.hideStickerDetailActionSheet();
              const tmp4 = closure_6;
              if (tmp4) {
                if (null != chatInputRef) {
                  const tmpResult = stickers_StickersUtils;
                  const result1 = tmpResult.openStickerPickerToPackId(tmp5, pack_id);
                }
              }
              const obj2 = { analyticsLocation, analyticsPopoutType: openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_UPSELL, stickerPack };
              const tmp7 = openStickerPackDetailActionSheetDefault;
              tmp7(obj2);
            }
        };
        const Button = chatInputRef(pack_id[28]).Button;
        intl2 = chatInputRef(pack_id[22]).intl;
        tmp = tmp5(Button, obj8);
      }
      children[4] = tmp;
      return tmp3(tmp4, { children });
    }
    cResult[12] = tmp17;
    cResult[13] = chatInputRef;
    cResult[14] = diff;
    cResult[15] = null != stateFromStores && stateFromStores1;
    cResult[16] = stateFromStores1;
    cResult[17] = name;
    cResult[18] = rounded;
    cResult[19] = pack_id;
    cResult[20] = tmp4.description;
    cResult[21] = upsellContent;
  }
  class K {
    constructor() {
      if (null != stateFromStores) {
        const obj2 = { location: GuildStore, type: "Sticker Upsell Sheet", sticker_pack_id: tmp.id };
        const obj = AnalyticsUtilsDefault;
        obj.track(constants.OPEN_POPOUT, obj2);
      }
    }
  }
  items2 = [tmp17, stateFromStores];
  cResult[8] = tmp17;
  cResult[9] = stateFromStores;
  cResult[10] = K;
  cResult[11] = items2;
}) : (function StandardStickerDetail(chatInputRef) {
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
  let obj = channel(pack_id[23]);
  const items = [StickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => StickersStore.getStickerPack(pack_id));
  let obj2 = channel(pack_id[23]);
  const items1 = [StickersStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => StickersStore.isPremiumPack(pack_id));
  const obj3 = channel(pack_id[16]);
  const fetchStickerPack = obj3.useFetchStickerPack(pack_id);
  const diff = chatInputRef(pack_id[24])().width - 2 * closure_12;
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
    const intl2 = tmp2(tmp3[22]).intl;
    const format = intl2.format;
    const t = tmp2(tmp3[22]).t;
    if (stateFromStores1) {
      const obj4 = { stickerPackName: stateFromStores.name };
      formatResult = format(t.auckXz, obj4);
    } else {
      const obj5 = { stickerPackName: stateFromStores.name };
      formatResult = format(t.OzB6e3, obj5);
    }
    const obj6 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: name };
    const items4 = [closure_21(tmp2(tmp3[26]).Text, obj6), , , , ];
    const obj7 = { style: tmp.description, variant: "text-sm/medium", children: formatResult };
    items4[1] = closure_21(channel(pack_id[26]).Text, obj7);
    const obj8 = { containerWidth: diff, stickers: stickers.slice(0, rounded), rowSize: rounded };
    stickers = stateFromStores.stickers;
    const tmp7Result = chatInputRef(pack_id[27]);
    items4[2] = closure_21(tmp7Result, obj8);
    let tmp15Result = null;
    const tmp13 = closure_23;
    const tmp14 = closure_22;
    if (stateFromStores1) {
      const obj9 = { style: obj10 };
      obj10 = { height: chatInputRef(pack_id[13]).space.PX_16 };
      tmp15Result = tmp15(closure_6, obj9);
    }
    items4[3] = tmp15Result;
    let tmp15Result2 = stateFromStores1;
    if (tmp15Result2) {
      const obj11 = {
        variant: "secondary",
        text: intl.string(channel(pack_id[22]).t.GPy3Ar),
        onPress() {
              const obj = showStickerDetailActionSheet;
              const result = obj.hideStickerDetailActionSheet();
              if (null != stateFromStores) {
                const tmp4 = stateFromStores1;
                if (tmp4) {
                  if (null != chatInputRef) {
                    const tmpResult = stickers_StickersUtils;
                    const result1 = tmpResult.openStickerPickerToPackId(tmp5, pack_id);
                  }
                }
              }
              const obj2 = { analyticsLocation: memo, analyticsPopoutType: openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_UPSELL, stickerPack: stateFromStores };
              const tmp6 = openStickerPackDetailActionSheetDefault;
              tmp6(obj2);
            }
      };
      const Button = tmp2(tmp3[28]).Button;
      intl = tmp2(tmp3[22]).intl;
      tmp15Result2 = tmp15(Button, obj11);
    }
    const obj12 = { children: items4 };
    items4[4] = tmp15Result2;
    tmp13Result = tmp13(tmp14, obj12);
  }
  return tmp13Result;
});
function GuildStickerDetail(sticker) {
  let Button2;
  let MoreHorizontalIcon;
  let closure_5;
  let flag;
  let flag2;
  let handleFavorite;
  let intl2;
  let intl3;
  let intl4;
  let isFavorite;
  let items5;
  let items6;
  let items8;
  let items9;
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
  let tmp = closure_24();
  let obj = react;
  let tmp2 = first1;
  const tmp3 = first1(react.useState(null), 2);
  let guild = tmp3[0];
  let closure_3 = tmp3[1];
  const tmp5 = sticker;
  let obj2 = sticker(guild[23]);
  const items = [ref];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(sticker.guild_id));
  let hasItem = null == stateFromStores;
  if (!hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants4.DISCOVERABLE);
  }
  const tmp2Result = tmp2(obj.useState(!hasItem), 2);
  first1 = tmp2Result[0];
  react = tmp2Result[1];
  const currentUser = UserStore.getCurrentUser();
  let obj3 = channel(tmp6[32]);
  let result = obj3.canUseCustomStickersEverywhere(currentUser);
  let obj4 = channel(tmp6[33]);
  let tidaWebformEnabled = obj4.useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = tmp5(tmp6[34]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  ({ isFavorite, handleFavorite } = closure_25(sticker.id));
  const tmp17 = closure_25(sticker.id);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = setting;
  }
  const tmp5Result = tmp5(guild[35]);
  stickerAssetUrl = tmp5Result.getStickerAssetUrl(sticker);
  const items1 = [stickerAssetUrl];
  const items2 = [channel.guild_id];
  const callback = obj.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequire(9750, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items1);
  analyticsLocation = obj.useMemo(() => {
    let DM_CHANNEL;
    if (null != channel.guild_id) {
      DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items2);
  let obj5 = { guild_id: channel.getGuildId() };
  const useRef = obj.useRef;
  const tmp5Result2 = tmp5(guild[38]);
  let merged = Object.assign(tmp5Result2.collectChannelAnalyticsMetadata(channel));
  const items3 = [sticker.id, first1];
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
            return { value: "IconComponent", done: null };
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
                const obj4 = { value: channel(guild[41])(id.id), done: false };
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
              return { value: "IconComponent", done: null };
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
  }, items3);
  const tmp22 = sticker.guild_id === channel.getGuildId();
  const intl = tmp5(tmp6[22]).intl;
  if (result) {
    let string2Result1;
    const string2 = intl.string;
    const t2 = tmp5(tmp6[22]).t;
    if (null != stateFromStores) {
      let string2Result;
      if (tmp22) {
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
  } else if (null != stateFromStores) {
    const string = intl.string;
    const t = tmp5(tmp6[22]).t;
    if (tmp22) {
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
    stringResult = intl.string(tmp5(tmp6[22]).t.IuXYch);
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
    stringResult = intl.format(tmp5(tmp6[22]).t.hGWuxU, obj6);
    flag = false;
    str = "Custom Sticker Popout (Soft Upsell)";
    flag2 = false;
  }
  obj7 = { popoutAnalyticsConfig: current, popoutType: str };
  ref = obj.useRef(obj7);
  const effect1 = obj.useEffect(() => {
    ref.current = obj7;
  });
  const items4 = [first1];
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
  }, items4);
  let tmp31Result4 = null;
  if (first1) {
    const obj8 = { style: tmp.guildEmojiTopContainer, children: items5 };
    const obj9 = { sticker, size: 48 };
    items5 = [closure_21(tmp14(tmp6[43]), obj9), , ];
    const obj10 = { style: tmp.guildEmojiDescription, children: items6 };
    const obj11 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
    items6 = [closure_21(tmp5(tmp6[26]).Text, obj11), ];
    const obj12 = { style: tmp.description, variant: "text-sm/medium", children: stringResult };
    items6[1] = closure_21(tmp5(guild[26]).Text, obj12);
    items5[1] = closure_23(stickerAssetUrl, obj10);
    let tmp34Result = tidaWebformEnabled && null != stickerAssetUrl;
    if (tmp34Result) {
      const obj13 = { accessibilityLabel: intl2.string(tmp5(guild[22]).t.PdRCRg), style: tmp.moreMenuIcon, onPress: callback, children: closure_21(MoreHorizontalIcon, obj14) };
      intl2 = tmp5(tmp6[22]).intl;
      obj14 = { color: channel(guild[13]).colors.INTERACTIVE_TEXT_DEFAULT };
      MoreHorizontalIcon = tmp5(tmp6[44]).MoreHorizontalIcon;
      tmp34Result = tmp34(obj7, obj13);
    }
    items5[2] = tmp34Result;
    const items7 = [closure_23(stickerAssetUrl, obj8), , , , ];
    if (flag) {
      const obj15 = { style: tmp.buttonContainer, children: items8 };
      const obj16 = {
        text: intl3.string(tmp5(guild[22]).t["gl/XHJ"]),
        onPress() {
              return openStickersPremiumUpsellAlertDefault(analyticsLocation);
            }
      };
      const tmp14Result = channel(guild[45]);
      intl3 = tmp5(tmp6[22]).intl;
      items8 = [closure_21(tmp14Result, obj16), ];
      const obj17 = { style: obj18 };
      obj18 = { height: channel(guild[13]).space.PX_16 };
      items8[1] = closure_21(stickerAssetUrl, obj17);
      flag = tmp31(tmp33, obj15);
    }
    items7[1] = flag;
    let tmp31Result = tmp27;
    if (tmp31Result) {
      const obj19 = { style: tmp.buttonContainer, children: items9 };
      const obj20 = {
        text: intl4.string(tmp5(guild[22]).t.riu2R5),
        onPress() {
              if (null != first) {
                const id = first.id;
                let obj = GuildActionCreatorsDefault;
                const joinGuildResult = obj.joinGuild(id);
                const nextPromise = joinGuildResult.then(() => {
                  const obj = channel(guild[39]);
                  const result = obj.transitionToGuildSync(id);
                });
                nextPromise.catch(JoinGuildRefusedError.ignoreJoinGuildRefused);
              }
            }
      };
      const Button = tmp5(tmp6[28]).Button;
      intl4 = tmp5(tmp6[22]).intl;
      items9 = [closure_21(Button, obj20), ];
      const obj21 = { style: obj22 };
      obj22 = { height: channel(guild[13]).space.PX_16 };
      items9[1] = closure_21(stickerAssetUrl, obj21);
      tmp31Result = tmp31(tmp33, obj19);
    }
    items7[2] = tmp31Result;
    let tmp31Result3 = null != stateFromStores || null != guild;
    if (tmp31Result3) {
      const obj23 = { style: tmp.divider };
      const items10 = [closure_21(tmp5(tmp6[47]).FormDivider, obj23), ];
      const tmp14Result2 = channel(guild[48]);
      if (guild == null) {
        guild = stateFromStores;
      }
      const obj24 = { guild, showingJoinGuildCta: !flag2 && null == stateFromStores && null != guild, hasJoinedGuild: null != stateFromStores, title: string3Result };
      const intl5 = tmp5(tmp6[22]).intl;
      const string3 = intl5.string;
      const t3 = tmp5(tmp6[22]).t;
      if (null != stateFromStores) {
        string3Result = string3(t3.kx6pEG);
      } else {
        string3Result = string3(t3.pDE7Gb);
      }
      const obj25 = { children: items10 };
      items10[1] = closure_21(tmp14Result2, obj24);
      tmp31Result3 = tmp31(tmp32, obj25);
    }
    items7[3] = tmp31Result3;
    if (tidaWebformEnabled) {
      tidaWebformEnabled = tmp8;
    }
    if (tidaWebformEnabled) {
      let string4Result;
      const obj26 = { style: tmp.divider };
      const items11 = [closure_21(tmp5(tmp6[47]).FormDivider, obj26), ];
      const obj27 = { style: tmp.favoriteContainer, children: closure_21(Button2, obj28) };
      Button2 = tmp5(tmp6[28]).Button;
      const intl6 = tmp5(tmp6[22]).intl;
      const string4 = intl6.string;
      const t4 = tmp5(tmp6[22]).t;
      if (isFavorite) {
        string4Result = string4(t4.XhzKyF);
      } else {
        string4Result = string4(t4.kWmiPW);
      }
      obj28 = { text: string4Result, variant: str2, size: "md", onPress: handleFavorite };
      str2 = "primary";
      if (isFavorite) {
        str2 = "tertiary";
      }
      const obj29 = { children: items11 };
      items11[1] = closure_21(stickerAssetUrl, obj27);
      tidaWebformEnabled = tmp31(tmp32, obj29);
    }
    const obj30 = { children: items7 };
    items7[4] = tidaWebformEnabled;
    tmp31Result4 = tmp31(tmp32, obj30);
  }
  return tmp31Result4;
}
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StickerDetailActionSheet(arg0) {
  let channel;
  let chatInputRef;
  let first;
  let first1;
  let obj5;
  let renderableSticker;
  let tmp12;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(14);
  ({ renderableSticker, channel, chatInputRef } = arg0);
  const tmp4 = closure_24();
  const obj2 = StickersHooks;
  [first, tmp7] = obj2.useStickerForRenderableSticker(renderableSticker, true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = closure_21(metroImportDefault, { size: "large" });
    cResult[0] = tmp11;
    first1 = tmp11;
  } else {
    first1 = cResult[0];
  }
  if (null == first) {
    if (tmp7) {
      if (cResult[1] === channel) {
        let tmp21;
        if (cResult[2] === renderableSticker) {
          tmp21 = cResult[3];
        }
        tmp12 = tmp21;
      }
      const obj3 = { renderableSticker, channel };
      const tmp24 = closure_21(UnavailableStickerDetail, obj3);
      cResult[1] = channel;
      cResult[2] = renderableSticker;
      cResult[3] = tmp24;
      tmp21 = tmp24;
    }
    if (cResult[11] === tmp12) {
      let tmp25;
      if (cResult[12] === tmp4.content) {
        tmp25 = cResult[13];
      }
      return tmp25;
    }
    const obj4 = { startExpanded: true, children: closure_21(metroRequire, obj5) };
    obj5 = { style: tmp4.content, children: tmp12 };
    BottomSheet = tmp(6836).BottomSheet;
    const tmp28 = closure_21(BottomSheet, obj4);
    cResult[11] = tmp12;
    cResult[12] = tmp4.content;
    cResult[13] = tmp28;
    tmp25 = tmp28;
  }
  tmp12 = first1;
  if (null != first) {
    const tmpResult = StickersUtils;
    if (tmpResult.isStandardSticker(first)) {
      if (cResult[4] === channel) {
        if (cResult[5] === chatInputRef) {
          let tmp17;
          if (cResult[6] === first) {
            tmp17 = cResult[7];
          }
          first1 = tmp17;
        }
      }
      const obj6 = { sticker: first, channel, chatInputRef };
      const tmp20 = closure_21(closure_26, obj6);
      cResult[4] = channel;
      cResult[5] = chatInputRef;
      cResult[6] = first;
      cResult[7] = tmp20;
      tmp17 = tmp20;
    } else {
      const tmpResult2 = StickersUtils;
      if (tmpResult2.isGuildSticker(first)) {
        if (cResult[8] === channel) {
          let tmp13;
          if (cResult[9] === first) {
            tmp13 = cResult[10];
          }
          first1 = tmp13;
        }
        const obj7 = { sticker: first, channel };
        const tmp16 = closure_21(GuildStickerDetail, obj7);
        cResult[8] = channel;
        cResult[9] = first;
        cResult[10] = tmp16;
        tmp13 = tmp16;
      }
    }
    tmp12 = first1;
  }
}) : (function StickerDetailActionSheet(chatInputRef) {
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
    BottomSheet = tmp2(6836).BottomSheet;
    return closure_21(BottomSheet, obj3);
  }
  tmp7Result = tmp7Result2;
  if (null != first) {
    const tmp2Result = StickersUtils;
    if (tmp2Result.isStandardSticker(first)) {
      const obj5 = { sticker: first, channel, chatInputRef };
      tmp7Result2 = tmp7(closure_26, obj5);
    } else {
      const tmp2Result2 = StickersUtils;
      if (tmp2Result2.isGuildSticker(first)) {
        const obj6 = { sticker: first, channel };
        tmp7Result2 = tmp7(GuildStickerDetail, obj6);
      }
    }
    tmp7Result = tmp7Result2;
  }
}));
let result = size.fileFinishedImporting("modules/stickers/native/StickerDetailActionSheet.tsx");

export default memoResult;
