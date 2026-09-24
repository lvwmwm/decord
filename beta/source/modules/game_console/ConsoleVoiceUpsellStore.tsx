// Module ID: 17549
// Function ID: 17550
// Name: ConsoleVoiceUpsellStore
// Dependencies: [562, 1252, 2]
// Exports: setShowConsoleVoiceSparkles, setVoiceUpsellDismissed

// Module 17549 (ConsoleVoiceUpsellStore)
import module_562 from "module_562" /* 562 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = Object.freeze({ voiceUpsellDismissed: false, showSparkles: false });
const useConsoleVoiceUpsellStore = module_562.create(() => closure_2);
const result = size.fileFinishedImporting("modules/game_console/ConsoleVoiceUpsellStore.tsx");

export { useConsoleVoiceUpsellStore };
export const setShowConsoleVoiceSparkles = function setShowConsoleVoiceSparkles(showSparkles) {
  _require = showSparkles;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { showSparkles };
    obj.setState(obj);
  });
};
export const setVoiceUpsellDismissed = function setVoiceUpsellDismissed(voiceUpsellDismissed) {
  _require = voiceUpsellDismissed;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { voiceUpsellDismissed };
    obj.setState(obj);
  });
};
