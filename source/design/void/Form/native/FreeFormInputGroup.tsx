// Module ID: 9039
// Function ID: 71088
// Dependencies: [31, 27, 33, 4130, 477, 5164, 7574, 1273, 9040, 9041, 9043, 4126, 2]

// Module 9039
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 } });
const forwardRefResult = importAllResult.forwardRef((accessibilityLabel) => {
  let clearButtonVisibility;
  let enableAndroidSanitizedInputWorkaround;
  let error;
  let hint;
  let keyboardType;
  let label;
  let onChangeText;
  let placeholder;
  let secureTextEntry;
  let style;
  let value;
  ({ style, label, error, value, hint, enableAndroidSanitizedInputWorkaround } = accessibilityLabel);
  if (enableAndroidSanitizedInputWorkaround === undefined) {
    enableAndroidSanitizedInputWorkaround = false;
  }
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  let obj = { style: 0, label: 0, error: 0, value: 0, hint: 0, textStyle: 0, enableAndroidSanitizedInputWorkaround: 0, secureTextEntry: 0, keyboardType: 0, accessibilityLabel: 0 };
  ({ secureTextEntry, keyboardType } = accessibilityLabel);
  Object.setPrototypeOf(null);
  const merged = Object.assign(accessibilityLabel, obj);
  const tmp3 = callback2();
  let isAndroidResult = enableAndroidSanitizedInputWorkaround;
  if (enableAndroidSanitizedInputWorkaround) {
    let obj1 = require(477) /* set */;
    isAndroidResult = obj1.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = secureTextEntry;
  }
  if (!enableAndroidSanitizedInputWorkaround) {
    let str = keyboardType;
  } else {
    let obj2 = require(477) /* set */;
    str = "visible-password";
  }
  const context = importAllResult.useContext(require(5164) /* context */.RedesignCompatContext);
  const id = importAllResult.useId();
  if (context) {
    ({ placeholder, onChangeText, clearButtonVisibility } = merged);
    obj = { containerStyle: style, value, label, errorMessage: error, description: hint, placeholder, onChange: onChangeText, isClearable: clearButtonVisibility !== require(1273) /* Button */.ClearButtonVisibility.WITH_CONTENT, keyboardType: str, secureTextEntry: isAndroidResult, autoCapitalize: merged.autoCapitalize };
    return callback(require(7574) /* TextInput */.TextInput, obj);
  } else {
    obj = { style };
    let tmp13 = null;
    if (null != label) {
      obj1 = { style: tmp3.label, nativeID: id, children: label };
      tmp13 = callback(importDefault(9040), obj1);
    }
    const items = [tmp13, , , ];
    obj2 = {};
    const merged1 = Object.assign(merged);
    if (null == accessibilityLabel) {
      if (null == label) {
        const tmp26 = label;
      } else {
        const obj7 = require(477) /* set */;
      }
      accessibilityLabel = tmp26;
    }
    obj2["accessibilityLabel"] = accessibilityLabel;
    obj2["accessibilityLabelledBy"] = id;
    obj2["error"] = null != error;
    obj2["ref"] = arg1;
    obj2["value"] = value;
    obj2["secureTextEntry"] = isAndroidResult;
    obj2["keyboardType"] = str;
    const items1 = [tmp3.input, accessibilityLabel.textStyle];
    obj2["style"] = items1;
    items[1] = callback(importDefault(9041), obj2);
    let tmp28 = null;
    if (null != error) {
      const obj3 = { style: tmp3.error, children: error };
      tmp28 = callback(importDefault(9043), obj3);
    }
    items[2] = tmp28;
    let tmp32 = null;
    if (null != hint) {
      const obj4 = { style: tmp3.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
      tmp32 = callback(require(4126) /* Text */.Text, obj4);
    }
    items[3] = tmp32;
    obj.children = items;
    return closure_6(View, obj);
  }
});
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FreeFormInputGroup.tsx");

export default forwardRefResult;
