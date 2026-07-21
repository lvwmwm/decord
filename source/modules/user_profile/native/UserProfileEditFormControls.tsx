// Module ID: 13468
// Function ID: 102242
// Name: FormControlText
// Dependencies: []
// Exports: UserProfileEditFormButton, UserProfileEditFormSwitch

// Module 13468 (FormControlText)
function FormControlText(children) {
  const tmp = callback4();
  return callback2(arg1(dependencyMap[6]).Text, { style: callback4().formControlText, children: children.text });
}
function FormControlSubtext(text) {
  text = text.text;
  let tmp2 = null;
  if (null != text) {
    const obj = { hasMaxConnections: 0.0392156862745098, isBoostOnlySubscription: "OPACITY_44", style: tmp.formControlText, children: text };
    tmp2 = callback2(arg1(dependencyMap[6]).Text, obj);
  }
  return tmp2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
({ Pressable: closure_4, View: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG, borderRadius: importDefault(dependencyMap[5]).radii.md };
obj.button = obj;
obj.buttonTextContainer = { isArray: null, diversity: null, string: null };
obj.formControlText = {};
let closure_8 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

export const UserProfileEditFormButton = function UserProfileEditFormButton(loading) {
  let accessibilityValue;
  let buttonSubtext;
  let buttonText;
  let disabled;
  let label;
  let labelTrailing;
  let leading;
  let onPress;
  let trailing;
  ({ label, disabled } = loading);
  ({ labelTrailing, buttonText, buttonSubtext, onPress, leading, trailing, accessibilityValue } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = loading.hideArrow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = callback4();
  let obj = { label, labelTrailing };
  obj = { onPress, style: tmp.button, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue };
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityHint = intl.string(arg1(dependencyMap[9]).t.4lAcxv);
  obj = { disabled, busy: flag };
  obj.accessibilityState = obj;
  obj.disabled = disabled;
  const items = [leading, , , ];
  const obj1 = { style: tmp.buttonTextContainer };
  const items1 = [callback2(FormControlText, { text: buttonText }), callback2(FormControlSubtext, { text: buttonSubtext })];
  obj1.children = items1;
  items[1] = callback3(closure_5, obj1);
  items[2] = trailing;
  let tmp4 = !flag2;
  if (tmp4) {
    tmp4 = callback2(arg1(dependencyMap[10]).TableRowArrow, {});
  }
  items[3] = tmp4;
  obj.children = items;
  obj.children = callback3(arg1(dependencyMap[8]).PressableHighlight, obj);
  return callback2(arg1(dependencyMap[7]).Input, obj);
};
export const UserProfileEditFormSwitch = function UserProfileEditFormSwitch(arg0) {
  let accessibilityHint;
  let accessibilityLabel;
  let disabled;
  let label;
  let subLabel;
  let value;
  ({ subLabel, value } = arg0);
  const arg1 = value;
  ({ onValueChange: closure_1, accessibilityLabel, disabled } = arg0);
  ({ label, accessibilityHint } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let callback;
  function handleOnPress() {
    let tmp;
    if (null != callback) {
      tmp = callback(!value);
    }
    return tmp;
  }
  let obj = arg1(dependencyMap[11]);
  const isAndroidResult = obj.isAndroid();
  const tmp3 = callback(React.useState(value), 2);
  callback = tmp3[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback2(value);
  }, items);
  if (isAndroidResult) {
    let PressableHighlight = arg1(dependencyMap[8]).PressableHighlight;
  } else {
    PressableHighlight = closure_4;
  }
  obj = { label };
  obj = {};
  let tmp9;
  if (isAndroidResult) {
    tmp9 = handleOnPress;
  }
  obj.onPress = tmp9;
  obj.onAccessibilityTap = function onAccessibilityTap() {
    callback2(!value);
    const timerId = setTimeout(() => {
      if (null != callback) {
        callback(!closure_0);
      }
    });
  };
  obj.style = callback4().button;
  obj.accessibilityRole = "switch";
  let tmp10 = subLabel;
  if (null != accessibilityLabel) {
    tmp10 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp10;
  obj.accessibilityHint = accessibilityHint;
  const obj1 = { disabled, checked: tmp3[0] };
  obj.accessibilityState = obj1;
  obj.disabled = disabled;
  const items1 = [callback2(FormControlText, { text: subLabel }), ];
  const obj2 = { aria-hidden: true, value, onValueChange: handleOnPress, disabled };
  items1[1] = callback2(arg1(dependencyMap[12]).FormSwitch, obj2);
  obj.children = items1;
  obj.children = closure_7(PressableHighlight, obj);
  return callback2(arg1(dependencyMap[7]).Input, obj);
};
