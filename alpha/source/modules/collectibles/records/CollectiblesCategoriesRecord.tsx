// Module ID: 7651
// Function ID: 7652
// Name: CollectiblesCategoriesRecord
// Dependencies: [7652, 7636, 2]

// Module 7651 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7652 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7636 */;
import size from "module_2" /* 2 */;

const f98918 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f98919 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f98918);
    const collections = categories.collections;
    obj.collections = collections.map(f98919);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f98918);
      const collections = categories.collections;
      obj.collections = collections.map(f98919);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
