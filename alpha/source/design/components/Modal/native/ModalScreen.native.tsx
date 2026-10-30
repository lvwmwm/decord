// Module ID: 7964
// Function ID: 7965
// Name: ModalScreen
// Dependencies: [19, 17, 21, 5009, 575, 5602, 2]
// Exports: ModalScreen

// Module 7964 (ModalScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5602 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { container: { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
({ flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export function ModalScreen(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  const children = backgroundColor.children;
  const tmp = closure_4();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const style = [tmp.container, ];
  const tmp2 = jsx;
  const tmp3 = View;
  if (backgroundColor == null) {
    backgroundColor = tmp.container.backgroundColor;
  }
  style[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  return tmp2(tmp3, { style, children });
}
