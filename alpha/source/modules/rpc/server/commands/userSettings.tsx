// Module ID: 14344
// Function ID: 14345
// Name: userSettings
// Dependencies: [2116, 1085, 8015, 2]

// Module 14344 (userSettings)
import Constants from "Constants" /* 1085 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8015 */;
import LocaleStore from "LocaleStore" /* 2116 */;
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
