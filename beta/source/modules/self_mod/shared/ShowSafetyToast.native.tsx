// Module ID: 10443
// Function ID: 10444
// Name: ShowSafetyToast
// Dependencies: [4809, 10409, 2]
// Exports: showSafetyToast

// Module 10443 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ShieldIcon from "ShieldIcon" /* 10409 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  let id;
  let text;
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  const obj2 = { text, icon: ShieldIcon.ShieldIcon, iconColor: "text-brand" };
  obj.open(id, obj2);
};
