// Module ID: 10530
// Function ID: 10531
// Name: DisconnectRemoteButton
// Dependencies: [19, 5852, 21, 504, 10033, 7752, 10384, 1112, 10512, 8637, 2]
// Exports: DisconnectRemoteButton

// Module 10530 (DisconnectRemoteButton)
import Fragment from "Fragment" /* 21 */;
import CallsUtils from "CallsUtils" /* 8637 */;
import CallBarActionAll from "CallBarAction" /* 10033 */;
import GameConsoleActionCreators from "GameConsoleActionCreators" /* 10512 */;
import react from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5852 */;
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
  return <PrimaryActionButton source={remoteSessionId(awaitingRemote ? 7752 : 10384)} accessibilityLabel={intl.string(tmp(1112).t["6vrfgt"])} isSmallSize={isSmallSize} onPress={function onPress() {
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
