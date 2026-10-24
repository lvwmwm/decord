// Module ID: 12671
// Function ID: 12672
// Dependencies: [12600, 12601, 12573]

// Module 12671
import _mod12600 from "module_12600" /* 12600 */;
import _mod12601 from "module_12601" /* 12601 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12600;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12601.DEBUG_BUILD) {
          const logger3 = tmp(12573).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12601.DEBUG_BUILD) {
        const logger2 = tmp(12573).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12601.DEBUG_BUILD) {
      const logger = tmp(12573).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12600;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12601.DEBUG_BUILD) {
          const logger3 = tmp(12573).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12601.DEBUG_BUILD) {
        const logger2 = tmp(12573).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12601.DEBUG_BUILD) {
      const logger = tmp(12573).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
