// Module ID: 5448
// Function ID: 46578
// Name: LayerContextManager
// Dependencies: []

// Module 5448 (LayerContextManager)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let tmp2 = () => {
  class LayerContextManager {
    constructor() {
      tmp = LayerContextManager(this, LayerContextManager);
      this.surfaceRef = { current: null };
      this.items = [];
      this.invalidate = () => null;
      return;
    }
  }
  let closure_0 = LayerContextManager;
  let obj = {
    key: "add",
    value(key, component) {
      const LayerContextManager = key;
      const items = this.items;
      this.items = items.filter((key) => key.key !== key);
      const items1 = this.items;
      items1.push({ key, component });
      this.invalidate();
    }
  };
  const items = [obj, , ];
  obj = {
    key: "remove",
    value(arg0) {
      const LayerContextManager = arg0;
      const items = this.items;
      this.items = items.filter((key) => key.key !== key);
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
}();
tmp2 = new tmp2();
const context = importAll(dependencyMap[2]).createContext(tmp2);
const importAllResult = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/components/Layers/native/LayerContext.native.tsx");

export const LayerContextManager = tmp2;
export const LayerContext = context;
