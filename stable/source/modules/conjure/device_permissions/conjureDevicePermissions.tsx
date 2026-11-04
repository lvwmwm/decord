// Module ID: 10831
// Function ID: 10832
// Name: conjureDevicePermissions
// Dependencies: [1384, 1128, 3862, 2]
// Exports: getConjureDevicePermissionLabel, getConjureDevicePermissionPromptTitle, isConjureDevicePermissionName, isConjureDevicePermissionSupported

// Module 10831 (conjureDevicePermissions)
import intl2 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import _modDef3862 from "module_3862" /* 3862 */;
import size from "module_2" /* 2 */;

function getLabel() {
  const intl = intl2.intl;
  return intl.string(_modDef3862["2KIefJ"]);
}
let obj = {
  screen_capture: { isSupported: PlatformUtils.isDesktop, getLabel },
  connect_user_to_voice: {
    isSupported() {
      return true;
    },
    getLabel() {
      const intl = intl2.intl;
      return intl.string(_modDef3862["5Hp3Nx"]);
    }
  }
};
({ isSupported: PlatformUtils.isDesktop, getLabel });
const keys = Object.keys(obj);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/conjureDevicePermissions.tsx");

export const CONJURE_DEVICE_PERMISSION_NAMES = keys;
export const isConjureDevicePermissionName = function isConjureDevicePermissionName(str) {
  let hasOwnResult = typeof str === "string";
  if (typeof str === "string") {
    const _Object = Object;
    hasOwnResult = Object.hasOwn(obj, str);
  }
  return hasOwnResult;
};
export const isConjureDevicePermissionSupported = function isConjureDevicePermissionSupported(permission) {
  return obj[permission].isSupported();
};
export const getConjureDevicePermissionLabel = function getConjureDevicePermissionLabel(arg0) {
  return obj[arg0].getLabel();
};
export const getConjureDevicePermissionPromptTitle = function getConjureDevicePermissionPromptTitle(app) {
  const intl = intl2.intl;
  obj = { app };
  return intl.formatToPlainString(_modDef3862.vBSfKU, obj);
};
