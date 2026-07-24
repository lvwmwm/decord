// Module ID: 908
// Function ID: 9967
// Name: isProfilingIntegrationWithProfiler
// Dependencies: [825, 800, 801]

// Module 908 (isProfilingIntegrationWithProfiler)
const require = arg1;
const dependencyMap = arg6;
function isProfilingIntegrationWithProfiler(_profiler) {
  let tmp2 = !tmp;
  if (!!_profiler) {
    tmp2 = undefined !== _profiler._profiler;
  }
  if (tmp2) {
    tmp2 = "function" === typeof _profiler._profiler.start;
  }
  if (tmp2) {
    tmp2 = "function" === typeof _profiler._profiler.stop;
  }
  return tmp2;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.profiler = {
  startProfiler() {
    const client = require(825) /* getCurrentScope */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (isProfilingIntegrationWithProfiler(integrationByName)) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (require(800).DEBUG_BUILD) {
          const debug3 = require(801) /* consoleSandbox */.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (require(800).DEBUG_BUILD) {
        const debug2 = require(801) /* consoleSandbox */.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (require(800).DEBUG_BUILD) {
      const debug = require(801) /* consoleSandbox */.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = require(825) /* getCurrentScope */.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (isProfilingIntegrationWithProfiler(integrationByName)) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (require(800).DEBUG_BUILD) {
          const debug3 = require(801) /* consoleSandbox */.debug;
          debug3.warn("Profiler is not available on profiling integration.");
        }
      } else if (require(800).DEBUG_BUILD) {
        const debug2 = require(801) /* consoleSandbox */.debug;
        debug2.warn("ProfilingIntegration is not available");
      }
    } else if (require(800).DEBUG_BUILD) {
      const debug = require(801) /* consoleSandbox */.debug;
      debug.warn("No Sentry client available, profiling is not started");
    }
  }
};
