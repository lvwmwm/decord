// Module ID: 9820
// Function ID: 9821
// Name: ExpressionPickerCategories
// Dependencies: [19, 17, 21, 4836, 576, 4708, 2]
// Exports: default

// Module 9820 (ExpressionPickerCategories)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Portal2 from "Portal" /* 4708 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { container: obj2, containerRefresh: { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
({ borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default function ExpressionPickerCategories(arg0) {
  let children;
  let portalHostName;
  let style;
  ({ children, portalHostName, style } = arg0);
  const items = [, , ];
  ({ container: arr[0], containerRefresh: arr[1] } = closure_4());
  items[2] = style;
  closure_4();
  const Portal = Portal2.Portal;
  return <Portal hostName={portalHostName}>{null}</Portal>;
};
