// Module ID: 13873
// Function ID: 13874
// Name: handler
// Dependencies: [1994, 676, 4375, 2]

// Module 13873 (handler)
import _getSystemLocale from "_getSystemLocale";

let obj = {};
obj = { scope: null, handler: null };
obj[0] = require("set").OAuth2Scopes.IDENTIFY;
obj[1] = function handler() {
  return { locale: locale.locale };
};
obj[require("ME").RPCCommands.USER_SETTINGS_GET_LOCALE] = obj;
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
