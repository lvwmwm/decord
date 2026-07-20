// Module ID: 5606
// Function ID: 47653
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5606 (_isNativeReflectConstruct)
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
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class WishlistRecommendationRecord {
    constructor(arg0) {
      self = this;
      tmp = WishlistRecommendationRecord(this, WishlistRecommendationRecord);
      obj = closure_3(WishlistRecommendationRecord);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      skus = importDefaultResult.skus;
      tmp2Result.skus = skus.map((arg0) => closure_5.createFromServer(arg0));
      entries = Object.entries(importDefaultResult.skus_to_user_and_reason);
      tmp2Result.skusToUserAndReason = Object.fromEntries(entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp, tmp2];
        return items;
      }));
      applications = importDefaultResult.applications;
      tmp2Result.applications = applications.map((arg0) => closure_6.createFromServer(arg0));
      return tmp2Result;
    }
  }
  let closure_0 = WishlistRecommendationRecord;
  callback2(WishlistRecommendationRecord, importDefaultResult);
  const items = [
    {
      key: "fromServer",
      value(skus) {
        return new WishlistRecommendationRecord(skus);
      }
    }
  ];
  return callback(WishlistRecommendationRecord, null, items);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default tmp3;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
