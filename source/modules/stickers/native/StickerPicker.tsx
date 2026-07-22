// Module ID: 9592
// Function ID: 74697
// Dependencies: []

// Module 9592
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, ActivityIndicator: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_9, AnalyticsPages: closure_10, AnalyticsSections: closure_11, UpsellTypes: closure_12, ChatInputComponentViewedTypes: closure_13 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
let obj = { container: { flex: 1 } };
obj = { paddingVertical: importDefault(dependencyMap[9]).space.PX_8 };
obj.header = obj;
obj.loadingIndicator = { width: "ADBE Vector Group", backgroundColor: false, paddingHorizontal: 2 };
obj.emptyState = { marginTop: arg1(dependencyMap[5]).STICKER_SEARCH_HEADER_HEIGHT };
let closure_16 = arg1(dependencyMap[8]).createStyles(obj);
const obj2 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function StickerPicker(channel) {
  let bottomSheetIndex;
  let bottomSheetRef;
  let inPortalKeyboard;
  let paddingTop;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  let stickerFormats;
  channel = channel.channel;
  const arg1 = channel;
  const onPressSticker = channel.onPressSticker;
  const importDefault = onPressSticker;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = callback3();
  let obj = arg1(dependencyMap[11]);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  let obj1 = arg1(dependencyMap[12]);
  const stickerCategories = obj1.useStickerCategories(channel);
  let obj2 = arg1(dependencyMap[13]);
  const items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => stickerPack.hasLoadedStickerPacks);
  const tmp4 = callback(React.useState(0), 2);
  const dependencyMap = tmp5;
  const analyticsLocations = importDefault(dependencyMap[14])(importDefault(dependencyMap[15]).STICKER_PICKER).analyticsLocations;
  let callback = analyticsLocations;
  let tmp7 = null;
  const tmp8 = callback(React.useState(null), 2);
  const React = tmp8[1];
  const tmp6 = importDefault(dependencyMap[14]);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = importDefault(dependencyMap[16])({ hasCategories: true }));
  const items1 = [, ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  callback = React.useCallback((arg0) => {
    if ("" === arg0) {
      channel(channel[17]).batchUpdates(() => {
        callback(0);
        callback2(null);
      });
      const obj2 = channel(channel[17]);
    } else {
      callback(channel(tmp5[18]).searchAllStickers(arg0));
      const obj = channel(tmp5[18]);
    }
  }, []);
  const effect = React.useEffect(() => {
    let obj = onPressSticker(tmp5[10]);
    obj = { type: constants5.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items1);
  const items2 = [channel, onPressSticker, analyticsLocations];
  const items3 = [channel];
  const callback1 = React.useCallback((pack_id) => {
    let obj = channel(tmp5[19]);
    const stickerSendability = obj.getStickerSendability(pack_id, currentUser.getCurrentUser(), channel);
    if (stickerSendability === channel(tmp5[19]).StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === channel(tmp5[19]).StickerSendability.SENDABLE_WITH_PREMIUM) {
      if (obj8.isStandardSticker(pack_id)) {
        const stickerPack = stickerPack.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          obj = {};
          obj = {};
          if (null != channel.guild_id) {
            let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = constants2.DM_CHANNEL;
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
          obj1 = { initialUpsellKey: constants4.GLOBAL_STICKER };
          obj2 = {};
          if (null != channel.guild_id) {
            let DM_CHANNEL = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = constants2.DM_CHANNEL;
          }
          obj2.page = DM_CHANNEL;
          obj2.section = constants3.STICKER_PICKER_UPSELL;
          obj1.analyticsLocation = obj2;
          obj1.analyticsLocations = analyticsLocations;
          const result = obj2.handleShowUpsellAlert(obj1);
        }
      }
      const obj8 = channel(tmp5[20]);
    }
  }, items2);
  const callback2 = React.useCallback(() => {
    let obj = onPressSticker(tmp5[10]);
    obj = { type: constants5.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items3);
  let obj3 = importDefault(dependencyMap[23]);
  const items4 = [channel];
  const callback3 = React.useCallback((renderableSticker) => {
    let obj = channel(tmp5[24]);
    obj = { renderableSticker, channel };
    const result = obj.showStickerDetailActionSheet(obj);
  }, items4);
  obj = { value: analyticsLocations };
  obj = { style: tmp.container };
  if (0 !== stickerCategories.length) {
    obj1 = { style: tmp.header };
    obj2 = { size: "md" };
    const intl = arg1(dependencyMap[26]).intl;
    obj2.placeholder = intl.string(arg1(dependencyMap[26]).t.dt5h1C);
    obj2.onChange = callback;
    obj2.onFocus = callback2;
    obj2.isRound = true;
    obj1.children = callback2(arg1(dependencyMap[25]).SearchField, obj2);
    tmp7 = callback2(closure_5, obj1);
  }
  const items5 = [tmp7, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      obj3 = { style: tmp.emptyState };
      tmp = callback2(importDefault(dependencyMap[27]), {});
      obj3.children = tmp;
      let tmp20Result = callback2(closure_5, obj3);
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
      tmp20Result = callback2(importDefault(dependencyMap[28]), obj4);
      const tmp20 = callback2;
      const tmp23 = importDefault(dependencyMap[28]);
    }
  } else {
    const obj5 = { style: tmp.loadingIndicator };
    items5[1] = callback2(closure_6, obj5);
    const obj6 = { categories: stickerCategories, categoryIndex: tmp4[0], style: safeAreaStyle };
    items5[2] = callback2(importDefault(dependencyMap[29]), obj6);
    obj.children = items5;
    obj.children = closure_15(closure_5, obj);
    return callback2(arg1(dependencyMap[14]).AnalyticsLocationProvider, obj);
  }
});
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default memoResult;
