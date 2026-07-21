// Module ID: 13309
// Function ID: 101126
// Name: handler
// Dependencies: []

// Module 13309 (handler)
let closure_0 = importDefault(dependencyMap[0]);
let obj = {};
obj = {
  scope: arg1(dependencyMap[2]).OAuth2Scopes.IDENTIFY,
  handler() {
    return { locale: locale.locale };
  }
};
obj[arg1(dependencyMap[1]).RPCCommands.USER_SETTINGS_GET_LOCALE] = obj;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/rpc/server/commands/userSettings.tsx");

export default obj;
