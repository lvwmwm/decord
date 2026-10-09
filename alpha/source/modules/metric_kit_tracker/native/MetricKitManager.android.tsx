// Module ID: 18043
// Function ID: 18044
// Name: MetricKitManager
// Dependencies: [6804, 2]

// Module 18043 (MetricKitManager)
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6804 */;
import size from "module_2" /* 2 */;

class MetricKitManager extends AutomaticLifecycleManager {
  _initialize() {

  }
  _terminate() {

  }
}
const prototype = MetricKitManager.prototype;
const metricKitManager = new MetricKitManager();
const result = size.fileFinishedImporting("modules/metric_kit_tracker/native/MetricKitManager.android.tsx");

export default metricKitManager;
