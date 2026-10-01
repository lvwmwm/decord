// Module ID: 13096
// Function ID: 13097
// Name: PromotionsHooks
// Dependencies: [19, 1372, 10128, 1374, 504, 12962, 4488, 573, 12960, 2]
// Exports: useHasActiveBogoPromotion, useIsInPromotion, useOutboundPromotions, useUnseenOutboundPromotions

// Module 13096 (PromotionsHooks)
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PromotionUtils from "PromotionUtils" /* 12962 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import PromotionsStore from "PromotionsStore" /* 10128 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, promotion, set;

function useEligibleActiveOutboundPromotions(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.includeClaimedPromotions;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  const items = [PromotionsStore];
  const obj2 = flag(stateFromStores[4]);
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => PromotionsStore.outboundPromotions);
  let obj3 = flag(stateFromStores[4]);
  const items1 = [PromotionsStore];
  stateFromStores = obj3.useStateFromStores(items1, () => PromotionsStore.consumedInboundPromotionId);
  const items2 = [PromotionsStore];
  const obj4 = flag(stateFromStores[4]);
  const stateFromStores1 = obj4.useStateFromStores(items2, () => PromotionsStore.claimedOutboundPromotionCodes);
  const items3 = [stateFromStoresArray, stateFromStores, stateFromStores1, flag];
  return stateFromStores1.useMemo(function() {
    set = null;
    if (set) {
      let tmp2 = globalThis;
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(stateFromStores1.map((promotion) => promotion.promotion.id));
    }
    return stateFromStoresArray.filter((id) => {
      let tmp = id.id !== stateFromStores;
      if (tmp) {
        const obj = PromotionUtils;
        let result1 = obj.shouldShowOutboundPromotionOnPlatform(id);
        const tmp2 = require;
        if (result1) {
          const tmp2Result = tmp2(12962);
          const result = tmp2Result.isDedicatedSurfacePromotion(id);
          flag = !result;
          if (flag) {
            flag = true;
            const obj3 = set;
            if (set != null) {
              const hasItem = obj3.has(id.id);
              flag = true;
            }
          }
          result1 = flag;
        }
        tmp = result1;
      }
      return tmp;
    });
  }, items3);
}
const PremiumTypes = PremiumConstants.PremiumTypes;
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export { useEligibleActiveOutboundPromotions };
export const useOutboundPromotions = function useOutboundPromotions() {
  let activeOutboundPromotions;
  let currentUser;
  let stateFromStores;
  let stateFromStores2;
  let tmp = stateFromStores;
  let obj = stateFromStores(stateFromStores2[4]);
  const items = [PromotionsStore];
  stateFromStores = obj.useStateFromStores(items, () => PromotionsStore.lastFetchedActivePromotions);
  let obj2 = stateFromStores(stateFromStores2[4]);
  const items1 = [UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj3 = require("PremiumUtils");
  const isPremiumExactlyResult = obj3.isPremiumExactly(stateFromStores1, PremiumTypes.TIER_2);
  let obj4 = require("PremiumUtils");
  const isPremiumResult = obj4.isPremium(stateFromStores1);
  let tmp8 = !isPremiumResult;
  if (isPremiumResult) {
    tmp8 = isPremiumExactlyResult;
  }
  importDefault = tmp8;
  const items2 = [tmp3];
  const tmpResult = tmp(stateFromStores2[4]);
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => PromotionsStore.claimedOutboundPromotionCodes);
  const items3 = [tmp3];
  const tmpResult2 = tmp(stateFromStores2[4]);
  let promotionsLoaded = tmpResult2.useStateFromStores(items3, () => PromotionsStore.claimedOutboundPromotionCodesLoaded);
  const items4 = [stateFromStores];
  const effect = activeOutboundPromotions.useEffect(() => {
    if (null != stateFromStores) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = closure_1_1(stateFromStores2[8]);
        return obj.markOutboundPromotionsSeen();
      });
    }
  }, items4);
  const items5 = [stateFromStores, tmp8];
  const effect1 = activeOutboundPromotions.useEffect(() => {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const tmp = closure_1_1 && null == stateFromStores;
      if (tmp) {
        const obj = require("PromotionsActionCreators");
        const activePromotions = obj.fetchActivePromotions();
      }
    });
  }, items5);
  const effect2 = activeOutboundPromotions.useEffect(() => {
    let obj = require("Dispatcher");
    obj.wait(() => {
      const obj = closure_1_1(stateFromStores2[8]);
      const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
    });
  }, []);
  const items6 = [stateFromStores2];
  const claimedOutboundPromotionCodeMap = activeOutboundPromotions.useMemo(() => {
    const obj = PromotionUtils;
    return obj.getClaimedOutboundPromotionCodeMap(stateFromStores2);
  }, items6);
  activeOutboundPromotions = useEligibleActiveOutboundPromotions({ includeClaimedPromotions: true });
  const items7 = [activeOutboundPromotions, stateFromStores2];
  const claimedEndedOutboundPromotions = activeOutboundPromotions.useMemo(() => {
    set = new Set(activeOutboundPromotions.map((id) => id.id));
    return stateFromStores2.filter((promotion) => {
      promotion = promotion.promotion;
      const hasItem = set.has(promotion.id);
      let result = !hasItem;
      if (result) {
        const obj2 = { promotionType: promotion.promotionType };
        const obj = stateFromStores(stateFromStores2[5]);
        result = false === obj.isRecurringPromotion(obj2);
      }
      if (result) {
        const obj3 = stateFromStores(stateFromStores2[5]);
        result = !obj3.isDedicatedSurfacePromotion(promotion);
      }
      if (result) {
        const obj4 = stateFromStores(stateFromStores2[5]);
        result = obj4.shouldShowOutboundPromotionOnPlatform(promotion);
      }
      return result;
    });
  }, items7);
  if (promotionsLoaded) {
    let tmp17 = !tmp8;
    if (tmp8) {
      tmp17 = null != stateFromStores;
    }
    promotionsLoaded = tmp17;
  }
  return { promotionsLoaded, activeOutboundPromotions, claimedEndedOutboundPromotions, claimedOutboundPromotionCodeMap };
};
export const useUnseenOutboundPromotions = function useUnseenOutboundPromotions() {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [PromotionsStore];
  stateFromStores = obj.useStateFromStores(items, () => PromotionsStore.lastSeenOutboundPromotionStartDate);
  const tmp2 = useEligibleActiveOutboundPromotions();
  let closure_1 = tmp2;
  const items1 = [tmp2, stateFromStores];
  const memo = react.useMemo(() => {
    let found;
    if (null == stateFromStores) {
      found = closure_1;
    } else {
      found = closure_1.filter((startDate) => {
        const date = new Date(startDate.startDate);
        const date1 = new Date(stateFromStores);
        return date > date1;
      });
    }
    return found;
  }, items1);
  return memo.filter((item) => {
    const obj = stateFromStores(dependencyMap[5]);
    return obj.shouldShowOutboundPromotionOnPlatform(item);
  });
};
export const useIsInPromotion = function useIsInPromotion(arg0) {
  let closure_0;
  _require = arg0;
  const items = [PromotionsStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PromotionsStore.hasPromotion(closure_0));
};
export const useHasActiveBogoPromotion = function useHasActiveBogoPromotion() {
  const effect = react.useEffect(() => {
    const obj = require("PromotionsActionCreators");
    const result = obj.maybeFetchActivePromotions();
  }, []);
  let obj = get_initialized;
  const items = [PromotionsStore];
  return obj.useStateFromStores(items, () => PromotionsStore.hasActiveBogoRewardPromotion());
};
