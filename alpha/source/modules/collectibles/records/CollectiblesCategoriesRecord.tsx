// Module ID: 7736
// Function ID: 7737
// Name: CollectiblesCategoriesRecord
// Dependencies: [7737, 7721, 2]

// Module 7736 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7737 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7721 */;
import size from "module_2" /* 2 */;

const f91524 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f91525 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f91524);
    const collections = categories.collections;
    obj.collections = collections.map(f91525);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f91524);
      const collections = categories.collections;
      obj.collections = collections.map(f91525);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
