// Module ID: 10569
// Function ID: 10570
// Name: showSpendingLimitReachedAlert
// Dependencies: [6446, 4834, 8369, 5959, 1113, 10570, 7760, 5711, 2538, 2]
// Exports: isSpendingLimitError, showSpendingLimitReachedAlert

// Module 10569 (showSpendingLimitReachedAlert)
import _modDef2538 from "module_2538" /* 2538 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5959 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 6446 */;
import LayerActionCreators from "LayerActionCreators" /* 7760 */;
import openLinkedUsersChannelDefault from "openLinkedUsersChannel" /* 10570 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/native/showSpendingLimitReachedAlert.tsx");

export function isSpendingLimitError(billingError) {
  let tmp3 = billingError instanceof V6OrEarlierAPIError.BillingError;
  if (tmp3) {
    tmp3 = billingError.code === tmp(4834).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4834).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
    const tmp4 = billingError.code === tmp(4834).ErrorCodes.BILLING_SPENDING_LIMIT_REACHED || billingError.code === tmp(4834).ErrorCodes.BILLING_SPENDING_LIMIT_WILL_EXCEED;
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
  let obj = activeLinkUserIds(8369);
  activeLinkUserIds = obj.getActiveLinkUserIds();
  const obj2 = { title: intl.string(activeLinkUserIds(1113).t.QJKKrT), body: intl2.string(activeLinkUserIds(1113).t["73Islf"]), isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = activeLinkUserIds(1113).intl;
  intl2 = activeLinkUserIds(1113).intl;
  if (activeLinkUserIds.length > 0) {
    const obj3 = {
      confirmText: intl3.string(tmp(1113).t.GF9RCX),
      onConfirm() {
          let length;
          const tmp = openLinkedUsersChannelDefault;
          return tmp(activeLinkUserIds, LayerActionCreators.popLayer, () => {
            const presentFailedToast = activeLinkUserIds(dependencyMap[7]).presentFailedToast;
            activeLinkUserIds(dependencyMap[7]);
            const intl = activeLinkUserIds(dependencyMap[4]).intl;
            const obj = { count: length.length };
            return presentFailedToast(intl.formatToPlainString(_modDef2538.D1BwNC, obj));
          });
        },
      cancelText: intl4.string(tmp(1113).t.L5eIZ2)
    };
    intl3 = tmp(1113).intl;
    intl4 = tmp(1113).intl;
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  show(obj2);
}
