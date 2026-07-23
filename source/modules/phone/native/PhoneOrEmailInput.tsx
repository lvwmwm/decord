// Module ID: 9214
// Function ID: 72107
// Dependencies: [57, 31, 33, 9215, 8391, 1212, 9216, 2]

// Module 9214
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
const forwardRefResult = importAllResult.forwardRef((onChange) => {
  let alpha2;
  let closure_4;
  let countryCode;
  let tmp4;
  onChange = onChange.onChange;
  ({ alpha2, countryCode } = onChange);
  const onPressCountrySelector = onChange.onPressCountrySelector;
  const forceMode = onChange.forceMode;
  let obj = { onChange: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onChange, obj);
  let combined;
  [tmp4, closure_4] = forceMode(importAllResult.useState(""), 2);
  const ref = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    blur() {
      const current = outer1_5.current;
      let blurResult;
      if (null != current) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = outer1_5.current;
      let focusResult;
      if (null != current) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = outer1_5.current;
      let isFocusedResult;
      if (null != current) {
        isFocusedResult = current.isFocused();
      }
      return null != isFocusedResult && isFocusedResult;
    },
    setText(arg0) {
      outer1_4(arg0);
      const current = outer1_5.current;
      if (null != current) {
        current.setText(arg0);
      }
    },
    getText() {
      const current = outer1_5.current;
      let text;
      if (null != current) {
        text = current.getText();
      }
      let str = "";
      if (null != text) {
        str = text;
      }
      return str;
    },
    measure(arg0) {
      const current = outer1_5.current;
      let measureResult;
      if (null != current) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = outer1_5.current;
      let measureInWindowResult;
      if (null != current) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = outer1_5.current;
      let measureLayoutResult;
      if (null != current) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }), []);
  const tmp3 = forceMode(importAllResult.useState(""), 2);
  const items = [countryCode, forceMode, onChange];
  const result = onChange(onPressCountrySelector[3]).shouldShowCountryCodeSelector(forceMode, tmp4);
  const callback = importAllResult.useCallback((value) => {
    callback(value);
    let str = "";
    if (obj.shouldShowCountryCodeSelector(forceMode, value)) {
      str = countryCode;
    }
    if (null != onChange) {
      onChange(value, str);
    }
  }, items);
  const tmp9 = countryCode(onPressCountrySelector[4])(callback);
  let closure_6 = tmp9;
  const items1 = [countryCode, tmp9];
  const effect = importAllResult.useEffect(() => {
    const current = ref.current;
    let text;
    if (null != current) {
      text = current.getText();
    }
    let str = "";
    if (null != text) {
      str = text;
    }
    closure_6(str);
  }, items1);
  combined = undefined;
  if (result) {
    let str = "";
    if (null != alpha2) {
      str = alpha2;
    }
    const _HermesInternal = HermesInternal;
    combined = "" + str + " " + countryCode;
  }
  const items2 = [combined, onPressCountrySelector];
  const memo = importAllResult.useMemo(() => {
    const obj = { onPress: onPressCountrySelector, accessibilityRole: "button" };
    let str = "";
    if (null != combined) {
      str = combined;
    }
    obj.accessibilityLabel = str;
    const intl = onChange(onPressCountrySelector[5]).intl;
    obj.accessibilityHint = intl.string(onChange(onPressCountrySelector[5]).t.GwAW3k);
    return obj;
  }, items2);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["ref"] = ref;
  obj["onChange"] = callback;
  obj["leadingText"] = combined;
  obj["leadingPressableProps"] = memo;
  return ref(onChange(onPressCountrySelector[6]).SplitTextInput, obj);
});
let result = require("jsxProd").fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default forwardRefResult;
