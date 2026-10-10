// Module ID: 10061
// Function ID: 10062
// Name: showSpendingLimitReachedAlert
// Dependencies: [5635, 4791, 7738, 5300, 1126, 7306, 7014, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 10061 (showSpendingLimitReachedAlert)
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5635 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7014 */;
import LayerActionCreators from "LayerActionCreators" /* 7306 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export const isSpendingLimitError = function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    tmp3 = billingError.code === tmp(4791).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4791).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    const tmp4 = billingError.code === tmp(4791).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4791).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
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
  let obj = activeLinkUserIds(7738);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  let obj2 = { title: intl.string(activeLinkUserIds(1126).t.QJKKrT), body: intl2.string(activeLinkUserIds(1126).t["73Islf"]), isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = activeLinkUserIds(1126).intl;
  intl2 = activeLinkUserIds(1126).intl;
  if (activeLinkUserIds.length > 0) {
    let obj3 = {
      confirmText: intl3.string(activeLinkUserIds(1126).t.GF9RCX),
      onConfirm() {
          const obj = LayerActionCreators;
          obj.popLayer();
          const obj2 = ChannelActionCreatorsDefault;
          const obj3 = { recipientIds: activeLinkUserIds };
          obj2.openPrivateChannel(obj3);
        },
      cancelText: intl4.string(activeLinkUserIds(1126).t.L5eIZ2)
    };
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  show(obj2);
};
