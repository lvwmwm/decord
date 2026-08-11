// Module ID: 7555
// Function ID: 7556
// Name: addToMetricsAggregator
// Dependencies: [7552, 7556]

// Module 7555 (addToMetricsAggregator)
const require = arg1;
const dependencyMap = arg6;
arg5.metricsDefault = {
  increment(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const metrics = require(7552) /* addToMetricsAggregator */.metrics;
    metrics.increment(require(7556) /* MetricsAggregator */.MetricsAggregator, arg0, num, arg2);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = require(7552) /* addToMetricsAggregator */.metrics;
    metrics.distribution(require(7556) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = require(7552) /* addToMetricsAggregator */.metrics;
    const result = metrics.set(require(7556) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = require(7552) /* addToMetricsAggregator */.metrics;
    metrics.gauge(require(7556) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "second";
    }
    const metrics = require(7552) /* addToMetricsAggregator */.metrics;
    return metrics.timing(require(7556) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, str, arg3);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = require(7552) /* addToMetricsAggregator */.metrics;
    return metrics.getMetricsAggregatorForClient(arg0, require(7556) /* MetricsAggregator */.MetricsAggregator);
  }
};
