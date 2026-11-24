// Module ID: 9015
// Function ID: 9016
// Name: showSpendingLimitReachedAlert
// Dependencies: [5666, 5668, 8070, 5921, 1112, 9016, 6229, 5598, 2824, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 9015 (showSpendingLimitReachedAlert)
import _modDef2824 from "module_2824" /* 2824 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5666 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5921 */;
import LayerActionCreators from "LayerActionCreators" /* 6229 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 9016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    tmp3 = billingError.code === tmp(5668).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(5668).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    const tmp4 = billingError.code === tmp(5668).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(5668).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
  }
  return tmp3;
}
export function showSpendingLimitReachedAlert() {
  let activeLinkUserIds;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj4;
  let tmp = activeLinkUserIds;
  let obj = activeLinkUserIds(8070);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  const obj2 = { title: intl.string(activeLinkUserIds(1112).t.QJKKrT), body: intl2.string(activeLinkUserIds(1112).t["73Islf"]), isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = activeLinkUserIds(1112).intl;
  intl2 = activeLinkUserIds(1112).intl;
  if (activeLinkUserIds.length > 0) {
    const obj3 = {
      confirmText: intl3.string(tmp(1112).t.GF9RCX),
      onConfirm() {
          let length;
          const tmp = openLinkedUsersChannelDefault;
          return tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
            const presentFailedToast = activeLinkUserIds(dependencyMap[7]).presentFailedToast;
            activeLinkUserIds(dependencyMap[7]);
            const intl = activeLinkUserIds(dependencyMap[4]).intl;
            const obj = { count: length.length };
            return presentFailedToast(intl.formatToPlainString(_modDef2824.D1BwNC, obj));
          });
        },
      cancelText: intl4.string(tmp(1112).t.L5eIZ2)
    };
    intl3 = tmp(1112).intl;
    intl4 = tmp(1112).intl;
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  show(obj2);
}
