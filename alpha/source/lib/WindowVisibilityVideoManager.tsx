// Module ID: 5823
// Function ID: 5824
// Name: WindowVisibilityVideoManager
// Dependencies: [5742, 4818, 3, 1104, 584, 5824, 5827, 5828, 2]

// Module 5823 (WindowVisibilityVideoManager)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1104 */;
import ExternalPipDefault from "ExternalPip" /* 5824 */;
import WindowVisibilityUtilsDefault from "WindowVisibilityUtils" /* 5827 */;
import DesktopGamePerfExperiment from "DesktopGamePerfExperiment" /* 5828 */;
import TypedEventEmitter from "TypedEventEmitter" /* 5742 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const WindowVisibilityEvent = { WindowVisibilityChanged: "window-visibility-changed", IncomingVideoEnabledChanged: "incoming-video-enabled-changed" };
class WindowVisibilityVideoManager extends TypedEventEmitter {
  constructor() {
    let discordVisible;
    let tmp;
    const tmp6 = new WindowVisibilityVideoManager(tmp5, tmp4, tmp3, tmp2, tmp);
    _require = tmp6;
    const timeout = new require("Timers").Timeout();
    tmp6.disableVideoTimer = timeout;
    tmp6.discordVisible = true;
    tmp6.incomingVideoEnabled = true;
    tmp6.lastEnabledChange = performance.now();
    tmp6.logger = new LoggerDefault("WindowVisibilityVideoManager");
    new LoggerDefault("WindowVisibilityVideoManager");
    tmp6.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * DurationsDefault.Millis.SECOND;
    tmp6.handleWindowInit = function handleWindowInit() {
      let isFullscreenPopupOcclusionEnabled = discordVisible.discordVisible !== WindowVisibilityUtilsDefault();
      const obj = discordVisible;
      if (isFullscreenPopupOcclusionEnabled) {
        const obj2 = DesktopGamePerfExperiment;
        isFullscreenPopupOcclusionEnabled = obj2.getIsFullscreenPopupOcclusionEnabled("window_visibility_video_manager");
      }
      if (isFullscreenPopupOcclusionEnabled) {
        obj.update();
      }
    };
    tmp6.update = function update() {
      if (incomingVideoEnabled.discordVisible !== WindowVisibilityUtilsDefault()) {
        incomingVideoEnabled.discordVisible = WindowVisibilityUtilsDefault();
        incomingVideoEnabled.emit(incomingVideoEnabled.WindowVisibilityChanged, incomingVideoEnabled.discordVisible);
        const disableVideoTimer = obj.disableVideoTimer;
        if (incomingVideoEnabled.discordVisible) {
          disableVideoTimer.stop();
          let result = obj.setIncomingVideoEnabled(true);
        } else {
          disableVideoTimer.start(incomingVideoEnabled.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
            const result = incomingVideoEnabled.setIncomingVideoEnabled(false);
          });
        }
      }
    };
    let obj = DispatcherDefault;
    const subscription = obj.subscribe("WINDOW_VISIBILITY_CHANGE", tmp6.update);
    let obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("WINDOW_INIT", tmp6.handleWindowInit);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("APP_STATE_UPDATE", tmp6.update);
    const obj4 = ExternalPipDefault;
    let result = obj4.addOnPipModeChangedListener(tmp6.update);
    return tmp6;
  }
  isIncomingVideoEnabled() {
    return this.incomingVideoEnabled;
  }
  lastIncomingVideoEnabledChangeTime() {
    return this.lastEnabledChange;
  }
  setIncomingVideoEnabled(incomingVideoEnabled) {
    const self = this;
    this.incomingVideoEnabled = incomingVideoEnabled;
    if (this.incomingVideoEnabled !== incomingVideoEnabled) {
      const logger = self.logger;
      const _HermesInternal = HermesInternal;
      logger.info("Incoming video enabled changed, incomingVideoEnabled = " + self.incomingVideoEnabled);
      const _performance = performance;
      self.lastEnabledChange = performance.now();
      self.emit(obj.IncomingVideoEnabledChanged, self.incomingVideoEnabled);
    }
  }
}
const prototype = WindowVisibilityVideoManager.prototype;
const windowVisibilityVideoManager = new WindowVisibilityVideoManager();
let result = size.fileFinishedImporting("lib/WindowVisibilityVideoManager.tsx");
const WindowVisibilityVideoManager_export = windowVisibilityVideoManager;

export { WindowVisibilityEvent };
export { WindowVisibilityVideoManager_export as WindowVisibilityVideoManager };
