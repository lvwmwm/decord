// Module ID: 8674
// Function ID: 68688
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: isSKUWishlistItemRecord

// Module 8674 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class SKUWishlistItemRecord {
    constructor(arg0) {
      self = this;
      tmp = SKUWishlistItemRecord(this, SKUWishlistItemRecord);
      items = [];
      items[0] = arg0;
      obj = closure_3(SKUWishlistItemRecord);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.skuProductLine = arg0.sku.productLine;
      tmp2Result.sku = arg0.sku;
      return tmp2Result;
    }
  }
  let closure_0 = SKUWishlistItemRecord;
  callback2(SKUWishlistItemRecord, arg0);
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
        const prototype = SKUWishlistItemRecord.prototype;
        const tmp9 = new SKUWishlistItemRecord(obj);
        return tmp9;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "fromSKU",
    value(sku) {
      let tmp = null;
      if (null != sku) {
        const obj = {};
        ({ id: obj.sku_id, productLine: obj.sku_product_line, name: obj.sku_name } = sku);
        obj.sku = sku;
        const prototype = SKUWishlistItemRecord.prototype;
        tmp = new SKUWishlistItemRecord(obj);
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(SKUWishlistItemRecord, null, items);
}(importDefault(dependencyMap[6]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/wishlists/records/SKUWishlistItemRecord.tsx");

export default tmp2;
export const isSKUWishlistItemRecord = function isSKUWishlistItemRecord(sku) {
  return sku instanceof tmp2;
};
