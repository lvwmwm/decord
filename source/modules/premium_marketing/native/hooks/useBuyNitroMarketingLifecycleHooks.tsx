// Module ID: 7424
// Function ID: 59674
// Name: useBuyNitroMarketingLifecycleHooks
// Dependencies: [31, 6660, 1345, 4130, 689, 7425, 7429, 3946, 1334, 1336, 7430, 2]
// Exports: useBuyNitroMarketingLifecycleHooks

// Module 7424 (useBuyNitroMarketingLifecycleHooks)
import result from "result";
import usePremiumPlanPurchasedStore from "usePremiumPlanPurchasedStore";
import { ContentDismissActionType } from "ContentDismissActionType";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ reset: closure_4, usePremiumPlanPurchasedStore: closure_5 } = usePremiumPlanPurchasedStore);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopWidth: 0 };
_createForOfIteratorHelperLoose.navigator = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("ContentDismissActionType").fileFinishedImporting("modules/premium_marketing/native/hooks/useBuyNitroMarketingLifecycleHooks.tsx");

export const useBuyNitroMarketingLifecycleHooks = function useBuyNitroMarketingLifecycleHooks(nativeStackNavigation, initialLoadCompleted) {
  let closure_0 = nativeStackNavigation;
  let closure_1 = initialLoadCompleted;
  let tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  (function useAutoDismissMarketingMomentBadge(initialLoadCompleted) {
    const nativeStackNavigation = initialLoadCompleted;
    const promotionMarketingComponent = nativeStackNavigation(tmp[5]).usePromotionMarketingComponent(nativeStackNavigation(tmp[6]).MarketingComponentType.PREMIUM_TAB);
    const items = [initialLoadCompleted, promotionMarketingComponent];
    const effect = outer1_3.useEffect(() => {
      let tmp = initialLoadCompleted;
      if (initialLoadCompleted) {
        tmp = null != promotionMarketingComponent;
      }
      if (tmp) {
        tmp = "premiumTab" === promotionMarketingComponent.properties.properties.oneofKind;
      }
      if (tmp) {
        let obj = promotionMarketingComponent(3946);
        tmp = !obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(initialLoadCompleted(1334).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
      }
      if (tmp) {
        obj = { dismissAction: outer2_6.AUTO_DISMISS };
        const result = promotionMarketingComponent(1336).markSnowflakeBoundDismissibleContentAsDismissed(initialLoadCompleted(1334).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj);
        const obj2 = promotionMarketingComponent(1336);
      }
    }, items);
  })(initialLoadCompleted);
  let effect = React.useEffect(() => {
    let BuyNitroPurchaseLock = nativeStackNavigation(tmp[10]).BuyNitroPurchaseLock;
    BuyNitroPurchaseLock.end();
    return () => {
      const BuyNitroPurchaseLock = callback(7430).BuyNitroPurchaseLock;
      BuyNitroPurchaseLock.end();
      const BuyNitroPurchaseLock2 = callback(7430).BuyNitroPurchaseLock;
      const result = BuyNitroPurchaseLock2.setInitialLoadComplete(false);
    };
  }, []);
  let items = [initialLoadCompleted];
  const effect1 = React.useEffect(() => {
    const BuyNitroPurchaseLock = nativeStackNavigation(tmp[10]).BuyNitroPurchaseLock;
    const result = BuyNitroPurchaseLock.setInitialLoadComplete(closure_1);
  }, items);
  const items1 = [nativeStackNavigation, tmp.navigator];
  const layoutEffect = React.useLayoutEffect(() => {
    nativeStackNavigation.setOptions({ headerShown: false, contentStyle: tmp.navigator });
  }, items1);
  const effect2 = React.useEffect(() => () => {
    if (!outer2_5.getState().isPaymentSuccess) {
      outer2_4();
    }
  }, []);
};
