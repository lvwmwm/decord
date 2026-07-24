// Module ID: 7121
// Function ID: 57233
// Name: isSpendingLimitError
// Dependencies: [4029, 3798, 7122, 4471, 1212, 6821, 4140, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 7121 (isSpendingLimitError)
const result = require("useUserIdsForLinkStatus").fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp = billingError instanceof require(4029) /* V6OrEarlierAPIError */.BillingError;
  if (tmp) {
    let tmp4 = billingError.code === require(3798) /* _isNativeReflectConstruct */.ErrorCodes.BILLING_SPENDING_LIMIT_REACHED;
    if (!tmp4) {
      tmp4 = billingError.code === require(3798) /* _isNativeReflectConstruct */.ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const showSpendingLimitReachedAlert = function showSpendingLimitReachedAlert() {
  let obj = activeLinkUserIds(7122);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  let obj1 = importDefault(4471);
  obj = {};
  const intl = activeLinkUserIds(1212).intl;
  obj.title = intl.string(activeLinkUserIds(1212).t.QJKKrT);
  const intl2 = activeLinkUserIds(1212).intl;
  obj.body = intl2.string(activeLinkUserIds(1212).t["73Islf"]);
  obj.isDismissable = true;
  if (activeLinkUserIds.length > 0) {
    obj = {};
    const intl3 = activeLinkUserIds(1212).intl;
    obj.confirmText = intl3.string(activeLinkUserIds(1212).t.GF9RCX);
    obj.onConfirm = function onConfirm() {
      let obj = activeLinkUserIds(outer1_2[5]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      outer1_1(outer1_2[6]).openPrivateChannel(obj);
    };
    const intl4 = activeLinkUserIds(1212).intl;
    obj.cancelText = intl4.string(activeLinkUserIds(1212).t.L5eIZ2);
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj1.show(obj);
};
