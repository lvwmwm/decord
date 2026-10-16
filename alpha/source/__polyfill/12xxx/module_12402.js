// Module ID: 12402
// Function ID: 12403
// Dependencies: [12331, 12332, 12304]

// Module 12402
import _mod12331 from "module_12331" /* 12331 */;
import _mod12332 from "module_12332" /* 12332 */;


export const profiler = {
  startProfiler() {
    const obj = _mod12331;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod12332.DEBUG_BUILD) {
          const logger3 = tmp(12304).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12332.DEBUG_BUILD) {
        const logger2 = tmp(12304).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12332.DEBUG_BUILD) {
      const logger = tmp(12304).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod12331;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod12332.DEBUG_BUILD) {
          const logger3 = tmp(12304).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod12332.DEBUG_BUILD) {
        const logger2 = tmp(12304).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod12332.DEBUG_BUILD) {
      const logger = tmp(12304).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
