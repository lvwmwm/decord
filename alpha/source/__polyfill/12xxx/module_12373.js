// Module ID: 12373
// Function ID: 12374
// Dependencies: [12302, 12303, 12275]

// Module 12373
import _mod12302 from "module_12302" /* 12302 */;
import _mod12303 from "module_12303" /* 12303 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12302;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12303.DEBUG_BUILD) {
          const logger3 = tmp(12275).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12303.DEBUG_BUILD) {
        const logger2 = tmp(12275).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12303.DEBUG_BUILD) {
      const logger = tmp(12275).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12302;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12303.DEBUG_BUILD) {
          const logger3 = tmp(12275).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12303.DEBUG_BUILD) {
        const logger2 = tmp(12275).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12303.DEBUG_BUILD) {
      const logger = tmp(12275).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
