// Module ID: 6790
// Function ID: 53620
// Name: StorefrontProductRecord
// Dependencies: []

// Module 6790 (StorefrontProductRecord)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
const tmp2 = () => {
  class StorefrontProductRecord {
    constructor(arg0) {
      tmp = StorefrontProductRecord(this, StorefrontProductRecord);
      ({ id: this.id, skuIds: this.skuIds, name: this.name, summary: this.summary, options: this.options, createdAt: this.createdAt, updatedAt: this.updatedAt, skus: this.skus, primaryCollectionId: this.primaryCollectionId, primaryCollectionStyles: this.primaryCollectionStyles, primaryCollectionPdpBgUrl: this.primaryCollectionPdpBgUrl, primaryCollectionWillUnpublishAt: this.primaryCollectionWillUnpublishAt } = arg0);
      return;
    }
  }
  let closure_0 = StorefrontProductRecord;
  const items = [
    {
      key: "fromServer",
      value(sku_ids) {
        let created_at;
        let options;
        let skus;
        let tenant_metadata;
        let updated_at;
        ({ options, created_at, updated_at, skus, tenant_metadata } = sku_ids);
        let obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
        Object.setPrototypeOf(null);
        let tmp2 = StorefrontProductRecord;
        obj = {};
        const merged = Object.assign(Object.assign(sku_ids, obj));
        obj["skuIds"] = sku_ids.sku_ids;
        obj["options"] = options.map((name) => ({ name: name.name, optionValues: name.option_values }));
        obj["createdAt"] = new Date(created_at);
        const date = new Date(created_at);
        obj["updatedAt"] = new Date(updated_at);
        obj["skus"] = skus.map((arg0) => closure_3.createFromServer(arg0));
        obj["primaryCollectionId"] = tenant_metadata.collectibles.primary_collection_id;
        let fromServerResult;
        if (null != tenant_metadata.collectibles.primary_collection_styles) {
          fromServerResult = closure_2.fromServer(tenant_metadata.collectibles.primary_collection_styles);
        }
        obj["primaryCollectionStyles"] = fromServerResult;
        obj["primaryCollectionPdpBgUrl"] = tenant_metadata.collectibles.primary_collection_pdp_bg_url;
        let date2;
        if (null != tenant_metadata.collectibles.primary_collection_will_unpublish_at) {
          const _Date = Date;
          date2 = new Date(tenant_metadata.collectibles.primary_collection_will_unpublish_at);
        }
        obj["primaryCollectionWillUnpublishAt"] = date2;
        tmp2 = new tmp2(obj);
        return tmp2;
      }
    }
  ];
  return callback(StorefrontProductRecord, null, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/storefront/records/StorefrontProductRecord.tsx");

export default tmp2;
