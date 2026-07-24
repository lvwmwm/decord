// Module ID: 5451
// Function ID: 46602
// Name: LayerContextManager
// Dependencies: [6, 7, 31, 2]

// Module 5451 (LayerContextManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import importAllResult from "result";

let tmp2 = (() => {
  class LayerContextManager {
    constructor() {
      tmp = LayerContextManager(this, LayerContextManager);
      this.surfaceRef = { current: null };
      this.items = [];
      this.invalidate = () => null;
      return;
    }
  }
  let obj = {
    key: "add",
    value(key, component) {
      let _classCallCheck = key;
      const items = this.items;
      this.items = items.filter((key) => key.key !== _classCallCheck);
      const items1 = this.items;
      items1.push({ key, component });
      this.invalidate();
    }
  };
  let items = [obj, , ];
  obj = {
    key: "remove",
    value(arg0) {
      let _classCallCheck = arg0;
      const items = this.items;
      this.items = items.filter((key) => key.key !== _classCallCheck);
      this.invalidate();
    }
  };
  items[1] = obj;
  obj = {
    key: "setSurfaceRef",
    value(current) {
      this.surfaceRef.current = current;
    }
  };
  items[2] = obj;
  return callback(LayerContextManager, items);
})();
tmp2 = new tmp2();
const context = require("result").createContext(tmp2);
const result = require("result").fileFinishedImporting("design/components/Layers/native/LayerContext.native.tsx");

export const LayerContextManager = tmp2;
export const LayerContext = context;
