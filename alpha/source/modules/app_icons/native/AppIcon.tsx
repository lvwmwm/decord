// Module ID: 17357
// Function ID: 17358
// Name: AppIcon
// Dependencies: [19, 17, 10107, 21, 5142, 575, 5371, 5149, 5844, 2]
// Exports: default

// Module 17357 (AppIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import shared from "shared" /* 5149 */;
import useThemeDefault from "useTheme" /* 5371 */;
import AppIconConstants from "AppIconConstants" /* 10107 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const getIconById = AppIconConstants.getIconById;
const jsx = Fragment.jsx;
let obj = { container: obj2, image: { resizeMode: "contain", height: "100%", width: "100%" } };
obj2 = { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  const id = size.id;
  if (num === undefined) {
    num = 56;
  }
  const style = size.style;
  const tmp = closure_6();
  const tmp4 = useThemeDefault();
  let num2 = 1;
  const tmp5 = getIconById(id);
  const obj = shared;
  if (obj.isThemeDark(tmp4)) {
    num2 = 0;
  }
  const items = [tmp.container, { width: num, height: num, borderWidth: num2 }, style];
  return <View style={items}>{null}</View>;
};
