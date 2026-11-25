// Module ID: 6299
// Function ID: 6300
// Name: CollectiblesCategoriesRecord
// Dependencies: [6300, 6281, 2]

// Module 6299 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 6300 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6281 */;
import size from "module_2" /* 2 */;

const f89578 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f89579 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f89578);
    const collections = categories.collections;
    obj.collections = collections.map(f89579);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f89578);
      const collections = categories.collections;
      obj.collections = collections.map(f89579);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
