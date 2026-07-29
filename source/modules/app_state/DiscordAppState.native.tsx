// Module ID: 9477
// Function ID: 9478
// Dependencies: [6328, 589, 2]

// Module 9477
import getState from "getState";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket(arg0) {
    return "active" === store.getState();
  },
  getState() {
    return store.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [getState];
    return require(589) /* initialize */.useStateFromStores(items, () => "active" === state.getState());
  }
};
