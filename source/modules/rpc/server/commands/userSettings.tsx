// Module ID: 13539
// Function ID: 103947
// Name: handler
// Dependencies: [1922, 653, 8150, 2]

// Module 13539 (handler)
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
