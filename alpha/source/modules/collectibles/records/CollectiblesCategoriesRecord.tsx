// Module ID: 7667
// Function ID: 7668
// Name: CollectiblesCategoriesRecord
// Dependencies: [7668, 7652, 2]

// Module 7667 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7668 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7652 */;
import size from "module_2" /* 2 */;

const f99612 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f99613 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f99612);
    const collections = categories.collections;
    obj.collections = collections.map(f99613);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f99612);
      const collections = categories.collections;
      obj.collections = collections.map(f99613);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
