// Module ID: 9472
// Function ID: 9473
// Name: DisconnectRemoteButton
// Dependencies: [19, 4853, 21, 504, 8855, 6413, 9430, 1115, 9243, 9097, 2]
// Exports: DisconnectRemoteButton

// Module 9472 (DisconnectRemoteButton)
import Fragment from "Fragment" /* 21 */;
import CallBarActionAll from "CallBarAction" /* 8855 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 9243 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  const tmp = channel;
  const isSmallSize = channel.isSmallSize;
  let obj = channel(504);
  const items = [GameConsoleStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { awaitingRemote: null != GameConsoleStore.getAwaitingRemoteSessionInfo(), remoteSessionId: GameConsoleStore.getRemoteSessionId() };
    return obj;
  });
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  const awaitingRemote = stateFromStoresObject.awaitingRemote;
  const PrimaryActionButton = CallBarActionAll.PrimaryActionButton;
  const intl = tmp(1115).intl;
  return <PrimaryActionButton source={remoteSessionId(awaitingRemote ? 6413 : 9430)} accessibilityLabel={intl.string(tmp(1115).t["6vrfgt"])} isSmallSize={isSmallSize} onPress={function onPress() {
    if (null != remoteSessionId) {
      const obj2 = GameConsoleActionCreators;
      obj2.remoteDisconnect(tmp);
      const obj3 = CallsUtils;
      obj3.handleDisconnect(channel);
    } else {
      const obj = GameConsoleActionCreators;
      obj.disconnectRemote();
    }
  }} />;
};
