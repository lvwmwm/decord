// Module ID: 7666
// Function ID: 7667
// Name: CollectiblesCategoriesRecord
// Dependencies: [7667, 7651, 2]

// Module 7666 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7667 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7651 */;
import size from "module_2" /* 2 */;

const f99355 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f99356 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f99355);
    const collections = categories.collections;
    obj.collections = collections.map(f99356);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f99355);
      const collections = categories.collections;
      obj.collections = collections.map(f99356);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
