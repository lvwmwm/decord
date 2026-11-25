// Module ID: 19694
// Function ID: 19695
// Name: ImageLoadMetricsManager
// Dependencies: [17, 1245, 1193, 5950, 1071, 19695, 1450, 7444, 19696, 1255, 2]

// Module 19694 (ImageLoadMetricsManager)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import react_nativeDefault from "react-native" /* 19695 */;
import buildImageLoadMetricProperties from "buildImageLoadMetricProperties" /* 19696 */;
import react_native from "react-native" /* 17 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1245 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1193 */;
import NetworkStore from "NetworkStore" /* 5950 */;
import ApexExperiment from "ApexExperiment" /* 1450 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;
import size from "module_2" /* 2 */;

let NativeEventEmitter;
let c3;
({ PixelRatio: c3, NativeEventEmitter } = react_native);
const AnalyticEvents = Constants.AnalyticEvents;
const nativeEventEmitter = new NativeEventEmitter(react_nativeDefault);
let obj = { name: "2026-10-mobile-image-load-metrics", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_9 = ApexExperiment.createApexExperiment(obj);
class ImageLoadMetricsManager extends AutomaticLifecycleManager {
  constructor() {
    let config;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleExperimentChange = function handleExperimentChange() {
      const enabled = config.getConfig({ location: "image_load_metrics_manager" }).enabled;
      if (enabled !== null != require.subscription) {
        if (enabled) {
          require.subscription = nativeEventEmitter.addListener("ImageLoadMetricsBatchEvent", require.handleImageLoadMetricsBatch);
          const obj2 = react_nativeDefault;
          obj2.setEnabled(true);
        } else {
          require.stopRecording();
        }
      }
    };
    const items = [ApexExperimentStore, applyArgumentsResult.handleExperimentChange];
    const items1 = [items];
    applyArgumentsResult.stores = new Map(items1);
    applyArgumentsResult.handleImageLoadMetricsBatch = function handleImageLoadMetricsBatch(metrics) {
      metrics = metrics.metrics;
      const item = metrics.forEach((item) => closure_1_0.trackImageLoadMetric(item));
    };
    new Map(items1);
    return applyArgumentsResult;
  }
  _terminate() {
    this.stopRecording();
  }
  stopRecording() {
    const obj = react_nativeDefault;
    obj.setEnabled(false);
    const subscription = this.subscription;
    if (subscription != null) {
      subscription.remove();
    }
    this.subscription = undefined;
  }
  trackImageLoadMetric(item) {
    const obj = buildImageLoadMetricProperties;
    const imageLoadMetricProperties = obj.buildImageLoadMetricProperties(item, _false.get());
    if (null != imageLoadMetricProperties) {
      const obj3 = { connection_type: NetworkStore.getType(), effective_connection_speed: NetworkStore.getEffectiveConnectionSpeed(), service_provider: NetworkStore.getServiceProvider() };
      const track = AnalyticsUtilsDefault.track;
      const IMAGE_LOADING_COMPLETED = AnalyticEvents.IMAGE_LOADING_COMPLETED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(imageLoadMetricProperties);
      ({ dataSavingMode: obj2.data_saving_mode, dataSavingMode: obj2.low_quality_image_mode } = UnsyncedUserSettingsStore);
      track(IMAGE_LOADING_COMPLETED, obj3);
    }
  }
}
const prototype = ImageLoadMetricsManager.prototype;
const imageLoadMetricsManager = new ImageLoadMetricsManager();
const result = size.fileFinishedImporting("modules/media/native/ImageLoadMetricsManager.native.tsx");

export default imageLoadMetricsManager;
