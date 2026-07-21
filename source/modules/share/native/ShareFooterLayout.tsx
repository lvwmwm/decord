// Module ID: 9887
// Function ID: 76541
// Name: ShareFooterLayout
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 9887 (ShareFooterLayout)
import "__exportStarResult1";
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { paddingHorizontal: require("__exportStarResult1").space.PX_16, paddingVertical: require("__exportStarResult1").space.PX_12, gap: require("__exportStarResult1").space.PX_12, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: require("__exportStarResult1").colors.BORDER_SUBTLE };
__exportStarResult1.footer = __exportStarResult1;
__exportStarResult1.footerSeparator = { marginHorizontal: -require("__exportStarResult1").space.PX_16, borderBottomWidth: 1, borderBottomColor: require("__exportStarResult1").colors.BORDER_SUBTLE };
__exportStarResult1.warningWrapper = { "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001261344141645, "Bool(true)": 17917957937422630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": -7552086520862065000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
const obj1 = { marginHorizontal: -require("__exportStarResult1").space.PX_16, borderBottomWidth: 1, borderBottomColor: require("__exportStarResult1").colors.BORDER_SUBTLE };
__exportStarResult1.chatRow = { gap: require("__exportStarResult1").space.PX_12 };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
let closure_8 = { code: "function ShareFooterLayoutTsx1(){const{withSpring,footerPaddingBottom,ON_PRESS_SPRING}=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};}" };
const result = __exportStarResult1.fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default function ShareFooterLayout(arg0) {
  let avoidKeyboard;
  let chatInput;
  let preview;
  let sendButton;
  let warningText;
  ({ preview, warningText } = arg0);
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = __exportStarResult1();
  const sum = tmp.footer.paddingVertical + importDefault(dependencyMap[5])({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  const arg1 = sum;
  let obj = arg1(dependencyMap[6]);
  const fn = function f() {
    const obj = { paddingBottom: sum(closure_2[7]).withSpring(sum, sum(closure_2[8]).ON_PRESS_SPRING, "respect-motion-settings") };
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[7]).withSpring, footerPaddingBottom: sum, ON_PRESS_SPRING: arg1(dependencyMap[8]).ON_PRESS_SPRING };
  fn.__closure = obj;
  fn.__workletHash = 2871405301293;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items };
  const items = [tmp.footer, animatedStyle];
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
    const obj5 = { children: warningText };
    tmp12 = callback(arg1(dependencyMap[9]).Text, obj5);
  }
  items4[1] = tmp12;
  obj3.children = items4;
  items2[1] = callback2(View, obj3);
  obj.children = items2;
  return callback2(importDefault(dependencyMap[6]).View, obj);
};
