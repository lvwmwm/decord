// Module ID: 6729
// Function ID: 6730
// Name: WishlistRecommendationRecord
// Dependencies: [1406, 2165, 2141, 2]

// Module 6729 (WishlistRecommendationRecord)
import Record from "Record" /* 1406 */;
import SKURecord from "SKURecord" /* 2165 */;
import ApplicationRecord from "ApplicationRecord" /* 2141 */;
import size from "module_2" /* 2 */;

const f89270 = (item) => SKURecord.createFromServer(item);
const f89271 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, tmp2];
  return items;
};
const f89272 = (item) => ApplicationRecord.createFromServer(item);
class WishlistRecommendationRecord extends Record {
  constructor(skus) {
    const tmp5 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp5.skus = skus.map(f89270);
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp5.skusToUserAndReason = fromEntries(entries.map(f89271));
    const applications = skus.applications;
    tmp5.applications = applications.map(f89272);
    return tmp5;
  }
  static fromServer(skus) {
    if (typeof WishlistRecommendationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
      skus = skus.skus;
      tmp7.skus = skus.map(f89270);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(skus.skus_to_user_and_reason);
      tmp7.skusToUserAndReason = fromEntries(entries.map(f89271));
      const applications = skus.applications;
      tmp7.applications = applications.map(f89272);
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default WishlistRecommendationRecord;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
