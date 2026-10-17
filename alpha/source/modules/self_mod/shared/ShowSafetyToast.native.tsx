// Module ID: 10751
// Function ID: 10752
// Name: ShowSafetyToast
// Dependencies: [4904, 10717, 2]
// Exports: showSafetyToast

// Module 10751 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4904 */;
import ShieldIcon from "ShieldIcon" /* 10717 */;
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
