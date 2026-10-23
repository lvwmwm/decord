// Module ID: 12637
// Function ID: 12638
// Dependencies: [12566, 12567, 12539]

// Module 12637
import _mod12566 from "module_12566" /* 12566 */;
import _mod12567 from "module_12567" /* 12567 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12566;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12567.DEBUG_BUILD) {
          const logger3 = tmp(12539).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12567.DEBUG_BUILD) {
        const logger2 = tmp(12539).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12567.DEBUG_BUILD) {
      const logger = tmp(12539).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12566;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12567.DEBUG_BUILD) {
          const logger3 = tmp(12539).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12567.DEBUG_BUILD) {
        const logger2 = tmp(12539).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12567.DEBUG_BUILD) {
      const logger = tmp(12539).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
