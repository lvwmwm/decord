// Module ID: 15984
// Function ID: 15985
// Name: conjureWakeSignals
// Dependencies: [1380, 5116, 1480, 2]
// Exports: listenForConjureWake

// Module 15984 (conjureWakeSignals)
import PlatformUtils from "PlatformUtils" /* 1380 */;
import NetworkUtilsDefault from "NetworkUtils" /* 1480 */;
import DiscordNativeDefault from "DiscordNative" /* 5116 */;
import size from "module_2" /* 2 */;

let c3 = false;
const result = size.fileFinishedImporting("modules/conjure/connection/conjureWakeSignals.tsx");

export function listenForConjureWake(handleWake) {
  let closure_0 = handleWake;
  const tmp = c3;
  if (!tmp) {
    c3 = true;
    const obj = PlatformUtils;
    if (obj.isDesktop()) {
      const powerMonitor = DiscordNativeDefault.powerMonitor;
      powerMonitor.on("resume", handleWake);
    }
    const obj2 = NetworkUtilsDefault;
    obj2.addOnlineCallback(handleWake);
    const _document = document;
    if (typeof document !== "undefined") {
      const _document2 = document;
      const listener = document.addEventListener("visibilitychange", () => {
        if ("visible" === document.visibilityState) {
          closure_0();
        }
      });
    }
  }
}
