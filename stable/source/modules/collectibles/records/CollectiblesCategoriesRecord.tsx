// Module ID: 7845
// Function ID: 7846
// Name: CollectiblesCategoriesRecord
// Dependencies: [7846, 7830, 2]

// Module 7845 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7846 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7830 */;
import size from "module_2" /* 2 */;

const f93176 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f93177 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f93176);
    const collections = categories.collections;
    obj.collections = collections.map(f93177);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f93176);
      const collections = categories.collections;
      obj.collections = collections.map(f93177);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
