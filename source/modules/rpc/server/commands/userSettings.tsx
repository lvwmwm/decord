// Module ID: 13495
// Function ID: 103774
// Name: handler
// Dependencies: [1922, 653, 8112, 2]

// Module 13495 (handler)
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
