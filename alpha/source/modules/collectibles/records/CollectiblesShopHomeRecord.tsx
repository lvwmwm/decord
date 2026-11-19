// Module ID: 7983
// Function ID: 7984
// Name: CollectiblesShopHomeRecord
// Dependencies: [7957, 7984, 5450, 7985, 2]

// Module 7983 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5450 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7984 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7957 */;
import size from "module_2" /* 2 */;

const f93499 = (type) => {
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
const f93500 = (item) => undefined !== item;
const f93501 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f93499);
    obj.shopBlocks = mapped.filter(f93500);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f93501);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f93499);
      obj.shopBlocks = mapped.filter(f93500);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f93501);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
