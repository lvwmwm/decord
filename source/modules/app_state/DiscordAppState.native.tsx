// Module ID: 9448
// Function ID: 73611
// Name: canUIRequestGatewaySocket
// Dependencies: [9450, 9465, 2]

// Module 9448 (canUIRequestGatewaySocket)
import resolveAsset from "resolveAsset";
import result2 from "result2";

function canUIRequestGatewaySocket() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = resolveAsset;
  }
  return "active" === obj.getState();
}
const result = result2.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket() {
    return canUIRequestGatewaySocket();
  },
  getState() {
    return state.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [resolveAsset];
    return arg1(dependencyMap[1]).useStateFromStores(items, () => callback(resolveAsset));
  }
};
