// Module ID: 4782
// Function ID: 4783
// Name: CrossPlatformNativeUtils
// Dependencies: [2]

// Module 4782 (CrossPlatformNativeUtils)
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
