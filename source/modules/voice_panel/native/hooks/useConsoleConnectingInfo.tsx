// Module ID: 15960
// Function ID: 123218
// Name: useConsoleConnectingInfo
// Dependencies: [4179, 4180, 8905, 624, 15961, 9029, 15962, 15963, 2]
// Exports: default

// Module 15960 (useConsoleConnectingInfo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

let require = arg1;
const result = require("useVoiceStateForRemoteSession").fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  const tmp = importDefault(8905)();
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
  obj.icon = importDefault(9029)(str);
  const tmp8 = importDefault(15961)(stateFromStores);
  obj.text = require(15962) /* getConsoleConnectingText */.getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj.color = importDefault(15963)(str);
  obj.displayCancel = tmp8;
  return obj;
};
