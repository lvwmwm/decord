// Module ID: 6690
// Function ID: 6691
// Name: fetchConnectedAccounts
// Dependencies: [1084, 1294, 584, 2]
// Exports: fetchConnectedAccounts

// Module 6690 (fetchConnectedAccounts)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
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
