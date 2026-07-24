// Module ID: 7191
// Function ID: 57921
// Name: Divider
// Dependencies: [31, 27, 653, 33, 4130, 689, 1324, 3842, 5484, 3974, 5164, 2]
// Exports: default

// Module 7191 (Divider)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let DARK;
let DARKER;
let LIGHT;
let MIDNIGHT;
let Platform;
let closure_4;
let closure_5;
const require = arg1;
({ View: closure_4, StyleSheet: closure_5, Platform } = get_ActivityIndicator);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = { divider: {} };
  obj = { marginLeft: 0, height: closure_5.hairlineWidth, backgroundColor: importDefault(689).colors.BORDER_SUBTLE, marginTop: -1 * closure_5.hairlineWidth };
  obj.dividerOuter = obj;
  obj.dividerHasIcon = { marginLeft: 56 };
  return obj;
});
_createForOfIteratorHelperLoose = { [LIGHT]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BLACK, [DARK]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, [DARKER]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE, [MIDNIGHT]: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
({ LIGHT, DARK, DARKER, MIDNIGHT } = require("ME").ThemeTypes);
const result = require("ME").fileFinishedImporting("design/void/Form/native/FormDivider.tsx");

export default function Divider(outer) {
  let flag = outer.outer;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = outer.iconPush;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback(importDefault(1324)("FormDivider"));
  let obj = require(3842) /* ManaContext */;
  const themeContext = obj.useThemeContext();
  const theme = themeContext.theme;
  const profileThemeValues = require(5484) /* useProfileThemeValues */.useProfileThemeValues(theme);
  let tmp5 = null;
  if (tmp4) {
    obj = { backgroundColor: require(3974) /* hexToRgb */.hexOpacityToRgba(_createForOfIteratorHelperLoose[theme], profileThemeValues.dividerOpacity) };
    tmp5 = obj;
    const obj4 = require(3974) /* hexToRgb */;
  }
  let tmp10Result = null;
  if (!React.useContext(require(5164) /* context */.RedesignCompatContext)) {
    obj = {};
    const items = [flag ? tmp.dividerOuter : tmp.divider, , , ];
    if (flag2) {
      flag2 = tmp.dividerHasIcon;
    }
    items[1] = flag2;
    items[2] = outer.style;
    items[3] = tmp5;
    obj.style = items;
    tmp10Result = <closure_4 />;
    const tmp10 = jsx;
    const tmp11 = closure_4;
  }
  return tmp10Result;
};
export const DIVIDER_COLORS = _createForOfIteratorHelperLoose;
