// Module ID: 8014
// Function ID: 8015
// Name: CollectiblesShopHomeRecord
// Dependencies: [7988, 8015, 5481, 8016, 2]

// Module 8014 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5481 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 8015 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7988 */;
import size from "module_2" /* 2 */;

const f93555 = (type) => {
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
const f93556 = (item) => undefined !== item;
const f93557 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f93555);
    obj.shopBlocks = mapped.filter(f93556);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f93557);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f93555);
      obj.shopBlocks = mapped.filter(f93556);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f93557);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
