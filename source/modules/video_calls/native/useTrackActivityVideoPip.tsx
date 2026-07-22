// Module ID: 10607
// Function ID: 82756
// Name: useTrackActivityPip
// Dependencies: []
// Exports: default

// Module 10607 (useTrackActivityPip)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/video_calls/native/useTrackActivityVideoPip.tsx");

export default function useTrackActivityPip(arg0) {
  const arg1 = arg0;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => pipEnabledWhileFocusedOnActivityOrStream.isPipEnabledWhileFocusedOnActivityOrStream());
  const importDefault = stateFromStores;
  const tmp2 = importDefault(dependencyMap[4])(stateFromStores);
  const dependencyMap = tmp2;
  const tmp3 = importDefault(dependencyMap[5])();
  const React = tmp3;
  const items1 = [stateFromStores, tmp2, arg0, tmp3];
  const effect = React.useEffect(() => {
    if (null != tmp3) {
      if (null != tmp2) {
        if (stateFromStores !== tmp2) {
          let track = closure_5;
          const tmp2 = stateFromStores ? track.ACTIVITY_VIDEO_PIP_SHOWN : track.ACTIVITY_VIDEO_PIP_HIDDEN;
          track = stateFromStores(tmp2[6]).track;
          const obj = {};
          ({ id: obj.channel_id, guild_id: obj.guild_id } = arg0);
          ({ applicationId: obj.application_id, compositeInstanceId: obj.activity_session_id } = stateFromStores);
          track(tmp2, obj);
          const tmp5 = stateFromStores(tmp2[6]);
        }
      }
    }
  }, items1);
};
