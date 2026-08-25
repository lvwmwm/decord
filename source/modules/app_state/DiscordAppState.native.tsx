// Module ID: 10557
// Function ID: 10558
// Dependencies: [7019, 589, 2]

// Module 10557
import initialize from "initialize" /* 589 */;
import closure_2 from "getState" /* 7019 */;

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
