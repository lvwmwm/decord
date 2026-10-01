// Module ID: 12623
// Function ID: 12624
// Dependencies: [12552, 12553, 12525]

// Module 12623
import _mod12552 from "module_12552" /* 12552 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12552.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12553).DEBUG_BUILD) {
          const logger3 = tmp(12525).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12553).DEBUG_BUILD) {
        const logger2 = tmp(12525).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12553).DEBUG_BUILD) {
      const logger = tmp(12525).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12552.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12553).DEBUG_BUILD) {
          const logger3 = tmp(12525).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12553).DEBUG_BUILD) {
        const logger2 = tmp(12525).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12553).DEBUG_BUILD) {
      const logger = tmp(12525).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
