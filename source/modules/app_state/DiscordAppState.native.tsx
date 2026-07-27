// Module ID: 9413
// Function ID: 73473
// Name: canUIRequestGatewaySocket
// Dependencies: [6271, 566, 2]

// Module 9413 (canUIRequestGatewaySocket)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function canUIRequestGatewaySocket() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  return "active" === obj.getState();
}
const result = require("set").fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket() {
    return canUIRequestGatewaySocket();
  },
  getState() {
    return state.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_3(outer1_2));
  }
};
