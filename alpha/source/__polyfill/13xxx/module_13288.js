// Module ID: 13288
// Function ID: 13289
// Dependencies: [13217, 13218, 13190]

// Module 13288
import _mod13217 from "module_13217" /* 13217 */;
import _mod13218 from "module_13218" /* 13218 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13217;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13218.DEBUG_BUILD) {
          const logger3 = tmp(13190).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13218.DEBUG_BUILD) {
        const logger2 = tmp(13190).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13218.DEBUG_BUILD) {
      const logger = tmp(13190).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13217;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13218.DEBUG_BUILD) {
          const logger3 = tmp(13190).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13218.DEBUG_BUILD) {
        const logger2 = tmp(13190).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13218.DEBUG_BUILD) {
      const logger = tmp(13190).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
