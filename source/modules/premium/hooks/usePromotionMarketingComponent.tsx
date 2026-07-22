// Module ID: 7444
// Function ID: 59704
// Name: usePromotionMarketingComponent
// Dependencies: []
// Exports: usePromotionMarketingComponent

// Module 7444 (usePromotionMarketingComponent)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/hooks/usePromotionMarketingComponent.tsx");

export const usePromotionMarketingComponent = function usePromotionMarketingComponent(PREMIUM_TAB) {
  let tmp6;
  const arg1 = PREMIUM_TAB;
  const effect = React.useEffect(() => {
    const result = arg0(stateFromStores[4]).maybeFetchActivePromotions();
  }, []);
  const items = [closure_5, closure_4];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const marketingComponentByType = store.getMarketingComponentByType(arg0);
    if (null == marketingComponentByType) {
      return null;
    } else {
      let trialId;
      const promotionByTypeAndId = store.getPromotionByTypeAndId(arg0(stateFromStores[6]).PromotionTypes.MARKETING_MOMENT, marketingComponentByType.promotionId);
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
  const dependencyMap = stateFromStores;
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    let promotionId;
    if (null != stateFromStores) {
      promotionId = stateFromStores.promotionId;
    }
    let str = "";
    if (null != promotionId) {
      str = promotionId;
    }
    return store.getPromotionByTypeAndId(arg0(stateFromStores[6]).PromotionTypes.MARKETING_MOMENT, str);
  });
  let endDate;
  if (null != stateFromStores1) {
    endDate = stateFromStores1.endDate;
  }
  const callback = endDate;
  const obj2 = arg1(dependencyMap[5]);
  [tmp6, closure_3] = callback(React.useState(false), 2);
  closure_4 = React.useRef(null);
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
            callback(true);
          }, diff);
        }
        return () => {
          clearTimeout(ref.current);
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
