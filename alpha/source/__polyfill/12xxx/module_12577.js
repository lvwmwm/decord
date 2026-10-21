// Module ID: 12577
// Function ID: 12578
// Dependencies: [12506, 12507, 12479]

// Module 12577
import _mod12506 from "module_12506" /* 12506 */;
import _mod12507 from "module_12507" /* 12507 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12506;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12507.DEBUG_BUILD) {
          const logger3 = tmp(12479).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12507.DEBUG_BUILD) {
        const logger2 = tmp(12479).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12507.DEBUG_BUILD) {
      const logger = tmp(12479).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12506;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12507.DEBUG_BUILD) {
          const logger3 = tmp(12479).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12507.DEBUG_BUILD) {
        const logger2 = tmp(12479).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12507.DEBUG_BUILD) {
      const logger = tmp(12479).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
