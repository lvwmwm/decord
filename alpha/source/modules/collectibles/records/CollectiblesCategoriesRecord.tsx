// Module ID: 7876
// Function ID: 7877
// Name: CollectiblesCategoriesRecord
// Dependencies: [7877, 7861, 2]

// Module 7876 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7877 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7861 */;
import size from "module_2" /* 2 */;

const f92269 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f92270 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f92269);
    const collections = categories.collections;
    obj.collections = collections.map(f92270);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f92269);
      const collections = categories.collections;
      obj.collections = collections.map(f92270);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
