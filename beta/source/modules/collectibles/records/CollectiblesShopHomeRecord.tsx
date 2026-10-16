// Module ID: 7288
// Function ID: 7289
// Name: CollectiblesShopHomeRecord
// Dependencies: [7260, 7289, 7291, 7294, 7295, 7296, 7297, 7298, 7299, 7300, 7290, 2]

// Module 7288 (CollectiblesShopHomeRecord)
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 7289 */;
import ShopBlockType from "ShopBlockType" /* 7290 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 7291 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7294 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 7295 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7296 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 7297 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7298 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7299 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7300 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7260 */;
import size from "module_2" /* 2 */;

const f96247 = (type) => {
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
const f96248 = (item) => undefined !== item;
const f96249 = (item) => CollectiblesCategoryRecord.fromServer(item);
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
    const mapped = shop_blocks.map(f96247);
    obj.shopBlocks = mapped.filter(f96248);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f96249);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f96247);
      obj.shopBlocks = mapped.filter(f96248);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f96249);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
