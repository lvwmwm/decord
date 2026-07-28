// Module ID: 6722
// Function ID: 59108
// Name: useKeyboardBlurring
// Dependencies: [31, 27, 1452, 653, 33, 6723, 4594, 4563, 6724, 3877, 3871, 2]

// Module 6722 (useKeyboardBlurring)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { KeyboardThemes } from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function useKeyboardBlurring(ref) {
  let closure_0 = ref;
  const items = [ref];
  const effect = importAllResult.useEffect(() => {
    callback = callback(outer1_2[5]).getKeyboardIsOpen();
    return outer1_8((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      if (!tmp) {
        const current = ref.current;
        if (null != current) {
          current.blur();
        }
      }
    });
  }, items);
}
({ Pressable: closure_4, TextInput: closure_5, StyleSheet: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((keyboardAppearance, photosButtonExternalRef) => {
  const ref = importAllResult.useRef(null);
  useKeyboardBlurring(ref);
  const tmp3 = importDefault(6724)(keyboardAppearance);
  require(3877) /* ManaContext */;
  if (null != keyboardAppearance.keyboardAppearance) {
    let obj = {};
    let merged = Object.assign(require(3871) /* getNodeText */.mergeProps(keyboardAppearance, tmp3, tmp4));
    const obj3 = require(3871) /* getNodeText */;
    obj["ref"] = require(3871) /* getNodeText */.mergeRefs(ref, photosButtonExternalRef);
    const tmp17 = callback(closure_5, obj);
    let panGestureWrapperResult = tmp17;
    if (!keyboardAppearance.multiline) {
      panGestureWrapperResult = (function usePanGestureWrapper(ref) {
        let closure_0 = ref;
        let obj = outer1_0(outer1_2[7]);
        const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
        let items = [ref];
        let closure_2 = outer1_3.useCallback(() => {
          const current = ref.current;
          let focusResult;
          if (null != current) {
            focusResult = current.focus();
          }
          return focusResult;
        }, items);
        const items1 = [isScreenReaderEnabled];
        let closure_3 = outer1_3.useMemo(() => {
          const obj = {};
          const merged = Object.assign(outer2_6.absoluteFillObject);
          let str = "flex";
          if (isScreenReaderEnabled) {
            str = "none";
          }
          obj["display"] = str;
          return obj;
        }, items1);
        obj = {
          panGestureWrapper(arg0) {
            let obj = { style: { flexBasis: 0, flexGrow: 1 } };
            const items = [arg0, ];
            obj = {};
            const current = ref.current;
            let str = "auto";
            if (null != current) {
              str = "auto";
              if (current.isFocused()) {
                str = "none";
              }
            }
            obj.pointerEvents = str;
            obj.onPress = closure_2;
            obj.style = closure_3;
            items[1] = outer2_10(outer2_4, obj);
            obj.children = items;
            return outer2_11(outer2_7, obj);
          }
        };
        return obj;
      })(ref).panGestureWrapper(tmp17);
    }
    return panGestureWrapperResult;
  } else {
    obj = require(3871) /* getNodeText */;
    keyboardAppearance.keyboardAppearance = obj.isThemeDark(tmp6) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
});
const result = require("subscribeToKeyboardUIStore").fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export { useKeyboardBlurring };
export const NativeTextInput = forwardRefResult;
