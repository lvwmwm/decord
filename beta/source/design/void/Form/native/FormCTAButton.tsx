// Module ID: 8058
// Function ID: 8059
// Name: FormCTAButton
// Dependencies: [19, 17, 1181, 1074, 21, 4836, 5836, 576, 1177, 5998, 8055, 2]

// Module 8058 (FormCTAButton)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import RedesignCompat from "RedesignCompat" /* 5998 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import FormConstants from "FormConstants" /* 1181 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles_mod from "TextStyles" /* 5836 */;
import size from "module_2" /* 2 */;

let Platform;
let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
class FormCTAButton {
  constructor(color) {
    let onPress;
    let testID;
    let textWarning;
    let tmp16;
    let BRAND = color.color;
    if (undefined === BRAND) {
      BRAND = obj5.BRAND;
    }
    const fontSize = color.fontSize;
    let num = 16;
    const label = color.label;
    if (undefined !== fontSize) {
      num = fontSize;
    }
    const alignLeft = color.alignLeft;
    let alignLeft2 = undefined !== alignLeft && alignLeft;
    const disabled = color.disabled;
    let tmp2 = undefined !== disabled && disabled;
    const loading = color.loading;
    ({ testID, onPress } = color);
    const style = color.style;
    const tmp4 = closure_9();
    const items = [tmp4.text, , , ];
    const LegacyText = native.LegacyText;
    if (obj5.BRAND === BRAND) {
      textWarning = tmp4.textBrand;
    } else if (obj5.DANGER === BRAND) {
      textWarning = tmp4.textDanger;
    } else if (obj5.WARNING === BRAND) {
      textWarning = tmp4.textWarning;
    }
    items[1] = textWarning;
    items[2] = { fontSize: num };
    if (alignLeft2) {
      alignLeft2 = tmp4.alignLeft;
    }
    items[3] = alignLeft2;
    let tmp5Result = tmp5(LegacyText, { style: items, children: label });
    if (undefined !== loading && loading) {
      const obj = { color: BRAND };
      tmp5Result = tmp5(_false, obj);
    }
    const obj2 = { style: null, children: null };
    if (react.useContext(RedesignCompat.RedesignCompatContext)) {
      obj2.style = tmp4.rowButton;
      const RowButton = tmp6(8055).RowButton;
      if (!tmp2) {
        tmp2 = tmp3;
      }
      obj2.children = <RowButton label={tmp5Result} onPress={onPress} arrow={false} disabled={tmp2} testID={testID} />;
      tmp16 = obj2;
    } else {
      const items1 = [tmp4.sectionBody, tmp2 && tmp4.disabled, style];
      obj2.style = items1;
      let tmp13 = tmp2;
      if (!tmp2) {
        tmp13 = tmp3;
      }
      obj2.children = <tmp12 testID={testID} accessibilityRole="button" onPress={onPress} style={tmp4.button} disabled={tmp13} android_ripple={metroImportDefault(metroRequire)}>{tmp5Result}</tmp12>;
      tmp16 = obj2;
    }
    return <tmp11 {...tmp16} />;
  }
}
({ ActivityIndicator: c3, Pressable: closure_4, Platform, StyleSheet, View: hasOwnProperty } = react_native);
({ ANDROID_FOREGROUND_RIPPLE: metroRequire, getThemedRippleConfig: metroImportDefault } = FormConstants);
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { rowButton: { paddingHorizontal: 16 }, sectionBody: {}, button: { minHeight: 44, justifyContent: "center" }, text: { lineHeight: 44, paddingHorizontal: 17, textAlign: "left" }, textBrand: obj2, textDanger: obj3, textWarning: obj4, alignLeft: { textAlign: "left" }, disabled: { opacity: 0.5 } };
obj2 = {};
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.CONTROL_BRAND_FOREGROUND, 16));
obj3 = {};
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, 16));
obj4 = {};
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.STATUS_WARNING, 16));
const React4 = createStyles(obj);
const obj5 = { BRAND: "brand", DANGER: "danger", WARNING: "warning" };
FormCTAButton.Colors = obj5;
const result = size.fileFinishedImporting("design/void/Form/native/FormCTAButton.tsx");

export default FormCTAButton;
export const FormCTAButtonColors = obj5;
