// Module ID: 11844
// Function ID: 11845
// Name: useTrackActivityVideoPip
// Dependencies: [19, 11704, 1072, 563, 6732, 11788, 1252, 2]
// Exports: default

// Module 11844 (useTrackActivityVideoPip)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import react_mod from "react" /* 19 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11704 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default function useTrackActivityPip(arg0) {
  let closure_0;
  let closure_2;
  let closure_3;
  let pipEnabledWhileFocusedOnActivityOrStream;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [ChannelCallLifecycleStore];
  const stateFromStores = obj.useStateFromStores(items, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  const tmp2 = stateFromStores(6732)(stateFromStores);
  dependencyMap = tmp2;
  const tmp3 = stateFromStores(11788)();
  react = tmp3;
  const items1 = [stateFromStores, tmp2, arg0, tmp3];
  const effect = react.useEffect(() => {
    const tmp = closure_3;
    if (null != closure_3) {
      if (null != closure_2) {
        if (stateFromStores !== tmp9) {
          const obj3 = { channel_id: null, guild_id: null, application_id: null, activity_session_id: null };
          const tmp4 = tmp2 ? AnalyticEvents.ACTIVITY_VIDEO_PIP_SHOWN : AnalyticEvents.ACTIVITY_VIDEO_PIP_HIDDEN;
          ({ id: obj2.channel_id, guild_id: obj2.guild_id } = closure_0);
          ({ applicationId: obj2.application_id, compositeInstanceId: obj2.activity_session_id } = tmp);
          const obj = AnalyticsUtilsDefault;
          obj.track(tmp4, obj3);
        }
      }
    }
  }, items1);
};
