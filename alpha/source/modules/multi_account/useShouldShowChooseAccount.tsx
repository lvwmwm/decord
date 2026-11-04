// Module ID: 18233
// Function ID: 18234
// Name: useShouldShowChooseAccount
// Dependencies: [14194, 504, 2]
// Exports: default

// Module 18233 (useShouldShowChooseAccount)
import get_initialized from "get initialized" /* 504 */;
import MultiAccountStore from "MultiAccountStore" /* 14194 */;
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
