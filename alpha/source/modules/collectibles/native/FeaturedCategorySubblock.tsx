// Module ID: 16147
// Function ID: 16148
// Name: FeaturedCategorySubblock
// Dependencies: [19, 7257, 1087, 1085, 21, 5091, 558, 576, 1503, 8951, 504, 16127, 1265, 7256, 6872, 16145, 6191, 1126, 587, 6163, 7269, 9014, 2]

// Module 16147 (FeaturedCategorySubblock)
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6872 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7256 */;
import VisibilitySensorDefault from "VisibilitySensor" /* 16145 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, navigation;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp10;
const FastImageDefault = tmp10(6163);
let closure_4 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ AnalyticEvents: hasOwnProperty, UserSettingsSections: metroRequire } = Constants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { position: "relative" }, bannerImage: { width: "100%", aspectRatio: 2.237580993520518, resizeMode: "contain" }, limitedTimeBadge: { position: "absolute", bottom: "68%", left: "3%", zIndex: 1 } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((subblock) => {
  let collectiblesAnalyticsContext;
  let first;
  let stateFromStores;
  let tmp9;
  let obj = subblock(collectiblesAnalyticsContext[7]);
  const cResult = obj.c(52);
  subblock = subblock.subblock;
  const tmp4 = closure_9();
  let obj2 = subblock(collectiblesAnalyticsContext[8]);
  navigation = obj2.useNavigation();
  let obj3 = subblock(collectiblesAnalyticsContext[9]);
  collectiblesAnalyticsContext = obj3.useCollectiblesAnalyticsContext();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== subblock.categoryStoreListingId) {
    class S {
      constructor() {
        return CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId);
      }
    }
    cResult[1] = subblock.categoryStoreListingId;
    cResult[2] = S;
    tmp9 = S;
  } else {
    class S {
      constructor() {
        return CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId);
      }
    }
  }
  const tmpResult = subblock(collectiblesAnalyticsContext[10]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  const tmpResult2 = subblock(collectiblesAnalyticsContext[11]);
  const handleCardVisibilityChange = tmpResult2.useTrackProductCardImpression(subblock.categoryStoreListingId, "mobile_home", "featured_block").handleCardVisibilityChange;
  if (cResult[3] === collectiblesAnalyticsContext) {
    class S {
      constructor() {
        return CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId);
      }
    }
  }
  function onTapViewAll() {
    let _String;
    let items;
    let pageCategory;
    let pageSection;
    let tilePosition;
    let sessionId;
    const track = AnalyticsUtilsDefault.track;
    const COLLECTIBLES_SHOP_ELEMENT_CLICKED = hasOwnProperty.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
    AnalyticsUtilsDefault;
    if (collectiblesAnalyticsContext != null) {
      sessionId = tmp4.sessionId;
    }
    const obj = { collectibles_shop_session_id: sessionId, sku_id: subblock.categoryStoreListingId, page_type: "mobile_home", page_section: pageSection, page_category: pageCategory, tile_type: "FEATURED_BLOCK", tile_position: _String(tilePosition), cta_name: null };
    pageSection = undefined;
    if (collectiblesAnalyticsContext != null) {
      pageSection = tmp4.pageSection;
    }
    pageCategory = undefined;
    if (collectiblesAnalyticsContext != null) {
      pageCategory = tmp4.pageCategory;
    }
    tilePosition = undefined;
    _String = String;
    if (collectiblesAnalyticsContext != null) {
      tilePosition = tmp4.tilePosition;
    }
    track(COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: hasOwnProperty.ORBS };
        const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
        items = [];
        CollectiblesActionCreators;
        items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
        const result = openCollectiblesShopMobile(obj2);
      } else {
        const obj3 = { category: stateFromStores, analyticsContext: collectiblesAnalyticsContext };
        navigation.navigate(metroRequire.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj3);
      }
    }
  }
  cResult[3] = collectiblesAnalyticsContext;
  cResult[4] = stateFromStores;
  cResult[5] = navigation;
  cResult[6] = subblock.categoryStoreListingId;
  cResult[7] = onTapViewAll;
}) : (function(subblock) {
  let PressableOpacity;
  let analyticsContext;
  let intl;
  let intl2;
  let items1;
  let obj10;
  let obj6;
  let obj7;
  let tmp12;
  subblock = subblock.subblock;
  dependencyMap = undefined;
  let stateFromStores;
  const tmp = closure_9();
  let obj = subblock(1503);
  importDefault = obj.useNavigation();
  let obj2 = subblock(8951);
  dependencyMap = obj2.useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj3 = subblock(504);
  let items = [stateFromStores];
  stateFromStores = obj3.useStateFromStores(items, () => CollectiblesCategoryStore.getCategoryByStoreListingId(subblock.categoryStoreListingId));
  let unpublishedAt = subblock.unpublishedAt;
  const obj4 = subblock(16127);
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
  const obj5 = { onChange: handleCardVisibilityChange, children: tmp12(PressableOpacity, obj6) };
  const tmp11 = VisibilitySensorDefault;
  obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.formatToPlainString(subblock(1126).t.FNtLb3, obj7),
    accessibilityHint: intl2.string(subblock(1126).t.F8ma9x),
    activeOpacity: 0.8,
    androidRippleConfig: { radius: nativeDefault.radii.lg },
    hitSlop: 8,
    onPress: function onTapViewAll() {
      let _String;
      let items;
      let pageCategory;
      let pageSection;
      let tilePosition;
      let sessionId;
      const track = AnalyticsUtilsDefault.track;
      const COLLECTIBLES_SHOP_ELEMENT_CLICKED = hasOwnProperty.COLLECTIBLES_SHOP_ELEMENT_CLICKED;
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
          const obj2 = { analyticsLocations: items, analyticsSource: AnalyticsLocationDefault.COLLECTIBLES_SHOP, screen: hasOwnProperty.ORBS };
          const openCollectiblesShopMobile = CollectiblesActionCreators.openCollectiblesShopMobile;
          items = [];
          CollectiblesActionCreators;
          items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
          const result = openCollectiblesShopMobile(obj2);
        } else {
          const obj3 = { category: stateFromStores, analyticsContext };
          navigation.navigate(metroRequire.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj3);
        }
      }
    },
    style: tmp.container,
    children: items1
  };
  PressableOpacity = tmp2(6191).PressableOpacity;
  intl = tmp2(1126).intl;
  obj7 = { category: subblock.name };
  intl2 = tmp2(1126).intl;
  let tmp9Result = null != assetUrl;
  ({ radius: nativeDefault.radii.lg });
  tmp12 = closure_8;
  if (tmp9Result) {
    const obj9 = { source: obj10, style: tmp.bannerImage };
    obj10 = { uri: assetUrl };
    tmp9Result = tmp9(FastImageDefault, obj9);
  }
  items1 = [tmp9Result, ];
  const tmp2Result = subblock(7269);
  let result = tmp2Result.shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj11 = { style: tmp.limitedTimeBadge };
    result = tmp9(tmp2(9014).LimitedTimeBadge, obj11);
  }
  items1[1] = result;
  return closure_7(tmp11, obj5);
});
let result = size.fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default tmp5;
