// Module ID: 9135
// Function ID: 71612
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 9135 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const obj = { IMMEDIATE: 0, [0]: "IMMEDIATE", IMMEDIATE_WITH_COOLDOWN: 1, [1]: "IMMEDIATE_WITH_COOLDOWN", IMMEDIATE_WITH_DELAY: 2, [2]: "IMMEDIATE_WITH_DELAY" };
const tmp2 = () => {
  class TrackedFeedItem {
    constructor() {
      tmp = closure_3(this, TrackedFeedItem);
      this.seenIntervals = [];
      return;
    }
  }
  const importDefault = TrackedFeedItem;
  let obj = {
    key: "maybeMarkSeen",
    value(startTimeMillis) {
      const tmp = this.seenIntervals[this.seenIntervals.length - 1];
      let flag = null == tmp;
      if (!flag) {
        flag = null != tmp.endTimeMillis;
      }
      if (flag) {
        const seenIntervals = this.seenIntervals;
        const obj = { startTimeMillis };
        seenIntervals.push(obj);
        flag = true;
      }
      return flag;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "maybeMarkUnseen",
    value(endTimeMillis) {
      const tmp = this.seenIntervals[this.seenIntervals.length - 1];
      let flag = null != tmp && null == tmp.endTimeMillis;
      if (flag) {
        tmp.endTimeMillis = endTimeMillis;
        flag = true;
      }
      return flag;
    }
  };
  items[1] = obj;
  obj = {
    key: "isVisible",
    value() {
      const tmp = this.seenIntervals[this.seenIntervals.length - 1];
      let startTimeMillis;
      if (null != tmp) {
        startTimeMillis = tmp.startTimeMillis;
      }
      let tmp3 = null != startTimeMillis;
      if (tmp3) {
        let endTimeMillis;
        if (null != tmp) {
          endTimeMillis = tmp.endTimeMillis;
        }
        tmp3 = null == endTimeMillis;
      }
      return tmp3;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "computeSeenTimeDestructive",
    value(arg0) {
      let iter3;
      const items = [];
      const tmp = callback2(this.seenIntervals);
      const iter = tmp();
      let iter2 = iter;
      let num = 0;
      let num2 = 0;
      if (!iter.done) {
        do {
          let value = iter2.value;
          if (null == value.endTimeMillis) {
            if (arg0) {
              let _Date = Date;
              let timestamp = Date.now();
              let sum = num + (timestamp - value.startTimeMillis);
              let obj = { startTimeMillis: timestamp };
              let arr = items.push(obj);
            } else {
              arr = items.push(value);
              sum = num;
            }
          } else {
            sum = num + (value.endTimeMillis - value.startTimeMillis);
          }
          iter3 = tmp();
          num = sum;
          iter2 = iter3;
          num2 = sum;
        } while (!iter3.done);
      }
      TrackedFeedItem(closure_1[3])(items.length < 2, "there should only be a single left over data");
      this.seenIntervals = items;
      return Math.round(num2);
    }
  };
  return callback(TrackedFeedItem, items);
}();
const tmp3 = () => {
  class AnalyticsFeedItemSeenManager {
    constructor(arg0) {
      self = this;
      AnalyticsFeedItemSeenManager = this;
      isPaused = arg0.isPaused;
      ({ id, windowId } = arg0);
      tmp = closure_3(this, AnalyticsFeedItemSeenManager);
      this.initialize = () => {
        const subscription = self(closure_1[4]).subscribe("ANALYTICS_FEED_ITEM_SEEN", self.handleFeedItemSeen);
        const obj = self(closure_1[4]);
        const subscription1 = self(closure_1[4]).subscribe("ANALYTICS_FEED_ITEM_UNSEEN", self.handleFeedItemUnseen);
        const obj2 = self(closure_1[4]);
        const subscription2 = self(closure_1[4]).subscribe("ANALYTICS_FEED_FLUSH", self.handleFeedItemFlush);
        const obj3 = self(closure_1[4]);
        const subscription3 = self(closure_1[4]).subscribe("APP_STATE_UPDATE", self.handleAppStateUpdate);
        const obj4 = self(closure_1[4]);
        const subscription4 = self(closure_1[4]).subscribe("WINDOW_FOCUS", self.handleWindowFocus);
        const onInitialize = self.onInitialize;
        if (null != onInitialize) {
          onInitialize.call(self);
        }
      };
      this.terminate = () => {
        self(closure_1[4]).unsubscribe("ANALYTICS_FEED_ITEM_SEEN", self.handleFeedItemSeen);
        const obj = self(closure_1[4]);
        self(closure_1[4]).unsubscribe("ANALYTICS_FEED_ITEM_UNSEEN", self.handleFeedItemUnseen);
        const obj2 = self(closure_1[4]);
        self(closure_1[4]).unsubscribe("ANALYTICS_FEED_FLUSH", self.handleFeedItemFlush);
        const obj3 = self(closure_1[4]);
        self(closure_1[4]).unsubscribe("APP_STATE_UPDATE", self.handleAppStateUpdate);
        const obj4 = self(closure_1[4]);
        self(closure_1[4]).unsubscribe("WINDOW_FOCUS", self.handleWindowFocus);
        const onTerminate = self.onTerminate;
        if (null != onTerminate) {
          onTerminate.call(self);
        }
        self.maybeFlushSeenItems(constants.IMMEDIATE);
      };
      this.handleFeedItemFlush = (id) => {
        if (self._id === id.id) {
          self.maybeFlushSeenItems(tmp);
        }
      };
      this.handleFeedItemSeen = (feedItemId) => {
        feedItemId = feedItemId.feedItemId;
        if (feedItemId.id === self._id) {
          if (self._paused) {
            const _pausedFeedItemIds = obj._pausedFeedItemIds;
            _pausedFeedItemIds.add(feedItemId);
          } else {
            const trackedFeedItem = obj.getTrackedFeedItem(feedItemId);
            const onFeedItemSeen = obj.onFeedItemSeen;
            if (null != onFeedItemSeen) {
              onFeedItemSeen.call(self, feedItemId, tmp3);
            }
          }
        }
      };
      this.handleFeedItemUnseen = (feedItemId) => {
        feedItemId = feedItemId.feedItemId;
        if (feedItemId.id === self._id) {
          if (self._paused) {
            const _pausedFeedItemIds = self._pausedFeedItemIds;
            _pausedFeedItemIds.delete(feedItemId);
          }
          const trackedFeedItem = self.getTrackedFeedItem(feedItemId);
          const onFeedItemUnseen = self.onFeedItemUnseen;
          if (null != onFeedItemUnseen) {
            onFeedItemUnseen.call(self, feedItemId, tmp6);
          }
          self.maybeFlushSeenItems();
        }
      };
      this.getTrackedFeedItem = (arg0) => {
        if (null == self.trackedFeedItems[arg0]) {
          const prototype = ctor.prototype;
          const tmp5 = new ctor();
          self.trackedFeedItems[arg0] = tmp5;
        }
        return self.trackedFeedItems[arg0];
      };
      this.getVisibleFeedItemIds = () => {
        const keys = Object.keys(self.trackedFeedItems);
        return new Set(keys.filter((arg0) => {
          let isVisibleResult;
          if (null != trackedFeedItems.trackedFeedItems[arg0]) {
            isVisibleResult = obj.isVisible();
          }
          return isVisibleResult;
        }));
      };
      this.handleAppStateUpdate = (state) => {
        state = state.state;
        let _isReactNavigationFocused = "active" === state;
        if (_isReactNavigationFocused) {
          _isReactNavigationFocused = self._isReactNavigationFocused;
        }
        if (_isReactNavigationFocused) {
          self.resume();
        }
        if ("background" === state) {
          if (self._isReactNavigationFocused) {
            self.pause();
          }
          self.maybeFlushSeenItems(constants.IMMEDIATE);
        }
      };
      this.clearPausedFeedItemIds = () => {
        self._pausedFeedItemIds = new Set();
        self._paused = false;
      };
      this.pause = () => {
        if (!self._paused) {
          const visibleFeedItemIds = self.getVisibleFeedItemIds();
          const item = visibleFeedItemIds.forEach((feedItemId) => {
            closure_0.handleFeedItemUnseen({ id: closure_0._id, feedItemId, timestampMillis: Date.now(), type: "ANALYTICS_FEED_ITEM_UNSEEN" });
          });
          self._paused = true;
          self._pausedFeedItemIds = visibleFeedItemIds;
        }
      };
      this.resume = () => {
        if (self._paused) {
          self._paused = false;
          const _pausedFeedItemIds = self._pausedFeedItemIds;
          const item = _pausedFeedItemIds.forEach((feedItemId) => {
            closure_0.handleFeedItemSeen({ id: closure_0._id, feedItemId, timestampMillis: Date.now(), type: "ANALYTICS_FEED_ITEM_SEEN" });
          });
          const result = self.clearPausedFeedItemIds();
        }
      };
      this.handleReactNavigationFocus = (_isReactNavigationFocused) => {
        self._isReactNavigationFocused = _isReactNavigationFocused;
        if (self._isReactNavigationFocused) {
          obj.resume();
        } else {
          obj.pause();
        }
      };
      this.handleWindowFocus = (windowId) => {
        if (self._windowId === windowId.windowId) {
          if (windowId.focused) {
            obj.resume();
          } else {
            obj.pause();
          }
        }
      };
      this.trackedFeedItems = {};
      this._id = id;
      this._windowId = windowId;
      set = new Set();
      this._pausedFeedItemIds = set;
      self._paused = null != isPaused && isPaused;
      self._isReactNavigationFocused = true;
      self._lastFlushTimeMillis = Date.now();
      return;
    }
  }
  const importDefault = AnalyticsFeedItemSeenManager;
  const items = [
    {
      key: "maybeFlushSeenItems",
      value(arg0) {
        const self = this;
        if (null == arg0) {
          const _Date = Date;
          if (Date.now() - self._lastFlushTimeMillis < 60000) {
            return Promise.resolve();
          }
        }
        if (arg0 === constants.IMMEDIATE_WITH_COOLDOWN) {
          const _Date2 = Date;
          if (Date.now() - self._lastFlushTimeMillis < 3000) {
            return Promise.resolve();
          }
        }
        const flushSeenItemsFunction = self.createFlushSeenItemsFunction(arg0);
        const AnalyticsFeedItemSeenManager = flushSeenItemsFunction;
        if (null == flushSeenItemsFunction) {
          let resolved = Promise.resolve();
        } else {
          const _Date3 = Date;
          self._lastFlushTimeMillis = Date.now();
          if (arg0 !== constants.IMMEDIATE) {
            if (arg0 !== constants.IMMEDIATE_WITH_COOLDOWN) {
              resolved = new Promise((arg0) => {
                const flushSeenItemsFunction = arg0;
                // CreateGeneratorClosureLongIndex (0x67)
                const timerId = setTimeout(callback(tmp), 100);
              });
            }
          }
          resolved = new Promise(() => {
            // CreateGeneratorClosureLongIndex (0x67)
            let closure_0 = callback(tmp);
            return function() {
              return callback(...arguments);
            };
          }());
        }
        return resolved;
      }
    }
  ];
  return callback(AnalyticsFeedItemSeenManager, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("utils/AnalyticsFeedItemSeenManager.tsx");

export const AnalyticsFeedTypes = { FORUM_CHANNEL: "forum_channel" };
export const ForceFlushType = obj;
export const TrackedFeedItem = tmp2;
export const AnalyticsFeedItemSeenManager = tmp3;
