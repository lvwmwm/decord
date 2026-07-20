// Module ID: 6781
// Function ID: 53550
// Name: CollectiblesCategoriesRecord
// Dependencies: []

// Module 6781 (CollectiblesCategoriesRecord)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = arg1(dependencyMap[4]).CollectiblesUserDiscountRecord;
const tmp2 = () => {
  class CollectiblesCategoriesRecord {
    constructor(arg0) {
      tmp = CollectiblesCategoriesRecord(this, CollectiblesCategoriesRecord);
      categories = arg0.categories;
      this.categories = categories.map((arg0) => closure_3.fromServer(arg0));
      collections = arg0.collections;
      this.collections = collections.map((arg0) => closure_2.fromServer(arg0));
      user_discounts = arg0.user_discounts;
      mapped = undefined;
      if (null != user_discounts) {
        mapped = user_discounts.map((arg0) => closure_4.fromServer(arg0));
      }
      this.userDiscounts = mapped;
      return;
    }
  }
  let closure_0 = CollectiblesCategoriesRecord;
  const items = [
    {
      key: "fromServer",
      value(categories) {
        return new CollectiblesCategoriesRecord(categories);
      }
    }
  ];
  return callback(CollectiblesCategoriesRecord, null, items);
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/collectibles/records/CollectiblesCategoriesRecord.tsx");

export const CollectiblesCategoriesRecord = tmp2;
