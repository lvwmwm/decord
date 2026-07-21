// Module ID: 9448
// Function ID: 73622
// Name: canUIRequestGatewaySocket
// Dependencies: []

// Module 9448 (canUIRequestGatewaySocket)
function canUIRequestGatewaySocket() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = closure_2;
  }
  return "active" === obj.getState();
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket() {
    return canUIRequestGatewaySocket();
  },
  getState() {
    return state.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [closure_2];
    return arg1(dependencyMap[1]).useStateFromStores(items, () => callback(closure_2));
  }
};
