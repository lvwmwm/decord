// Module ID: 13025
// Function ID: 13026
// Name: usePremiumGroupFeaturesTableCardText
// Dependencies: [4494, 4502, 1115, 3199, 1380, 7493, 13026, 504, 2]
// Exports: default

// Module 13025 (usePremiumGroupFeaturesTableCardText)
import get_initialized from "get initialized" /* 504 */;
import user from "user" /* 1380 */;
import _modDef3199 from "module_3199" /* 3199 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 7493 */;
import usePremiumGroupPrimaryNameDefault from "usePremiumGroupPrimaryName" /* 13026 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 4502 */;
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
        const intl = tmp(1115).intl;
        const format = intl.format;
        const obj3 = { primaryName: tmp4, premiumGroupProductName: React3() };
        const Nu9LNm = tmp3(3199).Nu9LNm;
        priceString = format(Nu9LNm, obj3);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      const intl3 = tmp(1115).intl;
      const format3 = intl3.format;
      const obj4 = { helpCenterLink: hasOwnProperty, premiumGroupProductName: React3() };
      const prop = tmp3(3199)["+R/K74"];
      format3Result = format3(prop, obj4);
    } else {
      const intl2 = tmp(1115).intl;
      const format2 = intl2.format;
      const tmp3Result = _modDef3199;
      const obj5 = { helpCenterLink: hasOwnProperty };
      format3Result = format2(arg1 ? tmp3Result["xF+upx"] : tmp3Result.qqfnOm, obj5);
    }
    return { subheaderString: str, bodyString: format3Result };
  }
};
