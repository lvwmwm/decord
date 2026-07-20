// Module ID: 9557
// Function ID: 74463
// Dependencies: []

// Module 9557
let PADDING_HORIZONTAL;
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ ExpressionPickerViewType: closure_5, ExpressionPickerOrder: closure_6, PADDING_HORIZONTAL } = arg1(dependencyMap[2]));
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
const EmojiIntention = arg1(dependencyMap[4]).EmojiIntention;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, paddingHorizontal: PADDING_HORIZONTAL };
obj.expressionPickerContainer = obj;
obj.expressionPickerContent = { flex: 1 };
obj.segmentedControl = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
obj.segmentedControlUnpadded = { paddingHorizontal: 0 };
let closure_11 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function ExpressionPicker(expressionType) {
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let height;
  let inPortalKeyboard;
  let initialGifQuery;
  let onBackspace;
  let onPressEmoji;
  let onPressGIF;
  let onPressSticker;
  let stickerFormats;
  let visibleTabs;
  ({ bottomSheetRef, bottomSheetIndex, channel } = expressionType);
  const arg1 = channel;
  let flag = expressionType.hideGifFavorites;
  if (flag === undefined) {
    flag = false;
  }
  ({ visibleTabs, onPressEmoji, onPressSticker, onPressGIF, onBackspace } = expressionType);
  if (visibleTabs === undefined) {
    visibleTabs = closure_6;
  }
  ({ height, inPortalKeyboard } = expressionType);
  let importDefault;
  let dependencyMap;
  let importAllResult;
  ({ initialGifQuery, stickerFormats } = expressionType);
  const tmp = callback2();
  importDefault = importAllResult.useRef(false);
  let obj = { expressionType: expressionType.expressionType, expressionPickerTabs: visibleTabs };
  const tmp2 = importDefault(dependencyMap[8])(obj);
  const expressionPickerViewType = tmp2.expressionPickerViewType;
  dependencyMap = expressionPickerViewType;
  const prop = tmp2.expressionPickerTabStrings;
  const items = [channel];
  const memo = importAllResult.useMemo(() => channel.getGuildId(), items);
  importAllResult = memo;
  const items1 = [memo];
  const effect = importAllResult.useEffect(() => {
    const result = channel(expressionPickerViewType[9]).maybeFetchTopEmojisByGuild(memo);
  }, items1);
  let obj1 = arg1(dependencyMap[10]);
  obj = {
    pageWidth: 0,
    defaultIndex: tmp2.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      let obj = channel(expressionPickerViewType[11]);
      obj = { type: channel(expressionPickerViewType[12]).KeyboardTypes.EXPRESSION, context: closure_6[arg0] };
      obj.setKeyboardType(obj);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  const effect1 = importAllResult.useEffect(() => {
    if (ref.current) {
      let obj = { tab: expressionPickerViewType, badged: false };
      ref(expressionPickerViewType[13]).trackWithMetadata(constants2.EXPRESSION_PICKER_TAB_CLICKED, obj);
      const obj4 = ref(expressionPickerViewType[13]);
    } else if (expressionPickerViewType === constants.EMOJI) {
      obj = { intention: constants3.CHAT };
      ref(expressionPickerViewType[14])(obj);
      ref.current = true;
    } else {
      obj = ref(expressionPickerViewType[13]);
      const obj1 = { tab: expressionPickerViewType, badged: false };
      obj.trackWithMetadata(constants2.EXPRESSION_PICKER_OPENED, obj1);
      ref.current = true;
    }
  }, items2);
  obj = {};
  let tmp8 = expressionPickerViewType === constants.EMOJI;
  if (!tmp8) {
    tmp8 = expressionPickerViewType === constants.STICKER;
  }
  obj.hasCategories = tmp8;
  const tmp7 = importDefault(dependencyMap[15]);
  let obj4 = arg1(dependencyMap[16]);
  if (obj4.useIsScreenReaderEnabled()) {
    obj1 = { marginBottom: tmp7Result.safeAreaBottomKeyboardAware };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const obj3 = {};
  const items3 = [tmp.expressionPickerContainer, ];
  let tmp13 = null != height;
  if (tmp13) {
    obj4 = { height };
    tmp13 = obj4;
  }
  items3[1] = tmp13;
  obj3.style = items3;
  const tmp11 = closure_10;
  const tmp12 = View;
  const tmp7Result = importDefault(dependencyMap[15])(obj);
  const items4 = [callback(View, { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: callback(arg1(dependencyMap[17]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj6 = { style: items5 };
  const items5 = [tmp.expressionPickerContent, obj2];
  if (expressionPickerViewType === constants.EMOJI) {
    const obj7 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard };
    let tmp19 = callback(importDefault(dependencyMap[18]), obj7);
  } else if (expressionPickerViewType === constants.GIF) {
    const obj8 = { bottomSheetRef };
    ({ id: obj13.channelId, guild_id: obj13.guildId } = channel);
    obj8.hideFavorites = flag;
    obj8.initialQuery = initialGifQuery;
    obj8.onPressGIF = onPressGIF;
    tmp19 = callback(importDefault(dependencyMap[19]), obj8);
  } else {
    tmp19 = null;
    if (expressionPickerViewType === constants.STICKER) {
      const obj9 = { bottomSheetRef, bottomSheetIndex, channel, onPressSticker, stickerFormats, inPortalKeyboard };
      tmp19 = callback(importDefault(dependencyMap[20]), obj9);
    }
  }
  obj6.children = tmp19;
  items4[1] = callback(View, obj6);
  obj3.children = items4;
  return tmp11(tmp12, obj3);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default memoResult;
