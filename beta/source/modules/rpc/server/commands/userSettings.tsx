// Module ID: 15737
// Function ID: 15738
// Name: userSettings
// Dependencies: [2188, 1071, 15688, 6913, 2]

// Module 15737 (userSettings)
import Constants from "Constants" /* 1071 */;
import OAuth2Scopes from "OAuth2Scopes" /* 6913 */;
import LocaleStore from "LocaleStore" /* 2188 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15688 */;
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
