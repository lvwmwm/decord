// Module ID: 1047
// Function ID: 11237
// Dependencies: []

// Module 1047
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.uiProfiler = {
  startProfiler() {
    const client = arg1(arg6[0]).getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (arg1(arg6[1]).DEBUG_BUILD) {
        const debug2 = arg1(arg6[0]).debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (arg1(arg6[1]).DEBUG_BUILD) {
      const debug = arg1(arg6[0]).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = arg1(arg6[0]).getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (arg1(arg6[1]).DEBUG_BUILD) {
        const debug2 = arg1(arg6[0]).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (arg1(arg6[1]).DEBUG_BUILD) {
      const debug = arg1(arg6[0]).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
