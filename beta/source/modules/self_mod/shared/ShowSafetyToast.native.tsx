// Module ID: 10416
// Function ID: 10417
// Name: ShowSafetyToast
// Dependencies: [4458, 9510, 9511, 2]
// Exports: showSafetyToast

// Module 10416 (ShowSafetyToast)
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import _modDef9510 from "module_9510" /* 9510 */;
import ShieldIcon from "ShieldIcon" /* 9511 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/shared/ShowSafetyToast.native.tsx");

export const showSafetyToast = function showSafetyToast(arg0) {
  ({ id, text } = arg0);
  const obj = ToastActionCreatorsDefault;
  obj.open({ key: id, icon: _modDef9510, IconComponent: ShieldIcon.ShieldIcon, iconColor: "text-brand", content: text });
};
