// Module ID: 12612
// Function ID: 12613
// Dependencies: [12541, 12542, 12514]

// Module 12612
import _mod12541 from "module_12541" /* 12541 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12541.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12542).DEBUG_BUILD) {
          const logger3 = tmp(12514).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12542).DEBUG_BUILD) {
        const logger2 = tmp(12514).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12542).DEBUG_BUILD) {
      const logger = tmp(12514).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12541.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12542).DEBUG_BUILD) {
          const logger3 = tmp(12514).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12542).DEBUG_BUILD) {
        const logger2 = tmp(12514).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12542).DEBUG_BUILD) {
      const logger = tmp(12514).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
