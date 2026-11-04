// Module ID: 7698
// Function ID: 7699
// Name: CollectiblesCategoriesRecord
// Dependencies: [7699, 7683, 2]

// Module 7698 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7699 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7683 */;
import size from "module_2" /* 2 */;

const f99478 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f99479 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f99478);
    const collections = categories.collections;
    obj.collections = collections.map(f99479);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f99478);
      const collections = categories.collections;
      obj.collections = collections.map(f99479);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
