// Module ID: 8435
// Function ID: 8436
// Name: CollectiblesCategoriesRecord
// Dependencies: [8436, 8420, 2]

// Module 8435 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 8436 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 8420 */;
import size from "module_2" /* 2 */;

const f94977 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f94978 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f94977);
    const collections = categories.collections;
    obj.collections = collections.map(f94978);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f94977);
      const collections = categories.collections;
      obj.collections = collections.map(f94978);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
