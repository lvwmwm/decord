// Module ID: 5453
// Function ID: 5454
// Name: NativePermissionManager
// Dependencies: [5046, 1086, 1989, 1370, 5454, 585, 5452, 2]

// Module 5453 (NativePermissionManager)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5046 */;
import NativePermissionUtils from "NativePermissionUtils" /* 5452 */;
import LifecycleManager from "LifecycleManager" /* 1989 */;
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
      const ProcessArgs = tmp(5454).ProcessArgs;
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
