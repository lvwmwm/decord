// Module ID: 6458
// Function ID: 6459
// Name: PostponeRender
// Dependencies: [32, 19, 17, 21, 4836, 576, 5298, 6459, 6460, 5890, 2]
// Exports: PostponeRender

// Module 6458 (PostponeRender)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6459 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let StyleSheet;
let hasOwnProperty;
let obj2;
let tmp4;
const KeyboardAwareViewDefault = tmp4(5890);
({ View: hasOwnProperty, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { view: obj2 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  let closure_1;
  let closure_2;
  let first;
  let ignoreKeyboard;
  let postpone;
  let viewStyle;
  children = children.children;
  first = undefined;
  importDefault = undefined;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  let tmp = closure_7();
  [first, importDefault] = react.useState(postpone);
  dependencyMap = react.useRef(undefined);
  useMountEffectDefault(() => {
    const tmp = first;
    if (tmp) {
      const obj = RunAfterInteractionsUtils;
      ref.current = obj.runAfterInteractions(() => {
        closure_1_1(false);
      });
      return () => {
        const current = ref.current;
        if (current != null) {
          current.cancel();
        }
      };
    }
  });
  if (first) {
    children = jsx(first(6460).SceneLoadingIndicator, {});
  }
  if (!ignoreKeyboard) {
    KeyboardAwareViewDefault;
  }
  const items = [tmp.view, viewStyle];
  return <tmp4Result style={items}>{children}</tmp4Result>;
};
