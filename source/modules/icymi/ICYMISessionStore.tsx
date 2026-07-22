// Module ID: 13218
// Function ID: 100192
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: resetGlobalState

// Module 13218 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_8 from "__exportStarResult1";
import closure_9 from "__exportStarResult1";
import closure_10 from "__exportStarResult1";
import closure_11 from "__exportStarResult1";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function endCurrentSession() {
  let flag = null != _null;
  if (flag) {
    _null.endSession();
    flag = true;
  }
  return flag;
}
function endCurrentSessionImpressions() {
  let flag = null != _null;
  if (flag) {
    _null.endAllImpressions();
    flag = true;
  }
  return flag;
}
function handleTabOpened() {
  let flag = endCurrentSession();
  if (closure_13.length > 0) {
    const prototype = tmp3.prototype;
    const tmp5 = new new.target(closure_13, "focus");
    let closure_12 = tmp5;
    flag = true;
  }
  return flag;
}
let closure_12 = null;
let closure_13 = [];
let closure_14 = 0;
const map = new Map();
const tmp3 = () => {
  class ICYMISession {
    constructor() {
      items = arg0;
      str = arg1;
      self = this;
      ICYMISession = this;
      if (arg0 === undefined) {
        items = [];
      }
      if (str === undefined) {
        str = "list";
      }
      closure_1 = str;
      tmp = closure_5(self, ICYMISession);
      obj = ICYMISession(closure_1[10]);
      self._sessionId = obj.v4();
      self._startTimestamp = Date.now();
      self._endTimestamp = null;
      self._activeItems = [];
      self._dwellCount = 0;
      self._impressionCount = 0;
      map = new Map();
      self._dwelledItemIdMap = map;
      map1 = new Map();
      self._impressionItemIdMap = map1;
      set = new Set();
      self._impressionItemTypes = set;
      self._reloadCount = 0;
      self._feedFetchCount = 0;
      self._dwelledItemsChangedCount = 0;
      self._interactionCount = 0;
      self._actionCount = 0;
      self._latestDwellStartTimeMs = 0;
      self._timeout = setTimeout(() => self.endSession(), 300000);
      ICYMIAnalytics = ICYMISession(closure_1[11]).ICYMIAnalytics;
      obj = { icymiSessionId: self._sessionId, sessionStartTimeMs: self._startTimestamp, previousIcymiSessionCount: closure_14, uxVariation: ICYMISession(closure_1[11]).DEFAULT_UX_VARIATION };
      result = ICYMIAnalytics.trackFeedSessionStarted(obj);
      if (items.length > 0) {
        startItemsDwellResult = self.startItemsDwell(items.map((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["triggerType"] = str;
          obj["isInitiallyVisible"] = true;
          return obj;
        }));
      }
      return;
    }
  }
  const arg1 = ICYMISession;
  let obj = {
    key: "sessionId",
    get() {
      return this._sessionId;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "startTimestamp",
    get() {
      return this._startTimestamp;
    }
  };
  items[1] = obj;
  obj = {
    key: "endTimestamp",
    get() {
      return this._endTimestamp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "dwellCount",
    get() {
      return this._dwellCount;
    }
  };
  items[4] = {
    key: "uniqueDwellCount",
    get() {
      return this._dwelledItemIdMap.size;
    }
  };
  items[5] = {
    key: "impressionCount",
    get() {
      return this._impressionCount;
    }
  };
  items[6] = {
    key: "uniqueImpressionCount",
    get() {
      return this._impressionItemIdMap.size;
    }
  };
  items[7] = {
    key: "interactionCount",
    get() {
      return this._interactionCount;
    }
  };
  items[8] = {
    key: "reloadCount",
    get() {
      return this._reloadCount;
    }
  };
  items[9] = {
    key: "feedFetchCount",
    get() {
      return this._feedFetchCount;
    }
  };
  items[10] = {
    key: "dwelledItemsChangedCount",
    get() {
      return this._dwelledItemsChangedCount;
    }
  };
  items[11] = {
    key: "impressionItemTypes",
    get() {
      return this._impressionItemTypes;
    }
  };
  items[12] = {
    key: "getImpression",
    value(arg0) {
      const ICYMISession = arg0;
      const _activeItems = this._activeItems;
      return _activeItems.find((itemId) => itemId.itemId === itemId);
    }
  };
  items[13] = {
    key: "startItemsDwell",
    value(arr) {
      let iter2;
      const self = this;
      const ICYMISession = this;
      this._resetTimeout();
      if (arr.length === this._activeItems.length) {
        if (arr.every((itemId) => self._activeItems[arg1].itemId === itemId.itemId)) {
          return self._activeItems;
        }
      }
      self._dwelledItemsChangedCount = self._dwelledItemsChangedCount + 1;
      const items = [];
      const _activeItems = self._activeItems;
      const set = new Set(_activeItems.map((itemId) => itemId.itemId));
      const tmp2 = callback2(arr);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let impression = self.getImpression(value.itemId);
          if (null != impression) {
            arr = items.push(impression);
            let deleteResult = set.delete(value.itemId);
          } else {
            arr = items.push(self._createImpression(value));
          }
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
      const item = set.forEach((arg0) => self._endImpression(arg0));
      self._activeItems = items;
      return self._activeItems;
    }
  };
  items[14] = {
    key: "trackItemsLongImpression",
    value(arg0) {
      let _impressionItemIdMap;
      let _impressionItemIdMap2;
      let iter2;
      let uxVariation;
      const self = this;
      const tmp = callback2(arg0);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let impression = self.getImpression(value.itemId);
          let result = impression;
          if (null == impression) {
            result = self._constructImpressionFromInput(value);
          }
          let sum = self._impressionCount + 1;
          self._impressionCount = sum;
          result.sessionImpressionIndex = sum;
          ({ _impressionItemIdMap, _impressionItemIdMap: _impressionItemIdMap2 } = self);
          value = _impressionItemIdMap2.get(value.itemId);
          let num = 0;
          if (null != value) {
            num = value;
          }
          let result1 = _impressionItemIdMap.set(value.itemId, num + 1);
          let tmp7 = closure_0;
          let tmp8 = closure_1;
          let ICYMIAnalytics = closure_0(closure_1[11]).ICYMIAnalytics;
          let obj = { icymiSessionId: self._sessionId };
          ({ impressionId: obj.impressionId, itemId: obj.itemId, itemType: obj.itemType, impressionStartTimestamp: obj.dwellStartTimeMs, triggerType: obj.triggerType } = result);
          let _dwelledItemIdMap = self._dwelledItemIdMap;
          value = _dwelledItemIdMap.get(result.itemId);
          let num2 = 0;
          if (null != value) {
            num2 = value;
          }
          obj.itemOccurenceCountInSession = num2;
          ({ itemFeedIndex: obj.itemFeedIndex, itemScore: obj.itemScore, isInitiallyVisible: obj.isInitiallyVisible, itemChannelType: obj.itemChannelType } = result);
          let tmp10 = closure_15;
          let itemCardHeight = closure_15.get(result.itemId);
          if (null == itemCardHeight) {
            itemCardHeight = result.itemCardHeight;
          }
          let tmp11 = null;
          if (null != itemCardHeight) {
            tmp11 = itemCardHeight;
          }
          obj.itemCardHeight = tmp11;
          obj.isDwelling = null != impression;
          ({ interactionActionTypes: obj.interactionActionTypes, interactionCount: obj.interactionCount, uxVariation } = result);
          if (null == uxVariation) {
            let tmp12 = closure_0;
            let tmp13 = closure_1;
            uxVariation = closure_0(closure_1[11]).DEFAULT_UX_VARIATION;
          }
          obj.uxVariation = uxVariation;
          obj.sessionImpressionIndex = result.sessionImpressionIndex;
          let trackFeedItemDwell1sResult = ICYMIAnalytics.trackFeedItemDwell1s(obj);
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
    }
  };
  items[15] = {
    key: "trackItemInteraction",
    value(id, type, actionType) {
      const self = this;
      const impression = this.getImpression(id);
      const ICYMIAnalytics = ICYMISession(closure_1[11]).ICYMIAnalytics;
      const obj = { id, type, actionType };
      let impressionId;
      if (null != impression) {
        impressionId = impression.impressionId;
      }
      obj.impressionId = impressionId;
      let uxVariation;
      if (null != impression) {
        uxVariation = impression.uxVariation;
      }
      if (null == uxVariation) {
        uxVariation = ICYMISession(closure_1[11]).DEFAULT_UX_VARIATION;
      }
      obj.uxVariation = uxVariation;
      const sum = self._interactionCount + 1;
      self._interactionCount = sum;
      obj.sessionInteractionIndex = sum;
      obj.icymiSessionId = self._sessionId;
      ICYMIAnalytics.trackItemInteraction(obj);
      if (null != impression) {
        const prop = impression.interactionActionTypes;
        prop.push(actionType);
        impression.interactionCount = impression.interactionCount + 1;
      }
    }
  };
  items[16] = {
    key: "trackFeedItemActioned",
    value(itemId) {
      const self = this;
      const impression = this.getImpression(itemId.itemId);
      const ICYMIAnalytics = ICYMISession(closure_1[11]).ICYMIAnalytics;
      const obj = { icymiSessionId: this._sessionId };
      let uxVariation;
      if (null != impression) {
        uxVariation = impression.uxVariation;
      }
      if (null == uxVariation) {
        uxVariation = ICYMISession(closure_1[11]).DEFAULT_UX_VARIATION;
      }
      obj.uxVariation = uxVariation;
      const sum = self._actionCount + 1;
      self._actionCount = sum;
      obj.sessionActionIndex = sum;
      ({ itemId: obj.itemId, itemType: obj.itemType } = itemId);
      let impressionId;
      if (null != impression) {
        impressionId = impression.impressionId;
      }
      let tmp7 = null;
      if (null != impressionId) {
        tmp7 = impressionId;
      }
      obj.impressionId = tmp7;
      obj.actionParameters = itemId.actionParameters;
      const result = ICYMIAnalytics.trackFeedItemActioned(obj);
    }
  };
  items[17] = {
    key: "trackFeedFilterActioned",
    value(itemId) {
      const self = this;
      let impression = null;
      if (null != itemId.itemId) {
        impression = self.getImpression(itemId.itemId);
      }
      const ICYMIAnalytics = ICYMISession(closure_1[11]).ICYMIAnalytics;
      const obj = { icymiSessionId: self._sessionId };
      let uxVariation;
      if (null != impression) {
        uxVariation = impression.uxVariation;
      }
      if (null == uxVariation) {
        uxVariation = ICYMISession(closure_1[11]).DEFAULT_UX_VARIATION;
      }
      obj.uxVariation = uxVariation;
      const sum = self._actionCount + 1;
      self._actionCount = sum;
      obj.sessionActionIndex = sum;
      ({ filterParameters: obj.filterParameters, itemId: obj.itemId, itemType: obj.itemType } = itemId);
      let impressionId;
      if (null != impression) {
        impressionId = impression.impressionId;
      }
      let tmp7 = null;
      if (null != impressionId) {
        tmp7 = impressionId;
      }
      obj.impressionId = tmp7;
      const result = ICYMIAnalytics.trackFeedFilterActioned(obj);
    }
  };
  items[18] = {
    key: "trackFeedPageActioned",
    value(arg0) {
      const ICYMIAnalytics = ICYMISession(closure_1[11]).ICYMIAnalytics;
      const sum = this._actionCount + 1;
      this._actionCount = sum;
      const merged = Object.assign(arg0);
      const result = ICYMIAnalytics.trackFeedPageActioned({ icymiSessionId: this._sessionId, uxVariation: ICYMISession(closure_1[11]).DEFAULT_UX_VARIATION, sessionActionIndex: sum });
    }
  };
  items[19] = {
    key: "incrementReloadCount",
    value() {
      this._resetTimeout();
      this._reloadCount = this._reloadCount + 1;
    }
  };
  items[20] = {
    key: "incrementFeedFetchCount",
    value() {
      this._feedFetchCount = this._feedFetchCount + 1;
    }
  };
  items[21] = {
    key: "endAllImpressions",
    value() {
      const ICYMISession = this;
      const items = [...this._activeItems];
      const item = items.forEach((itemId) => self._endImpression(itemId.itemId));
    }
  };
  items[22] = {
    key: "endSession",
    value() {
      this.endAllImpressions();
      this._endTimestamp = Date.now();
      const ICYMIAnalytics = ICYMISession(closure_1[11]).ICYMIAnalytics;
      const result = ICYMIAnalytics.trackFeedSessionCompleted({ icymiSessionId: this._sessionId, sessionDurationMs: this._endTimestamp - this._startTimestamp, sessionStartTimeMs: this._startTimestamp, sessionEndTimeMs: this._endTimestamp, impressionCount: this._impressionCount, uniqueImpressionCount: this._impressionItemIdMap.size, impressionItemTypes: Array.from(this._impressionItemTypes), feedReloadCount: this._reloadCount, feedDwelledItemsChangedCount: this._dwelledItemsChangedCount, feedFetchCount: this._feedFetchCount, latestDwellStartTimeMs: this._latestDwellStartTimeMs, previousIcyMiSessionCount: closure_14, interactionCount: this._interactionCount, dwelledCount: this._dwellCount, uniqueDwelledCount: this._dwelledItemIdMap.size, uxVariation: ICYMISession(closure_1[11]).DEFAULT_UX_VARIATION });
      clearTimeout(this._timeout);
      closure_14 = closure_14 + 1;
      let closure_12 = null;
      store.clear();
      return this;
    }
  };
  items[23] = {
    key: "_resetTimeout",
    value() {
      const ICYMISession = this;
      clearTimeout(this._timeout);
      this._timeout = setTimeout(() => self.endSession(), 300000);
    }
  };
  items[24] = {
    key: "_createImpression",
    value(itemId) {
      let _dwelledItemIdMap;
      let _dwelledItemIdMap2;
      const self = this;
      const result = this._constructImpressionFromInput(itemId);
      this._dwellCount = this._dwellCount + 1;
      ({ _dwelledItemIdMap, _dwelledItemIdMap: _dwelledItemIdMap2 } = this);
      const value = _dwelledItemIdMap2.get(itemId.itemId);
      let num = 0;
      if (null != value) {
        num = value;
      }
      const result1 = _dwelledItemIdMap.set(itemId.itemId, num + 1);
      const _impressionItemTypes = self._impressionItemTypes;
      _impressionItemTypes.add(itemId.itemType);
      self._latestDwellStartTimeMs = result.impressionStartTimestamp;
      return result;
    }
  };
  items[25] = {
    key: "_constructImpressionFromInput",
    value(itemId) {
      let obj = ICYMISession(closure_1[10]);
      obj = { itemId: itemId.itemId, itemType: itemId.itemType, impressionId: obj.v4(), impressionStartTimestamp: Date.now(), impressionComplete: false, triggerType: itemId.triggerType, itemFeedIndex: itemId.itemFeedIndex, itemScore: itemId.itemScore, isInitiallyVisible: itemId.isInitiallyVisible, itemChannelType: itemId.itemChannelType };
      const value = store.get(itemId.itemId);
      let tmp2 = null;
      if (null != value) {
        tmp2 = value;
      }
      obj.itemCardHeight = tmp2;
      obj.uxVariation = ICYMISession(closure_1[11]).DEFAULT_UX_VARIATION;
      obj.interactionActionTypes = [];
      obj.interactionCount = 0;
      obj.sessionImpressionIndex = null;
      return obj;
    }
  };
  items[26] = {
    key: "_endImpression",
    value(arg0) {
      const self = this;
      const ICYMISession = arg0;
      let _activeItems = this._activeItems;
      const findIndexResult = _activeItems.findIndex((itemId) => itemId.itemId === itemId);
      const tmp2 = this._activeItems[findIndexResult];
      let tmp3 = null;
      if (null != tmp2) {
        const _Date = Date;
        tmp2.impressionEndTimestamp = Date.now();
        tmp2.impressionComplete = true;
        const ICYMIAnalytics = ICYMISession(closure_1[11]).ICYMIAnalytics;
        const obj = { icymiSessionId: self._sessionId, impressionId: tmp2.impressionId, dwellTimeMs: tmp2.impressionEndTimestamp - tmp2.impressionStartTimestamp };
        ({ itemId: obj.itemId, itemType: obj.itemType, impressionStartTimestamp: obj.dwellStartTimeMs, impressionEndTimestamp: obj.dwellEndTimeMs, triggerType: obj.triggerType } = tmp2);
        const _dwelledItemIdMap = self._dwelledItemIdMap;
        const value = _dwelledItemIdMap.get(tmp2.itemId);
        let num2 = 0;
        if (null != value) {
          num2 = value;
        }
        obj.itemOccurenceCountInSession = num2;
        ({ itemFeedIndex: obj.itemFeedIndex, itemScore: obj.itemScore, isInitiallyVisible: obj.isInitiallyVisible, itemChannelType: obj.itemChannelType } = tmp2);
        let itemCardHeight = store.get(tmp2.itemId);
        if (null == itemCardHeight) {
          itemCardHeight = tmp2.itemCardHeight;
        }
        let tmp9 = null;
        if (null != itemCardHeight) {
          tmp9 = itemCardHeight;
        }
        obj.itemCardHeight = tmp9;
        let DEFAULT_UX_VARIATION = tmp2.uxVariation;
        if (null == DEFAULT_UX_VARIATION) {
          DEFAULT_UX_VARIATION = ICYMISession(closure_1[11]).DEFAULT_UX_VARIATION;
        }
        obj.uxVariation = DEFAULT_UX_VARIATION;
        ({ interactionActionTypes: obj.interactionActionTypes, interactionCount: obj.interactionCount, sessionImpressionIndex: obj.sessionImpressionIndex } = tmp2);
        ICYMIAnalytics.trackFeedItemDwelled(obj);
        _activeItems = self._activeItems;
        _activeItems.splice(findIndexResult, 1);
        tmp3 = tmp2;
      }
      return tmp3;
    }
  };
  return callback2(ICYMISession, items);
}();
let tmp4 = (Store) => {
  class ICYMISessionStore {
    constructor() {
      self = this;
      tmp = closure_5(this, ICYMISessionStore);
      obj = closure_3(ICYMISessionStore);
      tmp2 = __exportStarResult1;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ICYMISessionStore;
  callback(ICYMISessionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_10, closure_11, closure_7, closure_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "currentSession",
    get() {
      return closure_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "endedSessionCount",
    get() {
      return closure_14;
    }
  };
  items[2] = obj;
  return callback2(ICYMISessionStore, items);
}(require("__exportStarResult1").Store);
tmp4 = new tmp4(require("__exportStarResult1"), {
  ICYMI_TAB_OPENED: handleTabOpened,
  ICYMI_TAB_CLOSED: function handleTabClosed() {
    return endCurrentSession();
  },
  ICYMI_SET_FOCUSED_TAB: function handleIcymiTabFocussed(focused) {
    if (focused.focused) {
      if (null != _null) {
        if (closure_13.length > 0) {
          _null.startItemsDwell(closure_13.map((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj["triggerType"] = "focus";
            obj["isInitiallyVisible"] = true;
            return obj;
          }));
          return true;
        } else {
          return false;
        }
      } else {
        return handleTabOpened();
      }
    } else {
      return endCurrentSessionImpressions();
    }
  },
  ICYMI_ITEMS_DWELL_START: function handleItemsDwellStart(items) {
    if (null == _null) {
      const prototype = tmp3.prototype;
      const tmp6 = new tmp3(items.items, "list");
      const _null = tmp6;
    } else {
      _null.startItemsDwell(items.items);
    }
    return true;
  },
  ICYMI_ITEMS_LONG_IMPRESSION: function handleItemsLongImpression(items) {
    if (null == _null) {
      const prototype = tmp3.prototype;
      const tmp4 = new new.target(items.items, "list");
      const _null = tmp4;
    }
    const result = _null.trackItemsLongImpression(items.items);
    return true;
  },
  RELOAD_ICYMI: function handleReloadICYMI() {
    let flag = null != _null;
    if (flag) {
      _null.incrementReloadCount();
      flag = true;
    }
    return flag;
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadICYMIDehydrated() {
    let flag = null != _null;
    if (flag) {
      const result = _null.incrementFeedFetchCount();
      endCurrentSessionImpressions();
      flag = true;
    }
    return flag;
  },
  APP_STATE_UPDATE: function handleAppStateUpdate(state) {
    let tmp = "active" !== state.state;
    if (tmp) {
      tmp = null != closure_12;
    }
    if (tmp) {
      tmp = endCurrentSession();
    }
    return tmp;
  },
  CHANNEL_SELECT: function handleChannelSelected() {
    let tmp = null != closure_12;
    if (tmp) {
      tmp = endCurrentSessionImpressions();
    }
    return tmp;
  },
  ICYMI_SET_CARD_HEIGHT: function handleSetCardHeight(itemId) {
    const result = map.set(itemId.itemId, itemId.height);
    return true;
  },
  ICYMI_ITEM_INTERACTED: function handleItemInteracted(press_comments, arg1) {
    if (null == _null) {
      const prototype = tmp3.prototype;
      const tmp5 = new new.target(closure_13, "focus");
      const _null = tmp5;
    }
    _null.trackItemInteraction(press_comments.itemId, press_comments.itemType, press_comments.actionType);
    return true;
  },
  ICYMI_FEED_ITEM_ACTIONED: function handleFeedItemActioned(icymiSessionId) {
    if (null == _null) {
      const prototype = tmp3.prototype;
      const tmp5 = new new.target(closure_13, "focus");
      const _null = tmp5;
    }
    const result = _null.trackFeedItemActioned(icymiSessionId);
    return true;
  },
  ICYMI_FEED_FILTER_ACTIONED: function handleFeedFilterActioned(icymiSessionId) {
    if (null == _null) {
      const prototype = tmp3.prototype;
      const tmp5 = new new.target(closure_13, "focus");
      const _null = tmp5;
    }
    const result = _null.trackFeedFilterActioned(icymiSessionId);
    return true;
  },
  ICYMI_FEED_PAGE_ACTIONED: function handleFeedPageActioned(icymiSessionId) {
    if (null == _null) {
      const prototype = tmp3.prototype;
      const tmp5 = new new.target(closure_13, "focus");
      const _null = tmp5;
    }
    const result = _null.trackFeedPageActioned(icymiSessionId);
    return true;
  }
});
const result = require("__exportStarResult1").fileFinishedImporting("modules/icymi/ICYMISessionStore.tsx");

export default tmp4;
export const resetGlobalState = function resetGlobalState() {
  if (null != _null) {
    const _clearTimeout = clearTimeout;
    clearTimeout(_null._timeout);
  }
  const _null = null;
  let closure_13 = [];
  let closure_14 = 0;
  map.clear();
};
export const ICYMISession = tmp3;
