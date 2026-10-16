// Module ID: 12396
// Function ID: 12397
// Dependencies: [12325, 12326, 12298]

// Module 12396
import _mod12325 from "module_12325" /* 12325 */;
import _mod12326 from "module_12326" /* 12326 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12325;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12326.DEBUG_BUILD) {
          const logger3 = tmp(12298).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12326.DEBUG_BUILD) {
        const logger2 = tmp(12298).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12326.DEBUG_BUILD) {
      const logger = tmp(12298).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12325;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12326.DEBUG_BUILD) {
          const logger3 = tmp(12298).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12326.DEBUG_BUILD) {
        const logger2 = tmp(12298).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12326.DEBUG_BUILD) {
      const logger = tmp(12298).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
