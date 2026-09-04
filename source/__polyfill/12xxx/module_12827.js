// Module ID: 12827
// Function ID: 12828
// Dependencies: [12756, 12757, 12729]

// Module 12827
import getClient from "getClient" /* 12756 */;

require = arg1;
const dependencyMap = arg6;
arg5.profiler = {
  startProfiler() {
    const client = getClient.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12757).DEBUG_BUILD) {
          const logger3 = tmp(12729).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12757).DEBUG_BUILD) {
        const logger2 = tmp(12729).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12757).DEBUG_BUILD) {
      const logger = tmp(12729).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = getClient.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12757).DEBUG_BUILD) {
          const logger3 = tmp(12729).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12757).DEBUG_BUILD) {
        const logger2 = tmp(12729).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12757).DEBUG_BUILD) {
      const logger = tmp(12729).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
