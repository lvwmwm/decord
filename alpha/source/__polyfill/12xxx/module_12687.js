// Module ID: 12687
// Function ID: 12688
// Dependencies: [12616, 12617, 12589]

// Module 12687
import _mod12616 from "module_12616" /* 12616 */;
import _mod12617 from "module_12617" /* 12617 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12616;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12617.DEBUG_BUILD) {
          const logger3 = tmp(12589).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12617.DEBUG_BUILD) {
        const logger2 = tmp(12589).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12617.DEBUG_BUILD) {
      const logger = tmp(12589).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12616;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12617.DEBUG_BUILD) {
          const logger3 = tmp(12589).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12617.DEBUG_BUILD) {
        const logger2 = tmp(12589).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12617.DEBUG_BUILD) {
      const logger = tmp(12589).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
