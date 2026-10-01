// Module ID: 797
// Function ID: 798
// Name: profiler
// Dependencies: [713, 688, 689]

// Module 797 (profiler)
import _mod688 from "module_688" /* 688 */;
import _mod713 from "module_713" /* 713 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const profiler = {
  startProfiler() {
    const obj = _mod713;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod688.DEBUG_BUILD) {
          const debug3 = tmp(689).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod688.DEBUG_BUILD) {
        const debug2 = tmp(689).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod688.DEBUG_BUILD) {
      const debug = tmp(689).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod713;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod688.DEBUG_BUILD) {
          const debug3 = tmp(689).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod688.DEBUG_BUILD) {
        const debug2 = tmp(689).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod688.DEBUG_BUILD) {
      const debug = tmp(689).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
