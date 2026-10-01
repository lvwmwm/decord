// Module ID: 6381
// Function ID: 6382
// Name: PhoneOrEmailInput
// Dependencies: [32, 19, 21, 6382, 6383, 1115, 6385, 2]

// Module 6381 (PhoneOrEmailInput)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6382 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let onChange;

let react = react_mod;
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((onChange, ref) => {
  let _undefined;
  let alpha2;
  let c4;
  let countryCode;
  let tmp3;
  onChange = onChange.onChange;
  ({ alpha2, countryCode } = onChange);
  const onPressCountrySelector = onChange.onPressCountrySelector;
  const forceMode = onChange.forceMode;
  const merged = Object.assign(onChange, Object.assign({ onChange: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 }));
  react = undefined;
  let obj = react;
  [tmp3, c4] = forceMode(react.useState(""), 2);
  const tmp2 = forceMode(react.useState(""), 2);
  ref = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    blur() {
      const current = ref.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = ref.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = ref.current;
      let flag;
      if (current != null) {
        flag = current.isFocused();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    },
    setText(arg0) {
      _undefined(arg0);
      const current = ref.current;
      if (current != null) {
        current.setText(arg0);
      }
    },
    getText() {
      const current = ref.current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      return str;
    },
    measure(arg0) {
      const current = ref.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = ref.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = ref.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }), []);
  const items = [countryCode, forceMode, onChange];
  const obj2 = onChange(onPressCountrySelector[3]);
  const result = obj2.shouldShowCountryCodeSelector(forceMode, tmp3);
  const callback = react.useCallback((value) => {
    _undefined(value);
    let str = "";
    const obj = PhoneOrEmailUtils;
    if (obj.shouldShowCountryCodeSelector(forceMode, value)) {
      str = countryCode;
    }
    if (onChange != null) {
      onChange(value, str);
    }
  }, items);
  const tmp10 = countryCode(onPressCountrySelector[4])(callback);
  let closure_6 = tmp10;
  const items1 = [countryCode, tmp10];
  const effect = react.useEffect(() => {
    const current = ref.current;
    let str;
    const tmp = closure_6;
    if (current != null) {
      str = current.getText();
    }
    if (str == null) {
      str = "";
    }
    tmp(str);
  }, items1);
  let combined;
  const tmp6 = onChange;
  const tmp7 = onPressCountrySelector;
  if (result) {
    if (alpha2 == null) {
      alpha2 = "";
    }
    const _HermesInternal = HermesInternal;
    let str = " ";
    combined = "" + alpha2 + " " + countryCode;
  }
  const items2 = [combined, onPressCountrySelector];
  const memo = obj.useMemo(() => {
    let intl;
    let str;
    const obj = { onPress: onPressCountrySelector, accessibilityRole: "button", accessibilityLabel: str, accessibilityHint: intl.string(intl2.t.GwAW3k) };
    str = combined;
    if (combined == null) {
      str = "";
    }
    intl = intl2.intl;
    return obj;
  }, items2);
  const obj3 = { ref, onChange: callback, leadingText: combined, leadingPressableProps: memo };
  const SplitTextInput = tmp6(tmp7[6]).SplitTextInput;
  const merged1 = Object.assign(merged);
  return ref(SplitTextInput, obj3);
});
let result = size.fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default forwardRefResult;
