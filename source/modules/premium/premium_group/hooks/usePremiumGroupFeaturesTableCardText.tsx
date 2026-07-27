// Module ID: 12451
// Function ID: 96549
// Name: getPremiumGroupFeaturesTableCardSubheaderString
// Dependencies: [3783, 3791, 1212, 2781, 1868, 7772, 12452, 566, 2]
// Exports: default

// Module 12451 (getPremiumGroupFeaturesTableCardSubheaderString)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import TOTAL_PREMIUM_GROUP_MEMBER_SEATS from "TOTAL_PREMIUM_GROUP_MEMBER_SEATS";

let closure_4;
let closure_5;
const require = arg1;
function getPremiumGroupFeaturesTableCardSubheaderString(arg0, primaryName, stateFromStores) {
  if (arg0 === require(1868) /* _callSuper */.PremiumSubscriptionGroupRole.PRIMARY) {
    let obj = { withIntervals: true };
    let priceString = require(7772) /* getPremiumGroupInviteEmbedText */.getPriceString(stateFromStores, obj);
    const obj2 = require(7772) /* getPremiumGroupInviteEmbedText */;
  } else {
    priceString = null;
    if (null != primaryName) {
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { primaryName, premiumGroupProductName: callback() };
      priceString = intl.format(importDefault(2781).Nu9LNm, obj);
    }
  }
  let str = "...";
  if (null != priceString) {
    str = priceString;
  }
  return str;
}
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: closure_5 } = TOTAL_PREMIUM_GROUP_MEMBER_SEATS);
const result = require("getSystemLocale").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  let obj = { useCachedData: true, fetch: arg0 === require(1868) /* _callSuper */.PremiumSubscriptionGroupRole.MEMBER };
  let obj1 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_3.getPremiumGroupSubscription());
  if (arg0 === require(1868) /* _callSuper */.PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    if (arg0 === require(1868) /* _callSuper */.PremiumSubscriptionGroupRole.PRIMARY) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { helpCenterLink: closure_5, premiumGroupProductName: callback() };
      let formatResult = intl2.format(importDefault(2781)["+R/K74"], obj);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      const tmp7 = importDefault(2781);
      obj = { helpCenterLink: closure_5 };
      formatResult = intl.format(arg1 ? tmp7["xF+upx"] : tmp7.qqfnOm, obj);
    }
    obj1 = { subheaderString: getPremiumGroupFeaturesTableCardSubheaderString(arg0, tmp, stateFromStores), bodyString: formatResult };
    return obj1;
  }
  tmp = importDefault(12452)(obj);
};
