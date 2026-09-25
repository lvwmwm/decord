// Module ID: 12393
// Function ID: 12394
// Dependencies: [12322, 12323, 12295]

// Module 12393
import _mod12322 from "module_12322" /* 12322 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12322.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12323).DEBUG_BUILD) {
          const logger3 = tmp(12295).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12323).DEBUG_BUILD) {
        const logger2 = tmp(12295).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12323).DEBUG_BUILD) {
      const logger = tmp(12295).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12322.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12323).DEBUG_BUILD) {
          const logger3 = tmp(12295).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12323).DEBUG_BUILD) {
        const logger2 = tmp(12295).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12323).DEBUG_BUILD) {
      const logger = tmp(12295).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
