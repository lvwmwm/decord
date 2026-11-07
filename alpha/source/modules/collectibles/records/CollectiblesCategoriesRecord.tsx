// Module ID: 7812
// Function ID: 7813
// Name: CollectiblesCategoriesRecord
// Dependencies: [7813, 7797, 2]

// Module 7812 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7813 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7797 */;
import size from "module_2" /* 2 */;

const f93008 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f93009 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f93008);
    const collections = categories.collections;
    obj.collections = collections.map(f93009);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f93008);
      const collections = categories.collections;
      obj.collections = collections.map(f93009);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
