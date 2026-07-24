// Module ID: 15898
// Function ID: 122846
// Name: useConsoleConnectingInfo
// Dependencies: [4144, 4145, 8973, 624, 15899, 9093, 15900, 15901, 2]
// Exports: default

// Module 15898 (useConsoleConnectingInfo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

let require = arg1;
const result = require("useVoiceStateForRemoteSession").fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  const tmp = importDefault(8973)();
  const require = tmp;
  let channelId;
  if (null != tmp) {
    channelId = tmp.channelId;
  }
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getAwaitingRemoteSessionInfo());
  const items1 = [closure_4];
  const stateFromStores1 = require(624) /* defaultAreStatesEqual */.useStateFromStores(items1, () => {
    let sessionId;
    if (null != outer1_4) {
      sessionId = tmp.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    return outer1_4.getSessionById(str);
  });
  let type;
  if (null != stateFromStores) {
    type = stateFromStores.type;
  }
  if (null == type) {
    let os;
    if (null != stateFromStores1) {
      os = stateFromStores1.clientInfo.os;
    }
    type = os;
  }
  let str = "";
  if (null != type) {
    str = type;
  }
  obj = {};
  let channelId1;
  const obj2 = require(624) /* defaultAreStatesEqual */;
  if (null != stateFromStores) {
    channelId1 = stateFromStores.channelId;
  }
  obj.isConnectingToConsole = channelId1 === arg0;
  let channelId2;
  if (null != stateFromStores) {
    channelId2 = stateFromStores.channelId;
  }
  obj.isConnectingOrConnectedToConsole = channelId2 === arg0 || channelId === arg0;
  obj.icon = importDefault(9093)(str);
  const tmp8 = importDefault(15899)(stateFromStores);
  obj.text = require(15900) /* getConsoleConnectingText */.getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj.color = importDefault(15901)(str);
  obj.displayCancel = tmp8;
  return obj;
};
