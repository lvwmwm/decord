// Module ID: 11039
// Function ID: 11040
// Name: showSpendingLimitReachedAlert
// Dependencies: [4691, 4472, 8953, 5143, 1119, 7865, 4803, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 11039 (showSpendingLimitReachedAlert)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4691 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4803 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5143 */;
import LayerActionCreators from "LayerActionCreators" /* 7865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    let tmp4 = billingError.code === tmp(4472).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED;
    if (!tmp4) {
      tmp4 = billingError.code === tmp(4472).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const showSpendingLimitReachedAlert = function showSpendingLimitReachedAlert() {
  activeLinkUserIds = activeLinkUserIds(8953).getActiveLinkUserIds();
  let obj = activeLinkUserIds(8953);
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
