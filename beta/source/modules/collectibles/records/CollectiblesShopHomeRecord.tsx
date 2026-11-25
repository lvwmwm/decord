// Module ID: 8102
// Function ID: 8103
// Name: CollectiblesShopHomeRecord
// Dependencies: [8076, 8103, 5571, 8104, 2]

// Module 8102 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5571 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 8103 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 8076 */;
import size from "module_2" /* 2 */;

const f92266 = (type) => {
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
const f92267 = (item) => undefined !== item;
const f92268 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f92266);
    obj.shopBlocks = mapped.filter(f92267);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f92268);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f92266);
      obj.shopBlocks = mapped.filter(f92267);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f92268);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
