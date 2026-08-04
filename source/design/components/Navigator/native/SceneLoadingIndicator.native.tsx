// Module ID: 5731
// Function ID: 5732
// Name: SceneLoadingIndicator
// Dependencies: [19, 17, 21, 4285, 5732, 5596, 2]
// Exports: SceneLoadingIndicator

// Module 5731 (SceneLoadingIndicator)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ loadingContainer: { flex: 1, paddingTop: 40 } });
const result = require("jsxProd").fileFinishedImporting("design/components/Navigator/native/SceneLoadingIndicator.native.tsx");

export const SceneLoadingIndicator = function SceneLoadingIndicator() {
  const obj = { style: callback3().loadingContainer, children: null };
  const items = [callback(require(5732) /* ActivityIndicator */.ActivityIndicator, {}), callback(require(5596) /* NavScrim */.NavScrim, {})];
  obj[1] = items;
  return callback2(View, obj);
};
