// Module ID: 6804
// Function ID: 53708
// Name: CollectiblesShopHomeRecord
// Dependencies: [6, 7, 6775, 6796, 6805, 6807, 6810, 6811, 6812, 6813, 6814, 6815, 6816, 6817, 6818, 6819, 6806, 2]

// Module 6804 (CollectiblesShopHomeRecord)
import FeedBlockRecord from "FeedBlockRecord";
import FramesBannerBlockRecord from "FramesBannerBlockRecord";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesUserDiscountRecord as closure_5 } from "CollectiblesUserDiscountRecord";
import { CountdownTimerBlockRecord } from "CountdownTimerBlockRecord";
import { FeaturedBlockRecord } from "FeaturedBlockRecord";
import { FeedBlockRecord } from "FeedBlockRecord";
import { FramesBannerBlockRecord } from "FramesBannerBlockRecord";
import { FramesProductShelfBlockRecord as closure_10 } from "FramesProductShelfBlockRecord";
import { GameServerHostingBannerBlockRecord as closure_11 } from "GameServerHostingBannerBlockRecord";
import { HeroBlockRecord } from "HeroBlockRecord";
import { ImmersiveBannerBlockRecord as closure_13 } from "ImmersiveBannerBlockRecord";
import { RewardHeroBlockRecord } from "RewardHeroBlockRecord";
import { ShelfBlockRecord } from "ShelfBlockRecord";
import { SocialLayerStorefrontPromotionalBannerBlockRecord as closure_16 } from "SocialLayerStorefrontPromotionalBannerBlockRecord";
import { WideBannerBlockRecord } from "WideBannerBlockRecord";

const require = arg1;
const tmp2 = (() => {
  class CollectiblesShopHomeRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesShopHomeRecord);
      shop_blocks = arg0.shop_blocks;
      mapped = shop_blocks.map((type) => {
        type = type.type;
        if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.HERO === type) {
          return outer2_12.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.FEATURED === type) {
          return outer2_7.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.FEED === type) {
          return outer2_8.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.WIDE_BANNER === type) {
          return outer2_17.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.SHELF === type) {
          return outer2_15.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.COUNTDOWN_TIMER === type) {
          return outer2_6.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.IMMERSIVE_BANNER === type) {
          return outer2_13.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.REWARD_HERO === type) {
          return outer2_14.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
          return outer2_16.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.FRAMES_BANNER === type) {
          return outer2_9.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.FRAMES_PRODUCT_SHELF === type) {
          return outer2_10.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[16]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
          return outer2_11.fromServer(type);
        }
      });
      this.shopBlocks = mapped.filter((arg0) => undefined !== arg0);
      categories = arg0.categories;
      this.categories = categories.map((arg0) => outer2_4.fromServer(arg0));
      user_discounts = arg0.user_discounts;
      mapped1 = undefined;
      if (null != user_discounts) {
        mapped1 = user_discounts.map((arg0) => outer2_5.fromServer(arg0));
      }
      this.userDiscounts = mapped1;
      return;
    }
  }
  const items = [
    {
      key: "fromServer",
      value(shop_blocks) {
        return new CollectiblesShopHomeRecord(shop_blocks);
      }
    }
  ];
  return callback(CollectiblesShopHomeRecord, null, items);
})();
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = tmp2;
