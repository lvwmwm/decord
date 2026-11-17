// Module ID: 20121
// Function ID: 20122
// Name: useConsoleConnectingInfo
// Dependencies: [6069, 6070, 11531, 563, 20122, 15123, 20123, 20124, 2]
// Exports: default

// Module 20121 (useConsoleConnectingInfo)
import useVoiceStateForRemoteSessionDefault from "useVoiceStateForRemoteSession" /* 11531 */;
import getConsoleIconDefault from "getConsoleIcon" /* 15123 */;
import useShouldDisplayCancelConsoleTransferDefault from "useShouldDisplayCancelConsoleTransfer" /* 20122 */;
import getConsoleColorDefault from "getConsoleColor" /* 20124 */;
import GameConsoleStore from "GameConsoleStore" /* 6069 */;
import SessionsStore from "SessionsStore" /* 6070 */;
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
  tmp5Result = tmp5(20123);
  return obj3;
};
