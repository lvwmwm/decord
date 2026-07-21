// Module ID: 5777
// Function ID: 49425
// Name: BaseTextField
// Dependencies: []

// Module 5777 (BaseTextField)
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const forwardRefResult = importAllResult.forwardRef((size) => {
  let autoComplete;
  let focusProps;
  let isFocused;
  let keyboardType;
  let secureTextEntry;
  let obj = arg1(dependencyMap[4]);
  obj = { size: size.size, isRound: size.isRound, hasLeadingIcon: null != size.leadingIcon, isRefreshEnabled: importDefault(dependencyMap[3])("InputFieldContainer") };
  let tmp2 = null;
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = arg1(dependencyMap[5]);
  const focus = obj2.useFocus();
  ({ focusProps, isFocused } = focus);
  if (size.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = size);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    obj = {};
    let str = "off";
    if (!obj5.isAndroid()) {
      str = autoComplete;
    }
    obj.autoComplete = str;
    const obj5 = arg1(dependencyMap[2]);
    const tmp9 = !arg1(dependencyMap[2]).isAndroid();
    let tmp10 = !tmp9;
    if (tmp9) {
      tmp10 = secureTextEntry;
    }
    obj.secureTextEntry = tmp10;
    const obj6 = arg1(dependencyMap[2]);
    let str2 = "visible-password";
    if (!obj7.isAndroid()) {
      str2 = keyboardType;
    }
    obj.keyboardType = str2;
    tmp2 = obj;
    const obj7 = arg1(dependencyMap[2]);
  }
  const obj1 = {};
  const merged = Object.assign(size);
  obj1["isFocused"] = isFocused;
  const items = [size.leading, , ];
  obj2 = {};
  const merged1 = Object.assign(tmp2);
  const tmp = importDefault(dependencyMap[3])("InputFieldContainer");
  const merged2 = Object.assign(arg1(dependencyMap[7]).mergeProps(size, focusProps));
  obj2["ref"] = arg1;
  const items1 = [, , ];
  ({ padding: arr2[0], text: arr2[1] } = inputStyles);
  items1[2] = size.inputStyle;
  obj2["style"] = items1;
  obj2["placeholderTextColor"] = inputStyles.placeholderText.color;
  items[1] = callback(arg1(dependencyMap[6]).NativeTextInput, obj2);
  items[2] = size.trailing;
  obj1["children"] = items;
  return callback2(arg1(dependencyMap[4]).InputFieldContainer, obj1);
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = forwardRefResult;
