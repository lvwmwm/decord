// Module ID: 11511
// Function ID: 11512
// Name: ShowSafetyToast
// Dependencies: [5849, 11477, 2]
// Exports: showSafetyToast

// Module 11511 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5849 */;
import ShieldIcon from "ShieldIcon" /* 11477 */;
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
