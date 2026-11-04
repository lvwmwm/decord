// Module ID: 16595
// Function ID: 16596
// Name: userSettings
// Dependencies: [2191, 1072, 16548, 9051, 2]

// Module 16595 (userSettings)
import Constants from "Constants" /* 1072 */;
import OAuth2Scopes from "OAuth2Scopes" /* 9051 */;
import LocaleStore from "LocaleStore" /* 2191 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 16548 */;
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
