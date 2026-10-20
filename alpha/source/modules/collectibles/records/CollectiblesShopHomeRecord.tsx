// Module ID: 7627
// Function ID: 7628
// Name: CollectiblesShopHomeRecord
// Dependencies: [7600, 7628, 7629, 7632, 7633, 7634, 7635, 7636, 7637, 7638, 5601, 2]

// Module 7627 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 5601 */;
import CountdownTimerBlockRecord2 from "CountdownTimerBlockRecord" /* 7628 */;
import FeaturedBlockRecord2 from "FeaturedBlockRecord" /* 7629 */;
import FeedBlockRecord2 from "FeedBlockRecord" /* 7632 */;
import GameServerHostingBannerBlockRecord from "GameServerHostingBannerBlockRecord" /* 7633 */;
import HeroBlockRecord2 from "HeroBlockRecord" /* 7634 */;
import ImmersiveBannerBlockRecord from "ImmersiveBannerBlockRecord" /* 7635 */;
import ShelfBlockRecord2 from "ShelfBlockRecord" /* 7636 */;
import SocialLayerStorefrontPromotionalBannerBlockRecord from "SocialLayerStorefrontPromotionalBannerBlockRecord" /* 7637 */;
import WideBannerBlockRecord2 from "WideBannerBlockRecord" /* 7638 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7600 */;
import size from "module_2" /* 2 */;

const f98101 = (type) => {
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
const f98102 = (item) => undefined !== item;
const f98103 = (item) => CollectiblesCategoryRecord.fromServer(item);
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
    const mapped = shop_blocks.map(f98101);
    obj.shopBlocks = mapped.filter(f98102);
    const categories = shop_blocks.categories;
    obj.categories = categories.map(f98103);
    return obj;
  }
  static fromServer(shop_blocks) {
    if (typeof CollectiblesShopHomeRecord === "function") {
      const obj = Object.create(tmp.prototype);
      shop_blocks = shop_blocks.shop_blocks;
      const mapped = shop_blocks.map(f98101);
      obj.shopBlocks = mapped.filter(f98102);
      const categories = shop_blocks.categories;
      obj.categories = categories.map(f98103);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export { CollectiblesShopHomeRecord };
