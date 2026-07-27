// Module ID: 5788
// Function ID: 50942
// Name: CollectiblesCategoriesRecord
// Dependencies: [6, 7, 5789, 5771, 2]

// Module 5788 (CollectiblesCategoriesRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import StorefrontCollectionRecord from "StorefrontCollectionRecord";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const tmp2 = (() => {
  class CollectiblesCategoriesRecord {
    constructor(arg0) {
      tmp = CollectiblesCategoriesRecord(this, CollectiblesCategoriesRecord);
      categories = arg0.categories;
      this.categories = categories.map((arg0) => outer2_3.fromServer(arg0));
      collections = arg0.collections;
      this.collections = collections.map((arg0) => outer2_2.fromServer(arg0));
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(categories) {
        return new CollectiblesCategoriesRecord(categories);
      }
    }
  ];
  return callback(CollectiblesCategoriesRecord, null, items);
})();
const result = require("StorefrontCollectionRecord").fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export const CollectiblesCategoriesRecord = tmp2;
