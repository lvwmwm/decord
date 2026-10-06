// Module ID: 10208
// Function ID: 10209
// Name: showSpendingLimitReachedAlert
// Dependencies: [4737, 4513, 8102, 5205, 1127, 7010, 4850, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 10208 (showSpendingLimitReachedAlert)
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4737 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4850 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5205 */;
import LayerActionCreators from "LayerActionCreators" /* 7010 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    tmp3 = billingError.code === tmp(4513).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4513).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    const tmp4 = billingError.code === tmp(4513).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4513).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
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
  let obj = activeLinkUserIds(8102);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  let obj2 = { title: intl.string(activeLinkUserIds(1127).t.QJKKrT), body: intl2.string(activeLinkUserIds(1127).t["73Islf"]), isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = activeLinkUserIds(1127).intl;
  intl2 = activeLinkUserIds(1127).intl;
  if (activeLinkUserIds.length > 0) {
    let obj3 = {
      confirmText: intl3.string(activeLinkUserIds(1127).t.GF9RCX),
      onConfirm() {
          const obj = LayerActionCreators;
          obj.popLayer();
          const obj2 = ChannelActionCreatorsDefault;
          const obj3 = { recipientIds: activeLinkUserIds };
          obj2.openPrivateChannel(obj3);
        },
      cancelText: intl4.string(activeLinkUserIds(1127).t.L5eIZ2)
    };
    intl3 = tmp(1127).intl;
    intl4 = tmp(1127).intl;
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  show(obj2);
};
