// Module ID: 5767
// Function ID: 49344
// Name: useTextFieldState
// Dependencies: [31, 4964, 2, 31]
// Exports: useTextField

// Module 5767 (useTextFieldState)
import closure_2 from "module_31";
import BottomSheetModal from "BottomSheetModal";
import module_31 from "module_31";

function useTextFieldState(onClear) {
  let defaultValue;
  let onChange;
  let value;
  ({ value, defaultValue, onChange } = onClear);
  const arg1 = onChange;
  onClear = onClear.onClear;
  const dependencyMap = onClear;
  if (null != value) {
    defaultValue = value;
  }
  let str = "";
  if (null != defaultValue) {
    str = defaultValue;
  }
  const tmp2 = callback(React.useState(str), 2);
  let first = tmp2[0];
  let callback = tmp2[1];
  if (null != value) {
    first = value;
  }
  const items = [onChange];
  callback = React.useCallback((arg0) => {
    callback(arg0);
    if (null != onChange) {
      onChange(arg0);
    }
  }, items);
  const React = callback;
  const items1 = [callback, onClear];
  const obj = {
    value: first,
    setTextValue: callback,
    clear: React.useCallback(() => {
      callback("");
      if (null != onClear) {
        onClear();
      }
    }, items1),
    hasValue: first.length > 0
  };
  return obj;
}
const result = module_31.fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export { useTextFieldState };
export const useTextField = function useTextField(onClear, arg1) {
  arg1 = onClear;
  const ref = React.useRef(null);
  const dependencyMap = ref;
  const items = [ref, onClear.onClear];
  let obj = {};
  const callback = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.clear();
    }
    const onClear = arg0.onClear;
    if (null != onClear) {
      onClear();
    }
    let obj = arg0(ref[2]);
    obj = { ref };
    const result = obj.setAccessibilityFocus(obj);
  }, items);
  const merged = Object.assign(onClear);
  obj["onClear"] = callback;
  const tmp4 = useTextFieldState(obj);
  let closure_2 = tmp4;
  const items1 = [ref, tmp4];
  const imperativeHandle = React.useImperativeHandle(arg1, () => ({
    blur() {
      const current = closure_1.current;
      if (null != current) {
        current.blur();
      }
    },
    focus() {
      const current = closure_1.current;
      if (null != current) {
        current.focus();
      }
    },
    isFocused() {
      const current = closure_1.current;
      let isFocusedResult;
      if (null != current) {
        isFocusedResult = current.isFocused();
      }
      return true === isFocusedResult;
    },
    getText() {
      return closure_2.value;
    },
    setText(text) {
      if ("" === text) {
        closure_2.clear();
      } else {
        const current = closure_1.current;
        if (null != current) {
          const obj = { text };
          current.setNativeProps(obj);
        }
        closure_2.setTextValue(text);
      }
    },
    measure(arg0) {
      const current = closure_1.current;
      if (null != current) {
        current.measure(arg0);
      }
    },
    measureInWindow(arg0) {
      const current = closure_1.current;
      if (null != current) {
        current.measureInWindow(arg0);
      }
    },
    measureLayout(arg0, arg1, arg2) {
      const current = closure_1.current;
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
