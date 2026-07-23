// Module ID: 1047
// Function ID: 11242
// Name: registerSpanErrorInstrumentation
// Dependencies: [794, 1048]

// Module 1047 (registerSpanErrorInstrumentation)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.uiProfiler = {
  startProfiler() {
    const client = require(794) /* registerSpanErrorInstrumentation */.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("startUIProfiler");
      } else if (require(1048).DEBUG_BUILD) {
        const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
        debug2.warn("BrowserProfiling integration is not available");
      }
    } else if (require(1048).DEBUG_BUILD) {
      const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(794) /* registerSpanErrorInstrumentation */.getClient();
    if (client) {
      if (client.getIntegrationByName("BrowserProfiling")) {
        client.emit("stopUIProfiler");
      } else if (require(1048).DEBUG_BUILD) {
        const debug2 = require(794) /* registerSpanErrorInstrumentation */.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (require(1048).DEBUG_BUILD) {
      const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
