// Module ID: 6410
// Function ID: 57625
// Name: getMetricsAggregatorForClient
// Dependencies: [6407, 6411]

// Module 6410 (getMetricsAggregatorForClient)
const require = arg1;
const dependencyMap = arg6;
arg5.metricsDefault = {
  increment(arg0) {
    let num = 1;
    if (arguments.length > 1) {
      num = 1;
      if (undefined !== arguments[1]) {
        num = arguments[1];
      }
    }
    let tmp;
    if (arguments.length > 2) {
      tmp = arguments[2];
    }
    const metrics = require(6407) /* getMetricsAggregatorForClient */.metrics;
    metrics.increment(require(6411) /* MetricsAggregator */.MetricsAggregator, arg0, num, tmp);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = require(6407) /* getMetricsAggregatorForClient */.metrics;
    metrics.distribution(require(6411) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = require(6407) /* getMetricsAggregatorForClient */.metrics;
    const result = metrics.set(require(6411) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = require(6407) /* getMetricsAggregatorForClient */.metrics;
    metrics.gauge(require(6411) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = "second";
    if (arguments.length > 2) {
      str = "second";
      if (undefined !== arguments[2]) {
        str = arguments[2];
      }
    }
    let tmp;
    if (arguments.length > 3) {
      tmp = arguments[3];
    }
    const metrics = require(6407) /* getMetricsAggregatorForClient */.metrics;
    return metrics.timing(require(6411) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, str, tmp);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = require(6407) /* getMetricsAggregatorForClient */.metrics;
    return metrics.getMetricsAggregatorForClient(arg0, require(6411) /* MetricsAggregator */.MetricsAggregator);
  }
};
