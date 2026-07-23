// Module ID: 12751
// Function ID: 99402
// Name: VideoHealthManager
// Dependencies: [6, 7, 653, 3, 12752, 4206, 664, 4368, 2]

// Module 12751 (VideoHealthManager)
import set from "set";
import isTablet from "isTablet";
import { VideoToggleState } from "ME";

const require = arg1;
let tmp2 = (() => {
  class VideoHealthManager {
    constructor(arg0, arg1, arg2, arg3) {
      tmp = outer1_3(this, VideoHealthManager);
      tmp2 = outer1_1(outer1_2[3]);
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
      let self = this;
      self = this;
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
                  self.currentVideoAutoToggleState[arg0] = outer1_5.DISABLED;
                  outer1_1(outer1_2[4])(arg0, outer1_5.DISABLED);
                  const result = self.startReenableBackoffTimer(arg0);
                } else if (self.currentVideoAutoToggleState[arg0] === outer1_5.AUTO_PROBING) {
                  self.currentVideoAutoToggleState[arg0] = outer1_5.AUTO_ENABLED;
                  const logger2 = self.logger;
                  const _HermesInternal2 = HermesInternal;
                  logger2.info("acceptable conditions reached, will reset and send a AUTO_ENABLED for user " + arg0);
                  outer1_1(outer1_2[4])(arg0, outer1_5.AUTO_ENABLED);
                }
                if (self.probingUserId === arg0) {
                  self.probingUserId = undefined;
                  self.tryReenableQueue();
                }
                arr3 = self.perUserFpsWindow[arg0];
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
      let self = this;
      self = this;
      let closure_1 = arg0;
      if (!this.disabled) {
        const logger = self.logger;
        const _HermesInternal = HermesInternal;
        logger.info("startReenableBackoffTimer for user " + arg0);
        ({ lastBackoffTime, expBackoffFactor } = self.retryBackoffCache[arg0]);
        let num2 = 1;
        if (null !== lastBackoffTime) {
          num2 = 1;
          if (expBackoffFactor <= 16) {
            let obj = VideoHealthManager(outer1_2[5]);
            num2 = 1;
            if (self.elapsedSeconds(obj.now(), lastBackoffTime) <= 600) {
              num2 = expBackoffFactor * 2;
            }
          }
        }
        obj = { lastBackoffTime: VideoHealthManager(outer1_2[5]).now(), expBackoffFactor: num2 };
        self.retryBackoffCache[arg0] = obj;
        const result = num2 * self.backoffTimeSec;
        const result1 = result * outer1_1(outer1_2[6]).Millis.SECOND;
        const logger2 = self.logger;
        const _HermesInternal2 = HermesInternal;
        logger2.info("starting backoff timer with time = " + result1 + " milliseconds");
        const _setTimeout = setTimeout;
        self.timeoutIdCache[arg0] = setTimeout(() => {
          self.queueReenable(closure_1);
        }, result1);
        const obj3 = VideoHealthManager(outer1_2[5]);
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
        logger.info("reenableVideo called for user " + probingUserId + " - time = " + VideoHealthManager(outer1_2[5]).now());
        const result = self.stateCleanupBeforeEnable(probingUserId);
        self.currentVideoAutoToggleState[probingUserId] = outer1_5.AUTO_PROBING;
        self.probingUserId = probingUserId;
        outer1_1(outer1_2[4])(probingUserId, outer1_5.AUTO_PROBING);
        flag = true;
        const obj = VideoHealthManager(outer1_2[5]);
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
        self.currentVideoAutoToggleState[arg0] = outer1_5.NONE;
        self.retryBackoffCache[arg0] = { lastBackoffTime: null, expBackoffFactor: 1 };
      }
    }
  };
  items[10] = {
    key: "deleteUser",
    value(arg0) {
      const self = this;
      const logger = this.logger;
      logger.info("VideoHealthManager::deleteUser " + arg0);
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      delete tmp3[tmp2];
      const streamDisabledUsers = this.streamDisabledUsers;
      streamDisabledUsers.delete(arg0);
      if (arg0 === this.probingUserId) {
        self.probingUserId = undefined;
        self.tryReenableQueue();
      }
      clearTimeout(self.timeoutIdCache[arg0]);
      delete tmp[tmp2];
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
        continue;
      }
    }
  };
  return callback(VideoHealthManager, items);
})();
let obj = { featureEnabled: require("isTablet").isMobile, windowLength: 5, allowedPoorFpsRatio: 1, fpsThreshold: 5, backoffTimeSec: 15 };
tmp2.defaultConfig = obj;
let result = require("ME").fileFinishedImporting("lib/VideoHealthManager.tsx");

export const VideoHealthManager = tmp2;
