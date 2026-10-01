// Module ID: 9739
// Function ID: 9740
// Name: ExpressionPicker
// Dependencies: [19, 17, 1218, 1074, 1375, 21, 4836, 576, 9740, 9741, 9083, 1483, 1611, 5016, 9743, 9746, 5266, 9084, 9747, 9825, 9847, 2]

// Module 9739 (ExpressionPicker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import TopEmojisUtils from "TopEmojisUtils" /* 9741 */;
import trackOnEmojiPickerOpenedDefault from "trackOnEmojiPickerOpened" /* 9743 */;
import react from "react" /* 19 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let PADDING_HORIZONTAL;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ ExpressionPickerViewType: hasOwnProperty, ExpressionPickerOrder: metroRequire, PADDING_HORIZONTAL } = ExpressionPickerConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { expressionPickerContainer: obj2, expressionPickerContent: { flex: 1 }, segmentedControl: obj3, segmentedControlUnpadded: { paddingHorizontal: 0 } };
obj2 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT, position: "relative", paddingHorizontal: PADDING_HORIZONTAL };
obj3 = { paddingTop: 2 * PADDING_HORIZONTAL, paddingHorizontal: 0 };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(function ExpressionPicker(hideGifFavorites) {
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let height;
  let inPortalKeyboard;
  let initialGifQuery;
  let items4;
  let items5;
  let obj4;
  let onBackspace;
  let onPressEmoji;
  let onPressGIF;
  let onPressSticker;
  let ref;
  let stickerFormats;
  let tmp17Result;
  let visibleTabs;
  ({ bottomSheetRef, bottomSheetIndex, channel } = hideGifFavorites);
  let flag = hideGifFavorites.hideGifFavorites;
  const expressionType = hideGifFavorites.expressionType;
  if (flag === undefined) {
    flag = false;
  }
  ({ visibleTabs, onPressEmoji, onPressSticker, onPressGIF, onBackspace } = hideGifFavorites);
  if (visibleTabs === undefined) {
    visibleTabs = closure_6;
  }
  ({ height, inPortalKeyboard } = hideGifFavorites);
  let expressionPickerViewType;
  let memo;
  ({ initialGifQuery, stickerFormats } = hideGifFavorites);
  const tmp = closure_11();
  importDefault = memo.useRef(false);
  const tmp2 = importDefault;
  const tmp4 = require("useExpressionPickerTabData")({ expressionType, expressionPickerTabs: visibleTabs });
  expressionPickerViewType = tmp4.expressionPickerViewType;
  const prop = tmp4.expressionPickerTabStrings;
  const items = [channel];
  const expressionPickerSelectedIndex = tmp4.expressionPickerSelectedIndex;
  memo = memo.useMemo(() => channel.getGuildId(), items);
  const items1 = [memo];
  const effect = memo.useEffect(() => {
    const obj = TopEmojisUtils;
    const result = obj.maybeFetchTopEmojisByGuild(memo);
  }, items1);
  let obj = channel(expressionPickerViewType[10]);
  let obj2 = {
    pageWidth: 0,
    defaultIndex: expressionPickerSelectedIndex,
    onSetActiveIndex(arg0) {
      const obj = channel(expressionPickerViewType[11]);
      obj.setKeyboardContext(channel(expressionPickerViewType[12]).KeyboardTypes.EXPRESSION, closure_1_6[arg0]);
    },
    items: prop.map((id) => ({ id, label: id, page: null }))
  };
  const items2 = [expressionPickerViewType];
  const segmentedControlState = obj.useSegmentedControlState(obj2);
  const effect1 = memo.useEffect(() => {
    if (ref.current) {
      const obj2 = { tab: expressionPickerViewType, badged: false };
      const obj4 = AppAnalyticsUtilsDefault;
      obj4.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, obj2);
    } else if (expressionPickerViewType === hasOwnProperty.EMOJI) {
      const obj3 = { intention: EmojiIntention.CHAT };
      trackOnEmojiPickerOpenedDefault(obj3);
      ref.current = true;
    } else {
      const obj5 = { tab: tmp2, badged: false };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(AnalyticEvents.EXPRESSION_PICKER_OPENED, obj5);
      ref.current = true;
    }
  }, items2);
  let tmp12 = expressionPickerViewType === constants.EMOJI;
  const tmp10 = require("useExpressionPickerInsets");
  if (!tmp12) {
    tmp12 = expressionPickerViewType === tmp11.STICKER;
  }
  const tmp10Result = tmp10({ hasCategories: tmp12 });
  const tmp7Result = channel(expressionPickerViewType[16]);
  if (tmp7Result.useIsScreenReaderEnabled()) {
    let obj3 = { marginBottom: tmp10Result.safeAreaBottomKeyboardAware };
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items3 = [tmp.expressionPickerContainer, ];
  let tmp16 = null != height;
  const tmp14 = closure_10;
  if (tmp16) {
    let obj5 = { height };
    tmp16 = obj5;
  }
  const obj6 = { style: items3, children: items4 };
  items3[1] = tmp16;
  items4 = [, ];
  const obj7 = { style: inPortalKeyboard ? tmp.segmentedControl : tmp.segmentedControlUnpadded, children: closure_9(channel(expressionPickerViewType[17]).SegmentedControl, { state: segmentedControlState }) };
  items4[0] = closure_9(View, obj7);
  const obj8 = { style: items5, children: tmp17Result };
  items5 = [tmp.expressionPickerContent, obj4];
  if (expressionPickerViewType === constants.EMOJI) {
    const obj9 = { bottomSheetIndex, bottomSheetRef, channel, onPressEmoji, onBackspace, inPortalKeyboard };
    tmp17Result = tmp17(tmp2(tmp3[18]), obj9);
  } else if (expressionPickerViewType === constants.GIF) {
    const obj10 = { bottomSheetRef, channelId: null, guildId: null, hideFavorites: flag, initialQuery: initialGifQuery, onPressGIF };
    ({ id: obj11.channelId, guild_id: obj11.guildId } = channel);
    tmp17Result = tmp17(tmp2(tmp3[19]), obj10);
  } else {
    tmp17Result = null;
    if (expressionPickerViewType === constants.STICKER) {
      const obj12 = { bottomSheetRef, bottomSheetIndex, channel, onPressSticker, stickerFormats, inPortalKeyboard };
      tmp17Result = tmp17(tmp2(tmp3[20]), obj12);
    }
  }
  items4[1] = closure_9(View, obj8);
  return tmp14(View, obj6);
});
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPicker.tsx");

export default memoResult;
