// Module ID: 10912
// Function ID: 10913
// Name: openConjureDevicePermissionPrompt
// Dependencies: [5952, 10911, 1125, 3864, 2]
// Exports: default

// Module 10912 (openConjureDevicePermissionPrompt)
import intl3 from "intl" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import AlertModal from "AlertModal" /* 5952 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10911 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/device_permissions/openConjureDevicePermissionPrompt.native.tsx");

export default function _default(arg0) {
  ({ appName: require, permissions: importDefault } = arg0);
  const promise = new Promise((arg0) => {
    let intl;
    let intl2;
    let mapped;
    let obj2;
    let closure_0 = arg0;
    const obj = {
      key: "conjure-device-permission",
      title: obj2.getConjureDevicePermissionPromptTitle(require),
      content: mapped.join("\n"),
      confirmText: intl.string(_modDef3864.xbsXd9),
      cancelText: intl2.string(_modDef3864.rDyl56),
      variant: "primary",
      onConfirm() {
        return closure_0(true);
      },
      onCancel() {
        return closure_0(false);
      },
      onCloseCallback() {
        return closure_0(null);
      },
      dismissable: false
    };
    const showConfirmModal = AlertModal.showConfirmModal;
    AlertModal;
    obj2 = conjureDevicePermissions;
    mapped = importDefault.map(conjureDevicePermissions.getConjureDevicePermissionLabel);
    intl = intl3.intl;
    intl2 = intl3.intl;
    showConfirmModal(obj);
  });
  return promise;
};
