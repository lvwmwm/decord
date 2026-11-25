// Module ID: 17462
// Function ID: 17463
// Name: useShouldShowChooseAccount
// Dependencies: [13286, 504, 2]
// Exports: default

// Module 17462 (useShouldShowChooseAccount)
import get_initialized from "get initialized" /* 504 */;
import MultiAccountStore from "MultiAccountStore" /* 13286 */;
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
