// Module ID: 11563
// Function ID: 11564
// Name: DiscordAppState
// Dependencies: [1979, 504, 2]

// Module 11563 (DiscordAppState)
import initialize from "initialize" /* 504 */;
import AppStateStore from "AppStateStore" /* 1979 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_state/DiscordAppState.native.tsx");

export default {
  canUIRequestGatewaySocket() {
    return "active" === AppStateStore.getState();
  },
  getState() {
    return AppStateStore.getState();
  },
  useCanUIRequestGatewaySocket() {
    const items = [AppStateStore];
    return initialize.useStateFromStores(items, () => "active" === state.getState());
  }
};
