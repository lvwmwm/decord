// Module ID: 10386
// Function ID: 10387
// Name: showSpendingLimitReachedAlert
// Dependencies: [6331, 4771, 8072, 5867, 1128, 7639, 7360, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 10386 (showSpendingLimitReachedAlert)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5867 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6331 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7360 */;
import LayerActionCreators from "LayerActionCreators" /* 7639 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    tmp3 = billingError.code === tmp(4771).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4771).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    const tmp4 = billingError.code === tmp(4771).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4771).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
  }
  return tmp3;
};
export const showSpendingLimitReachedAlert = function showSpendingLimitReachedAlert() {
  let activeLinkUserIds;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj4;
  let obj = activeLinkUserIds(8072);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  let obj2 = { title: intl.string(activeLinkUserIds(1128).t.QJKKrT), body: intl2.string(activeLinkUserIds(1128).t["73Islf"]), isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = activeLinkUserIds(1128).intl;
  intl2 = activeLinkUserIds(1128).intl;
  if (activeLinkUserIds.length > 0) {
    let obj3 = {
      confirmText: intl3.string(activeLinkUserIds(1128).t.GF9RCX),
      onConfirm() {
          const obj = LayerActionCreators;
          obj.popLayer();
          const obj2 = ChannelActionCreatorsDefault;
          const obj3 = { recipientIds: activeLinkUserIds };
          obj2.openPrivateChannel(obj3);
        },
      cancelText: intl4.string(activeLinkUserIds(1128).t.L5eIZ2)
    };
    intl3 = tmp(1128).intl;
    intl4 = tmp(1128).intl;
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  show(obj2);
};
