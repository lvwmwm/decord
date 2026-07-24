// Module ID: 6777
// Function ID: 53396
// Name: CollectiblesBundledProductRecord
// Dependencies: [6, 7, 4171, 2]

// Module 6777 (CollectiblesBundledProductRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const tmp2 = (() => {
  class CollectiblesBundledProductRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesBundledProductRecord);
      ({ prices: this.prices, type: this.type, premiumType: this.premiumType, name: this.name, skuId: this.skuId, summary: this.summary } = arg0);
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(arg0) {
        let name;
        let premium_type;
        let prices;
        let sku_id;
        let summary;
        let type;
        ({ prices, type, premium_type, name, sku_id, summary } = arg0);
        const obj = { prices: CollectiblesBundledProductRecord(outer1_1[2])(prices), type, premiumType: premium_type, name, skuId: sku_id, summary };
        return new CollectiblesBundledProductRecord({ prices: CollectiblesBundledProductRecord(outer1_1[2])(prices), type, premiumType: premium_type, name, skuId: sku_id, summary });
      }
    }
  ];
  return callback(CollectiblesBundledProductRecord, null, items);
})();
const result = require("getPricesFromServer").fileFinishedImporting("modules/collectibles/records/CollectiblesBundledProductRecord.tsx");

export default tmp2;
