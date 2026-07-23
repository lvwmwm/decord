// Module ID: 5583
// Function ID: 47404
// Name: PostponeRender
// Dependencies: [57, 31, 27, 33, 4130, 689, 4559, 5584, 5585, 5587, 2]
// Exports: PostponeRender

// Module 5583 (PostponeRender)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
const View = get_ActivityIndicator.View;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER;
_createForOfIteratorHelperLoose.view = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  let ignoreKeyboard;
  let postpone;
  let viewStyle;
  children = children.children;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  const tmp2 = callback(React.useState(postpone), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  const dependencyMap = React.useRef(undefined);
  importDefault(4559)(() => {
    if (first) {
      table.current = first(table[7]).runAfterInteractions(() => {
        outer1_1(false);
      });
      return () => {
        const current = outer1_2.current;
        if (null != current) {
          current.cancel();
        }
      };
    }
  });
  if (first) {
    children = jsx(first(5585).SceneLoadingIndicator, {});
  }
  if (ignoreKeyboard) {
    let tmp10 = View;
  } else {
    tmp10 = importDefault(5587);
  }
  const obj = { style: items };
  items = [_createForOfIteratorHelperLoose().view, viewStyle];
  obj.children = children;
  return <tmp10 style={items} />;
};
