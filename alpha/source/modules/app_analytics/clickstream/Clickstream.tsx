// Module ID: 7176
// Function ID: 7177
// Name: Clickstream
// Dependencies: [32, 502, 5108, 11, 7177, 1264, 7178, 2]
// Exports: trackClickstream

// Module 7176 (Clickstream)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import ClickstreamExperiment from "ClickstreamExperiment" /* 7177 */;
import ClickstreamEvents from "ClickstreamEvents" /* 7178 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import size from "module_2" /* 2 */;

function isClickstreamEnabled(flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(AuthenticationStore.getId());
    if (extractTimestampResult !== c7) {
      drainClickstream(false);
      c7 = extractTimestampResult;
    }
    const obj2 = ClickstreamExperiment;
    metroImportAll = obj2.clickstreamExperimentEnabled();
  }
  return metroImportAll;
}
function drainClickstream(flag) {
  let first;
  let tmp10;
  if (flag === undefined) {
    flag = true;
  }
  if (isClickstreamEnabled(flag)) {
    const tmp3 = map[Symbol.iterator]();
    while (tmp3 !== undefined) {
      [first, tmp10] = tmp5;
      let tmp13 = AnalyticsUtilsDefault;
      let track = tmp13.track;
      let obj2 = ClickstreamEvents;
      let trackResult = track(first, obj2.getClickstreamDrainEvent(first, tmp10));
      continue;
    }
    map.clear();
  } else {
    map.clear();
  }
}
const map = new Map();
let c7 = -1;
let metroImportAll = false;
const result = size.fileFinishedImporting("modules/app_analytics/clickstream/Clickstream.tsx");

export const trackClickstream = function trackClickstream(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, arg1) {
  let date;
  const obj = SnowflakeUtilsDefault;
  const extractTimestampResult = obj.extractTimestamp(AuthenticationStore.getId());
  if (extractTimestampResult !== c7) {
    drainClickstream(false);
    c7 = extractTimestampResult;
  }
  const obj2 = ClickstreamExperiment;
  metroImportAll = obj2.clickstreamExperimentEnabled();
  if (metroImportAll) {
    if (!map.has(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM)) {
      const result1 = obj3.set(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, []);
    }
    const value = obj3.get(CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM);
    if (value != null) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const push = value.push;
      const obj4 = { timestamp: date, rtc_state: RTCConnectionStore.getState() };
      date = new Date();
      const merged = Object.assign(arg1);
      push(obj4);
    }
  }
};
export { drainClickstream };
