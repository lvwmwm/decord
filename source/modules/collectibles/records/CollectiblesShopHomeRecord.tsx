// Module ID: 6799
// Function ID: 53665
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
let closure_11 = arg1(dependencyMap[9]).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = arg1(dependencyMap[10]).HeroBlockRecord;
let closure_13 = arg1(dependencyMap[11]).ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = arg1(dependencyMap[12]).RewardHeroBlockRecord;
const ShelfBlockRecord = arg1(dependencyMap[13]).ShelfBlockRecord;
let closure_16 = arg1(dependencyMap[14]).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = arg1(dependencyMap[15]).WideBannerBlockRecord;
const tmp2 = () => {
  class CollectiblesShopHomeRecord {
    constructor(arg0) {
      tmp = closure_2(this, CollectiblesShopHomeRecord);
      shop_blocks = arg0.shop_blocks;
      mapped = shop_blocks.map((type) => {
        type = type.type;
        if (callback(closure_1[16]).ShopBlockType.HERO === type) {
          return closure_12.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.FEATURED === type) {
          return closure_7.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.FEED === type) {
          return closure_8.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.WIDE_BANNER === type) {
          return closure_17.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.SHELF === type) {
          return closure_15.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.COUNTDOWN_TIMER === type) {
          return closure_6.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.IMMERSIVE_BANNER === type) {
          return closure_13.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.REWARD_HERO === type) {
          return closure_14.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
          return closure_16.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.FRAMES_BANNER === type) {
          return closure_9.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.FRAMES_PRODUCT_SHELF === type) {
          return closure_10.fromServer(type);
        } else if (callback(closure_1[16]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
          return closure_11.fromServer(type);
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
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = tmp2;
