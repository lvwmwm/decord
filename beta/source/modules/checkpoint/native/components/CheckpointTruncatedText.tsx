// Module ID: 12762
// Function ID: 12763
// Name: CheckpointTruncatedText
// Dependencies: [32, 19, 17, 21, 5595, 5504, 2]
// Exports: default

// Module 12762 (CheckpointTruncatedText)
import Text_Text from "Text/Text" /* 5504 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ StyleSheet, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const measure = StyleSheet.create({ measure: { position: "absolute", left: 0, right: 0, opacity: 0 } });
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointTruncatedText.tsx");

export default function CheckpointTruncatedText(text) {
  let _undefined;
  let c2;
  let style;
  let tmp2;
  let tmp8;
  let variant;
  text = text.text;
  require = text;
  const guildId = text.guildId;
  ({ variant, style } = text);
  dependencyMap = undefined;
  [tmp2, c2] = _slicedToArray(react.useState(false), 2);
  const items = [text, guildId];
  const tmp = _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.lines.length > 1);
  }, []);
  let obj = { style: measure.measure, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: closure_6(Text_Text.Text, { variant, style, onTextLayout: callback, children: text }) };
  const callback1 = react.useCallback(() => {
    const obj = ToastActionCreatorsDefault;
    const obj2 = { text: require };
    obj.open("CHECKPOINT_TRUNCATED_TEXT_" + guildId, obj2);
  }, items);
  const items1 = [closure_6(closure_5, obj), ];
  let obj2 = { variant, style, lineClamp: 1, ellipsizeMode: "tail", accessibilityRole: "text", onPress: tmp8, children: text };
  tmp8 = undefined;
  const Text = Text_Text.Text;
  const tmp5 = closure_7;
  const tmp6 = closure_5;
  const tmp7 = closure_6;
  if (tmp2) {
    tmp8 = callback1;
  }
  const obj3 = { children: items1 };
  items1[1] = tmp7(Text, obj2);
  return tmp5(tmp6, obj3);
};
