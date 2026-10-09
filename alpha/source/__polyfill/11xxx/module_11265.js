// Module ID: 11265
// Function ID: 11266
// Dependencies: [11194, 11195, 11167]

// Module 11265
import _mod11194 from "module_11194" /* 11194 */;
import _mod11195 from "module_11195" /* 11195 */;


export const profiler = {
  startProfiler() {
    const obj = _mod11194;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod11195.DEBUG_BUILD) {
          const logger3 = tmp(11167).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod11195.DEBUG_BUILD) {
        const logger2 = tmp(11167).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11195.DEBUG_BUILD) {
      const logger = tmp(11167).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod11194;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod11195.DEBUG_BUILD) {
          const logger3 = tmp(11167).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod11195.DEBUG_BUILD) {
        const logger2 = tmp(11167).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod11195.DEBUG_BUILD) {
      const logger = tmp(11167).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
