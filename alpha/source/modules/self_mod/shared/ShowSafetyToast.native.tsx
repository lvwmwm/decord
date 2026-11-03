// Module ID: 11452
// Function ID: 11453
// Name: ShowSafetyToast
// Dependencies: [5832, 11418, 2]
// Exports: showSafetyToast

// Module 11452 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5832 */;
import ShieldIcon from "ShieldIcon" /* 11418 */;
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
