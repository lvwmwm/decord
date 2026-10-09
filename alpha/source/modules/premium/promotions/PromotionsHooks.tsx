// Module ID: 9100
// Function ID: 9101
// Name: PromotionsHooks
// Dependencies: [19, 1390, 9101, 1392, 558, 576, 504, 9135, 4728, 584, 9136, 2]

// Module 9100 (PromotionsHooks)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import PromotionUtils from "PromotionUtils" /* 9135 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import PromotionsStore from "PromotionsStore" /* 9101 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, set, waitResult;

let tmp;
const get_initialized = tmp(504);
const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEligibleActiveOutboundPromotions(arg0) {
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmp = stateFromStores;
  let tmp2 = dependencyMap;
  let obj = stateFromStores(576);
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const includeClaimedPromotions = tmp4.includeClaimedPromotions;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    const fn = function c() {
      return PromotionsStore.outboundPromotions;
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    const fn2 = function f() {
      return PromotionsStore.consumedInboundPromotionId;
    };
    cResult[4] = items1;
    cResult[5] = fn2;
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult3 = tmp(504);
  stateFromStores = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PromotionsStore];
    const fn3 = function h() {
      return PromotionsStore.claimedOutboundPromotionCodes;
    };
    cResult[6] = items2;
    cResult[7] = fn3;
    tmp14 = fn3;
    tmp13 = items2;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp13, tmp14);
  if (cResult[8] === stateFromStores1) {
    if (cResult[9] === stateFromStores) {
      if (cResult[10] === (undefined !== includeClaimedPromotions && includeClaimedPromotions)) {
        let tmp16;
        if (cResult[11] === stateFromStoresArray) {
          tmp16 = cResult[12];
        }
        return tmp16;
      }
    }
  }
  set = null;
  if (undefined !== includeClaimedPromotions && includeClaimedPromotions) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set(stateFromStores1.map((promotion) => promotion.promotion.id));
  }
  const found = stateFromStoresArray.filter((id) => {
    let tmp = id.id !== stateFromStores;
    if (tmp) {
      const obj = PromotionUtils;
      let result1 = obj.shouldShowOutboundPromotionOnPlatform(id);
      const tmp2 = require;
      if (result1) {
        const tmp2Result = tmp2(9135);
        const result = tmp2Result.isDedicatedSurfacePromotion(id);
        let flag = !result;
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
  cResult[8] = stateFromStores1;
  cResult[9] = stateFromStores;
  cResult[10] = undefined !== includeClaimedPromotions && includeClaimedPromotions;
  cResult[11] = stateFromStoresArray;
  cResult[12] = found;
  tmp16 = found;
}) : (function useEligibleActiveOutboundPromotions() {
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
  const obj2 = flag(stateFromStores[6]);
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => PromotionsStore.outboundPromotions);
  let obj3 = flag(stateFromStores[6]);
  const items1 = [PromotionsStore];
  stateFromStores = obj3.useStateFromStores(items1, () => PromotionsStore.consumedInboundPromotionId);
  const items2 = [PromotionsStore];
  const obj4 = flag(stateFromStores[6]);
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
          const tmp2Result = tmp2(9135);
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
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOutboundPromotions() {
  let closure_1;
  let currentUser;
  let stateFromStores;
  let tmp12;
  let tmp30;
  let tmp31;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = stateFromStores;
  let obj = stateFromStores(set[5]);
  const cResult = obj.c(38);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    const fn = function l() {
      return PromotionsStore.lastFetchedActivePromotions;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(set[6]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function f() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult4 = tmp(set[6]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== stateFromStores1) {
    let obj4 = require("PremiumUtils");
    const isPremiumExactlyResult = obj4.isPremiumExactly(stateFromStores1, PremiumTypes.TIER_2);
    cResult[4] = stateFromStores1;
    cResult[5] = isPremiumExactlyResult;
    tmp12 = isPremiumExactlyResult;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === stateFromStores1) {
    let tmp16;
    let tmp20;
    let tmp19;
    let tmp24;
    let tmp23;
    let tmp28;
    let tmp27;
    if (cResult[7] === tmp12) {
      tmp16 = cResult[8];
    }
    importDefault = tmp16;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [PromotionsStore];
      const fn3 = function y() {
        return PromotionsStore.claimedOutboundPromotionCodes;
      };
      cResult[9] = items2;
      cResult[10] = fn3;
      tmp20 = fn3;
      tmp19 = items2;
    } else {
      tmp19 = cResult[9];
      tmp20 = cResult[10];
    }
    const tmpResult5 = tmp(set[6]);
    const stateFromStores2 = tmpResult5.useStateFromStores(tmp19, tmp20);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const items3 = [PromotionsStore];
      const fn4 = function w() {
        return PromotionsStore.claimedOutboundPromotionCodesLoaded;
      };
      cResult[11] = items3;
      cResult[12] = fn4;
      tmp24 = fn4;
      tmp23 = items3;
    } else {
      tmp23 = cResult[11];
      tmp24 = cResult[12];
    }
    const tmpResult6 = tmp(set[6]);
    let stateFromStores3 = tmpResult6.useStateFromStores(tmp23, tmp24);
    if (cResult[13] !== stateFromStores) {
      class A {
        constructor() {
          if (null != closure_0) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              return obj.markOutboundPromotionsSeen();
            });
          }
          return;
        }
      }
      const items4 = [stateFromStores];
      cResult[13] = stateFromStores;
      cResult[14] = A;
      cResult[15] = items4;
      tmp28 = items4;
      tmp27 = A;
    } else {
      class A {
        constructor() {
          if (null != closure_0) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              return obj.markOutboundPromotionsSeen();
            });
          }
          return;
        }
      }
      tmp28 = cResult[15];
    }
    const effect = react.useEffect(tmp27, tmp28);
    if (cResult[16] === stateFromStores) {
      let tmp34;
      let tmp33;
      let tmp38;
      class A {
        constructor() {
          if (null != closure_0) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              return obj.markOutboundPromotionsSeen();
            });
          }
          return;
        }
      }
      const effect1 = obj8.useEffect(tmp30, tmp31);
      const _Symbol3 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        const items5 = [];
        cResult[20] = M;
        cResult[21] = items5;
        tmp34 = items5;
        tmp33 = M;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        tmp34 = cResult[21];
      }
      const effect2 = obj8.useEffect(tmp33, tmp34);
      if (cResult[22] !== stateFromStores2) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        const claimedOutboundPromotionCodeMap = obj9.getClaimedOutboundPromotionCodeMap(stateFromStores2);
        cResult[22] = stateFromStores2;
        cResult[23] = claimedOutboundPromotionCodeMap;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        cResult[24] = tmp39;
        tmp38 = tmp39;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
      }
      const arr8 = closure_7(tmp38);
      if (cResult[25] !== arr8) {
        let tmp42;
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const obj = closure_1_1(set[10]);
                const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
          cResult[27] = tmp43;
          tmp42 = tmp43;
        } else {
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const obj = closure_1_1(set[10]);
                const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
        }
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set(arr8.map(tmp42));
        cResult[25] = arr8;
        cResult[26] = set;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
      }
      set = tmp41;
      if (cResult[28] === tmp41) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        if (stateFromStores3) {
          let tmp50;
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const obj = closure_1_1(set[10]);
                const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
          if (tmp16) {
            class M {
              constructor() {
                obj = closure_1(closure_2[9]);
                waitResult = obj.wait(() => {
                  const obj = closure_1_1(set[10]);
                  const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
                });
                return;
              }
            }
            tmp50 = null != stateFromStores;
          }
          stateFromStores3 = tmp50;
        }
        if (cResult[33] === arr8) {
          class M {
            constructor() {
              obj = closure_1(closure_2[9]);
              waitResult = obj.wait(() => {
                const obj = closure_1_1(set[10]);
                const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
              });
              return;
            }
          }
        }
        let obj2 = { promotionsLoaded: stateFromStores3, activeOutboundPromotions: arr8, claimedEndedOutboundPromotions: tmp46, claimedOutboundPromotionCodeMap: tmp36 };
        cResult[33] = arr8;
        cResult[34] = tmp46;
        cResult[35] = tmp36;
        cResult[36] = stateFromStores3;
        class D {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const tmp = closure_1_1 && null == stateFromStores;
              if (tmp) {
                const obj = closure_1(set[10]);
                const activePromotions = obj.fetchActivePromotions();
              }
            });
            return;
          }
        }
        cResult[37] = obj2;
      }
      if (cResult[31] !== tmp41) {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
        cResult[31] = tmp41;
        cResult[32] = tmp48;
      } else {
        class M {
          constructor() {
            obj = closure_1(closure_2[9]);
            waitResult = obj.wait(() => {
              const obj = closure_1_1(set[10]);
              const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
            });
            return;
          }
        }
      }
      class D {
        constructor() {
          obj = closure_1(closure_2[9]);
          waitResult = obj.wait(() => {
            const tmp = closure_1_1 && null == stateFromStores;
            if (tmp) {
              const obj = closure_1(set[10]);
              const activePromotions = obj.fetchActivePromotions();
            }
          });
          return;
        }
      }
      cResult[28] = tmp41;
      cResult[29] = stateFromStores2;
      cResult[30] = tmp49;
    }
    class D {
      constructor() {
        obj = closure_1(closure_2[9]);
        waitResult = obj.wait(() => {
          const tmp = closure_1_1 && null == stateFromStores;
          if (tmp) {
            const obj = closure_1(set[10]);
            const activePromotions = obj.fetchActivePromotions();
          }
        });
        return;
      }
    }
    const items6 = [stateFromStores, tmp16];
    cResult[16] = stateFromStores;
    cResult[17] = tmp16;
    cResult[18] = D;
    cResult[19] = items6;
    tmp30 = D;
    tmp31 = items6;
  }
  const obj5 = require("PremiumUtils");
  const isPremiumResult = obj5.isPremium(stateFromStores1);
  if (isPremiumResult) {
    class M {
      constructor() {
        obj = closure_1(closure_2[9]);
        waitResult = obj.wait(() => {
          const obj = closure_1_1(set[10]);
          const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
        });
        return;
      }
    }
  }
  cResult[6] = stateFromStores1;
  cResult[7] = tmp12;
  cResult[8] = !isPremiumResult;
  tmp16 = tmp18;
}) : (function useOutboundPromotions() {
  let activeOutboundPromotions;
  let currentUser;
  let stateFromStores;
  let stateFromStores2;
  let tmp = stateFromStores;
  let obj = stateFromStores(stateFromStores2[6]);
  const items = [PromotionsStore];
  stateFromStores = obj.useStateFromStores(items, () => PromotionsStore.lastFetchedActivePromotions);
  let obj2 = stateFromStores(stateFromStores2[6]);
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
  const tmpResult = tmp(stateFromStores2[6]);
  stateFromStores2 = tmpResult.useStateFromStores(items2, () => PromotionsStore.claimedOutboundPromotionCodes);
  const items3 = [tmp3];
  const tmpResult2 = tmp(stateFromStores2[6]);
  let promotionsLoaded = tmpResult2.useStateFromStores(items3, () => PromotionsStore.claimedOutboundPromotionCodesLoaded);
  const items4 = [stateFromStores];
  const effect = activeOutboundPromotions.useEffect(() => {
    if (null != stateFromStores) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = closure_1_1(stateFromStores2[10]);
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
      const obj = closure_1_1(stateFromStores2[10]);
      const claimedOutboundPromotionCodes = obj.fetchClaimedOutboundPromotionCodes();
    });
  }, []);
  const items6 = [stateFromStores2];
  const claimedOutboundPromotionCodeMap = activeOutboundPromotions.useMemo(() => {
    const obj = PromotionUtils;
    return obj.getClaimedOutboundPromotionCodeMap(stateFromStores2);
  }, items6);
  activeOutboundPromotions = closure_7({ includeClaimedPromotions: true });
  const items7 = [activeOutboundPromotions, stateFromStores2];
  const claimedEndedOutboundPromotions = activeOutboundPromotions.useMemo(() => {
    set = new Set(activeOutboundPromotions.map((id) => id.id));
    return stateFromStores2.filter((promotion) => {
      promotion = promotion.promotion;
      const hasItem = set.has(promotion.id);
      let result = !hasItem;
      if (result) {
        const obj2 = { promotionType: promotion.promotionType };
        const obj = stateFromStores(stateFromStores2[7]);
        result = false === obj.isRecurringPromotion(obj2);
      }
      if (result) {
        const obj3 = stateFromStores(stateFromStores2[7]);
        result = !obj3.isDedicatedSurfacePromotion(promotion);
      }
      if (result) {
        const obj4 = stateFromStores(stateFromStores2[7]);
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUnseenOutboundPromotions() {
  let stateFromStores;
  let tmp11;
  let tmp4;
  let tmp5;
  let obj = stateFromStores(576);
  const cResult = obj.c(10);
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    const fn = function t() {
      return PromotionsStore.lastSeenOutboundPromotionStartDate;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const arr2 = closure_7();
  let arr3 = arr2;
  if (null != stateFromStores) {
    let tmp9;
    if (cResult[2] === arr2) {
      let tmp8;
      if (cResult[3] === stateFromStores) {
        tmp8 = cResult[4];
      }
      arr3 = tmp8;
    }
    if (cResult[5] !== stateFromStores) {
      const fn2 = function f(startDate) {
        const date = new Date(startDate.startDate);
        const date1 = new Date(stateFromStores);
        return date > date1;
      };
      cResult[5] = stateFromStores;
      cResult[6] = fn2;
      tmp9 = fn2;
    } else {
      tmp9 = cResult[6];
    }
    const found = arr2.filter(tmp9);
    cResult[2] = arr2;
    cResult[3] = stateFromStores;
    cResult[4] = found;
    tmp8 = found;
  }
  if (cResult[7] !== arr3) {
    let tmp12;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function v(promotion) {
        const obj = stateFromStores(dependencyMap[7]);
        return obj.shouldShowOutboundPromotionOnPlatform(promotion);
      };
      cResult[9] = fn3;
      tmp12 = fn3;
    } else {
      tmp12 = cResult[9];
    }
    const found1 = arr3.filter(tmp12);
    cResult[7] = arr3;
    cResult[8] = found1;
    tmp11 = found1;
  } else {
    tmp11 = cResult[8];
  }
  return tmp11;
}) : (function useUnseenOutboundPromotions() {
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [PromotionsStore];
  stateFromStores = obj.useStateFromStores(items, () => PromotionsStore.lastSeenOutboundPromotionStartDate);
  const tmp2 = closure_7();
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
    const obj = stateFromStores(dependencyMap[7]);
    return obj.shouldShowOutboundPromotionOnPlatform(item);
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsInPromotion(arg0) {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PromotionsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return PromotionsStore.hasPromotion(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : (function useIsInPromotion(arg0) {
  let closure_0;
  _require = arg0;
  const items = [PromotionsStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PromotionsStore.hasPromotion(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasActiveBogoPromotion() {
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = require("PromotionsActionCreators");
      const result = obj.maybeFetchActivePromotions();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PromotionsStore];
    const fn2 = function c() {
      return PromotionsStore.hasActiveBogoRewardPromotion();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp8 = fn2;
    tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp7, tmp8);
}) : (function useHasActiveBogoPromotion() {
  const effect = react.useEffect(() => {
    const obj = require("PromotionsActionCreators");
    const result = obj.maybeFetchActivePromotions();
  }, []);
  let obj = get_initialized;
  const items = [PromotionsStore];
  return obj.useStateFromStores(items, () => PromotionsStore.hasActiveBogoRewardPromotion());
});
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsHooks.tsx");

export const useEligibleActiveOutboundPromotions = tmp2;
export const useOutboundPromotions = tmp3;
export const useUnseenOutboundPromotions = tmp4;
export const useIsInPromotion = tmp5;
export const useHasActiveBogoPromotion = tmp6;
