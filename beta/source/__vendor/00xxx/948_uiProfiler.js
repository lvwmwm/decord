// Module ID: 948
// Function ID: 949
// Name: uiProfiler
// Dependencies: [694, 949]

// Module 948 (uiProfiler)
import _mod694 from "module_694" /* 694 */;
import _mod949 from "module_949" /* 949 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const obj = _mod694;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod949.DEBUG_BUILD) {
        const debug2 = tmp(694).debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod949.DEBUG_BUILD) {
      const debug = tmp(694).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod694;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (_mod949.DEBUG_BUILD) {
        const debug2 = tmp(694).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod949.DEBUG_BUILD) {
      const debug = tmp(694).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
