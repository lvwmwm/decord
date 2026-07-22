// Module ID: 9449
// Function ID: 73635
// Name: canUIRequestGatewaySocket
// Dependencies: [9451, 9466, 2]

// Module 9449 (canUIRequestGatewaySocket)
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
