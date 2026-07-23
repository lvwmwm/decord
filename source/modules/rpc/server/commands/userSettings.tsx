// Module ID: 13430
// Function ID: 103315
// Name: handler
// Dependencies: [1921, 653, 8310, 2]

// Module 13430 (handler)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

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
