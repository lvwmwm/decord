// Module ID: 11289
// Function ID: 11290
// Name: ShowSafetyToast
// Dependencies: [5707, 11255, 2]
// Exports: showSafetyToast

// Module 11289 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import ShieldIcon from "ShieldIcon" /* 11255 */;
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
