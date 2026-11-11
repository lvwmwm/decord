// Module ID: 12235
// Function ID: 12236
// Name: ShowSafetyToast
// Dependencies: [5952, 11163, 2]
// Exports: showSafetyToast

// Module 12235 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import ShieldIcon from "ShieldIcon" /* 11163 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" };
  obj.open(id, obj2);
}
