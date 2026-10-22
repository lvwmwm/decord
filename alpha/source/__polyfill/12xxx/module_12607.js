// Module ID: 12607
// Function ID: 12608
// Dependencies: [12536, 12537, 12509]

// Module 12607
import _mod12536 from "module_12536" /* 12536 */;
import _mod12537 from "module_12537" /* 12537 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12536;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12537.DEBUG_BUILD) {
          const logger3 = tmp(12509).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12537.DEBUG_BUILD) {
        const logger2 = tmp(12509).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12537.DEBUG_BUILD) {
      const logger = tmp(12509).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12536;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12537.DEBUG_BUILD) {
          const logger3 = tmp(12509).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12537.DEBUG_BUILD) {
        const logger2 = tmp(12509).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12537.DEBUG_BUILD) {
      const logger = tmp(12509).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
