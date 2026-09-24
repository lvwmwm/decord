// Module ID: 5390
// Function ID: 5391
// Name: NativePermissionManager
// Dependencies: [4999, 1078, 1986, 1368, 5391, 577, 5389, 2]

// Module 5390 (NativePermissionManager)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import NativePermissionConstants from "NativePermissionConstants" /* 4999 */;
import NativePermissionUtils from "NativePermissionUtils" /* 5389 */;
import LifecycleManager from "LifecycleManager" /* 1986 */;
import size from "module_2" /* 2 */;

const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const InputModes = Constants.InputModes;
class NativePermissionManager extends tmp2 {
}
const prototype = NativePermissionManager.prototype;
prototype["isEnabled"] = function isEnabled() {
  let isDesktopResult = PlatformUtils.isDesktop();
  if (isDesktopResult) {
    isDesktopResult = tmp(1368).isMac();
    const tmpResult = tmp(1368);
  }
  if (isDesktopResult) {
    const ProcessArgs = tmp(5391).ProcessArgs;
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
