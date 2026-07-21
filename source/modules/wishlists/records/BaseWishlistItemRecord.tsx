// Module ID: 8671
// Function ID: 68659
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8671 (_isNativeReflectConstruct)
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
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class BaseWishlistItemRecord {
    constructor(arg0) {
      self = this;
      tmp = BaseWishlistItemRecord(this, BaseWishlistItemRecord);
      obj = closure_3(BaseWishlistItemRecord);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ sku_id: tmp6.skuId, sku_product_line: tmp6.skuProductLine, sku_name: tmp6.skuName, is_owned: tmp6.isOwned, gifter_user_id: tmp6.gifterUserId, sku: tmp6.sku } = importDefaultResult);
      return tmp2Result;
    }
  }
  let closure_0 = BaseWishlistItemRecord;
  callback2(BaseWishlistItemRecord, importDefaultResult);
  const items = [
    {
      key: "fromServer",
      value(sku) {
        let gifter_user_id;
        let is_owned;
        let sku_id;
        let sku_name;
        let sku_product_line;
        sku = sku.sku;
        let obj = { _monthsRegex: true, borderWidth: true, manualActivation: true, visibleNewlyAddedEmojis: true, connectionsChecksGroupTextNameContainer: true, NEW_EVENT_WINDOW_MILLISECONDS: true };
        ({ sku_id, sku_product_line, sku_name, is_owned, gifter_user_id } = sku);
        Object.setPrototypeOf(null);
        let tmp2 = BaseWishlistItemRecord;
        obj = {};
        const merged = Object.assign(Object.assign(sku, obj));
        obj["sku_id"] = sku_id;
        obj["sku_product_line"] = sku_product_line;
        obj["sku_name"] = sku_name;
        obj["is_owned"] = is_owned;
        obj["gifter_user_id"] = gifter_user_id;
        let fromServer;
        if (null != sku) {
          fromServer = closure_5.createFromServer(sku);
        }
        obj["sku"] = fromServer;
        tmp2 = new tmp2(obj);
        return tmp2;
      }
    }
  ];
  return callback(BaseWishlistItemRecord, null, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/wishlists/records/BaseWishlistItemRecord.tsx");

export default tmp3;
