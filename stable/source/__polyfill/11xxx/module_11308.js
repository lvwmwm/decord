// Module ID: 11308
// Function ID: 11309
// Dependencies: [11237, 11238, 11210]

// Module 11308
import _mod11237 from "module_11237" /* 11237 */;
import _mod11238 from "module_11238" /* 11238 */;


export const profiler = {
  startProfiler() {
    const obj = _mod11237;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod11238.DEBUG_BUILD) {
          const logger3 = tmp(11210).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod11238.DEBUG_BUILD) {
        const logger2 = tmp(11210).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11238.DEBUG_BUILD) {
      const logger = tmp(11210).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod11237;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod11238.DEBUG_BUILD) {
          const logger3 = tmp(11210).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod11238.DEBUG_BUILD) {
        const logger2 = tmp(11210).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11238.DEBUG_BUILD) {
      const logger = tmp(11210).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
