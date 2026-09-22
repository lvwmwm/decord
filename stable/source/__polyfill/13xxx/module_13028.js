// Module ID: 13028
// Function ID: 13029
// Dependencies: [12957, 12958, 12930]

// Module 13028
import _mod12957 from "module_12957" /* 12957 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12957.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12958).DEBUG_BUILD) {
          const logger3 = tmp(12930).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12958).DEBUG_BUILD) {
        const logger2 = tmp(12930).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12958).DEBUG_BUILD) {
      const logger = tmp(12930).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12957.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12958).DEBUG_BUILD) {
          const logger3 = tmp(12930).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12958).DEBUG_BUILD) {
        const logger2 = tmp(12930).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12958).DEBUG_BUILD) {
      const logger = tmp(12930).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
