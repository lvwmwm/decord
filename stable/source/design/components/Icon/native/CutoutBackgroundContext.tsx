// Module ID: 9510
// Function ID: 9511
// Name: CutoutBackgroundContext
// Dependencies: [19, 21, 671, 9511, 575, 5596, 2]
// Exports: CutoutBackgroundProvider, useCutoutBackgroundColor

// Module 9510 (CutoutBackgroundContext)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useToken from "useToken" /* 5596 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp3;
let tmp6;
const _modDef671 = tmp3(671);
const colors = tmp6(9511);
const jsx = Fragment.jsx;
let context = react.createContext(undefined);
const result = size.fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export function useCutoutBackgroundColor() {
  return react.useContext(closure_5);
}
export function CutoutBackgroundProvider(backgroundColor) {
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
    const obj2 = _modDef671(token);
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
}
