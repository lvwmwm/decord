// Module ID: 12709
// Function ID: 12710
// Dependencies: [12638, 12639, 12611]

// Module 12709
import _mod12638 from "module_12638" /* 12638 */;
import _mod12639 from "module_12639" /* 12639 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12638;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12639.DEBUG_BUILD) {
          const logger3 = tmp(12611).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12639.DEBUG_BUILD) {
        const logger2 = tmp(12611).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12639.DEBUG_BUILD) {
      const logger = tmp(12611).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12638;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12639.DEBUG_BUILD) {
          const logger3 = tmp(12611).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12639.DEBUG_BUILD) {
        const logger2 = tmp(12611).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12639.DEBUG_BUILD) {
      const logger = tmp(12611).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
