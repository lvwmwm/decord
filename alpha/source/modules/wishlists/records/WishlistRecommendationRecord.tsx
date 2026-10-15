// Module ID: 7151
// Function ID: 7152
// Name: WishlistRecommendationRecord
// Dependencies: [1405, 6311, 2022, 2]

// Module 7151 (WishlistRecommendationRecord)
import Record from "Record" /* 1405 */;
import SKURecord from "SKURecord" /* 6311 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import size from "module_2" /* 2 */;

const f95672 = (item) => SKURecord.createFromServer(item);
const f95673 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, tmp2];
  return items;
};
const f95674 = (item) => ApplicationRecord.createFromServer(item);
class WishlistRecommendationRecord extends Record {
  constructor(skus) {
    const tmp5 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp5.skus = skus.map(f95672);
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp5.skusToUserAndReason = fromEntries(entries.map(f95673));
    const applications = skus.applications;
    tmp5.applications = applications.map(f95674);
    return tmp5;
  }
  static fromServer(skus) {
    if (typeof WishlistRecommendationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
      skus = skus.skus;
      tmp7.skus = skus.map(f95672);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(skus.skus_to_user_and_reason);
      tmp7.skusToUserAndReason = fromEntries(entries.map(f95673));
      const applications = skus.applications;
      tmp7.applications = applications.map(f95674);
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default WishlistRecommendationRecord;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
