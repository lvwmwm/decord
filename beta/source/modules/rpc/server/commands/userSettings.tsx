// Module ID: 14067
// Function ID: 14068
// Name: userSettings
// Dependencies: [2112, 1074, 7787, 2]

// Module 14067 (userSettings)
import Constants from "Constants" /* 1074 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7787 */;
import LocaleStore from "LocaleStore" /* 2112 */;
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
