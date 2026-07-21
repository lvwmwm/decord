// Module ID: 413
// Function ID: 5828
// Name: returnsFalse
// Dependencies: []
// Exports: default

// Module 413 (returnsFalse)
let closure_3 = [null];
let closure_4 = [true, true, true, true, true, true, true, true];
let closure_5 = [];
let closure_6 = importDefault(dependencyMap[0]);
let closure_7 = importDefault(dependencyMap[1]);
importAll(dependencyMap[2]);
({ useLayoutEffect: closure_8, useRef: closure_9, useState: closure_10 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
function returnsFalse() {
  return false;
}
function returnsTrue() {
  return true;
}

export default function Switch(ref) {
  let disabled;
  let ios_backgroundColor;
  let onTintColor;
  let style;
  let thumbColor;
  let tintColor;
  let trackColor;
  let value;
  const tmp = callback2(ref, closure_3);
  ({ disabled, ios_backgroundColor, onChange: closure_0, onValueChange: closure_1, trackColor, value } = tmp);
  const dependencyMap = value;
  ({ style, thumbColor } = tmp);
  const tmp2 = callback2(tmp, closure_4);
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
  const first = tmp7[0];
  closure_4 = first;
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
      const Commands = callback(value[5]).Commands;
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
  const tmp6 = importDefault(dependencyMap[4])(tmp5, ref.ref);
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
  return tmp16(importDefault(dependencyMap[5]), Object.assign({}, tmp10, obj, obj));
};
