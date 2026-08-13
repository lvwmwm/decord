// Module ID: 10869
// Function ID: 10870
// Name: DisconnectRemoteButton
// Dependencies: [19, 4359, 21, 589, 10642, 8072, 10815, 1236, 10853, 9198, 2]
// Exports: DisconnectRemoteButton

// Module 10869 (DisconnectRemoteButton)
import "noop";
import set from "set";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  let remoteSessionId;
  let obj = channel(589);
  const items = [set];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ awaitingRemote: null != store.getAwaitingRemoteSessionInfo(), remoteSessionId: store.getRemoteSessionId() }));
  remoteSessionId = stateFromStoresObject.remoteSessionId;
  obj = { source: null, accessibilityLabel: null, isSmallSize: null, onPress: null };
  obj[0] = remoteSessionId(stateFromStoresObject.awaitingRemote ? 8072 : 10815);
  const intl = tmp(1236).intl;
  obj[1] = intl.string(channel(1236).t["6vrfgt"]);
  obj[2] = channel.isSmallSize;
  obj[3] = function onPress() {
    if (null != remoteSessionId) {
      channel(outer1_3[8]).remoteDisconnect(tmp);
      const obj2 = channel(outer1_3[8]);
      channel(outer1_3[9]).handleDisconnect(channel);
      const obj3 = channel(outer1_3[9]);
    } else {
      channel(outer1_3[8]).disconnectRemote();
      const obj = channel(outer1_3[8]);
    }
  };
  return jsx(importAll(10642).PrimaryActionButton, { source: null, accessibilityLabel: null, isSmallSize: null, onPress: null });
};
