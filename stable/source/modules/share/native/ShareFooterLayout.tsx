// Module ID: 13670
// Function ID: 13671
// Name: ShareFooterLayout
// Dependencies: [19, 17, 21, 5170, 575, 5767, 1652, 5793, 5794, 5783, 2]
// Exports: default

// Module 13670 (ShareFooterLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5767 */;
import spring_spring from "spring/spring" /* 5793 */;
import springPresets from "springPresets" /* 5794 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp2;
let tmp5;
const _modDef1652 = tmp2(1652);
const Text_Text = tmp5(5783);
let View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { footer: obj2, footerSeparator: obj3, warningWrapper: { display: "flex", flexDirection: "column", gap: 8 }, chatRow: obj4 };
obj2 = { display: "flex", flexDirection: "column", flexShrink: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: -nativeDefault.space.PX_16, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "flex-end" };
let closure_7 = createStyles(obj);
let closure_8 = { code: "(function ShareFooterLayoutTsx1(){let[withSpring,footerPaddingBottom,ON_PRESS_SPRING]=this.__closure;return{paddingBottom:withSpring(footerPaddingBottom,ON_PRESS_SPRING,'respect-motion-settings')};})" };
const result = size.fileFinishedImporting("modules/share/native/ShareFooterLayout.tsx");

export default function ShareFooterLayout(arg0) {
  let avoidKeyboard;
  let chatInput;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let preview;
  let sendButton;
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp9;
  let warningText;
  ({ preview, warningText } = arg0);
  ({ chatInput, sendButton, avoidKeyboard } = arg0);
  const tmp = closure_7();
  const sum = tmp.footer.paddingVertical + useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: avoidKeyboard, includeCustomKeyboardHeight: false }).insets.bottom;
  const items = [closure_8, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = sum;
  items[3] = springPresets.ON_PRESS_SPRING;
  let c0;
  let c1;
  let c2;
  [tmp7, tmp8, tmp9, tmp10] = items;
  class ShareFooterLayoutTsx1 {
    constructor() {
      obj = { paddingBottom: closure_0(closure_1, closure_2, "respect-motion-settings") };
      return obj;
    }
  }
  const items1 = [tmp8, tmp9, tmp10];
  ShareFooterLayoutTsx1.__closure = items1;
  ShareFooterLayoutTsx1.__workletHash = 16457312043220;
  ShareFooterLayoutTsx1.__initData = tmp7;
  const animatedStyle = useAnimatedStyle(ShareFooterLayoutTsx1);
  let obj = { style: items2, children: items4 };
  items2 = [tmp.footer, animatedStyle];
  let tmp12Result = null;
  View = _modDef1652.View;
  if (null != preview) {
    const obj2 = { children: items3 };
    items3 = [preview, ];
    const obj3 = { style: tmp.footerSeparator };
    items3[1] = React3(View, obj3);
    tmp12Result = tmp12(hasOwnProperty, obj2);
  }
  items4 = [tmp12Result, ];
  const obj5 = { style: tmp.chatRow, children: items5 };
  items5 = [chatInput, sendButton];
  const obj4 = { style: tmp.warningWrapper, children: items6 };
  items6 = [metroRequire(View, obj5), ];
  let tmp18 = null != warningText;
  const tmp17 = View;
  if (tmp18) {
    const obj6 = { variant: "body-sm/normal", color: "text-feedback-warning", children: warningText };
    tmp18 = React3(Text_Text.Text, obj6);
  }
  items6[1] = tmp18;
  items4[1] = metroRequire(tmp17, obj4);
  return metroRequire(View, obj);
};
