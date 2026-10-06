// Module ID: 6435
// Function ID: 6436
// Name: FreeFormErrorLabel
// Dependencies: [19, 21, 558, 576, 4588, 4735, 4892, 2]

// Module 6435 (FreeFormErrorLabel)
import Fragment from "Fragment" /* 21 */;
import shared from "shared" /* 4735 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let closure_0;
  let style;
  let tmp4;
  let tmp6;
  let tmp7;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(8);
  ({ children, style } = arg0);
  if (cResult[0] !== children) {
    const tmpResult = tmp(4588);
    const nodeText = tmpResult.getNodeText(children);
    cResult[0] = children;
    cResult[1] = nodeText;
    tmp4 = nodeText;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] !== tmp4) {
    const fn = function f() {
      const tmp2 = null != closure_0 && "" !== tmp;
      if (tmp2) {
        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(closure_0);
      }
    };
    const items = [tmp4];
    cResult[2] = tmp4;
    cResult[3] = fn;
    cResult[4] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[5] === children) {
    let tmp9;
    if (cResult[6] === style) {
      tmp9 = cResult[7];
    }
    return tmp9;
  }
  const tmp10 = jsx(tmp(4892).Text, { style, variant: "text-xs/medium", color: "text-feedback-critical", children });
  cResult[5] = children;
  cResult[6] = style;
  cResult[7] = tmp10;
  tmp9 = tmp10;
}) : ((children) => {
  children = children.children;
  let nodeText;
  const style = children.style;
  const obj = nodeText(4588);
  nodeText = obj.getNodeText(children);
  const items = [nodeText];
  const effect = react.useEffect(() => {
    const tmp2 = null != nodeText && "" !== tmp;
    if (tmp2) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(nodeText);
    }
  }, items);
  return jsx(nodeText(4892).Text, { style, variant: "text-xs/medium", color: "text-feedback-critical", children });
});
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default tmp2;
