// Module ID: 6990
// Function ID: 6991
// Name: CollectiblesShopHomeRecord
// Dependencies: [6963, 6991, 6993, 6996, 6997, 6998, 6999, 7000, 7001, 7002, 7003, 6992, 2]

// Module 6990 (CollectiblesShopHomeRecord)
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 6991 */;
import ShopBlockType from "ShopBlockType" /* 6992 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 6993 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 6996 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 6997 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 6998 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 6999 */;
import RewardHeroBlockRecord2 from "RewardHeroBlockRecord" /* 7000 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7001 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7002 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7003 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6963 */;
import size from "module_2" /* 2 */;

const f83663 = (type) => {
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
  } else if (ShopBlockType.ShopBlockType.REWARD_HERO === type) {
    return RewardHeroBlockRecord.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
    return closure_1_11.fromServer(type);
  } else if (ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
    return closure_1_6.fromServer(type);
  }
};
const f83664 = (item) => undefined !== item;
const f83665 = (item) => CollectiblesCategoryRecord.fromServer(item);
const CountdownTimerBlockRecord = CountdownTimerBlockRecord2.CountdownTimerBlockRecord;
const FeaturedBlockRecord = FeaturedBlockRecord2.FeaturedBlockRecord;
const FeedBlockRecord = FeedBlockRecord2.FeedBlockRecord;
let closure_6 = GameServerHostingBannerBlockRecord.GameServerHostingBannerBlockRecord;
const HeroBlockRecord = HeroBlockRecord2.HeroBlockRecord;
let closure_8 = ImmersiveBannerBlockRecord.ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = RewardHeroBlockRecord2.RewardHeroBlockRecord;
const ShelfBlockRecord = ShelfBlockRecord2.ShelfBlockRecord;
let closure_11 = SocialLayerStorefrontPromotionalBannerBlockRecord.SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = WideBannerBlockRecord2.WideBannerBlockRecord;
class CollectiblesShopHomeRecord {
  constructor(shop_blocks) {
    const obj = Object.create(new.target.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map(f83663);
    obj.shopBlocks = mapped.filter(f83664);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f83665);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f83663);
      obj.shopBlocks = mapped.filter(f83664);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f83665);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
