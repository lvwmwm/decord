// Module ID: 8778
// Function ID: 69361
// Name: UnifiedGiftModal
// Dependencies: [57, 31, 33, 4337, 5519, 8779, 1212, 5087, 8780, 8817, 5464, 2]
// Exports: default

// Module 8778 (UnifiedGiftModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default function UnifiedGiftModal(skuId) {
  let obj = { skuId: skuId.skuId, applicationId: skuId.applicationId, lockedRecipientUser: skuId.lockedRecipientUser, onGiftModalDismiss: skuId.onGiftModalDismiss, validateRecipient: skuId.validateRecipient, renderProductDetails: skuId.renderProductDetails, renderPurchaseSection: skuId.renderPurchaseSection };
  obj = { value: skuId.analyticsLocations };
  obj = { initialRouteName: require(8779) /* UnifiedGiftModalScreens */.UnifiedGiftModalScreens.GIFT_DETAIL };
  obj.screens = (function useScreens(skuId) {
    skuId = skuId.skuId;
    const applicationId = skuId.applicationId;
    const lockedRecipientUser = skuId.lockedRecipientUser;
    const onGiftModalDismiss = skuId.onGiftModalDismiss;
    const validateRecipient = skuId.validateRecipient;
    const renderProductDetails = skuId.renderProductDetails;
    const renderPurchaseSection = skuId.renderPurchaseSection;
    const tmp = outer1_3(outer1_4.useState(lockedRecipientUser), 2);
    const first = tmp[0];
    let closure_8 = tmp[1];
    const items = [onGiftModalDismiss];
    const callback = outer1_4.useCallback(() => {
      let arr = outer2_1(outer2_2[3]);
      arr = arr.pop();
      if (null != onGiftModalDismiss) {
        onGiftModalDismiss();
      }
    }, items);
    const items1 = [lockedRecipientUser, first, skuId, applicationId, callback, validateRecipient, renderProductDetails, renderPurchaseSection];
    return outer1_0(outer1_2[4]).useNavigatorScreens(() => {
      let obj = {};
      obj = {};
      const intl = outer2_0(outer2_2[6]).intl;
      obj.title = intl.string(outer2_0(outer2_2[6]).t["JCFN/y"]);
      obj.headerLeft = outer2_0(outer2_2[7]).getHeaderCloseButton(callback);
      obj.render = function render() {
        return outer3_5(outer3_1(outer3_2[8]), { skuId: outer1_0, applicationId: outer1_1, recipientUser: outer1_7, setRecipientUser: outer1_8, lockedRecipient: null != outer1_2, validateRecipient: outer1_4, renderProductDetails: outer1_5, renderPurchaseSection: outer1_6 });
      };
      obj[outer2_0(outer2_2[5]).UnifiedGiftModalScreens.GIFT_DETAIL] = obj;
      obj = {};
      const intl2 = outer2_0(outer2_2[6]).intl;
      obj.title = intl2.string(outer2_0(outer2_2[6]).t.R0vK0N);
      const obj3 = outer2_0(outer2_2[7]);
      obj.headerLeft = outer2_0(outer2_2[7]).getHeaderBackButton();
      obj.render = function render() {
        return outer3_5(outer3_1(outer3_2[9]), { setRecipientUser: outer1_8 });
      };
      obj[outer2_0(outer2_2[5]).UnifiedGiftModalScreens.RECIPENT_SELECT] = obj;
      return obj;
    }, items1);
  })(obj);
  obj.children = jsx(require(5519) /* NavigationStack */.Navigator, { initialRouteName: require(8779) /* UnifiedGiftModalScreens */.UnifiedGiftModalScreens.GIFT_DETAIL });
  return jsx(require(5464) /* mergeLocations */.AnalyticsLocationProvider, { initialRouteName: require(8779) /* UnifiedGiftModalScreens */.UnifiedGiftModalScreens.GIFT_DETAIL });
};
