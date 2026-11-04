// Module ID: 11019
// Function ID: 11020
// Name: ShowSafetyToast
// Dependencies: [5695, 10985, 2]
// Exports: showSafetyToast

// Module 11019 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5695 */;
import ShieldIcon from "ShieldIcon" /* 10985 */;
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
