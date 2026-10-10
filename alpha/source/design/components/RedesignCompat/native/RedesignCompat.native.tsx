// Module ID: 6263
// Function ID: 6264
// Name: RedesignCompat
// Dependencies: [19, 21, 558, 576, 2]

// Module 6263 (RedesignCompat)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const context = react.createContext(false);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignCompat(arg0) {
  let children;
  let enabled;
  const obj = react2;
  const cResult = obj.c(3);
  ({ children, enabled } = arg0);
  if (enabled == null) {
    enabled = true;
  }
  if (cResult[0] === children) {
    let tmp2;
    if (cResult[1] === enabled) {
      tmp2 = cResult[2];
    }
    return tmp2;
  }
  const tmp3 = <context.Provider value={enabled}>{children}</context.Provider>;
  cResult[0] = children;
  cResult[1] = enabled;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : (function RedesignCompat(enabled) {
  enabled = enabled.enabled;
  const children = enabled.children;
  const Provider = context.Provider;
  const tmp = jsx;
  if (enabled == null) {
    enabled = true;
  }
  return tmp(Provider, { value: enabled, children });
});
const result = size.fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = tmp3;
