// Module ID: 478
// Function ID: 6168
// Name: isWindows
// Dependencies: [284214097]
// Exports: getNativePlatform, getNewUpdaterPlatformName, getOS, getPlatform, getPlatformName, isAndroid, isAndroidChrome, isAndroidWeb, isIOS, isLinux, isMac, isMacWeb, isWeb, platformPrefersDeepLink, platformSupportsActivityJoin

// Module 478 (isWindows)
function isWindows() {
  return /^win/.test(closure_1);
}
function isDesktop() {
  return isWindows() || false;
}
function isOculusWeb() {
  let match;
  if (null != navigator.userAgent) {
    match = str.match(/OculusBrowser/i);
  }
  return null != match;
}
const obj = { WINDOWS: "WINDOWS", OSX: "OSX", LINUX: "LINUX", WEB: "WEB" };
let closure_1 = "android";
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/utils/PlatformUtils.tsx");

export const PlatformTypes = obj;
export const isPlatformEmbedded = true;
export { isWindows };
export function isMac() {
  return false;
}
export function isLinux() {
  return false;
}
export { isDesktop };
export function isWeb() {
  return false;
}
export const isAndroidChrome = function isAndroidChrome() {
  let tmp = null != navigator.userAgent;
  if (tmp) {
    const _navigator = navigator;
    tmp = null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile");
    const str = navigator.userAgent;
    const str2 = navigator.userAgent.toLowerCase();
  }
  return tmp;
};
export const isAndroidWeb = function isAndroidWeb() {
  let match;
  if (null != navigator.userAgent) {
    match = str.match(/android/i);
  }
  return null != match;
};
export const isMacWeb = function isMacWeb() {
  let match;
  if (null != navigator.userAgent) {
    match = str.match(/Macintosh/i);
  }
  return null != match;
};
export function isAndroid() {
  return true;
}
export function isIOS() {
  return false;
}
export { isOculusWeb };
export const platformPrefersDeepLink = function platformPrefersDeepLink() {
  return isOculusWeb();
};
export const platformSupportsActivityJoin = function platformSupportsActivityJoin() {
  let flag = isDesktop();
  if (!flag) {
    flag = isOculusWeb();
  }
  if (!flag) {
    flag = true;
  }
  return flag;
};
export const getPlatform = function getPlatform() {
  return isWindows() ? obj.WINDOWS : obj.WEB;
};
export function getPlatformName() {
  return closure_1;
}
export function getNativePlatform() {
  if ("ios" !== closure_1) {
    if ("android" !== tmp) {
      return "web";
    }
  }
  return closure_1;
}
export const getOS = function getOS() {
  return "android";
};
export const getNewUpdaterPlatformName = function getNewUpdaterPlatformName() {
  if (isWindows()) {
    return "win";
  }
};
