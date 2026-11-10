// Module ID: 13260
// Function ID: 13261
// Name: ConjurePerfTraceStatusDot
// Dependencies: [19, 17, 21, 5142, 575, 13256, 2]
// Exports: default

// Module 13260 (ConjurePerfTraceStatusDot)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 13256 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { dot: { width: 8, height: 8, borderRadius: 4 }, running: { backgroundColor: nativeDefault.colors.STATUS_WARNING }, ok: { backgroundColor: nativeDefault.colors.STATUS_POSITIVE }, error: { backgroundColor: nativeDefault.colors.STATUS_DANGER } };
({ backgroundColor: nativeDefault.colors.STATUS_WARNING });
({ backgroundColor: nativeDefault.colors.STATUS_POSITIVE });
({ backgroundColor: nativeDefault.colors.STATUS_DANGER });
let closure_4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceStatusDot.tsx");

export default function ConjurePerfTraceStatusDot(status) {
  status = status.status;
  const tmp = closure_4();
  const items = [tmp.dot, tmp[status]];
  return <View style={items} accessibilityRole="image" accessibilityLabel={ConjurePerfTraceFormat.PERF_STATUS_LABELS[status]} />;
};
