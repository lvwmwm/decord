// Module ID: 801
// Function ID: 802
// Name: profiler
// Dependencies: [717, 692, 693]

// Module 801 (profiler)
import _mod717 from "module_717" /* 717 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const profiler = {
  startProfiler() {
    const client = _mod717.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(692).DEBUG_BUILD) {
          const debug3 = tmp(693).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(692).DEBUG_BUILD) {
        const debug2 = tmp(693).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(692).DEBUG_BUILD) {
      const debug = tmp(693).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod717.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(692).DEBUG_BUILD) {
          const debug3 = tmp(693).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(692).DEBUG_BUILD) {
        const debug2 = tmp(693).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(692).DEBUG_BUILD) {
      const debug = tmp(693).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
