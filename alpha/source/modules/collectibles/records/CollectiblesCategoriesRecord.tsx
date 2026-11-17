// Module ID: 8512
// Function ID: 8513
// Name: CollectiblesCategoriesRecord
// Dependencies: [8513, 8497, 2]

// Module 8512 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 8513 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 8497 */;
import size from "module_2" /* 2 */;

const f96398 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f96399 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f96398);
    const collections = categories.collections;
    obj.collections = collections.map(f96399);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f96398);
      const collections = categories.collections;
      obj.collections = collections.map(f96399);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
