// Module ID: 15076
// Function ID: 15077
// Name: AppIcon
// Dependencies: [19, 17, 8624, 21, 4836, 576, 4767, 4685, 2]
// Exports: default

// Module 15076 (AppIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4685 */;
import useThemeDefault from "useTheme" /* 4767 */;
import AppIconConstants from "AppIconConstants" /* 8624 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ Image: c3, View: closure_4 } = react_native);
const getIconById = AppIconConstants.getIconById;
const jsx = Fragment.jsx;
let obj = { container: obj2, image: { resizeMode: "contain", height: "100%", width: "100%" } };
obj2 = { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  const id = size.id;
  if (num === undefined) {
    num = 56;
  }
  const style = size.style;
  const tmp = closure_7();
  const tmp2 = useThemeDefault();
  let num2 = 1;
  const tmp3 = getIconById(id);
  const obj = shared;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  const items = [tmp.container, { width: num, height: num, borderWidth: num2 }, style];
  return <React3 style={items}>{null}</React3>;
};
