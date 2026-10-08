// Module ID: 6918
// Function ID: 6919
// Name: WishlistRecommendationRecord
// Dependencies: [1404, 6093, 2021, 2]

// Module 6918 (WishlistRecommendationRecord)
import Record from "Record" /* 1404 */;
import SKURecord from "SKURecord" /* 6093 */;
import ApplicationRecord from "ApplicationRecord" /* 2021 */;
import size from "module_2" /* 2 */;

const f94339 = (item) => SKURecord.createFromServer(item);
const f94340 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const items = [tmp, tmp2];
  return items;
};
const f94341 = (item) => ApplicationRecord.createFromServer(item);
class WishlistRecommendationRecord extends Record {
  constructor(skus) {
    const tmp5 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
    skus = skus.skus;
    tmp5.skus = skus.map(f94339);
    const entries = Object.entries(skus.skus_to_user_and_reason);
    tmp5.skusToUserAndReason = fromEntries(entries.map(f94340));
    const applications = skus.applications;
    tmp5.applications = applications.map(f94341);
    return tmp5;
  }
  static fromServer(skus) {
    if (typeof WishlistRecommendationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp7 = new WishlistRecommendationRecord(tmp4, tmp3, tmp2, tmp);
      skus = skus.skus;
      tmp7.skus = skus.map(f94339);
      const _Object = Object;
      const _Object2 = Object;
      const entries = Object.entries(skus.skus_to_user_and_reason);
      tmp7.skusToUserAndReason = fromEntries(entries.map(f94340));
      const applications = skus.applications;
      tmp7.applications = applications.map(f94341);
      return tmp7;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecommendationRecord.tsx");

export default WishlistRecommendationRecord;
export const WishlistRecommendationReason = { WISHLIST: "WISHLIST", RECOMMENDATION: "RECOMMENDATION" };
