// Module ID: 9599
// Function ID: 74738
// Dependencies: [57, 31, 27, 1849, 5035, 3806, 653, 33, 4130, 689, 675, 9600, 9602, 566, 5464, 5484, 9572, 682, 9606, 5732, 4466, 9607, 7941, 5491, 9619, 5772, 1212, 9629, 9630, 9635, 2]

// Module 9599
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "EmptyStateSticker";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ View: closure_5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_9, AnalyticsPages: closure_10, AnalyticsSections: closure_11, UpsellTypes: closure_12, ChatInputComponentViewedTypes: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { container: { flex: 1 } };
obj = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.header = obj;
obj.loadingIndicator = { alignItems: "center", justifyContent: "center", flex: 1 };
_createForOfIteratorHelperLoose = { marginTop: require("STICKER_PICKER_TAB_PANEL_ID").STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 };
obj.emptyState = _createForOfIteratorHelperLoose;
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function StickerPicker(channel) {
  let bottomSheetIndex;
  let bottomSheetRef;
  let inPortalKeyboard;
  let paddingTop;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  let stickerFormats;
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = callback2();
  let obj = channel(9600);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  let obj1 = channel(9602);
  const stickerCategories = obj1.useStickerCategories(channel);
  let obj2 = channel(566);
  const items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_8.hasLoadedStickerPacks);
  const tmp4 = analyticsLocations(importAllResult.useState(0), 2);
  const dependencyMap = tmp5;
  analyticsLocations = onPressSticker(5464)(onPressSticker(5484).STICKER_PICKER).analyticsLocations;
  let tmp7 = null;
  const tmp8 = analyticsLocations(importAllResult.useState(null), 2);
  const tmp6 = onPressSticker(5464);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(9572)({ hasCategories: true }));
  const items1 = [, ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  const callback = importAllResult.useCallback((arg0) => {
    if ("" === arg0) {
      channel(channel[17]).batchUpdates(() => {
        outer1_2(0);
        outer1_4(null);
      });
      const obj2 = channel(channel[17]);
    } else {
      callback(channel(tmp5[18]).searchAllStickers(arg0));
      const obj = channel(tmp5[18]);
    }
  }, []);
  const effect = importAllResult.useEffect(() => {
    let obj = onPressSticker(tmp5[10]);
    obj = { type: outer1_13.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(outer1_9.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items1);
  const items2 = [channel, onPressSticker, analyticsLocations];
  const items3 = [channel];
  const callback1 = importAllResult.useCallback((pack_id) => {
    let obj = channel(tmp5[19]);
    const stickerSendability = obj.getStickerSendability(pack_id, outer1_7.getCurrentUser(), channel);
    if (stickerSendability === channel(tmp5[19]).StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === channel(tmp5[19]).StickerSendability.SENDABLE_WITH_PREMIUM) {
      if (obj8.isStandardSticker(pack_id)) {
        const stickerPack = outer1_8.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          obj = {};
          obj = {};
          if (null != channel.guild_id) {
            let DM_CHANNEL2 = outer1_10.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = outer1_10.DM_CHANNEL;
          }
          obj.page = DM_CHANNEL2;
          obj.analyticsLocation = obj;
          obj.analyticsPopoutType = channel(tmp5[21]).AnalyticsPopoutType.STICKER_PACK_DETAIL;
          obj.stickerPack = stickerPack;
          onPressSticker(tmp5[21])(obj);
          const tmp19 = onPressSticker(tmp5[21]);
        }
      } else {
        let obj1 = channel(tmp5[20]);
        if (obj1.isGuildSticker(pack_id)) {
          let obj2 = onPressSticker(tmp5[22]);
          obj1 = { initialUpsellKey: outer1_12.GLOBAL_STICKER };
          obj2 = {};
          if (null != channel.guild_id) {
            let DM_CHANNEL = outer1_10.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = outer1_10.DM_CHANNEL;
          }
          obj2.page = DM_CHANNEL;
          obj2.section = outer1_11.STICKER_PICKER_UPSELL;
          obj1.analyticsLocation = obj2;
          obj1.analyticsLocations = analyticsLocations;
          const result = obj2.handleShowUpsellAlert(obj1);
        }
      }
      obj8 = channel(tmp5[20]);
    }
  }, items2);
  callback2 = importAllResult.useCallback(() => {
    let obj = onPressSticker(tmp5[10]);
    obj = { type: outer1_13.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(outer1_9.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items3);
  let obj3 = onPressSticker(5491);
  const items4 = [channel];
  const callback3 = importAllResult.useCallback((renderableSticker) => {
    let obj = channel(tmp5[24]);
    obj = { renderableSticker, channel };
    const result = obj.showStickerDetailActionSheet(obj);
  }, items4);
  obj = { value: analyticsLocations };
  obj = { style: tmp.container };
  if (0 !== stickerCategories.length) {
    obj1 = { style: tmp.header };
    obj2 = { size: "md" };
    const intl = channel(1212).intl;
    obj2.placeholder = intl.string(channel(1212).t.dt5h1C);
    obj2.onChange = callback;
    obj2.onFocus = callback2;
    obj2.isRound = true;
    obj1.children = callback(channel(5772).SearchField, obj2);
    tmp7 = callback(closure_5, obj1);
  }
  const items5 = [tmp7, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      obj3 = { style: tmp.emptyState };
      tmp = callback(onPressSticker(9629), {});
      obj3.children = tmp;
      let tmp20Result = callback(closure_5, obj3);
    } else {
      const obj4 = { bottomSheetRef, bottomSheetIndex, setCategoryIndex: tmp5, onPressSticker: callback1 };
      let tmp24;
      if (obj3.useExperiment({ location: "StickerPicker" }, { autoTrackExposure: false }).tidaWebformEnabled) {
        tmp24 = callback3;
      }
      obj4.onLongPressStickerDetail = tmp24;
      obj4.insetBottom = safeAreaBottomKeyboardAware;
      obj4.insetTop = paddingTop;
      obj4.channel = channel;
      obj4.stickerFormats = stickerFormats;
      obj4.searchResults = tmp8[0];
      obj4.inPortalKeyboard = inPortalKeyboard;
      tmp20Result = callback(onPressSticker(9630), obj4);
      const tmp20 = callback;
      const tmp23 = onPressSticker(9630);
    }
  } else {
    const obj5 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items5[1] = callback(closure_6, obj5);
    const obj6 = { categories: stickerCategories, categoryIndex: tmp4[0], style: safeAreaStyle };
    items5[2] = callback(onPressSticker(9635), obj6);
    obj.children = items5;
    obj.children = closure_15(closure_5, obj);
    return callback(channel(5464).AnalyticsLocationProvider, obj);
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default memoResult;
