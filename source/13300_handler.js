// Module ID: 13300
// Function ID: 101081
// Name: handler
// Dependencies: [0, 0, 0, 0]

// Module 13300 (handler)
import closure_0 from "result";
import result from "result";

let obj = {};
obj = {
  scope: require("result").OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: locale.locale };
  }
};
obj[require("result").RPCCommands.USER_SETTINGS_GET_LOCALE] = obj;
result = result.fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
