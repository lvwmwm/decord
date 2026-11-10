// Module ID: 11110
// Function ID: 11111
// Name: conjureWakeSignals
// Dependencies: [1377, 4953, 1477, 2]
// Exports: listenForConjureWake

// Module 11110 (conjureWakeSignals)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NetworkUtilsDefault from "NetworkUtils" /* 1477 */;
import DiscordNativeDefault from "DiscordNative" /* 4953 */;
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
