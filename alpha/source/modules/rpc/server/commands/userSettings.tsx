// Module ID: 14239
// Function ID: 14240
// Name: userSettings
// Dependencies: [2112, 1074, 7952, 2]

// Module 14239 (userSettings)
import LocaleStore from "LocaleStore" /* 2112 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(7952).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
