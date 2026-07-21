// Module ID: 6799
// Function ID: 53657
// Name: CollectiblesShopHomeRecord
// Dependencies: []

// Module 6799 (CollectiblesShopHomeRecord)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).CollectiblesUserDiscountRecord;
const CountdownTimerBlockRecord = arg1(dependencyMap[4]).CountdownTimerBlockRecord;
const FeaturedBlockRecord = arg1(dependencyMap[5]).FeaturedBlockRecord;
const FeedBlockRecord = arg1(dependencyMap[6]).FeedBlockRecord;
const FramesBannerBlockRecord = arg1(dependencyMap[7]).FramesBannerBlockRecord;
let closure_10 = arg1(dependencyMap[8]).FramesProductShelfBlockRecord;
const HeroBlockRecord = arg1(dependencyMap[9]).HeroBlockRecord;
let closure_12 = arg1(dependencyMap[10]).ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = arg1(dependencyMap[11]).RewardHeroBlockRecord;
const ShelfBlockRecord = arg1(dependencyMap[12]).ShelfBlockRecord;
let closure_15 = arg1(dependencyMap[13]).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = arg1(dependencyMap[14]).WideBannerBlockRecord;
const tmp2 = () => {
  class CollectiblesShopHomeRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesShopHomeRecord);
      shop_blocks = arg0.shop_blocks;
      mapped = shop_blocks.map((type) => {
        type = type.type;
        if (callback(closure_1[15]).ShopBlockType.HERO === type) {
          return closure_11.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.FEATURED === type) {
          return closure_7.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.FEED === type) {
          return closure_8.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.WIDE_BANNER === type) {
          return closure_16.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.SHELF === type) {
          return closure_14.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.COUNTDOWN_TIMER === type) {
          return closure_6.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.IMMERSIVE_BANNER === type) {
          return closure_12.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.REWARD_HERO === type) {
          return closure_13.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
          return closure_15.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.FRAMES_BANNER === type) {
          return closure_9.fromServer(type);
        } else if (callback(closure_1[15]).ShopBlockType.FRAMES_PRODUCT_SHELF === type) {
          return closure_10.fromServer(type);
        }
      });
      this.shopBlocks = mapped.filter((arg0) => undefined !== arg0);
      categories = arg0.categories;
      this.categories = categories.map((arg0) => closure_4.fromServer(arg0));
      user_discounts = arg0.user_discounts;
      mapped1 = undefined;
      if (null != user_discounts) {
        mapped1 = user_discounts.map((arg0) => closure_5.fromServer(arg0));
      }
      this.userDiscounts = mapped1;
      return;
    }
  }
  const arg1 = CollectiblesShopHomeRecord;
  const items = [
    {
      key: "fromServer",
      value(shop_blocks) {
        return new CollectiblesShopHomeRecord(shop_blocks);
      }
    }
  ];
  return callback(CollectiblesShopHomeRecord, null, items);
}();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = tmp2;
