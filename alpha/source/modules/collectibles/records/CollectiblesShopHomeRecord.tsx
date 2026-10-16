// Module ID: 7511
// Function ID: 7512
// Name: CollectiblesShopHomeRecord
// Dependencies: [7483, 7512, 7514, 7517, 7518, 7519, 7520, 7521, 7522, 7523, 7513, 2]

// Module 7511 (CollectiblesShopHomeRecord)
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 7512 */;
import ShopBlockType from "ShopBlockType" /* 7513 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 7514 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7517 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 7518 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7519 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 7520 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7521 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7522 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7523 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7483 */;
import size from "module_2" /* 2 */;

const f97181 = (type) => {
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
const f97182 = (item) => undefined !== item;
const f97183 = (item) => CollectiblesCategoryRecord.fromServer(item);
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
    const mapped = shop_blocks.map(f97181);
    obj.shopBlocks = mapped.filter(f97182);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f97183);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f97181);
      obj.shopBlocks = mapped.filter(f97182);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f97183);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
