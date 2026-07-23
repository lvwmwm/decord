// Module ID: 7501
// Function ID: 60161
// Name: getCTAButtonColor
// Dependencies: [31, 27, 1277, 653, 33, 4130, 5052, 689, 1273, 5164, 7498, 2]

// Module 7501 (getCTAButtonColor)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import semanticColor from "semanticColor";
import { Fonts } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import importDefaultResult2 from "createTextStyle";

let Platform;
let StyleSheet;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function getCTAButtonColor(BRAND, textBrand) {
  if (obj3.BRAND === BRAND) {
    return textBrand.textBrand;
  } else if (obj3.DANGER === BRAND) {
    return textBrand.textDanger;
  } else {
    return obj3.WARNING === BRAND ? textBrand.textWarning : undefined;
  }
}
class FormCTAButton {
  constructor(arg0) {
    BRAND = global.color;
    if (undefined === BRAND) {
      tmp = c10;
      BRAND = c10.BRAND;
    }
    fontSize = global.fontSize;
    num = 16;
    if (undefined !== fontSize) {
      num = fontSize;
    }
    alignLeft = global.alignLeft;
    alignLeft2 = undefined !== alignLeft && alignLeft;
    disabled = global.disabled;
    tmp2 = undefined !== disabled && disabled;
    loading = global.loading;
    tmp3 = undefined !== loading && loading;
    ({ testID, onPress } = global);
    tmp4 = c9();
    tmp5 = jsx;
    obj = {};
    items = [, , , ];
    items[0] = tmp4.text;
    items[1] = getCTAButtonColor(BRAND, tmp4);
    obj = {};
    obj.fontSize = num;
    items[2] = obj;
    if (alignLeft2) {
      alignLeft2 = tmp4.alignLeft;
    }
    items[3] = alignLeft2;
    obj.style = items;
    obj.children = global.label;
    tmp5Result = tmp5(require("Button").LegacyText, obj);
    if (tmp3) {
      tmp7 = jsx;
      tmp8 = ActivityIndicator;
      obj1 = {};
      obj1.color = BRAND;
      tmp5Result = jsx(ActivityIndicator, obj1);
    }
    obj2 = {};
    tmp9 = jsx;
    tmp10 = View;
    if (result.useContext(require("context").RedesignCompatContext)) {
      obj2.style = tmp4.rowButton;
      tmp18 = closure_0;
      tmp19 = closure_1;
      num2 = 10;
      tmp17 = jsx;
      obj3 = {};
      obj3.label = tmp5Result;
      obj3.onPress = onPress;
      flag = false;
      obj3.arrow = false;
      if (!tmp2) {
        tmp2 = tmp3;
      }
      obj3.disabled = tmp2;
      obj3.testID = testID;
      obj2.children = tmp17(require("RowButtonWrapper").RowButton, obj3);
      tmp16 = obj2;
    } else {
      items1 = [, , ];
      items1[0] = tmp4.sectionBody;
      disabled2 = tmp2;
      if (tmp2) {
        disabled2 = tmp4.disabled;
      }
      items1[1] = disabled2;
      items1[2] = global.style;
      obj2.style = items1;
      obj4 = {};
      obj4.testID = testID;
      str = "button";
      obj4.accessibilityRole = "button";
      obj4.onPress = onPress;
      obj4.style = tmp4.button;
      tmp13 = tmp2;
      tmp11 = jsx;
      tmp12 = Pressable;
      if (!tmp2) {
        tmp13 = tmp3;
      }
      obj4.disabled = tmp13;
      tmp14 = getThemedRippleConfig;
      tmp15 = ANDROID_FOREGROUND_RIPPLE;
      obj4.android_ripple = getThemedRippleConfig(ANDROID_FOREGROUND_RIPPLE);
      obj4.children = tmp5Result;
      obj2.children = tmp11(tmp12, obj4);
      tmp16 = obj2;
    }
    return tmp9(tmp10, tmp16);
  }
}
({ ActivityIndicator: closure_3, Pressable: closure_4, Platform, StyleSheet, View: closure_5 } = get_ActivityIndicator);
({ ANDROID_FOREGROUND_RIPPLE: closure_6, getThemedRippleConfig: closure_7 } = semanticColor);
_createForOfIteratorHelperLoose = { rowButton: { paddingHorizontal: 16 }, sectionBody: {}, button: { minHeight: 44, justifyContent: "center" }, text: { lineHeight: 44, paddingHorizontal: 17, textAlign: "left" } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND, 16));
_createForOfIteratorHelperLoose.textBrand = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL, 16));
_createForOfIteratorHelperLoose.textDanger = obj1;
let obj2 = {};
const merged2 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING, 16));
_createForOfIteratorHelperLoose.textWarning = obj2;
_createForOfIteratorHelperLoose.alignLeft = { textAlign: "left" };
_createForOfIteratorHelperLoose.disabled = { opacity: 0.5 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { BRAND: "brand", DANGER: "danger", WARNING: "warning" };
FormCTAButton.Colors = obj3;
const result = require("semanticColor").fileFinishedImporting("design/void/Form/native/FormCTAButton.tsx");

export default FormCTAButton;
export const FormCTAButtonColors = obj3;
