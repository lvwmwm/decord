// Module ID: 7860
// Function ID: 7861
// Name: CollectiblesCategoriesRecord
// Dependencies: [7861, 7845, 2]

// Module 7860 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7861 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7845 */;
import size from "module_2" /* 2 */;

const f91897 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f91898 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f91897);
    const collections = categories.collections;
    obj.collections = collections.map(f91898);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f91897);
      const collections = categories.collections;
      obj.collections = collections.map(f91898);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
