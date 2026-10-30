// Module ID: 6866
// Function ID: 6867
// Name: DiscordAppState
// Dependencies: [1994, 504, 2]

// Module 6866 (DiscordAppState)
import get_initialized from "get initialized" /* 504 */;
import AppStateStore from "AppStateStore" /* 1994 */;
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
