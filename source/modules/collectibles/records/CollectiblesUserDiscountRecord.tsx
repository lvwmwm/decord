// Module ID: 6791
// Function ID: 53645
// Name: CollectiblesUserDiscountRecord
// Dependencies: [513, 511, 513]

// Module 6791 (CollectiblesUserDiscountRecord)
import closure_0 from "items";
import module_511 from "module_511";
import items from "items";

const result = items.fileFinishedImporting("modules/collectibles/records/CollectiblesUserDiscountRecord.tsx");

export const CollectiblesUserDiscountRecord = () => {
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
