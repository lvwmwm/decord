// Module ID: 7498
// Function ID: 7499
// Name: CollectiblesCategoriesRecord
// Dependencies: [7499, 7481, 2]

// Module 7498 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7499 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7481 */;
import size from "module_2" /* 2 */;

const f96884 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f96885 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f96884);
    const collections = categories.collections;
    obj.collections = collections.map(f96885);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f96884);
      const collections = categories.collections;
      obj.collections = collections.map(f96885);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
