// Module ID: 7616
// Function ID: 7617
// Name: CollectiblesCategoriesRecord
// Dependencies: [7617, 7600, 2]

// Module 7616 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7617 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7600 */;
import size from "module_2" /* 2 */;

const f98091 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f98092 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f98091);
    const collections = categories.collections;
    obj.collections = collections.map(f98092);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f98091);
      const collections = categories.collections;
      obj.collections = collections.map(f98092);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
