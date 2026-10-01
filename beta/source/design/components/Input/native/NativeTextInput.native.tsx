// Module ID: 6042
// Function ID: 6043
// Name: NativeTextInput
// Dependencies: [19, 17, 1481, 1074, 21, 6043, 5298, 5266, 6044, 4540, 4533, 2]
// Exports: useKeyboardBlurring

// Module 6042 (NativeTextInput)
import Constants from "Constants" /* 1074 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 6044 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1481 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let value;

let c10;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ Pressable: closure_4, TextInput: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const KeyboardThemes = Constants.KeyboardThemes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const forwardRefResult = react.forwardRef((value, ref2) => {
  let absoluteFillObject;
  let items4;
  let tmp6Result4;
  const ref = react.useRef(null);
  const items = [ref];
  const effect = react.useEffect(() => {
    const obj = ref(dependencyMap[5]);
    let systemKeyboardOpen = obj.getKeyboardIsOpen();
    return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      const tmp = systemKeyboardOpen === systemKeyboardOpen || systemKeyboardOpen;
      if (!tmp) {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
      }
    });
  }, items);
  value = value.value;
  let c1 = value;
  const defaultValue = value.defaultValue;
  const items1 = [ref, value, defaultValue];
  const tmp4 = useBottomSheetKeyboardHandlingDefault(value);
  const effect1 = react.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      let tmp = c1;
      const setNativeProps = current.setNativeProps;
      if (c1 == null) {
        tmp = defaultValue;
      }
      const obj = { text: tmp };
      setNativeProps(obj);
    }
  }, items1);
  let obj = ref(5298);
  const mountLayoutEffect = obj.useMountLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { text };
      current.setNativeProps(obj);
    }
  });
  const obj2 = ref(5266);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const items2 = [ref];
  const items3 = [isScreenReaderEnabled];
  const callback = react.useCallback(() => {
    const current = ref.current;
    let focusResult;
    if (current != null) {
      focusResult = current.focus();
    }
    return focusResult;
  }, items2);
  const memo = react.useMemo(() => {
    let str;
    const obj = { display: str };
    const merged = Object.assign(absoluteFillObject.absoluteFillObject);
    str = "flex";
    if (isScreenReaderEnabled) {
      str = "none";
    }
    return obj;
  }, items3);
  ref(4540);
  if (null == value.keyboardAppearance) {
    const tmp6Result = ref(4533);
    value.keyboardAppearance = tmp6Result.isThemeDark(tmp12) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
  const obj3 = { ref: tmp6Result4.mergeRefs(ref, ref2) };
  const tmp6Result3 = ref(4533);
  let merged = Object.assign(tmp6Result3.mergeProps(value, tmp4, { value: "Array", defaultValue: "channel" }));
  tmp6Result4 = ref(4533);
  const tmp16 = closure_10(closure_5, obj3);
  let tmp18Result = tmp16;
  const tmp14 = closure_10;
  if (!value.multiline) {
    const obj4 = { style: { flexBasis: 0, flexGrow: 1 }, children: items4 };
    items4 = [tmp16, ];
    let current = ref.current;
    let isFocusedResult;
    const tmp18 = closure_11;
    const tmp19 = closure_7;
    const tmp20 = closure_4;
    if (current != null) {
      isFocusedResult = current.isFocused();
    }
    let str = "auto";
    if (isFocusedResult) {
      str = "none";
    }
    const obj5 = { pointerEvents: str, onPress: callback, style: memo };
    items4[1] = tmp14(tmp20, obj5);
    tmp18Result = tmp18(tmp19, obj4);
  }
  return tmp18Result;
});
const result = size.fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export const useKeyboardBlurring = function useKeyboardBlurring(ref) {
  let closure_0 = ref;
  const items = [ref];
  const effect = react.useEffect(() => {
    const obj = ref(dependencyMap[5]);
    let systemKeyboardOpen = obj.getKeyboardIsOpen();
    return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      const tmp = systemKeyboardOpen === systemKeyboardOpen || systemKeyboardOpen;
      if (!tmp) {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
      }
    });
  }, items);
};
export const NativeTextInput = forwardRefResult;
