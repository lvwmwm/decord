// Module ID: 10416
// Function ID: 10417
// Name: StickerPicker
// Dependencies: [32, 19, 17, 1385, 6925, 4998, 1072, 21, 5170, 575, 1252, 10417, 10419, 504, 7420, 7445, 10391, 1259, 10424, 7621, 6647, 10425, 9908, 5869, 1113, 5849, 10437, 7315, 10448, 10449, 10455, 2]

// Module 10416 (StickerPicker)
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react_native from "react-native" /* 1259 */;
import StickersConstants from "StickersConstants" /* 4998 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5869 */;
import StickersUtils from "StickersUtils" /* 6647 */;
import StickerSendability from "StickerSendability" /* 7621 */;
import StickersSearchUtils from "StickersSearchUtils" /* 10424 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 10425 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10437 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import StickersStore from "StickersStore" /* 6925 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;
let dependencyMap;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let unpackModuleId;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native2);
const STICKER_SEARCH_HEADER_HEIGHT = StickersConstants.STICKER_SEARCH_HEADER_HEIGHT;
({ AnalyticEvents: c9, AnalyticsObjects: c10, AnalyticsPages: unpackModuleId, AnalyticsSections: closure_12, UpsellTypes: map1, ChatInputComponentViewedTypes: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = { container: { flex: 1 }, header: obj2, loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 }, emptyState: { marginTop: STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 } };
obj2 = { paddingVertical: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj);
const memoResult = react.memo(function StickerPicker(channel) {
  let SearchBar;
  let _undefined;
  let bottomSheetIndex;
  let bottomSheetRef;
  let c4;
  let closure_2;
  let inPortalKeyboard;
  let intl;
  let items6;
  let obj6;
  let obj8;
  let paddingTop;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  let stickerFormats;
  let tmp12;
  let tmp20Result4;
  let tmp21;
  let tmp27;
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  let analyticsLocations;
  react = undefined;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  const tmp = closure_17();
  const tmp2 = channel;
  let obj = channel(10417);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  let obj2 = channel(10419);
  const stickerCategories = obj2.useStickerCategories(channel);
  let obj3 = channel(504);
  let items = [StickersStore];
  const stateFromStores = obj3.useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(react.useState(0), 2);
  const tmp8 = tmp6[1];
  dependencyMap = tmp8;
  let tmp9 = onPressSticker;
  const first = tmp6[0];
  const tmp10 = onPressSticker(7420);
  analyticsLocations = tmp10(onPressSticker(7445).STICKER_PICKER).analyticsLocations;
  let tmp11 = analyticsLocations(react.useState(null), 2);
  [tmp12, c4] = tmp11;
  let tmp13 = onPressSticker(10391)({ hasCategories: true });
  let items1 = [channel];
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = tmp13);
  const items2 = [, ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  const callback = react.useCallback((arg0) => {
    if ("" !== arg0) {
      const obj2 = StickersSearchUtils;
      const items = [];
      const items1 = [];
      const searchAllStickersResult = obj2.searchAllStickers(arg0);
      for (const item10025 of searchAllStickersResult) {
        let tmp11 = item10025;
        let obj3 = StickerSendability;
        let stickerSendability = obj3.getStickerSendability(item10025, tmp8, channel);
        if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
          let obj4 = StickersUtils;
          if (obj4.isGuildSticker(tmp11)) {
            let arr = items.push(tmp11);
            continue;
          }
        }
        let arr2 = items1.push(tmp11);
      }
      const obj5 = { nitroLocked: items, rest: items1 };
      _undefined(obj5);
    } else {
      const obj = react_native;
      obj.batchUpdates(() => {
        closure_1_2(0);
        _undefined(null);
      });
    }
  }, items1);
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants4.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  }, items2);
  const items3 = [channel, onPressSticker, analyticsLocations];
  const items4 = [channel];
  const callback1 = react.useCallback((pack_id) => {
    let intl;
    let obj3;
    let obj5;
    let obj7;
    const obj = StickerSendability;
    const stickerSendability = obj.getStickerSendability(pack_id, UserStore.getCurrentUser(), channel);
    if (stickerSendability === StickerSendability.StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
      const tmpResult = StickersUtils;
      if (tmpResult.isStandardSticker(pack_id)) {
        const stickerPack = StickersStore.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          let DM_CHANNEL2;
          const tmp21 = openStickerPackDetailActionSheetDefault;
          if (null != channel.guild_id) {
            DM_CHANNEL2 = unpackModuleId.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = unpackModuleId.DM_CHANNEL;
          }
          const obj2 = { analyticsLocation: obj3, analyticsPopoutType: openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_DETAIL, stickerPack };
          obj3 = { page: DM_CHANNEL2 };
          tmp21(obj2);
        }
      } else {
        const tmpResult2 = StickersUtils;
        if (tmpResult2.isGuildSticker(pack_id)) {
          let DM_CHANNEL;
          let tmp9;
          const track = AnalyticsUtilsDefault.track;
          const PREMIUM_PROMOTION_OPENED = constants.PREMIUM_PROMOTION_OPENED;
          AnalyticsUtilsDefault;
          const tmp5 = importDefault;
          if (null != channel.guild_id) {
            DM_CHANNEL = unpackModuleId.GUILD_CHANNEL;
            tmp9 = unpackModuleId;
          } else {
            tmp9 = unpackModuleId;
            DM_CHANNEL = unpackModuleId.DM_CHANNEL;
          }
          const obj4 = { location: obj5 };
          obj5 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL, object: constants2.STICKER };
          track(PREMIUM_PROMOTION_OPENED, obj4);
          const obj6 = { initialUpsellKey: map1.GLOBAL_STICKER, analyticsLocation: obj7, analyticsLocations };
          obj7 = { page: null != channel.guild_id ? tmp9.GUILD_CHANNEL : tmp9.DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL };
          const tmp5Result = tmp5(9908);
          const result = tmp5Result.handleShowUpsellAlert(obj6);
        }
      }
    } else if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD) {
      const obj8 = { text: intl.string(intl2.t.UTExh3) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = tmp(1113).intl;
      open("STICKER_PICKER_LIST_PRESS_DISABLED", obj8);
    }
  }, items3);
  const callback2 = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants4.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  }, items4);
  let obj4 = channel(5849);
  const items5 = [channel];
  const isTidaMediaTakedownRegion = obj4.useIsTidaMediaTakedownRegion();
  let tmp20 = closure_15;
  const callback3 = react.useCallback((renderableSticker) => {
    const obj = showStickerDetailActionSheet;
    const obj2 = { renderableSticker, channel };
    const result = obj.showStickerDetailActionSheet(obj2);
  }, items5);
  let obj5 = { value: analyticsLocations, children: tmp21(tmp22, obj6) };
  obj6 = { style: tmp.container, children: items6 };
  let tmp20Result = null;
  const AnalyticsLocationProvider = channel(7420).AnalyticsLocationProvider;
  tmp21 = closure_16;
  if (0 !== stickerCategories.length) {
    let obj7 = { style: tmp.header, children: tmp20(SearchBar, obj8) };
    obj8 = { size: "md", placeholder: intl.string(tmp2(1113).t.dt5h1C), onChange: callback, onFocus: callback2, round: true };
    SearchBar = tmp2(7315).SearchBar;
    intl = tmp2(1113).intl;
    tmp20Result = tmp20(tmp22, obj7);
  }
  items6 = [tmp20Result, , ];
  if (stateFromStores) {
    let tmp20Result3;
    if (0 === stickerCategories.length) {
      const obj9 = { style: tmp.emptyState, children: tmp20(tmp9(10448), {}) };
      tmp20Result3 = tmp20(tmp22, obj9);
    } else {
      const obj10 = { bottomSheetRef, bottomSheetIndex, setCategoryIndex: tmp8, onPressSticker: callback1, onLongPressStickerDetail: tmp27, insetBottom: safeAreaBottomKeyboardAware, insetTop: paddingTop, channel, stickerFormats, searchResults: tmp12, inPortalKeyboard };
      tmp27 = undefined;
      const tmp9Result = tmp9(10449);
      if (isTidaMediaTakedownRegion) {
        tmp27 = callback3;
      }
      tmp20Result3 = tmp20(tmp9Result, obj10);
    }
    tmp20Result4 = tmp20Result3;
  } else {
    const obj11 = { animating: true, size: "large", style: tmp.loadingIndicator };
    tmp20Result4 = tmp20(closure_6, obj11);
  }
  items6[1] = tmp20Result4;
  items6[2] = tmp20(tmp9(10455), { categories: stickerCategories, categoryIndex: first, style: safeAreaStyle });
  return tmp20(AnalyticsLocationProvider, obj5);
});
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default memoResult;
