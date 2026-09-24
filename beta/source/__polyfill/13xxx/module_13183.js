// Module ID: 13183
// Function ID: 13184
// Dependencies: [13112, 13113, 13085]

// Module 13183
import _mod13112 from "module_13112" /* 13112 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod13112.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(13113).DEBUG_BUILD) {
          const logger3 = tmp(13085).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(13113).DEBUG_BUILD) {
        const logger2 = tmp(13085).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(13113).DEBUG_BUILD) {
      const logger = tmp(13085).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod13112.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(13113).DEBUG_BUILD) {
          const logger3 = tmp(13085).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(13113).DEBUG_BUILD) {
        const logger2 = tmp(13085).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(13113).DEBUG_BUILD) {
      const logger = tmp(13085).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
