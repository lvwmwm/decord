// Module ID: 10678
// Function ID: 10679
// Name: StickerPicker
// Dependencies: [32, 19, 17, 1376, 5721, 2026, 1078, 21, 4758, 580, 1245, 558, 568, 10679, 10681, 504, 7409, 7429, 9433, 10654, 1252, 10685, 7581, 5105, 10686, 9425, 4458, 1119, 7435, 10698, 7297, 10708, 10709, 10715, 2]

// Module 10678 (StickerPicker)
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1252 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import StickersUtils from "StickersUtils" /* 5105 */;
import StickerSendability from "StickerSendability" /* 7581 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9425 */;
import StickersSearchUtils from "StickersSearchUtils" /* 10685 */;
import openStickerPackDetailActionSheetDefault from "openStickerPackDetailActionSheet" /* 10686 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10698 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;
import StickersStore from "StickersStore" /* 5721 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const Constants = fn(1078);
({ AnalyticEvents: closure_9, AnalyticsPages: c10, AnalyticsSections: closure_11, UpsellTypes: closure_12, ChatInputComponentViewedTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4758);
let obj = { container: { flex: 1 }, header: { paddingVertical: nativeDefault.space.PX_8 }, loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 }, emptyState: { marginTop: fn(2026).STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 } };
let closure_16 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = channel(568).c(53);
  ({ bottomSheetRef, bottomSheetIndex, channel } = arg0);
  ({ paddingTop, onPressSticker } = arg0);
  ({ stickerFormats, inPortalKeyboard } = arg0);
  closure_16();
  let obj = channel(568);
  const fetchStickerPacks = channel(10679).useFetchStickerPacks();
  let obj2 = channel(10679);
  const stickerCategories = channel(10681).useStickerCategories(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [StickersStore];
    class N {
      constructor() {
        return closure_1_8.hasLoadedStickerPacks;
      }
    }
    cResult[0] = items;
    cResult[1] = N;
    tmp7 = items;
    tmp8 = N;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj3 = channel(10681);
  const stateFromStores = channel(504).useStateFromStores(tmp7, tmp8);
  let obj5 = noop;
  let tmpResult = channel(504);
  [r10050, tmp12] = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp12;
  const tmp11 = analyticsLocations(noop.useState(0), 2);
  const tmp13 = onPressSticker;
  analyticsLocations = onPressSticker(7409)(onPressSticker(7429).STICKER_PICKER).analyticsLocations;
  let tmp14 = onPressSticker(7409);
  [r10064, noop] = analyticsLocations(noop.useState(null), 2);
  let tmp15 = analyticsLocations(noop.useState(null), 2);
  let mobileStickerPickerUpsellRestyleEnabled = channel(9433).useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { hasCategories: true };
    cResult[2] = obj4;
    let tmp17 = obj4;
  } else {
    tmp17 = cResult[2];
  }
  const tmpResult2 = channel(9433);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = tmp13(10654)(tmp17));
  if (cResult[3] === channel) {
    if (cResult[6] === channel.guild_id) {
      if (cResult[7] === channel.id) {
        let tmp20 = cResult[8];
        let tmp21 = cResult[9];
      }
      const effect = obj5.useEffect(tmp20, tmp21);
      class Q {
        constructor() {
          obj = closure_1(closure_2[10]);
          obj1 = { type: closure_13.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
          trackResult = obj.track(AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED, obj1);
          return;
        }
      }
      class Z {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[22]);
          tmp3 = channel;
          stickerSendability = obj.getStickerSendability(arg0, closure_7.getCurrentUser(), channel);
          if (stickerSendability === closure_0(closure_2[22]).StickerSendability.SENDABLE) {
            tmp24 = onPressSticker;
            tmp25 = onPressSticker(arg0);
          } else if (stickerSendability === tmp(tmp2[22]).StickerSendability.SENDABLE_WITH_PREMIUM) {
            tmpResult = tmp(tmp2[23]);
            if (tmpResult.isStandardSticker(arg0)) {
              tmp16 = closure_8;
              stickerPack = closure_8.getStickerPack(arg0.pack_id);
              tmp18 = null;
              if (null == stickerPack) {
                return;
              } else {
                tmp19 = closure_1;
                tmp20 = closure_1(tmp2[24]);
                if (null != tmp3.guild_id) {
                  tmp22 = AnalyticsPages;
                  DM_CHANNEL2 = AnalyticsPages.GUILD_CHANNEL;
                } else {
                  tmp21 = AnalyticsPages;
                  DM_CHANNEL2 = AnalyticsPages.DM_CHANNEL;
                }
                obj1 = { analyticsLocation: null, analyticsPopoutType: null, stickerPack: null };
                obj12 = { page: null };
                obj12.page = DM_CHANNEL2;
                obj1.analyticsLocation = obj12;
                obj1.analyticsPopoutType = tmp(tmp2[24]).AnalyticsPopoutType.STICKER_PACK_DETAIL;
                obj1.stickerPack = stickerPack;
                tmp20Result = tmp20(obj1);
              }
            } else {
              tmpResult1 = tmp(tmp2[23]);
              if (tmpResult1.isGuildSticker(arg0)) {
                tmp8 = closure_1;
                obj7 = closure_1(tmp2[25]);
                obj13 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, isDismissable: true };
                tmp9 = UpsellTypes;
                obj13.initialUpsellKey = UpsellTypes.GLOBAL_STICKER;
                tmp10 = null;
                if (null != tmp3.guild_id) {
                  tmp12 = AnalyticsPages;
                  DM_CHANNEL = AnalyticsPages.GUILD_CHANNEL;
                } else {
                  tmp11 = AnalyticsPages;
                  DM_CHANNEL = AnalyticsPages.DM_CHANNEL;
                }
                obj14 = { page: null, section: null };
                obj14.page = DM_CHANNEL;
                tmp13 = AnalyticsSections;
                obj14.section = AnalyticsSections.STICKER_PICKER_UPSELL;
                obj13.analyticsLocation = obj14;
                tmp14 = analyticsLocations;
                obj13.analyticsLocations = analyticsLocations;
                result = obj7.handleShowUpsellAlert(obj13);
              }
            }
          } else {
            mobileStickerPickerUpsellRestyleEnabled = stickerSendability === tmp(tmp2[22]).StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
            if (mobileStickerPickerUpsellRestyleEnabled) {
              tmpResult2 = tmp(tmp2[18]);
              str = "native.StickerPicker";
              mobileStickerPickerUpsellRestyleEnabled = tmpResult2.getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
            }
            if (mobileStickerPickerUpsellRestyleEnabled) {
              tmp6 = closure_1;
              obj3 = closure_1(tmp2[26]);
              obj15 = { key: "STICKER_PICKER_LIST_PRESS_DISABLED", content: null };
              intl = tmp(tmp2[27]).intl;
              obj15.content = intl.string(tmp(tmp2[27]).t.UTExh3);
              openResult = obj3.open(obj15);
            }
          }
          return;
        }
      }
      cResult[10] = analyticsLocations;
      cResult[11] = channel;
      cResult[12] = onPressSticker;
      cResult[13] = Z;
    }
    class Q {
      constructor() {
        obj = closure_1(closure_2[10]);
        obj1 = { type: closure_13.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
        trackResult = obj.track(AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED, obj1);
        return;
      }
    }
    class N {
      constructor() {
        return closure_1_8.hasLoadedStickerPacks;
      }
    }
    ({ id: tmp22[0], guild_id: tmp22[1] } = channel);
    cResult[6] = channel.guild_id;
    cResult[7] = channel.id;
    cResult[8] = Q;
    cResult[9] = tmp22;
    tmp21 = tmp22;
    tmp20 = Q;
  }
  const fn = function z(arg0) {
    if ("" !== arg0) {
      const searchAllStickersResult = StickersSearchUtils.searchAllStickers(arg0);
      if (mobileStickerPickerUpsellRestyleEnabled) {
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
        noop(obj3);
      } else {
        const obj6 = { nitroLocked: [], rest: searchAllStickersResult };
        noop(obj6);
      }
    } else {
      ReactBatchUpdates.batchUpdates(() => {
        closure_1_2(0);
        closure_1_4(null);
      });
    }
  };
  cResult[3] = channel;
  cResult[4] = mobileStickerPickerUpsellRestyleEnabled;
  cResult[5] = fn;
}) : ((channel) => {
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  let analyticsLocations;
  noop = undefined;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = closure_16();
  const fetchStickerPacks = channel(10679).useFetchStickerPacks();
  let obj = channel(10679);
  const stickerCategories = channel(10681).useStickerCategories(channel);
  let obj2 = channel(10681);
  let items = [StickersStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  let obj3 = channel(504);
  analyticsLocations = onPressSticker(7409)(onPressSticker(7429).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7409);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  let mobileStickerPickerUpsellRestyleEnabled = channel(9433).useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  let obj4 = channel(9433);
  let items1 = [channel, mobileStickerPickerUpsellRestyleEnabled];
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10654)({ hasCategories: true }));
  const items2 = [, ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  const callback = noop.useCallback((arg0) => {
    if ("" !== arg0) {
      const searchAllStickersResult = StickersSearchUtils.searchAllStickers(arg0);
      if (mobileStickerPickerUpsellRestyleEnabled) {
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
      ReactBatchUpdates.batchUpdates(() => {
        closure_1_2(0);
        _undefined(null);
      });
    }
  }, items1);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants5.STICKER, channel_id: channel.id, guild_id: channel.guild_id });
  }, items2);
  const items3 = [channel, onPressSticker, analyticsLocations];
  const items4 = [channel];
  const callback1 = noop.useCallback((pack_id) => {
    const stickerSendability = StickerSendability.getStickerSendability(pack_id, UserStore.getCurrentUser(), channel);
    if (stickerSendability === StickerSendability.StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === tmp(7581).StickerSendability.SENDABLE_WITH_PREMIUM) {
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
          obj2.analyticsPopoutType = tmp(10686).AnalyticsPopoutType.STICKER_PACK_DETAIL;
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
        tmpResult3 = tmp(5105);
      }
      tmpResult = tmp(5105);
    } else {
      mobileStickerPickerUpsellRestyleEnabled = stickerSendability === tmp(7581).StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        mobileStickerPickerUpsellRestyleEnabled = tmp(9433).getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
        const tmpResult4 = tmp(9433);
      }
      if (mobileStickerPickerUpsellRestyleEnabled) {
        const obj8 = { key: "STICKER_PICKER_LIST_PRESS_DISABLED", content: null };
        const intl = tmp(1119).intl;
        obj8.content = intl.string(tmp(1119).t.UTExh3);
        ToastActionCreatorsDefault.open(obj8);
      }
    }
  }, items3);
  const callback2 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants5.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id });
  }, items4);
  const tmp13 = onPressSticker(10654)({ hasCategories: true });
  const items5 = [channel];
  const callback3 = noop.useCallback((renderableSticker) => {
    const result = showStickerDetailActionSheet.showStickerDetailActionSheet({ renderableSticker, channel });
  }, items5);
  let obj6 = { value: analyticsLocations, children: null };
  let obj7 = { style: tmp.container, children: null };
  let tmp19Result = null;
  if (0 !== stickerCategories.length) {
    let obj8 = { style: tmp.header, children: null };
    const obj9 = { size: "md", placeholder: null, onChange: null, onFocus: null, round: true };
    let intl = tmp2(1119).intl;
    obj9.placeholder = intl.string(tmp2(1119).t.dt5h1C);
    obj9.onChange = callback;
    obj9.onFocus = callback2;
    obj8.children = tmp19(tmp2(7297).SearchField, obj9);
    tmp19Result = tmp19(tmp21, obj8);
  }
  const items6 = [tmp19Result, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      const obj10 = { style: tmp.emptyState, children: null };
      tmp = tmp19(tmp8(10708), {});
      obj10.children = tmp;
      let tmp19Result2 = tmp19(tmp21, obj10);
    } else {
      const obj11 = { bottomSheetRef, bottomSheetIndex, setCategoryIndex: tmp7, onPressSticker: callback1, onLongPressStickerDetail: null, insetBottom: null, insetTop: null, channel: null, stickerFormats: null, searchResults: null, inPortalKeyboard: null };
      let tmp25;
      if (obj5.useExperiment({ location: "StickerPicker" }, { autoTrackExposure: false }).tidaWebformEnabled) {
        tmp25 = callback3;
      }
      obj11.onLongPressStickerDetail = tmp25;
      obj11.insetBottom = safeAreaBottomKeyboardAware;
      obj11.insetTop = paddingTop;
      obj11.channel = channel;
      obj11.stickerFormats = stickerFormats;
      obj11.searchResults = tmp11;
      obj11.inPortalKeyboard = inPortalKeyboard;
      tmp19Result2 = tmp19(tmp8(10709), obj11);
      const tmp8Result = tmp8(10709);
    }
  } else {
    const obj12 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items6[1] = tmp19(closure_6, obj12);
    const obj13 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items6[2] = tmp19(tmp8(10715), obj13);
    obj7.children = items6;
    obj6.children = closure_15(tmp21, obj7);
    return tmp19(channel(7409).AnalyticsLocationProvider, obj6);
  }
}));
