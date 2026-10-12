// Module ID: 7282
// Function ID: 7283
// Name: CollectiblesCategoriesRecord
// Dependencies: [7283, 7265, 2]

// Module 7282 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7283 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7265 */;
import size from "module_2" /* 2 */;

const f96226 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f96227 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f96226);
    const collections = categories.collections;
    obj.collections = collections.map(f96227);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f96226);
      const collections = categories.collections;
      obj.collections = collections.map(f96227);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
