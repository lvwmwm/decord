// Module ID: 9460
// Function ID: 73549
// Name: EmojiPickerCategoriesBackspaceItem
// Dependencies: [31, 27, 653, 33, 4015, 1212, 9461, 2]
// Exports: default

// Module 9460 (EmojiPickerCategoriesBackspaceItem)
import result from "result";
import { Pressable } from "get ActivityIndicator";
import { NODE_MARGIN } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/emoji_picker/native/components/categories/EmojiPickerCategoriesBackspaceItem.tsx");

export default function EmojiPickerCategoriesBackspaceItem(onBackspace) {
  let iconStyle;
  let style;
  onBackspace = onBackspace.onBackspace;
  let React;
  ({ style, iconStyle } = onBackspace);
  const interval = new onBackspace(4015).Interval();
  const dependencyMap = React.useRef(interval);
  const delayedCall = new onBackspace(4015).DelayedCall(500, () => {
    const current = result.current;
    current.cancel();
    const current2 = ref.current;
    current2.start(50, onBackspace);
  });
  React = React.useRef(delayedCall);
  const items = [onBackspace];
  const items1 = [onBackspace];
  const callback = React.useCallback(() => {
    onBackspace();
    const current = result.current;
    current.delay();
  }, items);
  const callback1 = React.useCallback(() => {
    const current = result.current;
    current.cancel();
    const current2 = ref.current;
    current2.stop();
    onBackspace();
  }, items1);
  const effect = React.useEffect(() => {
    current = current.current;
    current = result.current;
    return () => {
      current.stop();
      current.cancel();
    };
  });
  obj = { hitSlop: obj, style, accessibilityRole: "keyboardkey" };
  obj = { top: NODE_MARGIN, bottom: NODE_MARGIN, right: NODE_MARGIN, left: NODE_MARGIN };
  const intl = onBackspace(1212).intl;
  obj.accessibilityLabel = intl.string(onBackspace(1212).t["4SnBzF"]);
  obj.delayLongPress = 500;
  obj.onPressOut = callback1;
  obj.onLongPress = callback;
  const items2 = [iconStyle, { opacity: 0.5 }];
  obj.children = jsx(onBackspace(9461).BackspaceIcon, { style: items2 });
  return <Pressable top={NODE_MARGIN} bottom={NODE_MARGIN} right={NODE_MARGIN} left={NODE_MARGIN} />;
};
