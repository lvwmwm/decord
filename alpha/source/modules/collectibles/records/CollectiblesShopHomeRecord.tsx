// Module ID: 7982
// Function ID: 7983
// Name: CollectiblesShopHomeRecord
// Dependencies: [7956, 7983, 5452, 7984, 2]

// Module 7982 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5452 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7983 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7956 */;
import size from "module_2" /* 2 */;

const f91872 = (type) => {
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
const f91873 = (item) => undefined !== item;
const f91874 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f91872);
    obj.shopBlocks = mapped.filter(f91873);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f91874);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f91872);
      obj.shopBlocks = mapped.filter(f91873);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f91874);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
