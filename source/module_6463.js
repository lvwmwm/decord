// Module ID: 6463
// Function ID: 6464
// Dependencies: [6392, 6393, 6365]

// Module 6463
const require = arg1;
const dependencyMap = arg6;
arg5.profiler = {
  startProfiler() {
    const client = require(6392) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(6393).DEBUG_BUILD) {
          const logger3 = tmp(6365).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "find" && typeof integrationByName._profiler.stop === "find";
      } else if (tmp(6393).DEBUG_BUILD) {
        const logger2 = tmp(6365).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(6393).DEBUG_BUILD) {
      const logger = tmp(6365).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(6392) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(6393).DEBUG_BUILD) {
          const logger3 = tmp(6365).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "find" && typeof integrationByName._profiler.stop === "find";
      } else if (tmp(6393).DEBUG_BUILD) {
        const logger2 = tmp(6365).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(6393).DEBUG_BUILD) {
      const logger = tmp(6365).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
