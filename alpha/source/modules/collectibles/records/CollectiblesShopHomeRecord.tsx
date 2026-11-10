// Module ID: 7826
// Function ID: 7827
// Name: CollectiblesShopHomeRecord
// Dependencies: [7800, 7827, 5815, 7828, 2]

// Module 7826 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5815 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7827 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7800 */;
import size from "module_2" /* 2 */;

const f93179 = (type) => {
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
const f93180 = (item) => undefined !== item;
const f93181 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f93179);
    obj.shopBlocks = mapped.filter(f93180);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f93181);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f93179);
      obj.shopBlocks = mapped.filter(f93180);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f93181);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
