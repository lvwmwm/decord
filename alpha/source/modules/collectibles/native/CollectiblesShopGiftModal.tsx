// Module ID: 12656
// Function ID: 12657
// Name: CollectiblesShopGiftModal
// Dependencies: [19, 7257, 1085, 1096, 21, 558, 576, 9370, 1382, 4741, 12657, 12655, 12658, 12661, 10153, 10146, 10133, 10066, 8305, 8292, 504, 6872, 6848, 2031, 7256, 1126, 10149, 2]

// Module 12656 (CollectiblesShopGiftModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import StringUtils from "StringUtils" /* 2031 */;
import BadgeId from "BadgeId" /* 8292 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8305 */;
import openGiftModal from "openGiftModal" /* 12655 */;
import CollectiblesShopCheckoutDetailsDefault from "CollectiblesShopCheckoutDetails" /* 12658 */;
import CollectiblesShopGiftPurchaseSectionDefault from "CollectiblesShopGiftPurchaseSection" /* 12661 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7257 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _Promise, dependencyMap, flag, resolved;

let tmp;
const CollectiblesActionCreators = tmp(7256);
const application_id = Constants.COLLECTIBLES_APPLICATION_ID;
const PaymentGateways = Constants2.PaymentGateways;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesShopGiftModalContent(product) {
  let GOOGLE;
  let analyticsLocations;
  let first;
  let giftingOrigin;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let require;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(33);
  product = product.product;
  require = product;
  ({ analyticsLocations, lockedRecipientUser, onGiftModalDismiss } = product);
  giftingOrigin = product.giftingOrigin;
  const validateRecipient = product.validateRecipient;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesShopGiftModal" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const GiftACOMOrderExperiment = tmp(tmp2[7]).GiftACOMOrderExperiment;
  const enabled = GiftACOMOrderExperiment.useConfig(first).enabled;
  const tmpResult = require("PlatformUtils");
  if (tmpResult.isIOS()) {
    GOOGLE = tmp5.APPLE_ADVANCED_COMMERCE;
    tmp6 = tmp5;
  } else {
    GOOGLE = tmp5.GOOGLE;
    tmp6 = tmp5;
  }
  if (cResult[1] !== enabled) {
    let tmp8 = GOOGLE === tmp6.APPLE_ADVANCED_COMMERCE && enabled;
    if (!tmp8) {
      let result = GOOGLE === tmp6.GOOGLE;
      if (result) {
        const tmpResult2 = require("BillingPlatformUtils");
        result = tmpResult2.isGooglePlayBillingSupported();
      }
      tmp8 = result;
    }
    cResult[1] = enabled;
    cResult[2] = tmp8;
  }
  onGiftModalDismiss(giftingOrigin[10])(product);
  const tmp10 = onGiftModalDismiss;
  if (cResult[3] !== onGiftModalDismiss) {
    const fn = function _() {
      const obj = openGiftModal;
      obj.closeShopGiftModal();
      if (onGiftModalDismiss != null) {
        onGiftModalDismiss();
      }
    };
    cResult[3] = onGiftModalDismiss;
    cResult[4] = fn;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[5] = items;
  }
  if (cResult[6] !== product.skuId) {
    const items1 = [product.skuId];
    cResult[6] = product.skuId;
    cResult[7] = items1;
  }
  if (cResult[8] === analyticsLocations) {
    if (cResult[11] !== product) {
      class L {
        constructor(arg0) {
          let isValidRecipient;
          let recipientUser;
          ({ recipientUser, isValidRecipient } = arg0);
          return jsx(CollectiblesShopCheckoutDetailsDefault, { product: require, recipientUser, isValidRecipient, isGift: true });
        }
      }
      cResult[11] = product;
      cResult[12] = L;
    } else {
      class L {
        constructor(arg0) {
          let isValidRecipient;
          let recipientUser;
          ({ recipientUser, isValidRecipient } = arg0);
          return jsx(CollectiblesShopCheckoutDetailsDefault, { product: require, recipientUser, isValidRecipient, isGift: true });
        }
      }
    }
    if (cResult[13] === giftingOrigin) {
      class L {
        constructor(arg0) {
          let isValidRecipient;
          let recipientUser;
          ({ recipientUser, isValidRecipient } = arg0);
          return jsx(CollectiblesShopCheckoutDetailsDefault, { product: require, recipientUser, isValidRecipient, isGift: true });
        }
      }
      if (cResult[16] === analyticsLocations) {
        class L {
          constructor(arg0) {
            let isValidRecipient;
            let recipientUser;
            ({ recipientUser, isValidRecipient } = arg0);
            return jsx(CollectiblesShopCheckoutDetailsDefault, { product: require, recipientUser, isValidRecipient, isGift: true });
          }
        }
      }
      cResult[16] = analyticsLocations;
      cResult[17] = giftingOrigin;
      cResult[18] = lockedRecipientUser;
      cResult[19] = onGiftModalDismiss;
      cResult[20] = product.skuId;
      cResult[21] = tmp16;
      cResult[22] = tmp17;
      cResult[23] = validateRecipient;
      cResult[24] = jsx(tmp10(giftingOrigin[14]), { skuId: product.skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin, validateRecipient, renderProductDetails: tmp16, renderPurchaseSection: tmp17 });
      const tmp20 = jsx(tmp10(giftingOrigin[14]), { skuId: product.skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin, validateRecipient, renderProductDetails: tmp16, renderPurchaseSection: tmp17 });
    }
    const fn2 = function h(arg0) {
      let giftOptions;
      let isPurchaseDisabled;
      ({ isPurchaseDisabled, giftOptions } = arg0);
      return jsx(CollectiblesShopGiftPurchaseSectionDefault, { product: require, isPurchaseDisabled, giftOptions, giftingOrigin });
    };
    cResult[13] = giftingOrigin;
    cResult[14] = product;
    cResult[15] = fn2;
  }
  const obj4 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  cResult[8] = analyticsLocations;
  cResult[9] = product.skuId;
  cResult[10] = obj4;
}) : (function CollectiblesShopGiftModalContent(product) {
  let GOOGLE;
  let analyticsLocations;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let tmp4;
  let validateRecipient;
  product = product.product;
  const require = product;
  ({ analyticsLocations, onGiftModalDismiss } = product);
  const giftingOrigin = product.giftingOrigin;
  ({ lockedRecipientUser, validateRecipient } = product);
  const GiftACOMOrderExperiment = require("ACOMExperiments").GiftACOMOrderExperiment;
  const enabled = GiftACOMOrderExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  let obj = require("PlatformUtils");
  if (obj.isIOS()) {
    GOOGLE = tmp3.APPLE_ADVANCED_COMMERCE;
    tmp4 = tmp3;
  } else {
    GOOGLE = tmp3.GOOGLE;
    tmp4 = tmp3;
  }
  let tmp5 = GOOGLE === tmp4.APPLE_ADVANCED_COMMERCE && enabled;
  if (!tmp5) {
    let result = GOOGLE === tmp4.GOOGLE;
    if (result) {
      const tmpResult = require("BillingPlatformUtils");
      result = tmpResult.isGooglePlayBillingSupported();
    }
    tmp5 = result;
  }
  const items = [onGiftModalDismiss];
  const tmp7 = onGiftModalDismiss(giftingOrigin[10])(product);
  const callback = react.useCallback(() => {
    const obj = openGiftModal;
    obj.closeShopGiftModal();
    if (onGiftModalDismiss != null) {
      onGiftModalDismiss();
    }
  }, items);
  const NativePaymentContextProvider = tmp(tmp2[15]).NativePaymentContextProvider;
  const items1 = [product.skuId];
  const obj4 = { is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: product.skuId, application_id };
  onGiftModalDismiss(giftingOrigin[16]);
  return <NativePaymentContextProvider skuIDs={[]} activeSubscription={null}>{null}</NativePaymentContextProvider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesShopGiftModal(skuId) {
  let analyticsLocations;
  let c2;
  let first;
  let giftingOrigin;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmp3 = dependencyMap;
  let obj = skuId(576);
  const cResult = obj.c(22);
  skuId = skuId.skuId;
  ({ analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "CollectiblesShopGiftModal" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const GiftingBadgeExperiment = tmp2(10066).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig(first).enabled;
  if (cResult[1] !== enabled) {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
    const items = [enabled];
    cResult[1] = enabled;
    cResult[2] = O;
    cResult[3] = items;
    tmp7 = items;
    tmp6 = O;
  } else {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
    tmp7 = cResult[3];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
    const items1 = [CollectiblesCategoryStore];
    cResult[4] = items1;
    tmp9 = items1;
  } else {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  if (cResult[5] !== skuId) {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
    const items2 = [skuId];
    cResult[5] = skuId;
    cResult[6] = tmp12;
    cResult[7] = items2;
    tmp11 = items2;
    tmp10 = tmp12;
  } else {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
    tmp11 = cResult[7];
  }
  const tmp2Result = skuId(504);
  const stateFromStores = tmp2Result.useStateFromStores(tmp9, tmp10, tmp11);
  if (cResult[8] !== analyticsLocations) {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp15, analyticsLocations, 0);
    tmp15[arraySpreadResult] = enabled(6872).COLLECTIBLES_MOBILE_GIFT_MODAL;
    cResult[8] = analyticsLocations;
    cResult[9] = tmp15;
    tmp14 = tmp15;
  } else {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  const analyticsLocations2 = enabled(6848)(tmp14).analyticsLocations;
  const tmp20 = enabled;
  if (stateFromStores != null) {
    class O {
      constructor() {
        tmp = enabled;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[18]);
          badge = obj.fetchBadge(closure_0(closure_2[19]).BadgeId.GIFTING);
        }
        return;
      }
    }
  }
  dependencyMap = tmp21;
  if (cResult[10] !== undefined) {
    class M {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[23]);
        tmp3 = skuId;
        if (obj.isNullOrEmpty(skuId)) {
          tmp6 = globalThis;
          _Promise = Promise;
          flag = false;
          resolved = Promise.resolve(false);
        } else {
          tmp4 = skuId;
          tmpResult = tmp(tmp2[24]);
          resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
        }
        return resolved;
      }
    }
    cResult[10] = undefined;
    cResult[11] = M;
  } else {
    class M {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[23]);
        tmp3 = skuId;
        if (obj.isNullOrEmpty(skuId)) {
          tmp6 = globalThis;
          _Promise = Promise;
          flag = false;
          resolved = Promise.resolve(false);
        } else {
          tmp4 = skuId;
          tmpResult = tmp(tmp2[24]);
          resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
        }
        return resolved;
      }
    }
  }
  let tmp23 = null;
  if (null != stateFromStores) {
    let tmp26;
    class M {
      constructor(arg0) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[23]);
        tmp3 = skuId;
        if (obj.isNullOrEmpty(skuId)) {
          tmp6 = globalThis;
          _Promise = Promise;
          flag = false;
          resolved = Promise.resolve(false);
        } else {
          tmp4 = skuId;
          tmpResult = tmp(tmp2[24]);
          resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
        }
        return resolved;
      }
    }
    if (obj4.isCollectibleGiftingSupported()) {
      class M {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[23]);
          tmp3 = skuId;
          if (obj.isNullOrEmpty(skuId)) {
            tmp6 = globalThis;
            _Promise = Promise;
            flag = false;
            resolved = Promise.resolve(false);
          } else {
            tmp4 = skuId;
            tmpResult = tmp(tmp2[24]);
            resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
          }
          return resolved;
        }
      }
      const tmp31 = <closure_8 product={stateFromStores} analyticsLocations={analyticsLocations2} lockedRecipientUser={lockedRecipientUser} onGiftModalDismiss={onGiftModalDismiss} giftingOrigin={giftingOrigin} validateRecipient={tmp22} />;
      cResult[15] = analyticsLocations2;
      cResult[16] = giftingOrigin;
      cResult[17] = lockedRecipientUser;
      cResult[18] = onGiftModalDismiss;
      cResult[19] = stateFromStores;
      cResult[20] = tmp22;
      cResult[21] = tmp31;
    } else {
      let tmp24;
      class M {
        constructor(arg0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[23]);
          tmp3 = skuId;
          if (obj.isNullOrEmpty(skuId)) {
            tmp6 = globalThis;
            _Promise = Promise;
            flag = false;
            resolved = Promise.resolve(false);
          } else {
            tmp4 = skuId;
            tmpResult = tmp(tmp2[24]);
            resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
          }
          return resolved;
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp3 = skuId;
            if (obj.isNullOrEmpty(skuId)) {
              tmp6 = globalThis;
              _Promise = Promise;
              flag = false;
              resolved = Promise.resolve(false);
            } else {
              tmp4 = skuId;
              tmpResult = tmp(tmp2[24]);
              resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
            }
            return resolved;
          }
        }
        const stringResult = obj5.string(skuId(1126).t["JCFN/y"]);
        cResult[12] = stringResult;
        tmp24 = stringResult;
      } else {
        class M {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp3 = skuId;
            if (obj.isNullOrEmpty(skuId)) {
              tmp6 = globalThis;
              _Promise = Promise;
              flag = false;
              resolved = Promise.resolve(false);
            } else {
              tmp4 = skuId;
              tmpResult = tmp(tmp2[24]);
              resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
            }
            return resolved;
          }
        }
      }
      if (cResult[13] !== onGiftModalDismiss) {
        class M {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp3 = skuId;
            if (obj.isNullOrEmpty(skuId)) {
              tmp6 = globalThis;
              _Promise = Promise;
              flag = false;
              resolved = Promise.resolve(false);
            } else {
              tmp4 = skuId;
              tmpResult = tmp(tmp2[24]);
              resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
            }
            return resolved;
          }
        }
        const tmp27 = jsx(tmp20(10149), { onDismiss: onGiftModalDismiss, title: tmp24 });
        cResult[13] = onGiftModalDismiss;
        cResult[14] = tmp27;
        tmp26 = tmp27;
      } else {
        class M {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[23]);
            tmp3 = skuId;
            if (obj.isNullOrEmpty(skuId)) {
              tmp6 = globalThis;
              _Promise = Promise;
              flag = false;
              resolved = Promise.resolve(false);
            } else {
              tmp4 = skuId;
              tmpResult = tmp(tmp2[24]);
              resolved = tmpResult.validateCollectiblesRecipient(skuId, tmp3);
            }
            return resolved;
          }
        }
      }
    }
    tmp23 = tmp26;
  }
  return tmp23;
}) : (function CollectiblesShopGiftModal(skuId) {
  let analyticsLocations;
  let giftingOrigin;
  let intl;
  let lockedRecipientUser;
  let onGiftModalDismiss;
  skuId = skuId.skuId;
  ({ analyticsLocations, onGiftModalDismiss } = skuId);
  let skuId1;
  let tmp3 = skuId1;
  ({ lockedRecipientUser, giftingOrigin } = skuId);
  const GiftingBadgeExperiment = skuId(skuId1[17]).GiftingBadgeExperiment;
  const enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftModal" }).enabled;
  const items = [enabled];
  const effect = react.useEffect(() => {
    const tmp = enabled;
    if (tmp) {
      const obj = BadgeDirectoryActionCreators;
      const badge = obj.fetchBadge(BadgeId.BadgeId.GIFTING);
    }
  }, items);
  let obj = skuId(skuId1[20]);
  const items1 = [CollectiblesCategoryStore];
  const items2 = [skuId];
  const stateFromStores = obj.useStateFromStores(items1, () => CollectiblesCategoryStore.getProduct(skuId), items2);
  const items3 = [];
  const tmp7 = enabled(skuId1[22]);
  const arraySpreadResult = HermesBuiltin.arraySpread(items3, analyticsLocations, 0);
  items3[arraySpreadResult] = enabled(skuId1[21]).COLLECTIBLES_MOBILE_GIFT_MODAL;
  skuId1 = undefined;
  const analyticsLocations2 = tmp7(items3).analyticsLocations;
  const tmp6 = enabled;
  if (stateFromStores != null) {
    skuId1 = stateFromStores.skuId;
  }
  [][0] = skuId1;
  let tmp11 = null;
  if (null != stateFromStores) {
    let tmp12Result;
    const tmp2Result = skuId(tmp3[9]);
    if (tmp2Result.isCollectibleGiftingSupported()) {
      const obj2 = { product: stateFromStores, analyticsLocations: analyticsLocations2, lockedRecipientUser, onGiftModalDismiss, giftingOrigin, validateRecipient: tmp10 };
      tmp12Result = tmp12(closure_8, obj2);
    } else {
      const obj3 = { onDismiss: onGiftModalDismiss, title: intl.string(skuId(tmp3[25]).t["JCFN/y"]) };
      const tmp6Result = tmp6(tmp3[26]);
      intl = tmp2(tmp3[25]).intl;
      tmp12Result = tmp12(tmp6Result, obj3);
    }
    tmp11 = tmp12Result;
  }
  return tmp11;
});
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftModal.tsx");

export default tmp2;
