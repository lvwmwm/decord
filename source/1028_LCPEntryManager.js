// Module ID: 1028
// Function ID: 11089
// Name: LCPEntryManager
// Dependencies: []

// Module 1028 (LCPEntryManager)
let closure_0 = require(dependencyMap[0]);
let closure_1 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const LCPEntryManager = () => {
  class LCPEntryManager {
    constructor() {
      tmp = LCPEntryManager(this, LCPEntryManager);
      return;
    }
  }
  let closure_0 = LCPEntryManager;
  const items = [
    {
      key: "_processEntry",
      value: function _processEntry(arg0) {
        const _onBeforeProcessingEntry = this._onBeforeProcessingEntry;
        if (null != _onBeforeProcessingEntry) {
          _onBeforeProcessingEntry.call(tmp, arg0);
        }
      }
    }
  ];
  return callback(LCPEntryManager, items);
}();
