// Module ID: 1875
// Function ID: 20880
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 1891, 1884, 2, 6]

// Module 1875 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_1 from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_1884 from "module_1884";
import _classCallCheck from "_classCallCheck";

function _isNativeReflectConstruct() {
  let asyncGeneratorStep = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return asyncGeneratorStep;
  }
  const result = _isNativeReflectConstruct();
}
const result = _classCallCheck.fileFinishedImporting("modules/collectibles/records/BaseCollectiblesItemRecord.tsx");

export default (arg0) => {
  class BaseCollectiblesItemRecord {
    constructor(arg0) {
      self = this;
      tmp = BaseCollectiblesItemRecord(this, BaseCollectiblesItemRecord);
      obj = _createForOfIteratorHelperLoose(BaseCollectiblesItemRecord);
      tmp2 = _defineProperties;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = _createForOfIteratorHelperLoose;
        constructResult = Reflect.construct(obj, [], _createForOfIteratorHelperLoose(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.skuId = arg0.skuId;
      return tmp2Result;
    }
  }
  let asyncGeneratorStep = BaseCollectiblesItemRecord;
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
}(require("keys"));
