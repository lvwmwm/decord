// Module ID: 7291
// Function ID: 7292
// Name: PressableNavigatorButtonWrapper
// Dependencies: [17, 7289, 21, 4836, 576, 2]
// Exports: default

// Module 7291 (PressableNavigatorButtonWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import react_native2 from "react-native" /* 7289 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
const View = react_native.View;
const MIN_HEADER_HEIGHT = react_native2.MIN_HEADER_HEIGHT;
const jsx = Fragment.jsx;
const obj = { buttonWrapper: size, buttonWrapperModal: { marginLeft: -8 } };
size = { flexShrink: 0, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8, height: MIN_HEADER_HEIGHT, width: MIN_HEADER_HEIGHT };
let closure_2 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx");

export default function PressableNavigatorButtonWrapper(isModal) {
  let flag = isModal.isModal;
  const children = isModal.children;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_2();
  return <View collapsable={false} style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper} importantForAccessibility="yes">{children}</View>;
};
