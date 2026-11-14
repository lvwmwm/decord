// Module ID: 6338
// Function ID: 6339
// Name: useTrackImpression
// Dependencies: [19, 5155, 5209, 5349, 1257, 1264, 1256, 572, 6067, 1345, 6339, 5899, 2]
// Exports: default

// Module 6338 (useTrackImpression)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1256 */;
import _modDef1345 from "module_1345" /* 1345 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 6067 */;
import uniqueIdDefault from "uniqueId" /* 6339 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5349 */;
import ImpressionStore from "ImpressionStore" /* 1257 */;
import AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
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
  const tmp = obj(5899)(() => {
    if (obj.trackOnInitialLoad) {
      let fn;
      const tmp6 = _modDef1345(ref.current, current);
      const tmp4 = ref;
      const tmp7 = !tmp6;
      if (tmp7) {
        tmp4.current = current;
      }
      const tmp11 = !_modDef1345(ref2.current, closure_2);
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
      const tmp6 = _modDef1345(ref.current, current);
      const tmp4 = ref;
      const tmp7 = !tmp6;
      if (tmp7) {
        tmp4.current = current;
      }
      const tmp11 = !_modDef1345(ref2.current, closure_2);
      const tmp8 = ref2;
      const tmp9 = closure_2;
      if (tmp11) {
        tmp8.current = tmp9;
      }
      if (!tmp6) {
        obj = { sequenceId: tmp2(6339)("impression_") };
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
