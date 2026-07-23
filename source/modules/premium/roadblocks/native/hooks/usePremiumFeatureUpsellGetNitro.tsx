// Module ID: 7958
// Function ID: 63482
// Name: usePremiumFeatureUpsellGetNitro
// Dependencies: [57, 31, 3782, 6688, 1851, 653, 5464, 6661, 4451, 7374, 3830, 1212, 3989, 2]
// Exports: default

// Module 7958 (usePremiumFeatureUpsellGetNitro)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { PremiumTypes } from "GuildFeatures";
import { AnalyticsObjectTypes } from "ME";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx");

export default function usePremiumFeatureUpsellGetNitro(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let closure_2 = arg2;
  const dependencyMap = arg3;
  const loading = callback(analyticsLocations.useState(false), 2);
  callback = loading[1];
  analyticsLocations = importDefault(5464)().analyticsLocations;
  let _isNativeReflectConstruct = analyticsLocations.useRef(0);
  let items = [arg2, analyticsLocations, arg1, arg0, arg3];
  const onPress = analyticsLocations.useCallback(() => {
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
          obj = { page: closure_2, objectType: outer1_9.BUY };
          obj.analyticsLocation = obj;
          obj.analyticsLocations = analyticsLocations;
          obj.premiumType = callback ? outer1_8.TIER_0 : outer1_8.TIER_2;
          callback2(6661)(obj, dependencyMap);
        }
      }
    }
    if (!result) {
      if (ref.current < 5) {
        callback3(true);
        if (result) {
          let resolved = Promise.resolve();
        } else {
          obj = callback(4451);
          resolved = obj.fetchSubscriptions();
        }
        const items = [resolved, ];
        if (isFetchingOfferResult) {
          let resolved1 = Promise.resolve();
        } else {
          resolved1 = callback(7374).fetchUserOffer("usePremiumFeatureUpsellGetNitro");
          const obj2 = callback(7374);
        }
        items[1] = resolved1;
        const allPromises = Promise.all(items);
        const nextPromise = Promise.all(items).then(() => {
          outer1_6.current = outer1_6.current + 1;
          outer1_7();
        });
        Promise.all(items).then(() => {
          outer1_6.current = outer1_6.current + 1;
          outer1_7();
        }).catch(() => {
          const intl = callback(1212).intl;
          callback2(3830).presentFailedToast(intl.string(callback(1212).t.R0RpRX));
        }).finally(() => outer1_4(false));
        const catchPromise = Promise.all(items).then(() => {
          outer1_6.current = outer1_6.current + 1;
          outer1_7();
        }).catch(() => {
          const intl = callback(1212).intl;
          callback2(3830).presentFailedToast(intl.string(callback(1212).t.R0RpRX));
        });
      }
    }
    callback2();
    const bestActiveInput = callback(3989).getBestActiveInput();
    if (null != bestActiveInput) {
      bestActiveInput.closeCustomKeyboard();
    }
  }, items);
  return { loading: loading[0], onPress };
};
