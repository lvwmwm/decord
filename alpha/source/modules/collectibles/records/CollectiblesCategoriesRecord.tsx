// Module ID: 6204
// Function ID: 6205
// Name: CollectiblesCategoriesRecord
// Dependencies: [6205, 6186, 2]

// Module 6204 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 6205 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6186 */;
import size from "module_2" /* 2 */;

const f89236 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f89237 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f89236);
    const collections = categories.collections;
    obj.collections = collections.map(f89237);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f89236);
      const collections = categories.collections;
      obj.collections = collections.map(f89237);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
