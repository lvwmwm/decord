// Module ID: 8091
// Function ID: 8092
// Name: CollectiblesCategoriesRecord
// Dependencies: [8092, 8076, 2]

// Module 8091 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 8092 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 8076 */;
import size from "module_2" /* 2 */;

const f92256 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f92257 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f92256);
    const collections = categories.collections;
    obj.collections = collections.map(f92257);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f92256);
      const collections = categories.collections;
      obj.collections = collections.map(f92257);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
