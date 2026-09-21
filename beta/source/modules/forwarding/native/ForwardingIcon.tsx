// Module ID: 11814
// Function ID: 11815
// Name: ForwardingIcon
// Dependencies: [21, 558, 568, 11815, 2]

// Module 11814 (ForwardingIcon)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import ArrowAngleRightUpIcon from "ArrowAngleRightUpIcon" /* 11815 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardingIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    const tmp9 = jsx(ArrowAngleRightUpIcon.ArrowAngleRightUpIcon, {});
    cResult[0] = arg0;
    cResult[1] = tmp9;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  const merged = Object.assign(arg0);
  return jsx(ArrowAngleRightUpIcon.ArrowAngleRightUpIcon, {});
});
