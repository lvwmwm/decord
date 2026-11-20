// Module ID: 7971
// Function ID: 7972
// Name: CollectiblesCategoriesRecord
// Dependencies: [7972, 7956, 2]

// Module 7971 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7972 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7956 */;
import size from "module_2" /* 2 */;

const f91862 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f91863 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f91862);
    const collections = categories.collections;
    obj.collections = collections.map(f91863);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f91862);
      const collections = categories.collections;
      obj.collections = collections.map(f91863);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
