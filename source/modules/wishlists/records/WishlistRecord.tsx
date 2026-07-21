// Module ID: 8670
// Function ID: 68644
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: getWishlistProductLines, getWishlistSkuIds, wishlistHasSkuId

// Module 8670 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[6]);
let closure_6 = importDefault(dependencyMap[7]);
let closure_7 = importDefault(dependencyMap[8]);
let closure_8 = importDefault(dependencyMap[9]);
let closure_9 = importDefault(dependencyMap[10]);
const SKUProductLines = arg1(dependencyMap[11]).SKUProductLines;
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class WishlistRecord {
    constructor(arg0) {
      self = this;
      tmp = WishlistRecord(this, WishlistRecord);
      obj = closure_3(WishlistRecord);
      tmp2 = closure_2;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, userId: tmp6.userId, items: tmp6.items, applications } = importDefaultResult);
      tmp7 = undefined;
      if (null != applications) {
        tmp7 = applications;
      }
      tmp2Result.applications = tmp7;
      return tmp2Result;
    }
  }
  let closure_0 = WishlistRecord;
  callback2(WishlistRecord, importDefaultResult);
  const items = [
    {
      key: "fromServer",
      value(wishlist_items) {
        wishlist_items = wishlist_items.wishlist_items;
        let obj = Object.create(null);
        obj.user_id = 0;
        obj.wishlist_items = 0;
        const merged = Object.assign(wishlist_items, obj);
        let tmp4 = WishlistRecord;
        obj = {};
        const mapped = wishlist_items.map((sku_product_line) => {
          sku_product_line = sku_product_line.sku_product_line;
          if (constants.COLLECTIBLES === sku_product_line) {
            return closure_7.fromServer(sku_product_line);
          } else if (constants.SOCIAL_LAYER_GAME_ITEM === sku_product_line) {
            return closure_9.fromServer(sku_product_line);
          } else if (constants.PREMIUM === sku_product_line) {
            return closure_8.fromServer(sku_product_line);
          } else {
            return closure_6.fromServer(sku_product_line);
          }
        });
        const merged1 = Object.assign(merged);
        obj["userId"] = wishlist_items.user_id;
        obj["items"] = mapped;
        const applications = merged.applications;
        let mapped1;
        if (null != applications) {
          mapped1 = applications.map((arg0) => closure_5.createFromServer(arg0));
        }
        let tmp7;
        if (null != mapped1) {
          tmp7 = mapped1;
        }
        obj["applications"] = tmp7;
        tmp4 = new tmp4(obj);
        return tmp4;
      }
    }
  ];
  return callback(WishlistRecord, null, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/wishlists/records/WishlistRecord.tsx");

export default tmp3;
export const getWishlistSkuIds = function getWishlistSkuIds(items) {
  items = items.items;
  return items.map((skuId) => skuId.skuId);
};
export const wishlistHasSkuId = function wishlistHasSkuId(items) {
  let closure_0 = arg1;
  items = items.items;
  return items.some((skuId) => skuId.skuId === arg1);
};
export const getWishlistProductLines = function getWishlistProductLines(stateFromStores) {
  const items = stateFromStores.items;
  return new Set(items.map((skuProductLine) => skuProductLine.skuProductLine));
};
