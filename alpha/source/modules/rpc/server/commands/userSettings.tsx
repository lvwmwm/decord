// Module ID: 14276
// Function ID: 14277
// Name: userSettings
// Dependencies: [2111, 1074, 7969, 2]

// Module 14276 (userSettings)
import LocaleStore from "LocaleStore" /* 2111 */;

const obj = {};
obj[fn(1074).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(7969).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
