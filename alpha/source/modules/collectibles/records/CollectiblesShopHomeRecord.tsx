// Module ID: 7677
// Function ID: 7678
// Name: CollectiblesShopHomeRecord
// Dependencies: [7651, 7678, 7679, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 5640, 2]

// Module 7677 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5640 */;
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 7678 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 7679 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7682 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 7683 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7684 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 7685 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7686 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7687 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7688 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7651 */;
import size from "module_2" /* 2 */;

const f99354 = (type) => {
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
const f99355 = (item) => undefined !== item;
const f99356 = (item) => CollectiblesCategoryRecord.fromServer(item);
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
    const mapped = shop_blocks.map(f99354);
    obj.shopBlocks = mapped.filter(f99355);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f99356);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f99354);
      obj.shopBlocks = mapped.filter(f99355);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f99356);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
