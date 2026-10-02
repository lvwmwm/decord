// Module ID: 12409
// Function ID: 12410
// Dependencies: [12338, 12339, 12311]

// Module 12409
import _mod12338 from "module_12338" /* 12338 */;
import _mod12339 from "module_12339" /* 12339 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12338;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12339.DEBUG_BUILD) {
          const logger3 = tmp(12311).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12339.DEBUG_BUILD) {
        const logger2 = tmp(12311).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12339.DEBUG_BUILD) {
      const logger = tmp(12311).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12338;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12339.DEBUG_BUILD) {
          const logger3 = tmp(12311).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12339.DEBUG_BUILD) {
        const logger2 = tmp(12311).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12339.DEBUG_BUILD) {
      const logger = tmp(12311).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
