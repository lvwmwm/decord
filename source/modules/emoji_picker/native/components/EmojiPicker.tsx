// Module ID: 9565
// Function ID: 74496
// Dependencies: []

// Module 9565
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
const View = tmp2.View;
({ AnalyticEvents: closure_5, ChatInputComponentViewedTypes: closure_6, VerticalGradient: closure_7 } = arg1(dependencyMap[2]));
const EmojiIntention = arg1(dependencyMap[3]).EmojiIntention;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = { container: { flex: 1 }, list: {} };
obj = { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000179126287433, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014283308092159475, "Bool(false)": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001801821707945116, paddingTop: importDefault(dependencyMap[6]).space.PX_8, gap: importDefault(dependencyMap[6]).space.PX_12 };
obj.header = obj;
obj1 = { color: importDefault(dependencyMap[6]).colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT };
obj.headerGradientColor = obj1;
const obj2 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj2["height"] = importDefault(dependencyMap[6]).space.PX_8 + 1;
obj2["bottom"] = undefined;
obj2["top"] = -1;
obj.headerGradient = obj2;
let closure_11 = obj1.createStyles(obj);
const tmp4 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(function EmojiPicker(inPortalKeyboard) {
  let bottomSheetIndex;
  let bottomSheetRef;
  let channel;
  let onBackspace;
  let onPressEmoji;
  let safeAreaBottomKeyboardAware;
  let safeAreaStyle;
  ({ bottomSheetIndex, channel } = inPortalKeyboard);
  const arg1 = channel;
  inPortalKeyboard = inPortalKeyboard.inPortalKeyboard;
  ({ bottomSheetRef, onPressEmoji, onBackspace } = inPortalKeyboard);
  const tmp = callback3();
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = importAllResult.useEffect(() => {
    let obj = ref1(handleTextChange[7]);
    obj = { type: constants2.EMOJI, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items);
  let obj = arg1(dependencyMap[8]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = arg1(dependencyMap[9]);
  const emojiCategories = obj1.useEmojiCategories(EmojiIntention.CHAT, channel);
  const ref = importAllResult.useRef(null);
  const ref1 = importAllResult.useRef(null);
  const importDefault = ref1;
  const tmp8 = importDefault(dependencyMap[12])(channel, sharedValue, EmojiIntention.CHAT);
  const handleTextChange = tmp8.handleTextChange;
  const dependencyMap = handleTextChange;
  const items1 = [channel];
  const items2 = [handleTextChange];
  const callback = importAllResult.useCallback(() => {
    let obj = ref1(handleTextChange[7]);
    obj = { type: constants2.EMOJI_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items1);
  const callback1 = importAllResult.useCallback(() => {
    const current = ref1.current;
    if (null != current) {
      current.setText("");
    }
    handleTextChange("");
  }, items2);
  const tmp7 = importDefault(dependencyMap[10]);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = importDefault(dependencyMap[13])({ hasCategories: true }));
  obj = { value: tmp7(importDefault(dependencyMap[11]).EMOJI_PICKER).analyticsLocations };
  obj = { style: tmp.container };
  obj1 = { style: tmp.header };
  const obj2 = { ref: ref1, size: "md" };
  const intl = arg1(dependencyMap[15]).intl;
  obj2.placeholder = intl.string(arg1(dependencyMap[15]).t.KgK5qg);
  obj2.onChange = handleTextChange;
  obj2.onFocus = callback;
  obj2.isRound = true;
  obj1.children = callback(arg1(dependencyMap[14]).SearchField, obj2);
  const items3 = [callback(View, obj1), , ];
  const obj3 = { style: tmp.list };
  const obj4 = { bottomSheetIndex, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, emojis: tmp8.searchResults, onPressEmoji };
  const tmp11 = importDefault(dependencyMap[13])({ hasCategories: true });
  obj4.onLongPressEmoji = arg1(dependencyMap[17]).openEmojiActionSheet;
  obj4.channel = channel;
  obj4.emojiPickerIntention = EmojiIntention.CHAT;
  obj4.insetBottom = safeAreaBottomKeyboardAware;
  obj4.inPortalKeyboard = inPortalKeyboard;
  obj4.searchQueryRef = tmp8.searchQueryRef;
  const items4 = [callback(importDefault(dependencyMap[16]), obj4), ];
  const obj5 = { style: tmp.headerGradient, start: constants.START, end: constants.END };
  const tmp12 = importDefault(dependencyMap[16]);
  const tmp13 = importDefault(dependencyMap[18]);
  const items5 = [arg1(dependencyMap[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 100), ];
  const obj10 = arg1(dependencyMap[19]);
  items5[1] = arg1(dependencyMap[19]).hexOpacityToRgba(tmp.headerGradientColor.color, 0);
  obj5.colors = items5;
  items4[1] = callback(tmp13, obj5);
  obj3.children = items4;
  items3[1] = callback2(View, obj3);
  items3[2] = callback(importDefault(dependencyMap[20]), { bottomSheetRef, bottomSheetIndex, style: safeAreaStyle, emojiPickerListRef: ref, categories: emojiCategories, categoryIndexActive: sharedValue, onBackspace, inPortalKeyboard, isSearching: null != tmp8.searchResults, onClearSearch: callback1 });
  obj.children = items3;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[10]).AnalyticsLocationProvider, obj);
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/emoji_picker/native/components/EmojiPicker.tsx");

export default memoResult;
