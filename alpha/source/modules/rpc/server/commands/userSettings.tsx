// Module ID: 14068
// Function ID: 14069
// Name: userSettings
// Dependencies: [2112, 1074, 7787, 2]

// Module 14068 (userSettings)
import LocaleStore from "LocaleStore" /* 2112 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(7787).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
