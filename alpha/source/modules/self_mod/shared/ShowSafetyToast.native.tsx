// Module ID: 11724
// Function ID: 11725
// Name: ShowSafetyToast
// Dependencies: [5599, 9937, 2]
// Exports: showSafetyToast

// Module 11724 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import ShieldIcon from "ShieldIcon" /* 9937 */;
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
