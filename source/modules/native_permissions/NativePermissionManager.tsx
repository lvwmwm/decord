// Module ID: 4903
// Function ID: 4904
// Name: isEnabled
// Dependencies: [4557, 676, 4523, 500, 4904, 709, 4902, 2]

// Module 4903 (isEnabled)
import { NativePermissionTypes } from "NativePermissionStatus";
import { InputModes } from "ME";
import "initialize";

class NativePermissionManager extends tmp2 {
}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = require(500) /* set */.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = tmp(500).isMac();
    const tmpResult = tmp(500);
  }
  if (isDesktopResult) {
    const ProcessArgs = tmp(4904).ProcessArgs;
    isDesktopResult = !ProcessArgs.isDiscordTestSet();
  }
  return isDesktopResult;
};
prototype["_initialize"] = function _initialize() {
  if (this.isEnabled()) {
    const subscription = importDefault(709).subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    const obj = importDefault(709);
  }
};
prototype["_terminate"] = function _terminate() {
  if (this.isEnabled()) {
    importDefault(709).unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    const obj = importDefault(709);
  }
};
prototype["handleAudioSetMode"] = function handleAudioSetMode(mode) {
  if (mode.mode === InputModes.PUSH_TO_TALK) {
    const permission = require(4902) /* NativePermissionsRequestOptions */.default.requestPermission(NativePermissionTypes.INPUT_MONITORING);
    const _default = require(4902) /* NativePermissionsRequestOptions */.default;
  }
};
const nativePermissionManager = new NativePermissionManager();
const result = require("initialize").fileFinishedImporting("modules/native_permissions/NativePermissionManager.tsx");

export default nativePermissionManager;
