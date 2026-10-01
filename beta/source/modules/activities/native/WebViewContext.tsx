// Module ID: 8923
// Function ID: 8924
// Name: WebViewContext
// Dependencies: [32, 19, 17, 21, 4836, 2]
// Exports: WebViewContextProvider

// Module 8923 (WebViewContext)
import react_native from "react-native" /* 17 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const context = react.createContext(0);
let closure_6 = createStyles.createStyles({ placeholderWebView: { width: 2, height: 2, position: "absolute", opacity: 0 } });
const result = size.fileFinishedImporting("modules/activities/native/WebViewContext.tsx");

export const WebViewContext = context;
export const WebViewContextProvider = function WebViewContextProvider(children) {
  let items1;
  children = children.children;
  let tmp = closure_6();
  const tmp2 = _slicedToArray(react.useState(0), 2);
  let closure_0 = tmp3;
  const items = [tmp3];
  const Provider = context.Provider;
  const obj = { value: tmp2[0], children: items1 };
  items1 = [, ];
  const obj2 = {
    style: tmp.placeholderWebView,
    ref: react.useCallback((_nativeTag) => {
      const tmp = _nativeTag;
      if (tmp) {
        closure_0(_nativeTag._nativeTag);
      }
    }, items),
    pointerEvents: "none"
  };
  items1[0] = _false(View, obj2);
  items1[1] = children;
  return React3(Provider, obj);
};
