// Module ID: 14073
// Function ID: 14074
// Dependencies: [1996, 676, 8541, 2]

// Module 14073
import closure_0 from "_getSystemLocale" /* 1996 */;

let obj = {};
obj = {
  scope: require("set").OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: locale.locale };
  }
};
obj[require("ME").RPCCommands.USER_SETTINGS_GET_LOCALE] = obj;
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
