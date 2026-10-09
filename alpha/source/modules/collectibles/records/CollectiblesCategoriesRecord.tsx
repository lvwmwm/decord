// Module ID: 7274
// Function ID: 7275
// Name: CollectiblesCategoriesRecord
// Dependencies: [7275, 7258, 2]

// Module 7274 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7275 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7258 */;
import size from "module_2" /* 2 */;

const f95747 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f95748 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f95747);
    const collections = categories.collections;
    obj.collections = collections.map(f95748);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f95747);
      const collections = categories.collections;
      obj.collections = collections.map(f95748);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
