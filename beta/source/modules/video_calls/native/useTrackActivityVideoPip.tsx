// Module ID: 8936
// Function ID: 8937
// Name: useTrackActivityVideoPip
// Dependencies: [19, 8844, 1074, 563, 7720, 8913, 1241, 2]
// Exports: default

// Module 8936 (useTrackActivityVideoPip)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import react_mod from "react" /* 19 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 8844 */;
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
  const tmp2 = stateFromStores(7720)(stateFromStores);
  dependencyMap = tmp2;
  const tmp3 = stateFromStores(8913)();
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
