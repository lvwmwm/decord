// Module ID: 933
// Function ID: 934
// Name: uiProfiler
// Dependencies: [681, 934]

// Module 933 (uiProfiler)
import _mod681 from "module_681" /* 681 */;
import _mod934 from "module_934" /* 934 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const obj = _mod681;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod934.DEBUG_BUILD) {
        const debug2 = tmp(681).debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod934.DEBUG_BUILD) {
      const debug = tmp(681).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod681;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (_mod934.DEBUG_BUILD) {
        const debug2 = tmp(681).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod934.DEBUG_BUILD) {
      const debug = tmp(681).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
