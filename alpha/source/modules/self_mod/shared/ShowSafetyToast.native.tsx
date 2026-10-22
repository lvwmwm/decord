// Module ID: 10952
// Function ID: 10953
// Name: ShowSafetyToast
// Dependencies: [5649, 10918, 2]
// Exports: showSafetyToast

// Module 10952 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5649 */;
import ShieldIcon from "ShieldIcon" /* 10918 */;
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
