// Module ID: 9264
// Function ID: 72377
// Name: SingleCodeInput
// Dependencies: [57, 31, 27, 33, 4130, 689, 1273, 7512, 1212, 4543, 4126, 5587, 2]
// Exports: CodeBlocks, default

// Module 9264 (SingleCodeInput)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function SingleCodeInput(loading) {
  let code;
  let count;
  let disabled;
  let error;
  let importDefault;
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  ({ count, error } = loading);
  if (count === undefined) {
    count = 6;
  }
  let NUMERIC = loading.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  ({ onCodeEntered: importDefault, disabled, code } = loading);
  const setCode = loading.setCode;
  const tmp2 = callback4();
  obj = { style: tmp2.singleInputWrapper };
  obj = { errorMessage: error, value: code, autoCapitalize: "characters", maxLength: count };
  const intl = NUMERIC(code[8]).intl;
  obj.accessibilityLabel = intl.string(NUMERIC(code[8]).t["ysthA+"]);
  obj.textContentType = "oneTimeCode";
  let str = "default";
  if (NUMERIC === obj.NUMERIC) {
    str = "number-pad";
  }
  obj.keyboardType = str;
  obj.onChange = function handleChange(str) {
    setCode(str.replace(NUMERIC === outer1_9.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
  };
  obj.isDisabled = disabled;
  obj.isClearable = true;
  obj.autoFocus = true;
  const items = [closure_7(NUMERIC(code[7]).TextInput, obj), ];
  obj = { style: tmp2.singleInputButton };
  const obj1 = { loading: flag, variant: "primary", size: "lg" };
  const intl2 = NUMERIC(code[8]).intl;
  obj1.text = intl2.string(NUMERIC(code[8]).t["13ofGu"]);
  obj1.onPress = function handlePressSubmit() {
    return callback(code);
  };
  obj1.disabled = code.length !== count || disabled;
  obj.children = closure_7(NUMERIC(code[9]).Button, obj1);
  items[1] = closure_7(closure_5, obj);
  obj.children = items;
  return closure_8(closure_5, obj);
}
function CodeFieldInner(loading) {
  let actions;
  let backgroundStyle;
  let description;
  let disabled;
  let error;
  let footer;
  let onCodeEntered;
  let title;
  let tmp4;
  let tmp5;
  let flag = loading.loading;
  ({ title, description, error, onCodeEntered } = loading);
  if (flag === undefined) {
    flag = false;
  }
  let num = loading.count;
  if (num === undefined) {
    num = 6;
  }
  let NUMERIC = loading.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  ({ actions, footer, backgroundStyle, disabled } = loading);
  const tmp2 = callback4();
  obj = { style: items, contentContainerStyle: tmp2.backgroundFlex, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
  items = [tmp2.background, backgroundStyle];
  obj = { style: tmp2.container };
  [tmp4, tmp5] = callback(React.useState(""), 2);
  obj = { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const items1 = [callback2(require(4126) /* Text */.Text, obj), , , ];
  const obj1 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  items1[1] = callback2(require(4126) /* Text */.Text, obj1);
  const tmp3 = callback(React.useState(""), 2);
  const obj3 = { loading: flag, error, count: num, onCodeEntered, codeType: NUMERIC, disabled, code: tmp4, setCode: tmp5 };
  items1[2] = callback2(closure_5, { style: tmp2.inputContainer, children: callback2(SingleCodeInput, obj3) });
  items1[3] = actions;
  obj.children = items1;
  const items2 = [callback3(closure_5, obj), callback2(importDefault(5587), { children: footer })];
  obj.children = items2;
  return callback3(closure_6, obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { NUMERIC: "numeric", ALPHANUMERIC: "alphanumeric" };
obj = { viewWrapper: { flex: 1 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.background = obj;
obj.backgroundFlex = { flex: 1, justifyContent: "space-between" };
obj.container = { padding: 16 };
obj.title = { textAlign: "center" };
obj.subtitle = { marginTop: 8, lineHeight: 18, textAlign: "center" };
obj.inputContainer = { marginTop: 20, width: "100%", alignItems: "center" };
obj.codeContainer = { maxWidth: 336, width: "100%", flexDirection: "row", justifyContent: "space-around" };
obj.spacer = { width: 4 };
_createForOfIteratorHelperLoose = { borderWidth: 1, borderRadius: 5, alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.inputWrapper = _createForOfIteratorHelperLoose;
obj.inputWrapperError = { borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
obj.input = { textAlign: "center" };
obj.singleInputWrapper = { width: "100%" };
obj.singleInputButton = { marginTop: 8, justifyContent: "flex-end" };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj2 = { borderColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/phone/native/CodeField.tsx");

export default function CodeField(disableKeyboardAvoidingView) {
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    let obj = {};
    const merged = Object.assign(disableKeyboardAvoidingView);
    let tmp2Result = tmp2(CodeFieldInner, obj);
  } else {
    obj = { style: tmp.viewWrapper };
    obj = {};
    const merged1 = Object.assign(disableKeyboardAvoidingView);
    obj.children = callback2(CodeFieldInner, obj);
    tmp2Result = tmp2(importDefault(5587), obj);
    const tmp5 = importDefault(5587);
  }
  return tmp2Result;
};
export const CodeType = obj;
export const CodeBlocks = function CodeBlocks(count) {
  let onCodeEntered;
  let require;
  ({ hasError: require, onCodeEntered } = count);
  let num = count.count;
  if (num === undefined) {
    num = 6;
  }
  let NUMERIC = count.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = items1.NUMERIC;
  }
  let React;
  let first;
  let closure_6;
  let callback2;
  let closure_8;
  items1 = undefined;
  const tmp2 = callback4();
  React = tmp2;
  const tmp3 = NUMERIC(React.useState(Array(num).fill("")), 2);
  let num2 = 0;
  first = tmp3[0];
  closure_6 = tmp3[1];
  const ArrayResult = Array(num);
  callback2 = React.useRef(Array(num).fill(null));
  closure_8 = React.useRef(onCodeEntered);
  const effect = React.useEffect(() => {
    closure_8.current = onCodeEntered;
  });
  let items = [first];
  const effect1 = React.useEffect(() => {
    if ((function isCodeEntered(first) {
      return first.every((str) => "" !== str.trim());
    })(first)) {
      ref.current(first.join(""));
    }
  }, items);
  items1 = [];
  if (0 < num) {
    do {
      let tmp7 = (function _loop(arg0) {
        let closure_0 = arg0;
        if (arg0 === num / 2) {
          let obj = { style: _undefined.spacer };
          items1.push(callback(first, obj, "spacer"));
        }
        obj = {};
        let items = [_undefined.inputWrapper, ];
        let inputWrapperError = null;
        if (closure_0) {
          inputWrapperError = _undefined.inputWrapperError;
        }
        items[1] = inputWrapperError;
        obj.style = items;
        obj = {
          ref(arg0) {
            outer1_7.current[closure_0] = arg0;
          },
          style: items1
        };
        items1 = [{ height: 42, width: 252 / num }, _undefined.input];
        let str2 = "default";
        if (NUMERIC === items1.NUMERIC) {
          str2 = "phone-pad";
        }
        obj.keyboardType = str2;
        obj.autoFocus = 0 === arg0;
        obj.value = first[arg0];
        obj.onKeyPress = function onKeyPress(nativeEvent) {
          (function onKeyPress(closure_0, nativeEvent) {
            if ("Backspace" !== nativeEvent.nativeEvent.key) {
              if (null != outer2_7.current[closure_0 + 1]) {
                obj2.focus();
              }
            } else if ("" === outer2_5[closure_0]) {
              const items = [];
              const diff = closure_0 - 1;
              HermesBuiltin.arraySpread(outer2_5, 0);
              items[diff] = "";
              outer2_6(items);
              if (null != outer2_7.current[closure_0 - 1]) {
                obj.focus();
              }
            }
          })(closure_0, nativeEvent);
        };
        obj.onChangeText = function onChangeText(arr) {
          let str = arr;
          if (arr[0] === outer1_5[closure_0]) {
            str = arr.slice(1);
          }
          const str2 = str.replace("-", "");
          const tmp = closure_0;
          const str4 = str.replace("-", "").trim().toUpperCase();
          let parts = str4.split("");
          if ("" === str4) {
            parts = [""];
          }
          const items = [...outer1_5];
          const items1 = [tmp, 1, ...parts];
          items.splice.apply(items1);
          outer1_6(items.slice(0, outer1_2));
        };
        obj.selection = { start: first[arg0].length, end: first[arg0].length };
        obj.autoCapitalize = "characters";
        obj.autoCorrect = false;
        obj.children = callback(outer1_0(num[6]).TextInput, obj);
        items1.push(callback(first, obj, arg0));
      })(num2);
      num2 = num2 + 1;
    } while (num2 < num);
  }
  return callback2(first, { style: tmp2.codeContainer, children: items1 });
};
