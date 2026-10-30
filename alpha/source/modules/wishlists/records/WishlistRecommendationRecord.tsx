// Module ID: 7399
// Function ID: 7400
// Name: WishlistRecommendationRecord
// Dependencies: [1399, 2042, 2017, 2]

// Module 7399 (WishlistRecommendationRecord)
import Record from "Record" /* 1399 */;
import SKURecord from "SKURecord" /* 2042 */;
import ApplicationRecord from "ApplicationRecord" /* 2017 */;
import size from "module_2" /* 2 */;

const f90258 = (item) => SKURecord.createFromServer(item);
const f90259 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, tmp2];
  return items;
};
const f90260 = (item) => ApplicationRecord.createFromServer(item);
class WishlistRecommendationRecord extends Record {
  constructor(skus) {
    const tmp5 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp5.skus = skus.map(f90258);
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp5.skusToUserAndReason = fromEntries(entries.map(f90259));
    const applications = skus.applications;
    tmp5.applications = applications.map(f90260);
    return tmp5;
  }
  static fromServer(skus) {
    if (typeof WishlistRecommendationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
      skus = skus.skus;
      tmp7.skus = skus.map(f90258);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(skus.skus_to_user_and_reason);
      tmp7.skusToUserAndReason = fromEntries(entries.map(f90259));
      const applications = skus.applications;
      tmp7.applications = applications.map(f90260);
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default WishlistRecommendationRecord;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
