// Module ID: 12523
// Function ID: 12524
// Name: ShowSafetyToast
// Dependencies: [6009, 10751, 2]
// Exports: showSafetyToast

// Module 12523 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6009 */;
import ShieldIcon from "ShieldIcon" /* 10751 */;
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
