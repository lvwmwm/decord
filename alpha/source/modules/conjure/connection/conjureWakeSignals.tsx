// Module ID: 11115
// Function ID: 11116
// Name: conjureWakeSignals
// Dependencies: [1377, 4981, 1477, 2]
// Exports: listenForConjureWake

// Module 11115 (conjureWakeSignals)
import PlatformUtils from "PlatformUtils" /* 1377 */;
import NetworkUtilsDefault from "NetworkUtils" /* 1477 */;
import DiscordNativeDefault from "DiscordNative" /* 4981 */;
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
