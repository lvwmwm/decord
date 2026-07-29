// Module ID: 6466
// Function ID: 6467
// Dependencies: [6395, 6396, 6368]

// Module 6466
const require = arg1;
const dependencyMap = arg6;
arg5.profiler = {
  startProfiler() {
    const client = require(6395) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(6396).DEBUG_BUILD) {
          const logger3 = tmp(6368).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "find" && typeof integrationByName._profiler.stop === "find";
      } else if (tmp(6396).DEBUG_BUILD) {
        const logger2 = tmp(6368).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(6396).DEBUG_BUILD) {
      const logger = tmp(6368).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(6395) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(6396).DEBUG_BUILD) {
          const logger3 = tmp(6368).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "find" && typeof integrationByName._profiler.stop === "find";
      } else if (tmp(6396).DEBUG_BUILD) {
        const logger2 = tmp(6368).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(6396).DEBUG_BUILD) {
      const logger = tmp(6368).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
