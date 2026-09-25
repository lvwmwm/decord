// Module ID: 6985
// Function ID: 6986
// Name: CollectiblesShopHomeRecord
// Dependencies: [6958, 6986, 6988, 6991, 6992, 6993, 6994, 6995, 6996, 6997, 6998, 6987, 2]

// Module 6985 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 6987 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 6958 */;

require = fn;
const CountdownTimerBlockRecord = fn(6986).CountdownTimerBlockRecord;
const FeaturedBlockRecord = fn(6988).FeaturedBlockRecord;
const FeedBlockRecord = fn(6991).FeedBlockRecord;
let closure_6 = fn(6992).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = fn(6993).HeroBlockRecord;
let closure_8 = fn(6994).ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = fn(6995).RewardHeroBlockRecord;
const ShelfBlockRecord = fn(6996).ShelfBlockRecord;
let closure_11 = fn(6997).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = fn(6998).WideBannerBlockRecord;
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
