// Module ID: 9467
// Function ID: 9468
// Name: BaseWishlistItemRecord
// Dependencies: [1408, 2167, 2]

// Module 9467 (BaseWishlistItemRecord)
import Record from "Record" /* 1408 */;
import SKURecord from "SKURecord" /* 2167 */;
import size from "module_2" /* 2 */;

class BaseWishlistItemRecord extends Record {
  constructor(shop_unpublished_at) {
    const tmp3 = new BaseWishlistItemRecord(tmp2, tmp, new.target);
    ({ sku_id: tmp3.skuId, sku_product_line: tmp3.skuProductLine, sku_name: tmp3.skuName, is_owned: tmp3.isOwned, gifter_user_id: tmp3.gifterUserId, sku: tmp3.sku, added_at: tmp3.addedAt } = shop_unpublished_at);
    let date;
    if (null != shop_unpublished_at.shop_unpublished_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(shop_unpublished_at.shop_unpublished_at);
    }
    tmp3.shopUnpublishedAt = date;
    return tmp3;
  }
  static fromServer(arg0) {
    let fromServer;
    let gifter_user_id;
    let is_owned;
    let sku;
    let sku_id;
    let sku_name;
    let sku_product_line;
    ({ sku_id, sku } = arg0);
    ({ sku_product_line, sku_name, is_owned, gifter_user_id } = arg0);
    const merged = Object.assign({ sku_id: 0, sku_product_line: 0, sku_name: 0, is_owned: 0, gifter_user_id: 0, sku: 0 });
    const merged1 = Object.assign(arg0, merged);
    const obj = { sku_id, sku_product_line, sku_name, is_owned, gifter_user_id, sku: fromServer };
    fromServer = undefined;
    const merged2 = Object.assign(merged1);
    const tmp3 = BaseWishlistItemRecord;
    if (null != sku) {
      fromServer = SKURecord.createFromServer(sku);
    }
    if (typeof tmp3 === "function") {
      const self = this;
      const self2 = this;
      const tmp8 = new BaseWishlistItemRecord(obj, merged1, merged, merged2, sku_id);
      ({ sku_id: tmp8.skuId, sku_product_line: tmp8.skuProductLine, sku_name: tmp8.skuName, is_owned: tmp8.isOwned, gifter_user_id: tmp8.gifterUserId, sku: tmp8.sku, added_at: tmp8.addedAt } = obj);
      let date;
      if (null != obj.shop_unpublished_at) {
        const _Date = Date;
        const self3 = this;
        const self4 = this;
        date = new Date(obj.shop_unpublished_at);
      }
      tmp8.shopUnpublishedAt = date;
      return tmp8;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/BaseWishlistItemRecord.tsx");

export default BaseWishlistItemRecord;
