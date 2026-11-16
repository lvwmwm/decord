// Module ID: 15690
// Function ID: 15691
// Name: usePremiumGroupFeaturesTableCardText
// Dependencies: [2176, 2184, 1113, 3444, 1398, 8621, 15691, 504, 2]
// Exports: default

// Module 15690 (usePremiumGroupFeaturesTableCardText)
import get_initialized from "get initialized" /* 504 */;
import user from "user" /* 1398 */;
import _modDef3444 from "module_3444" /* 3444 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8621 */;
import usePremiumGroupPrimaryNameDefault from "usePremiumGroupPrimaryName" /* 15691 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 2184 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  let premiumGroupSubscription;
  const obj = { useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER };
  const tmp4 = usePremiumGroupPrimaryNameDefault(obj);
  const items = [SubscriptionStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => premiumGroupSubscription.getPremiumGroupSubscription());
  if (arg0 === user.PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    let priceString;
    let format3Result;
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      const tmpResult = PremiumGroupUtils;
      priceString = tmpResult.getPriceString(stateFromStores, { withIntervals: true });
    } else {
      priceString = null;
      if (null != tmp4) {
        const intl = tmp(1113).intl;
        const format = intl.format;
        const obj3 = { primaryName: tmp4, premiumGroupProductName: React3() };
        const Nu9LNm = tmp3(3444).Nu9LNm;
        priceString = format(Nu9LNm, obj3);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      const intl3 = tmp(1113).intl;
      const format3 = intl3.format;
      const obj4 = { helpCenterLink: hasOwnProperty, premiumGroupProductName: React3() };
      const prop = tmp3(3444)["+R/K74"];
      format3Result = format3(prop, obj4);
    } else {
      const intl2 = tmp(1113).intl;
      const format2 = intl2.format;
      const tmp3Result = _modDef3444;
      const obj5 = { helpCenterLink: hasOwnProperty };
      format3Result = format2(arg1 ? tmp3Result["xF+upx"] : tmp3Result.qqfnOm, obj5);
    }
    return { subheaderString: str, bodyString: format3Result };
  }
};
