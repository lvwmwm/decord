// Module ID: 7492
// Function ID: 7493
// Dependencies: [7421, 7422, 7394]

// Module 7492
const require = arg1;
const dependencyMap = arg6;
arg5.profiler = {
  startProfiler() {
    const client = require(7421) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(7422).DEBUG_BUILD) {
          const logger3 = tmp(7394).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(7422).DEBUG_BUILD) {
        const logger2 = tmp(7394).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(7422).DEBUG_BUILD) {
      const logger = tmp(7394).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(7421) /* getClient */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(7422).DEBUG_BUILD) {
          const logger3 = tmp(7394).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(7422).DEBUG_BUILD) {
        const logger2 = tmp(7394).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(7422).DEBUG_BUILD) {
      const logger = tmp(7394).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
