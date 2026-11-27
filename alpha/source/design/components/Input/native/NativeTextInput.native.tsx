// Module ID: 7297
// Function ID: 7298
// Name: NativeTextInput
// Dependencies: [19, 17, 1497, 1071, 21, 7298, 5604, 5273, 7299, 5104, 5208, 2]
// Exports: NativeTextInput, useKeyboardBlurring

// Module 7297 (NativeTextInput)
import Constants from "Constants" /* 1071 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 7299 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1497 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c10;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ Pressable: closure_4, TextInput: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const KeyboardThemes = Constants.KeyboardThemes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const result = size.fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export function useKeyboardBlurring(ref) {
  let closure_0 = ref;
  const items = [ref];
  const effect = react.useEffect(() => {
    const obj = ref1(dependencyMap[5]);
    let systemKeyboardOpen = obj.getKeyboardIsOpen();
    return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      const tmp = systemKeyboardOpen === systemKeyboardOpen || systemKeyboardOpen;
      if (!tmp) {
        const current = ref1.current;
        if (current != null) {
          current.blur();
        }
      }
    });
  }, items);
}
export const NativeTextInput = function TextInput(ref) {
  let items3;
  let tmp6Result4;
  ref = ref.ref;
  const iter = Object.assign(ref, Object.assign({ ref: 0 }));
  const ref1 = react.useRef(null);
  const items = [ref1];
  const effect = react.useEffect(() => {
    const obj = ref1(dependencyMap[5]);
    let systemKeyboardOpen = obj.getKeyboardIsOpen();
    return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      const tmp = systemKeyboardOpen === systemKeyboardOpen || systemKeyboardOpen;
      if (!tmp) {
        const current = ref1.current;
        if (current != null) {
          current.blur();
        }
      }
    });
  }, items);
  const value = iter.value;
  let c1 = value;
  const defaultValue = iter.defaultValue;
  const items1 = [ref1, value, defaultValue];
  const tmp4 = useBottomSheetKeyboardHandlingDefault(iter);
  const effect1 = react.useEffect(() => {
    const current = ref1.current;
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
  let obj = ref1(5604);
  const mountLayoutEffect = obj.useMountLayoutEffect(() => {
    const current = ref1.current;
    if (current != null) {
      const obj = { text };
      current.setNativeProps(obj);
    }
  });
  const items2 = [ref1];
  const obj2 = ref1(5273);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const callback = react.useCallback(() => {
    const current = ref1.current;
    let focusResult;
    if (current != null) {
      focusResult = current.focus();
    }
    return focusResult;
  }, items2);
  ref1(5104);
  if (null == iter.keyboardAppearance) {
    const tmp6Result = ref1(5208);
    iter.keyboardAppearance = tmp6Result.isThemeDark(tmp11) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
  const obj3 = { ref: tmp6Result4.mergeRefs(ref1, ref) };
  const tmp6Result3 = ref1(5208);
  const merged = Object.assign(tmp6Result3.mergeProps(iter, tmp4, { value: "displayName", defaultValue: "isArray" }));
  tmp6Result4 = ref1(5208);
  const tmp15 = closure_10(closure_5, obj3);
  let tmp17Result = tmp15;
  const tmp13 = closure_10;
  if (!iter.multiline) {
    const obj4 = { style: { flexBasis: 0, flexGrow: 1 }, children: items3 };
    items3 = [tmp15, ];
    let tmp13Result = null;
    const tmp17 = closure_11;
    const tmp18 = closure_7;
    if (!isScreenReaderEnabled) {
      let current = ref1.current;
      let isFocusedResult;
      const tmp20 = closure_4;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      let str = "auto";
      if (isFocusedResult) {
        str = "none";
      }
      const obj5 = { pointerEvents: str, onPress: callback, style: absoluteFillObject.absoluteFillObject };
      tmp13Result = tmp13(tmp20, obj5);
    }
    items3[1] = tmp13Result;
    tmp17Result = tmp17(tmp18, obj4);
  }
  return tmp17Result;
};
