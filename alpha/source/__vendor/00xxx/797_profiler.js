// Module ID: 797
// Function ID: 798
// Name: profiler
// Dependencies: [712, 687, 688]

// Module 797 (profiler)
import _mod687 from "module_687" /* 687 */;
import _mod712 from "module_712" /* 712 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const profiler = {
  startProfiler() {
    const obj = _mod712;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod687.DEBUG_BUILD) {
          const debug3 = tmp(688).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod687.DEBUG_BUILD) {
        const debug2 = tmp(688).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod687.DEBUG_BUILD) {
      const debug = tmp(688).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod712;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod687.DEBUG_BUILD) {
          const debug3 = tmp(688).debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod687.DEBUG_BUILD) {
        const debug2 = tmp(688).debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod687.DEBUG_BUILD) {
      const debug = tmp(688).debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
