// Module ID: 6341
// Function ID: 6342
// Name: CollectiblesShopHomeRecord
// Dependencies: [6312, 6342, 5701, 6343, 2]

// Module 6341 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5701 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 6342 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6312 */;
import size from "module_2" /* 2 */;

const f90082 = (type) => {
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
const f90083 = (item) => undefined !== item;
const f90084 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f90082);
    obj.shopBlocks = mapped.filter(f90083);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f90084);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f90082);
      obj.shopBlocks = mapped.filter(f90083);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f90084);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
