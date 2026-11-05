// Module ID: 13379
// Function ID: 13380
// Dependencies: [13308, 13309, 13281]

// Module 13379
import _mod13308 from "module_13308" /* 13308 */;
import _mod13309 from "module_13309" /* 13309 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13308;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13309.DEBUG_BUILD) {
          const logger3 = tmp(13281).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13309.DEBUG_BUILD) {
        const logger2 = tmp(13281).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13309.DEBUG_BUILD) {
      const logger = tmp(13281).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13308;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13309.DEBUG_BUILD) {
          const logger3 = tmp(13281).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13309.DEBUG_BUILD) {
        const logger2 = tmp(13281).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13309.DEBUG_BUILD) {
      const logger = tmp(13281).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
