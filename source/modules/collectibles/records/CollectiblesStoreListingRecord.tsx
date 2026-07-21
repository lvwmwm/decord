// Module ID: 6778
// Function ID: 53370
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6778 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function parseStylesResponse(background_colors) {
  let tmp = background_colors;
  if (null != background_colors) {
    const obj = {};
    background_colors = background_colors.background_colors;
    obj.backgroundColors = background_colors.map((color) => {
      const tmp = callback2(closure_2[6]);
      return tmp(callback(closure_2[7]).int2hex(color));
    });
    const button_colors = background_colors.button_colors;
    obj.buttonColors = button_colors.map((color) => {
      const tmp = callback2(closure_2[6]);
      return tmp(callback(closure_2[7]).int2hex(color));
    });
    const confetti_colors = background_colors.confetti_colors;
    obj.confettiColors = confetti_colors.map((color) => {
      const tmp = callback2(closure_2[6]);
      return tmp(callback(closure_2[7]).int2hex(color));
    });
    tmp = obj;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class CollectiblesStoreListingRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, CollectiblesStoreListingRecord);
      obj = closure_6(CollectiblesStoreListingRecord);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ storeListingId: tmp6.storeListingId, skuId: tmp6.skuId, name: tmp6.name, summary } = arg0);
      trimmed = undefined;
      if (null != summary) {
        trimmed = summary.trim();
      }
      tmp2Result.summary = trimmed;
      tmp2Result.styles = arg0.styles;
      return tmp2Result;
    }
  }
  const arg1 = CollectiblesStoreListingRecord;
  callback2(CollectiblesStoreListingRecord, arg0);
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        let sku_id;
        let store_listing_id;
        let styles;
        let obj = { <string:1393091960>: "spring", <string:4117956837>: "linear", <string:3209918537>: "easeInEaseOut" };
        ({ store_listing_id, sku_id, styles } = arg0);
        Object.setPrototypeOf(null);
        obj = {};
        const merged = Object.assign(Object.assign(arg0, obj));
        obj["storeListingId"] = store_listing_id;
        obj["skuId"] = sku_id;
        obj["styles"] = callback4(styles);
        return new CollectiblesStoreListingRecord(obj);
      }
    }
  ];
  return callback(CollectiblesStoreListingRecord, null, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingRecord.tsx");

export default tmp2;
