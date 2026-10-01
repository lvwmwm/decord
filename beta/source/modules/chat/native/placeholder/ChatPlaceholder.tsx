// Module ID: 12135
// Function ID: 12136
// Name: ChatPlaceholder
// Dependencies: [19, 17, 8843, 21, 4836, 576, 1613, 6402, 1479, 12136, 12137, 12138, 4566, 2]

// Module 12135 (ChatPlaceholder)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 8843 */;
import getChatPlaceholderRowHeightDefault from "getChatPlaceholderRowHeight" /* 12137 */;
import ChatPlaceholderRowDefault from "ChatPlaceholderRow" /* 12138 */;
import react_mod from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let obj2;
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
let closure_3 = useChatBottomManagerUIStore.useChatInputContainerHeight;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { placeholder: obj2 };
createStyles = createStyles.createStyles;
obj2 = { paddingBottom: nativeDefault.space.PX_24, flexDirection: "column-reverse", overflow: "hidden" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_5 = createStyles(obj);
const memoResult = react.memo(function ChatPlaceholder(screenIndex) {
  let c2;
  let closure_0;
  let items2;
  let height;
  let c3;
  screenIndex = screenIndex.screenIndex;
  let tmp = closure_5();
  let tmp2 = c3(screenIndex);
  importDefault = tmp2;
  height = require("useWindowDimensions")().height;
  const rect = require("useSafeAreaInsets")();
  const insets = require("useSafeAreaInsetsKeyboardAware")({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets;
  let diff = insets.bottom - rect.bottom;
  let sum = rect.top + insets.bottom;
  react = diff;
  c3 = sum;
  let items = [tmp2, diff];
  const memo = react.useMemo(() => ({ marginBottom: closure_0 + c2 }), items);
  importDefault = react.useRef([]);
  const callback = react.useCallback((arg0) => {
    let tmp2 = ref.current[arg0];
    if (null == tmp2) {
      const _Math = Math;
      const _Math2 = Math;
      const sum = Math.floor(3 * Math.random()) + 1;
      tmp.current[arg0] = sum;
      tmp2 = sum;
    }
    return tmp2;
  }, []);
  const items1 = [height, sum, tmp2, callback];
  const tmp7 = require("useChatPlaceholderAnimatedStyles")({ visible: true, animated: true });
  const memo1 = react.useMemo(() => {
    let diff;
    const items = [];
    let num = 0;
    let num2 = 0;
    do {
      let tmp2 = callback(num);
      num2 = num2 + getChatPlaceholderRowHeightDefault(tmp2);
      let sum = num + 1;
      let arr = items.push(jsx(ChatPlaceholderRowDefault, { lines: tmp2 }, num));
      num = sum;
      diff = height - closure_0 - c3;
    } while (num2 < diff);
    return items;
  }, items1);
  const obj = { style: items2, pointerEvents: "none", children: memo1 };
  items2 = [tmp.placeholder, memo, tmp7];
  return callback(require("ReanimatedRexport").View, obj);
});
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default memoResult;
