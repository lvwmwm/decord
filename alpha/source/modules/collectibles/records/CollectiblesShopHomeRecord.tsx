// Module ID: 6215
// Function ID: 6216
// Name: CollectiblesShopHomeRecord
// Dependencies: [6186, 6216, 5575, 6217, 2]

// Module 6215 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5575 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 6216 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6186 */;
import size from "module_2" /* 2 */;

const f89246 = (type) => {
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
const f89247 = (item) => undefined !== item;
const f89248 = (item) => CollectiblesCategoryRecord.fromServer(item);
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f89246);
    obj.shopBlocks = mapped.filter(f89247);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f89248);
    return obj;
  }
  static fromServer(shop_blocks) {
    let tmp;
    if (typeof CollectiblesShopHomeRecord === "function") {
      let tmp2 = shop_blocks;
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f89246);
      obj.shopBlocks = mapped.filter(f89247);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f89248);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
