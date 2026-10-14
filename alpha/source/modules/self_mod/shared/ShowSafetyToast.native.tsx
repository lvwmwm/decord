// Module ID: 10453
// Function ID: 10454
// Name: ShowSafetyToast
// Dependencies: [4811, 10419, 2]
// Exports: showSafetyToast

// Module 10453 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4811 */;
import ShieldIcon from "ShieldIcon" /* 10419 */;
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
