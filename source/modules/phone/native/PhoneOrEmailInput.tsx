// Module ID: 9207
// Function ID: 72066
// Dependencies: []

// Module 9207
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const forwardRefResult = importAllResult.forwardRef((onChange) => {
  let alpha2;
  let countryCode;
  let tmp4;
  onChange = onChange.onChange;
  const arg1 = onChange;
  ({ alpha2, countryCode } = onChange);
  const importDefault = countryCode;
  const onPressCountrySelector = onChange.onPressCountrySelector;
  const dependencyMap = onPressCountrySelector;
  const forceMode = onChange.forceMode;
  let callback = forceMode;
  let obj = { -391257196: false, 106052193: false, 1627583876: false, -1397992901: false, 1650633940: false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(onChange, obj);
  let combined;
  [tmp4, closure_4] = callback(importAllResult.useState(""), 2);
  const ref = importAllResult.useRef(null);
  const jsx = ref;
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    blur() {
      const current = closure_5.current;
      let blurResult;
      if (null != current) {
        blurResult = current.blur();
      }
      return blurResult;
    },
    focus() {
      const current = closure_5.current;
      let focusResult;
      if (null != current) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    isFocused() {
      const current = closure_5.current;
      let isFocusedResult;
      if (null != current) {
        isFocusedResult = current.isFocused();
      }
      return null != isFocusedResult && isFocusedResult;
    },
    setText(arg0) {
      callback(arg0);
      const current = closure_5.current;
      if (null != current) {
        current.setText(arg0);
      }
    },
    getText() {
      const current = closure_5.current;
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
      const current = closure_5.current;
      let measureResult;
      if (null != current) {
        measureResult = current.measure(arg0);
      }
      return measureResult;
    },
    measureInWindow(arg0) {
      const current = closure_5.current;
      let measureInWindowResult;
      if (null != current) {
        measureInWindowResult = current.measureInWindow(arg0);
      }
      return measureInWindowResult;
    },
    measureLayout(arg0, arg1, arg2) {
      const current = closure_5.current;
      let measureLayoutResult;
      if (null != current) {
        measureLayoutResult = current.measureLayout(arg0, arg1, arg2);
      }
      return measureLayoutResult;
    }
  }), []);
  const tmp3 = callback(importAllResult.useState(""), 2);
  const items = [countryCode, forceMode, onChange];
  const result = arg1(dependencyMap[3]).shouldShowCountryCodeSelector(forceMode, tmp4);
  callback = importAllResult.useCallback((value) => {
    callback(value);
    let str = "";
    if (obj.shouldShowCountryCodeSelector(forceMode, value)) {
      str = countryCode;
    }
    if (null != onChange) {
      onChange(value, str);
    }
  }, items);
  const tmp9 = importDefault(dependencyMap[4])(callback);
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
    tmp9(str);
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
  return jsx(arg1(dependencyMap[6]).SplitTextInput, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/phone/native/PhoneOrEmailInput.tsx");

export default forwardRefResult;
