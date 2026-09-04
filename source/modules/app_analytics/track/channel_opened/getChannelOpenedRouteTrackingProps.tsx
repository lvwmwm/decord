// Module ID: 16662
// Function ID: 16663
// Name: getChannelOpenedRouteTrackingProps
// Dependencies: [1386, 7706, 1219, 2]
// Exports: getChannelOpenedRouteTrackingProps

// Module 16662 (getChannelOpenedRouteTrackingProps)
import transitionTo from "transitionTo" /* 1219 */;
import collectThreadMetadata from "collectThreadMetadata" /* 7706 */;
import closure_2 from "ensureGuildLoaded" /* 1386 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx");

export const getChannelOpenedRouteTrackingProps = function getChannelOpenedRouteTrackingProps(selectedChannelId) {
  let obj = collectThreadMetadata;
  const result = obj.collectThreadMetadata(channel.getChannel(selectedChannelId), true);
  let _location;
  if (result != null) {
    _location = result.location;
  }
  if (_location == null) {
    _location = transitionTo.getLastRouteChangeSource();
    const tmpResult = transitionTo;
  }
  obj = result;
  if (result == null) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  if (null != _location) {
    obj1 = { location: null };
    obj1[0] = _location;
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged1 = Object.assign(obj2);
  return obj;
};
