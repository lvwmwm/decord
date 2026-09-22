// Module ID: 6849
// Function ID: 6850
// Name: FreeFormInputGroup
// Dependencies: [19, 17, 21, 4757, 1364, 5905, 6850, 1177, 7183, 7184, 7186, 4753, 2]

// Module 6849 (FreeFormInputGroup)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import RedesignCompat from "RedesignCompat" /* 5905 */;
import FreeFormLabelDefault from "FreeFormLabel" /* 7183 */;
import FreeFormTextInputDefault from "FreeFormTextInput" /* 7184 */;
import FreeFormErrorLabelDefault from "FreeFormErrorLabel" /* 7186 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4757);
let closure_7 = createStyles.createStyles({ label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormInputGroup.tsx");

export default noop.forwardRef((accessibilityLabel, ref) => {
  ({ style, label, error, value, hint, enableAndroidSanitizedInputWorkaround } = accessibilityLabel);
  if (enableAndroidSanitizedInputWorkaround === undefined) {
    enableAndroidSanitizedInputWorkaround = false;
  }
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ secureTextEntry, keyboardType } = accessibilityLabel);
  const merged = Object.assign(accessibilityLabel, Object.assign({ style: 0, label: 0, error: 0, value: 0, hint: 0, textStyle: 0, enableAndroidSanitizedInputWorkaround: 0, secureTextEntry: 0, keyboardType: 0, accessibilityLabel: 0 }));
  const tmp2 = closure_7();
  let isAndroidResult = enableAndroidSanitizedInputWorkaround;
  if (enableAndroidSanitizedInputWorkaround) {
    isAndroidResult = PlatformUtils.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = secureTextEntry;
  }
  if (!enableAndroidSanitizedInputWorkaround) {
    let str = keyboardType;
  } else {
    str = "visible-password";
  }
  const context = noop.useContext(RedesignCompat.RedesignCompatContext);
  const id = noop.useId();
  if (context) {
    ({ placeholder, onChangeText, clearButtonVisibility } = merged);
    const obj3 = { containerStyle: style, value, label, errorMessage: error, description: hint, placeholder, onChange: onChangeText, clearable: clearButtonVisibility !== tmp8(1177).ClearButtonVisibility.WITH_CONTENT, keyboardType: str, secureTextEntry: isAndroidResult, autoCapitalize: merged.autoCapitalize };
    return hasOwnProperty(tmp8(6850).TextInput, obj3);
  } else {
    const obj4 = { style, children: null };
    let tmp14 = null;
    if (null != label) {
      const obj5 = { style: tmp2.label, nativeID: id, children: label };
      tmp14 = hasOwnProperty(FreeFormLabelDefault, obj5);
    }
    const items = [tmp14, , , ];
    const obj6 = {};
    const merged1 = Object.assign(merged);
    if (accessibilityLabel == null) {
      if (null == label) {
        const tmp23 = label;
      } else {
        const tmp8Result = tmp8(1364);
      }
      accessibilityLabel = tmp23;
    }
    obj6.accessibilityLabel = accessibilityLabel;
    obj6.accessibilityLabelledBy = id;
    obj6.error = null != error;
    obj6.ref = ref;
    obj6.value = value;
    obj6.secureTextEntry = isAndroidResult;
    obj6.keyboardType = str;
    const items1 = [tmp2.input, accessibilityLabel.textStyle];
    obj6.style = items1;
    items[1] = hasOwnProperty(FreeFormTextInputDefault, obj6);
    let tmp17Result = null;
    if (null != error) {
      const obj7 = { style: tmp2.error, children: error };
      tmp17Result = tmp17(FreeFormErrorLabelDefault, obj7);
    }
    items[2] = tmp17Result;
    let tmp17Result2 = null;
    if (null != hint) {
      const obj8 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
      tmp17Result2 = tmp17(tmp8(4753).Text, obj8);
    }
    items[3] = tmp17Result2;
    obj4.children = items;
    return timestampProducer(View, obj4);
  }
});
