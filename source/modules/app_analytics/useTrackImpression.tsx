// Module ID: 8553
// Function ID: 67998
// Name: trackImpression
// Dependencies: []
// Exports: default

// Module 8553 (trackImpression)
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
  if (type.type === arg1(dependencyMap[5]).ImpressionTypes.MODAL) {
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
  const obj2 = arg1(dependencyMap[6]);
  const merged = Object.assign(arg1(dependencyMap[8]).collectGuildAnalyticsMetadata(guild_id));
  const obj4 = arg1(dependencyMap[8]);
  const merged1 = Object.assign(arg1(dependencyMap[8]).collectChannelAnalyticsMetadata(channel.getChannel(channel_id)));
  const merged2 = Object.assign(properties);
  const result = obj2.expandEventProperties(obj);
  if (flag) {
    callback2(null, null);
  } else {
    if (tmp13) {
      arg1(dependencyMap[6]).debugLogEvent(name, result);
      callback5(name, result);
      const obj6 = arg1(dependencyMap[6]);
    }
    callback2(name, result);
    const tmp13 = null != name && null != type;
  }
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ setCurrentImpression: closure_7, cleanupImpression: closure_8, setDebugTrackedData: closure_9, getLocation: closure_10, getImpressionStack: closure_11 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { analyticEventConfigs: arg1(dependencyMap[6]).AnalyticEventConfigs, dispatcher: importDefault(dependencyMap[7]), TRACK_ACTION_NAME: "TRACK" };
let closure_12 = obj.trackMaker(obj);
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default function useTrackImpression(arg0) {
  let obj = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    obj = { 0: true, 9223372036854775807: true };
  }
  const importDefault = obj;
  const dependencyMap = arg2;
  let React;
  let closure_4;
  function trackImpressionEffect() {
    const tmp = !obj(arg2[9])(ref.current, arg0);
    if (tmp) {
      ref.current = arg0;
    }
    const tmp4 = !obj(arg2[9])(ref2.current, arg2);
    if (tmp4) {
      ref2.current = arg2;
    }
    const obj = {};
    const merged = Object.assign(arg0);
    obj["sequenceId"] = obj(arg2[10])("impression_");
    const arg0 = obj;
    callback(obj, obj.disableTrack);
    return () => {
      if (null != obj) {
        callback(obj);
      }
    };
  }
  React = React.useRef(undefined);
  closure_4 = React.useRef(undefined);
  importDefault(dependencyMap[11])(() => {
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
