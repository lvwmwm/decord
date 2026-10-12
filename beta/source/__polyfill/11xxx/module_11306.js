// Module ID: 11306
// Function ID: 11307
// Dependencies: [11235, 11236, 11208]

// Module 11306
import _mod11235 from "module_11235" /* 11235 */;
import _mod11236 from "module_11236" /* 11236 */;


export const profiler = {
  startProfiler() {
    const obj = _mod11235;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod11236.DEBUG_BUILD) {
          const logger3 = tmp(11208).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod11236.DEBUG_BUILD) {
        const logger2 = tmp(11208).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11236.DEBUG_BUILD) {
      const logger = tmp(11208).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod11235;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod11236.DEBUG_BUILD) {
          const logger3 = tmp(11208).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod11236.DEBUG_BUILD) {
        const logger2 = tmp(11208).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11236.DEBUG_BUILD) {
      const logger = tmp(11208).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
