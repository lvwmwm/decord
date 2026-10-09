// Module ID: 15740
// Function ID: 15741
// Name: AppIcon
// Dependencies: [19, 17, 9439, 21, 5091, 587, 558, 576, 4992, 4930, 6163, 2]

// Module 15740 (AppIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useThemeDefault from "useTheme" /* 4992 */;
import AppIconConstants from "AppIconConstants" /* 9439 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
let tmp5;
const shared = tmp(4930);
const FastImageDefault = tmp5(6163);
const View = react_native.View;
const getIconById = AppIconConstants.getIconById;
const jsx = Fragment.jsx;
let obj = { container: obj2, image: { resizeMode: "contain", height: "100%", width: "100%" } };
obj2 = { overflow: "hidden", borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppIcon(arg0) {
  let id;
  let style;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(15);
  ({ id, size, style } = arg0);
  let num = 56;
  if (undefined !== size) {
    num = size;
  }
  const tmp4 = closure_6();
  const tmp6 = useThemeDefault();
  if (cResult[0] !== id) {
    const tmp9 = getIconById(id);
    cResult[0] = id;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  let num4 = 1;
  const tmpResult = shared;
  if (tmpResult.isThemeDark(tmp6)) {
    num4 = 0;
  }
  if (cResult[2] === num4) {
    let tmp10;
    if (cResult[3] === num) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === style) {
      if (cResult[6] === tmp4.container) {
        let tmp11;
        if (cResult[7] === tmp10) {
          tmp11 = cResult[8];
        }
        const iconSource = tmp7.iconSource;
        if (cResult[9] === tmp4.image) {
          let tmp12;
          if (cResult[10] === iconSource) {
            tmp12 = cResult[11];
          }
          if (cResult[12] === tmp11) {
            let tmp15;
            if (cResult[13] === tmp12) {
              tmp15 = cResult[14];
            }
            return tmp15;
          }
          const tmp18 = <View style={tmp11}>{tmp12}</View>;
          cResult[12] = tmp11;
          cResult[13] = tmp12;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
        const tmp14 = jsx(FastImageDefault, { style: tmp4.image, source: iconSource });
        cResult[9] = tmp4.image;
        cResult[10] = iconSource;
        cResult[11] = tmp14;
        tmp12 = tmp14;
      }
    }
    const items = [tmp4.container, tmp10, style];
    cResult[5] = style;
    cResult[6] = tmp4.container;
    cResult[7] = tmp10;
    cResult[8] = items;
    tmp11 = items;
  }
  const size1 = { width: num, height: num, borderWidth: num4 };
  cResult[2] = num4;
  cResult[3] = num;
  cResult[4] = size1;
  tmp10 = size1;
}) : (function AppIcon(size) {
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
});
const result = size.fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default tmp3;
