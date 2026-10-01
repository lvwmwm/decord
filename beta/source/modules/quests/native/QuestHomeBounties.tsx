// Module ID: 14596
// Function ID: 14597
// Name: QuestHomeBounties
// Dependencies: [32, 19, 17, 7115, 2042, 21, 576, 4836, 2029, 6806, 14597, 573, 14601, 10681, 504, 14608, 14614, 2]

// Module 14596 (QuestHomeBounties)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 14597 */;
import BountiesCtaHeaderDefault from "BountiesCtaHeader" /* 14608 */;
import QuestHomeOrbShopCarouselDefault from "QuestHomeOrbShopCarousel" /* 14614 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BountyStore from "BountyStore" /* 7115 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

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
const memoResult = react.memo(function QuestHomeBounties(shopCarouselConfig) {
  let PX_20;
  let buttonVariant;
  let clickable;
  let closure_1;
  let first;
  let items1;
  let items5;
  let obtainableOrbRewards;
  let orbShopProducts;
  let placement;
  let ref;
  let showOrbShopPlaceholderCarousel;
  let tmp22;
  let tmp23;
  ({ orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = shopCarouselConfig);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  shopCarouselConfig = shopCarouselConfig.shopCarouselConfig;
  let tmp = first;
  let obj = first(10681);
  const questHomeBounties = obj.useQuestHomeBounties().questHomeBounties;
  const tmp3 = closure_11();
  first = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  if (questHomeBounties.length > 0) {
    const items = [tmp(2029).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmpResult = tmp(6806);
  const tmp4 = _slicedToArray(tmpResult.useSelectedDismissibleContent(items1), 2);
  first = tmp4[0];
  importDefault = tmp6;
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
      if (key.key === first(ref[10]).PROMO_SHEET_KEY) {
        closure_1_1(constants.USER_DISMISS);
      }
    }
    const tmp = ref;
    if (handleHide === first(ref[8]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
      let obj = closure_1(tmp[11]);
      const subscription = obj.subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        const obj = DispatcherDefault;
        obj.unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items3);
  const items4 = [BountyStore];
  const length = questHomeBounties.length;
  ({ placement, buttonVariant, clickable } = shopCarouselConfig);
  let tmp10 = undefined !== clickable;
  const tmpResult2 = tmp(504);
  const stateFromStores = tmpResult2.useStateFromStores(items4, () => BountyStore.areAllBountiesCompleted());
  if (tmp10) {
    tmp10 = clickable;
  }
  if (0 !== length) {
    if (!stateFromStores) {
      let tmp11 = "none" !== placement && obtainableOrbRewards > 0;
      if (tmp11) {
        tmp11 = orbShopProducts.length >= tmp(14601).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
        orbShopProducts.length >= tmp(14601).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
      }
      let tmp14Result = null;
      if (tmp11) {
        const obj2 = { embedded: "inside" === placement, replacesHeaderMedia: "replace_media" === placement, listEdgeSpacing: PX_20, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel, clickable: tmp10 };
        const tmp14 = closure_8;
        const tmp15 = importDefault;
        const tmp16 = QuestHomeOrbShopCarouselDefault;
        if ("outside" === placement) {
          PX_20 = PX_16;
        } else {
          PX_20 = tmp15(576).space.PX_20;
        }
        tmp14Result = tmp14(tmp16, obj2);
      }
      const obj4 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, footer: tmp22, replaceHeaderMediaWith: tmp23 };
      tmp22 = undefined;
      const obj3 = { style: tmp3.container, children: items5 };
      const tmp17 = closure_9;
      const tmp18 = View;
      const tmp19 = closure_8;
      const tmp21 = BountiesCtaHeaderDefault;
      if ("inside" === placement) {
        tmp22 = tmp14Result;
      }
      tmp23 = undefined;
      if ("replace_media" === placement) {
        tmp23 = tmp14Result;
      }
      items5 = [tmp19(tmp21, obj4), ];
      let tmp24 = null;
      if ("outside" === placement) {
        tmp24 = tmp14Result;
      }
      items5[1] = tmp24;
      return tmp17(tmp18, obj3);
    }
  }
  const obj5 = { style: tmp3.container, children: closure_8(BountiesCtaHeaderDefault, { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, isEmptyOrCompleted: true }) };
  return closure_8(View, obj5);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default memoResult;
