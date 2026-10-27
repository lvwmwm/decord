// Module ID: 945
// Function ID: 946
// Name: uiProfiler
// Dependencies: [693, 946]

// Module 945 (uiProfiler)
import _mod693 from "module_693" /* 693 */;
import _mod946 from "module_946" /* 946 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const obj = _mod693;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod946.DEBUG_BUILD) {
        const debug2 = tmp(693).debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod946.DEBUG_BUILD) {
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
      } else if (_mod946.DEBUG_BUILD) {
        const debug2 = tmp(693).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod946.DEBUG_BUILD) {
      const debug = tmp(693).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
