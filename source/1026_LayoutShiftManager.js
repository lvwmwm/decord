// Module ID: 1026
// Function ID: 11081
// Name: LayoutShiftManager
// Dependencies: []

// Module 1026 (LayoutShiftManager)
let closure_0 = require(dependencyMap[0]);
let closure_1 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const LayoutShiftManager = () => {
  class LayoutShiftManager {
    constructor() {
      tmp = LayoutShiftManager(this, LayoutShiftManager);
      __init = LayoutShiftManager.prototype.__init;
      callResult = __init.call(this);
      __init2 = LayoutShiftManager.prototype.__init2;
      callResult1 = __init2.call(this);
      return;
    }
  }
  let closure_0 = LayoutShiftManager;
  let obj = {
    key: "__init",
    value: function __init() {
      this._sessionValue = 0;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "__init2",
    value: function __init2() {
      this._sessionEntries = [];
    }
  };
  items[1] = obj;
  obj = {
    key: "_processEntry",
    value: function _processEntry(hadRecentInput) {
      const self = this;
      if (!hadRecentInput.hadRecentInput) {
        const first = self._sessionEntries[0];
        if (self._sessionValue) {
          if (first) {
            if (tmp2) {
              if (hadRecentInput.startTime - tmp2.startTime < 1000) {
                if (hadRecentInput.startTime - first.startTime < 5000) {
                  self._sessionValue = self._sessionValue + hadRecentInput.value;
                  const _sessionEntries = self._sessionEntries;
                  _sessionEntries.push(hadRecentInput);
                }
                const _onAfterProcessingUnexpectedShift = self._onAfterProcessingUnexpectedShift;
                if (null != _onAfterProcessingUnexpectedShift) {
                  _onAfterProcessingUnexpectedShift.call(self, hadRecentInput);
                }
              }
            }
          }
        }
        self._sessionValue = hadRecentInput.value;
        const items = [hadRecentInput];
        self._sessionEntries = items;
      }
    }
  };
  items[2] = obj;
  return callback(LayoutShiftManager, items);
}();
