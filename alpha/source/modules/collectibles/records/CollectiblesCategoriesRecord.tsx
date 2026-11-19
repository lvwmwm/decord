// Module ID: 7972
// Function ID: 7973
// Name: CollectiblesCategoriesRecord
// Dependencies: [7973, 7957, 2]

// Module 7972 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7973 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7957 */;
import size from "module_2" /* 2 */;

const f93489 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f93490 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f93489);
    const collections = categories.collections;
    obj.collections = collections.map(f93490);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f93489);
      const collections = categories.collections;
      obj.collections = collections.map(f93490);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
