// Module ID: 8446
// Function ID: 8447
// Name: CollectiblesShopHomeRecord
// Dependencies: [8420, 8447, 5928, 8448, 2]

// Module 8446 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5928 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 8447 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 8420 */;
import size from "module_2" /* 2 */;

const f94987 = (type) => {
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
const f94988 = (item) => undefined !== item;
const f94989 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f94987);
    obj.shopBlocks = mapped.filter(f94988);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f94989);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f94987);
      obj.shopBlocks = mapped.filter(f94988);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f94989);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
