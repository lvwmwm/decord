// Module ID: 12676
// Function ID: 12677
// Dependencies: [12605, 12606, 12578]

// Module 12676
import _mod12605 from "module_12605" /* 12605 */;
import _mod12606 from "module_12606" /* 12606 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12605;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12606.DEBUG_BUILD) {
          const logger3 = tmp(12578).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12606.DEBUG_BUILD) {
        const logger2 = tmp(12578).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12606.DEBUG_BUILD) {
      const logger = tmp(12578).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12605;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12606.DEBUG_BUILD) {
          const logger3 = tmp(12578).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12606.DEBUG_BUILD) {
        const logger2 = tmp(12578).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12606.DEBUG_BUILD) {
      const logger = tmp(12578).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
