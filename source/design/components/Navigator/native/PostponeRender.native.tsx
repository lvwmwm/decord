// Module ID: 5729
// Function ID: 5730
// Name: PostponeRender
// Dependencies: [32, 19, 17, 21, 4285, 712, 4711, 5730, 5731, 5733, 2]
// Exports: PostponeRender

// Module 5729 (PostponeRender)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c5;
const require = arg1;
({ View: c5, StyleSheet } = get_ActivityIndicator);
createCacheKey = { view: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOWER;
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  let ignoreKeyboard;
  let postpone;
  let viewStyle;
  children = children.children;
  let first;
  let importDefault;
  let dependencyMap;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  const tmp2 = callback(React.useState(postpone), 2);
  first = tmp2[0];
  importDefault = tmp2[1];
  dependencyMap = React.useRef(undefined);
  importDefault(4711)(() => {
    if (first) {
      table.current = first(table[7]).runAfterInteractions(() => {
        callback(false);
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
    children = jsx(first(5731).SceneLoadingIndicator, {});
  }
  if (ignoreKeyboard) {
    let tmp4Result = closure_5;
  } else {
    tmp4Result = importDefault(5733);
  }
  const style = [createCacheKey().view, viewStyle];
  return <tmp4Result style={style}>{children}</tmp4Result>;
};
