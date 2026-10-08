// Module ID: 6635
// Function ID: 6636
// Name: PhoneOrEmailInput
// Dependencies: [32, 109, 19, 21, 558, 576, 6636, 6637, 1126, 6639, 2]

// Module 6635 (PhoneOrEmailInput)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6636 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_3 = ["onChange", "alpha2", "countryCode", "onPressCountrySelector", "forceMode", "ref"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PhoneOrEmailInput(onChange) {
  let alpha2;
  let closure_0;
  let closure_2;
  let countryCode;
  let forceMode;
  let onPressCountrySelector;
  let ref1;
  let tmp16;
  let tmp17;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(28);
  if (cResult[0] !== onChange) {
    onChange = onChange.onChange;
    dependencyMap = onChange;
    ({ alpha2, countryCode } = onChange);
    _require = countryCode;
    ({ onPressCountrySelector, forceMode } = onChange);
    let closure_1 = forceMode;
    cResult[0] = onChange;
    cResult[1] = alpha2;
    cResult[2] = countryCode;
    cResult[3] = forceMode;
    cResult[4] = onChange;
    cResult[5] = onPressCountrySelector;
    cResult[6] = onChange.ref;
    const tmp13 = _objectWithoutProperties(onChange, closure_3);
    class E {
      constructor(arg0) {
        tmp = closure_3(onChange);
        obj = closure_0(closure_2[6]);
        str = "";
        if (obj.shouldShowCountryCodeSelector(closure_1, onChange)) {
          str = closure_0;
        }
        if (closure_2 != null) {
          tmp2 = closure_2(onChange, str);
        }
        return;
      }
    }
    cResult[7] = tmp13;
    tmp9 = ref;
    tmp6 = forceMode;
    tmp7 = onChange;
  } else {
    _require = cResult[2];
    closure_1 = cResult[3];
    dependencyMap = cResult[4];
    tmp9 = cResult[6];
  }
  closure_3 = ref1(react.useState(""), 2)[1];
  ref1(react.useState(""), 2);
  ref1 = react.useRef(null);
  const obj2 = react;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = { blur() { /* body not rendered: F138959 */ }, focus() { /* body not rendered: F138960 */ }, isFocused() { /* body not rendered: F138961 */ }, setText() { /* body not rendered: F138962 */ }, getText() { /* body not rendered: F138963 */ }, measure() { /* body not rendered: F138964 */ }, measureInWindow() { /* body not rendered: F138965 */ }, measureLayout() { /* body not rendered: F138966 */ } };
        return obj;
      }
    }
    const items = [];
    cResult[8] = S;
    cResult[9] = items;
    tmp17 = items;
    tmp16 = S;
  } else {
    class S {
      constructor() {
        obj = { blur() { /* body not rendered: F138959 */ }, focus() { /* body not rendered: F138960 */ }, isFocused() { /* body not rendered: F138961 */ }, setText() { /* body not rendered: F138962 */ }, getText() { /* body not rendered: F138963 */ }, measure() { /* body not rendered: F138964 */ }, measureInWindow() { /* body not rendered: F138965 */ }, measureLayout() { /* body not rendered: F138966 */ } };
        return obj;
      }
    }
    tmp17 = cResult[9];
  }
  const imperativeHandle = obj2.useImperativeHandle(tmp9, tmp16, tmp17);
  tmp(6636);
  if (cResult[10] === tmp5) {
    class S {
      constructor() {
        obj = { blur() { /* body not rendered: F138959 */ }, focus() { /* body not rendered: F138960 */ }, isFocused() { /* body not rendered: F138961 */ }, setText() { /* body not rendered: F138962 */ }, getText() { /* body not rendered: F138963 */ }, measure() { /* body not rendered: F138964 */ }, measureInWindow() { /* body not rendered: F138965 */ }, measureLayout() { /* body not rendered: F138966 */ } };
        return obj;
      }
    }
  }
  class E {
    constructor(arg0) {
      tmp = closure_3(onChange);
      obj = closure_0(closure_2[6]);
      str = "";
      if (obj.shouldShowCountryCodeSelector(closure_1, onChange)) {
        str = closure_0;
      }
      if (closure_2 != null) {
        tmp2 = closure_2(onChange, str);
      }
      return;
    }
  }
  cResult[10] = tmp5;
  cResult[11] = tmp6;
  cResult[12] = tmp7;
  cResult[13] = E;
}) : (function PhoneOrEmailInput(onChange) {
  let _undefined;
  let alpha2;
  let c4;
  let closure_6;
  let countryCode;
  let tmp3;
  onChange = onChange.onChange;
  ({ alpha2, countryCode } = onChange);
  const onPressCountrySelector = onChange.onPressCountrySelector;
  const forceMode = onChange.forceMode;
  const ref = onChange.ref;
  const merged = Object.assign(onChange, Object.assign({ onChange: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0, ref: 0 }));
  _slicedToArray = undefined;
  react = undefined;
  let obj = react;
  [tmp3, c4] = _slicedToArray(react.useState(""), 2);
  const tmp2 = _slicedToArray(react.useState(""), 2);
  const ref1 = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    blur() {
      const current = ref1.current;
      let blurResult;
      if (current != null) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = ref1.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = ref1.current;
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
      const current = ref1.current;
      if (current != null) {
        current.setText(arg0);
      }
    },
    getText() {
      const current = ref1.current;
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
      const current = ref1.current;
      let measureResult;
      if (current != null) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = ref1.current;
      let measureInWindowResult;
      if (current != null) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = ref1.current;
      let measureLayoutResult;
      if (current != null) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }), []);
  const items = [countryCode, forceMode, onChange];
  const obj2 = onChange(onPressCountrySelector[6]);
  const result = obj2.shouldShowCountryCodeSelector(forceMode, tmp3);
  const callback = react.useCallback((cResult) => {
    _undefined(cResult);
    let str = "";
    const obj = PhoneOrEmailUtils;
    if (obj.shouldShowCountryCodeSelector(forceMode, cResult)) {
      str = countryCode;
    }
    if (onChange != null) {
      onChange(cResult, str);
    }
  }, items);
  const tmp10 = countryCode(onPressCountrySelector[7])(callback);
  react = tmp10;
  const items1 = [countryCode, tmp10];
  const effect = react.useEffect(() => {
    const current = ref1.current;
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
  const obj3 = { ref: ref1, onChange: callback, leadingText: combined, leadingPressableProps: memo };
  const SplitTextInput = tmp6(tmp7[9]).SplitTextInput;
  const merged1 = Object.assign(merged);
  return combined(SplitTextInput, obj3);
});
let result = size.fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default tmp2;
