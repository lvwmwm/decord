// Module ID: 7881
// Function ID: 7882
// Name: CollectiblesCategoriesRecord
// Dependencies: [7882, 7866, 2]

// Module 7881 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7882 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7866 */;
import size from "module_2" /* 2 */;

const f92559 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f92560 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f92559);
    const collections = categories.collections;
    obj.collections = collections.map(f92560);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f92559);
      const collections = categories.collections;
      obj.collections = collections.map(f92560);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
