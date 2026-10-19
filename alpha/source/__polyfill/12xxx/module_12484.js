// Module ID: 12484
// Function ID: 12485
// Dependencies: [12413, 12414, 12386]

// Module 12484
import _mod12413 from "module_12413" /* 12413 */;
import _mod12414 from "module_12414" /* 12414 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12413;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12414.DEBUG_BUILD) {
          const logger3 = tmp(12386).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12414.DEBUG_BUILD) {
        const logger2 = tmp(12386).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12414.DEBUG_BUILD) {
      const logger = tmp(12386).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12413;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12414.DEBUG_BUILD) {
          const logger3 = tmp(12386).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12414.DEBUG_BUILD) {
        const logger2 = tmp(12386).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12414.DEBUG_BUILD) {
      const logger = tmp(12386).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
