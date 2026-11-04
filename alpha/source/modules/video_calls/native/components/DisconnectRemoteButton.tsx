// Module ID: 12194
// Function ID: 12195
// Name: DisconnectRemoteButton
// Dependencies: [19, 5899, 21, 504, 11912, 8499, 12132, 1113, 12176, 9366, 2]
// Exports: DisconnectRemoteButton

// Module 12194 (DisconnectRemoteButton)
import Fragment from "Fragment" /* 21 */;
import CallsUtils from "CallsUtils" /* 9366 */;
import CallBarActionAll from "CallBarAction" /* 11912 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 12176 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5899 */;
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
  return <PrimaryActionButton source={remoteSessionId(awaitingRemote ? 8499 : 12132)} accessibilityLabel={intl.string(tmp(1113).t["6vrfgt"])} isSmallSize={isSmallSize} onPress={function onPress() {
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
