// Module ID: 6795
// Function ID: 53671
// Name: StorefrontProductRecord
// Dependencies: [6, 7, 6794, 4169, 2]

// Module 6795 (StorefrontProductRecord)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

let tmp2 = (() => {
  class StorefrontProductRecord {
    constructor(arg0) {
      tmp = StorefrontProductRecord(this, StorefrontProductRecord);
      ({ id: this.id, skuIds: this.skuIds, name: this.name, summary: this.summary, options: this.options, createdAt: this.createdAt, updatedAt: this.updatedAt, skus: this.skus, primaryCollectionId: this.primaryCollectionId, primaryCollectionStyles: this.primaryCollectionStyles, primaryCollectionPdpBgUrl: this.primaryCollectionPdpBgUrl, primaryCollectionWillUnpublishAt: this.primaryCollectionWillUnpublishAt } = arg0);
      return;
    }
  }
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
        let obj = { sku_ids: 0, options: 0, created_at: 0, updated_at: 0, skus: 0, tenant_metadata: 0 };
        Object.setPrototypeOf(null);
        let tmp2 = StorefrontProductRecord;
        obj = {};
        const merged = Object.assign(Object.assign(sku_ids, obj));
        obj["skuIds"] = sku_ids.sku_ids;
        obj["options"] = options.map((name) => ({ name: name.name, optionValues: name.option_values }));
        obj["createdAt"] = new Date(created_at);
        const date = new Date(created_at);
        obj["updatedAt"] = new Date(updated_at);
        obj["skus"] = skus.map((arg0) => outer2_3.createFromServer(arg0));
        obj["primaryCollectionId"] = tenant_metadata.collectibles.primary_collection_id;
        let fromServerResult;
        if (null != tenant_metadata.collectibles.primary_collection_styles) {
          fromServerResult = outer1_2.fromServer(tenant_metadata.collectibles.primary_collection_styles);
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
})();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/storefront/records/StorefrontProductRecord.tsx");

export default tmp2;
