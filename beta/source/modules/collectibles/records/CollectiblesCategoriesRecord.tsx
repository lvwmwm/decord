// Module ID: 6983
// Function ID: 6984
// Name: CollectiblesCategoriesRecord
// Dependencies: [6984, 6967, 2]

// Module 6983 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 6984 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6967 */;
import size from "module_2" /* 2 */;

const f93292 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f93293 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f93292);
    const collections = categories.collections;
    obj.collections = collections.map(f93293);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f93292);
      const collections = categories.collections;
      obj.collections = collections.map(f93293);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
