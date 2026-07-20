// Module ID: 14361
// Function ID: 108443
// Name: subblock
// Dependencies: []
// Exports: default

// Module 14361 (subblock)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[3]).CollectiblesMobileShopScreen;
({ AnalyticEvents: closure_6, UserSettingsSections: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ container: { position: "relative" }, bannerImage: {}, limitedTimeBadge: { "Bool(true)": "sa", "Bool(true)": "y", "Bool(true)": "isArray", "Bool(true)": "length" } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/collectibles/native/FeaturedCategorySubblock.tsx");

export default function _default(subblock) {
  subblock = subblock.subblock;
  const arg1 = subblock;
  const tmp = callback2();
  let obj = arg1(closure_2[7]);
  const importDefault = obj.useNavigation();
  let obj1 = arg1(closure_2[8]);
  closure_2 = obj1.useCollectiblesAnalyticsContext();
  const assetUrl = subblock.assetUrl;
  let obj2 = arg1(closure_2[9]);
  const items = [closure_4];
  const stateFromStores = obj2.useStateFromStores(items, () => categoryByStoreListingId.getCategoryByStoreListingId(subblock.categoryStoreListingId));
  const Image = stateFromStores;
  let obj3 = arg1(closure_2[10]);
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
  obj = {};
  const intl = arg1(closure_2[13]).intl;
  obj1 = { category: subblock.name };
  obj.accessibilityLabel = intl.formatToPlainString(arg1(closure_2[13]).t.FNtLb3, obj1);
  const intl2 = arg1(closure_2[13]).intl;
  obj.accessibilityHint = intl2.string(arg1(closure_2[13]).t.F8ma9x);
  obj2 = { radius: importDefault(closure_2[14]).radii.lg };
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
    obj.track(constants2.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
    if (null != stateFromStores) {
      if (stateFromStores.isOrbsExclusive) {
        obj = {};
        const items = [navigation(closure_2[17]).COLLECTIBLES_SHOP];
        obj.analyticsLocations = items;
        obj.analyticsSource = navigation(closure_2[17]).COLLECTIBLES_SHOP;
        obj.screen = constants.ORBS;
        const result = subblock(closure_2[16]).openCollectiblesShopMobile(obj);
        const obj4 = subblock(closure_2[16]);
      } else {
        const obj1 = { category: stateFromStores, analyticsContext: closure_2 };
        navigation.navigate(constants3.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, obj1);
      }
    }
  };
  obj.style = tmp.container;
  let tmp12 = null != assetUrl;
  if (tmp12) {
    obj3 = {};
    const obj4 = { uri: assetUrl };
    obj3.source = obj4;
    obj3.style = tmp.bannerImage;
    tmp12 = callback(Image, obj3);
  }
  const items1 = [tmp12, ];
  const tmp10 = importDefault(closure_2[11]);
  const tmp11 = closure_9;
  const tmp9 = callback;
  let result = arg1(closure_2[18]).shouldShowLimitedTimeBadge(date);
  if (result) {
    const obj5 = { style: tmp.limitedTimeBadge };
    result = callback(arg1(closure_2[19]).LimitedTimeBadge, obj5);
  }
  items1[1] = result;
  obj.children = items1;
  obj.children = tmp11(arg1(closure_2[12]).PressableOpacity, obj);
  return tmp9(tmp10, obj);
};
