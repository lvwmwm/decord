// Module ID: 7548
// Function ID: 7549
// Name: CollectiblesCategoriesRecord
// Dependencies: [7549, 7531, 2]

// Module 7548 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7549 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7531 */;
import size from "module_2" /* 2 */;

const f97560 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f97561 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f97560);
    const collections = categories.collections;
    obj.collections = collections.map(f97561);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f97560);
      const collections = categories.collections;
      obj.collections = collections.map(f97561);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
