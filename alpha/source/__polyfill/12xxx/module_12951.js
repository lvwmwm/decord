// Module ID: 12951
// Function ID: 12952
// Dependencies: [12880, 12881, 12853]

// Module 12951
import _mod12880 from "module_12880" /* 12880 */;
import _mod12881 from "module_12881" /* 12881 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12880;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12881.DEBUG_BUILD) {
          const logger3 = tmp(12853).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12881.DEBUG_BUILD) {
        const logger2 = tmp(12853).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12881.DEBUG_BUILD) {
      const logger = tmp(12853).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12880;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12881.DEBUG_BUILD) {
          const logger3 = tmp(12853).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12881.DEBUG_BUILD) {
        const logger2 = tmp(12853).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12881.DEBUG_BUILD) {
      const logger = tmp(12853).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
