// Module ID: 11035
// Function ID: 11036
// Name: DisconnectRemoteButton
// Dependencies: [19, 5655, 21, 504, 10658, 7032, 10957, 1112, 11018, 9663, 2]
// Exports: DisconnectRemoteButton

// Module 11035 (DisconnectRemoteButton)
import Fragment from "Fragment" /* 21 */;
import CallsUtils from "CallsUtils" /* 9663 */;
import CallBarActionAll from "CallBarAction" /* 10658 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 11018 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5655 */;
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
  const intl = tmp(1112).intl;
  return <PrimaryActionButton source={remoteSessionId(awaitingRemote ? 7032 : 10957)} accessibilityLabel={intl.string(tmp(1112).t["6vrfgt"])} isSmallSize={isSmallSize} onPress={function onPress() {
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
