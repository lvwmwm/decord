// Module ID: 12487
// Function ID: 95737
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12487 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  const ConnectionOpenTriggerPoint = arg1(dependencyMap[8]).ConnectionOpenTriggerPoint;
  ConnectionOpenTriggerPoint.trigger();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
arg1(dependencyMap[7]);
let tmp3 = (Store) => {
  class ExperimentTriggerPointStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ExperimentTriggerPointStore);
      items = [, , ];
      items[0] = closure_1(closure_2[9]);
      obj = { CONNECTION_OPEN: closure_11 };
      items[1] = obj;
      items[2] = ExperimentTriggerPointStore(closure_2[9]).DispatchBand.Early;
      obj2 = closure_6(ExperimentTriggerPointStore);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ExperimentTriggerPointStore;
  callback2(ExperimentTriggerPointStore, Store);
  const items = [
    {
      key: "initialize",
      value() {
        this.waitFor(closure_8, closure_9);
      }
    }
  ];
  return callback(ExperimentTriggerPointStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp3.displayName = "ExperimentTriggerPointStore";
tmp3 = new tmp3();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/experiments/ExperimentTriggerPointStore.tsx");

export default tmp3;
