// Module ID: 9696
// Function ID: 9697
// Name: WindowVisibilityVideoManager
// Dependencies: [4814, 2036, 3, 1091, 573, 9697, 9698, 2]

// Module 9696 (WindowVisibilityVideoManager)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import ExternalPipDefault from "ExternalPip" /* 9697 */;
import WindowVisibilityUtilsDefault from "WindowVisibilityUtils" /* 9698 */;
import TypedEventEmitter from "TypedEventEmitter" /* 4814 */;

const require = fn;
const WindowVisibilityEvent = { WindowVisibilityChanged: "window-visibility-changed", IncomingVideoEnabledChanged: "incoming-video-enabled-changed" };
class WindowVisibilityVideoManager extends tmp2 {
  constructor() {
    tmp6 = new WindowVisibilityVideoManager(tmp5, tmp4, tmp3, tmp2, tmp);
    closure_0 = tmp6;
    timeout = new closure_0(closure_2[1]).Timeout();
    tmp6.disableVideoTimer = timeout;
    tmp6.discordVisible = true;
    tmp6.incomingVideoEnabled = true;
    tmp6.lastEnabledChange = performance.now();
    tmp8 = new closure_1(closure_2[2])("WindowVisibilityVideoManager");
    tmp6.logger = tmp8;
    tmp6.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * closure_1(closure_2[3]).Millis.SECOND;
    tmp6.update = function update() {
      if (discordVisible.discordVisible !== WindowVisibilityUtilsDefault()) {
        obj.discordVisible = WindowVisibilityUtilsDefault();
        obj.emit(obj.WindowVisibilityChanged, obj.discordVisible);
        const disableVideoTimer = obj.disableVideoTimer;
        if (obj.discordVisible) {
          disableVideoTimer.stop();
          let result = obj.setIncomingVideoEnabled(true);
        } else {
          disableVideoTimer.start(obj.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
            const result = incomingVideoEnabled.setIncomingVideoEnabled(false);
          });
        }
      }
    };
    obj = closure_1(closure_2[4]);
    subscription = obj.subscribe("WINDOW_VISIBILITY_CHANGE", tmp6.update);
    obj2 = closure_1(closure_2[4]);
    subscription1 = obj2.subscribe("APP_STATE_UPDATE", tmp6.update);
    obj3 = closure_1(closure_2[5]);
    result = obj3.addOnPipModeChangedListener(tmp6.update);
    return tmp6;
  }
}
const prototype = WindowVisibilityVideoManager.prototype;
prototype["isIncomingVideoEnabled"] = function isIncomingVideoEnabled() {
  return this.incomingVideoEnabled;
};
prototype["lastIncomingVideoEnabledChangeTime"] = function lastIncomingVideoEnabledChangeTime() {
  return this.lastEnabledChange;
};
prototype["setIncomingVideoEnabled"] = function setIncomingVideoEnabled(incomingVideoEnabled) {
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
};
const windowVisibilityVideoManager = new WindowVisibilityVideoManager();
const size = fn(2);
let result = size.fileFinishedImporting("lib/WindowVisibilityVideoManager.tsx");

export { WindowVisibilityEvent };
export const WindowVisibilityVideoManager = windowVisibilityVideoManager;
