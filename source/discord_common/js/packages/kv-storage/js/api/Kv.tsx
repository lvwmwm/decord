// Module ID: 1896
// Function ID: 21263
// Name: Kv
// Dependencies: []

// Module 1896 (Kv)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class Kv {
    constructor() {
      tmp = closure_2(this, Kv);
      return;
    }
  }
  const arg1 = Kv;
  let obj = {
    key: "databases",
    value() {
      const Host = Kv(closure_1[2]).Host;
      return Host.list();
    }
  };
  const items = [obj, ];
  obj = {
    key: "optimize",
    value(arg0) {
      const Host = Kv(closure_1[2]).Host;
      return Host.optimize(arg0);
    }
  };
  items[1] = obj;
  return callback(Kv, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Kv.tsx");

export const Kv = tmp2;
