// Module ID: 10996
// Function ID: 10997
// Name: PremiumGiftModal
// Dependencies: [32, 19, 1376, 21, 10997, 4790, 580, 558, 568, 504, 9086, 1119, 5871, 10998, 11376, 11379, 11407, 2582, 11364, 10995, 7461, 7441, 1259, 5845, 4993, 4463, 11160, 7278, 11529, 11033, 2]

// Module 10996 (PremiumGiftModal)
import nativeDefault from "native" /* 580 */;
import _modDef2582 from "module_2582" /* 2582 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import useInitialValueDefault from "useInitialValue" /* 5845 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7441 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10997 */;
import PremiumGiftPlanSelectDefault from "PremiumGiftPlanSelect" /* 10998 */;
import GiftBadgePostPurchaseDefault from "GiftBadgePostPurchase" /* 11364 */;
import GiftingSKUSelectScreenDefault from "GiftingSKUSelectScreen" /* 11376 */;
import PremiumGiftCustomizationDefault from "PremiumGiftCustomization" /* 11379 */;
import PremiumGiftSuccessDefault from "PremiumGiftSuccess" /* 11407 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const jsx = fn(21).jsx;
const PremiumGiftScreens = { PLAN_SELECT: "PremiumGiftPlanSelect", REWARD_SELECT: "GiftingSKUSelect", CUSTOMIZATION: "PremiumGiftCustomization", SUCCESS: "PremiumGiftSuccess", GIFTING_BADGE: "GiftingBadgePostPurchase" };
let obj2 = { [PLAN_SELECT]: fn(10997).PaymentFlowStep.SKU_SELECT, [REWARD_SELECT]: fn(10997).PaymentFlowStep.REWARD_SKU_SELECT, [CUSTOMIZATION]: fn(10997).PaymentFlowStep.PLAN_SELECT, [SUCCESS]: fn(10997).PaymentFlowStep.CONFIRM, [GIFTING_BADGE]: fn(10997).PaymentFlowStep.CONFIRM };
({ PLAN_SELECT, REWARD_SELECT, CUSTOMIZATION, SUCCESS, GIFTING_BADGE } = PremiumGiftScreens);
const createStyles = fn(4790);
let obj4 = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" } };
let closure_9 = createStyles.createStyles(obj4);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, pop, arg2) => {
  _require = arg2;
  const cResult = require("c").c(39);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg2) {
    class S {
      constructor() {
        user = null;
        if (null != closure_0) {
          tmp3 = closure_5;
          user = closure_5.getUser(tmp);
        }
        return user;
      }
    }
    cResult[1] = arg2;
    cResult[2] = S;
    const tmp7 = S;
  } else {
    class S {
      constructor() {
        user = null;
        if (null != closure_0) {
          tmp3 = closure_5;
          user = closure_5.getUser(tmp);
        }
        return user;
      }
    }
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
  const tmpResult = require("initialize");
  const fetchWishlistAndProfileInfoForUser = require("useWishlistHooks").useFetchWishlistAndProfileInfoForUser(arg2);
  ({ wishlist, userProfile, wishlistId, error } = fetchWishlistAndProfileInfoForUser);
  if (cResult[3] !== stateFromStores) {
    class S {
      constructor() {
        user = null;
        if (null != closure_0) {
          tmp3 = closure_5;
          user = closure_5.getUser(tmp);
        }
        return user;
      }
    }
    tmp11[1] = stateFromStores;
    cResult[3] = stateFromStores;
    cResult[4] = tmp11;
    const tmp10 = tmp11;
  } else {
    class S {
      constructor() {
        user = null;
        if (null != closure_0) {
          tmp3 = closure_5;
          user = closure_5.getUser(tmp);
        }
        return user;
      }
    }
  }
  const tmpResult4 = require("useWishlistHooks");
  let header = require("useWishlistHooks").useShouldShowWishlistInDMGifting(tmp10);
  let tmp12 = null != arg2 && !header && null == error;
  if (tmp12) {
    class S {
      constructor() {
        user = null;
        if (null != closure_0) {
          tmp3 = closure_5;
          user = closure_5.getUser(tmp);
        }
        return user;
      }
    }
    if (!tmp13) {
      class S {
        constructor() {
          user = null;
          if (null != closure_0) {
            tmp3 = closure_5;
            user = closure_5.getUser(tmp);
          }
          return user;
        }
      }
    }
    tmp12 = tmp13;
  }
  importDefault = tmp12;
  if (cResult[5] === tmp12) {
    class S {
      constructor() {
        user = null;
        if (null != closure_0) {
          tmp3 = closure_5;
          user = closure_5.getUser(tmp);
        }
        return user;
      }
    }
  }
  if (header) {
    class S {
      constructor() {
        user = null;
        if (null != closure_0) {
          tmp3 = closure_5;
          user = closure_5.getUser(tmp);
        }
        return user;
      }
    }
    const intl = tmp(1119).intl;
    tmp16[0] = intl.string(tmp(1119).t["JCFN/y"]);
    tmp16[1] = tmp(5871).getHeaderCloseButton(pop);
    tmp16[2] = tmp4.header;
    tmp16[3] = function render() {
      return jsx(isLoadingWishlist(10998), { shouldUseDMWishlistGiftingDesign: true, isLoadingWishlist: false });
    };
    const tmpResult6 = tmp(5871);
  } else {
    class S {
      constructor() {
        user = null;
        if (null != closure_0) {
          tmp3 = closure_5;
          user = closure_5.getUser(tmp);
        }
        return user;
      }
    }
    tmp15[2] = function render() {
      return jsx(PremiumGiftPlanSelectDefault, { shouldUseDMWishlistGiftingDesign: false, isLoadingWishlist });
    };
  }
  cResult[5] = tmp12;
  cResult[6] = pop;
  cResult[7] = header;
  header = tmp4.header;
  cResult[8] = header;
  cResult[9] = tmp15;
}) : ((arg0, pop, arg2) => {
  _require = arg2;
  const tmp = closure_9();
  const obj = require("initialize");
  let items = [shouldShowWishlistInDMGifting];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let user = null;
    if (null != closure_0) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
  const fetchWishlistAndProfileInfoForUser = require("useWishlistHooks").useFetchWishlistAndProfileInfoForUser(arg2);
  ({ wishlist: importDefault, userProfile: dependencyMap, wishlistId: _slicedToArray, error: noop } = fetchWishlistAndProfileInfoForUser);
  obj2 = require("useWishlistHooks");
  shouldShowWishlistInDMGifting = require("useWishlistHooks").useShouldShowWishlistInDMGifting({ isGift: true, giftRecipient: stateFromStores, isSocialLayerStorefrontEnabled: false });
  if (shouldShowWishlistInDMGifting) {
    const obj4 = { title: null, headerLeft: null, headerStyle: null, render: null };
    const intl = tmp2(1119).intl;
    obj4.title = intl.string(tmp2(1119).t["JCFN/y"]);
    obj4.headerLeft = tmp2(5871).getHeaderCloseButton(pop);
    obj4.headerStyle = tmp.header;
    obj4.render = function render() {
      return jsx(PremiumGiftPlanSelectDefault, { shouldUseDMWishlistGiftingDesign: true, isLoadingWishlist: false });
    };
    let obj5 = obj4;
    const tmp2Result = tmp2(5871);
  } else {
    obj5 = {
      title: "",
      headerShown: false,
      render() {
          let isLoadingWishlist = null != closure_0;
          if (isLoadingWishlist) {
            isLoadingWishlist = !shouldShowWishlistInDMGifting;
          }
          if (isLoadingWishlist) {
            isLoadingWishlist = null == noop;
          }
          if (isLoadingWishlist) {
            let tmp7 = null == dependencyMap;
            if (!tmp7) {
              let tmp9 = null != _slicedToArray;
              if (tmp9) {
                tmp9 = null == closure_1_1;
              }
              tmp7 = tmp9;
            }
            isLoadingWishlist = tmp7;
          }
          return jsx(PremiumGiftPlanSelectDefault, { shouldUseDMWishlistGiftingDesign: false, isLoadingWishlist });
        }
    };
  }
  const obj6 = {};
  obj6[obj.PLAN_SELECT] = obj5;
  if (arg0 === obj.REWARD_SELECT) {
    let headerCloseButton = tmp2(5871).getHeaderCloseButton(pop);
    const tmp2Result7 = tmp2(5871);
  } else {
    headerCloseButton = tmp2(5871).getHeaderBackButton();
    const tmp2Result8 = tmp2(5871);
  }
  obj6[obj.REWARD_SELECT] = {
    title: "",
    headerLeft: headerCloseButton,
    headerStyle: tmp.header,
    render(arg0) {
      ({ defaultHighlightedReward, allRewards, claimableRewards, onSelect } = arg0);
      return jsx(GiftingSKUSelectScreenDefault, { defaultHighlightedReward, allRewards, claimableRewards, onSelect });
    }
  };
  if (arg0 === obj.CUSTOMIZATION) {
    let headerCloseButton1 = tmp2(5871).getHeaderCloseButton(pop);
    const tmp2Result9 = tmp2(5871);
  } else {
    headerCloseButton1 = tmp2(5871).getHeaderBackButton();
    const tmp2Result10 = tmp2(5871);
  }
  obj6[obj.CUSTOMIZATION] = {
    title: "",
    headerLeft: headerCloseButton1,
    headerStyle: tmp.header,
    render() {
      return jsx(PremiumGiftCustomizationDefault, {});
    }
  };
  const obj7 = { title: "", headerLeft: null, headerStyle: null, render: null };
  const obj3 = require("useWishlistHooks");
  obj7.headerLeft = require("NavigatorHeader").getHeaderCloseButton(pop);
  obj7.headerStyle = tmp.header;
  obj7.render = function render() {
    return jsx(PremiumGiftSuccessDefault, {});
  };
  obj6[obj.SUCCESS] = obj7;
  const obj8 = { title: null, headerLeft: null, headerTransparent: true, headerStyle: null, render: null };
  const intl2 = tmp2(1119).intl;
  obj8.title = intl2.string(_modDef2582.roVAey);
  const tmp2Result11 = require("NavigatorHeader");
  obj8.headerLeft = require("NavigatorHeader").getHeaderCloseButton(pop);
  obj8.headerStyle = { backgroundColor: "transparent", shadowColor: "transparent" };
  obj8.render = function render(currentProgress) {
    return jsx(GiftBadgePostPurchaseDefault, {
      currentProgress: currentProgress.currentProgress,
      onSendGift() {
        obj2 = { analyticsLocations: null };
        const items = [closure_1_1(7461).GIFTING_BADGE_POST_PURCHASE];
        obj2.analyticsLocations = items;
        closure_1_0(10995).openGiftModal(obj2);
      }
    });
  };
  obj6[obj.GIFTING_BADGE] = obj8;
  return obj6;
});
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, shadowColor: "transparent" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = onDismiss(568).c(26);
  ({ recipientUserId, premiumType, planInterval, analyticsLocation, analyticsLocations, initialRoute, order, onDismiss } = arg0);
  const analyticsLocations2 = useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return onDismiss(dependencyMap[22]).v4();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = useInitialValueDefault(first);
  if (cResult[1] === tmp6) {
    if (cResult[2] === analyticsLocation) {
      if (cResult[3] === analyticsLocations) {
        let tmp7 = cResult[4];
      }
      if (initialRoute != null) {
        if (cResult[5] !== onDismiss) {
          class P {
            constructor() {
              arr = closure_1(closure_2[24]);
              arr1 = arr.pop();
              if (onDismiss != null) {
                tmp2 = onDismiss();
              }
              return;
            }
          }
          cResult[5] = onDismiss;
          cResult[6] = P;
        } else {
          class P {
            constructor() {
              arr = closure_1(closure_2[24]);
              arr1 = arr.pop();
              if (onDismiss != null) {
                tmp2 = onDismiss();
              }
              return;
            }
          }
        }
        const tmp14 = closure_10(initialRoute, tmp12, recipientUserId);
        [tmp19, tmp20] = noop.useState(obj2[initialRoute]);
        importDefault = tmp20;
        const tmp18 = _slicedToArray(noop.useState(obj2[initialRoute]), 2);
        if (tmpResult.isPremiumGiftingSupported()) {
          class P {
            constructor() {
              arr = closure_1(closure_2[24]);
              arr1 = arr.pop();
              if (onDismiss != null) {
                tmp2 = onDismiss();
              }
              return;
            }
          }
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor() {
                arr = closure_1(closure_2[24]);
                arr1 = arr.pop();
                if (onDismiss != null) {
                  tmp2 = onDismiss();
                }
                return;
              }
            }
            cResult[8] = tmp25;
            const tmp24 = tmp25;
          } else {
            class P {
              constructor() {
                arr = closure_1(closure_2[24]);
                arr1 = arr.pop();
                if (onDismiss != null) {
                  tmp2 = onDismiss();
                }
                return;
              }
            }
          }
          if (cResult[9] === initialRoute) {
            class P {
              constructor() {
                arr = closure_1(closure_2[24]);
                arr1 = arr.pop();
                if (onDismiss != null) {
                  tmp2 = onDismiss();
                }
                return;
              }
            }
            if (cResult[12] === tmp19) {
              class P {
                constructor() {
                  arr = closure_1(closure_2[24]);
                  arr1 = arr.pop();
                  if (onDismiss != null) {
                    tmp2 = onDismiss();
                  }
                  return;
                }
              }
              if (cResult[15] === tmp7) {
                class P {
                  constructor() {
                    arr = closure_1(closure_2[24]);
                    arr1 = arr.pop();
                    if (onDismiss != null) {
                      tmp2 = onDismiss();
                    }
                    return;
                  }
                }
              }
              obj2 = { basePurchaseAnalytics: tmp7, recipientUserId, onClose: tmp12, setCurrentAnalyticsStep: tmp20, premiumType, planInterval, initialOrder: order, children: tmp29 };
              const tmp34 = jsx(tmp(11033).NativeGiftContextProvider, { basePurchaseAnalytics: tmp7, recipientUserId, onClose: tmp12, setCurrentAnalyticsStep: tmp20, premiumType, planInterval, initialOrder: order, children: tmp29 });
              cResult[15] = tmp7;
              cResult[16] = tmp12;
              cResult[17] = order;
              cResult[18] = planInterval;
              cResult[19] = premiumType;
              cResult[20] = recipientUserId;
              cResult[21] = tmp29;
              cResult[22] = tmp34;
            }
            const obj3 = { currentStep: tmp19, children: tmp26 };
            const tmp31 = jsx(tmp4(11529), { currentStep: tmp19, children: tmp26 });
            cResult[12] = tmp19;
            cResult[13] = tmp26;
            cResult[14] = tmp31;
          }
          const obj4 = { initialRouteName: initialRoute, screens: tmp14, onStateChange: tmp24 };
          const tmp28 = jsx(tmp(7278).Navigator, { initialRouteName: initialRoute, screens: tmp14, onStateChange: tmp24 });
          cResult[9] = initialRoute;
          cResult[10] = tmp14;
          cResult[11] = tmp28;
        } else {
          class P {
            constructor() {
              arr = closure_1(closure_2[24]);
              arr1 = arr.pop();
              if (onDismiss != null) {
                tmp2 = onDismiss();
              }
              return;
            }
          }
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor() {
                arr = closure_1(closure_2[24]);
                arr1 = arr.pop();
                if (onDismiss != null) {
                  tmp2 = onDismiss();
                }
                return;
              }
            }
            const obj5 = { title: null };
            const intl = tmp(1119).intl;
            obj5.title = intl.string(tmp(1119).t["JCFN/y"]);
            const tmp23 = jsx(tmp4(11160), { title: null });
            cResult[7] = tmp23;
            const tmp21 = tmp23;
            const tmp4Result = tmp4(11160);
          } else {
            class P {
              constructor() {
                arr = closure_1(closure_2[24]);
                arr1 = arr.pop();
                if (onDismiss != null) {
                  tmp2 = onDismiss();
                }
                return;
              }
            }
          }
          return tmp21;
        }
        tmpResult = tmp(4463);
      } else {
        class P {
          constructor() {
            arr = closure_1(closure_2[24]);
            arr1 = arr.pop();
            if (onDismiss != null) {
              tmp2 = onDismiss();
            }
            return;
          }
        }
      }
    }
  }
  const obj = onDismiss(568);
  const basePurchaseFlowAnalyticsFields = onDismiss(10997).getBasePurchaseFlowAnalyticsFields({ isGift: true, analyticsLoadId: tmp6, analyticsLocation, analyticsLocations });
  cResult[1] = tmp6;
  cResult[2] = analyticsLocation;
  cResult[3] = analyticsLocations;
  cResult[4] = basePurchaseFlowAnalyticsFields;
  tmp7 = basePurchaseFlowAnalyticsFields;
}) : ((analyticsLocations) => {
  ({ recipientUserId, premiumType, analyticsLocation } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  ({ initialRoute, onDismiss } = analyticsLocations);
  closure_4 = undefined;
  ({ planInterval, order } = analyticsLocations);
  const tmp3 = analyticsLocations(onDismiss[23])(() => analyticsLocation(onDismiss[22]).v4());
  _slicedToArray = tmp3;
  const items = [tmp3, analyticsLocation, analyticsLocations];
  if (initialRoute != null) {
    const items1 = [onDismiss];
    const callback = obj.useCallback(() => {
      ModalActionCreatorsDefault.pop();
      if (onDismiss != null) {
        onDismiss();
      }
    }, items1);
    const tmp13 = _slicedToArray(obj.useState(obj2[initialRoute]), 2);
    closure_4 = tmp14;
    obj2 = analyticsLocation(tmp2[25]);
    if (obj2.isPremiumGiftingSupported()) {
      const obj3 = { value: analyticsLocations(onDismiss[21])(analyticsLocations).analyticsLocations, children: null };
      const obj4 = { basePurchaseAnalytics: tmp4, recipientUserId, onClose: callback, setCurrentAnalyticsStep: tmp14, premiumType, planInterval, initialOrder: order, children: null };
      const obj5 = { currentStep: tmp13[0], children: null };
      const obj6 = {
        initialRouteName: initialRoute,
        screens: tmp10,
        onStateChange(arg0) {
              if (null != arg0) {
                closure_4(obj2[arg0.routes[arg0.index].name]);
              }
            }
      };
      obj5.children = tmp16(tmp15(tmp2[27]).Navigator, obj6);
      obj4.children = tmp16(tmp(tmp2[28]), obj5);
      obj3.children = tmp16(tmp15(tmp2[29]).NativeGiftContextProvider, obj4);
      let tmp16Result = tmp16(tmp15(tmp2[21]).AnalyticsLocationProvider, obj3);
      const tmpResult = tmp(tmp2[28]);
    } else {
      const obj7 = { title: null };
      const intl = tmp15(tmp2[11]).intl;
      obj7.title = intl.string(tmp15(tmp2[11]).t["JCFN/y"]);
      tmp16Result = tmp16(tmp(tmp2[26]), obj7);
      const tmpResult2 = tmp(tmp2[26]);
    }
    return tmp16Result;
  } else if (null != premiumType) {
    let PLAN_SELECT = obj.CUSTOMIZATION;
  } else {
    PLAN_SELECT = obj.PLAN_SELECT;
  }
});
export { PremiumGiftScreens };
