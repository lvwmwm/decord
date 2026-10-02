// Module ID: 16794
// Function ID: 16795
// Name: useExternalPipEnabler
// Dependencies: [4853, 502, 4860, 558, 576, 16795, 504, 2]

// Module 16794 (useExternalPipEnabler)
import ExternalPipEnablerState from "ExternalPipEnablerState" /* 16795 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4853 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4860 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let disabled;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((disabled) => {
  let first;
  let tmp8;
  let tmp9;
  let tmp2 = dependencyMap;
  let obj = disabled(576);
  const cResult = obj.c(4);
  const tmp = disabled;
  disabled = disabled.disabled;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore, RTCConnectionStore, ];
    let tmp7 = AuthenticationStore;
    items[2] = AuthenticationStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== disabled) {
    const fn = function o() {
      let id;
      const channelId = RTCConnectionStore.getChannelId();
      if (null != channelId) {
        const tmp7 = disabled;
        if (!tmp7) {
          const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
          let tmp2 = videoParticipants.filter((localVideoDisabled) => !localVideoDisabled.localVideoDisabled).length > 0;
          const obj = ChannelRTCStore;
          if (!tmp2) {
            const streamParticipants = obj.getStreamParticipants(channelId);
            const found = streamParticipants.filter((user) => user.user.id !== id.getId());
            tmp2 = null != found.find((streamId) => null != streamId.streamId);
          }
          const obj2 = { externalPipEnabled: tmp2 };
          const merged = Object.assign(ExternalPipEnablerState.DEFAULT_STATE);
          return obj2;
        }
      }
      return ExternalPipEnablerState.DEFAULT_STATE;
    };
    const items1 = [disabled];
    cResult[1] = disabled;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp8, tmp9);
}) : ((disabled) => {
  disabled = disabled.disabled;
  let obj = disabled(504);
  const items = [ChannelRTCStore, RTCConnectionStore, AuthenticationStore];
  const items1 = [disabled];
  return obj.useStateFromStoresObject(items, () => {
    let id;
    const channelId = RTCConnectionStore.getChannelId();
    if (null != channelId) {
      const tmp7 = disabled;
      if (!tmp7) {
        const videoParticipants = ChannelRTCStore.getVideoParticipants(channelId);
        let tmp2 = videoParticipants.filter((localVideoDisabled) => !localVideoDisabled.localVideoDisabled).length > 0;
        const obj = ChannelRTCStore;
        if (!tmp2) {
          const streamParticipants = obj.getStreamParticipants(channelId);
          const found = streamParticipants.filter((user) => user.user.id !== id.getId());
          tmp2 = null != found.find((streamId) => null != streamId.streamId);
        }
        const obj2 = { externalPipEnabled: tmp2 };
        const merged = Object.assign(ExternalPipEnablerState.DEFAULT_STATE);
        return obj2;
      }
    }
    return ExternalPipEnablerState.DEFAULT_STATE;
  }, items1);
});
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default tmp2;
