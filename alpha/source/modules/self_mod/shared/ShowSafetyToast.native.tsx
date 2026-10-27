// Module ID: 10991
// Function ID: 10992
// Name: ShowSafetyToast
// Dependencies: [5664, 10957, 2]
// Exports: showSafetyToast

// Module 10991 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5664 */;
import ShieldIcon from "ShieldIcon" /* 10957 */;
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
