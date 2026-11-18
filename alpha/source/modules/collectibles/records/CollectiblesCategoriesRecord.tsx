// Module ID: 8003
// Function ID: 8004
// Name: CollectiblesCategoriesRecord
// Dependencies: [8004, 7988, 2]

// Module 8003 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 8004 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7988 */;
import size from "module_2" /* 2 */;

const f93545 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f93546 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f93545);
    const collections = categories.collections;
    obj.collections = collections.map(f93546);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f93545);
      const collections = categories.collections;
      obj.collections = collections.map(f93546);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
