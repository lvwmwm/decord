// Module ID: 6796
// Function ID: 53677
// Name: CollectiblesUserDiscountRecord
// Dependencies: [6, 7, 2]

// Module 6796 (CollectiblesUserDiscountRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
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
  const items = [
    {
      key: "fromServer",
      value(expires_at) {
        return new CollectiblesUserDiscountRecord(expires_at);
      }
    }
  ];
  return callback(CollectiblesUserDiscountRecord, null, items);
})();
const result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesUserDiscountRecord.tsx");

export const CollectiblesUserDiscountRecord = tmp2;
