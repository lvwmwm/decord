// Module ID: 7817
// Function ID: 7818
// Name: CollectiblesShopHomeRecord
// Dependencies: [7790, 7818, 7820, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7830, 7819, 2]

// Module 7817 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 7819 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7790 */;

require = fn;
const CountdownTimerBlockRecord = fn(7818).CountdownTimerBlockRecord;
const FeaturedBlockRecord = fn(7820).FeaturedBlockRecord;
const FeedBlockRecord = fn(7823).FeedBlockRecord;
let closure_6 = fn(7824).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = fn(7825).HeroBlockRecord;
let closure_8 = fn(7826).ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = fn(7827).RewardHeroBlockRecord;
const ShelfBlockRecord = fn(7828).ShelfBlockRecord;
let closure_11 = fn(7829).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = fn(7830).WideBannerBlockRecord;
const prototype = function CollectiblesShopHomeRecord(shop_blocks) {
  const obj = Object.create(new.target.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((type) => {
    type = type.type;
    if (ShopBlockType.ShopBlockType.HERO === type) {
      return HeroBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.FEATURED === type) {
      return FeaturedBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.FEED === type) {
      return FeedBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.WIDE_BANNER === type) {
      return WideBannerBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.SHELF === type) {
      return ShelfBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.COUNTDOWN_TIMER === type) {
      return CountdownTimerBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.IMMERSIVE_BANNER === type) {
      return closure_1_8.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.REWARD_HERO === type) {
      return RewardHeroBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_1_11.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
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
      } else if (tmp(tmp2[11]).ShopBlockType.FEATURED === type) {
        return FeaturedBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.FEED === type) {
        return FeedBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.WIDE_BANNER === type) {
        return WideBannerBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.SHELF === type) {
        return ShelfBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.COUNTDOWN_TIMER === type) {
        return CountdownTimerBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.IMMERSIVE_BANNER === type) {
        return closure_1_8.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.REWARD_HERO === type) {
        return RewardHeroBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
        return closure_1_11.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
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
