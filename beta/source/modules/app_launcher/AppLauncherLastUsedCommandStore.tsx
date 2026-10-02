// Module ID: 11488
// Function ID: 11489
// Name: AppLauncherLastUsedCommandStore
// Dependencies: [1103, 504, 585, 2]

// Module 11488 (AppLauncherLastUsedCommandStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import DurationsDefault from "Durations" /* 1103 */;
import size from "module_2" /* 2 */;

let closure_0 = 10 * DurationsDefault.Millis.MINUTE;
const PersistedStore = get_initializedDefault.PersistedStore;
class AppLauncherLastUsedCommandStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      ({ lastUsedCommandId: closure_1.lastUsedCommandId, lastUsedTimeMs: closure_1.lastUsedTimeMs } = arg0);
    }
  }
  getState() {
    return lastUsedTimeMs;
  }
  getLastUsedCommandId() {
    let lastUsedCommandId = null;
    if (null != lastUsedTimeMs.lastUsedTimeMs) {
      lastUsedCommandId = null;
      if (null != lastUsedTimeMs.lastUsedCommandId) {
        if (tmp > lastUsedTimeMs.lastUsedTimeMs + closure_0) {
          lastUsedTimeMs.lastUsedCommandId = null;
          lastUsedTimeMs.lastUsedTimeMs = null;
        }
        lastUsedCommandId = tmp2.lastUsedCommandId;
      }
    }
    return lastUsedCommandId;
  }
}
const prototype = AppLauncherLastUsedCommandStore.prototype;
AppLauncherLastUsedCommandStore.displayName = "AppLauncherLastUsedCommandStore";
AppLauncherLastUsedCommandStore.persistKey = "AppLauncherLastUsedCommandStore";
const obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(command) {
    lastUsedTimeMs.lastUsedCommandId = command.command.id;
    lastUsedTimeMs.lastUsedTimeMs = Date.now();
  }
};
const appLauncherLastUsedCommandStore = new AppLauncherLastUsedCommandStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/app_launcher/AppLauncherLastUsedCommandStore.tsx");

export default appLauncherLastUsedCommandStore;
