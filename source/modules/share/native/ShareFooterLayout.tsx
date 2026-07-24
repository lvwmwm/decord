// Module ID: 9927
// Function ID: 76800
// Name: ShareFooterLayout
// Dependencies: [31, 27, 33, 4130, 689, 5160, 3991, 4542, 4546, 4126, 2]
// Exports: default

// Module 9927 (ShareFooterLayout)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, gap: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.footer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.footerSeparator = { marginHorizontal: -require("_createForOfIteratorHelperLoose").space.PX_16, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.warningWrapper = { display: "flex", flexDirection: "column", gap: 8 };
let obj2 = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, alignItems: "flex-end" };
_createForOfIteratorHelperLoose.chatRow = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_8 = { code: "function ShareFooterLayoutTsx1(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};}" };
let obj1 = { marginHorizontal: -require("_createForOfIteratorHelperLoose").space.PX_16, borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const result = require("jsxProd").fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default function ShareFooterLayout(arg0) {
  let avoidKeyboard;
  let chatInput;
  let preview;
  let sendButton;
  let warningText;
  ({ preview, warningText } = arg0);
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const sum = tmp.footer.paddingVertical + importDefault(5160)({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  const require = sum;
  let obj = require(3991);
  const fn = function f() {
    const obj = { paddingBottom: sum(outer1_2[7]).withSpring(closure_0, sum(outer1_2[8]).ON_PRESS_SPRING, "respect-motion-settings") };
    return obj;
  };
  obj = { withSpring: require(4542) /* withSpring */.withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: require(4546) /* SUBTLE_SPRING */.ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 2871405301293;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  items = [tmp.footer, animatedStyle];
  let tmp5 = null;
  if (null != preview) {
    const obj1 = {};
    const items1 = [preview, ];
    const obj2 = { style: tmp.footerSeparator };
    items1[1] = callback(View, obj2);
    obj1.children = items1;
    tmp5 = callback2(closure_5, obj1);
  }
  const items2 = [tmp5, ];
  const obj3 = { style: tmp.warningWrapper };
  const items3 = [chatInput, sendButton];
  const items4 = [callback2(View, { style: tmp.chatRow, children: items3 }), ];
  let tmp12 = null != warningText;
  if (tmp12) {
    const obj5 = { variant: "text-sm/normal", color: "text-feedback-warning", children: warningText };
    tmp12 = callback(require(4126) /* Text */.Text, obj5);
  }
  items4[1] = tmp12;
  obj3.children = items4;
  items2[1] = callback2(View, obj3);
  obj.children = items2;
  return callback2(importDefault(3991).View, obj);
};
