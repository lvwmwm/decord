// Module ID: 17218
// Function ID: 17219
// Name: ConjurePerfTraceStatusDot
// Dependencies: [19, 17, 21, 5091, 587, 558, 576, 17214, 2]

// Module 17218 (ConjurePerfTraceStatusDot)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const ConjurePerfTraceFormat = tmp(17214);
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { dot: { width: 8, height: 8, borderRadius: 4 }, running: obj2, ok: { backgroundColor: nativeDefault.colors.STATUS_POSITIVE }, error: { backgroundColor: nativeDefault.colors.STATUS_DANGER } };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.STATUS_WARNING };
({ backgroundColor: nativeDefault.colors.STATUS_POSITIVE });
({ backgroundColor: nativeDefault.colors.STATUS_DANGER });
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePerfTraceStatusDot(status) {
  const obj = react2;
  const cResult = obj.c(6);
  status = status.status;
  const tmp4 = closure_4();
  if (cResult[0] === tmp4.dot) {
    let tmp6;
    if (cResult[1] === tmp4[status]) {
      tmp6 = cResult[2];
    }
    const tmp7 = ConjurePerfTraceFormat.PERF_STATUS_LABELS[status];
    if (cResult[3] === tmp6) {
      let tmp8;
      if (cResult[4] === tmp7) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
    const tmp11 = <View style={tmp6} accessibilityRole="image" accessibilityLabel={tmp7} />;
    cResult[3] = tmp6;
    cResult[4] = tmp7;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  }
  const items = [tmp4.dot, tmp4[status]];
  cResult[0] = tmp4.dot;
  cResult[1] = tmp4[status];
  cResult[2] = items;
  tmp6 = items;
}) : (function ConjurePerfTraceStatusDot(status) {
  status = status.status;
  const tmp = closure_4();
  const items = [tmp.dot, tmp[status]];
  return <View style={items} accessibilityRole="image" accessibilityLabel={ConjurePerfTraceFormat.PERF_STATUS_LABELS[status]} />;
});
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatusDot.tsx");

export default tmp4;
