// Module ID: 11473
// Function ID: 11474
// Name: ShowSafetyToast
// Dependencies: [5867, 11439, 2]
// Exports: showSafetyToast

// Module 11473 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5867 */;
import ShieldIcon from "ShieldIcon" /* 11439 */;
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
