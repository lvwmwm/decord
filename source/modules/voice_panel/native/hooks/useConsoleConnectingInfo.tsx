// Module ID: 17095
// Function ID: 17096
// Name: useConsoleConnectingInfo
// Dependencies: [4498, 4499, 9144, 644, 17096, 9392, 17097, 17098, 2]
// Exports: default

// Module 17095 (useConsoleConnectingInfo)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 9144 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9392 */;
import useShouldDisplayCancelConsoleTransferDefault from "useShouldDisplayCancelConsoleTransfer" /* 17096 */;
import getConsoleColorDefault from "getConsoleColor" /* 17098 */;
import closure_3 from "set" /* 4498 */;
import closure_4 from "handleUpdate" /* 4499 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  const tmp3 = useVoiceStateForRemoteSessionDefault();
  const _require = tmp3;
  let channelId;
  if (tmp3 != null) {
    channelId = tmp3.channelId;
  }
  let obj = _require(644);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [closure_4];
  const stateFromStores1 = _require(644).useStateFromStores(items1, () => {
    let str;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return closure_1_4.getSessionById(str);
  });
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.type;
  }
  if (str == null) {
    let os;
    if (stateFromStores1 != null) {
      os = stateFromStores1.clientInfo.os;
    }
    str = os;
  }
  if (str == null) {
    str = "";
  }
  let channelId1;
  const obj2 = _require(644);
  const tmp5 = _require;
  if (stateFromStores != null) {
    channelId1 = stateFromStores.channelId;
  }
  obj = { isConnectingToConsole: channelId1 === arg0, isConnectingOrConnectedToConsole: null, icon: null, text: null, color: null, displayCancel: null };
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  obj[1] = channelId2 === arg0 || channelId === arg0;
  obj[2] = getConsoleIconDefault(str);
  const tmp9 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  obj[3] = tmp5(17097).getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj[4] = getConsoleColorDefault(str);
  obj[5] = tmp9;
  return obj;
};
