// Module ID: 15427
// Function ID: 118621
// Name: getChannelOpenedRouteTrackingProps
// Dependencies: [1348, 7016, 1198, 2]
// Exports: getChannelOpenedRouteTrackingProps

// Module 15427 (getChannelOpenedRouteTrackingProps)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let result = require("shouldNavigate").fileFinishedImporting("modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx");

export const getChannelOpenedRouteTrackingProps = function getChannelOpenedRouteTrackingProps(selectedChannelId) {
  let obj = require(7016) /* collectThreadMetadata */;
  let result = obj.collectThreadMetadata(channel.getChannel(selectedChannelId), true);
  let _location;
  if (null != result) {
    _location = result.location;
  }
  if (null == _location) {
    _location = require(1198) /* shouldNavigate */.getLastRouteChangeSource();
    const obj3 = require(1198) /* shouldNavigate */;
  }
  obj = {};
  if (null == result) {
    result = {};
  }
  const merged = Object.assign(result);
  if (null != _location) {
    obj = { location: _location };
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged1 = Object.assign(obj1);
  return obj;
};
