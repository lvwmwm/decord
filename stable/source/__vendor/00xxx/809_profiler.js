// Module ID: 809
// Function ID: 810
// Name: profiler
// Dependencies: [725, 700, 701]

// Module 809 (profiler)
import _mod700 from "module_700" /* 700 */;
import _mod725 from "module_725" /* 725 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const profiler = {
  startProfiler() {
    const obj = _mod725;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod700.DEBUG_BUILD) {
          const debug3 = tmp(701).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod700.DEBUG_BUILD) {
        const debug2 = tmp(701).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod700.DEBUG_BUILD) {
      const debug = tmp(701).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod725;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod700.DEBUG_BUILD) {
          const debug3 = tmp(701).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod700.DEBUG_BUILD) {
        const debug2 = tmp(701).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod700.DEBUG_BUILD) {
      const debug = tmp(701).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
