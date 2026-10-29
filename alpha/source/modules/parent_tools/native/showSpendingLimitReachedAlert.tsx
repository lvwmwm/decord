// Module ID: 10524
// Function ID: 10525
// Name: showSpendingLimitReachedAlert
// Dependencies: [6433, 4828, 8180, 5947, 1125, 10525, 7748, 5700, 2536, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 10524 (showSpendingLimitReachedAlert)
import _modDef2536 from "module_2536" /* 2536 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5947 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6433 */;
import LayerActionCreators from "LayerActionCreators" /* 7748 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10525 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    tmp3 = billingError.code === tmp(4828).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4828).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    const tmp4 = billingError.code === tmp(4828).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4828).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
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
  let obj = activeLinkUserIds(8180);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  const obj2 = { title: intl.string(activeLinkUserIds(1125).t.QJKKrT), body: intl2.string(activeLinkUserIds(1125).t["73Islf"]), isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = activeLinkUserIds(1125).intl;
  intl2 = activeLinkUserIds(1125).intl;
  if (activeLinkUserIds.length > 0) {
    const obj3 = {
      confirmText: intl3.string(tmp(1125).t.GF9RCX),
      onConfirm() {
          let length;
          const tmp = openLinkedUsersChannelDefault;
          return tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
            const presentFailedToast = activeLinkUserIds(dependencyMap[7]).presentFailedToast;
            activeLinkUserIds(dependencyMap[7]);
            const intl = activeLinkUserIds(dependencyMap[4]).intl;
            const obj = { count: length.length };
            return presentFailedToast(intl.formatToPlainString(_modDef2536.D1BwNC, obj));
          });
        },
      cancelText: intl4.string(tmp(1125).t.L5eIZ2)
    };
    intl3 = tmp(1125).intl;
    intl4 = tmp(1125).intl;
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  show(obj2);
}
