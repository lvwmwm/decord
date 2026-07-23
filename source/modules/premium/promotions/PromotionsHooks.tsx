// Module ID: 12393
// Function ID: 96272
// Name: useEligibleActiveOutboundPromotions
// Dependencies: [31, 1849, 7130, 1851, 566, 7452, 3776, 686, 7450, 2]
// Exports: useBogoPromotion, useHasActiveBogoPromotion, useIsInPromotion, useOutboundPromotions, useUnseenOutboundPromotions

// Module 12393 (useEligibleActiveOutboundPromotions)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { PremiumTypes } from "GuildFeatures";

const require = arg1;
function useEligibleActiveOutboundPromotions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeClaimedPromotions;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStoresArray;
  let stateFromStores;
  let stateFromStores1;
  const items = [closure_5];
  stateFromStoresArray = flag(stateFromStores[4]).useStateFromStoresArray(items, () => outer1_5.outboundPromotions);
  let obj2 = flag(stateFromStores[4]);
  const items1 = [closure_5];
  stateFromStores = flag(stateFromStores[4]).useStateFromStores(items1, () => outer1_5.consumedInboundPromotionId);
  const obj3 = flag(stateFromStores[4]);
  const items2 = [closure_5];
  stateFromStores1 = flag(stateFromStores[4]).useStateFromStores(items2, () => outer1_5.claimedOutboundPromotionCodes);
  const items3 = [stateFromStoresArray, stateFromStores, stateFromStores1, flag];
  return stateFromStores1.useMemo(() => {
    let set = null;
    if (set) {
      const _Set = Set;
      set = new Set(stateFromStores1.map((promotion) => promotion.promotion.id));
    }
    return stateFromStoresArray.filter((id) => {
      let tmp = id.id !== outer1_2;
      if (tmp) {
        const tmp4 = !flag(stateFromStores[5]).shouldShowOutboundPromotionOnPlatform(id);
        let tmp5 = !tmp4;
        if (!tmp4) {
          flag = !flag(stateFromStores[5]).isLogitechPromotion(id);
          if (flag) {
            flag = true;
            if (null != set) {
              const hasItem = set.has(id.id);
              flag = true;
            }
          }
          tmp5 = flag;
          const obj2 = flag(stateFromStores[5]);
        }
        tmp = tmp5;
        const obj = flag(stateFromStores[5]);
      }
      return tmp;
    });
  }, items3);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export { useEligibleActiveOutboundPromotions };
export const useOutboundPromotions = function useOutboundPromotions() {
  let obj = stateFromStores(stateFromStores2[4]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => outer1_5.lastFetchedActivePromotions);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = stateFromStores(stateFromStores2[4]).useStateFromStores(items1, () => outer1_4.getCurrentUser());
  const obj2 = stateFromStores(stateFromStores2[4]);
  let obj3 = importDefault(stateFromStores2[6]);
  const isPremiumExactlyResult = importDefault(stateFromStores2[6]).isPremiumExactly(stateFromStores1, PremiumTypes.TIER_2);
  const tmp4 = !importDefault(stateFromStores2[6]).isPremium(stateFromStores1) || isPremiumExactlyResult;
  importDefault = tmp4;
  let obj4 = importDefault(stateFromStores2[6]);
  const items2 = [closure_5];
  stateFromStores2 = stateFromStores(stateFromStores2[4]).useStateFromStores(items2, () => outer1_5.claimedOutboundPromotionCodes);
  const obj5 = stateFromStores(stateFromStores2[4]);
  const items3 = [closure_5];
  let stateFromStores3 = stateFromStores(stateFromStores2[4]).useStateFromStores(items3, () => outer1_5.claimedOutboundPromotionCodesLoaded);
  const items4 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      tmp4(stateFromStores2[7]).wait(() => callback(stateFromStores2[8]).markOutboundPromotionsSeen());
      const obj = tmp4(stateFromStores2[7]);
    }
  }, items4);
  const items5 = [stateFromStores, tmp4];
  const effect1 = React.useEffect(() => {
    tmp4(stateFromStores2[7]).wait(() => {
      let tmp = outer1_1;
      if (outer1_1) {
        tmp = null == outer1_0;
      }
      if (tmp) {
        const activePromotions = callback(stateFromStores2[8]).fetchActivePromotions();
        const obj = callback(stateFromStores2[8]);
      }
    });
  }, items5);
  const effect2 = React.useEffect(() => {
    tmp4(stateFromStores2[7]).wait(() => {
      const claimedOutboundPromotionCodes = callback(stateFromStores2[8]).fetchClaimedOutboundPromotionCodes();
    });
  }, []);
  const items6 = [stateFromStores2];
  const memo = React.useMemo(() => stateFromStores(stateFromStores2[5]).getClaimedOutboundPromotionCodeMap(stateFromStores2), items6);
  const tmp11 = useEligibleActiveOutboundPromotions({ includeClaimedPromotions: true });
  React = tmp11;
  const items7 = [tmp11, stateFromStores2];
  obj = {};
  const memo1 = React.useMemo(() => {
    const set = new Set(tmp11.map((id) => id.id));
    return stateFromStores2.filter((promotion) => {
      promotion = promotion.promotion;
      let result = !set.has(promotion.id);
      if (result) {
        let obj = stateFromStores(stateFromStores2[5]);
        obj = { promotionType: promotion.promotionType };
        result = false === obj.isRecurringPromotion(obj);
      }
      if (result) {
        result = !stateFromStores(stateFromStores2[5]).isLogitechPromotion(promotion);
        const obj3 = stateFromStores(stateFromStores2[5]);
      }
      if (result) {
        result = stateFromStores(stateFromStores2[5]).shouldShowOutboundPromotionOnPlatform(promotion);
        const obj4 = stateFromStores(stateFromStores2[5]);
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
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_5.lastSeenOutboundPromotionStartDate);
  const tmp2 = useEligibleActiveOutboundPromotions();
  const importDefault = tmp2;
  const items1 = [tmp2, stateFromStores];
  const memo = React.useMemo(() => {
    if (null == stateFromStores) {
      let found = tmp2;
    } else {
      found = tmp2.filter((startDate) => {
        const date = new Date(startDate.startDate);
        return date > new Date(outer1_0);
      });
    }
    return found;
  }, items1);
  return memo.filter((promotion) => stateFromStores(outer1_2[5]).shouldShowOutboundPromotionOnPlatform(promotion));
};
export const useBogoPromotion = function useBogoPromotion() {
  const obj = {};
  const items = [closure_5];
  obj.promotion = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.bogoPromotion);
  return obj;
};
export const useIsInPromotion = function useIsInPromotion(arg0) {
  const _require = arg0;
  const items = [closure_5];
  return _require(566).useStateFromStores(items, () => outer1_5.hasPromotion(closure_0));
};
export const useHasActiveBogoPromotion = function useHasActiveBogoPromotion() {
  const effect = React.useEffect(() => {
    const result = outer1_0(outer1_2[8]).maybeFetchActivePromotions();
  }, []);
  const items = [closure_5];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const marketingMomentPromotion = outer1_5.getMarketingMomentPromotion();
    let hasBogoReward;
    if (null != marketingMomentPromotion) {
      hasBogoReward = marketingMomentPromotion.hasBogoReward;
    }
    return true === hasBogoReward;
  });
};
