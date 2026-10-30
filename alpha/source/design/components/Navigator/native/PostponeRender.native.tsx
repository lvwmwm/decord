// Module ID: 7200
// Function ID: 7201
// Name: PostponeRender
// Dependencies: [32, 19, 17, 21, 5009, 575, 5588, 7201, 7202, 6948, 2]
// Exports: PostponeRender

// Module 7200 (PostponeRender)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useMountEffectDefault from "useMountEffect" /* 5588 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7201 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let StyleSheet;
let hasOwnProperty;
let obj2;
let tmp4;
const KeyboardAwareViewDefault = tmp4(6948);
({ View: hasOwnProperty, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { view: obj2 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export function PostponeRender(children) {
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
    children = jsx(first(7202).SceneLoadingIndicator, {});
  }
  if (!ignoreKeyboard) {
    KeyboardAwareViewDefault;
  }
  const items = [tmp.view, viewStyle];
  return <tmp4Result style={items}>{children}</tmp4Result>;
}
