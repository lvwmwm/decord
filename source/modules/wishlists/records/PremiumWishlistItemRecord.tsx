// Module ID: 8673
// Function ID: 68668
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: isPremiumWishlistItemRecord

// Module 8673 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[5]);
const SKUProductLines = arg1(dependencyMap[7]).SKUProductLines;
const tmp3 = (importDefaultResult) => {
  class PremiumWishlistItemRecord {
    constructor(arg0) {
      self = this;
      tmp = PremiumWishlistItemRecord(this, PremiumWishlistItemRecord);
      items = [];
      items[0] = importDefaultResult;
      obj = closure_3(PremiumWishlistItemRecord);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.skuProductLine = closure_6.PREMIUM;
      tmp2Result.sku = importDefaultResult.sku;
      return tmp2Result;
    }
  }
  let closure_0 = PremiumWishlistItemRecord;
  callback2(PremiumWishlistItemRecord, importDefaultResult);
  let obj = {
    key: "fromServer",
    value(sku) {
      const fromServer = closure_5.createFromServer(sku.sku);
      if (null == fromServer) {
        const _Error = Error;
        const error = new Error("SKU not found");
        throw error;
      } else {
        const obj = {};
        const merged = Object.assign(sku);
        obj["sku"] = fromServer;
        const prototype = PremiumWishlistItemRecord.prototype;
        const tmp9 = new PremiumWishlistItemRecord(obj);
        return tmp9;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "fromSKU",
    value(id) {
      let tmp = null;
      if (null != id) {
        const obj = { sku_id: id.id, sku_product_line: constants.PREMIUM, sku_name: id.name, sku: id };
        const prototype = PremiumWishlistItemRecord.prototype;
        tmp = new PremiumWishlistItemRecord(obj);
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(PremiumWishlistItemRecord, null, items);
}(importDefault(dependencyMap[6]));
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/wishlists/records/PremiumWishlistItemRecord.tsx");

export default tmp3;
export const isPremiumWishlistItemRecord = function isPremiumWishlistItemRecord(arg0) {
  return arg0 instanceof tmp3;
};
