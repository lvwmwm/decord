// Module ID: 5774
// Function ID: 49433
// Name: useTextFieldState
// Dependencies: [57, 31, 4539, 2]
// Exports: useTextField

// Module 5774 (useTextFieldState)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
function useTextFieldState(onClear) {
  let defaultValue;
  let onChange;
  let value;
  ({ value, defaultValue, onChange } = onClear);
  onClear = onClear.onClear;
  if (null != value) {
    defaultValue = value;
  }
  let str = "";
  if (null != defaultValue) {
    str = defaultValue;
  }
  const tmp2 = callback(callback.useState(str), 2);
  let first = tmp2[0];
  callback = tmp2[1];
  if (null != value) {
    first = value;
  }
  const items = [onChange];
  callback = callback.useCallback((arg0) => {
    callback(arg0);
    if (null != onChange) {
      onChange(arg0);
    }
  }, items);
  const items1 = [callback, onClear];
  const obj = {
    value: first,
    setTextValue: callback,
    clear: callback.useCallback(() => {
      callback("");
      if (null != onClear) {
        onClear();
      }
    }, items1),
    hasValue: first.length > 0
  };
  return obj;
}
let result = require("setAccessibilityFocus").fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export { useTextFieldState };
export const useTextField = function useTextField(onClear, arg1) {
  let closure_0 = onClear;
  const ref = React.useRef(null);
  const items = [ref, onClear.onClear];
  let obj = {};
  const callback = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.clear();
    }
    onClear = onClear.onClear;
    if (null != onClear) {
      onClear();
    }
    let obj = onClear(ref[2]);
    obj = { ref };
    const result = obj.setAccessibilityFocus(obj);
  }, items);
  const merged = Object.assign(onClear);
  obj["onClear"] = callback;
  const tmp4 = useTextFieldState(obj);
  let _slicedToArray = tmp4;
  const items1 = [ref, tmp4];
  const imperativeHandle = React.useImperativeHandle(arg1, () => ({
    blur() {
      const current = outer1_1.current;
      if (null != current) {
        current.blur();
      }
    },
    focus() {
      const current = outer1_1.current;
      if (null != current) {
        current.focus();
      }
    },
    isFocused() {
      const current = outer1_1.current;
      let isFocusedResult;
      if (null != current) {
        isFocusedResult = current.isFocused();
      }
      return true === isFocusedResult;
    },
    getText() {
      return outer1_2.value;
    },
    setText(text) {
      if ("" === text) {
        outer1_2.clear();
      } else {
        const current = outer1_1.current;
        if (null != current) {
          const obj = { text };
          current.setNativeProps(obj);
        }
        outer1_2.setTextValue(text);
      }
    },
    measure(arg0) {
      const current = outer1_1.current;
      if (null != current) {
        current.measure(arg0);
      }
    },
    measureInWindow(arg0) {
      const current = outer1_1.current;
      if (null != current) {
        current.measureInWindow(arg0);
      }
    },
    measureLayout(arg0, arg1, arg2) {
      const current = outer1_1.current;
      if (null != current) {
        current.measureLayout(arg0, arg1, arg2);
      }
    }
  }), items1);
  obj = { innerRef: ref, state: tmp4 };
  obj = {};
  const merged1 = Object.assign(onClear);
  obj["onChange"] = undefined;
  obj["onChangeText"] = tmp4.setTextValue;
  obj["editable"] = !onClear.isDisabled;
  obj["focusable"] = !onClear.isDisabled && onClear.focusable;
  obj["aria-disabled"] = onClear.isDisabled;
  obj.inputProps = obj;
  return obj;
};
