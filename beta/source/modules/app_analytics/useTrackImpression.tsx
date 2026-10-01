// Module ID: 8230
// Function ID: 8231
// Name: useTrackImpression
// Dependencies: [19, 2045, 2099, 4655, 1242, 1249, 1241, 573, 5016, 1331, 5040, 5298, 2]
// Exports: default

// Module 8230 (useTrackImpression)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1241 */;
import _modDef1331 from "module_1331" /* 1331 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import uniqueIdDefault from "uniqueId" /* 5040 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import ImpressionStore from "ImpressionStore" /* 1242 */;
import AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function trackImpression(type, disableTrack, arg2) {
  let name;
  let properties;
  let flag = disableTrack;
  if (disableTrack === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  ({ name, type, properties } = type);
  if (type.type === AnalyticsUtils.ImpressionTypes.MODAL) {
    if (null == type.name) {
      unpackModuleId();
    }
  }
  if (!flag2) {
    metroImportDefault(type);
  }
  let guild_id;
  if (properties != null) {
    guild_id = properties.guild_id;
  }
  if (guild_id == null) {
    guild_id = SelectedGuildStore.getGuildId();
  }
  let channel_id;
  if (properties != null) {
    channel_id = properties.channel_id;
  }
  if (channel_id == null) {
    channel_id = SelectedChannelStore.getChannelId(guild_id);
  }
  const expandEventProperties = AnalyticsUtils2.expandEventProperties;
  const tmpResult = AnalyticsUtils2;
  const obj2 = { impression_type: type, location: authStore() };
  const tmpResult4 = AppAnalyticsUtils;
  const merged = Object.assign(tmpResult4.collectGuildAnalyticsMetadata(guild_id));
  const tmpResult5 = AppAnalyticsUtils;
  const merged1 = Object.assign(tmpResult5.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channel_id)));
  const merged2 = Object.assign(properties);
  const result = expandEventProperties(obj2);
  if (flag) {
    React4(null, null);
  } else {
    const tmp16 = null != name && null != type;
    if (tmp16) {
      const tmpResult6 = AnalyticsUtils2;
      tmpResult6.debugLogEvent(name, result);
      closure_12(name, result);
    }
    React4(name, result);
  }
}
let react = react_mod;
({ setCurrentImpression: metroImportDefault, cleanupImpression: metroImportAll, setDebugTrackedData: c9, getLocation: c10, getImpressionStack: unpackModuleId } = ImpressionStore);
let obj = { analyticEventConfigs: AnalyticsUtils2.AnalyticEventConfigs, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
let closure_12 = AnalyticsUtils.trackMaker(obj);
let result = size.fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default function useTrackImpression(current) {
  let closure_2;
  let ref;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { disableTrack: false, trackOnInitialLoad: false };
  }
  dependencyMap = arg2;
  react = undefined;
  react = react.useRef(undefined);
  const ref2 = react.useRef(undefined);
  const tmp = obj(5298)(() => {
    if (obj.trackOnInitialLoad) {
      let fn;
      const tmp6 = _modDef1331(ref.current, current);
      const tmp4 = ref;
      const tmp7 = !tmp6;
      if (tmp7) {
        tmp4.current = current;
      }
      const tmp11 = !_modDef1331(ref2.current, closure_2);
      const tmp8 = ref2;
      const tmp9 = closure_2;
      if (tmp11) {
        tmp8.current = tmp9;
      }
      if (!tmp6) {
        obj = { sequenceId: uniqueIdDefault("impression_") };
        const merged = Object.assign(tmp5);
        trackImpression(obj, tmp.disableTrack);
        fn = () => {
          if (null != obj) {
            closure_2_8(tmp);
          }
        };
      }
      return fn;
    }
  });
  const effect = react.useEffect(() => {
    if (!obj.trackOnInitialLoad) {
      let fn;
      const tmp6 = _modDef1331(ref.current, current);
      const tmp4 = ref;
      const tmp7 = !tmp6;
      if (tmp7) {
        tmp4.current = current;
      }
      const tmp11 = !_modDef1331(ref2.current, closure_2);
      const tmp8 = ref2;
      const tmp9 = closure_2;
      if (tmp11) {
        tmp8.current = tmp9;
      }
      if (!tmp6) {
        obj = { sequenceId: tmp2(5040)("impression_") };
        const merged = Object.assign(tmp5);
        trackImpression(obj, tmp.disableTrack);
        fn = () => {
          if (null != obj) {
            closure_2_8(tmp);
          }
        };
      }
      return fn;
    }
  });
};
export { trackImpression };
