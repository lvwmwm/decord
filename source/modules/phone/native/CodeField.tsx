// Module ID: 9252
// Function ID: 72300
// Name: SingleCodeInput
// Dependencies: []
// Exports: CodeBlocks, default

// Module 9252 (SingleCodeInput)
function SingleCodeInput(loading) {
  let code;
  let count;
  let disabled;
  let error;
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
  const arg1 = NUMERIC;
  ({ onCodeEntered: closure_1, disabled, code } = loading);
  const dependencyMap = code;
  const setCode = loading.setCode;
  const tmp2 = callback4();
  let obj = { style: tmp2.singleInputWrapper };
  obj = { errorMessage: error, value: code, autoCapitalize: "characters", maxLength: count };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.ysthA+);
  obj.textContentType = "oneTimeCode";
  let str = "default";
  if (NUMERIC === obj.NUMERIC) {
    str = "number-pad";
  }
  obj.keyboardType = str;
  obj.onChange = function handleChange(str) {
    setCode(str.replace(NUMERIC === constants.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
  };
  obj.isDisabled = disabled;
  obj.isClearable = true;
  obj.autoFocus = true;
  const items = [closure_7(arg1(dependencyMap[7]).TextInput, obj), ];
  obj = { style: tmp2.singleInputButton };
  const obj1 = { <string:1280724577>: "r", <string:2942393020>: "WATCHING", <string:2466324994>: "r", loading: flag };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[8]).t.13ofGu);
  obj1.onPress = function handlePressSubmit() {
    return callback(code);
  };
  obj1.disabled = code.length !== count || disabled;
  obj.children = closure_7(arg1(dependencyMap[9]).Button, obj1);
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
  let obj = { style: items, contentContainerStyle: tmp2.backgroundFlex, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
  const items = [tmp2.background, backgroundStyle];
  obj = { style: tmp2.container };
  [tmp4, tmp5] = callback(React.useState(""), 2);
  obj = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp2.title, children: title };
  const items1 = [callback2(arg1(dependencyMap[10]).Text, obj), callback2(arg1(dependencyMap[10]).Text, { style: tmp2.subtitle, children: description }), , ];
  const obj1 = { style: tmp2.subtitle, children: description };
  const tmp3 = callback(React.useState(""), 2);
  const obj3 = { loading: flag, error, count: num, onCodeEntered, codeType: NUMERIC, disabled, code: tmp4, setCode: tmp5 };
  items1[2] = callback2(closure_5, { style: tmp2.inputContainer, children: callback2(SingleCodeInput, obj3) });
  items1[3] = actions;
  obj.children = items1;
  const items2 = [callback3(closure_5, obj), callback2(importDefault(dependencyMap[11]), { children: footer })];
  obj.children = items2;
  return callback3(closure_6, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = { NUMERIC: "numeric", ALPHANUMERIC: "alphanumeric" };
let obj1 = arg1(dependencyMap[4]);
obj = { viewWrapper: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.background = obj;
obj.backgroundFlex = { -9223372036854775808: 0.129, 0: 1 };
obj.container = { padding: 16 };
obj.title = { textAlign: "center" };
obj.subtitle = {};
obj.inputContainer = {};
obj.codeContainer = {};
obj.spacer = { width: 4 };
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST, borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.inputWrapper = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.inputWrapperError = { borderColor: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400 };
obj.input = { textAlign: "center" };
obj.singleInputWrapper = { width: "100%" };
obj.singleInputButton = { weekday: null, month: null };
let closure_10 = obj1.createStyles(obj);
const obj2 = { borderColor: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/phone/native/CodeField.tsx");

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
    tmp2Result = tmp2(importDefault(dependencyMap[11]), obj);
    const tmp5 = importDefault(dependencyMap[11]);
  }
  return tmp2Result;
};
export const CodeType = obj;
export const CodeBlocks = function CodeBlocks(count) {
  let onCodeEntered;
  ({ hasError: closure_0, onCodeEntered } = count);
  const importDefault = onCodeEntered;
  let num = count.count;
  if (num === undefined) {
    num = 6;
  }
  const dependencyMap = num;
  let NUMERIC = count.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  const callback = NUMERIC;
  let React;
  let first;
  let closure_6;
  let callback2;
  let closure_8;
  let obj;
  const tmp2 = callback4();
  React = tmp2;
  const tmp3 = callback(React.useState(Array(num).fill("")), 2);
  let num2 = 0;
  first = tmp3[0];
  closure_6 = tmp3[1];
  const ArrayResult = Array(num);
  callback2 = React.useRef(Array(num).fill(null));
  closure_8 = React.useRef(onCodeEntered);
  const effect = React.useEffect(() => {
    closure_8.current = onCodeEntered;
  });
  const items = [first];
  const effect1 = React.useEffect(() => {
    if (function isCodeEntered(first) {
      return first.every((str) => "" !== str.trim());
    }(first)) {
      ref.current(first.join(""));
    }
  }, items);
  const items1 = [];
  obj = items1;
  if (0 < num) {
    do {
      let tmp7 = function _loop(arg0) {
        if (arg0 === num / 2) {
          let obj = { style: callback.spacer };
          items1.push(callback(first, obj, "spacer"));
        }
        obj = {};
        const items = [tmp2.inputWrapper, ];
        let inputWrapperError = null;
        if (arg0) {
          inputWrapperError = tmp2.inputWrapperError;
        }
        items[1] = inputWrapperError;
        obj.style = items;
        obj = {
          ref(arg0) {
            ref.current[arg0] = arg0;
          },
          style: items1
        };
        const items1 = [{ height: 42, width: 252 / num }, tmp2.input];
        let str2 = "default";
        if (NUMERIC === items1.NUMERIC) {
          str2 = "phone-pad";
        }
        obj.keyboardType = str2;
        obj.autoFocus = 0 === arg0;
        obj.value = first[arg0];
        obj.onKeyPress = function onKeyPress(nativeEvent) {
          function onKeyPress(arg0, nativeEvent) {
            if ("Backspace" !== nativeEvent.nativeEvent.key) {
              if (null != ref.current[arg0 + 1]) {
                obj2.focus();
              }
            } else if ("" === closure_5[arg0]) {
              const items = [];
              const diff = arg0 - 1;
              HermesBuiltin.arraySpread(closure_5, 0);
              items[diff] = "";
              callback(items);
              if (null != ref.current[arg0 - 1]) {
                obj.focus();
              }
            }
          }(nativeEvent, nativeEvent);
        };
        obj.onChangeText = function onChangeText(arr) {
          let str = arr;
          if (arr[0] === closure_5[closure_0]) {
            str = arr.slice(1);
          }
          const str2 = str.replace("-", "");
          const tmp = arr;
          const str4 = str.replace("-", "").trim().toUpperCase();
          let parts = str4.split("");
          if ("" === str4) {
            parts = [642155041063702300000000000000000000000000000000000000000000000000000000000000000000000];
          }
          const items = [...closure_5];
          const items1 = [tmp, 1, ...parts];
          items.splice.apply(items1);
          callback(items.slice(0, closure_2));
        };
        obj.selection = { start: first[arg0].length, end: first[arg0].length };
        obj.autoCapitalize = "characters";
        obj.autoCorrect = false;
        obj.children = callback(arg0(num[6]).TextInput, obj);
        items1.push(callback(first, obj, arg0));
      }(num2);
      num2 = num2 + 1;
    } while (num2 < num);
  }
  obj = { style: tmp2.codeContainer, children: items1 };
  return callback2(first, obj);
};
