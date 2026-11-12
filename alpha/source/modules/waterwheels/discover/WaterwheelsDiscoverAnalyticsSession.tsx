// Module ID: 18882
// Function ID: 18883
// Name: WaterwheelsDiscoverAnalyticsSession
// Dependencies: [5, 32, 1266, 2]

// Module 18882 (WaterwheelsDiscoverAnalyticsSession)
import v1 from "v1" /* 1266 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let _self, c1, map, previousSessionCount;

function getItemKey(loadId) {
  return "" + loadId.loadId + ":" + loadId.itemId;
}
let closure_4 = {
  now() {
    return Date.now();
  },
  createId() {
    const obj = v1;
    return obj.v4();
  },
  setTimer(arg0, arg1) {
    return setTimeout(arg0, arg1);
  },
  clearTimer(arg0) {
    return clearTimeout(arg0);
  }
};
const hasOwnProperty = 0;
let result = size.fileFinishedImporting("modules/waterwheels/discover/WaterwheelsDiscoverAnalyticsSession.tsx");
class WaterwheelsDiscoverAnalyticsSession {
  constructor(discoverAnalyticsTracker) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = closure_4;
    }
    const merged = Object.assign({ visible: false, loadId: null, feedItems: null, dwellItems: null, activeImpressions: null, sessionId: null, sessionStartMs: 0, impressionCount: 0, dwellCount: 0, visibleItemsChangedCount: 0, interactionCount: 0, actionCount: 0, pendingActionGeneration: 0, latestDwellStartMs: 0 });
    merged[2] = [];
    merged[3] = [];
    merged[4] = new Map();
    merged.tracker = discoverAnalyticsTracker;
    merged.environment = tmp;
    new Map();
    return merged;
  }
  setFeed(loadId, memo) {
    const self = this;
    if (loadId !== this.loadId) {
      self.endAllImpressions();
      self.dwellItems = [];
    }
    self.loadId = loadId;
    self.feedItems = memo;
    map = new Map(memo.map((loadId) => {
      const items = ["" + loadId.loadId + ":" + loadId.itemId, loadId];
      return items;
    }));
    self.dwellItems = self.getCurrentItems(self.dwellItems);
    const tmp2 = self.activeImpressions[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      let tmp6 = tmp5[1];
      let value = map.get(tmp5[0]);
      if (null != value) {
        tmp6.item = tmp8;
      }
      continue;
    }
    if (self.visible) {
      self.startDwell(self.dwellItems, "list", false);
    }
  }
  setVisible(visible) {
    const self = this;
    if (visible !== this.visible) {
      self.visible = visible;
      if (visible) {
        if (self.dwellItems.length > 0) {
          self.startDwell(self.dwellItems, "focus", true);
        }
      } else {
        self.endAllImpressions();
        self.endSession();
      }
    }
  }
  updateDwellItems(dwellItems) {
    const self = this;
    const currentItems = this.getCurrentItems(dwellItems);
    this.dwellItems = currentItems;
    if (this.visible) {
      self.startDwell(currentItems, "list", false);
    }
  }
  trackSeenBatch(dwellItems) {
    const self = this;
    const currentItems = this.getCurrentItems(dwellItems);
    const visible = this.visible && 0 !== currentItems.length;
    if (visible) {
      self.report(() => {
        const tracker = self.tracker;
        const obj = { items: currentItems };
        return tracker.seenBatch(obj);
      });
    }
  }
  trackAction(dependencyMap, discoverActionParameters, arg2) {
    let obj2;
    let obj3;
    let sessionId;
    let sum;
    const self = this;
    const parameters = discoverActionParameters;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = false;
    }
    let c3;
    let impressionId;
    let obj;
    let pendingActionGeneration;
    let c0;
    if (self.visible) {
      const ensureSessionResult = self.ensureSession();
      c3 = ensureSessionResult;
      const activeImpressions = self.activeImpressions;
      const _HermesInternal = HermesInternal;
      const value = activeImpressions.get("" + dependencyMap.loadId + ":" + dependencyMap.itemId);
      impressionId = undefined;
      if (value != null) {
        impressionId = value.impressionId;
      }
      if (impressionId == null) {
        impressionId = null;
      }
      self.report(() => {
        let sum;
        const tracker = self.tracker;
        obj = { sessionId, item: dependencyMap, impressionId, sessionInteractionIndex: sum, parameters };
        sum = self.interactionCount + 1;
        self.interactionCount = sum;
        return tracker.interacted(obj);
      });
      obj = { sessionId: ensureSessionResult, item: obj2, impressionId, sessionActionIndex: sum, parameters: obj3 };
      obj2 = {};
      let merged = Object.assign(dependencyMap);
      sum = self.actionCount + 1;
      self.actionCount = sum;
      obj3 = {};
      const merged1 = Object.assign(discoverActionParameters);
      if (null != value) {
        const prop = value.interactionActionTypes;
        prop.push(discoverActionParameters.actionType);
        value.interactionCount = value.interactionCount + 1;
      }
      if (flag) {
        pendingActionGeneration = self.pendingActionGeneration;
        c0 = false;
        return (arg0) => {
          let outcome;
          c0 = arg0;
          const tmp = c0 || pendingActionGeneration !== self.pendingActionGeneration;
          if (!tmp) {
            c0 = true;
            self.report(() => {
              const tracker = self.tracker;
              obj = { outcome };
              const actioned = tracker.actioned;
              const merged = Object.assign(obj);
              return actioned(obj);
            });
          }
        };
      } else {
        self.report(() => {
          const tracker = self.tracker;
          return tracker.actioned(obj);
        });
      }
    }
  }
  invalidatePendingActions() {
    this.pendingActionGeneration = this.pendingActionGeneration + 1;
  }
  dispose() {
    this.visible = false;
    this.endAllImpressions();
    this.endSession();
    this.dwellItems = [];
  }
  getCurrentItems(dwellItems) {
    const self = this;
    const feedItems = this.feedItems;
    map = new Map(feedItems.map((loadId) => {
      const items = ["" + loadId.loadId + ":" + loadId.itemId, loadId];
      return items;
    }));
    return dwellItems.flatMap((loadId) => {
      const value = map.get("" + loadId.loadId + ":" + loadId.itemId);
      if (null != value) {
        if (value.loadId === self.loadId) {
          const items = [value];
        }
        return [];
      }
    });
  }
  ensureSession() {
    const self = this;
    if (null != this.sessionId) {
      return self.sessionId;
    } else {
      const environment = self.environment;
      const id = environment.createId();
      self.sessionId = id;
      const environment2 = self.environment;
      self.sessionStartMs = environment2.now();
      self.report(() => {
        const tracker = self.tracker;
        const obj = { sessionId: id, loadId: self.loadId, startMs: self.sessionStartMs, previousSessionCount };
        return tracker.sessionStarted(obj);
      });
      return id;
    }
  }
  startDwell(dwellItems, list, isInitiallyVisible) {
    const self = this;
    const mapped = dwellItems.map(getItemKey);
    const activeImpressions = this.activeImpressions;
    const arr = Array.from(activeImpressions.keys());
    if (mapped.length !== arr.length) {
      if (dwellItems.length > 0) {
        self.ensureSession();
      }
      self.visibleItemsChangedCount = self.visibleItemsChangedCount + 1;
      const _Map = Map;
      const self2 = this;
      const self3 = this;
      map = new Map();
      const iter = dwellItems[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        let tmp10 = getItemKey(nextResult);
        let tmp11 = tmp10;
        let activeImpressions2 = self.activeImpressions;
        let value = activeImpressions2.get(tmp10);
        if (null != value) {
          let result = map.set(tmp11, tmp13);
          let activeImpressions3 = self.activeImpressions;
          let deleteResult = activeImpressions3.delete(tmp11);
        } else {
          let result1 = map.set(tmp11, self.createImpression(tmp8, list, isInitiallyVisible));
        }
        continue;
      }
      self.endAllImpressions();
      self.activeImpressions = map;
    }
  }
  createImpression(loadId, triggerType, isInitiallyVisible) {
    let environment2;
    let environment3;
    const self = this;
    let closure_1 = "" + loadId.loadId + ":" + loadId.itemId;
    const environment = this.environment;
    const nowResult = environment.now();
    const obj = { item: loadId, impressionId: environment2.createId(), startMs: nowResult, triggerType, isInitiallyVisible, sessionImpressionIndex: null, interactionActionTypes: [], interactionCount: 0, dwell1sTimer: environment3.setTimer(() => self.trackDwell1s(closure_1, obj), 1000) };
    environment2 = this.environment;
    this.dwellCount = this.dwellCount + 1;
    this.latestDwellStartMs = nowResult;
    environment3 = this.environment;
    return obj;
  }
  trackDwell1s(arg0, arg1) {
    const self = this;
    let closure_1 = arg1;
    arg1.dwell1sTimer = null;
    const sessionId = this.sessionId;
    let tmp = this.visible && null != sessionId;
    if (tmp) {
      const activeImpressions = self.activeImpressions;
      tmp = activeImpressions.get(arg0) === arg1;
    }
    if (tmp) {
      const sum = self.impressionCount + 1;
      self.impressionCount = sum;
      arg1.sessionImpressionIndex = sum;
      self.report(() => {
        const tracker = self.tracker;
        const dwell1s = tracker.dwell1s;
        const obj = { isDwelling: true };
        const merged = Object.assign(self.toImpressionEvent(sessionId, closure_1));
        return dwell1s(obj);
      });
    }
  }
  endAllImpressions() {
    function _loop(item10024) {
      let endMs;
      _self = item10024;
      if (null != item10024.dwell1sTimer) {
        const environment = _self.environment;
        environment.clearTimer(item10024.dwell1sTimer);
        item10024.dwell1sTimer = null;
      }
      if (null != sessionId) {
        _self.report(() => {
          const tracker = self.tracker;
          const dwelled = tracker.dwelled;
          const obj = { endMs };
          const merged = Object.assign(self.toImpressionEvent(sessionId, item10024));
          return dwelled(obj);
        });
      }
    }
    const self = this;
    const sessionId = this.sessionId;
    const activeImpressions = this.activeImpressions;
    const arr = Array.from(activeImpressions.values());
    this.activeImpressions = new Map();
    new Map();
    if (0 !== arr.length) {
      let environment = this.environment;
      let closure_2 = environment.now();
      for (const item10024 of arr) {
        let tmp4 = _loop(item10024);
        continue;
      }
    }
  }
  toImpressionEvent(sessionId, impressionId) {
    let items;
    const obj = { sessionId, impressionId: impressionId.impressionId, item: impressionId.item, startMs: impressionId.startMs, triggerType: impressionId.triggerType, isInitiallyVisible: impressionId.isInitiallyVisible, interactionActionTypes: items, interactionCount: null, sessionImpressionIndex: null };
    items = [...impressionId.interactionActionTypes];
    ({ interactionCount: obj.interactionCount, sessionImpressionIndex: obj.sessionImpressionIndex } = impressionId);
    return obj;
  }
  endSession() {
    let environment;
    const self = this;
    const sessionId = this.sessionId;
    if (null != sessionId) {
      const obj = { sessionId, loadId: null, startMs: null, endMs: environment.now(), impressionCount: null, dwellCount: null, visibleItemsChangedCount: null, interactionCount: null, latestDwellStartMs: null, previousSessionCount };
      ({ loadId: obj.loadId, sessionStartMs: obj.startMs, environment } = self);
      ({ impressionCount: obj.impressionCount, dwellCount: obj.dwellCount, visibleItemsChangedCount: obj.visibleItemsChangedCount, interactionCount: obj.interactionCount, latestDwellStartMs: obj.latestDwellStartMs } = self);
      previousSessionCount = previousSessionCount + 1;
      self.sessionId = null;
      self.sessionStartMs = 0;
      self.impressionCount = 0;
      self.dwellCount = 0;
      self.visibleItemsChangedCount = 0;
      self.interactionCount = 0;
      self.actionCount = 0;
      self.latestDwellStartMs = 0;
      self.report(() => {
        const tracker = self.tracker;
        return tracker.sessionCompleted(obj);
      });
    }
  }
  report(arg0) {
    let closure_0 = arg0;
    return (async (arg0, value) => {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c2;
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              c2 = 1;
              c1 = 2;
              c0 = 1;
              const obj4 = { value: v3(), done: false };
              return obj4;
            }
          } else {
            if (1 === tmp3) {
              c2 = 0;
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 0;
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c2 = 0;
            }
            c0 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          if (0 === c2) {
            c0 = 3;
            throw tmp5;
          } else {
            c1 = 1;
          }
        }
      }
    })();
  }
}
Object.defineProperty(WaterwheelsDiscoverAnalyticsSession.prototype, "currentSessionId", {
  get: function currentSessionId() {
    return this.sessionId;
  },
  set: undefined
});

export { WaterwheelsDiscoverAnalyticsSession };
