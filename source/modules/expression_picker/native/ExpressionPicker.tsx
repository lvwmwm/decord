// Module ID: 9606
// Function ID: 74756
// Name: PADDING_HORIZONTAL
// Dependencies: [31, 27, 1314, 653, 1852, 33, 4130, 689, 9607, 9368, 8404, 1454, 1555, 4324, 9382, 9608, 4528, 8799, 9609, 9610, 9635, 2]

// Module 9606 (PADDING_HORIZONTAL)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import ExpressionPickerViewType from "ExpressionPickerViewType";
import { AnalyticEvents } from "ME";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let PADDING_HORIZONTAL;
let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ ExpressionPickerViewType: closure_5, ExpressionPickerOrder: closure_6, PADDING_HORIZONTAL } = ExpressionPickerViewType);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { flex: 1, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL };
obj.expressionPickerContainer = obj;
obj.expressionPickerContent = { flex: 1 };
obj.segmentedControl = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
obj.segmentedControlUnpadded = { paddingHorizontal: 0 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
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
  let expressionPickerViewType;
  let memo;
  ({ initialGifQuery, stickerFormats } = expressionType);
  const tmp = callback2();
  importDefault = memo.useRef(false);
  let obj = { expressionType: expressionType.expressionType, expressionPickerTabs: visibleTabs };
  const tmp2 = importDefault(expressionPickerViewType[8])(obj);
  expressionPickerViewType = tmp2.expressionPickerViewType;
  const prop = tmp2.expressionPickerTabStrings;
  const items = [channel];
  memo = memo.useMemo(() => channel.getGuildId(), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const result = channel(expressionPickerViewType[9]).maybeFetchTopEmojisByGuild(memo);
  }, items1);
  let obj1 = channel(expressionPickerViewType[10]);
  obj = {
    pageWidth: 0,
    defaultIndex: tmp2.expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      let obj = channel(expressionPickerViewType[11]);
      obj = { type: channel(expressionPickerViewType[12]).KeyboardTypes.EXPRESSION, context: outer1_6[arg0] };
      obj.setKeyboardType(obj);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  const effect1 = memo.useEffect(() => {
    if (ref.current) {
      let obj = { tab: expressionPickerViewType, badged: false };
      ref(expressionPickerViewType[13]).trackWithMetadata(outer1_7.EXPRESSION_PICKER_TAB_CLICKED, obj);
      const obj4 = ref(expressionPickerViewType[13]);
    } else if (expressionPickerViewType === outer1_5.EMOJI) {
      obj = { intention: outer1_8.CHAT };
      ref(expressionPickerViewType[14])(obj);
      ref.current = true;
    } else {
      obj = ref(expressionPickerViewType[13]);
      const obj1 = { tab: expressionPickerViewType, badged: false };
      obj.trackWithMetadata(outer1_7.EXPRESSION_PICKER_OPENED, obj1);
      ref.current = true;
    }
  }, items2);
  obj = {};
  let tmp8 = expressionPickerViewType === constants.EMOJI;
  if (!tmp8) {
    tmp8 = expressionPickerViewType === constants.STICKER;
  }
  obj.hasCategories = tmp8;
  const tmp7 = importDefault(expressionPickerViewType[15]);
  let obj4 = channel(expressionPickerViewType[16]);
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
  tmp7Result = importDefault(expressionPickerViewType[15])(obj);
  const items4 = [callback(View, { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: callback(channel(expressionPickerViewType[17]).SegmentedControl, { state: segmentedControlState }) }), ];
  const obj6 = { style: items5 };
  items5 = [tmp.expressionPickerContent, obj2];
  if (expressionPickerViewType === constants.EMOJI) {
    const obj7 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard };
    let tmp19 = callback(importDefault(expressionPickerViewType[18]), obj7);
  } else if (expressionPickerViewType === constants.GIF) {
    const obj8 = { bottomSheetRef };
    ({ id: obj13.channelId, guild_id: obj13.guildId } = channel);
    obj8.hideFavorites = flag;
    obj8.initialQuery = initialGifQuery;
    obj8.onPressGIF = onPressGIF;
    tmp19 = callback(importDefault(expressionPickerViewType[19]), obj8);
  } else {
    tmp19 = null;
    if (expressionPickerViewType === constants.STICKER) {
      const obj9 = { bottomSheetRef, bottomSheetIndex, channel, onPressSticker, stickerFormats, inPortalKeyboard };
      tmp19 = callback(importDefault(expressionPickerViewType[20]), obj9);
    }
  }
  obj6.children = tmp19;
  items4[1] = callback(View, obj6);
  obj3.children = items4;
  return tmp11(tmp12, obj3);
});
let result = require("ExpressionPickerViewType").fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default memoResult;
