// Module ID: 7277
// Function ID: 7278
// Name: CollectiblesCategoriesRecord
// Dependencies: [7278, 7260, 2]

// Module 7277 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7278 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7260 */;
import size from "module_2" /* 2 */;

const f96237 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f96238 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f96237);
    const collections = categories.collections;
    obj.collections = collections.map(f96238);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f96237);
      const collections = categories.collections;
      obj.collections = collections.map(f96238);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
