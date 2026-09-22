// Module ID: 10515
// Function ID: 10516
// Name: StickerPicker
// Dependencies: [32, 19, 17, 1371, 5583, 1938, 1074, 21, 4636, 576, 1240, 10516, 10518, 504, 7265, 7285, 10412, 1247, 10522, 7440, 4975, 10523, 9443, 9451, 4335, 1114, 7291, 10532, 7153, 10542, 10543, 10548, 2]

// Module 10515 (StickerPicker)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1247 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import StickerSendability from "StickerSendability" /* 7440 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9443 */;
import StickersSearchUtils from "StickersSearchUtils" /* 10522 */;
import openStickerPackDetailActionSheetDefault from "openStickerPackDetailActionSheet" /* 10523 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10532 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import StickersStore from "StickersStore" /* 5583 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsPages: c10, AnalyticsSections: closure_11, UpsellTypes: closure_12, ChatInputComponentViewedTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4636);
let obj = { container: { flex: 1 }, header: { paddingVertical: nativeDefault.space.PX_8 }, loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 }, emptyState: { marginTop: fn(1938).STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 } };
let closure_16 = createStyles.createStyles(obj);
let obj3 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default noop.memo(function StickerPicker(channel) {
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  let analyticsLocations;
  noop = undefined;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = closure_16();
  const fetchStickerPacks = channel(10516).useFetchStickerPacks();
  let obj = channel(10516);
  const stickerCategories = channel(10518).useStickerCategories(channel);
  let obj2 = channel(10518);
  const items = [StickersStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  let obj3 = channel(504);
  analyticsLocations = onPressSticker(7265)(onPressSticker(7285).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7265);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10412)({ hasCategories: true }));
  const items1 = [, ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  const callback = noop.useCallback((arg0) => {
    if ("" === arg0) {
      ReactBatchUpdates.batchUpdates(() => {
        closure_1_2(0);
        _undefined(null);
      });
    } else {
      _undefined(StickersSearchUtils.searchAllStickers(arg0));
    }
  }, []);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants5.STICKER, channel_id: channel.id, guild_id: channel.guild_id });
  }, items1);
  const items2 = [channel, onPressSticker, analyticsLocations];
  const items3 = [channel];
  const callback1 = noop.useCallback((pack_id) => {
    const stickerSendability = StickerSendability.getStickerSendability(pack_id, UserStore.getCurrentUser(), channel);
    if (stickerSendability === StickerSendability.StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === tmp(7440).StickerSendability.SENDABLE_WITH_PREMIUM) {
      if (tmpResult.isStandardSticker(pack_id)) {
        const stickerPack = StickersStore.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          if (null != tmp3.guild_id) {
            let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = constants2.DM_CHANNEL;
          }
          const obj2 = { analyticsLocation: null, analyticsPopoutType: null, stickerPack: null };
          const obj4 = { page: DM_CHANNEL2 };
          obj2.analyticsLocation = obj4;
          obj2.analyticsPopoutType = tmp(10523).AnalyticsPopoutType.STICKER_PACK_DETAIL;
          obj2.stickerPack = stickerPack;
          openStickerPackDetailActionSheetDefault(obj2);
        }
      } else {
        if (tmpResult3.isGuildSticker(pack_id)) {
          const obj5 = { initialUpsellKey: constants4.GLOBAL_STICKER, analyticsLocation: null, analyticsLocations: null, isDismissable: true };
          if (null != tmp3.guild_id) {
            let DM_CHANNEL = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = constants2.DM_CHANNEL;
          }
          const obj6 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL };
          obj5.analyticsLocation = obj6;
          obj5.analyticsLocations = analyticsLocations;
          const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj5);
        }
        tmpResult3 = tmp(4975);
      }
      tmpResult = tmp(4975);
    } else {
      let mobileStickerPickerUpsellRestyleEnabled = stickerSendability === tmp(7440).StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        mobileStickerPickerUpsellRestyleEnabled = tmp(9451).getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
        const tmpResult4 = tmp(9451);
      }
      if (mobileStickerPickerUpsellRestyleEnabled) {
        const obj8 = { key: "STICKER_PICKER_LIST_PRESS_DISABLED", content: null };
        const intl = tmp(1114).intl;
        obj8.content = intl.string(tmp(1114).t.UTExh3);
        ToastActionCreatorsDefault.open(obj8);
      }
    }
  }, items2);
  const callback2 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants5.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id });
  }, items3);
  const tmp12 = onPressSticker(10412)({ hasCategories: true });
  const items4 = [channel];
  const callback3 = noop.useCallback((renderableSticker) => {
    const result = showStickerDetailActionSheet.showStickerDetailActionSheet({ renderableSticker, channel });
  }, items4);
  let obj5 = { value: analyticsLocations, children: null };
  let obj6 = { style: tmp.container, children: null };
  let tmp18Result = null;
  if (0 !== stickerCategories.length) {
    let obj7 = { style: tmp.header, children: null };
    let obj8 = { size: "md", placeholder: null, onChange: null, onFocus: null, isRound: true };
    let intl = tmp2(1114).intl;
    obj8.placeholder = intl.string(tmp2(1114).t.dt5h1C);
    obj8.onChange = callback;
    obj8.onFocus = callback2;
    obj7.children = tmp18(tmp2(7153).SearchField, obj8);
    tmp18Result = tmp18(tmp20, obj7);
  }
  const items5 = [tmp18Result, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      const obj9 = { style: tmp.emptyState, children: null };
      tmp = tmp18(tmp8(10542), {});
      obj9.children = tmp;
      let tmp18Result2 = tmp18(tmp20, obj9);
    } else {
      const obj10 = { bottomSheetRef, bottomSheetIndex, setCategoryIndex: tmp7, onPressSticker: callback1, onLongPressStickerDetail: null, insetBottom: null, insetTop: null, channel: null, stickerFormats: null, searchResults: null, inPortalKeyboard: null };
      let tmp24;
      if (obj4.useExperiment({ location: "StickerPicker" }, { autoTrackExposure: false }).tidaWebformEnabled) {
        tmp24 = callback3;
      }
      obj10.onLongPressStickerDetail = tmp24;
      obj10.insetBottom = safeAreaBottomKeyboardAware;
      obj10.insetTop = paddingTop;
      obj10.channel = channel;
      obj10.stickerFormats = stickerFormats;
      obj10.searchResults = tmp11;
      obj10.inPortalKeyboard = inPortalKeyboard;
      tmp18Result2 = tmp18(tmp8(10543), obj10);
      const tmp8Result = tmp8(10543);
    }
  } else {
    const obj11 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items5[1] = tmp18(closure_6, obj11);
    const obj12 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items5[2] = tmp18(tmp8(10548), obj12);
    obj6.children = items5;
    obj5.children = closure_15(tmp20, obj6);
    return tmp18(channel(7265).AnalyticsLocationProvider, obj5);
  }
});
