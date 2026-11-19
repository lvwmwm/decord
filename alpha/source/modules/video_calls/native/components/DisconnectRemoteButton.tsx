// Module ID: 10973
// Function ID: 10974
// Name: DisconnectRemoteButton
// Dependencies: [19, 5534, 21, 504, 10596, 6913, 10895, 1113, 10956, 9543, 2]
// Exports: DisconnectRemoteButton

// Module 10973 (DisconnectRemoteButton)
import Fragment from "Fragment" /* 21 */;
import CallsUtils from "CallsUtils" /* 9543 */;
import CallBarActionAll from "CallBarAction" /* 10596 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 10956 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5534 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export function DisconnectRemoteButton(channel) {
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
  const intl = tmp(1113).intl;
  return <PrimaryActionButton source={remoteSessionId(awaitingRemote ? 6913 : 10895)} accessibilityLabel={intl.string(tmp(1113).t["6vrfgt"])} isSmallSize={isSmallSize} onPress={function onPress() {
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
}
