// Module ID: 13065
// Function ID: 13066
// Name: openConjureDevicePermissionPrompt
// Dependencies: [6211, 13064, 1113, 4079, 2]
// Exports: default

// Module 13065 (openConjureDevicePermissionPrompt)
import intl3 from "intl" /* 1113 */;
import _modDef4079 from "module_4079" /* 4079 */;
import AlertModal from "AlertModal" /* 6211 */;
import conjureDevicePermissions from "conjureDevicePermissions" /* 13064 */;
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
      confirmText: intl.string(_modDef4079.xbsXd9),
      cancelText: intl2.string(_modDef4079.rDyl56),
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
