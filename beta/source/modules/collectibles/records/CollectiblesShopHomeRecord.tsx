// Module ID: 6994
// Function ID: 6995
// Name: CollectiblesShopHomeRecord
// Dependencies: [6967, 6995, 6997, 7000, 7001, 7002, 7003, 7004, 7005, 7006, 7007, 6996, 2]

// Module 6994 (CollectiblesShopHomeRecord)
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 6995 */;
import ShopBlockType from "ShopBlockType" /* 6996 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 6997 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7000 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 7001 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7002 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 7003 */;
import RewardHeroBlockRecord2 from "RewardHeroBlockRecord" /* 7004 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7005 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7006 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7007 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6967 */;
import size from "module_2" /* 2 */;

const f93301 = (type) => {
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
const f93302 = (item) => undefined !== item;
const f93303 = (item) => CollectiblesCategoryRecord.fromServer(item);
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
    const mapped = shop_blocks.map(f93301);
    obj.shopBlocks = mapped.filter(f93302);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f93303);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f93301);
      obj.shopBlocks = mapped.filter(f93302);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f93303);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
