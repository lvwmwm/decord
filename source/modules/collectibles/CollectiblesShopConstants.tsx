// Module ID: 655
// Function ID: 8018
// Name: items
// Dependencies: []
// Exports: isExternalProduct, isFractionalPremiumSku, isIndexPageTab, shouldAddTabToUrl

// Module 655 (items)
let obj = { HOME: "home", CATALOG: "catalog", ORBS: "orbs", AVATAR_DECORATIONS: "avatar-decorations", PROFILE_EFFECTS: "profile-effects", NAMEPLATES: "nameplates", PROFILE_FRAMES: "profile-frames", BUNDLES: "bundles", LAYOUT: "layout", COLLECTION_INDEX: "collection-index", GAME_SHOPS: "game-shops", GAME_SERVERS: "game-servers" };
const items = [, , , , ];
({ AVATAR_DECORATIONS: arr[0], PROFILE_EFFECTS: arr[1], NAMEPLATES: arr[2], PROFILE_FRAMES: arr[3], BUNDLES: arr[4] } = obj);
obj = { ORB_PROFILE_BADGE: "1342211853484429445", FRACTIONAL_PREMIUM: require(dependencyMap[0]).FractionalPremiumSKUs.PREMIUM_TIER_2_3_DAY, FRACTIONAL_PREMIUM_1_DAY: require(dependencyMap[0]).FractionalPremiumSKUs.PREMIUM_TIER_2_1_DAY };
const set = new Set(Object.values(obj));
const items1 = [require(dependencyMap[1]).CollectibleSearchItemType.AVATAR_DECORATION, require(dependencyMap[1]).CollectibleSearchItemType.NAMEPLATE, require(dependencyMap[1]).CollectibleSearchItemType.PROFILE_EFFECT, require(dependencyMap[1]).CollectibleSearchItemType.PROFILE_FRAME, require(dependencyMap[1]).CollectibleSearchItemType.BUNDLE];
obj = { sortType: require(dependencyMap[2]).CollectibleSearchSortType.RELEVANCE, sortDirection: require(dependencyMap[3]).CollectibleSearchSortDirection.DESC };
const items2 = [obj, { sortType: require(dependencyMap[2]).CollectibleSearchSortType.RECENCY, sortDirection: require(dependencyMap[3]).CollectibleSearchSortDirection.DESC }, , , ];
const obj1 = { sortType: require(dependencyMap[2]).CollectibleSearchSortType.RECENCY, sortDirection: require(dependencyMap[3]).CollectibleSearchSortDirection.DESC };
items2[2] = { sortType: require(dependencyMap[2]).CollectibleSearchSortType.PRICE, sortDirection: require(dependencyMap[3]).CollectibleSearchSortDirection.ASC };
const obj2 = { sortType: require(dependencyMap[2]).CollectibleSearchSortType.PRICE, sortDirection: require(dependencyMap[3]).CollectibleSearchSortDirection.ASC };
items2[3] = { sortType: require(dependencyMap[2]).CollectibleSearchSortType.PRICE, sortDirection: require(dependencyMap[3]).CollectibleSearchSortDirection.DESC };
const obj3 = { sortType: require(dependencyMap[2]).CollectibleSearchSortType.PRICE, sortDirection: require(dependencyMap[3]).CollectibleSearchSortDirection.DESC };
items2[4] = { sortType: require(dependencyMap[2]).CollectibleSearchSortType.POPULARITY, sortDirection: require(dependencyMap[3]).CollectibleSearchSortDirection.DESC };
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/collectibles/CollectiblesShopConstants.tsx");
const items3 = [{}];

export const POPULAR_PICK_PRODUCTS = [];
export const WISHLIST_POPULAR_SKU_IDS = [];
export const SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS = {};
export const COLLECTIBLES_SHOP_CACHE_DURATION_MS = 600000;
export const COLLECTIBLES_SHOP_FETCH_ERROR_RETRY_THRESHOLD_MS = 600000;
export const ViewState = { VISIBLE: 0, [0]: "VISIBLE", HIDDEN: 1, [1]: "HIDDEN", IN: 2, [2]: "IN", OUT: 3, [3]: "OUT" };
export const SEARCH_BAR_ICON_WIDTH_PX = 24;
export const SEARCH_BAR_WIDTH_PX = 225;
export const STATE_TRANSITION_THRESHOLD_PX = 20;
export const CollectiblesSearchBarCTAName = { SEARCH_ICON: "search icon", SEARCH_BAR: "search bar", SEARCH_BAR_CLEAR: "search bar clear" };
export const BROWSE_CATEGORY_QUERY_PARAM = "category";
export const CollectibleShopTab = obj;
export const CollectiblesIndexPageTabs = items;
export const isIndexPageTab = function isIndexPageTab(arg0) {
  return items.includes(arg0);
};
export const shouldAddTabToUrl = function shouldAddTabToUrl(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = arg0 !== obj.HOME;
  }
  if (tmp) {
    tmp = arg0 !== obj.CATALOG;
  }
  if (tmp) {
    tmp = arg0 !== obj.GAME_SHOPS;
  }
  return tmp;
};
export const SHOP_FEED_TRANSITION_DURATION = 800;
export const FEED_ITEMS = [];
export const PAGE_SIZE = 12;
export const LIMITED_TIME_BADGE_DAYS_THRESHOLD = 60;
export const MAX_FEED_SIZE = 36;
export const SHOP_ALL_PAGE_SIZE = 5;
export const ShopPurchaseType = { FIAT: 0, [0]: "FIAT", ORB: 1, [1]: "ORB", PREMIUM_PURCHASE: 2, [2]: "PREMIUM_PURCHASE", PROMOTIONAL: 3, [3]: "PROMOTIONAL", TENURE_REWARD: 4, [4]: "TENURE_REWARD", GIFT: 5, [5]: "GIFT" };
export const EXTERNAL_PRODUCT_SKU_IDS = obj;
export const isFractionalPremiumSku = function isFractionalPremiumSku(arg0) {
  const ALL = require(dependencyMap[0]).FractionalPremiumSKUsSets.ALL;
  return ALL.has(arg0);
};
export const isExternalProduct = function isExternalProduct(arg0) {
  return set.has(arg0);
};
export const ALL_FILTERS = items1;
export const SORT_OPTIONS = items2;
export const CollectiblesMobileShopScreen = { FEATURED_PAGE: "featured-page", SHOP_ALL: "shop-all", ORBS: "orbs" };
export const REWARD_CATEGORY_AND_REWARD_SKU_IDS = items3;
export const ShopCtaEnum = { BUY_WITH_FIAT: "buy_with_fiat", BUY_WITH_ORBS: "buy_with_orbs", SEND_AS_GIFT: "send_as_gift", SUBSCRIBE_NOW: "subscribe_now", ADD_TO_WISHLIST: "add_to_wishlist", REMOVE_FROM_WISHLIST: "remove_from_wishlist", CLOSE_DETAIL: "close_detail", GO_TO_COLLECTION: "go_to_collection", COPY_LINK: "copy_link", SHARE_LINK: "share_link", USE_NOW: "use_now", EDIT_PROFILE: "edit_profile", UNLOCK_WITH_NITRO: "unlock_with_nitro", ADD_TO_COLLECTION: "add_to_collection", BUNDLE_VIEW_AVATAR_DECORATION: "bundle_view_avatar_decoration", BUNDLE_VIEW_PROFILE_EFFECT: "bundle_view_profile_effect", BUNDLE_VIEW_NAMEPLATE: "bundle_view_nameplate", BUNDLE_VIEW_PRODUCT: "bundle_view_product", FULL_PROFILE_PREVIEW: "full_profile_preview", FULL_PROFILE_PREVIEW_BUTTON: "full_profile_preview_button", VIEW_DETAILS: "view_details", PAYMENT_OPTIONS: "payment_options", OPEN_DETAILS: "open_details", VARIANT_CLICK: "variant_click", VARIANT_CLICK_MORE: "variant_click_more" };
