// Module ID: 9475
// Function ID: 9476
// Name: PremiumWishlistItemRecord
// Dependencies: [2040, 9473, 1072, 2]
// Exports: isPremiumWishlistItemRecord

// Module 9475 (PremiumWishlistItemRecord)
import Constants from "Constants" /* 1072 */;
import SKURecord from "SKURecord" /* 2040 */;
import BaseWishlistItemRecord from "BaseWishlistItemRecord" /* 9473 */;
import size from "module_2" /* 2 */;

const SKUProductLines = Constants.SKUProductLines;
class PremiumWishlistItemRecord extends BaseWishlistItemRecord {
  constructor(sku) {
    const tmp = new PremiumWishlistItemRecord(sku, new.target, this);
    tmp.skuProductLine = SKUProductLines.PREMIUM;
    tmp.sku = sku.sku;
    return tmp;
  }
  static fromServer(sku) {
    const fromServer = SKURecord.createFromServer(sku.sku);
    if (null == fromServer) {
      const _Error = Error;
      const self4 = this;
      const self5 = this;
      const error = new Error("SKU not found");
      throw error;
    } else {
      const obj = { sku: fromServer };
      const merged = Object.assign(sku);
      const self = this;
      const tmp2 = PremiumWishlistItemRecord;
      if (typeof PremiumWishlistItemRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp8 = new PremiumWishlistItemRecord(obj, sku, tmp2, this);
        tmp8.skuProductLine = SKUProductLines.PREMIUM;
        tmp8.sku = obj.sku;
        return tmp8;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  static fromSKU(id) {
    let name;
    let tmp = null;
    if (null != id) {
      const obj = { sku_id: id.id, sku_product_line: SKUProductLines.PREMIUM, sku_name: name, sku: id };
      name = id.name;
      const self = this;
      if (typeof PremiumWishlistItemRecord === "function") {
        const self2 = this;
        const self3 = this;
        const tmp6 = new PremiumWishlistItemRecord(obj, name, tmp2, this, SKUProductLines);
        tmp6.skuProductLine = SKUProductLines.PREMIUM;
        tmp6.sku = obj.sku;
        tmp = tmp6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp;
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/PremiumWishlistItemRecord.tsx");

export default PremiumWishlistItemRecord;
export function isPremiumWishlistItemRecord(arg0) {
  return arg0 instanceof PremiumWishlistItemRecord;
}
