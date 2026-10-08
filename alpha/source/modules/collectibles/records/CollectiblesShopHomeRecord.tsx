// Module ID: 7280
// Function ID: 7281
// Name: CollectiblesShopHomeRecord
// Dependencies: [7253, 7281, 7283, 7286, 7287, 7288, 7289, 7290, 7291, 7292, 7282, 2]

// Module 7280 (CollectiblesShopHomeRecord)
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 7281 */;
import ShopBlockType from "ShopBlockType" /* 7282 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 7283 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7286 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 7287 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7288 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 7289 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7290 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7291 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7292 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7253 */;
import size from "module_2" /* 2 */;

const f95548 = (type) => {
  type = type.type;
  if (ShopBlockType.ShopBlockType.HERO === type) {
    return HeroBlockRecord.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.FEATURED === type) {
    return FeaturedBlockRecord.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.FEED === type) {
    return FeedBlockRecord.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.WIDE_BANNER === type) {
    return WideBannerBlockRecord.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.SHELF === type) {
    return ShelfBlockRecord.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.COUNTDOWN_TIMER === type) {
    return CountdownTimerBlockRecord.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.IMMERSIVE_BANNER === type) {
    return closure_1_8.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
    return closure_1_10.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
    return closure_1_6.fromServer(type);
  }
};
const f95549 = (item) => undefined !== item;
const f95550 = (item) => CollectiblesCategoryRecord.fromServer(item);
const CountdownTimerBlockRecord = CountdownTimerBlockRecord2.CountdownTimerBlockRecord;
const FeaturedBlockRecord = FeaturedBlockRecord2.FeaturedBlockRecord;
const FeedBlockRecord = FeedBlockRecord2.FeedBlockRecord;
let closure_6 = GameServerHostingBannerBlockRecord.GameServerHostingBannerBlockRecord;
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
let closure_8 = ImmersiveBannerBlockRecord.ImmersiveBannerBlockRecord;
const ShelfBlockRecord = ShelfBlockRecord2.ShelfBlockRecord;
let closure_10 = SocialLayerStorefrontPromotionalBannerBlockRecord.SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = WideBannerBlockRecord2.WideBannerBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f95548);
    obj.shopBlocks = mapped.filter(f95549);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f95550);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f95548);
      obj.shopBlocks = mapped.filter(f95549);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f95550);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
