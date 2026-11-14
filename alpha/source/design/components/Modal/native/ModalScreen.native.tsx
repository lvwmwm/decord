// Module ID: 8208
// Function ID: 8209
// Name: ModalScreen
// Dependencies: [19, 17, 21, 575, 5306, 5913, 7589, 7492, 8209, 2]
// Exports: ModalScreen

// Module 8208 (ModalScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5913 */;
import react2 from "react" /* 7492 */;
import NavigatorGradientContext from "NavigatorGradientContext" /* 7589 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj3;
let tmp3;
const ExpressiveGradient = tmp3(8209);
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { navigator: nativeDefault.colors.BACKGROUND_BASE_LOW, modal: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let createStyles = createStyles_mod;
let obj2 = { container: { flex: 1, flexDirection: "column" }, navigator: obj3, modal: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
let closure_8 = createStyles(obj2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export function ModalScreen(backgroundColor) {
  let items1;
  backgroundColor = backgroundColor.backgroundColor;
  const children = backgroundColor.children;
  const tmp = closure_8();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const context = react.useContext(NavigatorGradientContext.NavigatorGradientContext);
  const context1 = react.useContext(react2.NavigatorBackgroundContext);
  const items = [tmp.container, , ];
  const tmp6 = metroRequire;
  const tmp7 = View;
  if (backgroundColor == null) {
    backgroundColor = tmp[context1].backgroundColor;
  }
  items[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  let tmp8 = null != context;
  if (tmp8) {
    obj = { paddingTop: context.headerHeight };
    tmp8 = obj;
  }
  const obj2 = { style: items, children: items1 };
  items[2] = tmp8;
  let tmp9 = null != context;
  if (tmp9) {
    const obj3 = { color: context.color, backgroundColor: obj[context1] };
    tmp9 = hasOwnProperty(ExpressiveGradient.ExpressiveGradient, obj3);
  }
  items1 = [tmp9, children];
  return tmp6(tmp7, obj2);
}
