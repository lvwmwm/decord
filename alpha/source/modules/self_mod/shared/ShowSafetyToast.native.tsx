// Module ID: 11026
// Function ID: 11027
// Name: ShowSafetyToast
// Dependencies: [5699, 10992, 2]
// Exports: showSafetyToast

// Module 11026 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import ShieldIcon from "ShieldIcon" /* 10992 */;
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
