// Module ID: 7835
// Function ID: 7836
// Name: CollectiblesCategoriesRecord
// Dependencies: [7836, 7820, 2]

// Module 7835 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7836 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7820 */;
import size from "module_2" /* 2 */;

const f92669 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f92670 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f92669);
    const collections = categories.collections;
    obj.collections = collections.map(f92670);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f92669);
      const collections = categories.collections;
      obj.collections = collections.map(f92670);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
