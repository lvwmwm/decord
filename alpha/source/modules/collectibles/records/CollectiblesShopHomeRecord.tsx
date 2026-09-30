// Module ID: 7186
// Function ID: 7187
// Name: CollectiblesShopHomeRecord
// Dependencies: [7159, 7187, 7189, 7192, 7193, 7194, 7195, 7196, 7197, 7198, 7188, 2]

// Module 7186 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 7188 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7159 */;

require = fn;
const CountdownTimerBlockRecord = fn(7187).CountdownTimerBlockRecord;
const FeaturedBlockRecord = fn(7189).FeaturedBlockRecord;
const FeedBlockRecord = fn(7192).FeedBlockRecord;
let closure_6 = fn(7193).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = fn(7194).HeroBlockRecord;
let closure_8 = fn(7195).ImmersiveBannerBlockRecord;
const ShelfBlockRecord = fn(7196).ShelfBlockRecord;
let closure_10 = fn(7197).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = fn(7198).WideBannerBlockRecord;
const prototype = function CollectiblesShopHomeRecord(shop_blocks) {
  const obj = Object.create(new.target.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((type) => {
    type = type.type;
    if (ShopBlockType.ShopBlockType.HERO === type) {
      return HeroBlockRecord.fromServer(type);
    } else if (tmp(tmp2[10]).ShopBlockType.FEATURED === type) {
      return FeaturedBlockRecord.fromServer(type);
    } else if (tmp(tmp2[10]).ShopBlockType.FEED === type) {
      return FeedBlockRecord.fromServer(type);
    } else if (tmp(tmp2[10]).ShopBlockType.WIDE_BANNER === type) {
      return WideBannerBlockRecord.fromServer(type);
    } else if (tmp(tmp2[10]).ShopBlockType.SHELF === type) {
      return ShelfBlockRecord.fromServer(type);
    } else if (tmp(tmp2[10]).ShopBlockType.COUNTDOWN_TIMER === type) {
      return CountdownTimerBlockRecord.fromServer(type);
    } else if (tmp(tmp2[10]).ShopBlockType.IMMERSIVE_BANNER === type) {
      return closure_1_8.fromServer(type);
    } else if (tmp(tmp2[10]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_1_10.fromServer(type);
    } else if (tmp(tmp2[10]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
      return closure_1_6.fromServer(type);
    }
  });
  obj.shopBlocks = mapped.filter((item) => undefined !== item);
  const categories = shop_blocks.categories;
  obj.categories = categories.map((item) => CollectiblesCategoryRecord.fromServer(item));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(shop_blocks) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map((type) => {
      type = type.type;
      if (ShopBlockType.ShopBlockType.HERO === type) {
        return HeroBlockRecord.fromServer(type);
      } else if (tmp(tmp2[10]).ShopBlockType.FEATURED === type) {
        return FeaturedBlockRecord.fromServer(type);
      } else if (tmp(tmp2[10]).ShopBlockType.FEED === type) {
        return FeedBlockRecord.fromServer(type);
      } else if (tmp(tmp2[10]).ShopBlockType.WIDE_BANNER === type) {
        return WideBannerBlockRecord.fromServer(type);
      } else if (tmp(tmp2[10]).ShopBlockType.SHELF === type) {
        return ShelfBlockRecord.fromServer(type);
      } else if (tmp(tmp2[10]).ShopBlockType.COUNTDOWN_TIMER === type) {
        return CountdownTimerBlockRecord.fromServer(type);
      } else if (tmp(tmp2[10]).ShopBlockType.IMMERSIVE_BANNER === type) {
        return closure_1_8.fromServer(type);
      } else if (tmp(tmp2[10]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
        return closure_1_10.fromServer(type);
      } else if (tmp(tmp2[10]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
        return closure_1_6.fromServer(type);
      }
    });
    obj.shopBlocks = mapped.filter((item) => undefined !== item);
    const categories = shop_blocks.categories;
    obj.categories = categories.map((item) => CollectiblesCategoryRecord.fromServer(item));
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = prototype;
