// Module ID: 12913
// Function ID: 100208
// Name: _checkForNewerBuild
// Dependencies: [5, 4112, 3, 507, 3827, 477, 668, 2]
// Exports: checkForNewerBuild, openBuildInstaller

// Module 12913 (_checkForNewerBuild)
import set from "set";
import { UPDATE_CONFIG } from "currentUpdateConfig";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
function _checkForNewerBuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function openBuildInstallerUrl(install) {
  const uRL = new URL(install);
  let origin;
  if (null != UPDATE_CONFIG) {
    origin = UPDATE_CONFIG.url.origin;
  }
  if (uRL.origin !== origin) {
    const _HermesInternal = HermesInternal;
    importDefaultResult.error("Attempted to follow invalid install URL " + str);
  } else {
    const openURLExternally = require(3827).default.openURLExternally;
    if (obj.isIOS()) {
      openURLExternally(str.toString(), require(668) /* keys */.WebBrowserType.SAFARI);
    } else {
      openURLExternally(str.toString());
    }
    obj = require(477) /* set */;
  }
}
importDefaultResult = new importDefaultResult("MobileNativeUpdateUtils");
const result = require("timestamp").fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateUtils.tsx");

export const checkForNewerBuild = function checkForNewerBuild() {
  return _checkForNewerBuild(...arguments);
};
export const openBuildInstaller = function openBuildInstaller(newBuild) {
  openBuildInstallerUrl(newBuild.urls.install);
};
export { openBuildInstallerUrl };
