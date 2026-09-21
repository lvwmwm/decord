// Module ID: 8914
// Function ID: 8915
// Name: Arrow
// Dependencies: [19, 21, 4758, 580, 558, 568, 1181, 8915, 2]

// Module 8914 (Arrow)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 1181 */;
import _modDef8915 from "module_8915" /* 8915 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { tintColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp4 = closure_4();
  if (cResult[0] !== tmp4.tintColor) {
    const obj2 = { source: _modDef8915, size: tmp(1181).Icon.Sizes.MEDIUM, style: tmp4.tintColor };
    const tmp8 = jsx(tmp(1181).Icon, { source: _modDef8915, size: tmp(1181).Icon.Sizes.MEDIUM, style: tmp4.tintColor });
    cResult[0] = tmp4.tintColor;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const tmp = closure_4();
  return jsx(native.Icon, { source: _modDef8915, size: native.Icon.Sizes.MEDIUM, style: closure_4().tintColor });
});
