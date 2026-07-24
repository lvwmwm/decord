// Module ID: 9656
// Function ID: 75123
// Name: StandardStickerDetail
// Dependencies: [5, 57, 31, 27, 1838, 1849, 5035, 9604, 653, 5188, 33, 4130, 477, 689, 9636, 9431, 9433, 4098, 4126, 1212, 9637, 3831, 566, 1450, 675, 9650, 4543, 9655, 9638, 9643, 3776, 5489, 3803, 4466, 9657, 1934, 4324, 5048, 9658, 5796, 9651, 9007, 8605, 9659, 7636, 9437, 5187, 2]

// Module 9656 (StandardStickerDetail)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import importAllResult from "items";
import get_ActivityIndicator from "hideStickerDetailActionSheet";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL";
import ME from "ME";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import jsxProd from "getStickerPackPreviewSticker";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "result";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_23;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function StandardStickerDetail(chatInputRef) {
  let channel;
  let sticker;
  ({ sticker, channel } = chatInputRef);
  chatInputRef = chatInputRef.chatInputRef;
  const dependencyMap = callback3();
  const pack_id = sticker.pack_id;
  const name = sticker.name;
  let obj = channel(566);
  let items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getStickerPack(pack_id));
  const items1 = [closure_11];
  let closure_6 = channel(566).useStateFromStores(items1, () => outer1_11.isPremiumPack(pack_id));
  let obj2 = channel(566);
  const fetchStickerPack = channel(9636).useFetchStickerPack(pack_id);
  const diff = chatInputRef(1450)().width - 2 * closure_12;
  let closure_8 = Math.floor(Math.min(ACTION_SHEET_MAX_WIDTH, diff - closure_13) / (closure_14 + closure_13));
  const items2 = [channel.guild_id];
  const memo = stateFromStores.useMemo(() => {
    const obj = {};
    if (null != channel.guild_id) {
      let DM_CHANNEL = outer1_15.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = outer1_15.DM_CHANNEL;
    }
    obj.page = DM_CHANNEL;
    obj.section = outer1_16.STICKER_POPOUT;
    return obj;
  }, items2);
  const items3 = [memo, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      let obj = chatInputRef(description[24]);
      obj = { location: memo, type: "Sticker Upsell Sheet", sticker_pack_id: stateFromStores.id };
      obj.track(outer1_17.OPEN_POPOUT, obj);
    }
  }, items3);
  if (null == stateFromStores) {
    obj = { size: "large" };
    let tmp6 = callback2(diff, obj);
  } else {
    tmp6 = ((stateFromStores) => {
      let closure_0 = stateFromStores;
      const intl = channel(description[19]).intl;
      const format = intl.format;
      const t = channel(description[19]).t;
      if (closure_6) {
        let obj = { stickerPackName: stateFromStores.name };
        let formatResult = format(t.auckXz, obj);
      } else {
        obj = { stickerPackName: stateFromStores.name };
        formatResult = format(t.OzB6e3, obj);
      }
      obj = {};
      const obj1 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: name };
      const items = [outer1_21(channel(description[18]).Text, obj1), , , , ];
      const obj2 = { style: description.description, variant: "text-sm/medium", children: formatResult };
      items[1] = outer1_21(channel(description[18]).Text, obj2);
      let obj3 = { containerWidth: closure_7 };
      const stickers = stateFromStores.stickers;
      obj3.stickers = stickers.slice(0, closure_8);
      obj3.rowSize = closure_8;
      items[2] = outer1_21(chatInputRef(description[25]), obj3);
      let tmp5 = null;
      if (closure_6) {
        const obj4 = {};
        const obj5 = { height: chatInputRef(description[13]).space.PX_16 };
        obj4.style = obj5;
        tmp5 = outer1_21(closure_6, obj4);
      }
      items[3] = tmp5;
      let tmp10 = closure_6;
      if (closure_6) {
        const obj6 = { variant: "secondary" };
        const intl2 = channel(description[19]).intl;
        obj6.text = intl2.string(channel(description[19]).t.GPy3Ar);
        obj6.onPress = function onPress() {
          let obj = channel(9655);
          const result = obj.hideStickerDetailActionSheet();
          if (null != closure_0) {
            if (outer1_6) {
              if (null != outer1_1) {
                const result1 = channel(9638).openStickerPickerToPackId(outer1_1, outer1_3);
                const obj3 = channel(9638);
              }
            }
          }
          obj = { analyticsLocation: outer1_9, analyticsPopoutType: channel(9643).AnalyticsPopoutType.STICKER_PACK_UPSELL, stickerPack: closure_0 };
          chatInputRef(9643)(obj);
        };
        tmp10 = outer1_21(channel(description[26]).Button, obj6);
      }
      items[4] = tmp10;
      obj.children = items;
      return outer1_23(outer1_22, obj);
    })(stateFromStores);
  }
  return tmp6;
}
function UnavailableStickerDetail(arg0) {
  let channel;
  let renderableSticker;
  ({ renderableSticker, channel } = arg0);
  let stickerAssetUrl;
  const tmp = callback3();
  const currentUser = authStore.getCurrentUser();
  let obj = importDefault(stickerAssetUrl[30]);
  const items = [channel.guild_id];
  const result = obj.canUseCustomStickersEverywhere(currentUser);
  importDefault = importAllResult.useMemo(() => {
    const obj = {};
    if (null != channel.guild_id) {
      let DM_CHANNEL = outer1_15.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = outer1_15.DM_CHANNEL;
    }
    obj.page = DM_CHANNEL;
    obj.section = outer1_16.STICKER_POPOUT;
    return obj;
  }, items);
  let obj1 = importDefault(stickerAssetUrl[31]);
  let tidaWebformEnabled = obj1.useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = channel(stickerAssetUrl[32]).DeveloperMode;
  if (tidaWebformEnabled) {
    tidaWebformEnabled = DeveloperMode.useSetting();
  }
  let obj2 = channel(stickerAssetUrl[33]);
  stickerAssetUrl = obj2.getStickerAssetUrl(renderableSticker);
  const items1 = [stickerAssetUrl];
  obj = { style: tmp.guildEmojiTopContainer };
  const callback = importAllResult.useCallback(() => {
    if (null != stickerAssetUrl) {
      let obj = lib(stickerAssetUrl[17]);
      obj = { stickerUrl: stickerAssetUrl };
      obj.openLazy(channel(stickerAssetUrl[35])(stickerAssetUrl[34], stickerAssetUrl.paths), "StickerOptionsActionSheet", obj, "stack");
    }
  }, items1);
  const items2 = [callback2(importDefault(stickerAssetUrl[40]), { sticker: renderableSticker, size: 48 }), , ];
  obj = { style: tmp.guildEmojiDescription };
  obj1 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: renderableSticker.name };
  const items3 = [callback2(channel(stickerAssetUrl[18]).Text, obj1), ];
  obj2 = { style: tmp.description, variant: "text-sm/medium" };
  const intl = channel(stickerAssetUrl[19]).intl;
  if (result) {
    let stringResult = intl.string(tmp11(tmp12[19]).t.vZaScH);
  } else {
    const obj3 = {
      openPremiumSettings() {
          let obj = lib(stickerAssetUrl[17]);
          obj.hideActionSheet();
          let obj1 = lib(stickerAssetUrl[24]);
          obj = { location_page: lib.page, location_section: lib.section };
          obj1.track(outer1_17.PREMIUM_PROMOTION_OPENED, obj);
          obj = { screen: outer1_19.PREMIUM, params: obj1 };
          obj1 = { analyticsLocation: lib };
          channel(stickerAssetUrl[39]).openUserSettings(obj);
        }
    };
    stringResult = intl.format(tmp11(tmp12[19]).t.hGWuxU, obj3);
  }
  obj2.children = stringResult;
  items3[1] = callback2(channel(stickerAssetUrl[18]).Text, obj2);
  obj.children = items3;
  items2[1] = closure_23(closure_6, obj);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = null != stickerAssetUrl;
  }
  if (tidaWebformEnabled) {
    const obj4 = {};
    const intl2 = channel(stickerAssetUrl[19]).intl;
    obj4.accessibilityLabel = intl2.string(channel(stickerAssetUrl[19]).t.PdRCRg);
    obj4.style = tmp.moreMenuIcon;
    obj4.onPress = callback;
    const obj5 = { color: importDefault(stickerAssetUrl[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj4.children = callback2(channel(stickerAssetUrl[41]).MoreHorizontalIcon, obj5);
    tidaWebformEnabled = callback2(closure_8, obj4);
  }
  items2[2] = tidaWebformEnabled;
  obj.children = items2;
  return closure_23(closure_6, obj);
}
({ View: closure_6, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
({ PADDING_HORIZONTAL: closure_12, MIN_MARGIN: closure_13, STICKER_SIZE: closure_14 } = PADDING_HORIZONTAL);
({ AnalyticsPages: closure_15, AnalyticsSections: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18, UserSettingsSections: closure_19 } = ME);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let obj = {};
obj = { padding: 16 };
let num = 0;
if (set.isAndroid()) {
  num = 16;
}
obj.paddingBottom = num;
obj.content = obj;
obj.description = { lineHeight: 18, marginTop: 4 };
obj.guildEmojiTopContainer = { flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.buttonContainer = _createForOfIteratorHelperLoose;
obj.guildEmojiDescription = { paddingLeft: 16, flex: 1 };
obj.divider = { marginLeft: 0, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.moreMenuIcon = { height: 32, width: 32, justifyContent: "center", alignItems: "center" };
let obj2 = { marginLeft: 0, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.favoriteContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.starIcon = { height: 32, width: 32 };
set = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
obj.starIconSelected = set;
let obj3 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.starIconUnselected = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let closure_24 = _createForOfIteratorHelperLoose.createStyles(obj);
function GuildStickerDetail(sticker) {
  let c10;
  let c9;
  sticker = sticker.sticker;
  let channel = sticker.channel;
  let first1;
  let closure_8;
  c9 = undefined;
  let authStore;
  let tidaWebformEnabled;
  let stickerAssetUrl;
  let closure_13;
  let closure_14;
  let closure_15;
  let c16;
  let c17;
  let obj1;
  let closure_19;
  const dependencyMap = callback3();
  let tmp = callback(stateFromStores.useState(null), 2);
  const first = tmp[0];
  callback = tmp[1];
  let obj = sticker(566);
  let items = [c9];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.getGuild(sticker.guild_id));
  let closure_6 = tmp4;
  let hasItem = null == stateFromStores;
  if (!hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(obj1.DISCOVERABLE);
  }
  const tmp7 = callback(stateFromStores.useState(!hasItem), 2);
  first1 = tmp7[0];
  closure_8 = tmp7[1];
  const currentUser = authStore.getCurrentUser();
  obj1 = channel(3776);
  let result = obj1.canUseCustomStickersEverywhere(currentUser);
  tidaWebformEnabled = channel(5489).useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = sticker(3803).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj3 = channel(5489);
  ({ isFavorite: c9, handleFavorite: c10 } = (function useStickerFavorite(id) {
    let closure_0 = id;
    const tmp = outer1_24();
    const channel = tmp;
    let obj = sticker(closure_2[14]);
    const favoriteStickerIds = obj.useFavoriteStickerIds();
    const hasItem = favoriteStickerIds.includes(id);
    const items = [tmp];
    const callback = stateFromStores.useCallback((arg0) => {
      let obj = {};
      const merged = Object.assign(tmp.starIcon);
      if (arg0) {
        const merged1 = Object.assign(tmp.starIconSelected);
        let tmp5 = obj;
      } else {
        const merged2 = Object.assign(tmp.starIconUnselected);
        tmp5 = obj;
      }
      if (arg0) {
        let StarOutlineIcon = tmp9(tmp10[15]).StarIcon;
      } else {
        StarOutlineIcon = tmp9(tmp10[16]).StarOutlineIcon;
      }
      obj = { style: tmp5 };
      return outer2_21(StarOutlineIcon, obj);
    }, items);
    const items1 = [hasItem, id, callback];
    obj = {
      isFavorite: hasItem,
      handleFavorite: stateFromStores.useCallback(() => {
        function content() {
          const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold" };
          const intl = sticker(1212).intl;
          const string = intl.string;
          const t = sticker(1212).t;
          if (outer1_2) {
            let stringResult = string(t.in1rga);
          } else {
            stringResult = string(t.mE2e8A);
          }
          obj.children = stringResult;
          return outer3_21(sticker(4126).Text, obj);
        }
        let obj = channel(hasItem[17]);
        obj.hideActionSheet();
        const obj2 = sticker(hasItem[20]);
        if (hasItem) {
          obj2.unfavoriteSticker(closure_0);
          obj = {
            key: "STICKER_UNFAVORITED",
            icon() {
                return outer1_3(false);
              },
            content
          };
          channel(tmp2[21]).open(obj);
          const obj5 = channel(tmp2[21]);
        } else {
          obj2.favoriteSticker(closure_0);
          obj = {
            key: "STICKER_FAVORITED",
            icon() {
                return outer1_3(true);
              },
            content
          };
          channel(tmp2[21]).open(obj);
          const obj3 = channel(tmp2[21]);
        }
      }, items1),
      renderStarIcon: callback
    };
    return obj;
  })(sticker.id));
  if (tidaWebformEnabled) {
    tidaWebformEnabled = setting;
  }
  const tmp12 = (function useStickerFavorite(id) {
    let closure_0 = id;
    const tmp = outer1_24();
    const channel = tmp;
    let obj = sticker(closure_2[14]);
    const favoriteStickerIds = obj.useFavoriteStickerIds();
    const hasItem = favoriteStickerIds.includes(id);
    const items = [tmp];
    const callback = stateFromStores.useCallback((arg0) => {
      let obj = {};
      const merged = Object.assign(tmp.starIcon);
      if (arg0) {
        const merged1 = Object.assign(tmp.starIconSelected);
        let tmp5 = obj;
      } else {
        const merged2 = Object.assign(tmp.starIconUnselected);
        tmp5 = obj;
      }
      if (arg0) {
        let StarOutlineIcon = tmp9(tmp10[15]).StarIcon;
      } else {
        StarOutlineIcon = tmp9(tmp10[16]).StarOutlineIcon;
      }
      obj = { style: tmp5 };
      return outer2_21(StarOutlineIcon, obj);
    }, items);
    const items1 = [hasItem, id, callback];
    obj = {
      isFavorite: hasItem,
      handleFavorite: stateFromStores.useCallback(() => {
        function content() {
          const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold" };
          const intl = sticker(1212).intl;
          const string = intl.string;
          const t = sticker(1212).t;
          if (outer1_2) {
            let stringResult = string(t.in1rga);
          } else {
            stringResult = string(t.mE2e8A);
          }
          obj.children = stringResult;
          return outer3_21(sticker(4126).Text, obj);
        }
        let obj = channel(hasItem[17]);
        obj.hideActionSheet();
        const obj2 = sticker(hasItem[20]);
        if (hasItem) {
          obj2.unfavoriteSticker(closure_0);
          obj = {
            key: "STICKER_UNFAVORITED",
            icon() {
                return outer1_3(false);
              },
            content
          };
          channel(tmp2[21]).open(obj);
          const obj5 = channel(tmp2[21]);
        } else {
          obj2.favoriteSticker(closure_0);
          obj = {
            key: "STICKER_FAVORITED",
            icon() {
                return outer1_3(true);
              },
            content
          };
          channel(tmp2[21]).open(obj);
          const obj3 = channel(tmp2[21]);
        }
      }, items1),
      renderStarIcon: callback
    };
    return obj;
  })(sticker.id);
  stickerAssetUrl = sticker(4466).getStickerAssetUrl(sticker);
  let items1 = [stickerAssetUrl];
  closure_13 = stateFromStores.useCallback(() => {
    if (null != stickerAssetUrl) {
      let obj = channel(closure_2[17]);
      obj = { stickerUrl: stickerAssetUrl };
      obj.openLazy(sticker(closure_2[35])(closure_2[34], closure_2.paths), "StickerOptionsActionSheet", obj, "stack");
    }
  }, items1);
  let items2 = [channel.guild_id];
  closure_14 = stateFromStores.useMemo(() => {
    const obj = {};
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    obj.page = DM_CHANNEL;
    obj.section = _true.STICKER_POPOUT;
    return obj;
  }, items2);
  obj = { guild_id: channel.getGuildId() };
  let obj4 = sticker(4466);
  let merged = Object.assign(sticker(4324).collectChannelAnalyticsMetadata(channel));
  let items3 = [sticker.id, first1];
  const effect = stateFromStores.useEffect(() => {
    function _fetchDiscoverableGuild() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = first(tmp);
      return obj(...arguments);
    }
    if (!first1) {
      (function fetchDiscoverableGuild() {
        return _fetchDiscoverableGuild(...arguments);
      })();
    }
  }, items3);
  const tmp16 = sticker.guild_id === channel.getGuildId();
  c16 = false;
  let intl = sticker(1212).intl;
  if (result) {
    let string2 = intl.string;
    let fZ0DiG = tmp18(1212).t;
    if (!tmp4) {
      if (tmp17) {
        let string2Result = string2(fZ0DiG.yHmoR9);
      } else {
        string2Result = string2(fZ0DiG.vZaScH);
      }
      closure_15 = string2Result;
    }
    if (tmp16) {
      fZ0DiG = fZ0DiG.fZ0DiG;
      let string2Result1 = string2(fZ0DiG);
    } else {
      string2Result1 = string2(fZ0DiG["1f6D9m"]);
    }
  } else {
    if (tmp4) {
      let string = intl.string;
      let t = tmp18(1212).t;
      if (tmp16) {
        closure_15 = string(t.jNphpt);
        c16 = true;
        let str = "Custom Sticker Popout (Upsell)";
        let flag = true;
      } else {
        closure_15 = string(t.lyD5ZW);
        c16 = true;
        str = "Custom Sticker Popout (Upsell)";
        flag = true;
      }
    } else if (tmp17) {
      closure_15 = intl.string(tmp18(1212).t.IuXYch);
      c16 = true;
      str = "Custom Sticker Popout (Upsell)";
      flag = true;
    } else {
      obj = {
        openPremiumSettings() {
              let obj = channel(closure_2[17]);
              obj.hideActionSheet();
              let obj1 = channel(closure_2[24]);
              obj = { location_page: closure_14.page, location_section: closure_14.section };
              obj1.track(_undefined2.PREMIUM_PROMOTION_OPENED, obj);
              obj = { screen: ref.PREMIUM, params: obj1 };
              obj1 = { analyticsLocation: closure_14 };
              sticker(closure_2[39]).openUserSettings(obj);
            }
      };
      closure_15 = intl.format(tmp18(1212).t.hGWuxU, obj);
      str = "Custom Sticker Popout (Soft Upsell)";
      flag = false;
    }
    let tmp23 = !flag;
    if (!flag) {
      tmp23 = !tmp4;
    }
    if (tmp23) {
      tmp23 = tmp17;
    }
    c17 = tmp23;
    obj1 = { popoutAnalyticsConfig: stateFromStores.useRef(obj).current, popoutType: str };
    closure_19 = stateFromStores.useRef(obj1);
    const effect1 = stateFromStores.useEffect(() => {
      closure_19.current = obj1;
    });
    let items4 = [first1];
    const effect2 = stateFromStores.useEffect(() => {
      const popoutAnalyticsConfig = ref.current.popoutAnalyticsConfig;
      if (first1) {
        let obj = channel(closure_2[24]);
        obj = { type: tmp };
        const merged = Object.assign(popoutAnalyticsConfig);
        obj.track(_undefined2.OPEN_POPOUT, obj);
      }
    }, items4);
    let tmp29 = null;
    if (first1) {
      tmp29 = (function upsellContent() {
        let obj = {};
        obj = { style: closure_2.guildEmojiTopContainer };
        obj = { sticker, size: 48 };
        const items = [outer1_21(channel(closure_2[40]), obj), , ];
        const obj1 = { style: closure_2.guildEmojiDescription };
        const obj2 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
        const items1 = [outer1_21(sticker(closure_2[18]).Text, obj2), outer1_21(sticker(closure_2[18]).Text, { style: closure_2.description, variant: "text-sm/medium", children: closure_15 })];
        obj1.children = items1;
        items[1] = outer1_23(closure_6, obj1);
        let tmp4 = tidaWebformEnabled;
        if (tidaWebformEnabled) {
          tmp4 = null != stickerAssetUrl;
        }
        if (tmp4) {
          const obj4 = {};
          const intl = sticker(closure_2[19]).intl;
          obj4.accessibilityLabel = intl.string(sticker(closure_2[19]).t.PdRCRg);
          obj4.style = closure_2.moreMenuIcon;
          obj4.onPress = closure_13;
          const obj5 = { color: channel(closure_2[13]).colors.INTERACTIVE_TEXT_DEFAULT };
          obj4.children = outer1_21(sticker(closure_2[41]).MoreHorizontalIcon, obj5);
          tmp4 = outer1_21(closure_8, obj4);
        }
        items[2] = tmp4;
        obj.children = items;
        const items2 = [outer1_23(closure_6, obj), , , , ];
        let tmp15 = c16;
        if (c16) {
          const obj6 = { style: closure_2.buttonContainer };
          const obj7 = {};
          const intl2 = sticker(closure_2[19]).intl;
          obj7.text = intl2.string(sticker(closure_2[19]).t["gl/XHJ"]);
          obj7.onPress = function onPress() {
            return channel(table[43])(outer1_14);
          };
          const items3 = [outer1_21(channel(closure_2[42]), obj7), ];
          const obj8 = {};
          const obj9 = { height: channel(closure_2[13]).space.PX_16 };
          obj8.style = obj9;
          items3[1] = outer1_21(closure_6, obj8);
          obj6.children = items3;
          tmp15 = outer1_23(closure_6, obj6);
          const tmp22 = channel(closure_2[42]);
        }
        items2[1] = tmp15;
        let tmp26 = c17;
        if (c17) {
          const obj10 = { style: closure_2.buttonContainer };
          const obj11 = {};
          const intl3 = sticker(closure_2[19]).intl;
          obj11.text = intl3.string(sticker(closure_2[19]).t.riu2R5);
          obj11.onPress = function onPress() {
            if (null != outer1_3) {
              (function handleJoinServer(id) {
                let closure_0 = id;
                const obj = channel(table[37]);
                channel(table[37]).joinGuild(id).then(() => {
                  const result = channel(table[37]).transitionToGuildSync(closure_0);
                });
              })(outer1_3.id);
            }
          };
          const items4 = [outer1_21(sticker(closure_2[26]).Button, obj11), ];
          const obj12 = {};
          const obj13 = { height: channel(closure_2[13]).space.PX_16 };
          obj12.style = obj13;
          items4[1] = outer1_21(closure_6, obj12);
          obj10.children = items4;
          tmp26 = outer1_23(closure_6, obj10);
        }
        items2[2] = tmp26;
        let tmp36 = null != stateFromStores;
        if (!tmp36) {
          tmp36 = null != first;
        }
        if (!tmp36) {
          items2[3] = tmp36;
          let tmp55Result = tidaWebformEnabled;
          if (tidaWebformEnabled) {
            tmp55Result = closure_6;
          }
          if (tmp55Result) {
            const obj14 = {};
            const obj15 = { style: closure_2.divider };
            const items5 = [outer1_21(sticker(closure_2[44]).FormDivider, obj15), ];
            const obj16 = { style: closure_2.favoriteContainer };
            const obj17 = {};
            const intl5 = sticker(closure_2[19]).intl;
            const string2 = intl5.string;
            const t = sticker(closure_2[19]).t;
            if (c9) {
              let string2Result = string2(t.XhzKyF);
            } else {
              string2Result = string2(t.kWmiPW);
            }
            obj17.text = string2Result;
            let str = "primary";
            if (c9) {
              str = "tertiary";
            }
            obj17.variant = str;
            obj17.size = "md";
            obj17.onPress = c10;
            obj16.children = outer1_21(sticker(closure_2[26]).Button, obj17);
            items5[1] = outer1_21(closure_6, obj16);
            obj14.children = items5;
            tmp55Result = outer1_23(outer1_22, obj14);
            const tmp55 = outer1_23;
            const tmp56 = outer1_22;
            const tmp61 = outer1_21;
            const tmp62 = closure_6;
            const tmp63 = outer1_21;
          }
          items2[4] = tmp55Result;
          obj.children = items2;
          return tmp(outer1_22, obj);
        } else {
          const obj18 = {};
          const obj19 = { style: closure_2.divider };
          const items6 = [outer1_21(sticker(closure_2[44]).FormDivider, obj19), ];
          let obj20 = { guild: null != first ? first : stateFromStores, showingJoinGuildCta: c17, hasJoinedGuild: closure_6 };
          const intl4 = sticker(closure_2[19]).intl;
          const string = intl4.string;
          let kx6pEG = sticker(closure_2[19]).t;
          if (closure_6) {
            kx6pEG = kx6pEG.kx6pEG;
            let stringResult = string(kx6pEG);
          } else {
            stringResult = string(kx6pEG.pDE7Gb);
          }
          obj20.title = stringResult;
          obj20 = outer1_21(channel(closure_2[45]), obj20);
          items6[1] = obj20;
          obj18.children = items6;
          outer1_23(outer1_22, obj18);
          const tmp38 = outer1_23;
          const tmp39 = outer1_22;
          const tmp44 = outer1_21;
          const tmp46 = channel(closure_2[45]);
        }
      })();
    }
    return tmp29;
  }
}
let obj5 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let result = set.fileFinishedImporting("modules/stickers/native/StickerDetailActionSheet.tsx");

export default importAllResult.memo(function StickerDetailActionSheet(chatInputRef) {
  let channel;
  let renderableSticker;
  ({ renderableSticker, channel } = chatInputRef);
  let obj = require(9636) /* _createForOfIteratorHelperLoose */;
  const tmp2 = callback(obj.useStickerForRenderableSticker(renderableSticker, true), 2);
  const first = tmp2[0];
  let tmp4 = callback2(closure_7, { size: "large" });
  if (null == first) {
    if (tmp2[1]) {
      obj = { renderableSticker, channel };
      let tmp5 = callback2(UnavailableStickerDetail, obj);
    }
    obj = { startExpanded: true };
    let obj1 = { style: tmp.content, children: tmp5 };
    obj.children = callback2(closure_6, obj1);
    return callback2(require(5187) /* Background */.BottomSheet, obj);
  }
  tmp5 = tmp4;
  if (null != first) {
    if (obj8.isStandardSticker(first)) {
      const obj2 = { sticker: first, channel, chatInputRef: chatInputRef.chatInputRef };
      tmp4 = callback2(StandardStickerDetail, obj2);
    } else {
      obj1 = require(4466) /* getStickerPackPreviewSticker */;
      if (obj1.isGuildSticker(first)) {
        const obj3 = { sticker: first, channel };
        tmp4 = callback2(GuildStickerDetail, obj3);
      }
    }
    tmp5 = tmp4;
    obj8 = require(4466) /* getStickerPackPreviewSticker */;
  }
});
