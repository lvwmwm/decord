// Module ID: 11702
// Function ID: 11703
// Name: ShowSafetyToast
// Dependencies: [4486, 9547, 9548, 2]
// Exports: showSafetyToast

// Module 11702 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4486 */;
import _modDef9547 from "module_9547" /* 9547 */;
import ShieldIcon from "ShieldIcon" /* 9548 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9547, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
