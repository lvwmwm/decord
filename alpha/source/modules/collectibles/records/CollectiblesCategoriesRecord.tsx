// Module ID: 7815
// Function ID: 7816
// Name: CollectiblesCategoriesRecord
// Dependencies: [7816, 7800, 2]

// Module 7815 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7816 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7800 */;
import size from "module_2" /* 2 */;

const f93169 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f93170 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f93169);
    const collections = categories.collections;
    obj.collections = collections.map(f93170);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f93169);
      const collections = categories.collections;
      obj.collections = collections.map(f93170);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
