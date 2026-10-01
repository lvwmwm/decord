// Module ID: 12411
// Function ID: 12412
// Dependencies: [12340, 12341, 12313]

// Module 12411
import _mod12340 from "module_12340" /* 12340 */;
import _mod12341 from "module_12341" /* 12341 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12340;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12341.DEBUG_BUILD) {
          const logger3 = tmp(12313).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12341.DEBUG_BUILD) {
        const logger2 = tmp(12313).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12341.DEBUG_BUILD) {
      const logger = tmp(12313).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12340;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12341.DEBUG_BUILD) {
          const logger3 = tmp(12313).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12341.DEBUG_BUILD) {
        const logger2 = tmp(12313).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12341.DEBUG_BUILD) {
      const logger = tmp(12313).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
