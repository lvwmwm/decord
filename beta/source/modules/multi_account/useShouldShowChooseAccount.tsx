// Module ID: 17466
// Function ID: 17467
// Name: useShouldShowChooseAccount
// Dependencies: [13289, 504, 2]
// Exports: default

// Module 17466 (useShouldShowChooseAccount)
import get_initialized from "get initialized" /* 504 */;
import MultiAccountStore from "MultiAccountStore" /* 13289 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/multi_account/useShouldShowChooseAccount.tsx");

export default function useShouldShowChooseAccount() {
  let canUseMultiAccountMobile;
  const items = [MultiAccountStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const tmp = canUseMultiAccountMobile.getCanUseMultiAccountMobile() && canUseMultiAccountMobile.getHasLoggedInAccounts();
    return tmp;
  });
};
