// Module ID: 12798
// Function ID: 99624
// Name: round
// Dependencies: [6, 7, 4222, 653, 4206, 2]

// Module 12798 (round)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
function round(arg0) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  if (null != arg0) {
    const _Math = Math;
    num = Math.round(arg0);
  }
  return num;
}
({ NetworkConnectionTypes: closure_5, NetworkConnectionSpeeds: closure_6 } = ME);
const tmp3 = (() => {
  class NetworkQuality {
    constructor() {
      tmp = outer1_2(this, NetworkQuality);
      this._networkStats = this._initStats();
      obj = NetworkQuality(outer1_1[4]);
      this._lastSampleTimestamp = obj.now();
      return;
    }
  }
  let obj = {
    key: "_initStats",
    value() {
      const obj = { effectiveConnectionSpeedBuckets: {}, connectionTypeBuckets: {} };
      let values = Object.values(outer1_5);
      const item = values.forEach((arg0) => {
        obj.connectionTypeBuckets[arg0] = 0;
      });
      values = Object.values(outer1_6);
      const item1 = values.forEach((arg0) => {
        obj.effectiveConnectionSpeedBuckets[arg0] = 0;
      });
      return obj;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getStats",
    value() {
      const _networkStats = this._networkStats;
      return { duration_connection_type_wifi: outer1_7(_networkStats.connectionTypeBuckets[outer1_5.WIFI]), duration_connection_type_cellular: outer1_7(_networkStats.connectionTypeBuckets[outer1_5.CELLULAR]), duration_connection_type_ethernet: outer1_7(_networkStats.connectionTypeBuckets[outer1_5.ETHERNET]), duration_connection_type_bluetooth: outer1_7(_networkStats.connectionTypeBuckets[outer1_5.BLUETOOTH]), duration_connection_type_other: outer1_7(_networkStats.connectionTypeBuckets[outer1_5.OTHER]), duration_connection_type_unknown: outer1_7(_networkStats.connectionTypeBuckets[outer1_5.UNKNOWN]), duration_connection_type_none: outer1_7(_networkStats.connectionTypeBuckets[outer1_5.NONE]), duration_effective_connection_speed_2g: outer1_7(_networkStats.effectiveConnectionSpeedBuckets[outer1_6.TWO_G]), duration_effective_connection_speed_3g: outer1_7(_networkStats.effectiveConnectionSpeedBuckets[outer1_6.THREE_G]), duration_effective_connection_speed_4g: outer1_7(_networkStats.effectiveConnectionSpeedBuckets[outer1_6.FOUR_G]), duration_effective_connection_speed_5g: outer1_7(_networkStats.effectiveConnectionSpeedBuckets[outer1_6.FIVE_G]), duration_effective_connection_speed_unknown: outer1_7(_networkStats.effectiveConnectionSpeedBuckets[outer1_6.UNKNOWN]) };
    }
  };
  items[1] = obj;
  obj = {
    key: "incrementNetworkStats",
    value(_lastSampleTimestamp) {
      const self = this;
      const result = (_lastSampleTimestamp - this._lastSampleTimestamp) / 1000;
      let TWO_G = outer1_4.getEffectiveConnectionSpeed();
      if (TWO_G === outer1_6.SLOW_TWO_G) {
        TWO_G = outer1_6.TWO_G;
      }
      let WIFI = outer1_4.getType();
      if (WIFI === outer1_5.WIMAX) {
        WIFI = outer1_5.WIFI;
      }
      const effectiveConnectionSpeedBuckets = self._networkStats.effectiveConnectionSpeedBuckets;
      effectiveConnectionSpeedBuckets[TWO_G] = effectiveConnectionSpeedBuckets[TWO_G] + result;
      const connectionTypeBuckets = self._networkStats.connectionTypeBuckets;
      connectionTypeBuckets[WIFI] = connectionTypeBuckets[WIFI] + result;
      self._lastSampleTimestamp = _lastSampleTimestamp;
    }
  };
  items[2] = obj;
  return callback(NetworkQuality, items);
})();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("lib/NetworkQuality.tsx");

export default tmp3;
