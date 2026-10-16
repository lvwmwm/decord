// Module ID: 7500
// Function ID: 7501
// Name: CollectiblesCategoriesRecord
// Dependencies: [7501, 7483, 2]

// Module 7500 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7501 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7483 */;
import size from "module_2" /* 2 */;

const f97171 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f97172 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f97171);
    const collections = categories.collections;
    obj.collections = collections.map(f97172);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f97171);
      const collections = categories.collections;
      obj.collections = collections.map(f97172);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
