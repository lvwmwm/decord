// Module ID: 11502
// Function ID: 11503
// Name: ShowSafetyToast
// Dependencies: [5846, 11468, 2]
// Exports: showSafetyToast

// Module 11502 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5846 */;
import ShieldIcon from "ShieldIcon" /* 11468 */;
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
