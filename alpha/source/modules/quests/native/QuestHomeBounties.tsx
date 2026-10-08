// Module ID: 15146
// Function ID: 15147
// Name: QuestHomeBounties
// Dependencies: [32, 19, 17, 7378, 2060, 21, 587, 5090, 558, 576, 2048, 7090, 15147, 584, 15151, 10575, 504, 15158, 15164, 2]

// Module 15146 (QuestHomeBounties)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10575 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 15147 */;
import usePopularOrbShopProducts from "usePopularOrbShopProducts" /* 15151 */;
import BountiesCtaHeaderDefault from "BountiesCtaHeader" /* 15158 */;
import QuestHomeOrbShopCarouselDefault from "QuestHomeOrbShopCarousel" /* 15164 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BountyStore from "BountyStore" /* 7378 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, str, tmp2;

let c9;
let metroImportAll;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let closure_11 = createStyles.createStyles(() => {
  const obj = { container: { marginBottom: nativeDefault.space.PX_48 } };
  ({ marginBottom: nativeDefault.space.PX_48 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useBountiesNux(arg0) {
  let closure_1;
  let first;
  let ref;
  let tmp4;
  let tmp8;
  let tmp9;
  let tmp = first;
  let obj = first(576);
  const cResult = obj.c(9);
  if (cResult[0] !== arg0) {
    let items1;
    if (arg0) {
      const items = [tmp(2048).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = arg0;
    cResult[1] = items1;
    tmp4 = items1;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(7090);
  const tmp5 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp4), 2);
  first = tmp5[0];
  importDefault = tmp7;
  dependencyMap = react.useRef(false);
  if (cResult[2] !== first) {
    const fn = function c() {
      const current = first !== dismissible_content.DismissibleContent.BOUNTIES_NUX_PROMO_SHEET || ref.current;
      if (!current) {
        ref.current = true;
        openBountiesNuxPromoSheetDefault();
      }
    };
    const items2 = [first];
    cResult[2] = first;
    cResult[3] = fn;
    cResult[4] = items2;
    tmp9 = items2;
    tmp8 = fn;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
  }
  const effect = obj3.useEffect(tmp8, tmp9);
  if (cResult[5] === tmp5[1]) {
    let tmp11;
    let tmp12;
    if (cResult[6] === first) {
      tmp11 = cResult[7];
      tmp12 = cResult[8];
    }
    const effect1 = obj3.useEffect(tmp11, tmp12);
  }
  class S {
    constructor() {
      tmp = closure_2;
      if (handleHide === closure_0(closure_2[10]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
        handleHide = function handleHide(key) {
          if (key.key === first(ref[12]).PROMO_SHEET_KEY) {
            closure_1_1(constants.USER_DISMISS);
          }
        };
        tmp2 = closure_1;
        obj = closure_1(tmp[13]);
        str = "HIDE_ACTION_SHEET";
        subscription = obj.subscribe("HIDE_ACTION_SHEET", handleHide);
        return () => {
          const obj = DispatcherDefault;
          obj.unsubscribe("HIDE_ACTION_SHEET", handleHide);
        };
      } else {
        return;
      }
    }
  }
  const items3 = [first, tmp5[1]];
  cResult[5] = tmp5[1];
  cResult[6] = first;
  cResult[7] = S;
  cResult[8] = items3;
  tmp12 = items3;
  tmp11 = S;
}) : (function useBountiesNux(arg0) {
  let first;
  let items1;
  let ref;
  let tmp = arg0;
  if (tmp) {
    const items = [first(2048).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
    items1 = items;
  } else {
    items1 = [];
  }
  let obj = first(7090);
  const tmp4 = _slicedToArray(obj.useSelectedDismissibleContent(items1), 2);
  first = tmp4[0];
  let closure_1 = tmp6;
  dependencyMap = react.useRef(false);
  const items2 = [first];
  const effect = react.useEffect(() => {
    const current = first !== dismissible_content.DismissibleContent.BOUNTIES_NUX_PROMO_SHEET || ref.current;
    if (!current) {
      ref.current = true;
      openBountiesNuxPromoSheetDefault();
    }
  }, items2);
  const items3 = [first, tmp4[1]];
  const effect1 = react.useEffect(() => {
    function handleHide(key) {
      if (key.key === first(ref[12]).PROMO_SHEET_KEY) {
        closure_1_1(constants.USER_DISMISS);
      }
    }
    const tmp = ref;
    if (handleHide === first(ref[10]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
      let obj = closure_1(tmp[13]);
      const subscription = obj.subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items3);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeBounties(arg0) {
  let PX_20;
  let buttonVariant;
  let clickable;
  let items1;
  let obtainableOrbRewards;
  let orbShopProducts;
  let placement;
  let shopCarouselConfig;
  let showOrbShopPlaceholderCarousel;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(23);
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, shopCarouselConfig } = arg0);
  const tmpResult = hooks_QuestHooks;
  const questHomeBounties = tmpResult.useQuestHomeBounties().questHomeBounties;
  const tmp5 = closure_11();
  closure_12(questHomeBounties.length > 0);
  const length = questHomeBounties.length;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BountyStore];
    const fn = function f() {
      return BountyStore.areAllBountiesCompleted();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  ({ placement, buttonVariant, clickable } = shopCarouselConfig);
  let tmp11 = undefined !== clickable;
  const tmpResult2 = get_initialized;
  const stateFromStores = tmpResult2.useStateFromStores(tmp7, tmp8);
  if (tmp11) {
    tmp11 = clickable;
  }
  if (0 !== length) {
    if (!stateFromStores) {
      if (cResult[8] === tmp11) {
        if (cResult[9] === obtainableOrbRewards) {
          if (cResult[10] === orbShopProducts) {
            if (cResult[11] === placement) {
              let tmp12;
              if (cResult[12] === (undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel)) {
                tmp12 = cResult[13];
              }
              let tmp19;
              if ("inside" === placement) {
                tmp19 = tmp12;
              }
              let tmp20;
              if ("replace_media" === placement) {
                tmp20 = tmp12;
              }
              if (cResult[14] === questHomeBounties) {
                if (cResult[15] === buttonVariant) {
                  if (cResult[16] === tmp19) {
                    let tmp21;
                    if (cResult[17] === tmp20) {
                      tmp21 = cResult[18];
                    }
                    let tmp25 = null;
                    if ("outside" === placement) {
                      tmp25 = tmp12;
                    }
                    if (cResult[19] === tmp5.container) {
                      if (cResult[20] === tmp21) {
                        let tmp26;
                        if (cResult[21] === tmp25) {
                          tmp26 = cResult[22];
                        }
                        return tmp26;
                      }
                    }
                    const obj2 = { style: tmp5.container, children: items1 };
                    items1 = [tmp21, tmp25];
                    const tmp29 = React4(View, obj2);
                    cResult[19] = tmp5.container;
                    cResult[20] = tmp21;
                    cResult[21] = tmp25;
                    cResult[22] = tmp29;
                    tmp26 = tmp29;
                  }
                }
              }
              const obj3 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, footer: tmp19, replaceHeaderMediaWith: tmp20 };
              const tmp24 = metroImportAll(BountiesCtaHeaderDefault, obj3);
              cResult[14] = questHomeBounties;
              cResult[15] = buttonVariant;
              cResult[16] = tmp19;
              cResult[17] = tmp20;
              cResult[18] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
      }
      let tmp13 = "none" !== placement && obtainableOrbRewards > 0;
      if (tmp13) {
        tmp13 = orbShopProducts.length >= usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel;
        orbShopProducts.length >= usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel;
      }
      let tmp16Result = null;
      if (tmp13) {
        const obj4 = { embedded: "inside" === placement, replacesHeaderMedia: "replace_media" === placement, listEdgeSpacing: PX_20, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel: undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel, clickable: tmp11 };
        const tmp16 = metroImportAll;
        const tmp17 = importDefault;
        const tmp18 = QuestHomeOrbShopCarouselDefault;
        if ("outside" === placement) {
          PX_20 = PX_16;
        } else {
          PX_20 = tmp17(587).space.PX_20;
        }
        tmp16Result = tmp16(tmp18, obj4);
      }
      cResult[8] = tmp11;
      cResult[9] = obtainableOrbRewards;
      cResult[10] = orbShopProducts;
      cResult[11] = placement;
      cResult[12] = undefined !== showOrbShopPlaceholderCarousel && showOrbShopPlaceholderCarousel;
      cResult[13] = tmp16Result;
      tmp12 = tmp16Result;
    }
  }
  if (cResult[2] === questHomeBounties) {
    let tmp30;
    if (cResult[3] === buttonVariant) {
      tmp30 = cResult[4];
    }
    if (cResult[5] === tmp5.container) {
      let tmp32;
      if (cResult[6] === tmp30) {
        tmp32 = cResult[7];
      }
      return tmp32;
    }
    const obj5 = { style: tmp5.container, children: tmp30 };
    const tmp35 = metroImportAll(View, obj5);
    cResult[5] = tmp5.container;
    cResult[6] = tmp30;
    cResult[7] = tmp35;
    tmp32 = tmp35;
  }
  const tmp31 = metroImportAll(BountiesCtaHeaderDefault, { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, isEmptyOrCompleted: true });
  cResult[2] = questHomeBounties;
  cResult[3] = buttonVariant;
  cResult[4] = tmp31;
  tmp30 = tmp31;
}) : (function QuestHomeBounties(shopCarouselConfig) {
  let PX_20;
  let buttonVariant;
  let clickable;
  let items1;
  let obtainableOrbRewards;
  let orbShopProducts;
  let placement;
  let showOrbShopPlaceholderCarousel;
  let tmp18;
  let tmp19;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = shopCarouselConfig);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  shopCarouselConfig = shopCarouselConfig.shopCarouselConfig;
  const obj = hooks_QuestHooks;
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  const tmp3 = closure_11();
  closure_12(questHomeBounties.length > 0);
  const items = [BountyStore];
  const length = questHomeBounties.length;
  ({ placement, buttonVariant, clickable } = shopCarouselConfig);
  let tmp6 = undefined !== clickable;
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => BountyStore.areAllBountiesCompleted());
  if (tmp6) {
    tmp6 = clickable;
  }
  if (0 !== length) {
    if (!stateFromStores) {
      let tmp7 = "none" !== placement && obtainableOrbRewards > 0;
      if (tmp7) {
        tmp7 = orbShopProducts.length >= tmp(15151).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
        orbShopProducts.length >= usePopularOrbShopProducts.MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
      }
      let tmp10Result = null;
      if (tmp7) {
        const obj3 = { embedded: "inside" === placement, replacesHeaderMedia: "replace_media" === placement, listEdgeSpacing: PX_20, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, clickable: tmp6 };
        const tmp10 = metroImportAll;
        const tmp11 = importDefault;
        const tmp12 = QuestHomeOrbShopCarouselDefault;
        if ("outside" === placement) {
          PX_20 = PX_16;
        } else {
          PX_20 = tmp11(587).space.PX_20;
        }
        tmp10Result = tmp10(tmp12, obj3);
      }
      const obj5 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, footer: tmp18, replaceHeaderMediaWith: tmp19 };
      tmp18 = undefined;
      const obj4 = { style: tmp3.container, children: items1 };
      const tmp13 = React4;
      const tmp14 = View;
      const tmp15 = metroImportAll;
      const tmp17 = BountiesCtaHeaderDefault;
      if ("inside" === placement) {
        tmp18 = tmp10Result;
      }
      tmp19 = undefined;
      if ("replace_media" === placement) {
        tmp19 = tmp10Result;
      }
      items1 = [tmp15(tmp17, obj5), ];
      let tmp20 = null;
      if ("outside" === placement) {
        tmp20 = tmp10Result;
      }
      items1[1] = tmp20;
      return tmp13(tmp14, obj4);
    }
  }
  const obj6 = { style: tmp3.container, children: metroImportAll(BountiesCtaHeaderDefault, { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, isEmptyOrCompleted: true }) };
  return metroImportAll(View, obj6);
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default memoResult;
