// Module ID: 12140
// Function ID: 12141
// Dependencies: [12069, 12070, 12042]

// Module 12140
import _mod12069 from "module_12069" /* 12069 */;
import _mod12070 from "module_12070" /* 12070 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12069;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12070.DEBUG_BUILD) {
          const logger3 = tmp(12042).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12070.DEBUG_BUILD) {
        const logger2 = tmp(12042).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12070.DEBUG_BUILD) {
      const logger = tmp(12042).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12069;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12070.DEBUG_BUILD) {
          const logger3 = tmp(12042).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12070.DEBUG_BUILD) {
        const logger2 = tmp(12042).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12070.DEBUG_BUILD) {
      const logger = tmp(12042).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
