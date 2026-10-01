// Module ID: 16416
// Function ID: 16417
// Name: VibegrationsTraceFormat
// Dependencies: [19, 17, 21, 4836, 576, 16417, 2]
// Exports: TraceStatusDot

// Module 16416 (VibegrationsTraceFormat)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import vibegrations_VibegrationsTraceFormat from "vibegrations/VibegrationsTraceFormat" /* 16417 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { model: obj2, subagent: { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE }, context: { color: nativeDefault.colors.TEXT_SUBTLE }, tool: { color: nativeDefault.colors.TEXT_MUTED }, delegated: { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING } };
obj2 = { color: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createStyles;
({ color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE });
({ color: nativeDefault.colors.TEXT_SUBTLE });
({ color: nativeDefault.colors.TEXT_MUTED });
({ color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
const styles = createStyles(obj);
createStyles = createStyles_mod;
const createStyles2 = createStyles.createStyles;
const obj7 = { model: { backgroundColor: nativeDefault.colors.TEXT_BRAND }, subagent: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE }, context: { backgroundColor: nativeDefault.colors.TEXT_SUBTLE }, tool: { backgroundColor: nativeDefault.colors.TEXT_MUTED }, delegated: { backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING } };
({ backgroundColor: nativeDefault.colors.TEXT_BRAND });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE });
({ backgroundColor: nativeDefault.colors.TEXT_SUBTLE });
({ backgroundColor: nativeDefault.colors.TEXT_MUTED });
({ backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
const styles2 = createStyles2(obj7);
createStyles = createStyles_mod;
const createStyles3 = createStyles.createStyles;
const obj13 = { dot: { width: 8, height: 8, borderRadius: 4 }, started: { backgroundColor: nativeDefault.colors.STATUS_WARNING }, ok: { backgroundColor: nativeDefault.colors.STATUS_POSITIVE }, error: { backgroundColor: nativeDefault.colors.STATUS_DANGER } };
({ backgroundColor: nativeDefault.colors.STATUS_WARNING });
({ backgroundColor: nativeDefault.colors.STATUS_POSITIVE });
({ backgroundColor: nativeDefault.colors.STATUS_DANGER });
let closure_4 = createStyles3(obj13);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsTraceFormat.tsx");

export const useTraceCategoryTextStyles = styles;
export const useTraceCategoryFillStyles = styles2;
export const TraceStatusDot = function TraceStatusDot(status) {
  status = status.status;
  const tmp = closure_4();
  const items = [tmp.dot, tmp[status]];
  const obj2 = vibegrations_VibegrationsTraceFormat;
  return <View style={items} accessibilityRole="image" accessibilityLabel={obj2.statusLabel(status)} />;
};
