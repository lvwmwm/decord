// Module ID: 12195
// Function ID: 12196
// Name: DisconnectRemoteButton
// Dependencies: [19, 5926, 21, 504, 11910, 8462, 12133, 1113, 12177, 9334, 2]
// Exports: DisconnectRemoteButton

// Module 12195 (DisconnectRemoteButton)
import Fragment from "Fragment" /* 21 */;
import CallsUtils from "CallsUtils" /* 9334 */;
import CallBarActionAll from "CallBarAction" /* 11910 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 12177 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5926 */;
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
  return <PrimaryActionButton source={remoteSessionId(awaitingRemote ? 8462 : 12133)} accessibilityLabel={intl.string(tmp(1113).t["6vrfgt"])} isSmallSize={isSmallSize} onPress={function onPress() {
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
