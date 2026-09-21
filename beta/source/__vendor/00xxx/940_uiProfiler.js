// Module ID: 940
// Function ID: 941
// Name: uiProfiler
// Dependencies: [686, 941]

// Module 940 (uiProfiler)
import _mod686 from "module_686" /* 686 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const uiProfiler = {
  startProfiler() {
    const client = _mod686.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (tmp(941).DEBUG_BUILD) {
        const debug2 = tmp(686).debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (tmp(941).DEBUG_BUILD) {
      const debug = tmp(686).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod686.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (tmp(941).DEBUG_BUILD) {
        const debug2 = tmp(686).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(941).DEBUG_BUILD) {
      const debug = tmp(686).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
