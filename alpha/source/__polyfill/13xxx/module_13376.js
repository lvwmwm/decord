// Module ID: 13376
// Function ID: 13377
// Dependencies: [13305, 13306, 13278]

// Module 13376
import _mod13305 from "module_13305" /* 13305 */;
import _mod13306 from "module_13306" /* 13306 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13305;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13306.DEBUG_BUILD) {
          const logger3 = tmp(13278).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13306.DEBUG_BUILD) {
        const logger2 = tmp(13278).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13306.DEBUG_BUILD) {
      const logger = tmp(13278).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13305;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13306.DEBUG_BUILD) {
          const logger3 = tmp(13278).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13306.DEBUG_BUILD) {
        const logger2 = tmp(13278).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13306.DEBUG_BUILD) {
      const logger = tmp(13278).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
