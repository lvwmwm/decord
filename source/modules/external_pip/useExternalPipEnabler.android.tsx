// Module ID: 15566
// Function ID: 118764
// Name: useExternalPIPEnabler
// Dependencies: []
// Exports: default

// Module 15566 (useExternalPIPEnabler)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/external_pip/useExternalPipEnabler.android.tsx");

export default function useExternalPIPEnabler(disabled) {
  disabled = disabled.disabled;
  const arg1 = disabled;
  const items = [closure_2, closure_4, closure_3];
  const items1 = [disabled];
  return arg1(dependencyMap[3]).useStateFromStoresObject(items, () => {
    const channelId = channelId.getChannelId();
    if (null != channelId) {
      if (!disabled) {
        const videoParticipants = store.getVideoParticipants(channelId);
        let tmp3 = videoParticipants.filter((localVideoDisabled) => !localVideoDisabled.localVideoDisabled).length > 0;
        if (!tmp3) {
          const streamParticipants = store.getStreamParticipants(channelId);
          const found = streamParticipants.filter((user) => user.user.id !== id.getId());
          tmp3 = null != found.find((streamId) => null != streamId.streamId);
        }
        const obj = {};
        const merged = Object.assign(disabled(closure_1[4]).DEFAULT_STATE);
        obj["externalPipEnabled"] = tmp3;
        return obj;
      }
    }
    return disabled(closure_1[4]).DEFAULT_STATE;
  }, items1);
};
