// Module ID: 7650
// Function ID: 7651
// Name: CollectiblesCategoriesRecord
// Dependencies: [7651, 7635, 2]

// Module 7650 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7651 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7635 */;
import size from "module_2" /* 2 */;

const f98820 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f98821 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f98820);
    const collections = categories.collections;
    obj.collections = collections.map(f98821);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f98820);
      const collections = categories.collections;
      obj.collections = collections.map(f98821);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
