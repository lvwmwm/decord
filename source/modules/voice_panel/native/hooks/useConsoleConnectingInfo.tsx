// Module ID: 16094
// Function ID: 16095
// Name: useConsoleConnectingInfo
// Dependencies: [4269, 4270, 10634, 647, 16095, 12097, 16096, 16097, 2]
// Exports: default

// Module 16094 (useConsoleConnectingInfo)
import set from "set";
import handleUpdate from "handleUpdate";

let require = arg1;
const result = require("useVoiceStateForRemoteSession").fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  const tmp3 = importDefault(10634)();
  const require = tmp3;
  let channelId;
  if (tmp3 != null) {
    channelId = tmp3.channelId;
  }
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [set];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [handleUpdate];
  const stateFromStores1 = require(647) /* defaultAreStatesEqual */.useStateFromStores(items1, () => {
    let str;
    if (tmp3 != null) {
      str = tmp3.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return outer1_4.getSessionById(str);
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
  const obj2 = require(647) /* defaultAreStatesEqual */;
  const tmp5 = require;
  if (stateFromStores != null) {
    channelId1 = stateFromStores.channelId;
  }
  obj = { isConnectingToConsole: channelId1 === arg0, isConnectingOrConnectedToConsole: null, icon: null, text: null, color: null, displayCancel: null };
  let channelId2;
  if (stateFromStores != null) {
    channelId2 = stateFromStores.channelId;
  }
  obj[1] = channelId2 === arg0 || channelId === arg0;
  obj[2] = importDefault(12097)(str);
  const tmp9 = importDefault(16095)(stateFromStores);
  obj[3] = tmp5(16096).getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj[4] = importDefault(16097)(str);
  obj[5] = tmp9;
  return obj;
};
