// Module ID: 14940
// Function ID: 14941
// Name: KeyImage
// Dependencies: [17, 21, 4758, 580, 558, 568, 5907, 2]

// Module 14940 (KeyImage)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import native from "native" /* 5907 */;
import createStyles from "createStyles" /* 4758 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
const obj = { container: { marginBottom: nativeDefault.space.PX_8 } };
let closure_4 = createStyles.createStyles(obj);
let obj2 = { marginBottom: nativeDefault.space.PX_8 };
const result = size.fileFinishedImporting("modules/mfa/native/components/KeyImage.tsx");

export const KeyImage = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(native.SecurityKeySpotIllustration, { scale: 0.6 });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj2 = { style: tmp4.container, children: first };
    const tmp11 = <View style={tmp4.container}>{first}</View>;
    cResult[1] = tmp4.container;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => <View style={closure_4().container}>{jsx(native.SecurityKeySpotIllustration, { scale: 0.6 })}</View>);
