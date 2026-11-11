// Module ID: 12965
// Function ID: 12966
// Name: DisconnectRemoteButton
// Dependencies: [19, 6009, 21, 504, 12639, 7366, 12905, 1113, 10758, 10516, 2]
// Exports: DisconnectRemoteButton

// Module 12965 (DisconnectRemoteButton)
import Fragment from "Fragment" /* 21 */;
import CallsUtils from "CallsUtils" /* 10516 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 10758 */;
import CallBarActionAll from "CallBarAction" /* 12639 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 6009 */;
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
  return <PrimaryActionButton source={remoteSessionId(awaitingRemote ? 7366 : 12905)} accessibilityLabel={intl.string(tmp(1113).t["6vrfgt"])} isSmallSize={isSmallSize} onPress={function onPress() {
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
