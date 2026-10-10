// Module ID: 6284
// Function ID: 6285
// Name: FreeFormInputGroup
// Dependencies: [19, 17, 21, 5092, 1382, 6263, 6285, 1200, 6618, 6619, 6621, 5088, 2]
// Exports: default

// Module 6284 (FreeFormInputGroup)
import react_native from "react-native" /* 17 */;
import native from "native" /* 1200 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import RedesignCompat from "RedesignCompat" /* 6263 */;
import FreeFormLabelDefault from "FreeFormLabel" /* 6618 */;
import FreeFormTextInputDefault from "FreeFormTextInput" /* 6619 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 } });
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormInputGroup.tsx");

export default (textStyle) => {
  let clearButtonVisibility;
  let enableAndroidSanitizedInputWorkaround;
  let error;
  let hint;
  let items;
  let items1;
  let keyboardType;
  let label;
  let onChangeText;
  let placeholder;
  let ref;
  let secureTextEntry;
  let str;
  let style;
  let value;
  ({ style, label, error, value, hint, enableAndroidSanitizedInputWorkaround } = textStyle);
  textStyle = textStyle.textStyle;
  if (enableAndroidSanitizedInputWorkaround === undefined) {
    enableAndroidSanitizedInputWorkaround = false;
  }
  let accessibilityLabel = textStyle.accessibilityLabel;
  ({ secureTextEntry, keyboardType, ref } = textStyle);
  const merged = Object.assign(textStyle, Object.assign({ style: 0, label: 0, error: 0, value: 0, hint: 0, textStyle: 0, enableAndroidSanitizedInputWorkaround: 0, secureTextEntry: 0, keyboardType: 0, accessibilityLabel: 0, ref: 0 }));
  const tmp2 = closure_7();
  let isAndroidResult = enableAndroidSanitizedInputWorkaround;
  if (isAndroidResult) {
    const obj = PlatformUtils;
    isAndroidResult = obj.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = secureTextEntry;
  }
  if (!enableAndroidSanitizedInputWorkaround) {
    str = keyboardType;
  } else {
    str = "visible-password";
    PlatformUtils;
  }
  const context = react.useContext(RedesignCompat.RedesignCompatContext);
  const id = react.useId();
  if (context) {
    ({ placeholder, onChangeText, clearButtonVisibility } = merged);
    const obj3 = { containerStyle: style, value, label, errorMessage: error, description: hint, placeholder, onChange: onChangeText, clearable: clearButtonVisibility !== native.ClearButtonVisibility.WITH_CONTENT, keyboardType: str, secureTextEntry: isAndroidResult, autoCapitalize: merged.autoCapitalize };
    const TextInput = tmp8(6285).TextInput;
    return hasOwnProperty(TextInput, obj3);
  } else {
    let tmp14 = null;
    const obj4 = { style, children: items };
    const tmp12 = metroRequire;
    const tmp13 = View;
    if (null != label) {
      const obj5 = { style: tmp2.label, nativeID: id, children: label };
      tmp14 = hasOwnProperty(FreeFormLabelDefault, obj5);
    }
    items = [tmp14, , , ];
    const obj6 = { accessibilityLabel, accessibilityLabelledBy: id, error: null != error, ref, value, secureTextEntry: isAndroidResult, keyboardType: str, style: items1 };
    const tmp19 = FreeFormTextInputDefault;
    const merged1 = Object.assign(merged);
    const tmp18 = importDefault;
    if (accessibilityLabel == null) {
      let tmp23;
      if (null == label) {
        tmp23 = label;
      } else {
        PlatformUtils;
      }
      accessibilityLabel = tmp23;
    }
    items1 = [tmp2.input, textStyle];
    items[1] = hasOwnProperty(tmp19, obj6);
    let tmp17Result = null;
    if (null != error) {
      const obj7 = { style: tmp2.error, children: error };
      tmp17Result = tmp17(tmp18(6621), obj7);
    }
    items[2] = tmp17Result;
    let tmp17Result2 = null;
    if (null != hint) {
      const obj8 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
      tmp17Result2 = tmp17(tmp8(5088).Text, obj8);
    }
    items[3] = tmp17Result2;
    return tmp12(tmp13, obj4);
  }
};
