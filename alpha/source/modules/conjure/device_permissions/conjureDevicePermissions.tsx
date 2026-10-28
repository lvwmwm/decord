// Module ID: 10835
// Function ID: 10836
// Name: conjureDevicePermissions
// Dependencies: [1381, 1125, 3863, 2]
// Exports: getConjureDevicePermissionLabel, getConjureDevicePermissionPromptTitle, isConjureDevicePermissionName, isConjureDevicePermissionSupported

// Module 10835 (conjureDevicePermissions)
import intl2 from "intl" /* 1125 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import _modDef3863 from "module_3863" /* 3863 */;
import size from "module_2" /* 2 */;

function getLabel() {
  const intl = intl2.intl;
  return intl.string(_modDef3863["2KIefJ"]);
}
let obj = {
  screen_capture: { isSupported: PlatformUtils.isDesktop, getLabel },
  connect_user_to_voice: {
    isSupported() {
      return true;
    },
    getLabel() {
      const intl = intl2.intl;
      return intl.string(_modDef3863["5Hp3Nx"]);
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
export const getConjureDevicePermissionLabel = function getConjureDevicePermissionLabel(permission) {
  return obj[permission].getLabel();
};
export const getConjureDevicePermissionPromptTitle = function getConjureDevicePermissionPromptTitle(app) {
  const intl = intl2.intl;
  obj = { app };
  return intl.formatToPlainString(_modDef3863.vBSfKU, obj);
};
