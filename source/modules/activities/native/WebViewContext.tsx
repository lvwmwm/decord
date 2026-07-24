// Module ID: 10636
// Function ID: 82958
// Name: context
// Dependencies: [57, 31, 27, 33, 4130, 2]
// Exports: WebViewContextProvider

// Module 10636 (context)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import context from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ placeholderWebView: { width: 2, height: 2, position: "absolute", opacity: 0 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/native/WebViewContext.tsx");

export const WebViewContext = context;
export const WebViewContextProvider = function WebViewContextProvider(children) {
  const tmp2 = callback(importAllResult.useState(0), 2);
  callback = tmp3;
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
