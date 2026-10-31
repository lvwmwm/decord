// Module ID: 13137
// Function ID: 13138
// Dependencies: [13066, 13067, 13039]

// Module 13137
import _mod13066 from "module_13066" /* 13066 */;
import _mod13067 from "module_13067" /* 13067 */;


export const profiler = {
  startProfiler() {
    const obj = _mod13066;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (_mod13067.DEBUG_BUILD) {
          const logger3 = tmp(13039).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13067.DEBUG_BUILD) {
        const logger2 = tmp(13039).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13067.DEBUG_BUILD) {
      const logger = tmp(13039).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const obj = _mod13066;
    const client = obj.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        const tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (_mod13067.DEBUG_BUILD) {
          const logger3 = tmp(13039).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
      } else if (_mod13067.DEBUG_BUILD) {
        const logger2 = tmp(13039).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (_mod13067.DEBUG_BUILD) {
      const logger = tmp(13039).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
