// Module ID: 12498
// Function ID: 95775
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12498 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  const MobileConnectionOpenTriggerPoint = arg1(dependencyMap[7]).MobileConnectionOpenTriggerPoint;
  MobileConnectionOpenTriggerPoint.trigger();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let tmp2 = (Store) => {
  class MobileExperimentTriggerPointStore {
    constructor() {
      self = this;
      tmp = closure_3(this, MobileExperimentTriggerPointStore);
      items = [, , ];
      items[0] = closure_1(closure_2[8]);
      obj = { CONNECTION_OPEN: closure_11 };
      items[1] = obj;
      items[2] = MobileExperimentTriggerPointStore(closure_2[8]).DispatchBand.Early;
      obj2 = closure_6(MobileExperimentTriggerPointStore);
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
  const arg1 = MobileExperimentTriggerPointStore;
  callback2(MobileExperimentTriggerPointStore, Store);
  const items = [
    {
      key: "initialize",
      value() {
        this.waitFor(closure_8, closure_9);
      }
    }
  ];
  return callback(MobileExperimentTriggerPointStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "MobileExperimentTriggerPointStore";
tmp2 = new tmp2();
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/experiments/native/MobileExperimentTriggerPointStore.tsx");

export default tmp2;
