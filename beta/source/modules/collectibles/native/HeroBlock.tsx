// Module ID: 18211
// Function ID: 18212
// Name: HeroBlock
// Dependencies: [19, 17, 7829, 1074, 21, 5170, 575, 9698, 9573, 17383, 18212, 18215, 18218, 504, 9797, 18219, 18220, 17343, 7420, 7445, 9576, 18230, 18232, 5770, 18233, 1113, 7390, 2]
// Exports: default

// Module 18211 (HeroBlock)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 9573 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9576 */;
import SkeletonCardDefault from "SkeletonCard" /* 9698 */;
import OrbsArcadeExperiment2 from "OrbsArcadeExperiment" /* 17383 */;
import react_mod from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7829 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let tmp2;
const FeaturedFirstCardCoachmarkAnchorDefault = tmp2(18230);
function SkeletonLoading(accessibilityLabel) {
  let arr;
  let obj = {
    style: closure_10().skeletonContainer,
    accessibilityRole: "list",
    accessibilityLabel: accessibilityLabel.accessibilityLabel,
    accessibilityState: { busy: true },
    accessible: true,
    children: arr.map((item, index) => {
      const obj = { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH };
      const tmp = SkeletonCardDefault;
      return closure_1_7(tmp, obj, index);
    })
  };
  arr = Array.from({ length: 10 });
  return metroImportDefault(View, obj);
}
function OrbsExclusiveHeroHeader(heroBlock) {
  let tmp2Result;
  heroBlock = heroBlock.heroBlock;
  const category = heroBlock.category;
  const OrbsArcadeExperiment = OrbsArcadeExperiment2.OrbsArcadeExperiment;
  if (OrbsArcadeExperiment.useConfig({ location: "HeroBlock" }).enabled) {
    const obj2 = { productsTitle: heroBlock.mobileProductsTitle };
    tmp2Result = tmp2(tmp3(18215), obj2);
  } else {
    const obj = { heroBlock, category };
    tmp2Result = tmp2(tmp3(18212), obj);
  }
  return tmp2Result;
}
let react = react_mod;
const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { heroContainer: { width: "100%" }, productCardsContainer: { zIndex: 1 }, skeletonContainer: obj2 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/HeroBlock.tsx");

export default function _default(heroBlock) {
  let LayerScope;
  let closure_3;
  let intl;
  let intl2;
  let intl3;
  let num2;
  let obj11;
  let obj13;
  let obj15;
  let obj9;
  heroBlock = heroBlock.heroBlock;
  const preferVCPrice = heroBlock.preferVCPrice;
  let stateFromStores;
  const tmp = heroBlock;
  let tmp2 = stateFromStores;
  const screen = heroBlock.screen;
  let obj = heroBlock(stateFromStores[12]);
  const handleDismissCoachmarkOnScroll = obj.useCollectiblesCoachmarkScrollDismissContext().handleDismissCoachmarkOnScroll;
  let obj2 = heroBlock(stateFromStores[13]);
  const items = [CollectiblesCategoryStore];
  stateFromStores = obj2.useStateFromStores(items, () => CollectiblesCategoryStore.getCategory(heroBlock.categorySkuId));
  let tmp4 = null != stateFromStores && stateFromStores.isOrbsExclusive;
  let tmpResult = tmp(tmp2[14]);
  const isEligibleForQuests = tmpResult.getIsEligibleForQuests();
  const tmpResult3 = tmp(tmp2[15]);
  const handleCardVisibilityChange = tmpResult3.useTrackProductCardImpression(heroBlock.categoryStoreListingId, "mobile_home", "hero_block").handleCardVisibilityChange;
  const tmp6 = closure_10();
  const tmp8 = preferVCPrice(tmp2[16])();
  react = tmp8;
  const items1 = [heroBlock.rankedSkuIds, tmp8];
  const memo = react.useMemo(() => closure_3(heroBlock.rankedSkuIds), items1);
  const tmpResult4 = tmp(tmp2[17]);
  const filteredAndSortedProducts = tmpResult4.useFilteredAndSortedProducts({ products: memo, bypassAndroidUnsyncedFilter: tmp4 });
  let closure_4 = tmp10;
  let unpublishedAt;
  const tmp11 = preferVCPrice(tmp2[18]);
  const analyticsLocations = tmp11(preferVCPrice(tmp2[19]).COLLECTIBLES_SHOP_HERO).analyticsLocations;
  if (stateFromStores != null) {
    unpublishedAt = stateFromStores.unpublishedAt;
  }
  const items2 = [unpublishedAt, preferVCPrice, screen === constants.FEATURED_PAGE];
  let tmp21Result4 = null;
  if (undefined !== stateFromStores) {
    let obj3 = { value: analyticsLocations, children: null };
    const AnalyticsLocationProvider = tmp(tmp2[18]).AnalyticsLocationProvider;
    const obj4 = { onChange: handleCardVisibilityChange, resetKey: heroBlock.categoryStoreListingId, children: null };
    const obj5 = { style: tmp6.heroContainer, children: null };
    if (tmp4) {
      let tmp7Result2;
      let tmp21Result;
      if (isEligibleForQuests) {
        tmp7Result2 = OrbsExclusiveHeroHeader;
      }
      const obj6 = { heroBlock, category: stateFromStores };
      const items3 = [closure_7(tmp7Result2, obj6), ];
      const obj7 = { style: tmp6.productCardsContainer, children: closure_7(LayerScope, obj15) };
      LayerScope = tmp(tmp2[23]).LayerScope;
      if (tmp4) {
        const obj8 = { products: filteredAndSortedProducts, loadingCardsNum: num2, preferVCPrice, accessibilityLabel: intl2.formatToPlainString(tmp(tmp2[25]).t.FNtLb3, obj9) };
        num2 = 4;
        const tmp7Result = preferVCPrice(tmp2[24]);
        if (0 !== filteredAndSortedProducts.length) {
          num2 = filteredAndSortedProducts.length;
        }
        intl2 = tmp(tmp2[25]).intl;
        obj9 = { category: stateFromStores.name };
        tmp21Result = tmp21(tmp7Result, obj8);
      } else {
        let tmp21Result3;
        const tmp16 = closure_8;
        if (0 === filteredAndSortedProducts.length) {
          const obj10 = { accessibilityLabel: intl.formatToPlainString(tmp(tmp2[25]).t.FNtLb3, obj11) };
          intl = tmp(tmp2[25]).intl;
          obj11 = { category: stateFromStores.name };
          tmp21Result3 = tmp21(SkeletonLoading, obj10);
        } else {
          const obj12 = {
            horizontal: true,
            accessibilityLabel: intl3.formatToPlainString(tmp(tmp2[25]).t.FNtLb3, obj13),
            accessibilityRole: "list",
            data: filteredAndSortedProducts,
            onScroll: handleDismissCoachmarkOnScroll,
            renderItem: tmp13,
            decelerationRate: "fast",
            snapToInterval: tmp(tmp2[8]).COLLECTIBLES_SHOP_CARD_WIDTH + preferVCPrice(tmp2[6]).space.PX_12,
            showsHorizontalScrollIndicator: false,
            ListHeaderComponent() {
                      const obj = { style: { width: preferVCPrice(stateFromStores[6]).space.PX_16 } };
                      ({ width: preferVCPrice(stateFromStores[6]).space.PX_16 });
                      return closure_1_7(closure_4, obj);
                    },
            ListFooterComponent() {
                      const obj = { style: { width: preferVCPrice(stateFromStores[6]).space.PX_16 } };
                      ({ width: preferVCPrice(stateFromStores[6]).space.PX_16 });
                      return closure_1_7(closure_4, obj);
                    },
            ItemSeparatorComponent() {
                      const obj = { style: { width: preferVCPrice(stateFromStores[6]).space.PX_12 } };
                      ({ width: preferVCPrice(stateFromStores[6]).space.PX_12 });
                      return closure_1_7(closure_4, obj);
                    }
          };
          const FlashList = tmp(tmp2[26]).FlashList;
          intl3 = tmp(tmp2[25]).intl;
          obj13 = { category: stateFromStores.name };
          tmp21Result3 = tmp21(FlashList, obj12);
        }
        const obj14 = { children: tmp21Result3 };
        tmp21Result = tmp21(tmp16, obj14);
      }
      obj15 = { children: tmp21Result };
      items3[1] = closure_7(closure_4, obj7);
      obj5.children = items3;
      obj4.children = tmp23(closure_4, obj5);
      obj3.children = closure_7(tmp22, obj4);
      tmp21Result4 = tmp21(AnalyticsLocationProvider, obj3);
    }
    tmp7Result2 = tmp7(tmp2[10]);
  }
  return tmp21Result4;
};
