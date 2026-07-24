// Module ID: 1033
// Function ID: 11119
// Name: InteractionManager
// Dependencies: [6, 7, 1032]

// Module 1033 (InteractionManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c4 = 0;

export const InteractionManager = (() => {
  class InteractionManager {
    constructor() {
      tmp = outer1_2(this, InteractionManager);
      __init = InteractionManager.prototype.__init;
      callResult = __init.call(this);
      __init2 = InteractionManager.prototype.__init2;
      callResult1 = __init2.call(this);
      return;
    }
  }
  let obj = {
    key: "__init",
    value: function __init() {
      this._longestInteractionList = [];
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "__init2",
    value: function __init2() {
      this._longestInteractionMap = new Map();
    }
  };
  items[1] = obj;
  obj = {
    key: "_resetInteractions",
    value: function _resetInteractions() {
      const outer1_4 = InteractionManager(outer1_1[2]).getInteractionCount();
      this._longestInteractionList.length = 0;
      const _longestInteractionMap = this._longestInteractionMap;
      _longestInteractionMap.clear();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_estimateP98LongestInteraction",
    value: function _estimateP98LongestInteraction() {
      const diff = this._longestInteractionList.length - 1;
      const obj = InteractionManager(outer1_1[2]);
      return this._longestInteractionList[Math.min(Math, diff, Math.floor(Math, (obj.getInteractionCount(obj) - outer1_4) / 50))];
    }
  };
  items[4] = {
    key: "_processEntry",
    value: function _processEntry(interactionId) {
      const self = this;
      const _onBeforeProcessingEntry = this._onBeforeProcessingEntry;
      if (null != _onBeforeProcessingEntry) {
        _onBeforeProcessingEntry.call(self, interactionId);
      }
      if (interactionId.interactionId) {
        const _longestInteractionList = self._longestInteractionList;
        const _longestInteractionMap = self._longestInteractionMap;
        const value = _longestInteractionMap.get(interactionId.interactionId);
        if (value) {
          if (interactionId.duration > value._latency) {
            const items = [interactionId];
            value.entries = items;
            value._latency = interactionId.duration;
            let obj = value;
          } else {
            let tmp6 = interactionId.duration === value._latency;
            if (tmp6) {
              tmp6 = interactionId.startTime === value.entries[0].startTime;
            }
            obj = value;
            if (tmp6) {
              const entries = value.entries;
              entries.push(interactionId);
              obj = value;
            }
          }
        } else {
          obj = { id: interactionId.interactionId };
          const items1 = [interactionId];
          obj.entries = items1;
          obj._latency = interactionId.duration;
          const _longestInteractionMap2 = self._longestInteractionMap;
          const result = _longestInteractionMap2.set(obj.id, obj);
          const prop = self._longestInteractionList;
          prop.push(obj);
        }
        const _longestInteractionList2 = self._longestInteractionList;
        const sorted = _longestInteractionList2.sort((_latency, _latency2) => _latency2._latency - _latency._latency);
        if (self._longestInteractionList.length > 10) {
          const prop1 = self._longestInteractionList;
          const spliceResult = prop1.splice(10);
          for (const item10061 of spliceResult) {
            let _longestInteractionMap3 = self._longestInteractionMap;
            let deleteResult = _longestInteractionMap3.delete(item10061.id);
            continue;
          }
        }
        const _onAfterProcessingINPCandidate = self._onAfterProcessingINPCandidate;
        if (null != _onAfterProcessingINPCandidate) {
          _onAfterProcessingINPCandidate.call(self, obj);
        }
        const atResult = _longestInteractionList.at(-1);
      }
    }
  };
  return _defineProperties(InteractionManager, items);
})();
