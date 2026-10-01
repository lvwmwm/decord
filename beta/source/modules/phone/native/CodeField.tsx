// Module ID: 6501
// Function ID: 6502
// Name: CodeField
// Dependencies: [32, 19, 17, 21, 4836, 576, 1177, 6024, 1115, 5281, 4832, 5890, 2]
// Exports: CodeBlocks, default

// Module 6501 (CodeField)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5890 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
function SingleCodeInput(loading) {
  let Button;
  let code;
  let count;
  let disabled;
  let error;
  let intl;
  let intl2;
  let items;
  let obj;
  let obj4;
  let str;
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
  const tmp2 = closure_10();
  obj = { style: tmp2.singleInputWrapper, children: items };
  const obj2 = {
    errorMessage: error,
    value: code,
    autoCapitalize: "characters",
    maxLength: count,
    accessibilityLabel: intl.string(NUMERIC(code[8]).t["ysthA+"]),
    textContentType: "oneTimeCode",
    keyboardType: str,
    onChange: function handleChange(str) {
      setCode(str.replace(NUMERIC === obj.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
    },
    disabled,
    clearable: true,
    autoFocus: true
  };
  const TextInput = NUMERIC(code[7]).TextInput;
  intl = NUMERIC(code[8]).intl;
  str = "default";
  const tmp3 = closure_8;
  if (NUMERIC === obj.NUMERIC) {
    str = "number-pad";
  }
  items = [closure_7(TextInput, obj2), ];
  const obj3 = { style: tmp2.singleInputButton, children: closure_7(Button, obj4) };
  obj4 = {
    loading: flag,
    variant: "primary",
    size: "lg",
    text: intl2.string(NUMERIC(code[8]).t["13ofGu"]),
    onPress: function handlePressSubmit() {
      return importDefault(code);
    },
    disabled: code.length !== count || disabled
  };
  Button = tmp6(tmp7[9]).Button;
  intl2 = tmp6(tmp7[8]).intl;
  items[1] = closure_7(closure_5, obj3);
  return tmp3(closure_5, obj);
}
function CodeFieldInner(loading) {
  let actions;
  let backgroundStyle;
  let description;
  let disabled;
  let error;
  let footer;
  let items;
  let items1;
  let items2;
  let obj;
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
  const tmp2 = closure_10();
  obj = { style: items, contentContainerStyle: tmp2.backgroundFlex, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: items2 };
  items = [tmp2.background, backgroundStyle];
  const obj2 = { style: tmp2.container, children: items1 };
  [tmp4, tmp5] = react.useState("");
  items1 = [, , , ];
  const obj3 = { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  _slicedToArray(react.useState(""), 2);
  items1[0] = metroImportDefault(Text_Text.Text, obj3);
  const obj4 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  items1[1] = metroImportDefault(Text_Text.Text, obj4);
  const obj5 = { style: tmp2.inputContainer, children: metroImportDefault(SingleCodeInput, { loading: flag, error, count: num, onCodeEntered, codeType: NUMERIC, disabled, code: tmp4, setCode: tmp5 }) };
  items1[2] = metroImportDefault(hasOwnProperty, obj5);
  items1[3] = actions;
  items2 = [metroImportAll(hasOwnProperty, obj2), metroImportDefault(KeyboardAwareViewDefault, { children: footer })];
  return metroImportAll(metroRequire, obj);
}
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const CodeType = { NUMERIC: "numeric", ALPHANUMERIC: "alphanumeric" };
let createStyles = createStyles_mod;
let obj2 = { viewWrapper: { flex: 1 }, background: obj3, backgroundFlex: { flex: 1, justifyContent: "space-between" }, container: { padding: 16 }, title: { textAlign: "center" }, subtitle: { marginTop: 8, lineHeight: 18, textAlign: "center" }, inputContainer: { marginTop: 20, width: "100%", alignItems: "center" }, codeContainer: { maxWidth: 336, width: "100%", flexDirection: "row", justifyContent: "space-around" }, spacer: { width: 4 }, inputWrapper: obj4, inputWrapperError: obj5, input: { textAlign: "center" }, singleInputWrapper: { width: "100%" }, singleInputButton: { marginTop: 8, justifyContent: "flex-end" } };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj4 = { borderWidth: 1, borderRadius: 5, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj5 = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
let closure_10 = createStyles(obj2);
let size = size_mod;
const result = size.fileFinishedImporting("modules/phone/native/CodeField.tsx");

export default function CodeField(disableKeyboardAvoidingView) {
  let obj3;
  let tmp2Result;
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    const obj2 = {};
    const merged = Object.assign(disableKeyboardAvoidingView);
    tmp2Result = tmp2(CodeFieldInner, obj2);
  } else {
    const obj = { style: tmp.viewWrapper, children: metroImportDefault(CodeFieldInner, obj3) };
    obj3 = {};
    const tmp5 = KeyboardAwareViewDefault;
    const merged1 = Object.assign(disableKeyboardAvoidingView);
    tmp2Result = tmp2(tmp5, obj);
  }
  return tmp2Result;
};
export { CodeType };
export const CodeBlocks = function CodeBlocks(onCodeEntered) {
  let TextInput;
  let closure_3;
  let first;
  let items3;
  let num2;
  let obj;
  let obj3;
  let obj4;
  let str;
  onCodeEntered = onCodeEntered.onCodeEntered;
  let num = onCodeEntered.count;
  const hasError = onCodeEntered.hasError;
  if (num === undefined) {
    num = 6;
  }
  let NUMERIC = onCodeEntered.codeType;
  if (NUMERIC === undefined) {
    let tmp = obj;
    NUMERIC = obj.NUMERIC;
  }
  first = undefined;
  closure_3 = undefined;
  let tmp2 = closure_10();
  const useState = react.useState;
  const ArrayResult = Array(num);
  [first, closure_3] = useState(ArrayResult.fill(""));
  const useRef = react.useRef;
  const ArrayResult1 = Array(num);
  const ref = useRef(ArrayResult1.fill(null));
  hasOwnProperty = react.useRef(onCodeEntered);
  const effect = react.useEffect(() => {
    ref.current = onCodeEntered;
  });
  let items = [first];
  const effect1 = react.useEffect(() => {
    const obj = first;
    if (first.every((item) => "" !== item.trim())) {
      ref.current(obj.join(""));
    }
  }, items);
  let items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 === num / 2) {
      obj = { style: tmp2.spacer };
      let arr = items1.push(metroImportDefault(hasOwnProperty, obj, "spacer"));
    }
    let tmp11 = metroImportDefault;
    let items2 = [tmp2.inputWrapper, ];
    let inputWrapperError = null;
    let push = items1.push;
    let tmp12 = hasOwnProperty;
    if (hasError) {
      inputWrapperError = tmp2.inputWrapperError;
    }
    let obj2 = { style: items2, children: tmp11(TextInput, obj3) };
    items2[1] = inputWrapperError;
    obj3 = {
      ref(arg0) {
          ref.current[num2] = arg0;
        },
      style: items3,
      keyboardType: str,
      autoFocus: 0 === num2,
      value: first[num2],
      onKeyPress(nativeEvent) {
          if ("Backspace" !== nativeEvent.nativeEvent.key) {
            if (ref.current[num2 + 1] != null) {
              ref.current[num2 + 1].focus();
            }
          } else if ("" === dependencyMap[num2]) {
            const diff = tmp2 - 1;
            const items = [];
            HermesBuiltin.arraySpread(items, dependencyMap, 0);
            items[diff] = "";
            _slicedToArray(items);
            if (ref.current[diff] != null) {
              ref.current[diff].focus();
            }
          }
        },
      onChangeText(arr) {
          let str = arr;
          const tmp = num2;
          const tmp2 = dependencyMap;
          if (arr[0] === dependencyMap[num2]) {
            str = arr.slice(1);
          }
          const str2 = str.replace("-", "");
          const str3 = str2.trim();
          const str4 = str3.toUpperCase();
          let parts = str4.split("");
          if ("" === str4) {
            parts = [""];
          }
          const items = [...tmp2];
          const items1 = [tmp, 1, ...parts];
          items.splice.apply(items1);
          _slicedToArray(items.slice(0, importDefault));
        },
      selection: obj4,
      autoCapitalize: "characters",
      autoCorrect: false
    };
    size = { height: 42, width: 252 / num };
    items3 = [size, tmp2.input];
    str = "default";
    TextInput = native.TextInput;
    if (NUMERIC === obj.NUMERIC) {
      str = "phone-pad";
    }
    obj4 = { start: first[num2].length, end: first[num2].length };
    let arr2 = push(tmp11(tmp12, obj2, num2));
  }
  const obj5 = { style: tmp2.codeContainer, children: items1 };
  return metroImportDefault(hasOwnProperty, obj5);
};
