// Module ID: 9444
// Function ID: 73597
// Name: canUIRequestGatewaySocket
// Dependencies: [9446, 9461, 2]

// Module 9444 (canUIRequestGatewaySocket)
import resolveAsset from "resolveAsset";
import keys from "keys";

function canUIRequestGatewaySocket() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = resolveAsset;
  }
  return "active" === obj.getState();
}
const result = keys.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

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
