// Module ID: 10569
// Function ID: 82536
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10569 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const obj = { WindowVisibilityChanged: "window-visibility-changed", IncomingVideoEnabledChanged: "incoming-video-enabled-changed" };
let tmp2 = (arg0) => {
  class WindowVisibilityVideoManager {
    constructor() {
      self = this;
      tmp = closure_3(this, WindowVisibilityVideoManager);
      obj = closure_6(WindowVisibilityVideoManager);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      WindowVisibilityVideoManager = tmp2Result;
      timeout = new WindowVisibilityVideoManager(closure_2[5]).Timeout();
      tmp2Result.disableVideoTimer = timeout;
      tmp2Result.discordVisible = true;
      tmp2Result.incomingVideoEnabled = true;
      tmp2Result.lastEnabledChange = performance.now();
      tmp8 = closure_1(closure_2[6]);
      tmp8 = new tmp8("WindowVisibilityVideoManager");
      tmp2Result.logger = tmp8;
      tmp2Result.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS = 30 * closure_1(closure_2[7]).Millis.SECOND;
      tmp2Result.update = () => {
        if (tmp2Result.discordVisible !== callback(closure_2[8])()) {
          tmp2Result.discordVisible = callback(closure_2[8])();
          tmp2Result.emit(obj.WindowVisibilityChanged, tmp2Result.discordVisible);
          const disableVideoTimer = tmp2Result.disableVideoTimer;
          if (tmp2Result.discordVisible) {
            disableVideoTimer.stop();
            const result = obj.setIncomingVideoEnabled(true);
          } else {
            disableVideoTimer.start(obj.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS, () => {
              const result = incomingVideoEnabled.setIncomingVideoEnabled(false);
            });
          }
        }
      };
      obj2 = closure_1(closure_2[9]);
      subscription = obj2.subscribe("WINDOW_VISIBILITY_CHANGE", tmp2Result.update);
      obj3 = closure_1(closure_2[9]);
      subscription1 = obj3.subscribe("APP_STATE_UPDATE", tmp2Result.update);
      obj4 = closure_1(closure_2[10]);
      result = obj4.addOnPipModeChangedListener(tmp2Result.update);
      return tmp2Result;
    }
  }
  const arg1 = WindowVisibilityVideoManager;
  callback2(WindowVisibilityVideoManager, arg0);
  let obj = {
    key: "isIncomingVideoEnabled",
    value() {
      return this.incomingVideoEnabled;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "lastIncomingVideoEnabledChangeTime",
    value() {
      return this.lastEnabledChange;
    }
  };
  items[1] = obj;
  obj = {
    key: "setIncomingVideoEnabled",
    value(incomingVideoEnabled) {
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
  };
  items[2] = obj;
  return callback(WindowVisibilityVideoManager, items);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("lib/WindowVisibilityVideoManager.tsx");

export const WindowVisibilityEvent = obj;
export const WindowVisibilityVideoManager = tmp2;
