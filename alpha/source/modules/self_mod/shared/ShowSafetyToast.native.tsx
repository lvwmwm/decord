// Module ID: 10442
// Function ID: 10443
// Name: ShowSafetyToast
// Dependencies: [4809, 10408, 2]
// Exports: showSafetyToast

// Module 10442 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ShieldIcon from "ShieldIcon" /* 10408 */;
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
