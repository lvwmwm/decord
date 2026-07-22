// Module ID: 12799
// Function ID: 98052
// Name: _checkForNewerBuild
// Dependencies: []
// Exports: checkForNewerBuild, openBuildInstaller

// Module 12799 (_checkForNewerBuild)
function _checkForNewerBuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _checkForNewerBuild = obj;
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
    const openURLExternally = arg1(dependencyMap[4]).default.openURLExternally;
    if (obj.isIOS()) {
      openURLExternally(str.toString(), arg1(dependencyMap[6]).WebBrowserType.SAFARI);
    } else {
      openURLExternally(str.toString());
    }
    const obj = arg1(dependencyMap[5]);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
const UPDATE_CONFIG = arg1(dependencyMap[1]).UPDATE_CONFIG;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("MobileNativeUpdateUtils");
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateUtils.tsx");

export const checkForNewerBuild = function checkForNewerBuild() {
  return _checkForNewerBuild(...arguments);
};
export const openBuildInstaller = function openBuildInstaller(newBuild) {
  openBuildInstallerUrl(newBuild.urls.install);
};
export { openBuildInstallerUrl };
