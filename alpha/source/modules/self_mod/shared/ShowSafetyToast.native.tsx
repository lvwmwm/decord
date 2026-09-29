// Module ID: 11123
// Function ID: 11124
// Name: ShowSafetyToast
// Dependencies: [4528, 8869, 8870, 2]
// Exports: showSafetyToast

// Module 11123 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import _modDef8869 from "module_8869" /* 8869 */;
import ShieldIcon from "ShieldIcon" /* 8870 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef8869, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
