// Module ID: 936
// Function ID: 937
// Name: uiProfiler
// Dependencies: [682, 937]

// Module 936 (uiProfiler)
import _mod682 from "module_682" /* 682 */;
import _mod937 from "module_937" /* 937 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const obj = _mod682;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (_mod937.DEBUG_BUILD) {
        const debug2 = tmp(682).debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (_mod937.DEBUG_BUILD) {
      const debug = tmp(682).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod682;
    const client = obj.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (_mod937.DEBUG_BUILD) {
        const debug2 = tmp(682).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod937.DEBUG_BUILD) {
      const debug = tmp(682).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
