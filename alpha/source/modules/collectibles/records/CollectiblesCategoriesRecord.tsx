// Module ID: 7701
// Function ID: 7702
// Name: CollectiblesCategoriesRecord
// Dependencies: [7702, 7686, 2]

// Module 7701 (CollectiblesCategoriesRecord)
import StorefrontCollectionRecord from "StorefrontCollectionRecord" /* 7702 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7686 */;
import size from "module_2" /* 2 */;

const f100227 = (item) => CollectiblesCategoryRecord.fromServer(item);
const f100228 = (item) => StorefrontCollectionRecord.fromServer(item);
class CollectiblesCategoriesRecord {
  constructor(categories) {
    const obj = Object.create(new.target.prototype);
    categories = categories.categories;
    obj.categories = categories.map(f100227);
    const collections = categories.collections;
    obj.collections = collections.map(f100228);
    return obj;
  }
  static fromServer(categories) {
    if (typeof CollectiblesCategoriesRecord === "function") {
      const obj = Object.create(tmp.prototype);
      categories = categories.categories;
      obj.categories = categories.map(f100227);
      const collections = categories.collections;
      obj.collections = collections.map(f100228);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export { CollectiblesCategoriesRecord };
