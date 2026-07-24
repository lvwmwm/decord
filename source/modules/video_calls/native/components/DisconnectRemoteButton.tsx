// Module ID: 10771
// Function ID: 83689
// Name: DisconnectRemoteButton
// Dependencies: [31, 4144, 33, 566, 10578, 7696, 10734, 1212, 9079, 8875, 2]
// Exports: DisconnectRemoteButton

// Module 10771 (DisconnectRemoteButton)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/DisconnectRemoteButton.tsx");

export const DisconnectRemoteButton = function DisconnectRemoteButton(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ awaitingRemote: null != outer1_4.getAwaitingRemoteSessionInfo(), remoteSessionId: outer1_4.getRemoteSessionId() }));
  const remoteSessionId = stateFromStoresObject.remoteSessionId;
  obj = {};
  if (stateFromStoresObject.awaitingRemote) {
    let tmp5 = 7696;
  } else {
    tmp5 = 10734;
  }
  obj.source = remoteSessionId(tmp5);
  const intl = channel(1212).intl;
  obj.accessibilityLabel = intl.string(channel(1212).t["6vrfgt"]);
  obj.isSmallSize = channel.isSmallSize;
  obj.onPress = function onPress() {
    if (null != remoteSessionId) {
      channel(outer1_3[8]).remoteDisconnect(remoteSessionId);
      const obj2 = channel(outer1_3[8]);
      channel(outer1_3[9]).handleDisconnect(channel);
      const obj3 = channel(outer1_3[9]);
    } else {
      channel(outer1_3[8]).disconnectRemote();
      const obj = channel(outer1_3[8]);
    }
  };
  return jsx(importAll(10578).PrimaryActionButton, {});
};
