// Module ID: 16566
// Function ID: 16567
// Name: AppIcon
// Dependencies: [19, 17, 9616, 21, 5012, 575, 5221, 5019, 5699, 2]
// Exports: default

// Module 16566 (AppIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import shared from "shared" /* 5019 */;
import useThemeDefault from "useTheme" /* 5221 */;
import AppIconConstants from "AppIconConstants" /* 9616 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5012 */;
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
