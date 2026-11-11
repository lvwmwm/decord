// Module ID: 19920
// Function ID: 19921
// Name: useConsoleConnectingInfo
// Dependencies: [6009, 6010, 10755, 563, 19921, 10774, 19922, 19923, 2]
// Exports: default

// Module 19920 (useConsoleConnectingInfo)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 10755 */;
import getConsoleIconDefault from "getConsoleIcon" /* 10774 */;
import useShouldDisplayCancelConsoleTransferDefault from "useShouldDisplayCancelConsoleTransfer" /* 19921 */;
import getConsoleColorDefault from "getConsoleColor" /* 19923 */;
import GameConsoleStore from "GameConsoleStore" /* 6009 */;
import SessionsStore from "SessionsStore" /* 6010 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  let awaitingRemoteSessionInfo;
  let channelId2;
  let sessionId;
  let tmp5Result;
  const tmp3 = useVoiceStateForRemoteSessionDefault();
  _require = tmp3;
  let channelId;
  if (tmp3 != null) {
    channelId = tmp3.channelId;
  }
  const items = [GameConsoleStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [SessionsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let str;
    const getSessionById = SessionsStore.getSessionById;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return getSessionById(str);
  });
  let str;
  const tmp5 = _require;
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
  const tmp9 = useShouldDisplayCancelConsoleTransferDefault(stateFromStores);
  if (stateFromStores != null) {
    channelId1 = stateFromStores.channelId;
  }
  const obj3 = { isConnectingToConsole: channelId1 === arg0, isConnectingOrConnectedToConsole: channelId2 === arg0 || channelId === arg0, icon: getConsoleIconDefault(str), text: tmp5Result.getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0), color: getConsoleColorDefault(str), displayCancel: tmp9 };
  channelId2 = undefined;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  tmp5Result = tmp5(19922);
  return obj3;
};
