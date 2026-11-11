// Module ID: 7561
// Function ID: 7562
// Name: useTextField
// Dependencies: [32, 19, 5250, 1113, 6268, 2]
// Exports: useTextField

// Module 7561 (useTextField)
import intl2 from "intl" /* 1113 */;
import shared from "shared" /* 5250 */;
import react_native from "react-native" /* 6268 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function useTextFieldState(onClear) {
  let closure_2;
  let first;
  let first1;
  let onChange;
  let value;
  ({ value, onChange } = onClear);
  onClear = onClear.onClear;
  let str = value;
  const useState = first1.useState;
  if (value == null) {
    str = onClear.defaultValue;
  }
  if (str == null) {
    str = "";
  }
  [first, _slicedToArray] = useState(str);
  const tmp3 = _slicedToArray(first1.useState(false), 2);
  first1 = tmp3[0];
  let closure_4 = tmp5;
  let tmp6 = !first1;
  if (first1) {
    tmp6 = !onClear.disabled && onClear.revealable && onClear.secureTextEntry;
  }
  if (!tmp6) {
    tmp3[1](false);
  }
  if (value == null) {
    value = first;
  }
  const items = [onChange];
  const tmp9 = value.length > 0;
  const setTextValue = obj.useCallback((arg0) => {
    closure_2(arg0);
    if (onChange != null) {
      onChange(arg0);
    }
  }, items);
  const items1 = [setTextValue, onClear];
  const items2 = [first1];
  const callback1 = obj.useCallback(() => {
    callback("");
    if (onClear != null) {
      onClear();
    }
  }, items1);
  const obj2 = {
    value,
    setTextValue,
    clear: callback1,
    hasValue: tmp9,
    isRevealed: first1,
    toggleRevealed: first1.useCallback(() => {
      let stringResult;
      closure_4(!first1);
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl2.intl;
      const string = intl.string;
      const t = intl2.t;
      if (first1) {
        stringResult = string(t.SHvAer);
      } else {
        stringResult = string(t.agstwg);
      }
      announce(stringResult, "polite");
    }, items2)
  };
  return obj2;
}
let result = size.fileFinishedImporting("design/components/TextField/native/useTextField.native.tsx");

export { useTextFieldState };
export function useTextField(merged, ref) {
  let callback;
  let obj3;
  ref = react.useRef(null);
  const items = [ref, merged.onClear];
  let obj = { onClear: callback };
  callback = react.useCallback(() => {
    const current = ref.current;
    const tmp = ref;
    if (current != null) {
      current.clear();
    }
    const onClear = merged.onClear;
    if (onClear != null) {
      onClear();
    }
    const obj = react_native;
    const result = obj.setAccessibilityFocus({ ref: tmp });
  }, items);
  merged = Object.assign(merged);
  const tmp4 = useTextFieldState(obj);
  let closure_2 = tmp4;
  const items1 = [ref, tmp4];
  const imperativeHandle = react.useImperativeHandle(ref, () => {
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
        return closure_1_2.value;
      },
      setText(text) {
        if ("" === text) {
          closure_1_2.clear();
        } else {
          const current = ref.current;
          if (current != null) {
            const obj = { text };
            current.setNativeProps(obj);
          }
          closure_1_2.setTextValue(text);
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
  }, items1);
  const disabled = merged.disabled;
  const obj2 = { innerRef: ref, state: tmp4, inputProps: obj3 };
  obj3 = { onChange: undefined, onChangeText: tmp4.setTextValue, editable: !(undefined !== disabled && disabled), focusable: !(undefined !== disabled && disabled) && merged.focusable, "aria-disabled": undefined !== disabled && disabled };
  const merged1 = Object.assign(merged);
  let tmp8 = merged.revealable && merged.secureTextEntry;
  if (tmp8) {
    tmp8 = { secureTextEntry: !tmp4.isRevealed };
    const obj4 = { secureTextEntry: !tmp4.isRevealed };
  }
  const merged2 = Object.assign(tmp8);
  return obj2;
}
