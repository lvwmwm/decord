// Module ID: 1875
// Function ID: 20885
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1875 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class BaseCollectiblesItemRecord {
    constructor(arg0) {
      self = this;
      tmp = BaseCollectiblesItemRecord(this, BaseCollectiblesItemRecord);
      obj = closure_3(BaseCollectiblesItemRecord);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.skuId = arg0.skuId;
      return tmp2Result;
    }
  }
  let closure_0 = BaseCollectiblesItemRecord;
  callback2(BaseCollectiblesItemRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(sku_id) {
        let obj = Object.create(null);
        obj.sku_id = 0;
        obj = {};
        const merged = Object.assign(Object.assign(sku_id, obj));
        obj["skuId"] = sku_id.sku_id;
        return new BaseCollectiblesItemRecord(obj);
      }
    }
  ];
  return callback(BaseCollectiblesItemRecord, null, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/collectibles/records/BaseCollectiblesItemRecord.tsx");

export default tmp2;
