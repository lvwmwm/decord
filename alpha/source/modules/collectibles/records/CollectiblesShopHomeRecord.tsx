// Module ID: 7299
// Function ID: 7300
// Name: CollectiblesShopHomeRecord
// Dependencies: [7271, 7300, 7302, 7305, 7306, 7307, 7308, 7309, 7310, 7311, 7301, 2]

// Module 7299 (CollectiblesShopHomeRecord)
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 7300 */;
import ShopBlockType from "ShopBlockType" /* 7301 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 7302 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7305 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 7306 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7307 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 7308 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7309 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7310 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7311 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7271 */;
import size from "module_2" /* 2 */;

const f96457 = (type) => {
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
const f96458 = (item) => undefined !== item;
const f96459 = (item) => CollectiblesCategoryRecord.fromServer(item);
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
    const mapped = shop_blocks.map(f96457);
    obj.shopBlocks = mapped.filter(f96458);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f96459);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f96457);
      obj.shopBlocks = mapped.filter(f96458);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f96459);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
