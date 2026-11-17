// Module ID: 8523
// Function ID: 8524
// Name: CollectiblesShopHomeRecord
// Dependencies: [8497, 8524, 5985, 8525, 2]

// Module 8523 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5985 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 8524 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 8497 */;
import size from "module_2" /* 2 */;

const f96408 = (type) => {
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
const f96409 = (item) => undefined !== item;
const f96410 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f96408);
    obj.shopBlocks = mapped.filter(f96409);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f96410);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f96408);
      obj.shopBlocks = mapped.filter(f96409);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f96410);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
