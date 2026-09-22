// Module ID: 4751
// Function ID: 4752
// Name: CrossPlatformNativeUtils
// Dependencies: [2]

// Module 4751 (CrossPlatformNativeUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/CrossPlatformNativeUtils.native.tsx");

export default {
  clearNavigationHistory() {

  },
  flushDNSCache() {

  },
  flushCookies() {
    return Promise.resolve();
  },
  setApplicationBackgroundColor() {

  },
  setZoomFactor() {
    return false;
  },
  focus() {

  },
  submitLiveCrashReport() {
    return Promise.resolve();
  },
  getPidFromDesktopSource() {

  },
  getAudioPid() {

  },
  generateSessionFromPid() {
    return "";
  },
  getAppHardwareAccelerationEnabled() {
    return true;
  },
  getDiscordIsElevated() {
    return null;
  }
};
