// Module ID: 15594
// Function ID: 119017
// Name: useIsConnectedToVoiceChannel
// Dependencies: []
// Exports: default

// Module 15594 (useIsConnectedToVoiceChannel)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const RTCConnectionStates = arg1(dependencyMap[3]).RTCConnectionStates;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/voice_panel/native/hooks/useIsConnectedToVoiceChannel.tsx");

export default function useIsConnectedToVoiceChannel(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_4, closure_2];
  return arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const channelId = store.getChannelId();
    let tmp2 = channelId;
    if (null != arg0) {
      tmp2 = arg0;
    }
    if (tmp2 !== channelId) {
      return false;
    } else if (inChannel.isInChannel(tmp2, id.getId())) {
      return true;
    } else {
      const state = store.getState();
      if (constants.DISCONNECTED !== state) {
        if (constants.NO_ROUTE !== state) {
          return true;
        }
      }
      return false;
    }
  });
};
