// Module ID: 7288
// Function ID: 7289
// Name: CollectiblesCategoriesRecord
// Dependencies: [7289, 7271, 2]

// Module 7288 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7289 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7271 */;
import size from "module_2" /* 2 */;

const f96447 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f96448 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f96447);
    const collections = categories.collections;
    obj.collections = collections.map(f96448);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f96447);
      const collections = categories.collections;
      obj.collections = collections.map(f96448);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
