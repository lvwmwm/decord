// Module ID: 15418
// Function ID: 15419
// Name: ShopBlockItem
// Dependencies: [19, 17, 6966, 21, 4837, 588, 558, 576, 504, 6996, 8226, 15419, 15432, 15434, 15441, 2]

// Module 15418 (ShopBlockItem)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import ShopBlockType from "ShopBlockType" /* 6996 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8226 */;
import FeaturedBlockDefault from "FeaturedBlock" /* 15432 */;
import FeedBlockDefault from "FeedBlock" /* 15434 */;
import ShelfBlockDefault from "ShelfBlock" /* 15441 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 6966 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { shopBlockSpacing: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let block;
  let combined1;
  let preferVCPrice;
  let screen;
  let tmp10;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(38);
  ({ block, screen, preferVCPrice } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesCategoryStore];
    const fn = function p() {
      return CollectiblesCategoryStore.categories;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CollectiblesCategoryStore];
    const fn2 = function f() {
      return CollectiblesCategoryStore.products;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
  if (block.type !== ShopBlockType.ShopBlockType.HERO) {
    let combined;
    if (block.type !== ShopBlockType.ShopBlockType.REWARD_HERO) {
      const _HermesInternal3 = HermesInternal;
      combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
    } else {
      const _HermesInternal2 = HermesInternal;
      combined = "reward-hero-" + block.categoryStoreListingId;
    }
    combined1 = combined;
  } else {
    const _HermesInternal = HermesInternal;
    combined1 = "hero-" + block.categoryStoreListingId;
  }
  const type = block.type;
  if (ShopBlockType.ShopBlockType.HERO === type) {
    let tmp46;
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { pageSection: "top 4" };
      cResult[4] = obj2;
      tmp46 = obj2;
    } else {
      tmp46 = cResult[4];
    }
    if (cResult[5] === block) {
      if (cResult[6] === preferVCPrice) {
        if (cResult[7] === screen) {
          let tmp47;
          if (cResult[8] === combined1) {
            tmp47 = cResult[9];
          }
          return tmp47;
        }
      }
    }
    const CollectiblesAnalyticsProvider3 = tmp(8226).CollectiblesAnalyticsProvider;
    const tmp50 = <CollectiblesAnalyticsProvider3 newValue={tmp46}>{null}</CollectiblesAnalyticsProvider3>;
    cResult[5] = block;
    cResult[6] = preferVCPrice;
    cResult[7] = screen;
    cResult[8] = combined1;
    cResult[9] = tmp50;
    tmp47 = tmp50;
  } else if (ShopBlockType.ShopBlockType.FEATURED === type) {
    let tmp37;
    let tmp38;
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { pageSection: "featured_block" };
      cResult[10] = obj5;
      tmp37 = obj5;
    } else {
      tmp37 = cResult[10];
    }
    if (cResult[11] !== block) {
      const tmp41 = jsx(FeaturedBlockDefault, { featuredBlock: block });
      cResult[11] = block;
      cResult[12] = tmp41;
      tmp38 = tmp41;
    } else {
      tmp38 = cResult[12];
    }
    if (cResult[13] === combined1) {
      if (cResult[14] === tmp4.shopBlockSpacing) {
        let tmp42;
        if (cResult[15] === tmp38) {
          tmp42 = cResult[16];
        }
        return tmp42;
      }
    }
    const CollectiblesAnalyticsProvider2 = tmp(8226).CollectiblesAnalyticsProvider;
    const tmp45 = <CollectiblesAnalyticsProvider2 newValue={tmp37}>{null}</CollectiblesAnalyticsProvider2>;
    cResult[13] = combined1;
    cResult[14] = tmp4.shopBlockSpacing;
    cResult[15] = tmp38;
    cResult[16] = tmp45;
    tmp42 = tmp45;
  } else if (ShopBlockType.ShopBlockType.FEED === type) {
    let tmp28;
    const _Symbol = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { pageSection: "popular picks" };
      cResult[17] = obj9;
      tmp28 = obj9;
    } else {
      tmp28 = cResult[17];
    }
    if (cResult[18] === block) {
      if (cResult[19] === preferVCPrice) {
        if (cResult[20] === screen) {
          let tmp29;
          if (cResult[21] === combined1) {
            tmp29 = cResult[22];
          }
          if (cResult[23] === tmp4.shopBlockSpacing) {
            let tmp33;
            if (cResult[24] === tmp29) {
              tmp33 = cResult[25];
            }
            return tmp33;
          }
          const CollectiblesAnalyticsProvider = tmp(8226).CollectiblesAnalyticsProvider;
          const tmp36 = <CollectiblesAnalyticsProvider newValue={tmp28}>{null}</CollectiblesAnalyticsProvider>;
          cResult[23] = tmp4.shopBlockSpacing;
          cResult[24] = tmp29;
          cResult[25] = tmp36;
          tmp33 = tmp36;
        }
      }
    }
    const tmp32 = jsx(FeedBlockDefault, { feedBlock: block, screen, preferVCPrice, disableBundleStaticBackground: true }, combined1);
    cResult[18] = block;
    cResult[19] = preferVCPrice;
    cResult[20] = screen;
    cResult[21] = combined1;
    cResult[22] = tmp32;
    tmp29 = tmp32;
  } else if (ShopBlockType.ShopBlockType.SHELF === type) {
    let tmp16;
    if (cResult[26] !== block.name) {
      const obj13 = { pageSection: block.name };
      cResult[26] = block.name;
      cResult[27] = obj13;
      tmp16 = obj13;
    } else {
      tmp16 = cResult[27];
    }
    if (cResult[28] === preferVCPrice) {
      if (cResult[29] === block) {
        let tmp17;
        if (cResult[30] === combined1) {
          tmp17 = cResult[31];
        }
        if (cResult[32] === tmp4.shopBlockSpacing) {
          let tmp21;
          if (cResult[33] === tmp17) {
            tmp21 = cResult[34];
          }
          if (cResult[35] === tmp16) {
            let tmp25;
            if (cResult[36] === tmp21) {
              tmp25 = cResult[37];
            }
            return tmp25;
          }
          const tmp27 = jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp16, children: tmp21 });
          cResult[35] = tmp16;
          cResult[36] = tmp21;
          cResult[37] = tmp27;
          tmp25 = tmp27;
        }
        const tmp24 = <View style={tmp4.shopBlockSpacing}>{tmp17}</View>;
        cResult[32] = tmp4.shopBlockSpacing;
        cResult[33] = tmp17;
        cResult[34] = tmp24;
        tmp21 = tmp24;
      }
    }
    const tmp20 = jsx(ShelfBlockDefault, { block, preferVCPrice }, combined1);
    cResult[28] = preferVCPrice;
    cResult[29] = block;
    cResult[30] = combined1;
    cResult[31] = tmp20;
    tmp17 = tmp20;
  } else {
    const WIDE_BANNER = tmp(6996).ShopBlockType.WIDE_BANNER;
    return null;
  }
}) : ((block) => {
  let preferVCPrice;
  let screen;
  block = block.block;
  ({ screen, preferVCPrice } = block);
  let stateFromStores1;
  const tmp = closure_7();
  let tmp2 = block;
  const items = [CollectiblesCategoryStore];
  const obj = block(stateFromStores1[8]);
  const stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.categories);
  const items1 = [CollectiblesCategoryStore];
  const obj2 = block(stateFromStores1[8]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => CollectiblesCategoryStore.products);
  const items2 = [block, stateFromStores.size, stateFromStores1.size];
  const memo = react.useMemo(() => {
    let combined;
    if (block.type === ShopBlockType.ShopBlockType.HERO) {
      const _HermesInternal3 = HermesInternal;
      combined = "hero-" + tmp.categoryStoreListingId;
    } else if (block.type === ShopBlockType.ShopBlockType.REWARD_HERO) {
      const _HermesInternal2 = HermesInternal;
      combined = "reward-hero-" + tmp.categoryStoreListingId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + stateFromStores.size + "-" + stateFromStores1.size;
    }
    return combined;
  }, items2);
  const type = block.type;
  if (block(stateFromStores1[9]).ShopBlockType.HERO === type) {
    const CollectiblesAnalyticsProvider4 = tmp2(tmp3[10]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider4 newValue={{ pageSection: "top 4" }}>{null}</CollectiblesAnalyticsProvider4>;
  } else if (tmp2(stateFromStores1[9]).ShopBlockType.FEATURED === type) {
    const CollectiblesAnalyticsProvider3 = tmp2(tmp3[10]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider3 newValue={{ pageSection: "featured_block" }}>{null}</CollectiblesAnalyticsProvider3>;
  } else if (tmp2(stateFromStores1[9]).ShopBlockType.FEED === type) {
    const CollectiblesAnalyticsProvider2 = tmp2(tmp3[10]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider2 newValue={{ pageSection: "popular picks" }}>{null}</CollectiblesAnalyticsProvider2>;
  } else if (tmp2(stateFromStores1[9]).ShopBlockType.SHELF === type) {
    const obj12 = { pageSection: block.name };
    const CollectiblesAnalyticsProvider = tmp2(tmp3[10]).CollectiblesAnalyticsProvider;
    return <CollectiblesAnalyticsProvider newValue={obj12}>{null}</CollectiblesAnalyticsProvider>;
  } else {
    const WIDE_BANNER = tmp2(tmp3[9]).ShopBlockType.WIDE_BANNER;
    return null;
  }
});
const result = size.fileFinishedImporting("modules/collectibles/native/ShopBlockItem.tsx");

export default tmp2;
