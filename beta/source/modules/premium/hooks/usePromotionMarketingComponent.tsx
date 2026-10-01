// Module ID: 12959
// Function ID: 12960
// Name: usePromotionMarketingComponent
// Dependencies: [32, 19, 6870, 10128, 12960, 504, 10160, 2]
// Exports: usePromotionMarketingComponent

// Module 12959 (usePromotionMarketingComponent)
import promotions_constants from "promotions/constants" /* 10160 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserOfferStore from "UserOfferStore" /* 6870 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let result = size.fileFinishedImporting("modules/premium/hooks/usePromotionMarketingComponent.tsx");

export const usePromotionMarketingComponent = function usePromotionMarketingComponent(PREMIUM_TAB) {
  let ref;
  let stateFromStores;
  let tmp6;
  _require = PREMIUM_TAB;
  let obj = react;
  const effect = react.useEffect(() => {
    const obj = PREMIUM_TAB(stateFromStores[4]);
    const result = obj.maybeFetchActivePromotions();
  }, []);
  const items = [PromotionsStore, ref];
  const obj2 = require("get initialized");
  stateFromStores = obj2.useStateFromStores(items, () => {
    const marketingComponentByType = PromotionsStore.getMarketingComponentByType(PREMIUM_TAB);
    const obj = PromotionsStore;
    if (null == marketingComponentByType) {
      return null;
    } else {
      const promotionByTypeAndId = obj.getPromotionByTypeAndId(promotions_constants.PromotionTypes.MARKETING_MOMENT, marketingComponentByType.promotionId);
      let trialId;
      if (promotionByTypeAndId != null) {
        trialId = promotionByTypeAndId.trialId;
      }
      if (null != trialId) {
        const userTrialOffer = UserOfferStore.getUserTrialOffer(promotionByTypeAndId.trialId);
        return null;
      }
      return marketingComponentByType;
    }
  });
  const items1 = [PromotionsStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const getPromotionByTypeAndId = PromotionsStore.getPromotionByTypeAndId;
    let str;
    const MARKETING_MOMENT = promotions_constants.PromotionTypes.MARKETING_MOMENT;
    if (stateFromStores != null) {
      str = stateFromStores.promotionId;
    }
    if (str == null) {
      str = "";
    }
    return getPromotionByTypeAndId(MARKETING_MOMENT, str);
  });
  let endDate;
  if (stateFromStores1 != null) {
    endDate = stateFromStores1.endDate;
  }
  [tmp6, react] = endDate(obj.useState(false), 2);
  endDate(obj.useState(false), 2);
  ref = obj.useRef(null);
  const items2 = [endDate];
  const effect1 = obj.useEffect(() => {
    const obj = endDate;
    if (null != endDate) {
      const _Date = Date;
      const time = obj.getTime();
      const diff = time - Date.now();
      if (diff > 0) {
        if (diff < 86400000) {
          react(false);
          const _clearTimeout2 = clearTimeout;
          clearTimeout(ref.current);
          const _setTimeout = setTimeout;
          ref.current = setTimeout(() => {
            closure_1_3(true);
          }, diff);
        }
        return () => {
          clearTimeout(ref.current);
        };
      }
      if (diff <= 0) {
        react(true);
      }
    } else {
      react(false);
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
