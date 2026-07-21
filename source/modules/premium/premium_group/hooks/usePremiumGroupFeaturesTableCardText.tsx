// Module ID: 12297
// Function ID: 94179
// Name: getPremiumGroupFeaturesTableCardSubheaderString
// Dependencies: []
// Exports: default

// Module 12297 (getPremiumGroupFeaturesTableCardSubheaderString)
function getPremiumGroupFeaturesTableCardSubheaderString(arg0, primaryName, stateFromStores) {
  if (arg0 === primaryName(dependencyMap[4]).PremiumSubscriptionGroupRole.PRIMARY) {
    let obj = { withIntervals: true };
    let priceString = primaryName(dependencyMap[5]).getPriceString(stateFromStores, obj);
    const obj2 = primaryName(dependencyMap[5]);
  } else {
    priceString = null;
    if (null != primaryName) {
      const intl = primaryName(dependencyMap[2]).intl;
      obj = { primaryName, premiumGroupProductName: callback() };
      priceString = intl.format(importDefault(dependencyMap[3]).Nu9LNm, obj);
    }
  }
  let str = "...";
  if (null != priceString) {
    str = priceString;
  }
  return str;
}
let closure_3 = importDefault(dependencyMap[0]);
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  let obj = { useCachedData: true, fetch: arg0 === arg1(dependencyMap[4]).PremiumSubscriptionGroupRole.MEMBER };
  let obj1 = arg1(dependencyMap[7]);
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => premiumGroupSubscription.getPremiumGroupSubscription());
  if (arg0 === arg1(dependencyMap[4]).PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    if (arg0 === arg1(dependencyMap[4]).PremiumSubscriptionGroupRole.PRIMARY) {
      const intl2 = arg1(dependencyMap[2]).intl;
      obj = { helpCenterLink: closure_5, premiumGroupProductName: callback() };
      let formatResult = intl2.format(importDefault(dependencyMap[3]).+R/K74, obj);
    } else {
      const intl = arg1(dependencyMap[2]).intl;
      const tmp7 = importDefault(dependencyMap[3]);
      obj = { helpCenterLink: closure_5 };
      formatResult = intl.format(arg1 ? tmp7.xF+upx : tmp7.qqfnOm, obj);
    }
    obj1 = { subheaderString: getPremiumGroupFeaturesTableCardSubheaderString(arg0, tmp, stateFromStores), bodyString: formatResult };
    return obj1;
  }
  const tmp = importDefault(dependencyMap[6])(obj);
};
