// Module ID: 9847
// Function ID: 9848
// Name: StickerPicker
// Dependencies: [32, 19, 17, 1372, 5814, 2024, 1074, 21, 4836, 576, 1241, 9848, 9850, 504, 6583, 6603, 8622, 9746, 1248, 9855, 6755, 5198, 9856, 8614, 4528, 1115, 6609, 9865, 6471, 9875, 9876, 9882, 2]

// Module 9847 (StickerPicker)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import react_native from "react-native" /* 1248 */;
import StickersConstants from "StickersConstants" /* 2024 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import StickersUtils from "StickersUtils" /* 5198 */;
import StickerSendability from "StickerSendability" /* 6755 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 8622 */;
import StickersSearchUtils from "StickersSearchUtils" /* 9855 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 9856 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 9865 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import StickersStore from "StickersStore" /* 5814 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
  let SearchField;
  let _undefined;
  let bottomSheetIndex;
  let bottomSheetRef;
  let c4;
  let closure_2;
  let inPortalKeyboard;
  let intl;
  let items6;
  let obj7;
  let obj9;
  let paddingTop;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  let stickerFormats;
  let tmp12;
  let tmp20Result4;
  let tmp21;
  let tmp22;
  let tmp27;
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  let analyticsLocations;
  react = undefined;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  const tmp = closure_17();
  const tmp2 = channel;
  let obj = channel(9848);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  let obj2 = channel(9850);
  const stickerCategories = obj2.useStickerCategories(channel);
  let obj3 = channel(504);
  let items = [StickersStore];
  const stateFromStores = obj3.useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(react.useState(0), 2);
  dependencyMap = tmp8;
  let tmp9 = onPressSticker;
  const first = tmp6[0];
  const tmp10 = onPressSticker(6583);
  analyticsLocations = tmp10(onPressSticker(6603).STICKER_PICKER).analyticsLocations;
  const tmp11 = analyticsLocations(react.useState(null), 2);
  [tmp12, c4] = tmp11;
  let obj4 = channel(8622);
  let mobileStickerPickerUpsellRestyleEnabled = obj4.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  let tmp14 = onPressSticker(9746)({ hasCategories: true });
  let items1 = [channel, mobileStickerPickerUpsellRestyleEnabled];
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = tmp14);
  const items2 = [, ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  const callback = react.useCallback((arg0) => {
    if ("" !== arg0) {
      const obj2 = StickersSearchUtils;
      const searchAllStickersResult = obj2.searchAllStickers(arg0);
      const tmp7 = mobileStickerPickerUpsellRestyleEnabled;
      if (tmp7) {
        const items = [];
        const items1 = [];
        for (const item10030 of searchAllStickersResult) {
          let tmp14 = item10030;
          let obj4 = StickerSendability;
          let stickerSendability = obj4.getStickerSendability(item10030, tmp11, channel);
          if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
            let obj5 = StickersUtils;
            if (obj5.isGuildSticker(tmp14)) {
              let arr = items.push(tmp14);
              continue;
            }
          }
          let arr2 = items1.push(tmp14);
        }
        const obj3 = { nitroLocked: items, rest: items1 };
        _undefined(obj3);
      } else {
        const obj6 = { nitroLocked: [], rest: searchAllStickersResult };
        _undefined(obj6);
      }
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
          const tmp25 = openStickerPackDetailActionSheetDefault;
          if (null != channel.guild_id) {
            DM_CHANNEL2 = unpackModuleId.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = unpackModuleId.DM_CHANNEL;
          }
          const obj2 = { analyticsLocation: obj3, analyticsPopoutType: openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_DETAIL, stickerPack };
          obj3 = { page: DM_CHANNEL2 };
          tmp25(obj2);
        }
      } else {
        const tmpResult3 = StickersUtils;
        if (tmpResult3.isGuildSticker(pack_id)) {
          let DM_CHANNEL;
          let tmp13;
          const track = AnalyticsUtilsDefault.track;
          const PREMIUM_PROMOTION_OPENED = constants.PREMIUM_PROMOTION_OPENED;
          AnalyticsUtilsDefault;
          const tmp9 = importDefault;
          if (null != channel.guild_id) {
            DM_CHANNEL = unpackModuleId.GUILD_CHANNEL;
            tmp13 = unpackModuleId;
          } else {
            tmp13 = unpackModuleId;
            DM_CHANNEL = unpackModuleId.DM_CHANNEL;
          }
          const obj4 = { location: obj5 };
          obj5 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL, object: constants2.STICKER };
          track(PREMIUM_PROMOTION_OPENED, obj4);
          const obj6 = { initialUpsellKey: map1.GLOBAL_STICKER, analyticsLocation: obj7, analyticsLocations, isDismissable: true };
          obj7 = { page: null != channel.guild_id ? tmp13.GUILD_CHANNEL : tmp13.DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL };
          const tmp9Result = tmp9(8614);
          const result = tmp9Result.handleShowUpsellAlert(obj6);
        }
      }
    } else {
      mobileStickerPickerUpsellRestyleEnabled = stickerSendability === tmp(6755).StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        const tmpResult4 = MobileStickerPickerUpsellRestyleExperiment;
        mobileStickerPickerUpsellRestyleEnabled = tmpResult4.getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
      }
      if (mobileStickerPickerUpsellRestyleEnabled) {
        const obj8 = { key: "STICKER_PICKER_LIST_PRESS_DISABLED", content: intl.string(intl2.t.UTExh3) };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = tmp(1115).intl;
        open(obj8);
      }
    }
  }, items3);
  const callback2 = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: constants4.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  }, items4);
  let obj5 = onPressSticker(6609);
  const items5 = [channel];
  const tidaWebformEnabled = obj5.useExperiment({ location: "StickerPicker" }, { autoTrackExposure: false }).tidaWebformEnabled;
  let tmp20 = closure_15;
  const callback3 = react.useCallback((renderableSticker) => {
    const obj = showStickerDetailActionSheet;
    const obj2 = { renderableSticker, channel };
    const result = obj.showStickerDetailActionSheet(obj2);
  }, items5);
  let obj6 = { value: analyticsLocations, children: tmp21(tmp22, obj7) };
  tmp22 = mobileStickerPickerUpsellRestyleEnabled;
  obj7 = { style: tmp.container, children: items6 };
  let tmp20Result = null;
  const AnalyticsLocationProvider = channel(6583).AnalyticsLocationProvider;
  tmp21 = closure_16;
  if (0 !== stickerCategories.length) {
    let obj8 = { style: tmp.header, children: tmp20(SearchField, obj9) };
    obj9 = { size: "md", placeholder: intl.string(tmp2(1115).t.dt5h1C), onChange: callback, onFocus: callback2, round: true };
    SearchField = tmp2(6471).SearchField;
    intl = tmp2(1115).intl;
    tmp20Result = tmp20(tmp22, obj8);
  }
  items6 = [tmp20Result, , ];
  if (stateFromStores) {
    let tmp20Result3;
    if (0 === stickerCategories.length) {
      const obj10 = { style: tmp.emptyState, children: tmp20(tmp9(9875), {}) };
      tmp20Result3 = tmp20(tmp22, obj10);
    } else {
      const obj11 = { bottomSheetRef, bottomSheetIndex, setCategoryIndex: tmp6[1], onPressSticker: callback1, onLongPressStickerDetail: tmp27, insetBottom: safeAreaBottomKeyboardAware, insetTop: paddingTop, channel, stickerFormats, searchResults: tmp12, inPortalKeyboard };
      tmp27 = undefined;
      let tmp9Result = tmp9(9876);
      if (tidaWebformEnabled) {
        tmp27 = callback3;
      }
      tmp20Result3 = tmp20(tmp9Result, obj11);
    }
    tmp20Result4 = tmp20Result3;
  } else {
    let tmp24 = closure_6;
    const obj12 = { animating: true, size: "large", style: tmp.loadingIndicator };
    tmp20Result4 = tmp20(closure_6, obj12);
  }
  items6[1] = tmp20Result4;
  items6[2] = tmp20(tmp9(9882), { categories: stickerCategories, categoryIndex: first, style: safeAreaStyle });
  return tmp20(AnalyticsLocationProvider, obj6);
});
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default memoResult;
