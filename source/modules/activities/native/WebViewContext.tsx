// Module ID: 10596
// Function ID: 82692
// Name: context
// Dependencies: []
// Exports: WebViewContextProvider

// Module 10596 (context)
import context from "module_0";

let closure_0 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).createStyles({ placeholderWebView: {} });
const obj2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/native/WebViewContext.tsx");

export const WebViewContext = context;
export const WebViewContextProvider = function WebViewContextProvider(children) {
  const tmp2 = callback(importAllResult.useState(0), 2);
  const callback = tmp3;
  const items = [tmp2[1]];
  let obj = { value: tmp2[0] };
  obj = {
    style: callback4().placeholderWebView,
    ref: importAllResult.useCallback((_nativeTag) => {
      if (_nativeTag) {
        tmp3(_nativeTag._nativeTag);
      }
    }, items),
    pointerEvents: "none"
  };
  const items1 = [callback2(View, obj), children.children];
  obj.children = items1;
  return callback3(context.Provider, obj);
};
