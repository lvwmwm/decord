// Module ID: 14288
// Function ID: 14289
// Name: conjureDevicePermissions
// Dependencies: [1380, 1113, 4121, 2]
// Exports: getConjureDevicePermissionLabel, getConjureDevicePermissionPromptTitle, isConjureDevicePermissionName, isConjureDevicePermissionSupported

// Module 14288 (conjureDevicePermissions)
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import _modDef4121 from "module_4121" /* 4121 */;
import size from "module_2" /* 2 */;

function getLabel() {
  const intl = intl2.intl;
  return intl.string(_modDef4121["2KIefJ"]);
}
let obj = {
  screen_capture: { isSupported: PlatformUtils.isDesktop, getLabel },
  connect_user_to_voice: {
    isSupported() {
      return true;
    },
    getLabel() {
      const intl = intl2.intl;
      return intl.string(_modDef4121["5Hp3Nx"]);
    }
  }
};
({ isSupported: PlatformUtils.isDesktop, getLabel });
const keys = Object.keys(obj);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/conjureDevicePermissions.tsx");

export const CONJURE_DEVICE_PERMISSION_NAMES = keys;
export function isConjureDevicePermissionName(str) {
  let hasOwnResult = typeof str === "string";
  if (typeof str === "string") {
    const _Object = Object;
    hasOwnResult = Object.hasOwn(obj, str);
  }
  return hasOwnResult;
}
export function isConjureDevicePermissionSupported(permission) {
  return obj[permission].isSupported();
}
export function getConjureDevicePermissionLabel(permission) {
  return obj[permission].getLabel();
}
export function getConjureDevicePermissionPromptTitle(app) {
  const intl = intl2.intl;
  obj = { app };
  return intl.formatToPlainString(_modDef4121.vBSfKU, obj);
}
