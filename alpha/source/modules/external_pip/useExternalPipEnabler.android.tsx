// Module ID: 17688
// Function ID: 17689
// Name: useExternalPipEnabler
// Dependencies: [6036, 502, 5110, 558, 576, 17689, 504, 2]

// Module 17688 (useExternalPipEnabler)
import ExternalPipEnablerState from "ExternalPipEnablerState" /* 17689 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useExternalPIPEnabler(disabled) {
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
}) : (function useExternalPIPEnabler(disabled) {
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
