// Module ID: 8183
// Function ID: 8184
// Name: FormDivider
// Dependencies: [19, 17, 1072, 21, 5014, 575, 5080, 7353, 5011, 7059, 2]
// Exports: default

// Module 8183 (FormDivider)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import native from "native" /* 5080 */;
import RedesignCompat from "RedesignCompat" /* 7059 */;
import useProfileThemeValues from "useProfileThemeValues" /* 7353 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let ASH;
let DARK;
let LIGHT;
let ONYX;
let Platform;
let closure_4;
let hasOwnProperty;
({ View: closure_4, StyleSheet: hasOwnProperty, Platform } = react_native);
const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles(() => {
  const obj = { divider: {}, dividerOuter: { marginLeft: 0, height: hasOwnProperty.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * hasOwnProperty.hairlineWidth }, dividerHasIcon: { marginLeft: 56 } };
  ({ marginLeft: 0, height: hasOwnProperty.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: -1 * hasOwnProperty.hairlineWidth });
  return obj;
});
const DIVIDER_COLORS = { [LIGHT]: nativeDefault.unsafe_rawColors.BLACK, [ASH]: nativeDefault.unsafe_rawColors.WHITE, [DARK]: nativeDefault.unsafe_rawColors.WHITE, [ONYX]: nativeDefault.unsafe_rawColors.WHITE };
({ LIGHT, ASH, DARK, ONYX } = ThemeTypes);
const result = size.fileFinishedImporting("design/void/Form/native/FormDivider.tsx");

export default function Divider(arg0) {
  let primaryColor;
  let theme;
  let tmp2Result;
  let flag = arg0.outer;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg0.iconPush;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const style = arg0.style;
  const tmp = closure_7();
  const obj = native;
  const themeContext = obj.useThemeContext();
  ({ theme, primaryColor } = themeContext);
  const obj2 = useProfileThemeValues;
  const profileThemeValues = obj2.useProfileThemeValues(theme);
  let tmp7 = null;
  const tmp6 = null != (flag ? tmp.dividerOuter : tmp.divider).backgroundColor && null != primaryColor && null != profileThemeValues;
  if (tmp6) {
    const obj3 = { backgroundColor: tmp2Result.hexOpacityToRgba(obj[theme], profileThemeValues.dividerOpacity) };
    tmp7 = obj3;
    tmp2Result = ColorUtils;
  }
  let tmp10Result = null;
  if (!react.useContext(RedesignCompat.RedesignCompatContext)) {
    const items = [flag ? tmp.dividerOuter : tmp.divider, , , ];
    const tmp10 = jsx;
    const tmp11 = React3;
    if (flag2) {
      flag2 = tmp.dividerHasIcon;
    }
    const obj4 = { style: items };
    items[1] = flag2;
    items[2] = style;
    items[3] = tmp7;
    tmp10Result = tmp10(tmp11, obj4);
  }
  return tmp10Result;
};
export { DIVIDER_COLORS };
