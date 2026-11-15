// Module ID: 13407
// Function ID: 13408
// Dependencies: [13336, 13337, 13309]

// Module 13407
import _mod13336 from "module_13336" /* 13336 */;
import _mod13337 from "module_13337" /* 13337 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13336;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13337.DEBUG_BUILD) {
          const logger3 = tmp(13309).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13337.DEBUG_BUILD) {
        const logger2 = tmp(13309).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13337.DEBUG_BUILD) {
      const logger = tmp(13309).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13336;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13337.DEBUG_BUILD) {
          const logger3 = tmp(13309).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13337.DEBUG_BUILD) {
        const logger2 = tmp(13309).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13337.DEBUG_BUILD) {
      const logger = tmp(13309).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
