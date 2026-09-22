// Module ID: 17219
// Function ID: 17220
// Name: getChannelOpenedRouteTrackingProps
// Dependencies: [2045, 8021, 1105, 2]
// Exports: getChannelOpenedRouteTrackingProps

// Module 17219 (getChannelOpenedRouteTrackingProps)
import router_utils from "router_utils" /* 1105 */;
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 8021 */;
import ChannelStore from "ChannelStore" /* 2045 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx");

export const getChannelOpenedRouteTrackingProps = function getChannelOpenedRouteTrackingProps(selectedChannelId) {
  const result = ThreadAnalyticsUtils.collectThreadMetadata(ChannelStore.getChannel(selectedChannelId), true);
  let _location;
  if (result != null) {
    _location = result.location;
  }
  if (_location == null) {
    _location = router_utils.getLastRouteChangeSource();
    const tmpResult = router_utils;
  }
  let obj2 = result;
  if (result == null) {
    obj2 = {};
  }
  const merged = Object.assign(obj2);
  if (null != _location) {
    const obj4 = { location: _location };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return {};
};
