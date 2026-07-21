// Module ID: 10930
// Function ID: 84997
// Name: BundleUpdaterManager
// Dependencies: []

// Module 10930 (BundleUpdaterManager)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("BundleUpdater");
const BundleUpdaterManager = tmp2.NativeModules.BundleUpdaterManager;
const nativeEventEmitter = new tmp2.NativeEventEmitter(BundleUpdaterManager);
let closure_10 = {};
const tmp6 = () => {
  class BundleUpdater {
    constructor() {
      tmp = closure_4(this, BundleUpdater);
      return;
    }
  }
  const importDefault = BundleUpdater;
  let obj = {
    key: "getInitialBundleDownloaded",
    value() {
      return store.getInitialBundleDownloaded();
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getInitialOtaUpdateChecked",
    value() {
      return store.getInitialOtaUpdateChecked();
    }
  };
  items[1] = obj;
  obj = {
    key: "addEventListener",
    value(arg0, arg1) {
      closure_9.addListener(closure_10[arg0], arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "checkForUpdateAndReload",
    value() {
      const result = store.checkForUpdateAndReload();
    }
  };
  items[4] = {
    key: "verifyOtaFiles",
    value() {
      return store.verifyOtaFiles();
    }
  };
  items[5] = {
    key: "getBuildOverrideCookieContents",
    value() {
      return store.getBuildOverrideCookieContents();
    }
  };
  items[6] = {
    key: "setBuildOverrideCookieHeader",
    value(arg0) {
      return store.setBuildOverrideCookieHeader(arg0);
    }
  };
  items[7] = {
    key: "getOtaRootPath",
    value() {
      return store.getOtaRootPath();
    }
  };
  items[8] = {
    key: "getOtaStatus",
    value() {
      return store.getOtaStatus();
    }
  };
  items[9] = {
    key: "getManifestInfo",
    value() {
      return store.getManifestInfo();
    }
  };
  const obj8 = { key: "setupOTAAssetFallback" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("setupOTAAssetFallback");
  obj8.value = function setupOTAAssetFallback() {
    return callback(...arguments);
  };
  items[10] = obj8;
  items[11] = {
    key: "emitOtaMetric",
    value(arg0) {
      const match = callback(closure_2[9]).match(arg0);
      const str = callback(closure_2[9]);
      const withResult = match.with({ type: "OtaCheckAttempt" }, (result) => {
        closure_7.verbose("OTA check attempt", result);
        let obj = lib(closure_2[10]);
        obj = { result: result.result, duration_seconds: result.durationSeconds, bytes_received: result.bytesReceived, error: result.error, used_streaming: result.usedStreaming };
        obj.track(constants.MOBILE_OTA_CHECK_ATTEMPT, obj);
        return lib(closure_2[11]).increment(lib.prepareOtaMetricForDatadog(result, [null]));
      });
      match.with({ type: "OtaCheckAttempt" }, (result) => {
        closure_7.verbose("OTA check attempt", result);
        let obj = lib(closure_2[10]);
        obj = { result: result.result, duration_seconds: result.durationSeconds, bytes_received: result.bytesReceived, error: result.error, used_streaming: result.usedStreaming };
        obj.track(constants.MOBILE_OTA_CHECK_ATTEMPT, obj);
        return lib(closure_2[11]).increment(lib.prepareOtaMetricForDatadog(result, [null]));
      }).with({ type: "OtaAssetDownloadAttempt" }, (result) => {
        closure_7.verbose("OTA asset download attempt", result);
        let obj = lib(closure_2[10]);
        obj = { result: result.result, duration_seconds: result.durationSeconds, error: result.error, url: result.url, status_code: result.statusCode, bytes_received: result.bytesReceived };
        obj.track(constants.MOBILE_OTA_ASSET_DOWNLOAD_ATTEMPT, obj);
        return lib(closure_2[11]).increment(lib.prepareOtaMetricForDatadog(result, ["bind", "messageId"]));
      }).exhaustive();
    }
  };
  items[12] = {
    key: "prepareOtaMetricForDatadog",
    value(name) {
      let items = arg1;
      let closure_0 = name;
      if (arg1 === undefined) {
        items = [];
      }
      const obj = { name: name.type, tags: items.map((arg0) => "" + arg0 + ":" + arg0[arg0]) };
      return obj;
    }
  };
  return callback2(BundleUpdater, null, items);
}();
const result = arg1(dependencyMap[12]).fileFinishedImporting("lib/native/BundleUpdater.tsx");

export default tmp6;
