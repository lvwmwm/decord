// Module ID: 12274
// Function ID: 94081
// Name: useEligibleActiveOutboundPromotions
// Dependencies: []
// Exports: useBogoPromotion, useHasActiveBogoPromotion, useIsInPromotion, useOutboundPromotions, useUnseenOutboundPromotions

// Module 12274 (useEligibleActiveOutboundPromotions)
function useEligibleActiveOutboundPromotions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeClaimedPromotions;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  let importDefault;
  let dependencyMap;
  let React;
  const items = [closure_5];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items, () => closure_5.outboundPromotions);
  importDefault = stateFromStoresArray;
  const obj2 = arg1(dependencyMap[4]);
  const items1 = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items1, () => closure_5.consumedInboundPromotionId);
  dependencyMap = stateFromStores;
  const obj3 = arg1(dependencyMap[4]);
  const items2 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items2, () => closure_5.claimedOutboundPromotionCodes);
  React = stateFromStores1;
  const items3 = [stateFromStoresArray, stateFromStores, stateFromStores1, flag];
  return React.useMemo(() => {
    let set = null;
    if (set) {
      const _Set = Set;
      set = new Set(stateFromStores1.map((promotion) => promotion.promotion.id));
    }
    return stateFromStoresArray.filter((id) => {
      let tmp = id.id !== closure_2;
      if (tmp) {
        const tmp4 = !set(closure_2[5]).shouldShowOutboundPromotionOnPlatform(id);
        let tmp5 = !tmp4;
        if (!tmp4) {
          let flag = !set(closure_2[5]).isLogitechPromotion(id);
          if (flag) {
            flag = true;
            if (null != set) {
              const hasItem = set.has(id.id);
              flag = true;
            }
          }
          tmp5 = flag;
          const obj2 = set(closure_2[5]);
        }
        tmp = tmp5;
        const obj = set(closure_2[5]);
      }
      return tmp;
    });
  }, items3);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const PremiumTypes = arg1(dependencyMap[3]).PremiumTypes;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export { useEligibleActiveOutboundPromotions };
export const useOutboundPromotions = function useOutboundPromotions() {
  let obj = arg1(dependencyMap[4]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.lastFetchedActivePromotions);
  const arg1 = stateFromStores;
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = arg1(dependencyMap[4]);
  const obj3 = importDefault(dependencyMap[6]);
  const isPremiumExactlyResult = importDefault(dependencyMap[6]).isPremiumExactly(stateFromStores1, PremiumTypes.TIER_2);
  const tmp4 = !importDefault(dependencyMap[6]).isPremium(stateFromStores1) || isPremiumExactlyResult;
  const importDefault = tmp4;
  const obj4 = importDefault(dependencyMap[6]);
  const items2 = [closure_5];
  const stateFromStores2 = arg1(dependencyMap[4]).useStateFromStores(items2, () => closure_5.claimedOutboundPromotionCodes);
  const dependencyMap = stateFromStores2;
  const obj5 = arg1(dependencyMap[4]);
  const items3 = [closure_5];
  let stateFromStores3 = arg1(dependencyMap[4]).useStateFromStores(items3, () => closure_5.claimedOutboundPromotionCodesLoaded);
  const items4 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      tmp4(stateFromStores2[7]).wait(() => callback(closure_2[8]).markOutboundPromotionsSeen());
      const obj = tmp4(stateFromStores2[7]);
    }
  }, items4);
  const items5 = [stateFromStores, tmp4];
  const effect1 = React.useEffect(() => {
    tmp4(stateFromStores2[7]).wait(() => {
      let tmp = callback;
      if (callback) {
        tmp = null == closure_0;
      }
      if (tmp) {
        const activePromotions = callback(closure_2[8]).fetchActivePromotions();
        const obj = callback(closure_2[8]);
      }
    });
  }, items5);
  const effect2 = React.useEffect(() => {
    tmp4(stateFromStores2[7]).wait(() => {
      const claimedOutboundPromotionCodes = callback(closure_2[8]).fetchClaimedOutboundPromotionCodes();
    });
  }, []);
  const items6 = [stateFromStores2];
  const memo = React.useMemo(() => stateFromStores(stateFromStores2[5]).getClaimedOutboundPromotionCodeMap(stateFromStores2), items6);
  const tmp11 = useEligibleActiveOutboundPromotions({ includeClaimedPromotions: true });
  const React = tmp11;
  const items7 = [tmp11, stateFromStores2];
  obj = {};
  const memo1 = React.useMemo(() => {
    const stateFromStores = new Set(tmp11.map((id) => id.id));
    return stateFromStores2.filter((promotion) => {
      promotion = promotion.promotion;
      let result = !set.has(promotion.id);
      if (result) {
        let obj = set(closure_2[5]);
        obj = { promotionType: promotion.promotionType };
        result = false === obj.isRecurringPromotion(obj);
      }
      if (result) {
        result = !set(closure_2[5]).isLogitechPromotion(promotion);
        const obj3 = set(closure_2[5]);
      }
      if (result) {
        result = set(closure_2[5]).shouldShowOutboundPromotionOnPlatform(promotion);
        const obj4 = set(closure_2[5]);
      }
      return result;
    });
  }, items7);
  if (stateFromStores3) {
    let tmp13 = !tmp4;
    if (!tmp13) {
      tmp13 = null != stateFromStores;
    }
    stateFromStores3 = tmp13;
  }
  obj.promotionsLoaded = stateFromStores3;
  obj.activeOutboundPromotions = tmp11;
  obj.claimedEndedOutboundPromotions = memo1;
  obj.claimedOutboundPromotionCodeMap = memo;
  return obj;
};
export const useUnseenOutboundPromotions = function useUnseenOutboundPromotions() {
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => obj.lastSeenOutboundPromotionStartDate);
  const arg1 = stateFromStores;
  const tmp2 = useEligibleActiveOutboundPromotions();
  const importDefault = tmp2;
  const items1 = [tmp2, stateFromStores];
  const memo = React.useMemo(() => {
    if (null == stateFromStores) {
      let found = tmp2;
    } else {
      found = tmp2.filter((startDate) => {
        const date = new Date(startDate.startDate);
        return date > new Date(closure_0);
      });
    }
    return found;
  }, items1);
  return memo.filter((promotion) => stateFromStores(closure_2[5]).shouldShowOutboundPromotionOnPlatform(promotion));
};
export const useBogoPromotion = function useBogoPromotion() {
  const obj = {};
  const items = [closure_5];
  obj.promotion = arg1(dependencyMap[4]).useStateFromStores(items, () => bogoPromotion.bogoPromotion);
  return obj;
};
export const useIsInPromotion = function useIsInPromotion(arg0) {
  const arg1 = arg0;
  const items = [closure_5];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => closure_5.hasPromotion(arg0));
};
export const useHasActiveBogoPromotion = function useHasActiveBogoPromotion() {
  const effect = React.useEffect(() => {
    const result = callback(closure_2[8]).maybeFetchActivePromotions();
  }, []);
  const items = [closure_5];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const marketingMomentPromotion = marketingMomentPromotion.getMarketingMomentPromotion();
    let hasBogoReward;
    if (null != marketingMomentPromotion) {
      hasBogoReward = marketingMomentPromotion.hasBogoReward;
    }
    return true === hasBogoReward;
  });
};
