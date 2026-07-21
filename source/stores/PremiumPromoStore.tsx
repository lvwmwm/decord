// Module ID: 12556
// Function ID: 96536
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12556 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = 180 * importDefault(dependencyMap[7]).Millis.DAY;
let closure_10 = false;
let tmp2 = (Store) => {
  class PremiumPromoStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PremiumPromoStore);
      obj = closure_5(PremiumPromoStore);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = PremiumPromoStore;
  callback2(PremiumPromoStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_7);
    }
  };
  const items = [obj, ];
  obj = {
    key: "isEligible",
    value() {
      return closure_10;
    }
  };
  items[1] = obj;
  return callback(PremiumPromoStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "PremiumPromoStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  CONNECTION_OPEN: function updatePremiumPromoEligibility() {
    let tmp2 = friendIDs.getFriendIDs().length >= 10;
    if (tmp2) {
      const _Date = Date;
      const obj = importDefault(dependencyMap[8]);
      tmp2 = importDefault(dependencyMap[8]).extractTimestamp(id.getId()) < Date.now() - closure_9;
      const extractTimestampResult = importDefault(dependencyMap[8]).extractTimestamp(id.getId());
    }
    let closure_10 = tmp2;
    return closure_10 !== tmp2;
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("stores/PremiumPromoStore.tsx");

export default tmp2;
