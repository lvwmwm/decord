// Module ID: 6728
// Function ID: 6729
// Name: WishlistRecommendationRecord
// Dependencies: [1392, 5696, 2009, 2]

// Module 6728 (WishlistRecommendationRecord)
import Record from "Record" /* 1392 */;
import SKURecord from "SKURecord" /* 5696 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import size from "module_2" /* 2 */;

const f92864 = (item) => SKURecord.createFromServer(item);
const f92865 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, tmp2];
  return items;
};
const f92866 = (item) => ApplicationRecord.createFromServer(item);
class WishlistRecommendationRecord extends Record {
  constructor(skus) {
    const tmp5 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp5.skus = skus.map(f92864);
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp5.skusToUserAndReason = fromEntries(entries.map(f92865));
    const applications = skus.applications;
    tmp5.applications = applications.map(f92866);
    return tmp5;
  }
  static fromServer(skus) {
    if (typeof WishlistRecommendationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
      skus = skus.skus;
      tmp7.skus = skus.map(f92864);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(skus.skus_to_user_and_reason);
      tmp7.skusToUserAndReason = fromEntries(entries.map(f92865));
      const applications = skus.applications;
      tmp7.applications = applications.map(f92866);
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default WishlistRecommendationRecord;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
