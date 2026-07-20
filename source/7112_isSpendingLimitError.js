// Module ID: 7112
// Function ID: 57152
// Name: isSpendingLimitError
// Dependencies: []
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 7112 (isSpendingLimitError)
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp = billingError instanceof require(dependencyMap[0]).BillingError;
  if (tmp) {
    let tmp4 = billingError.code === require(dependencyMap[1]).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED;
    if (!tmp4) {
      tmp4 = billingError.code === require(dependencyMap[1]).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    }
    tmp = tmp4;
  }
  return tmp;
};
export const showSpendingLimitReachedAlert = function showSpendingLimitReachedAlert() {
  let obj = require(dependencyMap[2]);
  const activeLinkUserIds = obj.getActiveLinkUserIds();
  const require = activeLinkUserIds;
  let obj1 = importDefault(dependencyMap[3]);
  obj = {};
  const intl = require(dependencyMap[4]).intl;
  obj.title = intl.string(require(dependencyMap[4]).t.QJKKrT);
  const intl2 = require(dependencyMap[4]).intl;
  obj.body = intl2.string(require(dependencyMap[4]).t.73Islf);
  obj.isDismissable = true;
  if (activeLinkUserIds.length > 0) {
    obj = {};
    const intl3 = require(dependencyMap[4]).intl;
    obj.confirmText = intl3.string(require(dependencyMap[4]).t.GF9RCX);
    obj.onConfirm = function onConfirm() {
      let obj = activeLinkUserIds(closure_2[5]);
      obj.popLayer();
      obj = { recipientIds: activeLinkUserIds };
      callback(closure_2[6]).openPrivateChannel(obj);
    };
    const intl4 = require(dependencyMap[4]).intl;
    obj.cancelText = intl4.string(require(dependencyMap[4]).t.L5eIZ2);
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj1.show(obj);
};
