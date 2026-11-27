// Module ID: 6330
// Function ID: 6331
// Name: CollectiblesCategoriesRecord
// Dependencies: [6331, 6312, 2]

// Module 6330 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 6331 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6312 */;
import size from "module_2" /* 2 */;

const f90072 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f90073 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f90072);
    const collections = categories.collections;
    obj.collections = collections.map(f90073);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f90072);
      const collections = categories.collections;
      obj.collections = collections.map(f90073);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
