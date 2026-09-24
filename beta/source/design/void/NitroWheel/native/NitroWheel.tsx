// Module ID: 14435
// Function ID: 14436
// Name: NitroWheel
// Dependencies: [19, 21, 558, 568, 5834, 9504, 2]

// Module 14435 (NitroWheel)
import c from "c" /* 568 */;
import FastImageDefault from "FastImage" /* 5834 */;
import _modDef9504 from "module_9504" /* 9504 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/NitroWheel/native/NitroWheel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  const cResult = c.c(2);
  style = style.style;
  if (cResult[0] !== style) {
    const obj2 = { source: _modDef9504, style, resizeMode: "contain" };
    const tmp7 = jsx(FastImageDefault, { source: _modDef9504, style, resizeMode: "contain" });
    cResult[0] = style;
    cResult[1] = tmp7;
    let tmp3 = tmp7;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : ((style) => {
  const obj = { source: _modDef9504, style: style.style, resizeMode: "contain" };
  return jsx(FastImageDefault, { source: _modDef9504, style: style.style, resizeMode: "contain" });
});
