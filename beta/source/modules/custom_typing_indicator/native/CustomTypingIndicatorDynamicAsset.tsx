// Module ID: 11452
// Function ID: 11453
// Name: CustomTypingIndicatorDynamicAsset
// Dependencies: [19, 17, 21, 4836, 5279, 5899, 4832, 1115, 11453, 2]
// Exports: default

// Module 11452 (CustomTypingIndicatorDynamicAsset)
import react_native from "react-native" /* 17 */;
import FastImageDefault from "FastImage" /* 5899 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((width, gap) => {
  const obj = { emojiRow: obj2, emoji: { width, height: width }, text: { flexShrink: 1 } };
  return obj;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorDynamicAsset.tsx");

export default function CustomTypingIndicatorDynamicAsset(arg0) {
  let emoji;
  let emojiGap;
  let emojiSize;
  let emojiSource;
  let format;
  let items;
  let items1;
  let lineClamp;
  let name;
  let obj4;
  let spacing;
  let style;
  let suggestion;
  let textColor;
  let textStyle;
  let textVariant;
  ({ spacing, emojiGap, emojiSource } = arg0);
  _require = undefined;
  ({ name, suggestion, emojiSize, textVariant, textColor, textStyle, lineClamp, style } = arg0);
  const tmp = closure_6;
  if (emojiGap == null) {
    emojiGap = spacing;
  }
  const tmpResult = tmp(emojiSize, emojiGap);
  _require = tmpResult;
  let obj = { direction: "horizontal", spacing, align: "center", justify: "flex-start", style, children: items };
  let obj2 = {
    style: tmpResult.emojiRow,
    children: emojiSource.map((uri, index) => {
      let obj2;
      const obj = { fadeDuration: 0, source: obj2, style: emoji.emoji };
      obj2 = { uri };
      return React3(FastImageDefault, obj, index);
    })
  };
  const Stack = require("Stack/Stack").Stack;
  items = [closure_4(View, obj2), ];
  const obj3 = { variant: textVariant, color: textColor, lineClamp, includeFontPadding: true, style: items1, children: format(obj4.getCustomTypingIndicatorSuggestionWithNameMessage(suggestion), { name }) };
  items1 = [tmpResult.text, textStyle];
  const Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  format = intl.format;
  obj4 = require("CustomTypingIndicatorUtils");
  items[1] = closure_4(Text, obj3);
  return closure_5(Stack, obj);
};
