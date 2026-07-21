// Module ID: 8992
// Function ID: 70819
// Dependencies: []

// Module 8992
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ label: { marginBottom: 8 }, input: {}, error: { marginBottom: 8 }, hint: { marginBottom: 8 } });
const obj2 = arg1(dependencyMap[3]);
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
  let obj = {};
  ({ secureTextEntry, keyboardType } = accessibilityLabel);
  Object.setPrototypeOf(null);
  const merged = Object.assign(accessibilityLabel, obj);
  const tmp3 = callback2();
  let isAndroidResult = enableAndroidSanitizedInputWorkaround;
  if (enableAndroidSanitizedInputWorkaround) {
    let obj1 = arg1(dependencyMap[4]);
    isAndroidResult = obj1.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = secureTextEntry;
  }
  if (!enableAndroidSanitizedInputWorkaround) {
    let str = keyboardType;
  } else {
    let obj2 = arg1(dependencyMap[4]);
    str = "visible-password";
  }
  const context = importAllResult.useContext(arg1(dependencyMap[5]).RedesignCompatContext);
  const id = importAllResult.useId();
  if (context) {
    ({ placeholder, onChangeText, clearButtonVisibility } = merged);
    obj = { containerStyle: style, value, label, errorMessage: error, description: hint, placeholder, onChange: onChangeText, isClearable: clearButtonVisibility !== arg1(dependencyMap[7]).ClearButtonVisibility.WITH_CONTENT, keyboardType: str, secureTextEntry: isAndroidResult, autoCapitalize: merged.autoCapitalize };
    return callback(arg1(dependencyMap[6]).TextInput, obj);
  } else {
    obj = { style };
    let tmp13 = null;
    if (null != label) {
      obj1 = { style: tmp3.label, nativeID: id, children: label };
      tmp13 = callback(importDefault(dependencyMap[8]), obj1);
    }
    const items = [tmp13, , , ];
    obj2 = {};
    const merged1 = Object.assign(merged);
    if (null == accessibilityLabel) {
      if (null == label) {
        const tmp26 = label;
      } else {
        const obj7 = arg1(dependencyMap[4]);
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
    items[1] = callback(importDefault(dependencyMap[9]), obj2);
    let tmp28 = null;
    if (null != error) {
      const obj3 = { style: tmp3.error, children: error };
      tmp28 = callback(importDefault(dependencyMap[10]), obj3);
    }
    items[2] = tmp28;
    let tmp32 = null;
    if (null != hint) {
      const obj4 = { style: tmp3.hint, children: hint };
      tmp32 = callback(arg1(dependencyMap[11]).Text, obj4);
    }
    items[3] = tmp32;
    obj.children = items;
    return closure_6(View, obj);
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("design/void/Form/native/FreeFormInputGroup.tsx");

export default forwardRefResult;
