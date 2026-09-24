// Module ID: 14827
// Function ID: 14828
// Name: userSettings
// Dependencies: [2113, 1078, 8647, 2]

// Module 14827 (userSettings)
import LocaleStore from "LocaleStore" /* 2113 */;

const obj = {};
obj[fn(1078).RPCCommands.USER_SETTINGS_GET_LOCALE] = {
  scope: fn(8647).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: LocaleStore.locale };
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
