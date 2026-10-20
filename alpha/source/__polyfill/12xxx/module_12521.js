// Module ID: 12521
// Function ID: 12522
// Dependencies: [12450, 12451, 12423]

// Module 12521
import _mod12450 from "module_12450" /* 12450 */;
import _mod12451 from "module_12451" /* 12451 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12450;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12451.DEBUG_BUILD) {
          const logger3 = tmp(12423).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12451.DEBUG_BUILD) {
        const logger2 = tmp(12423).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12451.DEBUG_BUILD) {
      const logger = tmp(12423).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12450;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12451.DEBUG_BUILD) {
          const logger3 = tmp(12423).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12451.DEBUG_BUILD) {
        const logger2 = tmp(12423).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12451.DEBUG_BUILD) {
      const logger = tmp(12423).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
