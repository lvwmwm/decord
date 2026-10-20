// Module ID: 7613
// Function ID: 7614
// Name: CollectiblesCategoriesRecord
// Dependencies: [7614, 7597, 2]

// Module 7613 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7614 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7597 */;
import size from "module_2" /* 2 */;

const f97990 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f97991 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f97990);
    const collections = categories.collections;
    obj.collections = collections.map(f97991);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f97990);
      const collections = categories.collections;
      obj.collections = collections.map(f97991);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
