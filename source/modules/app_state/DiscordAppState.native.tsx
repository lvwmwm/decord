// Module ID: 10875
// Function ID: 10876
// Dependencies: [7104, 589, 2]

// Module 10875
import initialize from "initialize" /* 589 */;
import closure_2 from "getState" /* 7104 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket(arg0) {
    return "active" === store.getState();
  },
  getState() {
    return store.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => "active" === state.getState());
  }
};
