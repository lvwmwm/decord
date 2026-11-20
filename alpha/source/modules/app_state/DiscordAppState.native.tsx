// Module ID: 6532
// Function ID: 6533
// Name: DiscordAppState
// Dependencies: [2118, 504, 2]

// Module 6532 (DiscordAppState)
import get_initialized from "get initialized" /* 504 */;
import AppStateStore from "AppStateStore" /* 2118 */;
import size from "module_2" /* 2 */;

let obj = {
  canUIRequestGatewaySocket() {
    return "active" === AppStateStore.getState();
  },
  getState() {
    return AppStateStore.getState();
  },
  useState() {
    let state;
    const items = [AppStateStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => state.getState());
  },
  useCanUIRequestGatewaySocket() {
    let state;
    const items = [AppStateStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => "active" === state.getState());
  }
};
const result = size.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default obj;
