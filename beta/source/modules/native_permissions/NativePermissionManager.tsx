// Module ID: 5356
// Function ID: 5357
// Name: NativePermissionManager
// Dependencies: [4965, 1074, 1982, 1364, 5357, 573, 5355, 2]

// Module 5356 (NativePermissionManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NativePermissionConstants from "NativePermissionConstants" /* 4965 */;
import NativePermissionUtils from "NativePermissionUtils" /* 5355 */;
import LifecycleManager from "LifecycleManager" /* 1982 */;
import size from "module_2" /* 2 */;

const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const InputModes = Constants.InputModes;
class NativePermissionManager extends tmp2 {
}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = PlatformUtils.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = tmp(1364).isMac();
    const tmpResult = tmp(1364);
  }
  if (isDesktopResult) {
    const ProcessArgs = tmp(5357).ProcessArgs;
    isDesktopResult = !ProcessArgs.isDiscordTestSet();
  }
  return isDesktopResult;
};
prototype["_initialize"] = function _initialize() {
  if (this.isEnabled()) {
    const subscription = DispatcherDefault.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
  }
};
prototype["_terminate"] = function _terminate() {
  if (this.isEnabled()) {
    DispatcherDefault.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
  }
};
prototype["handleAudioSetMode"] = function handleAudioSetMode(mode) {
  if (mode.mode === InputModes.PUSH_TO_TALK) {
    const permission = NativePermissionUtils.default.requestPermission(NativePermissionTypes.INPUT_MONITORING);
    const _default = NativePermissionUtils.default;
  }
};
const nativePermissionManager = new NativePermissionManager();
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionManager.tsx");

export default nativePermissionManager;
