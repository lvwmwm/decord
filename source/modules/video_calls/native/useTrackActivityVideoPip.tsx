// Module ID: 10646
// Function ID: 82998
// Name: useTrackActivityPip
// Dependencies: [31, 10568, 653, 624, 8328, 10628, 675, 2]
// Exports: default

// Module 10646 (useTrackActivityPip)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default function useTrackActivityPip(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => outer1_4.isPipEnabledWhileFocusedOnActivityOrStream());
  let tmp2 = stateFromStores(8328)(stateFromStores);
  const dependencyMap = tmp2;
  const tmp3 = stateFromStores(10628)();
  const React = tmp3;
  const items1 = [stateFromStores, tmp2, arg0, tmp3];
  const effect = React.useEffect(() => {
    if (null != result) {
      if (null != tmp2) {
        if (stateFromStores !== tmp2) {
          let track = outer1_5;
          tmp2 = stateFromStores ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN;
          track = stateFromStores(tmp2[6]).track;
          const obj = {};
          ({ id: obj.channel_id, guild_id: obj.guild_id } = closure_0);
          ({ applicationId: obj.application_id, compositeInstanceId: obj.activity_session_id } = result);
          track(tmp2, obj);
          const tmp5 = stateFromStores(tmp2[6]);
        }
      }
    }
  }, items1);
};
