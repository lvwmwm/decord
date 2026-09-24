// Module ID: 8956
// Function ID: 8957
// Name: InAppReportsShieldElement
// Dependencies: [19, 17, 21, 4790, 558, 568, 5939, 2]

// Module 8956 (InAppReportsShieldElement)
import c from "c" /* 568 */;
import native from "native" /* 5939 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_4 = createStyles.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((element) => {
  const cResult = c.c(3);
  element = element.element;
  let container = closure_4();
  let tmp4 = null;
  if (null != element) {
    tmp4 = null;
    if ("success" === element.type) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(native.ShieldSpotIllustration, { width: 100, height: 100 });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== container.container) {
        const obj2 = { style: container.container, children: first };
        const tmp11 = <View style={container.container}>{first}</View>;
        container = container.container;
        cResult[1] = container;
        cResult[2] = tmp11;
      }
    }
  }
  return tmp4;
}) : ((element) => {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: tmp.container, children: jsx(native.ShieldSpotIllustration, { width: 100, height: 100 }) };
      tmp2 = <View style={tmp.container}>{jsx(native.ShieldSpotIllustration, { width: 100, height: 100 })}</View>;
    }
  }
  return tmp2;
});
