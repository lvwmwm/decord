// Module ID: 7952
// Function ID: 63445
// Name: usePremiumFeatureUpsellGetNitro
// Dependencies: []
// Exports: default

// Module 7952 (usePremiumFeatureUpsellGetNitro)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const PremiumTypes = arg1(dependencyMap[4]).PremiumTypes;
const AnalyticsObjectTypes = arg1(dependencyMap[5]).AnalyticsObjectTypes;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx");

export default function usePremiumFeatureUpsellGetNitro(arg0, arg1, arg2, arg3) {
  arg1 = arg0;
  const importDefault = arg1;
  const importAll = arg2;
  const dependencyMap = arg3;
  const loading = callback(React.useState(false), 2);
  const callback = loading[1];
  const analyticsLocations = importDefault(dependencyMap[6])().analyticsLocations;
  const React = analyticsLocations;
  let closure_6 = React.useRef(0);
  const items = [arg2, analyticsLocations, arg1, arg0, arg3];
  const onPress = React.useCallback(() => {
    const premiumTypeSubscription = ref.getPremiumTypeSubscription(false);
    const result = ref.hasFetchedSubscriptions();
    let tmp3 = null == premiumTypeSubscription;
    if (!tmp3) {
      const _Object = Object;
      tmp3 = 0 === Object.keys(premiumTypeSubscription).length;
    }
    let hasFetchedOfferResult = onPress.hasFetchedOffer();
    if (hasFetchedOfferResult) {
      hasFetchedOfferResult = !onPress.hasAnyUnexpiredOffer();
    }
    const isFetchingOfferResult = onPress.isFetchingOffer();
    if (result) {
      if (tmp3) {
        if (hasFetchedOfferResult) {
          let obj = {};
          obj = { page: arg2, objectType: constants.BUY };
          obj.analyticsLocation = obj;
          obj.analyticsLocations = analyticsLocations;
          obj.premiumType = arg0 ? closure_8.TIER_0 : closure_8.TIER_2;
          arg1(arg3[7])(obj, arg3);
        }
      }
    }
    if (!result) {
      if (ref.current < 5) {
        callback(true);
        if (result) {
          let resolved = Promise.resolve();
        } else {
          obj = arg0(arg3[8]);
          resolved = obj.fetchSubscriptions();
        }
        const items = [resolved, ];
        if (isFetchingOfferResult) {
          let resolved1 = Promise.resolve();
        } else {
          resolved1 = arg0(arg3[9]).fetchUserOffer("usePremiumFeatureUpsellGetNitro");
          const obj2 = arg0(arg3[9]);
        }
        items[1] = resolved1;
        const allPromises = Promise.all(items);
        const nextPromise = Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          callback4();
        });
        Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          callback4();
        }).catch(() => {
          const intl = callback(closure_3[11]).intl;
          callback2(closure_3[10]).presentFailedToast(intl.string(callback(closure_3[11]).t.R0RpRX));
        }).finally(() => callback3(false));
        const catchPromise = Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          callback4();
        }).catch(() => {
          const intl = callback(closure_3[11]).intl;
          callback2(closure_3[10]).presentFailedToast(intl.string(callback(closure_3[11]).t.R0RpRX));
        });
      }
    }
    arg1();
    const bestActiveInput = arg0(arg3[12]).getBestActiveInput();
    if (null != bestActiveInput) {
      bestActiveInput.closeCustomKeyboard();
    }
  }, items);
  let closure_7 = onPress;
  return { loading: loading[0], onPress };
};
