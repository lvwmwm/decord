// Module ID: 7269
// Function ID: 7270
// Name: CollectiblesCategoriesRecord
// Dependencies: [7270, 7253, 2]

// Module 7269 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7270 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7253 */;
import size from "module_2" /* 2 */;

const f95539 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f95540 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f95539);
    const collections = categories.collections;
    obj.collections = collections.map(f95540);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f95539);
      const collections = categories.collections;
      obj.collections = collections.map(f95540);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
