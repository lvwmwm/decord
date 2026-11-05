// Module ID: 7892
// Function ID: 7893
// Name: CollectiblesShopHomeRecord
// Dependencies: [7866, 7893, 7894, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 5825, 2]

// Module 7892 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5825 */;
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 7893 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 7894 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7897 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 7898 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7899 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 7900 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7901 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7902 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7903 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7866 */;
import size from "module_2" /* 2 */;

const f92569 = (type) => {
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
const f92570 = (item) => undefined !== item;
const f92571 = (item) => CollectiblesCategoryRecord.fromServer(item);
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
    const mapped = shop_blocks.map(f92569);
    obj.shopBlocks = mapped.filter(f92570);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f92571);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f92569);
      obj.shopBlocks = mapped.filter(f92570);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f92571);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
