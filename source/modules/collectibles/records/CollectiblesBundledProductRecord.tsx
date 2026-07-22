// Module ID: 6772
// Function ID: 53342
// Name: CollectiblesBundledProductRecord
// Dependencies: []

// Module 6772 (CollectiblesBundledProductRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class CollectiblesBundledProductRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesBundledProductRecord);
      ({ prices: this.prices, type: this.type, premiumType: this.premiumType, name: this.name, skuId: this.skuId, summary: this.summary } = arg0);
      return;
    }
  }
  const importDefault = CollectiblesBundledProductRecord;
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
        const obj = { prices: CollectiblesBundledProductRecord(closure_1[2])(prices), type, premiumType: premium_type, name, skuId: sku_id, summary };
        return new CollectiblesBundledProductRecord({ prices: CollectiblesBundledProductRecord(closure_1[2])(prices), type, premiumType: premium_type, name, skuId: sku_id, summary });
      }
    }
  ];
  return callback(CollectiblesBundledProductRecord, null, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/collectibles/records/CollectiblesBundledProductRecord.tsx");

export default tmp2;
