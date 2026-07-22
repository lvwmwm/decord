// Module ID: 7496
// Function ID: 60127
// Name: getCTAButtonColor
// Dependencies: []

// Module 7496 (getCTAButtonColor)
let Platform;
let StyleSheet;
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
      tmp = closure_10;
      BRAND = closure_10.BRAND;
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
    tmp4 = closure_9();
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
    tmp5Result = tmp5(arg1(dependencyMap[8]).LegacyText, obj);
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
    if (importAll.useContext(arg1(dependencyMap[9]).RedesignCompatContext)) {
      obj2.style = tmp4.rowButton;
      tmp18 = arg1;
      tmp19 = dependencyMap;
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
      obj2.children = tmp17(arg1(dependencyMap[10]).RowButton, obj3);
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
let closure_2 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_3, Pressable: closure_4, Platform, StyleSheet, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ ANDROID_FOREGROUND_RIPPLE: closure_6, getThemedRippleConfig: closure_7 } = arg1(dependencyMap[2]));
const Fonts = arg1(dependencyMap[3]).Fonts;
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = { rowButton: { paddingHorizontal: 16 }, sectionBody: {}, button: { flex: "custom_search_url", alignItems: "message" }, text: {} };
obj = {};
const tmp3 = arg1(dependencyMap[2]);
const merged = Object.assign(importDefault(dependencyMap[6])(Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[7]).colors.CONTROL_BRAND_FOREGROUND, 16));
obj.textBrand = obj;
const importDefaultResult = importDefault(dependencyMap[6]);
const obj1 = {};
const merged1 = Object.assign(importDefault(dependencyMap[6])(Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_CRITICAL, 16));
obj.textDanger = obj1;
const importDefaultResult1 = importDefault(dependencyMap[6]);
const obj2 = {};
const merged2 = Object.assign(importDefault(dependencyMap[6])(Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[7]).colors.STATUS_WARNING, 16));
obj.textWarning = obj2;
obj.alignLeft = { textAlign: "left" };
obj.disabled = { opacity: 0.5 };
let closure_9 = obj.createStyles(obj);
const obj3 = { BRAND: "brand", DANGER: "danger", WARNING: "warning" };
FormCTAButton.Colors = obj3;
const importDefaultResult2 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/void/Form/native/FormCTAButton.tsx");

export default FormCTAButton;
export const FormCTAButtonColors = obj3;
