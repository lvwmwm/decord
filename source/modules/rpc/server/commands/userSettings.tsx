// Module ID: 13700
// Function ID: 13701
// Name: handler
// Dependencies: [1975, 676, 8842, 2]

// Module 13700 (handler)
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
