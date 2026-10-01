// Module ID: 6032
// Function ID: 6033
// Name: useTextField
// Dependencies: [32, 19, 5275, 2]
// Exports: useTextField, useTextFieldState

// Module 6032 (useTextField)
import react_native from "react-native" /* 5275 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export const useTextFieldState = function useTextFieldState(onClear) {
  let first;
  let onChange;
  let value;
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let str = first;
  const useState = react.useState;
  if (first == null) {
    str = onClear.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp = _slicedToArray(useState(str), 2);
  let closure_2 = tmp[1];
  if (first == null) {
    first = tmp[0];
  }
  const items = [onChange];
  const tmp2 = first.length > 0;
  const callback = obj.useCallback((arg0) => {
    closure_2(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items);
  const items1 = [callback, onClear];
  const obj2 = {
    value: first,
    setTextValue: callback,
    clear: react.useCallback(() => {
      callback1("");
      if (onClear != null) {
        onClear();
      }
    }, items1),
    hasValue: tmp2
  };
  return obj2;
};
export const useTextField = function useTextField(onClear, ref) {
  let callback;
  let first;
  let obj3;
  let obj5;
  let onChange;
  let value;
  let obj = react;
  ref = react.useRef(null);
  const items = [ref, onClear.onClear];
  const obj2 = { onClear: callback };
  callback = react.useCallback(() => {
    const current = ref.current;
    const tmp = ref;
    if (current != null) {
      current.clear();
    }
    onClear = onClear.onClear;
    if (onClear != null) {
      onClear();
    }
    const obj = react_native;
    const result = obj.setAccessibilityFocus({ ref: tmp });
  }, items);
  const merged = Object.assign(onClear);
  onChange = undefined;
  let closure_2;
  let callback1;
  ({ value, onChange } = obj2);
  onClear = obj2.onClear;
  let str = first;
  const useState = react.useState;
  if (first == null) {
    str = obj2.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  const tmp4 = obj3(useState(str), 2);
  closure_2 = tmp4[1];
  if (first == null) {
    first = tmp4[0];
  }
  const items1 = [onChange];
  const tmp5 = first.length > 0;
  callback1 = obj.useCallback((arg0) => {
    closure_2(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items1);
  const items2 = [callback1, onClear];
  obj3 = {
    value: first,
    setTextValue: callback1,
    clear: obj.useCallback(() => {
      callback1("");
      if (onClear != null) {
        onClear();
      }
    }, items2),
    hasValue: tmp5
  };
  const items3 = [ref, obj3];
  const imperativeHandle = obj.useImperativeHandle(ref, () => {
    let obj = {
      blur() {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
      },
      focus() {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      },
      isFocused() {
        const current = ref.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        return true === isFocusedResult;
      },
      getText() {
        return obj3.value;
      },
      setText(text) {
        if ("" === text) {
          obj3.clear();
        } else {
          const current = ref.current;
          if (current != null) {
            const obj = { text };
            current.setNativeProps(obj);
          }
          obj3.setTextValue(text);
        }
      },
      measure(arg0) {
        const current = ref.current;
        if (current != null) {
          current.measure(arg0);
        }
      },
      measureInWindow(arg0) {
        const current = ref.current;
        if (current != null) {
          current.measureInWindow(arg0);
        }
      },
      measureLayout(arg0, arg1, arg2) {
        const current = ref.current;
        if (current != null) {
          current.measureLayout(arg0, arg1, arg2);
        }
      }
    };
    return obj;
  }, items3);
  const disabled = onClear.disabled;
  const obj4 = { innerRef: ref, state: obj3, inputProps: obj5 };
  obj5 = { onChange: undefined, onChangeText: obj3.setTextValue, editable: !(undefined !== disabled && disabled), focusable: !(undefined !== disabled && disabled) && onClear.focusable, "aria-disabled": undefined !== disabled && disabled };
  const merged1 = Object.assign(onClear);
  return obj4;
};
