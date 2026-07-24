// Module ID: 3761
// Function ID: 28811
// Name: MuteTimers
// Dependencies: [6, 7, 2]
// Exports: computeIsMuted, isTemporarilyMuted

// Module 3761 (MuteTimers)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let tmp2 = (() => {
  class MuteTimers {
    constructor() {
      tmp = MuteTimers(this, MuteTimers);
      this.timers = {};
      return;
    }
  }
  let obj = {
    key: "reset",
    value() {
      const values = Object.values(this.timers);
      const item = values.forEach((arg0) => clearTimeout(arg0));
      this.timers = {};
    }
  };
  const items = [obj, , ];
  obj = {
    key: "setTimer",
    value(arg0, end_time) {
      if (null == arg0) {
        return false;
      } else if (null == end_time) {
        return false;
      } else {
        let diff = null;
        if (null != end_time.end_time) {
          const _Date = Date;
          const date = new Date(end_time.end_time);
          const _Date2 = Date;
          const time = date.getTime();
          diff = time - Date.now();
        }
        let tmp7 = null != diff;
        if (tmp7) {
          let flag = diff <= 0;
          if (!flag) {
            const self = this;
            const _setTimeout = setTimeout;
            const _Math = Math;
            this.timers[arg0] = setTimeout(arg2, Math.max(0, diff));
            flag = false;
          }
          tmp7 = flag;
        }
        return tmp7;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "clearTimer",
    value(arg0) {
      const self = this;
      if (tmp3) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self.timers[arg0]);
        const timers = self.timers;
        delete tmp[tmp2];
      }
    }
  };
  items[2] = obj;
  return callback(MuteTimers, items);
})();
const result = require("set").fileFinishedImporting("lib/MuteTimers.tsx");

export default tmp2;
export const computeIsMuted = function computeIsMuted(mute_config) {
  mute_config = mute_config.mute_config;
  let tmp2 = !tmp;
  if (!!mute_config.muted) {
    let tmp4 = null == mute_config || null == mute_config.end_time;
    if (!tmp4) {
      const _Date = Date;
      const date = new Date(mute_config.end_time);
      const _Date2 = Date;
      const date1 = new Date();
      tmp4 = date >= date1;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const isTemporarilyMuted = function isTemporarilyMuted(mute_config) {
  mute_config = mute_config.mute_config;
  let tmp2 = !tmp;
  if (!!mute_config.muted) {
    tmp2 = null != mute_config;
  }
  if (tmp2) {
    tmp2 = null != mute_config.end_time;
  }
  if (tmp2) {
    const _Date = Date;
    const date = new Date(mute_config.end_time);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = date >= date1;
  }
  return tmp2;
};
