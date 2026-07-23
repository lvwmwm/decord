// Module ID: 5585
// Function ID: 47414
// Name: SceneLoadingIndicator
// Dependencies: [31, 27, 33, 4130, 5586, 5448, 2]
// Exports: SceneLoadingIndicator

// Module 5585 (SceneLoadingIndicator)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
let closure_5 = _createForOfIteratorHelperLoose.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const result = require("jsxProd").fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = function SceneLoadingIndicator() {
  const obj = { style: callback3().loadingContainer };
  const items = [callback(require(5586) /* ActivityIndicator */.ActivityIndicator, {}), callback(require(5448) /* NavScrim */.NavScrim, {})];
  obj.children = items;
  return callback2(View, obj);
};
