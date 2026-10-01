// Module ID: 5452
// Function ID: 5453
// Name: NativePermissionManager
// Dependencies: [5045, 1074, 1983, 1364, 5453, 573, 5451, 2]

// Module 5452 (NativePermissionManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import NativePermissionUtils from "NativePermissionUtils" /* 5451 */;
import LifecycleManager from "LifecycleManager" /* 1983 */;
import size from "module_2" /* 2 */;

const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const InputModes = Constants.InputModes;
class NativePermissionManager extends LifecycleManager {
  isEnabled() {
    const obj = PlatformUtils;
    let isDesktopResult = obj.isDesktop();
    if (isDesktopResult) {
      const tmpResult = PlatformUtils;
      isDesktopResult = tmpResult.isMac();
    }
    if (isDesktopResult) {
      const ProcessArgs = tmp(5453).ProcessArgs;
      isDesktopResult = !ProcessArgs.isDiscordTestSet();
    }
    return isDesktopResult;
  }
  _initialize() {
    if (this.isEnabled()) {
      const obj = DispatcherDefault;
      const subscription = obj.subscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    }
  }
  _terminate() {
    if (this.isEnabled()) {
      const obj = DispatcherDefault;
      obj.unsubscribe("AUDIO_SET_MODE", this.handleAudioSetMode);
    }
  }
  handleAudioSetMode(mode) {
    if (mode.mode === InputModes.PUSH_TO_TALK) {
      const _default = NativePermissionUtils.default;
      const permission = _default.requestPermission(NativePermissionTypes.INPUT_MONITORING);
    }
  }
}
const prototype = NativePermissionManager.prototype;
const nativePermissionManager = new NativePermissionManager();
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionManager.tsx");

export default nativePermissionManager;
