// Module ID: 14069
// Function ID: 14070
// Name: userSettings
// Dependencies: [2115, 1086, 7791, 2]

// Module 14069 (userSettings)
import Constants from "Constants" /* 1086 */;
import OAuth2Scopes from "OAuth2Scopes" /* 7791 */;
import LocaleStore from "LocaleStore" /* 2115 */;
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
