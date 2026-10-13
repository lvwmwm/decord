// Module ID: 12104
// Function ID: 12105
// Dependencies: [12033, 12034, 12006]

// Module 12104
import _mod12033 from "module_12033" /* 12033 */;
import _mod12034 from "module_12034" /* 12034 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12033;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12034.DEBUG_BUILD) {
          const logger3 = tmp(12006).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12034.DEBUG_BUILD) {
        const logger2 = tmp(12006).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12034.DEBUG_BUILD) {
      const logger = tmp(12006).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12033;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12034.DEBUG_BUILD) {
          const logger3 = tmp(12006).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12034.DEBUG_BUILD) {
        const logger2 = tmp(12006).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12034.DEBUG_BUILD) {
      const logger = tmp(12006).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
