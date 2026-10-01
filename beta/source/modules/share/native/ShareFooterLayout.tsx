// Module ID: 11190
// Function ID: 11191
// Name: ShareFooterLayout
// Dependencies: [19, 17, 21, 4836, 576, 6402, 4566, 5280, 5284, 4832, 2]
// Exports: default

// Module 11190 (ShareFooterLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { footer: obj2, footerSeparator: obj3, warningWrapper: { display: "flex", flexDirection: "column", gap: 8 }, chatRow: obj4 };
obj2 = { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: -nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
let closure_7 = createStyles(obj);
const __initData = { code: "function ShareFooterLayoutTsx1(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};}" };
const result = size.fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default function ShareFooterLayout(arg0) {
  let avoidKeyboard;
  let c0;
  let chatInput;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let preview;
  let sendButton;
  let warningText;
  ({ preview, warningText } = arg0);
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = closure_7();
  const sum = tmp.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  _require = sum;
  let obj = require("ReanimatedRexport");
  const fn = function f() {
    let obj2;
    const obj = { paddingBottom: obj2.withSpring(c0, springPresets.ON_PRESS_SPRING, "respect-motion-settings") };
    obj2 = spring;
    return obj;
  };
  let obj2 = { withSpring: require("spring").withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: require("springPresets").ON_PRESS_SPRING };
  fn.__closure = obj2;
  fn.__workletHash = 2871405301293;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: items, children: items2 };
  items = [tmp.footer, animatedStyle];
  let tmp6Result = null;
  View = ReanimatedRexportDefault.View;
  const tmp4 = _require;
  if (null != preview) {
    const obj4 = { children: items1 };
    items1 = [preview, ];
    const obj5 = { style: tmp.footerSeparator };
    items1[1] = closure_4(View, obj5);
    tmp6Result = tmp6(closure_5, obj4);
  }
  items2 = [tmp6Result, ];
  const obj7 = { style: tmp.chatRow, children: items3 };
  items3 = [chatInput, sendButton];
  const obj6 = { style: tmp.warningWrapper, children: items4 };
  items4 = [closure_6(View, obj7), ];
  let tmp12 = null != warningText;
  const tmp11 = View;
  if (tmp12) {
    const obj8 = { variant: "text-sm/normal", color: "text-feedback-warning", children: warningText };
    tmp12 = closure_4(tmp4(4832).Text, obj8);
  }
  items4[1] = tmp12;
  items2[1] = closure_6(tmp11, obj6);
  return closure_6(View, obj3);
};
