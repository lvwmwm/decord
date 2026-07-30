// Module ID: 6464
// Function ID: 6465
// Name: addToMetricsAggregator
// Dependencies: [6461, 6465]

// Module 6464 (addToMetricsAggregator)
const require = arg1;
const dependencyMap = arg6;
arg5.metricsDefault = {
  increment(arg0) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    const metrics = require(6461) /* addToMetricsAggregator */.metrics;
    metrics.increment(require(6465) /* MetricsAggregator */.MetricsAggregator, arg0, num, arg2);
  },
  distribution(arg0, arg1, arg2) {
    const metrics = require(6461) /* addToMetricsAggregator */.metrics;
    metrics.distribution(require(6465) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  set(arg0, arg1, arg2) {
    const metrics = require(6461) /* addToMetricsAggregator */.metrics;
    const result = metrics.set(require(6465) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  gauge(arg0, arg1, arg2) {
    const metrics = require(6461) /* addToMetricsAggregator */.metrics;
    metrics.gauge(require(6465) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, arg2);
  },
  timing(arg0, arg1) {
    let str = arg2;
    if (arg2 === undefined) {
      str = "second";
    }
    const metrics = require(6461) /* addToMetricsAggregator */.metrics;
    return metrics.timing(require(6465) /* MetricsAggregator */.MetricsAggregator, arg0, arg1, str, arg3);
  },
  getMetricsAggregatorForClient(arg0) {
    const metrics = require(6461) /* addToMetricsAggregator */.metrics;
    return metrics.getMetricsAggregatorForClient(arg0, require(6465) /* MetricsAggregator */.MetricsAggregator);
  }
};
