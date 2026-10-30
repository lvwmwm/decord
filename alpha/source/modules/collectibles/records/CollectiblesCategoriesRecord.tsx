// Module ID: 7729
// Function ID: 7730
// Name: CollectiblesCategoriesRecord
// Dependencies: [7730, 7714, 2]

// Module 7729 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7730 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7714 */;
import size from "module_2" /* 2 */;

const f91291 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f91292 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f91291);
    const collections = categories.collections;
    obj.collections = collections.map(f91292);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f91291);
      const collections = categories.collections;
      obj.collections = collections.map(f91292);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
