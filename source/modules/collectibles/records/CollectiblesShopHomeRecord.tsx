// Module ID: 5799
// Function ID: 50995
// Name: CollectiblesShopHomeRecord
// Dependencies: [6, 7, 5771, 5800, 5802, 5805, 5806, 5807, 5808, 5809, 5810, 5811, 5812, 5813, 5814, 5801, 2]

// Module 5799 (CollectiblesShopHomeRecord)
import FramesBannerBlockRecord from "FramesBannerBlockRecord";
import FramesProductShelfBlockRecord from "FramesProductShelfBlockRecord";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CountdownTimerBlockRecord } from "CountdownTimerBlockRecord";
import { FeaturedBlockRecord } from "FeaturedBlockRecord";
import { FeedBlockRecord } from "FeedBlockRecord";
import { FramesBannerBlockRecord } from "FramesBannerBlockRecord";
import { FramesProductShelfBlockRecord as closure_9 } from "FramesProductShelfBlockRecord";
import { GameServerHostingBannerBlockRecord as closure_10 } from "GameServerHostingBannerBlockRecord";
import { HeroBlockRecord } from "HeroBlockRecord";
import { ImmersiveBannerBlockRecord as closure_12 } from "ImmersiveBannerBlockRecord";
import { RewardHeroBlockRecord } from "RewardHeroBlockRecord";
import { ShelfBlockRecord } from "ShelfBlockRecord";
import { SocialLayerStorefrontPromotionalBannerBlockRecord as closure_15 } from "SocialLayerStorefrontPromotionalBannerBlockRecord";
import { WideBannerBlockRecord } from "WideBannerBlockRecord";

const require = arg1;
const tmp2 = (() => {
  class CollectiblesShopHomeRecord {
    constructor(arg0) {
      tmp = outer1_2(this, CollectiblesShopHomeRecord);
      shop_blocks = arg0.shop_blocks;
      mapped = shop_blocks.map((type) => {
        type = type.type;
        if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.HERO === type) {
          return outer2_11.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.FEATURED === type) {
          return outer2_6.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.FEED === type) {
          return outer2_7.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.WIDE_BANNER === type) {
          return outer2_16.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.SHELF === type) {
          return outer2_14.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.COUNTDOWN_TIMER === type) {
          return outer2_5.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.IMMERSIVE_BANNER === type) {
          return outer2_12.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.REWARD_HERO === type) {
          return outer2_13.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
          return outer2_15.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.FRAMES_BANNER === type) {
          return outer2_8.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.FRAMES_PRODUCT_SHELF === type) {
          return outer2_9.fromServer(type);
        } else if (CollectiblesShopHomeRecord(outer2_1[15]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
          return outer2_10.fromServer(type);
        }
      });
      this.shopBlocks = mapped.filter((arg0) => undefined !== arg0);
      categories = arg0.categories;
      this.categories = categories.map((arg0) => outer2_4.fromServer(arg0));
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
