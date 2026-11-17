// Module ID: 9908
// Function ID: 9909
// Dependencies: [9837, 9838, 9810]

// Module 9908
import _mod9837 from "module_9837" /* 9837 */;
import _mod9838 from "module_9838" /* 9838 */;


export const profiler = {
  startProfiler() {
    const obj = _mod9837;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod9838.DEBUG_BUILD) {
          const logger3 = tmp(9810).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod9838.DEBUG_BUILD) {
        const logger2 = tmp(9810).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9838.DEBUG_BUILD) {
      const logger = tmp(9810).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod9837;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod9838.DEBUG_BUILD) {
          const logger3 = tmp(9810).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod9838.DEBUG_BUILD) {
        const logger2 = tmp(9810).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod9838.DEBUG_BUILD) {
      const logger = tmp(9810).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
