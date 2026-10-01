// Module ID: 8277
// Function ID: 8278
// Name: CutoutBackgroundContext
// Dependencies: [19, 21, 672, 8278, 576, 4531, 2]
// Exports: CutoutBackgroundProvider, useCutoutBackgroundColor

// Module 8277 (CutoutBackgroundContext)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
let tmp6;
const _modDef672 = tmp3(672);
const colors = tmp6(8278);
const jsx = Fragment.jsx;
let context = react.createContext(undefined);
const result = size.fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export const useCutoutBackgroundColor = function useCutoutBackgroundColor() {
  return react.useContext(closure_5);
};
export const CutoutBackgroundProvider = function CutoutBackgroundProvider(backgroundColor) {
  let tmp5;
  let value;
  backgroundColor = backgroundColor.backgroundColor;
  const children = backgroundColor.children;
  const context = react.useContext(closure_5);
  const internal = nativeDefault.internal;
  if (internal.isSemanticColor(backgroundColor)) {
    tmp5 = backgroundColor;
  }
  let token = null;
  const obj = useToken;
  if (null !== backgroundColor) {
    token = obj.useToken(tmp5);
    if (typeof backgroundColor === "string") {
      token = backgroundColor;
    }
  }
  if (null != token) {
    value = token;
    const obj2 = _modDef672(token);
    if (1 !== obj2.alpha()) {
      if (null != context) {
        const tmp6Result = colors;
        value = tmp6Result.flattenColorOverOpaqueBackground(token, context);
      }
    }
  } else if (undefined === token) {
    value = context;
  }
  return <tmp.Provider value={value}>{children}</tmp.Provider>;
};
