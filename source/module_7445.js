// Module ID: 7445
// Function ID: 7446
// Dependencies: [7374, 7375, 7347]

// Module 7445
const require = arg1;
const dependencyMap = arg6;
arg5.profiler = {
  startProfiler() {
    const client = require(7374) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(7375).DEBUG_BUILD) {
          const logger3 = tmp(7347).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(7375).DEBUG_BUILD) {
        const logger2 = tmp(7347).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(7375).DEBUG_BUILD) {
      const logger = tmp(7347).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(7374) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(7375).DEBUG_BUILD) {
          const logger3 = tmp(7347).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(7375).DEBUG_BUILD) {
        const logger2 = tmp(7347).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(7375).DEBUG_BUILD) {
      const logger = tmp(7347).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
