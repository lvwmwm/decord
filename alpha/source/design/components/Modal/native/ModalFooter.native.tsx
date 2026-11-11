// Module ID: 13979
// Function ID: 13980
// Name: ModalFooter
// Dependencies: [19, 17, 21, 5243, 575, 5850, 2]
// Exports: ModalFooter

// Module 13979 (ModalFooter)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5850 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { footer: obj2, wrapper: { width: "100%", flexDirection: "column", justifyContent: "flex-end" } };
obj2 = { flexDirection: "column", alignItems: "center", justifyContent: "flex-end", overflow: "hidden", paddingTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export function ModalFooter(children) {
  children = children.children;
  const tmp = closure_4();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const items = [tmp.footer, { marginBottom: -insets.bottom, paddingBottom: Math.max(insets.bottom, nativeDefault.space.PX_16) }];
  ({ marginBottom: -insets.bottom, paddingBottom: Math.max(insets.bottom, nativeDefault.space.PX_16) });
  return <View style={items}>{null}</View>;
}
