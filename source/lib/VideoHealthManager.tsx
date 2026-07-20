// Module ID: 12623
// Function ID: 97173
// Name: VideoHealthManager
// Dependencies: []

// Module 12623 (VideoHealthManager)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const VideoToggleState = arg1(dependencyMap[2]).VideoToggleState;
const tmp2 = () => {
  class VideoHealthManager {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = closure_3(this, VideoHealthManager);
      tmp2 = closure_1(closure_2[3]);
      tmp2 = new tmp2("VideoHealthManager");
      this.logger = tmp2;
      this.disabled = false;
      this.perUserFpsWindow = {};
      this.prevFramesCodec = {};
      this.prevTimestamp = {};
      set = new Set();
      this.streamDisabledUsers = set;
      this.retryBackoffCache = {};
      this.timeoutIdCache = {};
      this.currentVideoAutoToggleState = {};
      this.enableQueue = [];
      this.windowLength = arg0;
      this.fpsThreshold = arg2;
      this.fpsWindowBorderlineCount = Math.ceil(arg0 * arg1);
      this.backoffTimeSec = arg3;
      logger = this.logger;
      enableNativeLoggerResult = logger.enableNativeLogger(true);
      logger2 = this.logger;
      infoResult = logger2.info("constructor with windowLength = " + this.windowLength + ",\n      fpsWindowBorderlineCount = " + this.fpsWindowBorderlineCount + ",\n      fpsThreshold = " + this.fpsThreshold + ",\n      backoffTimeSec = " + arg3);
      return;
    }
  }
  const arg1 = VideoHealthManager;
  let obj = {
    key: "calculateFps",
    value(arg0, arg1, arg2) {
      const self = this;
      if (-1 !== this.prevFramesCodec[arg0]) {
        if (arg1 >= self.prevFramesCodec[arg0]) {
          if (arg2 >= self.prevTimestamp[arg0]) {
            if (arg2 <= self.prevTimestamp[arg0] + 1000 * self.windowLength) {
              if (arg2 < self.prevTimestamp[arg0] + 900) {
                const _NaN = NaN;
                return NaN;
              } else {
                self.prevTimestamp[arg0] = arg2;
                self.prevFramesCodec[arg0] = arg1;
                return (arg1 - self.prevFramesCodec[arg0]) / self.elapsedSeconds(arg2, self.prevTimestamp[arg0]);
              }
            }
          }
        }
      }
      self.prevFramesCodec[arg0] = arg1;
      self.prevTimestamp[arg0] = arg2;
      self.perUserFpsWindow[arg0] = [];
      return NaN;
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "updateFps",
    value(arg0, arg1, arg2) {
      const self = this;
      const VideoHealthManager = this;
      if (!this.disabled) {
        const streamDisabledUsers = self.streamDisabledUsers;
        if (!streamDisabledUsers.has(arg0)) {
          const calculateFpsResult = self.calculateFps(arg0, arg1, arg2);
          if (calculateFpsResult >= 0) {
            const _Number = Number;
            if (Number.isFinite(calculateFpsResult)) {
              let arr = self.perUserFpsWindow[arg0];
              arr = arr.push(calculateFpsResult);
              if (self.perUserFpsWindow[arg0].length >= self.windowLength) {
                if (self.perUserFpsWindow[arg0].length > self.windowLength) {
                  arr = self.perUserFpsWindow[arg0].shift();
                  const arr2 = self.perUserFpsWindow[arg0];
                }
                if (arr3.filter((arg0) => arg0 < self.fpsThreshold).length >= self.fpsWindowBorderlineCount) {
                  const logger = self.logger;
                  const _HermesInternal = HermesInternal;
                  logger.info("" + arg0 + ": detected poor network quality, turning off video");
                  const streamDisabledUsers2 = self.streamDisabledUsers;
                  streamDisabledUsers2.add(arg0);
                  self.currentVideoAutoToggleState[arg0] = constants.DISABLED;
                  callback(closure_2[4])(arg0, constants.DISABLED);
                  const result = self.startReenableBackoffTimer(arg0);
                } else if (self.currentVideoAutoToggleState[arg0] === constants.AUTO_PROBING) {
                  self.currentVideoAutoToggleState[arg0] = constants.AUTO_ENABLED;
                  const logger2 = self.logger;
                  const _HermesInternal2 = HermesInternal;
                  logger2.info("acceptable conditions reached, will reset and send a AUTO_ENABLED for user " + arg0);
                  callback(closure_2[4])(arg0, constants.AUTO_ENABLED);
                }
                if (self.probingUserId === arg0) {
                  self.probingUserId = undefined;
                  self.tryReenableQueue();
                }
                const arr3 = self.perUserFpsWindow[arg0];
              }
            }
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "startReenableBackoffTimer",
    value(arg0) {
      let expBackoffFactor;
      let lastBackoffTime;
      const self = this;
      const VideoHealthManager = this;
      if (!this.disabled) {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("startReenableBackoffTimer for user " + arg0);
        ({ lastBackoffTime, expBackoffFactor } = self.retryBackoffCache[arg0]);
        let num2 = 1;
        if (null !== lastBackoffTime) {
          num2 = 1;
          if (expBackoffFactor <= 16) {
            let obj = VideoHealthManager(closure_2[5]);
            num2 = 1;
            if (self.elapsedSeconds(obj.now(), lastBackoffTime) <= 600) {
              num2 = expBackoffFactor * 2;
            }
          }
        }
        obj = { lastBackoffTime: VideoHealthManager(closure_2[5]).now(), expBackoffFactor: num2 };
        self.retryBackoffCache[arg0] = obj;
        const result = num2 * self.backoffTimeSec;
        const result1 = result * arg0(closure_2[6]).Millis.SECOND;
        const logger2 = self.logger;
        const _HermesInternal2 = HermesInternal;
        logger2.info("starting backoff timer with time = " + result1 + " milliseconds");
        const _setTimeout = setTimeout;
        self.timeoutIdCache[arg0] = setTimeout(() => {
          self.queueReenable(arg0);
        }, result1);
        const obj3 = VideoHealthManager(closure_2[5]);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "queueReenable",
    value(arg0) {
      const enableQueue = this.enableQueue;
      enableQueue.push(arg0);
      this.tryReenableQueue();
    }
  };
  items[4] = {
    key: "tryReenableQueue",
    value() {
      const self = this;
      if (!this.disabled) {
        if (null == self.probingUserId) {
          const enableQueue = self.enableQueue;
          const arr = enableQueue.shift();
          if (null != arr) {
            if (!self.reenableVideo(arr)) {
              while (null != arr) {
                if (self.reenableVideo(arr)) {
                  break;
                }
              }
            }
          }
        }
      }
    }
  };
  items[5] = {
    key: "reenableVideo",
    value(probingUserId) {
      const self = this;
      let flag = probingUserId in this.perUserFpsWindow;
      if (flag) {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("reenableVideo called for user " + probingUserId + " - time = " + VideoHealthManager(closure_2[5]).now());
        const result = self.stateCleanupBeforeEnable(probingUserId);
        self.currentVideoAutoToggleState[probingUserId] = constants.AUTO_PROBING;
        self.probingUserId = probingUserId;
        callback(closure_2[4])(probingUserId, constants.AUTO_PROBING);
        flag = true;
        const obj = VideoHealthManager(closure_2[5]);
      }
      return flag;
    }
  };
  items[6] = {
    key: "elapsedSeconds",
    value(arg0, arg1) {
      return (arg0 - arg1) / 1000;
    }
  };
  items[7] = {
    key: "stateCleanupBeforeEnable",
    value(arg0) {
      const logger = this.logger;
      logger.info("VideoHealthManager::stateCleanupBeforeEnable");
      this.perUserFpsWindow[arg0] = [];
      this.prevFramesCodec[arg0] = -1;
      const streamDisabledUsers = this.streamDisabledUsers;
      streamDisabledUsers.delete(arg0);
    }
  };
  items[8] = {
    key: "getCurrentVideoToggleState",
    value(arg0) {
      return this.currentVideoAutoToggleState[arg0];
    }
  };
  items[9] = {
    key: "createUser",
    value(arg0) {
      const self = this;
      const logger = this.logger;
      logger.info("VideoHealthManager::createUser " + arg0);
      if (!(arg0 in this.perUserFpsWindow)) {
        self.perUserFpsWindow[arg0] = [];
        self.prevFramesCodec[arg0] = -1;
        self.currentVideoAutoToggleState[arg0] = constants.NONE;
        self.retryBackoffCache[arg0] = {};
      }
    }
  };
  items[10] = {
    key: "deleteUser",
    value(arg0) {
      const self = this;
      const logger = this.logger;
      logger.info("VideoHealthManager::deleteUser " + arg0);
      delete r3[r2];
      delete r3[r2];
      delete r3[r2];
      delete r3[r2];
      const streamDisabledUsers = this.streamDisabledUsers;
      streamDisabledUsers.delete(arg0);
      if (arg0 === this.probingUserId) {
        self.probingUserId = undefined;
        self.tryReenableQueue();
      }
      clearTimeout(self.timeoutIdCache[arg0]);
      delete r1[r2];
    }
  };
  items[11] = {
    key: "disable",
    value() {
      const self = this;
      this.disabled = true;
      for (const key10004 in this.perUserFpsWindow) {
        let tmp = key10004;
        let deleteUserResult = self.deleteUser(key10004);
      }
    }
  };
  return callback(VideoHealthManager, items);
}();
const obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, featureEnabled: arg1(dependencyMap[7]).isMobile };
tmp2.defaultConfig = obj;
const result = arg1(dependencyMap[8]).fileFinishedImporting("lib/VideoHealthManager.tsx");

export const VideoHealthManager = tmp2;
