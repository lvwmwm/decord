// Module ID: 947
// Function ID: 948
// Name: uiProfiler
// Dependencies: [693, 948]

// Module 947 (uiProfiler)
import _mod693 from "module_693" /* 693 */;
import _mod948 from "module_948" /* 948 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const obj = _mod693;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod948.DEBUG_BUILD) {
        const debug2 = tmp(693).debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod948.DEBUG_BUILD) {
      const debug = tmp(693).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod693;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (_mod948.DEBUG_BUILD) {
        const debug2 = tmp(693).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod948.DEBUG_BUILD) {
      const debug = tmp(693).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
