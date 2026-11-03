// Module ID: 19265
// Function ID: 19266
// Name: useExternalPipEnabler
// Dependencies: [6963, 502, 5884, 504, 19266, 2]
// Exports: default

// Module 19265 (useExternalPipEnabler)
import ExternalPipEnablerState from "ExternalPipEnablerState" /* 19266 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6963 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5884 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default function useExternalPIPEnabler(disabled) {
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
};
