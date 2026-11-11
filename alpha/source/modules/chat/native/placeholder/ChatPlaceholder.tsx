// Module ID: 14851
// Function ID: 14852
// Name: ChatPlaceholder
// Dependencies: [19, 17, 11805, 21, 5243, 575, 1627, 5850, 1493, 7409, 1652, 14852, 14853, 14854, 2]

// Module 14851 (ChatPlaceholder)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 11805 */;
import getChatPlaceholderRowHeightDefault from "getChatPlaceholderRowHeight" /* 14853 */;
import ChatPlaceholderRowDefault from "ChatPlaceholderRow" /* 14854 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj2;
const StyleSheet = react_native.StyleSheet;
let closure_4 = useChatBottomManagerUIStore.useChatInputContainerHeight;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { placeholder: obj2 };
createStyles = createStyles.createStyles;
obj2 = { paddingBottom: nativeDefault.space.PX_24, flexDirection: "column-reverse", overflow: "hidden" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_6 = createStyles(obj);
let closure_7 = { code: "(function ChatPlaceholderTsx1(){let[chatInputContainerHeight,animatedContainerBottomInset]=this.__closure;return{marginBottom:chatInputContainerHeight+animatedContainerBottomInset.get()};})" };
const memoResult = react.memo(function ChatPlaceholder(screenIndex) {
  let c2;
  let closure_0;
  let tmp10;
  let tmp8;
  let tmp9;
  let height;
  dependencyMap = undefined;
  let callback;
  screenIndex = screenIndex.screenIndex;
  let tmp = closure_6();
  let tmp2 = closure_4(screenIndex);
  _require = tmp2;
  let tmp3 = height;
  let tmp4 = dependencyMap;
  height = height(1493)().height;
  const rect = height(1627)();
  let sum = rect.top + rect.bottom;
  dependencyMap = sum;
  let diff = height(5850)({ isKeyboardAwareOnAndroid: false, includeKeyboardHeight: true }).insets.bottom - rect.bottom;
  const tmp7 = height(7409)(diff);
  let obj = require("module_1652");
  let items = [closure_7, tmp2, tmp7];
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items;
  class ChatPlaceholderTsx1 {
    constructor() {
      const obj = { marginBottom: c0 + _undefined.get() };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  ChatPlaceholderTsx1.__closure = items1;
  ChatPlaceholderTsx1.__workletHash = 13868441581206;
  ChatPlaceholderTsx1.__initData = tmp8;
  const animatedStyle = obj.useAnimatedStyle(ChatPlaceholderTsx1);
  _require = callback.useRef([]);
  callback = callback.useCallback((arg0) => {
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
  const items2 = [height, sum, tmp2, callback];
  const tmp13 = tmp3(14852)({ visible: true, animated: true });
  const memo = callback.useMemo(() => {
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
      diff = height - closure_0 - c2;
    } while (num2 < diff);
    return items;
  }, items2);
  const items3 = [tmp.placeholder, animatedStyle, tmp13];
  return jsx(tmp3(1652).View, { style: items3, pointerEvents: "none", children: memo });
});
const result = size.fileFinishedImporting("modules/chat/native/placeholder/ChatPlaceholder.tsx");

export default memoResult;
