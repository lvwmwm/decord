// Module ID: 5778
// Function ID: 49446
// Name: useKeyboardBlurring
// Dependencies: []

// Module 5778 (useKeyboardBlurring)
function useKeyboardBlurring(ref) {
  const arg1 = ref;
  const items = [ref];
  const effect = importAllResult.useEffect(() => {
    const callback = callback(closure_2[5]).getKeyboardIsOpen();
    return callback2((systemKeyboardOpen) => {
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
const importAllResult = importAll(dependencyMap[0]);
({ Pressable: closure_4, TextInput: closure_5, StyleSheet: closure_6, View: closure_7 } = arg1(dependencyMap[1]));
let closure_8 = importDefault(dependencyMap[2]);
const KeyboardThemes = arg1(dependencyMap[3]).KeyboardThemes;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const forwardRefResult = importAllResult.forwardRef((keyboardAppearance, photosButtonExternalRef) => {
  const ref = importAllResult.useRef(null);
  useKeyboardBlurring(ref);
  const tmp3 = importDefault(dependencyMap[8])(keyboardAppearance);
  photosButtonExternalRef(dependencyMap[9]);
  if (null != keyboardAppearance.keyboardAppearance) {
    let obj = {};
    const merged = Object.assign(photosButtonExternalRef(dependencyMap[10]).mergeProps(keyboardAppearance, tmp3, tmp4));
    const obj3 = photosButtonExternalRef(dependencyMap[10]);
    obj["ref"] = photosButtonExternalRef(dependencyMap[10]).mergeRefs(ref, photosButtonExternalRef);
    const tmp17 = callback(closure_5, obj);
    let panGestureWrapperResult = tmp17;
    if (!keyboardAppearance.multiline) {
      panGestureWrapperResult = function usePanGestureWrapper(ref) {
        let obj = ref(closure_2[7]);
        const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
        const items = [ref];
        closure_2 = React.useCallback(() => {
          const current = arg0.current;
          let focusResult;
          if (null != current) {
            focusResult = current.focus();
          }
          return focusResult;
        }, items);
        const items1 = [isScreenReaderEnabled];
        const React = React.useMemo(() => {
          const obj = {};
          const merged = Object.assign(absoluteFillObject.absoluteFillObject);
          let str = "flex";
          if (isScreenReaderEnabled) {
            str = "none";
          }
          obj["display"] = str;
          return obj;
        }, items1);
        obj = {
          panGestureWrapper(arg0) {
            let obj = { style: {} };
            const items = [arg0, ];
            obj = {};
            const current = arg0.current;
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
            items[1] = closure_10(closure_4, obj);
            obj.children = items;
            return closure_11(closure_7, obj);
          }
        };
        return obj;
      }(ref).panGestureWrapper(tmp17);
    }
    return panGestureWrapperResult;
  } else {
    obj = photosButtonExternalRef(dependencyMap[10]);
    keyboardAppearance.keyboardAppearance = obj.isThemeDark(tmp6) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export { useKeyboardBlurring };
export const NativeTextInput = forwardRefResult;
