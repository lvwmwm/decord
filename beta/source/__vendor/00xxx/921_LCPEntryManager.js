// Module ID: 921
// Function ID: 922
// Name: LCPEntryManager
// Dependencies: [41, 42]

// Module 921 (LCPEntryManager)
import _classCallCheck_mod from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let _classCallCheck = _classCallCheck_mod;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class LCPEntryManager {
  constructor() {
    tmp = closure_0(this, LCPEntryManager);
    return;
  }
}
_classCallCheck = LCPEntryManager;
const entry = {
  key: "_processEntry",
  value: function _processEntry(arg0) {
    const _onBeforeProcessingEntry = this._onBeforeProcessingEntry;
    if (_onBeforeProcessingEntry != null) {
      const result = _onBeforeProcessingEntry(arg0);
    }
  }
};
const items = [entry];

export const LCPEntryManager = _createClass(LCPEntryManager, items);
