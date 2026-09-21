// Module ID: 11003
// Function ID: 11004
// Name: showSpendingLimitReachedAlert
// Dependencies: [4659, 4440, 8921, 5111, 1119, 7833, 4771, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 11003 (showSpendingLimitReachedAlert)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4659 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4771 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5111 */;
import LayerActionCreators from "LayerActionCreators" /* 7833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    let tmp4 = billingError.code === tmp(4440).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED;
    if (!tmp4) {
      tmp4 = billingError.code === tmp(4440).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const showSpendingLimitReachedAlert = function showSpendingLimitReachedAlert() {
  activeLinkUserIds = activeLinkUserIds(8921).getActiveLinkUserIds();
  let obj = activeLinkUserIds(8921);
  const obj3 = { title: null, body: null, isDismissable: true };
  const intl = activeLinkUserIds(1119).intl;
  obj3.title = intl.string(activeLinkUserIds(1119).t.QJKKrT);
  const intl2 = activeLinkUserIds(1119).intl;
  obj3.body = intl2.string(activeLinkUserIds(1119).t["73Islf"]);
  if (activeLinkUserIds.length > 0) {
    const obj4 = { confirmText: null, onConfirm: null, cancelText: null };
    const intl3 = tmp(1119).intl;
    obj4.confirmText = intl3.string(tmp(1119).t.GF9RCX);
    obj4.onConfirm = function onConfirm() {
      LayerActionCreators.popLayer();
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: activeLinkUserIds });
    };
    const intl4 = tmp(1119).intl;
    obj4.cancelText = intl4.string(tmp(1119).t.L5eIZ2);
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  actions_AlertActionCreatorsDefault.show(obj3);
};
