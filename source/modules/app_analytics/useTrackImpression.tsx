// Module ID: 8604
// Function ID: 68265
// Name: trackImpression
// Dependencies: [31, 1348, 1906, 3947, 676, 480, 675, 686, 4324, 636, 4338, 4559, 2]
// Exports: default

// Module 8604 (trackImpression)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import withEqualityFn from "withEqualityFn";
import isThrottled from "isThrottled";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function trackImpression(type, arg1, arg2) {
  let name;
  let properties;
  let flag = arg1;
  let flag2 = arg2;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ name, type, properties } = type);
  if (type.type === require(480) /* isThrottled */.ImpressionTypes.MODAL) {
    if (null == type.name) {
      let obj = callback4();
    }
  }
  if (!flag2) {
    callback(type);
  }
  let guild_id;
  if (null != properties) {
    guild_id = properties.guild_id;
  }
  if (null == guild_id) {
    guild_id = guildId.getGuildId();
  }
  let channel_id;
  if (null != properties) {
    channel_id = properties.channel_id;
  }
  if (null == channel_id) {
    channel_id = channelId.getChannelId(guild_id);
  }
  obj = { impression_type: type, location: callback3() };
  const obj2 = require(675) /* expandLocation */;
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guild_id));
  const obj4 = require(4324) /* _createForOfIteratorHelperLoose */;
  const merged1 = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectChannelAnalyticsMetadata(channel.getChannel(channel_id)));
  const merged2 = Object.assign(properties);
  const result = obj2.expandEventProperties(obj);
  if (flag) {
    callback2(null, null);
  } else {
    if (tmp13) {
      require(675) /* expandLocation */.debugLogEvent(name, result);
      isThrottled(name, result);
      const obj6 = require(675) /* expandLocation */;
    }
    callback2(name, result);
    tmp13 = null != name && null != type;
  }
}
({ setCurrentImpression: closure_7, cleanupImpression: closure_8, setDebugTrackedData: closure_9, getLocation: closure_10, getImpressionStack: closure_11 } = withEqualityFn);
isThrottled = { analyticEventConfigs: require("expandLocation").AnalyticEventConfigs, dispatcher: require("dispatcher"), TRACK_ACTION_NAME: "TRACK" };
isThrottled = isThrottled.trackMaker(isThrottled);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default function useTrackImpression(arg0) {
  let obj = arg1;
  let closure_0 = arg0;
  if (arg1 === undefined) {
    obj = { disableTrack: false, trackOnInitialLoad: false };
  }
  const dependencyMap = arg2;
  let React;
  let _isNativeReflectConstruct;
  function trackImpressionEffect() {
    const tmp = !obj(636)(ref.current, obj);
    if (tmp) {
      ref.current = obj;
    }
    const tmp4 = !obj(636)(ref2.current, dependencyMap);
    if (tmp4) {
      ref2.current = dependencyMap;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj["sequenceId"] = obj(4338)("impression_");
    outer1_13(obj, obj.disableTrack);
    return () => {
      if (null != obj) {
        outer2_8(obj);
      }
    };
  }
  React = React.useRef(undefined);
  _isNativeReflectConstruct = React.useRef(undefined);
  obj(4559)(() => {
    if (obj.trackOnInitialLoad) {
      return trackImpressionEffect();
    }
  });
  const effect = React.useEffect(() => {
    if (!obj.trackOnInitialLoad) {
      return trackImpressionEffect();
    }
  });
};
export { trackImpression };
