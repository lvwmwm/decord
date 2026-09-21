// Module ID: 9046
// Function ID: 9047
// Name: useTrackImpression
// Dependencies: [19, 2045, 2099, 4580, 1246, 1253, 1245, 577, 4938, 558, 568, 1335, 4962, 5203, 2]

// Module 9046 (useTrackImpression)
import DispatcherDefault from "Dispatcher" /* 577 */;
import AnalyticsUtils2 from "AnalyticsUtils" /* 1245 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1253 */;
import _modDef1335 from "module_1335" /* 1335 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4938 */;
import uniqueIdDefault from "uniqueId" /* 4962 */;
import useMountEffectDefault from "useMountEffect" /* 5203 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4580 */;

const require = globalThis.__r;

require = fn;
function trackImpression(type, disableTrack, arg2) {
  let flag = disableTrack;
  if (disableTrack === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  ({ name, type, properties } = type);
  if (type.type === discord_common_AnalyticsUtils.ImpressionTypes.MODAL) {
    if (null == type.name) {
      const obj = closure_1_11();
    }
  }
  if (!flag2) {
    React5(type);
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
  const tmpResult = AnalyticsUtils2;
  const obj2 = { impression_type: type, location: v65535() };
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id));
  const tmpResult4 = AppAnalyticsUtils;
  const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channel_id)));
  const merged2 = Object.assign(properties);
  const result = tmpResult.expandEventProperties(obj2);
  if (flag) {
    options(null, null);
  } else {
    if (tmp15) {
      tmp(1245).debugLogEvent(name, result);
      closure_12(name, result);
      const tmpResult6 = tmp(1245);
    }
    options(name, result);
    tmp15 = null != name && null != type;
  }
}
const ImpressionStore = fn(1246);
({ setCurrentImpression: closure_7, cleanupImpression: closure_8, setDebugTrackedData: closure_9, getLocation: c10, getImpressionStack: closure_11 } = ImpressionStore);
const AnalyticsUtils = fn(1253);
let closure_12 = AnalyticsUtils.trackMaker({ analyticEventConfigs: fn(1245).AnalyticEventConfigs, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" });
const ReactCompilerGating = fn(558);
let obj2 = { analyticEventConfigs: fn(1245).AnalyticEventConfigs, dispatcher: DispatcherDefault, TRACK_ACTION_NAME: "TRACK" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_analytics/useTrackImpression.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, current) => {
  _require = arg0;
  importDefault = current;
  const cResult = require("c").c(12);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = { disableTrack: false, trackOnInitialLoad: false };
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  dependencyMap = tmp3;
  noop = noop.useRef(undefined);
  noop.useRef(undefined);
  if (cResult[2] === current) {
    if (cResult[3] === tmp3.disableTrack) {
      if (cResult[4] === arg0) {
        let tmp4 = cResult[5];
      }
      SelectedChannelStore = tmp4;
      if (cResult[6] === tmp3.trackOnInitialLoad) {
        if (cResult[7] === tmp4) {
          let tmp5 = cResult[8];
        }
        useMountEffectDefault(tmp5);
        if (cResult[9] === tmp3.trackOnInitialLoad) {
          if (cResult[10] === tmp4) {
            let tmp8 = cResult[11];
          }
          const effect = noop.useEffect(tmp8);
        }
        class L {
          constructor() {
            if (closure_2.trackOnInitialLoad) {
              return;
            } else {
              tmp = closure_5;
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
    const tmp5 = _modDef1335(ref.current, closure_0);
    if (!tmp5) {
      ref.current = tmp4;
    }
    const tmp8 = _modDef1335(ref2.current, current);
    if (!tmp8) {
      ref2.current = current;
    }
    const obj = {};
    const merged = Object.assign(tmp4);
    obj.sequenceId = uniqueIdDefault("impression_");
    trackImpression(obj, closure_2.disableTrack);
    return () => {
      if (null != obj) {
        closure_2_8(tmp);
      }
    };
  };
  cResult[2] = current;
  cResult[3] = tmp3.disableTrack;
  cResult[4] = arg0;
  cResult[5] = fn;
  tmp4 = fn;
}) : ((arg0, arg1, current) => {
  closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { disableTrack: false, trackOnInitialLoad: false };
  }
  dependencyMap = current;
  noop = undefined;
  noop = noop.useRef(undefined);
  noop.useRef(undefined);
  obj(5203)(() => {
    if (obj.trackOnInitialLoad) {
      const tmp6 = _modDef1335(ref.current, closure_0);
      if (!tmp6) {
        ref.current = tmp5;
      }
      const tmp10 = _modDef1335(ref2.current, current);
      if (!tmp10) {
        ref2.current = current;
      }
      if (!tmp6) {
        obj = {};
        const merged = Object.assign(tmp5);
        obj.sequenceId = tmp2(4962)("impression_");
        trackImpression(obj, tmp.disableTrack);
        const fn = () => {
          if (null != obj) {
            closure_2_8(tmp);
          }
        };
      }
      return fn;
    }
  });
  const effect = noop.useEffect(() => {
    if (!obj.trackOnInitialLoad) {
      const tmp6 = _modDef1335(ref.current, closure_0);
      if (!tmp6) {
        ref.current = tmp5;
      }
      const tmp10 = _modDef1335(ref2.current, current);
      if (!tmp10) {
        ref2.current = current;
      }
      if (!tmp6) {
        obj = {};
        const merged = Object.assign(tmp5);
        obj.sequenceId = tmp2(4962)("impression_");
        trackImpression(obj, tmp.disableTrack);
        const fn = () => {
          if (null != obj) {
            closure_2_8(tmp);
          }
        };
      }
      return fn;
    }
  });
});
export { trackImpression };
