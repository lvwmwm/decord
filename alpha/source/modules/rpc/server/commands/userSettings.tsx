// Module ID: 15089
// Function ID: 15090
// Name: userSettings
// Dependencies: [2129, 1085, 8458, 2]

// Module 15089 (userSettings)
import Constants from "Constants" /* 1085 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8458 */;
import LocaleStore from "LocaleStore" /* 2129 */;
import size from "module_2" /* 2 */;

const obj = {};
const obj2 = {
  scope: OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const USER_SETTINGS_GET_LOCALE = Constants.RPCCommands.USER_SETTINGS_GET_LOCALE;
obj[USER_SETTINGS_GET_LOCALE] = obj2;
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
