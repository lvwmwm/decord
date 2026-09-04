// Module ID: 11232
// Function ID: 11233
// Dependencies: [7347, 586, 2]

// Module 11232
import initialize from "initialize" /* 586 */;
import closure_2 from "getState" /* 7347 */;

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
