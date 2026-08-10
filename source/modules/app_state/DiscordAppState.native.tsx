// Module ID: 10470
// Function ID: 10471
// Dependencies: [6876, 589, 2]

// Module 10470
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
