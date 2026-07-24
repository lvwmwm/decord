// Module ID: 5609
// Function ID: 47693
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4167, 5610, 4153, 1838, 5611, 5612, 653, 655, 482, 4369, 22, 5613, 1443, 4988, 566, 5468, 2]
// Exports: canSeeGameShop, getCardBackgroundImageURL, getCardImageURL, getForwardedSKUShareURL, getGameItemThumbnailUrl, getHasWishlistOrPopularRecommendations, getMarketingGuildId, getOrderedStorefrontSkuIds, getPrimaryCarouselItemInfo, getSocialLayerStorefrontApplicationId, getSocialLayerStorefrontGuildId, hasPrice, isGameItemSKU, isGiftPriceDifferent, isOnSocialLayerStorefrontPage, isOnSocialLayerStorefrontSkuPage, transformSlayerApplicationStorefrontServer, transformSlayerApplicationStorefrontSummaryServer, transformStorefrontMetadataServer, useGetSocialLayerStorefrontApplicationId, useGetSocialLayerStorefrontGuildIdAndApplication

// Module 5609 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { WishlistRecommendationReason as closure_4 } from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import STOREFRONT_MARKETING_GUILD_ID from "STOREFRONT_MARKETING_GUILD_ID";
import ME from "ME";
import { CollectibleShopTab } from "items";
import { CurrencyCodes } from "sum";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getCountryPrices(arg0, arg1) {
  if (null != arg0.prices[arg1]) {
    if (arg0.prices[arg1].countryPrices.prices.length > 0) {
      let countryPrices = arg0.prices[arg1].countryPrices;
    }
    return countryPrices;
  }
  countryPrices = null;
  if (null != arg0.prices[constants2.DEFAULT]) {
    countryPrices = null;
    if (arg0.prices[constants2.DEFAULT].countryPrices.prices.length > 0) {
      countryPrices = arg0.prices[constants2.DEFAULT].countryPrices;
    }
  }
}
function getPrice(price) {
  const tmp = getCountryPrices(price, arg1);
  if (null != tmp) {
    let first = tmp.prices[0];
  } else {
    first = null;
    if (null != price.price) {
      first = price.price;
    }
  }
  return first;
}
function hasSocialLayerStorefront(guild) {
  const storefrontGuildIds = store2.getStorefrontGuildIds();
  if (storefrontGuildIds.has(guild.id)) {
    return true;
  } else if ("type" in guild) {
    return false;
  } else {
    const tmp3 = getSocialLayerStorefrontApplicationIdHelper(guild, store2.getApplicationIdFromGuildId(guild.id));
    const storefrontApplicationIds = store2.getStorefrontApplicationIds();
    const tmp6 = null == tmp3 || !storefrontApplicationIds.has(tmp3);
    let tmp7 = !tmp6;
    if (tmp6) {
      const features = guild.features;
      let hasItem;
      if (null != features) {
        hasItem = features.has(constants.SOCIAL_LAYER_STOREFRONT);
      }
      tmp7 = null != hasItem && hasItem;
      const tmp10 = null != hasItem && hasItem;
    }
    return tmp7;
  }
}
function transformSlayerStorefrontPromotionLabelSectionServer(checkout) {
  let tmp = null;
  if (null != checkout) {
    const obj = {};
    ({ label: obj.label, tooltip: obj.tooltip, icon: obj.icon } = checkout);
    tmp = obj;
  }
  return tmp;
}
function transformSlayerStorefrontPromotionServer(id) {
  let obj = { id: id.id };
  const ends_at = id.ends_at;
  let tmp = null;
  if (null != ends_at) {
    tmp = ends_at;
  }
  obj.endsAt = tmp;
  const flavor = id.flavor;
  let str = "default";
  if (null != flavor) {
    str = flavor;
  }
  obj.flavor = str;
  obj.pdp = transformSlayerStorefrontPromotionLabelSectionServer(id.pdp);
  let tmp2 = null;
  if (null != id.storefront) {
    obj = { headerText: id.storefront.header_text };
    tmp2 = obj;
  }
  obj.storefront = tmp2;
  obj.checkout = transformSlayerStorefrontPromotionLabelSectionServer(id.checkout);
  obj.vcStream = transformSlayerStorefrontPromotionLabelSectionServer(id.vc_stream);
  return obj;
}
function parseServerDate(published_at) {
  if (null == published_at) {
    return null;
  } else {
    const _Date = Date;
    const date = new Date(published_at);
    const _Number = Number;
    let tmp6 = null;
    if (!Number.isNaN(date.getTime())) {
      tmp6 = date;
    }
    return tmp6;
  }
}
function isOnCollectiblesShopGameShopPage(pathname, search, applicationId, skuId) {
  let tab;
  const parsed = require(4988) /* encode */.parse(search);
  ({ tab, applicationId, skuId } = parsed);
  let tmp2 = pathname.indexOf(closure_13.COLLECTIBLES_SHOP) >= 0;
  if (tmp2) {
    let tmp4 = tab === CollectibleShopTab.GAME_SHOPS;
    if (tmp4) {
      tmp4 = applicationId === applicationId;
    }
    if (tmp4) {
      tmp4 = null == skuId || skuId === skuId;
      const tmp7 = null == skuId || skuId === skuId;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
function getSKUShareURL(arg0, applicationId) {
  if (null != arg0) {
    const _location2 = location;
    const _location3 = location;
    if (!isOnCollectiblesShopGameShopPage(location.pathname, location.search, applicationId.applicationId)) {
      const _location = location;
      const _window = window;
      const _HermesInternal = HermesInternal;
      let combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + closure_13.GAME_SHOP(arg0, applicationId.id, applicationId.slug);
    }
    return combined;
  }
  combined = "" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT + closure_13.COLLECTIBLES_SHOP_GAME_SHOP(applicationId.applicationId, undefined, applicationId.id, applicationId.slug);
}
function getSocialLayerStorefrontApplicationIdHelper(guild, applicationIdFromGuildId) {
  let tmp = applicationIdFromGuildId;
  if (null == applicationIdFromGuildId) {
    let length;
    if (null != guild) {
      const gameApplicationIds = guild.gameApplicationIds;
      if (null != gameApplicationIds) {
        length = gameApplicationIds.length;
      }
    }
    let first;
    if (1 === length) {
      first = guild.gameApplicationIds[0];
    }
    tmp = first;
  }
  return tmp;
}
({ getChannelsGameShopPrefix: closure_8, STOREFRONT_MARKETING_GUILD_ID: closure_9, STOREFRONT_MARKETING_GUILD_ID_TEST: closure_10 } = STOREFRONT_MARKETING_GUILD_ID);
({ GuildFeatures: closure_11, PriceSetAssignmentPurchaseTypes: closure_12, Routes: closure_13, SKUProductLines: closure_14 } = ME);
let str = "jpg";
if (require("_httpGetWithCountryCodeQuery").SUPPORTS_WEBP) {
  str = "webp";
}
let result = require("_callSuper").fileFinishedImporting("modules/slayer_storefront/SlayerStorefrontUtils.tsx");

export const LARGE_ASSET_FORMAT = str;
export const hasPrice = function hasPrice(price) {
  let tmp = null != price.price;
  if (!tmp) {
    tmp = null != price.prices[constants2.DEFAULT];
  }
  return tmp;
};
export { getCountryPrices };
export { getPrice };
export const isGiftPriceDifferent = function isGiftPriceDifferent(arg0) {
  let tmp = getPrice(arg0, constants2.DEFAULT);
  if (null == tmp) {
    let obj = { amount: 0, currency: CurrencyCodes.USD };
    tmp = obj;
  }
  let tmp3 = getPrice(arg0, constants2.GIFT);
  if (null == tmp3) {
    obj = { amount: 0, currency: CurrencyCodes.USD };
    tmp3 = obj;
  }
  return tmp.currency !== tmp3.currency || tmp.amount !== tmp3.amount;
};
export const getOrderedStorefrontSkuIds = function getOrderedStorefrontSkuIds(pages) {
  let iter11;
  const set = new Set();
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(pages.pages);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp3 = _createForOfIteratorHelperLoose;
      let tmp4 = _createForOfIteratorHelperLoose(value.skuIds);
      let iter3 = tmp4();
      if (!iter3.done) {
        do {
          value = iter3.value;
          if (!set.has(value)) {
            let addResult = set.add(value);
            let arr = items.push(value);
          }
          iter4 = tmp4();
          iter3 = iter4;
          let tmp7 = value;
        } while (!iter4.done);
      }
      let sections = value.sections;
      let tmp8 = _createForOfIteratorHelperLoose;
      if (null == sections) {
        sections = [];
      }
      let tmp8Result = tmp8(sections);
      let iter5 = tmp8Result();
      let iter6 = iter5;
      let tmp10 = tmp2;
      if (!iter5.done) {
        do {
          let tmp11 = _createForOfIteratorHelperLoose;
          let tmp12 = _createForOfIteratorHelperLoose(iter6.value.skuIds);
          let iter7 = tmp12();
          let iter8 = iter7;
          let tmp13 = iter7;
          if (!iter7.done) {
            do {
              value = iter8.value;
              if (!set.has(value)) {
                let addResult1 = set.add(value);
                arr = items.push(value);
              }
              iter9 = tmp12();
              iter8 = iter9;
              tmp13 = iter9;
              tmp10 = value;
            } while (!iter9.done);
          }
          iter10 = tmp8Result();
          let tmp16 = tmp13;
          iter6 = iter10;
          let tmp17 = tmp12;
          tmp2 = tmp10;
        } while (!iter10.done);
      }
      iter11 = tmp();
      iter2 = iter11;
    } while (!iter11.done);
  }
  return items;
};
export const isGameItemSKU = function isGameItemSKU(stateFromStores2) {
  let tmp = null != stateFromStores2;
  if (tmp) {
    tmp = stateFromStores2.productLine === constants3.SOCIAL_LAYER_GAME_ITEM;
  }
  return tmp;
};
export const getMarketingGuildId = function getMarketingGuildId() {
  const guild = store.getGuild(closure_10);
  if (null != guild) {
    const features = guild.features;
    if (features.has(constants.SOCIAL_LAYER_STOREFRONT)) {
      let id = guild.id;
    }
    return id;
  }
  id = closure_9;
};
export { hasSocialLayerStorefront };
export const transformStorefrontMetadataServer = function transformStorefrontMetadataServer(body) {
  const obj = {};
  const logo_asset_id = body.logo_asset_id;
  let tmp = null;
  if (null != logo_asset_id) {
    tmp = logo_asset_id;
  }
  obj.logoAssetId = tmp;
  const light_theme_logo_asset_id = body.light_theme_logo_asset_id;
  let tmp2 = null;
  if (null != light_theme_logo_asset_id) {
    tmp2 = light_theme_logo_asset_id;
  }
  obj.lightThemeLogoAssetId = tmp2;
  return obj;
};
export const transformSlayerApplicationStorefrontSummaryServer = function transformSlayerApplicationStorefrontSummaryServer(id) {
  const obj = { id: id.id, publishedAt: parseServerDate(id.published_at), title: id.title };
  const logo_asset_id = id.logo_asset_id;
  let tmp = null;
  if (null != logo_asset_id) {
    tmp = logo_asset_id;
  }
  obj.logoAssetId = tmp;
  const light_theme_logo_asset_id = id.light_theme_logo_asset_id;
  let tmp2 = null;
  if (null != light_theme_logo_asset_id) {
    tmp2 = light_theme_logo_asset_id;
  }
  obj.lightThemeLogoAssetId = tmp2;
  return obj;
};
export const transformSlayerApplicationStorefrontServer = function transformSlayerApplicationStorefrontServer(body) {
  let obj = {
    id: body.id,
    publishedAt: parseServerDate(body.published_at),
    applicationId: body.application_id,
    title: body.title,
    logoAssetId: body.logo_asset_id,
    lightThemeLogoAssetId: body.light_theme_logo_asset_id,
    pages: pages.map((title) => {
      let obj = { title: title.title };
      let tmp;
      if (null != title.leaderboard) {
        obj = { title: title.leaderboard.title, description: title.leaderboard.description, backgroundImageAssetId: title.leaderboard.background_image_asset_id };
        tmp = obj;
      }
      obj.leaderboard = tmp;
      obj.skuIds = title.sku_ids;
      let mapped;
      if (null != title.sections) {
        const sections = title.sections;
        mapped = sections.map((title) => ({ title: title.title, skuIds: title.sku_ids }));
      }
      obj.sections = mapped;
      return obj;
    })
  };
  pages = body.pages;
  obj.assets = importDefault(22).keyBy(body.assets, "id");
  let fromServer;
  if (null != body.application) {
    fromServer = _callSuper.createFromServer(body.application);
  }
  obj.application = fromServer;
  let result;
  if (null != body.storefront_pricing) {
    result = require(5613) /* transformStorefrontSKUPricesServer */.transformStorefrontPricesServer(body.storefront_pricing);
    const obj3 = require(5613) /* transformStorefrontSKUPricesServer */;
  }
  obj.storefrontPricing = result;
  const obj2 = importDefault(22);
  let promotions = body.promotions;
  if (null == promotions) {
    promotions = {};
  }
  obj.promotions = importDefault(22).mapValues(promotions, transformSlayerStorefrontPromotionServer);
  return obj;
};
export const getPrimaryCarouselItemInfo = function getPrimaryCarouselItemInfo(tenantMetadata, application_id) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (null != application_id) {
    let carouselItems;
    if (null != tenantMetadata) {
      tenantMetadata = tenantMetadata.tenantMetadata;
      if (null != tenantMetadata) {
        const socialLayer = tenantMetadata.socialLayer;
        if (null != socialLayer) {
          carouselItems = socialLayer.carouselItems;
        }
      }
    }
    if (null != carouselItems) {
      if (0 !== tenantMetadata.tenantMetadata.socialLayer.carouselItems.length) {
        const first = tenantMetadata.tenantMetadata.socialLayer.carouselItems[0];
        if (null == first.labelIconAssetId) {
          obj = { primaryIconAsset: undefined, primaryIconLabel: undefined };
        } else {
          obj = {};
          const obj4 = require(4369) /* _httpGetWithCountryCodeQuery */;
          const toURLSafeResult = importDefault(1443).toURLSafe(obj4.getAssetURL(application_id, first.labelIconAssetId, num, "webp"));
          let tmp9;
          if (null != toURLSafeResult) {
            tmp9 = toURLSafeResult;
          }
          obj.primaryIconAsset = tmp9;
          obj.primaryIconLabel = first.label;
          const obj3 = importDefault(1443);
        }
        return obj;
      }
    }
  }
  return { primaryIconAsset: undefined, primaryIconLabel: undefined };
};
export const getGameItemThumbnailUrl = function getGameItemThumbnailUrl(error) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (null != error) {
    if (null != error.thumbnailAssetId) {
      const obj3 = require(4369) /* _httpGetWithCountryCodeQuery */;
      return importDefault(1443).toURLSafe(obj3.getAssetURL(error.applicationId, error.thumbnailAssetId, num, "webp"));
    }
  }
};
export const getCardImageURL = function getCardImageURL(sku, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 512;
  if (undefined !== size) {
    num = size;
  }
  if (null != sku) {
    const applicationId = sku.applicationId;
  }
  let cardImageAssetId;
  if (null != sku) {
    const tenantMetadata = sku.tenantMetadata;
    if (null != tenantMetadata) {
      const socialLayer = tenantMetadata.socialLayer;
      if (null != socialLayer) {
        cardImageAssetId = socialLayer.cardImageAssetId;
      }
    }
  }
  if (null == cardImageAssetId) {
    let thumbnailAssetId;
    if (null != sku) {
      thumbnailAssetId = sku.thumbnailAssetId;
    }
    cardImageAssetId = thumbnailAssetId;
  }
  if (null != cardImageAssetId) {
    if (null != applicationId) {
      const obj3 = require(4369) /* _httpGetWithCountryCodeQuery */;
      return importDefault(1443).toURLSafe(obj3.getAssetURL(applicationId, cardImageAssetId, num, "webp"));
    }
  }
};
export const getCardBackgroundImageURL = function getCardBackgroundImageURL(sku, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const size = obj.size;
  let num = 1024;
  if (undefined !== size) {
    num = size;
  }
  let prop;
  if (null != sku) {
    const tenantMetadata = sku.tenantMetadata;
    if (null != tenantMetadata) {
      const socialLayer = tenantMetadata.socialLayer;
      if (null != socialLayer) {
        prop = socialLayer.cardBackgroundImageAssetId;
      }
    }
  }
  if (null != prop) {
    let applicationId;
    if (null != sku) {
      applicationId = sku.applicationId;
    }
    if (null != applicationId) {
      const obj3 = require(4369) /* _httpGetWithCountryCodeQuery */;
      return importDefault(1443).toURLSafe(obj3.getAssetURL(sku.applicationId, sku.tenantMetadata.socialLayer.cardBackgroundImageAssetId, num, str));
    }
  }
};
export { isOnCollectiblesShopGameShopPage };
export { getSKUShareURL };
export const getForwardedSKUShareURL = function getForwardedSKUShareURL(arg0, applicationId) {
  return "" + getSKUShareURL(arg0, applicationId) + "\n\n";
};
export const canSeeGameShop = function canSeeGameShop(guildId) {
  const guild = store.getGuild(guildId);
  let tmp2 = null != guild;
  if (tmp2) {
    tmp2 = hasSocialLayerStorefront(guild);
  }
  return tmp2;
};
export const getHasWishlistOrPopularRecommendations = function getHasWishlistOrPopularRecommendations(arr) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  if (0 === arr.length) {
    let obj = { hasWishlist: false, hasPopular: false };
  } else {
    obj = {
      hasWishlist: arr.some((arg0) => {
          let obj = dependencyMap[arg0.id];
          if (null == obj) {
            obj = {};
          }
          const entries = Object.entries(obj);
          return entries.some((arg0) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = arg0;
            let hasItem = tmp2 === outer2_4.WISHLIST;
            if (hasItem) {
              hasItem = outer1_1.has(tmp);
            }
            return hasItem;
          });
        }),
      hasPopular: arr.some((arg0) => {
          let everyResult = null == tmp;
          if (!everyResult) {
            const _Object = Object;
            const entries = Object.entries(tmp);
            everyResult = entries.every((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              let hasItem = tmp2 === outer2_4.RECOMMENDATION;
              if (hasItem) {
                hasItem = outer1_1.has(tmp);
              }
              if (!hasItem) {
                hasItem = !outer1_1.has(tmp);
              }
              return hasItem;
            });
          }
          return everyResult;
        })
    };
  }
  return obj;
};
export const isOnSocialLayerStorefrontPage = function isOnSocialLayerStorefrontPage(arr, search, applicationId) {
  let tmp = isOnCollectiblesShopGameShopPage(arr, search, applicationId);
  if (!tmp) {
    let tmp3 = null != arg3;
    if (tmp3) {
      tmp3 = arr.indexOf(callback(arg3)) >= 0;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isOnSocialLayerStorefrontSkuPage = function isOnSocialLayerStorefrontSkuPage(applicationId) {
  let guildId;
  let pageIndex;
  let pathname;
  let search;
  let skuId;
  ({ pathname, search, pageIndex } = applicationId);
  if (pageIndex === undefined) {
    pageIndex = 0;
  }
  ({ guildId, skuId } = applicationId);
  let tmp = isOnCollectiblesShopGameShopPage(pathname, search, applicationId.applicationId, skuId);
  if (!tmp) {
    let hasItem = null != guildId;
    if (hasItem) {
      hasItem = pathname.includes(closure_13.CHANNELS_GAME_SHOP(guildId, pageIndex, skuId));
    }
    tmp = hasItem;
  }
  return tmp;
};
export const useGetSocialLayerStorefrontGuildIdAndApplication = function useGetSocialLayerStorefrontGuildIdAndApplication(applicationId) {
  const _require = applicationId;
  let obj = _require(566);
  const items = [closure_7];
  let stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuildIdFromApplicationId(closure_0));
  const getOrFetchApplication = _require(5468).useGetOrFetchApplication(applicationId);
  obj = {};
  if (null == stateFromStores) {
    let guildId;
    if (null != getOrFetchApplication) {
      guildId = getOrFetchApplication.guildId;
    }
    stateFromStores = guildId;
  }
  obj.guildId = stateFromStores;
  obj.application = getOrFetchApplication;
  return obj;
};
export const getSocialLayerStorefrontApplicationId = function getSocialLayerStorefrontApplicationId(guildId) {
  const applicationIdFromGuildId = store2.getApplicationIdFromGuildId(guildId);
  return getSocialLayerStorefrontApplicationIdHelper(store.getGuild(guildId), applicationIdFromGuildId);
};
export const useGetSocialLayerStorefrontApplicationId = function useGetSocialLayerStorefrontApplicationId(arg0) {
  const _require = arg0;
  const items = [closure_7];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_7.getApplicationIdFromGuildId(closure_0));
  const obj = _require(566);
  const items1 = [_createForOfIteratorHelperLoose];
  const items2 = [arg0];
  return getSocialLayerStorefrontApplicationIdHelper(_require(566).useStateFromStores(items1, () => outer1_6.getGuild(closure_0), items2), stateFromStores);
};
export const getSocialLayerStorefrontGuildId = function getSocialLayerStorefrontGuildId(applicationId) {
  if (null != applicationId) {
    let guildIdFromApplicationId = store2.getGuildIdFromApplicationId(applicationId);
    if (null == guildIdFromApplicationId) {
      application = application.getApplication(applicationId);
      let guildId;
      if (null != application) {
        guildId = application.guildId;
      }
      guildIdFromApplicationId = guildId;
    }
    return guildIdFromApplicationId;
  }
};
