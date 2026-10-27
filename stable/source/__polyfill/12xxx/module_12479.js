// Module ID: 12479
// Function ID: 12480
// Dependencies: [12408, 12409, 12381]

// Module 12479
import _mod12408 from "module_12408" /* 12408 */;
import _mod12409 from "module_12409" /* 12409 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12408;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12409.DEBUG_BUILD) {
          const logger3 = tmp(12381).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12409.DEBUG_BUILD) {
        const logger2 = tmp(12381).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12409.DEBUG_BUILD) {
      const logger = tmp(12381).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12408;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12409.DEBUG_BUILD) {
          const logger3 = tmp(12381).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12409.DEBUG_BUILD) {
        const logger2 = tmp(12381).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12409.DEBUG_BUILD) {
      const logger = tmp(12381).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
