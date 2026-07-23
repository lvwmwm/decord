// Module ID: 13589
// Function ID: 104431
// Name: FormControlText
// Dependencies: [57, 31, 27, 33, 4130, 689, 4126, 7505, 4660, 1212, 5171, 477, 5505, 2]
// Exports: UserProfileEditFormButton, UserProfileEditFormSwitch

// Module 13589 (FormControlText)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let require = arg1;
function FormControlText(text) {
  const obj = { variant: "text-sm/medium", color: "text-default", style: _createForOfIteratorHelperLoose().formControlText, children: text.text };
  return callback2(require(4126) /* Text */.Text, obj);
}
function FormControlSubtext(text) {
  text = text.text;
  let tmp2 = null;
  if (null != text) {
    const obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.formControlText, children: text };
    tmp2 = callback2(require(4126) /* Text */.Text, obj);
  }
  return tmp2;
}
({ Pressable: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexGrow: 1, flexShrink: 1, flexDirection: "row", alignItems: "center", gap: 12, padding: 12, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.button = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.buttonTextContainer = { flexGrow: 1, flexShrink: 1, flexDirection: "column" };
_createForOfIteratorHelperLoose.formControlText = { marginRight: "auto", flexShrink: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileEditFormControls.tsx");

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
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { label, labelTrailing };
  obj = { onPress, style: tmp.button, accessibilityRole: "button", accessibilityLabel: label, accessibilityValue };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t["4lAcxv"]);
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
    tmp4 = callback2(require(5171) /* TableRowArrow */.TableRowArrow, {});
  }
  items[3] = tmp4;
  obj.children = items;
  obj.children = callback3(require(4660) /* PressableBase */.PressableHighlight, obj);
  return callback2(require(7505) /* Input */.Input, obj);
};
export const UserProfileEditFormSwitch = function UserProfileEditFormSwitch(arg0) {
  let accessibilityHint;
  let accessibilityLabel;
  let dependencyMap;
  let disabled;
  let label;
  let subLabel;
  let value;
  ({ subLabel, value } = arg0);
  const require = value;
  ({ onValueChange: dependencyMap, accessibilityLabel, disabled } = arg0);
  ({ label, accessibilityHint } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let callback;
  function handleOnPress() {
    let tmp;
    if (null != callback) {
      tmp = callback(!closure_0);
    }
    return tmp;
  }
  let obj = require(477) /* set */;
  const isAndroidResult = obj.isAndroid();
  const tmp3 = callback(React.useState(value), 2);
  callback = tmp3[1];
  const items = [value];
  const effect = React.useEffect(() => {
    callback2(closure_0);
  }, items);
  if (isAndroidResult) {
    let PressableHighlight = require(4660) /* PressableBase */.PressableHighlight;
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
    callback2(!closure_0);
    const timerId = setTimeout(() => {
      if (null != outer1_1) {
        outer1_1(!outer1_0);
      }
    });
  };
  obj.style = _createForOfIteratorHelperLoose().button;
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
  const obj2 = { "aria-hidden": true, value, onValueChange: handleOnPress, disabled };
  items1[1] = callback2(require(5505) /* FormSwitch */.FormSwitch, obj2);
  obj.children = items1;
  obj.children = closure_7(PressableHighlight, obj);
  return callback2(require(7505) /* Input */.Input, obj);
};
