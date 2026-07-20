// Module ID: 8669
// Function ID: 68656
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 4294967295, 0, 0, 4294967295, 0, 0]
// Exports: isPremiumWishlistItemRecord

// Module 8669 (_isNativeReflectConstruct)
import closure_0 from "result";
import closure_1 from "result";
import closure_2 from "result";
import closure_4 from "result";
import closure_5 from "result";
import { SKUProductLines } from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[3]);
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
result = result.fileFinishedImporting("modules/wishlists/records/PremiumWishlistItemRecord.tsx");

export default tmp3;
export const isPremiumWishlistItemRecord = function isPremiumWishlistItemRecord(arg0) {
  return arg0 instanceof tmp3;
};
