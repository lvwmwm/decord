// Module ID: 12467
// Function ID: 12468
// Dependencies: [12396, 12397, 12369]

// Module 12467
import _mod12396 from "module_12396" /* 12396 */;
import _mod12397 from "module_12397" /* 12397 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12396;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12397.DEBUG_BUILD) {
          const logger3 = tmp(12369).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12397.DEBUG_BUILD) {
        const logger2 = tmp(12369).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12397.DEBUG_BUILD) {
      const logger = tmp(12369).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12396;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12397.DEBUG_BUILD) {
          const logger3 = tmp(12369).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12397.DEBUG_BUILD) {
        const logger2 = tmp(12369).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12397.DEBUG_BUILD) {
      const logger = tmp(12369).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
