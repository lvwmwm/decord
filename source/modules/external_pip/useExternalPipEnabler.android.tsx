// Module ID: 15683
// Function ID: 120937
// Name: useExternalPIPEnabler
// Dependencies: [4143, 1194, 4202, 566, 15684, 2]
// Exports: default

// Module 15683 (useExternalPIPEnabler)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default function useExternalPIPEnabler(disabled) {
  disabled = disabled.disabled;
  const items = [_isNativeReflectConstruct, closure_4, closure_3];
  const items1 = [disabled];
  return disabled(566).useStateFromStoresObject(items, () => {
    const channelId = outer1_4.getChannelId();
    if (null != channelId) {
      if (!disabled) {
        const videoParticipants = outer1_2.getVideoParticipants(channelId);
        let tmp3 = videoParticipants.filter((localVideoDisabled) => !localVideoDisabled.localVideoDisabled).length > 0;
        if (!tmp3) {
          const streamParticipants = outer1_2.getStreamParticipants(channelId);
          const found = streamParticipants.filter((user) => user.user.id !== outer2_3.getId());
          tmp3 = null != found.find((streamId) => null != streamId.streamId);
        }
        const obj = {};
        const merged = Object.assign(disabled(outer1_1[4]).DEFAULT_STATE);
        obj["externalPipEnabled"] = tmp3;
        return obj;
      }
    }
    return disabled(outer1_1[4]).DEFAULT_STATE;
  }, items1);
};
