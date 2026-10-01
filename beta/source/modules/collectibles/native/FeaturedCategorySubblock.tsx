// Module ID: 15445
// Function ID: 15446
// Name: FeaturedCategorySubblock
// Dependencies: [19, 17, 6962, 1076, 1074, 21, 4836, 1485, 8229, 504, 15433, 15440, 5435, 1115, 576, 1241, 6961, 6603, 6974, 8293, 2]
// Exports: default

// Module 15445 (FeaturedCategorySubblock)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 6961 */;
import VisibilitySensorDefault from "VisibilitySensor" /* 15440 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6962 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const Image = react_native.Image;
let closure_5 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ AnalyticEvents: metroRequire, UserSettingsSections: metroImportDefault } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { position: "relative" }, bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" }, limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 } });
let result = size.fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default function _default(subblock) {
  let PressableOpacity;
  let analyticsContext;
  let intl;
  let intl2;
  let items1;
  let obj10;
  let obj6;
  let obj7;
  let tmp11;
  subblock = subblock.subblock;
  dependencyMap = undefined;
  const tmp = closure_10();
  let obj = subblock(1485);
  importDefault = obj.useNavigation();
  let obj2 = subblock(8229);
  dependencyMap = obj2.useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj3 = subblock(504);
  let items = [CollectiblesCategoryStore];
  const stateFromStores = obj3.useStateFromStores(items, () => CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId));
  let unpublishedAt = subblock.unpublishedAt;
  const obj4 = subblock(15433);
  const handleCardVisibilityChange = obj4.useTrackProductCardImpression(subblock.categoryStoreListingId, "mobile_home", "featured_block").handleCardVisibilityChange;
  if (unpublishedAt == null) {
    let unpublishedAt1;
    if (stateFromStores != null) {
      unpublishedAt1 = stateFromStores.unpublishedAt;
    }
    unpublishedAt = unpublishedAt1;
  }
  let date = null;
  if (null != unpublishedAt) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(unpublishedAt);
  }
  const obj5 = { onChange: handleCardVisibilityChange, children: tmp11(PressableOpacity, obj6) };
  const tmp10 = VisibilitySensorDefault;
  obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.formatToPlainString(subblock(1115).t.FNtLb3, obj7),
    accessibilityHint: intl2.string(subblock(1115).t.F8ma9x),
    activeOpacity: 0.8,
    androidRippleConfig: { radius: nativeDefault.radii.lg },
    hitSlop: 8,
    onPress() {
      let _String;
      let items;
      let pageCategory;
      let pageSection;
      let tilePosition;
      let sessionId;
      const track = AnalyticsUtilsDefault.track;
      const COLLECTIBLES_SHOP_ELEMENT_CLICKED = metroRequire.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
      AnalyticsUtilsDefault;
      if (analyticsContext != null) {
        sessionId = tmp4.sessionId;
      }
      const obj = { collectibles_shop_session_id: sessionId, sku_id: subblock.categoryStoreListingId, page_type: "mobile_home", page_section: pageSection, page_category: pageCategory, tile_type: "FEATURED_BLOCK", tile_position: _String(tilePosition), cta_name: null };
      pageSection = undefined;
      if (analyticsContext != null) {
        pageSection = tmp4.pageSection;
      }
      pageCategory = undefined;
      if (analyticsContext != null) {
        pageCategory = tmp4.pageCategory;
      }
      tilePosition = undefined;
      _String = String;
      if (analyticsContext != null) {
        tilePosition = tmp4.tilePosition;
      }
      track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      if (null != stateFromStores) {
        if (stateFromStores.isOrbsExclusive) {
          const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: metroRequire.ORBS };
          const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
          items = [];
          CollectiblesActionCreators;
          items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
          const result = openCollectiblesShopMobile(obj2);
        } else {
          const obj3 = { category: stateFromStores, analyticsContext };
          navigation.navigate(metroImportDefault.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj3);
        }
      }
    },
    style: tmp.container,
    children: items1
  };
  PressableOpacity = tmp2(5435).PressableOpacity;
  intl = tmp2(1115).intl;
  obj7 = { category: subblock.name };
  intl2 = tmp2(1115).intl;
  let tmp9Result = null != assetUrl;
  ({ radius: nativeDefault.radii.lg });
  tmp11 = closure_9;
  if (tmp9Result) {
    const obj9 = { source: obj10, style: tmp.bannerImage };
    obj10 = { uri: assetUrl };
    tmp9Result = tmp9(stateFromStores, obj9);
  }
  items1 = [tmp9Result, ];
  const tmp2Result = subblock(6974);
  let result = tmp2Result.shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj11 = { style: tmp.limitedTimeBadge };
    result = tmp9(tmp2(8293).LimitedTimeBadge, obj11);
  }
  items1[1] = result;
  return closure_8(tmp10, obj5);
};
