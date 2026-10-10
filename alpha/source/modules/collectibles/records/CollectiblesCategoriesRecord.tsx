// Module ID: 7281
// Function ID: 7282
// Name: CollectiblesCategoriesRecord
// Dependencies: [7282, 7264, 2]

// Module 7281 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7282 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7264 */;
import size from "module_2" /* 2 */;

const f96007 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f96008 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f96007);
    const collections = categories.collections;
    obj.collections = collections.map(f96008);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f96007);
      const collections = categories.collections;
      obj.collections = collections.map(f96008);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
