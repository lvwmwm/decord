// Module ID: 11319
// Function ID: 11320
// Name: openConjureDevicePermissionPrompt
// Dependencies: [5926, 11318, 1112, 4192, 2]
// Exports: default

// Module 11319 (openConjureDevicePermissionPrompt)
import intl3 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import AlertModal from "AlertModal" /* 5926 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 11318 */;
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
      confirmText: intl.string(_modDef4192.xbsXd9),
      cancelText: intl2.string(_modDef4192.rDyl56),
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
