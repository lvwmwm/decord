// Module ID: 8227
// Function ID: 8228
// Name: useTrackImpression
// Dependencies: [19, 2051, 2102, 4657, 1254, 1261, 1253, 585, 5017, 558, 576, 1343, 5041, 5297, 2]

// Module 8227 (useTrackImpression)
import DispatcherDefault from "Dispatcher" /* 585 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1253 */;
import _modDef1343 from "module_1343" /* 1343 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5017 */;
import uniqueIdDefault from "uniqueId" /* 5041 */;
import useMountEffectDefault from "useMountEffect" /* 5297 */;
import react_mod from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore_mod from "SelectedChannelStore" /* 2102 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4657 */;
import ImpressionStore from "ImpressionStore" /* 1254 */;
import AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

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
let SelectedChannelStore = SelectedChannelStore_mod;
({ setCurrentImpression: metroImportDefault, cleanupImpression: metroImportAll, setDebugTrackedData: c9, getLocation: c10, getImpressionStack: unpackModuleId } = ImpressionStore);
let obj = { analyticEventConfigs: AnalyticsUtils2.AnalyticEventConfigs, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
let closure_12 = AnalyticsUtils.trackMaker(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((current, arg1, arg2) => {
  let closure_1;
  let closure_2;
  let closure_5;
  let ref;
  let tmp3;
  _require = current;
  importDefault = arg2;
  let tmp = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = { disableTrack: false, trackOnInitialLoad: false };
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  dependencyMap = tmp3;
  const obj3 = react;
  react = react.useRef(undefined);
  const ref2 = react.useRef(undefined);
  if (cResult[2] === arg2) {
    if (cResult[3] === tmp3.disableTrack) {
      let tmp4;
      if (cResult[4] === current) {
        tmp4 = cResult[5];
      }
      SelectedChannelStore = tmp4;
      if (cResult[6] === tmp3.trackOnInitialLoad) {
        let tmp5;
        if (cResult[7] === tmp4) {
          tmp5 = cResult[8];
        }
        let tmp6 = importDefault;
        let tmp7 = useMountEffectDefault(tmp5);
        if (cResult[9] === tmp3.trackOnInitialLoad) {
          let tmp8;
          if (cResult[10] === tmp4) {
            tmp8 = cResult[11];
          }
          const effect = obj3.useEffect(tmp8);
        }
        class L {
          constructor() {
            if (!closure_2.trackOnInitialLoad) {
              return closure_5();
            }
          }
        }
        cResult[9] = tmp3.trackOnInitialLoad;
        cResult[10] = tmp4;
        cResult[11] = L;
        tmp8 = L;
      }
      const fn2 = function v() {
        if (closure_2.trackOnInitialLoad) {
          return closure_5();
        }
      };
      cResult[6] = tmp3.trackOnInitialLoad;
      cResult[7] = tmp4;
      cResult[8] = fn2;
      tmp5 = fn2;
    }
  }
  const fn = function f() {
    const tmp = importDefault;
    const tmp3 = ref;
    const tmp6 = !_modDef1343(ref.current, current);
    if (tmp6) {
      tmp3.current = current;
    }
    const tmp10 = !_modDef1343(ref2.current, closure_1);
    const tmp7 = ref2;
    const tmp8 = closure_1;
    if (tmp10) {
      tmp7.current = tmp8;
    }
    const obj = { sequenceId: uniqueIdDefault("impression_") };
    const merged = Object.assign(tmp4);
    trackImpression(obj, closure_2.disableTrack);
    return () => {
      if (null != obj) {
        closure_2_8(tmp);
      }
    };
  };
  cResult[2] = arg2;
  cResult[3] = tmp3.disableTrack;
  cResult[4] = current;
  cResult[5] = fn;
  tmp4 = fn;
}) : ((current) => {
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
  const tmp = obj(5297)(() => {
    if (obj.trackOnInitialLoad) {
      let fn;
      const tmp6 = _modDef1343(ref.current, current);
      const tmp4 = ref;
      const tmp7 = !tmp6;
      if (tmp7) {
        tmp4.current = current;
      }
      const tmp11 = !_modDef1343(ref2.current, closure_2);
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
      const tmp6 = _modDef1343(ref.current, current);
      const tmp4 = ref;
      const tmp7 = !tmp6;
      if (tmp7) {
        tmp4.current = current;
      }
      const tmp11 = !_modDef1343(ref2.current, closure_2);
      const tmp8 = ref2;
      const tmp9 = closure_2;
      if (tmp11) {
        tmp8.current = tmp9;
      }
      if (!tmp6) {
        obj = { sequenceId: tmp2(5041)("impression_") };
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
});
let result = size.fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default tmp3;
export { trackImpression };
