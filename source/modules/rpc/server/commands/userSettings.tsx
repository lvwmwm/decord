// Module ID: 13686
// Function ID: 13687
// Name: handler
// Dependencies: [1975, 676, 8825, 2]

// Module 13686 (handler)
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
