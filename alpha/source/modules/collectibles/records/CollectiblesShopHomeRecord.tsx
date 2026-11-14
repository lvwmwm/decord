// Module ID: 8512
// Function ID: 8513
// Name: CollectiblesShopHomeRecord
// Dependencies: [8486, 8513, 5991, 8514, 2]

// Module 8512 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5991 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 8513 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 8486 */;
import size from "module_2" /* 2 */;

const f96192 = (type) => {
  let fromServerResult;
  const tmp = require;
  const tmp2 = dependencyMap;
  if (type.type === ShopBlockType.ShopBlockType.HERO) {
    fromServerResult = HeroBlockRecord.fromServer(type);
  } else {
    const tmpResult = tmp(tmp2[3]);
    fromServerResult = tmpResult.parseNonHeroShopBlock(type);
  }
  return fromServerResult;
};
const f96193 = (item) => undefined !== item;
const f96194 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f96192);
    obj.shopBlocks = mapped.filter(f96193);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f96194);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f96192);
      obj.shopBlocks = mapped.filter(f96193);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f96194);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
