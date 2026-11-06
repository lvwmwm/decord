// Module ID: 13353
// Function ID: 13354
// Dependencies: [13282, 13283, 13255]

// Module 13353
import _mod13282 from "module_13282" /* 13282 */;
import _mod13283 from "module_13283" /* 13283 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13282;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13283.DEBUG_BUILD) {
          const logger3 = tmp(13255).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13283.DEBUG_BUILD) {
        const logger2 = tmp(13255).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13283.DEBUG_BUILD) {
      const logger = tmp(13255).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13282;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13283.DEBUG_BUILD) {
          const logger3 = tmp(13255).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13283.DEBUG_BUILD) {
        const logger2 = tmp(13255).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13283.DEBUG_BUILD) {
      const logger = tmp(13255).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
