// Module ID: 7724
// Function ID: 7725
// Name: CollectiblesCategoriesRecord
// Dependencies: [7725, 7709, 2]

// Module 7724 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7725 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7709 */;
import size from "module_2" /* 2 */;

const f101242 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f101243 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f101242);
    const collections = categories.collections;
    obj.collections = collections.map(f101243);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f101242);
      const collections = categories.collections;
      obj.collections = collections.map(f101243);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
