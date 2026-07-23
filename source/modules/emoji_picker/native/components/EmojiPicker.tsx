// Module ID: 9573
// Function ID: 74561
// Dependencies: [31, 27, 653, 1852, 33, 4130, 689, 675, 3991, 9330, 5464, 5484, 9337, 9572, 5772, 1212, 9343, 9384, 4554, 3974, 9406, 2]

// Module 9573
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import { EmojiIntention } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
const View = get_ActivityIndicator.View;
({ AnalyticEvents: closure_5, ChatInputComponentViewedTypes: closure_6, VerticalGradient: closure_7 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = { container: { flex: 1 }, list: { overflow: "hidden", flex: 1 } };
obj = { flexDirection: "row", paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.header = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj.headerGradientColor = _createForOfIteratorHelperLoose;
let obj2 = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj2["height"] = require("_createForOfIteratorHelperLoose").space.PX_8 + 1;
obj2["bottom"] = undefined;
obj2["top"] = -1;
obj.headerGradient = obj2;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function EmojiPicker(inPortalKeyboard) {
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let onBackspace;
  let onPressEmoji;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  ({ bottomSheetIndex, channel } = inPortalKeyboard);
  inPortalKeyboard = inPortalKeyboard.inPortalKeyboard;
  ({ bottomSheetRef, onPressEmoji, onBackspace } = inPortalKeyboard);
  const tmp = callback3();
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = importAllResult.useEffect(() => {
    let obj = ref1(handleTextChange[7]);
    obj = { type: outer1_6.EMOJI, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(outer1_5.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items);
  let obj = channel(handleTextChange[8]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = channel(handleTextChange[9]);
  const emojiCategories = obj1.useEmojiCategories(EmojiIntention.CHAT, channel);
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  const tmp8 = ref1(handleTextChange[12])(channel, sharedValue, EmojiIntention.CHAT);
  handleTextChange = tmp8.handleTextChange;
  const items1 = [channel];
  const items2 = [handleTextChange];
  const callback = importAllResult.useCallback(() => {
    let obj = ref1(handleTextChange[7]);
    obj = { type: outer1_6.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(outer1_5.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items1);
  const callback1 = importAllResult.useCallback(() => {
    const current = ref1.current;
    if (null != current) {
      current.setText("");
    }
    handleTextChange("");
  }, items2);
  const tmp7 = ref1(handleTextChange[10]);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = ref1(handleTextChange[13])({ hasCategories: true }));
  obj = { value: tmp7(ref1(handleTextChange[11]).EMOJI_PICKER).analyticsLocations };
  obj = { style: tmp.container };
  obj1 = { style: tmp.header };
  const obj2 = { ref: ref1, size: "md" };
  const intl = channel(handleTextChange[15]).intl;
  obj2.placeholder = intl.string(channel(handleTextChange[15]).t.KgK5qg);
  obj2.onChange = handleTextChange;
  obj2.onFocus = callback;
  obj2.isRound = true;
  obj1.children = callback(channel(handleTextChange[14]).SearchField, obj2);
  const items3 = [callback(View, obj1), , ];
  const obj3 = { style: tmp.list };
  const obj4 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: tmp8.searchResults, onPressEmoji };
  const tmp11 = ref1(handleTextChange[13])({ hasCategories: true });
  obj4.onLongPressEmoji = channel(handleTextChange[17]).openEmojiActionSheet;
  obj4.channel = channel;
  obj4.emojiPickerIntention = EmojiIntention.CHAT;
  obj4.insetBottom = safeAreaBottomKeyboardAware;
  obj4.inPortalKeyboard = inPortalKeyboard;
  obj4.searchQueryRef = tmp8.searchQueryRef;
  const items4 = [callback(ref1(handleTextChange[16]), obj4), ];
  const obj5 = { style: tmp.headerGradient, start: constants.START, end: constants.END };
  const tmp12 = ref1(handleTextChange[16]);
  const tmp13 = ref1(handleTextChange[18]);
  const items5 = [channel(handleTextChange[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 100), ];
  const obj10 = channel(handleTextChange[19]);
  items5[1] = channel(handleTextChange[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 0);
  obj5.colors = items5;
  items4[1] = callback(tmp13, obj5);
  obj3.children = items4;
  items3[1] = callback2(View, obj3);
  items3[2] = callback(ref1(handleTextChange[20]), { bottomSheetRef, bottomSheetIndex, style: safeAreaStyle, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, onBackspace, inPortalKeyboard, isSearching: null != tmp8.searchResults, onClearSearch: callback1 });
  obj.children = items3;
  obj.children = callback2(View, obj);
  return callback(channel(handleTextChange[10]).AnalyticsLocationProvider, obj);
});
const result = require("ME").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPicker.tsx");

export default memoResult;
