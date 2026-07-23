// Module ID: 7449
// Function ID: 59738
// Name: usePromotionMarketingComponent
// Dependencies: [57, 31, 6688, 7130, 7450, 566, 7132, 2]
// Exports: usePromotionMarketingComponent

// Module 7449 (usePromotionMarketingComponent)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/hooks/usePromotionMarketingComponent.tsx");

export const usePromotionMarketingComponent = function usePromotionMarketingComponent(PREMIUM_TAB) {
  let result;
  let tmp6;
  const _require = PREMIUM_TAB;
  const effect = React.useEffect(() => {
    const result = PREMIUM_TAB(stateFromStores[4]).maybeFetchActivePromotions();
  }, []);
  const items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => {
    const marketingComponentByType = outer1_5.getMarketingComponentByType(PREMIUM_TAB);
    if (null == marketingComponentByType) {
      return null;
    } else {
      let trialId;
      const promotionByTypeAndId = outer1_5.getPromotionByTypeAndId(PREMIUM_TAB(stateFromStores[6]).PromotionTypes.MARKETING_MOMENT, marketingComponentByType.promotionId);
      if (null != promotionByTypeAndId) {
        trialId = promotionByTypeAndId.trialId;
      }
      if (null != trialId) {
        const userTrialOffer = ref.getUserTrialOffer(promotionByTypeAndId.trialId);
        if (null != userTrialOffer) {
          if (null != userTrialOffer.expires_at) {
            const _Date = Date;
            const _Date2 = Date;
            const parsed = Date.parse(userTrialOffer.expires_at);
          }
        }
        return null;
      }
      return marketingComponentByType;
    }
  });
  const obj = _require(stateFromStores[5]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(stateFromStores[5]).useStateFromStores(items1, () => {
    let promotionId;
    if (null != stateFromStores) {
      promotionId = stateFromStores.promotionId;
    }
    let str = "";
    if (null != promotionId) {
      str = promotionId;
    }
    return outer1_5.getPromotionByTypeAndId(PREMIUM_TAB(stateFromStores[6]).PromotionTypes.MARKETING_MOMENT, str);
  });
  let endDate;
  if (null != stateFromStores1) {
    endDate = stateFromStores1.endDate;
  }
  const obj2 = _require(stateFromStores[5]);
  [tmp6, result] = endDate(React.useState(false), 2);
  _createForOfIteratorHelperLoose = React.useRef(null);
  const items2 = [endDate];
  const effect1 = React.useEffect(() => {
    if (null != endDate) {
      const _Date = Date;
      const time = endDate.getTime();
      const diff = time - Date.now();
      if (diff > 0) {
        if (diff < 86400000) {
          callback(false);
          const _clearTimeout2 = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            outer1_3(true);
          }, diff);
        }
        return () => {
          clearTimeout(outer1_4.current);
        };
      }
      if (diff <= 0) {
        callback(true);
      }
    } else {
      callback(false);
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
  }, items2);
  let tmp8 = null;
  if (!tmp6) {
    tmp8 = stateFromStores;
  }
  return tmp8;
};
