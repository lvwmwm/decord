// Module ID: 10935
// Function ID: 10936
// Name: openConjureDevicePermissionPrompt
// Dependencies: [5959, 10934, 1114, 3865, 2]
// Exports: default

// Module 10935 (openConjureDevicePermissionPrompt)
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import AlertModal from "AlertModal" /* 5959 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 10934 */;
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
      confirmText: intl.string(_modDef3865.xbsXd9),
      cancelText: intl2.string(_modDef3865.rDyl56),
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
