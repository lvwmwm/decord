// Module ID: 10731
// Function ID: 83424
// Name: DisconnectRemoteButton
// Dependencies: []
// Exports: DisconnectRemoteButton

// Module 10731 (DisconnectRemoteButton)
importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  const arg1 = channel.channel;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ awaitingRemote: null != store.getAwaitingRemoteSessionInfo(), remoteSessionId: store.getRemoteSessionId() }));
  const importDefault = stateFromStoresObject.remoteSessionId;
  obj = {};
  if (stateFromStoresObject.awaitingRemote) {
    let tmp5 = tmp4[5];
  } else {
    tmp5 = tmp4[6];
  }
  obj.source = importDefault(tmp5);
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.6vrfgt);
  obj.isSmallSize = channel.isSmallSize;
  obj.onPress = function onPress() {
    if (null != remoteSessionId) {
      channel(closure_3[8]).remoteDisconnect(remoteSessionId);
      const obj2 = channel(closure_3[8]);
      channel(closure_3[9]).handleDisconnect(channel);
      const obj3 = channel(closure_3[9]);
    } else {
      channel(closure_3[8]).disconnectRemote();
      const obj = channel(closure_3[8]);
    }
  };
  return jsx(importAll(dependencyMap[4]).PrimaryActionButton, obj);
};
