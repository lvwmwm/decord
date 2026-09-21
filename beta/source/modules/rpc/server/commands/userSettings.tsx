// Module ID: 14789
// Function ID: 14790
// Name: userSettings
// Dependencies: [2113, 1078, 8615, 2]

// Module 14789 (userSettings)
import LocaleStore from "LocaleStore" /* 2113 */;

const obj = {};
obj[fn(1078).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8615).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
