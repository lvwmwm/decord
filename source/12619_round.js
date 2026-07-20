// Module ID: 12619
// Function ID: 97074
// Name: round
// Dependencies: []

// Module 12619 (round)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ NetworkConnectionTypes: closure_5, NetworkConnectionSpeeds: closure_6 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const tmp3 = () => {
  class NetworkQuality {
    constructor() {
      tmp = closure_2(this, NetworkQuality);
      this._networkStats = this._initStats();
      obj = NetworkQuality(closure_1[4]);
      this._lastSampleTimestamp = obj.now();
      return;
    }
  }
  const arg1 = NetworkQuality;
  let obj = {
    key: "_initStats",
    value() {
      const obj = { effectiveConnectionSpeedBuckets: {}, connectionTypeBuckets: {} };
      const NetworkQuality = obj;
      let values = Object.values(closure_5);
      const item = values.forEach((arg0) => {
        obj.connectionTypeBuckets[arg0] = 0;
      });
      values = Object.values(closure_6);
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
      return { duration_connection_type_wifi: callback2(_networkStats.connectionTypeBuckets[closure_5.WIFI]), duration_connection_type_cellular: callback2(_networkStats.connectionTypeBuckets[closure_5.CELLULAR]), duration_connection_type_ethernet: callback2(_networkStats.connectionTypeBuckets[closure_5.ETHERNET]), duration_connection_type_bluetooth: callback2(_networkStats.connectionTypeBuckets[closure_5.BLUETOOTH]), duration_connection_type_other: callback2(_networkStats.connectionTypeBuckets[closure_5.OTHER]), duration_connection_type_unknown: callback2(_networkStats.connectionTypeBuckets[closure_5.UNKNOWN]), duration_connection_type_none: callback2(_networkStats.connectionTypeBuckets[closure_5.NONE]), duration_effective_connection_speed_2g: callback2(_networkStats.effectiveConnectionSpeedBuckets[closure_6.TWO_G]), duration_effective_connection_speed_3g: callback2(_networkStats.effectiveConnectionSpeedBuckets[closure_6.THREE_G]), duration_effective_connection_speed_4g: callback2(_networkStats.effectiveConnectionSpeedBuckets[closure_6.FOUR_G]), duration_effective_connection_speed_5g: callback2(_networkStats.effectiveConnectionSpeedBuckets[closure_6.FIVE_G]), duration_effective_connection_speed_unknown: callback2(_networkStats.effectiveConnectionSpeedBuckets[closure_6.UNKNOWN]) };
    }
  };
  items[1] = obj;
  obj = {
    key: "incrementNetworkStats",
    value(_lastSampleTimestamp) {
      const self = this;
      const result = (_lastSampleTimestamp - this._lastSampleTimestamp) / 1000;
      let TWO_G = store.getEffectiveConnectionSpeed();
      if (TWO_G === constants2.SLOW_TWO_G) {
        TWO_G = constants2.TWO_G;
      }
      let WIFI = store.getType();
      if (WIFI === constants.WIMAX) {
        WIFI = constants.WIFI;
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
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("lib/NetworkQuality.tsx");

export default tmp3;
