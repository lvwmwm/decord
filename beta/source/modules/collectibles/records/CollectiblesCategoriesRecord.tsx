// Module ID: 6979
// Function ID: 6980
// Name: CollectiblesCategoriesRecord
// Dependencies: [6980, 6963, 2]

// Module 6979 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 6980 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6963 */;
import size from "module_2" /* 2 */;

const f83654 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f83655 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f83654);
    const collections = categories.collections;
    obj.collections = collections.map(f83655);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f83654);
      const collections = categories.collections;
      obj.collections = collections.map(f83655);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
