// Module ID: 14591
// Function ID: 14592
// Name: userSettings
// Dependencies: [2128, 1085, 8433, 2]

// Module 14591 (userSettings)
import Constants from "Constants" /* 1085 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8433 */;
import LocaleStore from "LocaleStore" /* 2128 */;
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
