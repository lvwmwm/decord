// Module ID: 8501
// Function ID: 8502
// Name: CollectiblesCategoriesRecord
// Dependencies: [8502, 8486, 2]

// Module 8501 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 8502 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 8486 */;
import size from "module_2" /* 2 */;

const f96182 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f96183 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f96182);
    const collections = categories.collections;
    obj.collections = collections.map(f96183);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f96182);
      const collections = categories.collections;
      obj.collections = collections.map(f96183);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
