// Module ID: 4214
// Function ID: 36615
// Name: DEFAULT_FRECENCY
// Dependencies: [6, 7, 22, 3712, 2]

// Module 4214 (DEFAULT_FRECENCY)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function DEFAULT_FRECENCY(arg0, arg1, numOfRecentUses) {
  return Math.ceil(arg0 * (arg1 / numOfRecentUses.numOfRecentUses));
}
function DEFAULT_WEIGHT(arg0) {
  let num = 100;
  if (arg0 > 3) {
    num = 70;
    if (arg0 > 15) {
      num = 50;
      if (arg0 > 30) {
        num = 30;
        if (arg0 > 45) {
          num = 1;
          if (arg0 <= 80) {
            num = 10;
          }
        }
      }
    }
  }
  return num;
}
let tmp2 = (() => {
  class Frecency {
    constructor(arg0) {
      self = this;
      computeWeight = arg0.computeWeight;
      if (computeWeight === undefined) {
        computeWeight = outer1_5;
      }
      computeFrecency = arg0.computeFrecency;
      if (computeFrecency === undefined) {
        computeFrecency = outer1_4;
      }
      flag = arg0.calculateMaxTotalUse;
      if (flag === undefined) {
        flag = false;
      }
      ({ numFrequentlyItems, lookupKey, afterCompute } = arg0);
      if (numFrequentlyItems === undefined) {
        numFrequentlyItems = 32;
      }
      num = arg0.maxSamples;
      if (num === undefined) {
        num = 10;
      }
      tmp = outer1_2(self, Frecency);
      self.computeBonus = arg0.computeBonus;
      self.computeWeight = computeWeight;
      self.computeFrecency = computeFrecency;
      self.calculateMaxTotalUse = flag;
      self.afterCompute = afterCompute;
      self.lookupKey = lookupKey;
      self.usageHistory = {};
      self.frequently = [];
      self.maxSamples = num;
      self.numFrequentlyItems = numFrequentlyItems;
      self.dirty = false;
      self.version = 0;
      return;
    }
  }
  let obj = {
    key: "overwriteHistory",
    value(arg0, arr) {
      let obj = arg0;
      let self = this;
      self = this;
      if (null == arg0) {
        obj = {};
      }
      self.usageHistory = Frecency(outer1_1[2]).mapValues(obj, (arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj["frecency"] = -1;
        return obj;
      });
      if (null != arr) {
        const item = arr.forEach((timestamp) => self.track(timestamp.key, { timestamp: timestamp.timestamp }));
      }
      self.markDirty();
    }
  };
  let items = [obj, , , , , , , , ];
  obj = {
    key: "markDirty",
    value() {
      this.dirty = true;
      this.version = this.version + 1;
    }
  };
  items[1] = obj;
  obj = {
    key: "isDirty",
    value() {
      return this.dirty;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "track",
    value(arg0) {
      let length;
      let maxSamples;
      let timestamp;
      let usesSinceLastTrack;
      let obj = arg1;
      const self = this;
      if (arg1 === undefined) {
        obj = {};
      }
      ({ timestamp, usesSinceLastTrack } = obj);
      let _Date = null;
      if (null != arg0) {
        let num4 = globalThis;
        const _Object = Object;
        let tmp2;
        if (Object.hasOwn(self.usageHistory, arg0)) {
          tmp2 = self.usageHistory[arg0];
        }
        if (_Date == tmp2) {
          obj = {};
          let num2 = 1;
          if (_Date != usesSinceLastTrack) {
            num2 = usesSinceLastTrack;
          }
          obj.totalUses = num2;
          if (_Date == timestamp) {
            _Date = num4.Date;
            timestamp = _Date.now();
          }
          const items = [timestamp];
          obj.recentUses = items;
          obj.frecency = -1;
          num4 = 0;
          obj.score = 0;
          let tmp6 = obj;
        } else {
          tmp2.frecency = -1;
          let num = 1;
          if (_Date != usesSinceLastTrack) {
            num = usesSinceLastTrack;
          }
          tmp2.totalUses = tmp2.totalUses + num;
          if (_Date == timestamp) {
            let recentUses = tmp2.recentUses;
            _Date = Date;
            recentUses.push(Date.now());
          } else {
            const recentUses1 = tmp2.recentUses;
            recentUses1.push(timestamp);
            recentUses = tmp2.recentUses;
            const sorted = recentUses.sort();
          }
          tmp6 = tmp2;
          if (tmp2.recentUses.length > self.maxSamples) {
            do {
              let recentUses2 = tmp2.recentUses;
              let arr1 = recentUses2.shift();
              tmp6 = tmp2;
              length = tmp2.recentUses.length;
              maxSamples = self.maxSamples;
            } while (length > maxSamples);
          }
        }
        self.usageHistory[arg0] = tmp6;
        self.markDirty();
      }
    }
  };
  items[4] = {
    key: "getEntry",
    value(arg0) {
      const self = this;
      let tmp = null;
      if (null != arg0) {
        if (self.dirty) {
          self.compute();
        }
        const _Object = Object;
        let tmp4;
        if (hasOwnProperty.call(self.usageHistory, arg0)) {
          tmp4 = self.usageHistory[arg0];
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getScore",
    value(arg0) {
      const entry = this.getEntry(arg0);
      let score = null;
      if (null != entry) {
        score = entry.score;
      }
      return score;
    }
  };
  items[6] = {
    key: "getFrecency",
    value(arg0) {
      const entry = this.getEntry(arg0);
      let frecency = null;
      if (null != entry) {
        frecency = entry.frecency;
      }
      return frecency;
    }
  };
  items[7] = {
    key: "compute",
    value() {
      let self = this;
      self = this;
      let closure_1 = Frecency(outer1_1[3])();
      let maxByResult = null;
      if (this.calculateMaxTotalUse) {
        const _Object = Object;
        maxByResult = Frecency(outer1_1[2]).maxBy(Object.values(self.usageHistory), (totalUses) => totalUses.totalUses);
        let obj = Frecency(outer1_1[2]);
      }
      let item = Frecency(outer1_1[2]).forEach(self.usageHistory, (recentUses) => {
        const _self = recentUses;
        recentUses = recentUses.recentUses;
        if (-1 === recentUses.frecency) {
          let closure_1 = _self.computeBonus(arg1) / 100;
          recentUses.score = 0;
          const item = Frecency(outer2_1[2]).forEach(recentUses, (arg0, arg1) => {
            if (arg1 >= closure_0.maxSamples) {
              return false;
            } else {
              closure_0.score = closure_0.score + closure_1 * closure_0.computeWeight(closure_1.diff(Frecency(outer3_1[3])(arg0), "days"));
            }
          });
          if (recentUses.score > 0) {
            if (recentUses.recentUses.length > 0) {
              const obj = { numOfRecentUses: recentUses.length };
              let totalUses;
              if (null != maxByResult) {
                totalUses = maxByResult.totalUses;
              }
              obj.maxTotalUse = totalUses;
              recentUses.frecency = _self.computeFrecency(tmp3, recentUses.score, obj);
            }
            _self.usageHistory[arg1] = recentUses;
          } else {
            const usageHistory = _self.usageHistory;
            delete tmp2[tmp];
          }
          const arr2 = Frecency(outer2_1[2]);
        }
      });
      const arr = Frecency(outer1_1[2]);
      const mapped = Frecency(outer1_1[2])(self.usageHistory).map((frecency) => {
        const lookupKeyResult = self.lookupKey(arg1);
        let tmp2 = null;
        if (null != lookupKeyResult) {
          const items = [lookupKeyResult, frecency.frecency];
          tmp2 = items;
        }
        return tmp2;
      });
      const found = mapped.filter((arg0) => null !== arg0);
      let arr2 = Frecency(outer1_1[2])(self.usageHistory);
      const mapped1 = found.sortBy((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return -tmp;
      }).map((arg0) => {
        let tmp;
        [tmp] = arg0;
        return tmp;
      });
      const sortByResult = found.sortBy((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return -tmp;
      });
      self.frequently = mapped1.take(self.numFrequentlyItems).value();
      self.dirty = false;
      self.afterCompute(self.usageHistory, self._frequently);
    }
  };
  items[8] = {
    key: "frequently",
    get() {
      const self = this;
      if (this.dirty) {
        self.compute();
      }
      return self._frequently;
    },
    set(_frequently) {
      this._frequently = _frequently;
    }
  };
  return callback(Frecency, items);
})();
const result = require("apply").fileFinishedImporting("lib/Frecency.tsx");

export default tmp2;
