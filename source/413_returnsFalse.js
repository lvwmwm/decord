// Module ID: 413
// Function ID: 5828
// Name: returnsFalse
// Dependencies: [57, 29, 31, 33, 325, 414]
// Exports: default

// Module 413 (returnsFalse)
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import "result";
import result from "result";
import { jsx } from "jsxProd";

let closure_10;
let closure_8;
let closure_9;
const require = arg1;
let closure_3 = ["ref"];
let closure_4 = ["disabled", "ios_backgroundColor", "onChange", "onValueChange", "style", "thumbColor", "trackColor", "value"];
let closure_5 = ["onTintColor", "tintColor"];
({ useLayoutEffect: closure_8, useRef: closure_9, useState: closure_10 } = result);
function returnsFalse() {
  return false;
}
function returnsTrue() {
  return true;
}

export default function Switch(ref) {
  let disabled;
  let importDefault;
  let ios_backgroundColor;
  let onTintColor;
  let require;
  let style;
  let thumbColor;
  let tintColor;
  let trackColor;
  let value;
  const tmp = callback2(ref, closure_3);
  ({ disabled, ios_backgroundColor, onChange: require, onValueChange: importDefault, trackColor, value } = tmp);
  const dependencyMap = value;
  ({ style, thumbColor } = tmp);
  let tmp2 = callback2(tmp, first);
  let _false;
  if (null != trackColor) {
    _false = trackColor.false;
  }
  let _true;
  if (null != trackColor) {
    _true = trackColor.true;
  }
  const tmp5 = callback4(null);
  closure_3 = tmp5;
  const tmp7 = callback(callback5({ value: null }), 2);
  first = tmp7[0];
  let closure_5 = tmp7[1];
  const items = [value, first];
  callback3(() => {
    let tmp2 = null != first.value;
    if (tmp2) {
      tmp2 = first.value !== tmp;
    }
    if (tmp2) {
      const current = tmp5.current;
      let setNativeProps;
      if (null != current) {
        setNativeProps = current.setNativeProps;
      }
      tmp2 = null != setNativeProps;
    }
    if (tmp2) {
      const Commands = outer1_0(value[5]).Commands;
      Commands.setNativeValue(tmp5.current, tmp);
    }
  }, items);
  ({ onTintColor, tintColor } = tmp2);
  const tmp10 = callback2(tmp2, closure_5);
  const accessibilityState = tmp10.accessibilityState;
  if (null == disabled) {
    disabled = undefined;
    if (null != accessibilityState) {
      disabled = accessibilityState.disabled;
    }
  }
  let obj = {};
  let disabled1;
  if (null != accessibilityState) {
    disabled1 = accessibilityState.disabled;
  }
  let merged = accessibilityState;
  if (disabled !== disabled1) {
    const _Object = Object;
    obj = { disabled };
    merged = Object.assign({}, accessibilityState, obj);
  }
  obj.accessibilityState = merged;
  obj.enabled = true !== disabled;
  obj.on = true === value;
  obj.style = style;
  obj.thumbTintColor = thumbColor;
  obj.trackColorForFalse = _false;
  obj.trackColorForTrue = _true;
  if (true === value) {
    _false = _true;
  }
  obj.trackTintColor = _false;
  obj = {};
  const accessibilityRole = tmp.accessibilityRole;
  let str = "switch";
  const tmp16 = jsx;
  const tmp6 = importDefault(325)(tmp5, ref.ref);
  if (null != accessibilityRole) {
    str = accessibilityRole;
  }
  obj.accessibilityRole = str;
  obj.onChange = function handleChange(nativeEvent) {
    if (null != callback) {
      callback(nativeEvent);
    }
    if (null != callback2) {
      callback2(nativeEvent.nativeEvent.value);
    }
    callback3({ value: nativeEvent.nativeEvent.value });
  };
  obj.onResponderTerminationRequest = returnsFalse;
  obj.onStartShouldSetResponder = returnsTrue;
  obj.ref = tmp6;
  return tmp16(importDefault(414), Object.assign({}, tmp10, obj, obj));
};
