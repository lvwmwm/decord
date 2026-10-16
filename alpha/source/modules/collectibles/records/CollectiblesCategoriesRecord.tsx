// Module ID: 7502
// Function ID: 7503
// Name: CollectiblesCategoriesRecord
// Dependencies: [7503, 7485, 2]

// Module 7502 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7503 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7485 */;
import size from "module_2" /* 2 */;

const f97234 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f97235 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f97234);
    const collections = categories.collections;
    obj.collections = collections.map(f97235);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f97234);
      const collections = categories.collections;
      obj.collections = collections.map(f97235);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
