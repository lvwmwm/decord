// Module ID: 7664
// Function ID: 7665
// Name: CollectiblesCategoriesRecord
// Dependencies: [7665, 7649, 2]

// Module 7664 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7665 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7649 */;
import size from "module_2" /* 2 */;

const f99099 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f99100 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f99099);
    const collections = categories.collections;
    obj.collections = collections.map(f99100);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f99099);
      const collections = categories.collections;
      obj.collections = collections.map(f99100);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
