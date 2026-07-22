// Module ID: 15310
// Function ID: 116447
// Name: getChannelOpenedRouteTrackingProps
// Dependencies: []
// Exports: getChannelOpenedRouteTrackingProps

// Module 15310 (getChannelOpenedRouteTrackingProps)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/app_analytics/track/channel_opened/getChannelOpenedRouteTrackingProps.tsx");

export const getChannelOpenedRouteTrackingProps = function getChannelOpenedRouteTrackingProps(selectedChannelId) {
  let obj = arg1(dependencyMap[1]);
  let result = obj.collectThreadMetadata(channel.getChannel(selectedChannelId), true);
  let _location;
  if (null != result) {
    _location = result.location;
  }
  if (null == _location) {
    _location = arg1(dependencyMap[2]).getLastRouteChangeSource();
    const obj3 = arg1(dependencyMap[2]);
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
