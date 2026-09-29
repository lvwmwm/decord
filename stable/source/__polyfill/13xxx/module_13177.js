// Module ID: 13177
// Function ID: 13178
// Dependencies: [13106, 13107, 13079]

// Module 13177
import _mod13106 from "module_13106" /* 13106 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13106.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(13107).DEBUG_BUILD) {
          const logger3 = tmp(13079).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(13107).DEBUG_BUILD) {
        const logger2 = tmp(13079).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(13107).DEBUG_BUILD) {
      const logger = tmp(13079).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13106.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(13107).DEBUG_BUILD) {
          const logger3 = tmp(13079).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(13107).DEBUG_BUILD) {
        const logger2 = tmp(13079).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(13107).DEBUG_BUILD) {
      const logger = tmp(13079).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
