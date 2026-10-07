// Module ID: 16921
// Function ID: 16922
// Name: getChannelOpenedRouteTrackingProps
// Dependencies: [2051, 7402, 1112, 2]
// Exports: getChannelOpenedRouteTrackingProps

// Module 16921 (getChannelOpenedRouteTrackingProps)
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 7402 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

let tmp;
const router_utils = tmp(1112);
let result = size.fileFinishedImporting("modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx");

export const getChannelOpenedRouteTrackingProps = function getChannelOpenedRouteTrackingProps(selectedChannelId) {
  let obj5;
  const obj = ThreadAnalyticsUtils;
  const result = obj.collectThreadMetadata(ChannelStore.getChannel(selectedChannelId), true);
  let _location;
  if (result != null) {
    _location = result.location;
  }
  if (_location == null) {
    const tmpResult = router_utils;
    _location = tmpResult.getLastRouteChangeSource();
  }
  let obj2 = result;
  if (result == null) {
    obj2 = {};
  }
  const obj3 = {};
  const merged = Object.assign(obj2);
  if (null != _location) {
    obj5 = { location: _location };
    const obj4 = { location: _location };
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return obj3;
};
