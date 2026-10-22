// Module ID: 15713
// Function ID: 15714
// Name: userSettings
// Dependencies: [2068, 1087, 15678, 8802, 2]

// Module 15713 (userSettings)
import Constants from "Constants" /* 1087 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8802 */;
import LocaleStore from "LocaleStore" /* 2068 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15678 */;
import size from "module_2" /* 2 */;

const RPCCommands = Constants.RPCCommands;
const obj = {};
const USER_SETTINGS_GET_LOCALE = RPCCommands.USER_SETTINGS_GET_LOCALE;
const obj2 = {
  scope: OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
obj[USER_SETTINGS_GET_LOCALE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.USER_SETTINGS_GET_LOCALE, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
