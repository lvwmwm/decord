// Module ID: 6310
// Function ID: 6311
// Name: CollectiblesShopHomeRecord
// Dependencies: [6281, 6311, 5670, 6312, 2]

// Module 6310 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5670 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 6311 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6281 */;
import size from "module_2" /* 2 */;

const f89588 = (type) => {
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
const f89589 = (item) => undefined !== item;
const f89590 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f89588);
    obj.shopBlocks = mapped.filter(f89589);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f89590);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f89588);
      obj.shopBlocks = mapped.filter(f89589);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f89590);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
