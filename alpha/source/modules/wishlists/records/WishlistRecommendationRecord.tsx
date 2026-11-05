// Module ID: 7547
// Function ID: 7548
// Name: WishlistRecommendationRecord
// Dependencies: [1400, 2169, 2145, 2]

// Module 7547 (WishlistRecommendationRecord)
import Record from "Record" /* 1400 */;
import SKURecord from "SKURecord" /* 2169 */;
import ApplicationRecord from "ApplicationRecord" /* 2145 */;
import size from "module_2" /* 2 */;

const f91539 = (item) => SKURecord.createFromServer(item);
const f91540 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, tmp2];
  return items;
};
const f91541 = (item) => ApplicationRecord.createFromServer(item);
class WishlistRecommendationRecord extends Record {
  constructor(skus) {
    const tmp5 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp5.skus = skus.map(f91539);
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp5.skusToUserAndReason = fromEntries(entries.map(f91540));
    const applications = skus.applications;
    tmp5.applications = applications.map(f91541);
    return tmp5;
  }
  static fromServer(skus) {
    if (typeof WishlistRecommendationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
      skus = skus.skus;
      tmp7.skus = skus.map(f91539);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(skus.skus_to_user_and_reason);
      tmp7.skusToUserAndReason = fromEntries(entries.map(f91540));
      const applications = skus.applications;
      tmp7.applications = applications.map(f91541);
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default WishlistRecommendationRecord;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
