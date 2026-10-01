// Module ID: 9747
// Function ID: 9748
// Name: EmojiPicker
// Dependencies: [19, 17, 1074, 1375, 21, 4836, 576, 1241, 4566, 9748, 6583, 6603, 9751, 9746, 6471, 1115, 9752, 9789, 5293, 4683, 9808, 2]

// Module 9747 (EmojiPicker)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ View: closure_4, StyleSheet } = react_native);
({ AnalyticEvents: hasOwnProperty, ChatInputComponentViewedTypes: metroRequire, VerticalGradient: metroImportDefault } = Constants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, list: { overflow: "hidden", flex: 1 }, header: obj2, headerGradientColor: obj3, headerGradient: obj4 };
obj2 = { flexDirection: "row", paddingTop: nativeDefault.space.PX_8, paddingBottom: 1, gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj4 = { height: nativeDefault.space.PX_8 + 1, bottom: undefined, top: -1 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj);
const memoResult = react.memo(function EmojiPicker(inPortalKeyboard) {
  let SearchField;
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let intl;
  let items3;
  let items4;
  let items5;
  let obj4;
  let obj6;
  let onBackspace;
  let onPressEmoji;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  ({ bottomSheetIndex, channel } = inPortalKeyboard);
  inPortalKeyboard = inPortalKeyboard.inPortalKeyboard;
  let handleTextChange;
  ({ bottomSheetRef, onPressEmoji, onBackspace } = inPortalKeyboard);
  const tmp = closure_11();
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: metroRequire.EMOJI, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(hasOwnProperty.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  }, items);
  let obj = channel(handleTextChange[8]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = channel(handleTextChange[9]);
  const emojiCategories = obj2.useEmojiCategories(EmojiIntention.CHAT, channel);
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const tmp7 = ref1(handleTextChange[10]);
  const analyticsLocations = tmp7(ref1(handleTextChange[11]).EMOJI_PICKER).analyticsLocations;
  const tmp8 = ref1(handleTextChange[12])(channel, sharedValue, EmojiIntention.CHAT);
  handleTextChange = tmp8.handleTextChange;
  const items1 = [channel];
  const searchQueryRef = tmp8.searchQueryRef;
  const items2 = [handleTextChange];
  const callback = react.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: metroRequire.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(hasOwnProperty.CHAT_INPUT_COMPONENT_VIEWED, obj2);
  }, items1);
  const callback1 = react.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current.setText("");
    }
    handleTextChange("");
  }, items2);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = ref1(handleTextChange[13])({ hasCategories: true }));
  const obj3 = { value: analyticsLocations, children: closure_10(closure_4, obj4) };
  obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.header, children: closure_9(SearchField, obj6) };
  ref1(handleTextChange[13])({ hasCategories: true });
  const AnalyticsLocationProvider = channel(handleTextChange[10]).AnalyticsLocationProvider;
  obj6 = { ref: ref1, size: "md", placeholder: intl.string(channel(handleTextChange[15]).t.KgK5qg), onChange: handleTextChange, onFocus: callback, round: true };
  SearchField = channel(handleTextChange[14]).SearchField;
  intl = channel(handleTextChange[15]).intl;
  items3 = [closure_9(closure_4, obj5), , ];
  const obj7 = { style: tmp.list, children: items4 };
  const obj8 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: tmp8.searchResults, onPressEmoji, onLongPressEmoji: channel(handleTextChange[17]).openEmojiActionSheet, channel, emojiPickerIntention: EmojiIntention.CHAT, insetBottom: safeAreaBottomKeyboardAware, inPortalKeyboard, searchQueryRef };
  const tmp12 = ref1(handleTextChange[16]);
  items4 = [closure_9(tmp12, obj8), ];
  const obj9 = { style: tmp.headerGradient, start: constants3.START, end: constants3.END, colors: items5 };
  items5 = [, ];
  const tmp13 = ref1(handleTextChange[18]);
  const obj10 = channel(handleTextChange[19]);
  items5[0] = obj10.hexOpacityToRgba(tmp.headerGradientColor.color, 100);
  const obj11 = channel(handleTextChange[19]);
  items5[1] = obj11.hexOpacityToRgba(tmp.headerGradientColor.color, 0);
  items4[1] = closure_9(tmp13, obj9);
  items3[1] = closure_10(closure_4, obj7);
  const obj12 = { bottomSheetRef, bottomSheetIndex, style: safeAreaStyle, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, onBackspace, inPortalKeyboard, isSearching: null != tmp8.searchResults, onClearSearch: callback1 };
  items3[2] = closure_9(ref1(handleTextChange[20]), obj12);
  return closure_9(AnalyticsLocationProvider, obj3);
});
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPicker.tsx");

export default memoResult;
