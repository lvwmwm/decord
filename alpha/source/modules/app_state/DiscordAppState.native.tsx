// Module ID: 7007
// Function ID: 7008
// Name: DiscordAppState
// Dependencies: [2122, 504, 2]

// Module 7007 (DiscordAppState)
import get_initialized from "get initialized" /* 504 */;
import AppStateStore from "AppStateStore" /* 2122 */;
import size from "module_2" /* 2 */;

let obj = {
  canUIRequestGatewaySocket() {
    return "active" === AppStateStore.getState();
  },
  getState() {
    return AppStateStore.getState();
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
