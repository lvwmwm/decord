// Module ID: 6703
// Function ID: 6704
// Name: fetchConnectedAccounts
// Dependencies: [1072, 1282, 572, 2]
// Exports: fetchConnectedAccounts

// Module 6703 (fetchConnectedAccounts)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/connections/fetchConnectedAccounts.tsx");

export function fetchConnectedAccounts() {
  const HTTP = HTTPUtils.HTTP;
  let obj = { url: Endpoints.CONNECTIONS, oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then((accounts) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "USER_CONNECTIONS_UPDATE", local: true, accounts: accounts.body };
    return obj.dispatch(obj2);
  }, () => {
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "USER_CONNECTIONS_UPDATE", local: true, accounts: [] });
  });
}
