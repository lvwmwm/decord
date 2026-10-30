// Module ID: 19174
// Function ID: 19175
// Name: ConsoleVoiceUpsellStore
// Dependencies: [560, 1260, 2]
// Exports: setShowConsoleVoiceSparkles, setVoiceUpsellDismissed

// Module 19174 (ConsoleVoiceUpsellStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_2 = Object.freeze({ voiceUpsellDismissed: false, showSparkles: false });
const useConsoleVoiceUpsellStore = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/game_console/ConsoleVoiceUpsellStore.tsx");

export { useConsoleVoiceUpsellStore };
export function setShowConsoleVoiceSparkles(showSparkles) {
  _require = showSparkles;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { showSparkles };
    obj.setState(obj);
  });
}
export function setVoiceUpsellDismissed(voiceUpsellDismissed) {
  _require = voiceUpsellDismissed;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { voiceUpsellDismissed };
    obj.setState(obj);
  });
}
