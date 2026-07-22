// Module ID: 8771
// Function ID: 69320
// Name: UnifiedGiftModal
// Dependencies: []
// Exports: default

// Module 8771 (UnifiedGiftModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModal.tsx");

export default function UnifiedGiftModal(skuId) {
  let obj = { skuId: skuId.skuId, applicationId: skuId.applicationId, lockedRecipientUser: skuId.lockedRecipientUser, onGiftModalDismiss: skuId.onGiftModalDismiss, validateRecipient: skuId.validateRecipient, renderProductDetails: skuId.renderProductDetails, renderPurchaseSection: skuId.renderPurchaseSection };
  obj = { value: skuId.analyticsLocations };
  obj = { initialRouteName: arg1(dependencyMap[5]).UnifiedGiftModalScreens.GIFT_DETAIL };
  obj.screens = function useScreens(skuId) {
    skuId = skuId.skuId;
    const applicationId = skuId.applicationId;
    const lockedRecipientUser = skuId.lockedRecipientUser;
    const onGiftModalDismiss = skuId.onGiftModalDismiss;
    const validateRecipient = skuId.validateRecipient;
    const renderProductDetails = skuId.renderProductDetails;
    const renderPurchaseSection = skuId.renderPurchaseSection;
    const tmp = onGiftModalDismiss(validateRecipient.useState(lockedRecipientUser), 2);
    const first = tmp[0];
    let closure_8 = tmp[1];
    const items = [onGiftModalDismiss];
    const callback = validateRecipient.useCallback(() => {
      let arr = applicationId(lockedRecipientUser[3]);
      arr = arr.pop();
      if (null != onGiftModalDismiss) {
        onGiftModalDismiss();
      }
    }, items);
    const items1 = [lockedRecipientUser, first, skuId, applicationId, callback, validateRecipient, renderProductDetails, renderPurchaseSection];
    return skuId(lockedRecipientUser[4]).useNavigatorScreens(() => {
      let obj = {};
      obj = {};
      const intl = skuId(lockedRecipientUser[6]).intl;
      obj.title = intl.string(skuId(lockedRecipientUser[6]).t.JCFN/y);
      obj.headerLeft = skuId(lockedRecipientUser[7]).getHeaderCloseButton(callback);
      obj.render = function render() {
        return callback2(callback(closure_2[8]), { skuId: closure_0, applicationId: callback, recipientUser: closure_7, setRecipientUser: closure_8, lockedRecipient: null != closure_2, validateRecipient: closure_4, renderProductDetails: callback2, renderPurchaseSection: closure_6 });
      };
      obj[skuId(lockedRecipientUser[5]).UnifiedGiftModalScreens.GIFT_DETAIL] = obj;
      obj = {};
      const intl2 = skuId(lockedRecipientUser[6]).intl;
      obj.title = intl2.string(skuId(lockedRecipientUser[6]).t.R0vK0N);
      const obj3 = skuId(lockedRecipientUser[7]);
      obj.headerLeft = skuId(lockedRecipientUser[7]).getHeaderBackButton();
      obj.render = function render() {
        return callback2(callback(closure_2[9]), { setRecipientUser: closure_8 });
      };
      obj[skuId(lockedRecipientUser[5]).UnifiedGiftModalScreens.RECIPENT_SELECT] = obj;
      return obj;
    }, items1);
  }(obj);
  obj.children = jsx(arg1(dependencyMap[4]).Navigator, obj);
  return jsx(arg1(dependencyMap[10]).AnalyticsLocationProvider, obj);
};
