// Module ID: 14543
// Function ID: 111017
// Name: subblock
// Dependencies: [31, 27, 6774, 655, 653, 33, 4130, 1456, 8707, 566, 11872, 11875, 4660, 1212, 689, 675, 6773, 5482, 6786, 7958, 2]
// Exports: default

// Module 14543 (subblock)
import "result";
import { Image } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { CollectiblesMobileShopScreen as closure_5 } from "items";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_6, UserSettingsSections: closure_7 } = ME);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ container: { position: "relative" }, bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" }, limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default function _default(subblock) {
  subblock = subblock.subblock;
  const tmp = callback2();
  let obj = subblock(1456);
  const importDefault = obj.useNavigation();
  let obj1 = subblock(8707);
  const dependencyMap = obj1.useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj2 = subblock(566);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_4.getCategoryByStoreListingId(subblock.categoryStoreListingId));
  let obj3 = subblock(11872);
  let unpublishedAt = subblock.unpublishedAt;
  if (null == unpublishedAt) {
    unpublishedAt = undefined;
    if (null != stateFromStores) {
      unpublishedAt = stateFromStores.unpublishedAt;
    }
  }
  let date = null;
  if (null != unpublishedAt) {
    const _Date = Date;
    date = new Date(unpublishedAt);
  }
  obj = { onChange: obj3.useTrackProductCardImpression(subblock.categoryStoreListingId, "mobile_home", "featured_block").handleCardVisibilityChange };
  obj = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.8, androidRippleConfig: null, hitSlop: 8 };
  const intl = subblock(1212).intl;
  obj1 = { category: subblock.name };
  obj.accessibilityLabel = intl.formatToPlainString(subblock(1212).t.FNtLb3, obj1);
  const intl2 = subblock(1212).intl;
  obj.accessibilityHint = intl2.string(subblock(1212).t.F8ma9x);
  obj2 = { radius: importDefault(689).radii.lg };
  obj.androidRippleConfig = obj2;
  obj.onPress = function onPress() {
    let obj = navigation(closure_2[15]);
    obj = {};
    let sessionId;
    if (null != closure_2) {
      sessionId = closure_2.sessionId;
    }
    obj.collectibles_shop_session_id = sessionId;
    obj.sku_id = subblock.categoryStoreListingId;
    obj.page_type = "mobile_home";
    let pageSection;
    if (null != closure_2) {
      pageSection = closure_2.pageSection;
    }
    obj.page_section = pageSection;
    let pageCategory;
    if (null != closure_2) {
      pageCategory = closure_2.pageCategory;
    }
    obj.page_category = pageCategory;
    obj.tile_type = "FEATURED_BLOCK";
    let tilePosition;
    if (null != closure_2) {
      tilePosition = closure_2.tilePosition;
    }
    obj.tile_position = String(tilePosition);
    obj.cta_name = null;
    obj.track(outer1_6.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        obj = {};
        const items = [navigation(closure_2[17]).COLLECTIBLES_SHOP];
        obj.analyticsLocations = items;
        obj.analyticsSource = navigation(closure_2[17]).COLLECTIBLES_SHOP;
        obj.screen = outer1_5.ORBS;
        const result = subblock(closure_2[16]).openCollectiblesShopMobile(obj);
        const obj4 = subblock(closure_2[16]);
      } else {
        const obj1 = { category: stateFromStores, analyticsContext: closure_2 };
        navigation.navigate(outer1_7.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj1);
      }
    }
  };
  obj.style = tmp.container;
  let tmp12 = null != assetUrl;
  if (tmp12) {
    obj3 = {};
    let obj4 = { uri: assetUrl };
    obj3.source = obj4;
    obj3.style = tmp.bannerImage;
    tmp12 = callback(stateFromStores, obj3);
  }
  const items1 = [tmp12, ];
  const tmp10 = importDefault(11875);
  const tmp11 = closure_9;
  const tmp9 = callback;
  let result = subblock(6786).shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj5 = { style: tmp.limitedTimeBadge };
    result = callback(subblock(7958).LimitedTimeBadge, obj5);
  }
  items1[1] = result;
  obj.children = items1;
  obj.children = tmp11(subblock(4660).PressableOpacity, obj);
  return tmp9(tmp10, obj);
};
