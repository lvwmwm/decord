// Module ID: 11462
// Function ID: 11463
// Name: CustomTypingIndicatorDisplay
// Dependencies: [19, 21, 4836, 1115, 11453, 5279, 11463, 4832, 5435, 576, 2]
// Exports: default

// Module 11462 (CustomTypingIndicatorDisplay)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import CustomTypingIndicatorUtils from "CustomTypingIndicatorUtils" /* 11453 */;
import CustomTypingIndicatorGlyphDefault from "CustomTypingIndicatorGlyph" /* 11463 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let tmp3;
const Text_Text = tmp3(4832);
const Stack_Stack = tmp3(5279);
const Pressables = tmp3(5435);
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles(() => ({ text: { flexShrink: 1 }, pressable: { flex: 1 } }));
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDisplay.tsx");

export default function CustomTypingIndicatorDisplay(showName) {
  let config;
  let items;
  let showEmojis;
  let username;
  ({ config, username, showEmojis } = showName);
  if (showEmojis === undefined) {
    showEmojis = true;
  }
  let flag = showName.showName;
  if (flag === undefined) {
    flag = true;
  }
  let num = showName.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  let flag2 = showName.justifyCenter;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = showName.onPress;
  const tmp = closure_5();
  if (flag) {
    let formatResult;
    if (null != username) {
      const intl2 = intl3.intl;
      const format = intl2.format;
      const obj3 = { name: username };
      const obj2 = CustomTypingIndicatorUtils;
      formatResult = format(obj2.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion), obj3);
    }
    let str = "flex-start";
    const Stack = Stack_Stack.Stack;
    const tmp8 = React3;
    if (flag2) {
      str = "center";
    }
    let tmp10 = null;
    const obj4 = { direction: "horizontal", spacing: 8, align: "center", justify: str, children: items };
    if (showEmojis) {
      const obj5 = { config, size: num };
      tmp10 = _false(CustomTypingIndicatorGlyphDefault, obj5);
    }
    items = [tmp10, ];
    const obj6 = { style: tmp.text, variant: "text-xs/medium", color: "interactive-text-default", lineClamp: 1, maxFontSizeMultiplier: 2, includeFontPadding: true, ellipsizeMode: "tail", children: formatResult };
    items[1] = _false(Text_Text.Text, obj6);
    const tmp8Result = tmp8(Stack, obj4);
    let tmp13Result = tmp8Result;
    const tmp13 = _false;
    if (null != onPress) {
      const obj7 = { style: tmp.pressable, hitSlop: nativeDefault.space.PX_8, onPress, accessibilityRole: "button", children: tmp8Result };
      const PressableOpacity = Pressables.PressableOpacity;
      tmp13Result = tmp13(PressableOpacity, obj7);
    }
    return tmp13Result;
  }
  const intl = intl3.intl;
  const string = intl.string;
  const obj = CustomTypingIndicatorUtils;
  formatResult = string(obj.getCustomTypingIndicatorSuggestionMessage(config.typingSuggestion));
};
