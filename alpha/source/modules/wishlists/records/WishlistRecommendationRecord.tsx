// Module ID: 6925
// Function ID: 6926
// Name: WishlistRecommendationRecord
// Dependencies: [1405, 6095, 2022, 2]

// Module 6925 (WishlistRecommendationRecord)
import Record from "Record" /* 1405 */;
import SKURecord from "SKURecord" /* 6095 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import size from "module_2" /* 2 */;

const f94553 = (item) => SKURecord.createFromServer(item);
const f94554 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, tmp2];
  return items;
};
const f94555 = (item) => ApplicationRecord.createFromServer(item);
class WishlistRecommendationRecord extends Record {
  constructor(skus) {
    const tmp5 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp5.skus = skus.map(f94553);
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp5.skusToUserAndReason = fromEntries(entries.map(f94554));
    const applications = skus.applications;
    tmp5.applications = applications.map(f94555);
    return tmp5;
  }
  static fromServer(skus) {
    if (typeof WishlistRecommendationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
      skus = skus.skus;
      tmp7.skus = skus.map(f94553);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(skus.skus_to_user_and_reason);
      tmp7.skusToUserAndReason = fromEntries(entries.map(f94554));
      const applications = skus.applications;
      tmp7.applications = applications.map(f94555);
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default WishlistRecommendationRecord;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
