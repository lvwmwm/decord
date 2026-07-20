// Module ID: 6785
// Function ID: 53577
// Name: CollectiblesUserDiscountRecord
// Dependencies: []

// Module 6785 (CollectiblesUserDiscountRecord)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class CollectiblesUserDiscountRecord {
    constructor(arg0) {
      tmp = CollectiblesUserDiscountRecord(this, CollectiblesUserDiscountRecord);
      ({ discount_id: this.discountId, amount: this.amount } = arg0);
      date = undefined;
      if (null != arg0.expires_at) {
        tmp3 = globalThis;
        _Date = Date;
        prototype = Date.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        date = new Date(arg0.expires_at);
      }
      this.expiresAt = date;
      return;
    }
  }
  let closure_0 = CollectiblesUserDiscountRecord;
  const items = [
    {
      key: "fromServer",
      value(expires_at) {
        return new CollectiblesUserDiscountRecord(expires_at);
      }
    }
  ];
  return callback(CollectiblesUserDiscountRecord, null, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/collectibles/records/CollectiblesUserDiscountRecord.tsx");

export const CollectiblesUserDiscountRecord = tmp2;
