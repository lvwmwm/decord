// Module ID: 10941
// Function ID: 85059
// Name: BundleUpdaterManager
// Dependencies: [5, 6, 7, 27, 653, 3, 477, 90, 1934, 4329, 675, 6837, 2]

// Module 10941 (BundleUpdaterManager)
import timestamp from "timestamp";
import set from "set";
import getSourceCodeScriptURL from "getSourceCodeScriptURL";
import get_ActivityIndicator from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import importDefaultResult from "get ActivityIndicator";

const require = arg1;
importDefaultResult = new importDefaultResult("BundleUpdater");
const BundleUpdaterManager = get_ActivityIndicator.NativeModules.BundleUpdaterManager;
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(BundleUpdaterManager);
let closure_10 = { downloaded: "BundleDownloaded", otaUpdateChecked: "OtaUpdateChecked" };
const tmp6 = (() => {
  class BundleUpdater {
    constructor() {
      tmp = outer1_4(this, BundleUpdater);
      return;
    }
  }
  let obj = {
    key: "getInitialBundleDownloaded",
    value() {
      return outer1_8.getInitialBundleDownloaded();
    }
  };
  let items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getInitialOtaUpdateChecked",
    value() {
      return outer1_8.getInitialOtaUpdateChecked();
    }
  };
  items[1] = obj;
  obj = {
    key: "addEventListener",
    value(arg0, arg1) {
      outer1_9.addListener(outer1_10[arg0], arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "checkForUpdateAndReload",
    value() {
      const result = outer1_8.checkForUpdateAndReload();
    }
  };
  items[4] = {
    key: "verifyOtaFiles",
    value() {
      return outer1_8.verifyOtaFiles();
    }
  };
  items[5] = {
    key: "getBuildOverrideCookieContents",
    value() {
      return outer1_8.getBuildOverrideCookieContents();
    }
  };
  items[6] = {
    key: "setBuildOverrideCookieHeader",
    value(arg0) {
      return outer1_8.setBuildOverrideCookieHeader(arg0);
    }
  };
  items[7] = {
    key: "getOtaRootPath",
    value() {
      return outer1_8.getOtaRootPath();
    }
  };
  items[8] = {
    key: "getOtaStatus",
    value() {
      return outer1_8.getOtaStatus();
    }
  };
  items[9] = {
    key: "getManifestInfo",
    value() {
      return outer1_8.getManifestInfo();
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
      const match = callback(outer1_2[9]).match(arg0);
      const str = callback(outer1_2[9]);
      const withResult = match.with({ type: "OtaCheckAttempt" }, (result) => {
        outer2_7.verbose("OTA check attempt", result);
        let obj = BundleUpdater(outer2_2[10]);
        obj = { result: result.result, duration_seconds: result.durationSeconds, bytes_received: result.bytesReceived, error: result.error, used_streaming: result.usedStreaming };
        obj.track(outer2_6.MOBILE_OTA_CHECK_ATTEMPT, obj);
        return BundleUpdater(outer2_2[11]).increment(outer1_1.prepareOtaMetricForDatadog(result, ["result"]));
      });
      match.with({ type: "OtaCheckAttempt" }, (result) => {
        outer2_7.verbose("OTA check attempt", result);
        let obj = BundleUpdater(outer2_2[10]);
        obj = { result: result.result, duration_seconds: result.durationSeconds, bytes_received: result.bytesReceived, error: result.error, used_streaming: result.usedStreaming };
        obj.track(outer2_6.MOBILE_OTA_CHECK_ATTEMPT, obj);
        return BundleUpdater(outer2_2[11]).increment(outer1_1.prepareOtaMetricForDatadog(result, ["result"]));
      }).with({ type: "OtaAssetDownloadAttempt" }, (result) => {
        outer2_7.verbose("OTA asset download attempt", result);
        let obj = BundleUpdater(outer2_2[10]);
        obj = { result: result.result, duration_seconds: result.durationSeconds, error: result.error, url: result.url, status_code: result.statusCode, bytes_received: result.bytesReceived };
        obj.track(outer2_6.MOBILE_OTA_ASSET_DOWNLOAD_ATTEMPT, obj);
        return BundleUpdater(outer2_2[11]).increment(outer1_1.prepareOtaMetricForDatadog(result, ["result", "statusCode"]));
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
      const obj = { name: name.type, tags: items.map((arg0) => "" + arg0 + ":" + name[arg0]) };
      return obj;
    }
  };
  return callback2(BundleUpdater, null, items);
})();
let result = require("_defineProperties").fileFinishedImporting("lib/native/BundleUpdater.tsx");

export default tmp6;
