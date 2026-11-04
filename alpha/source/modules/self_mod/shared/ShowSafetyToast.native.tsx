// Module ID: 11503
// Function ID: 11504
// Name: ShowSafetyToast
// Dependencies: [5846, 11469, 2]
// Exports: showSafetyToast

// Module 11503 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import ShieldIcon from "ShieldIcon" /* 11469 */;
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
