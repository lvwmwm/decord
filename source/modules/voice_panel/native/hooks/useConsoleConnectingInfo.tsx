// Module ID: 15726
// Function ID: 120308
// Name: useConsoleConnectingInfo
// Dependencies: []
// Exports: default

// Module 15726 (useConsoleConnectingInfo)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/voice_panel/native/hooks/useConsoleConnectingInfo.tsx");

export default function useConsoleConnectingInfo(arg0) {
  const tmp = importDefault(dependencyMap[2])();
  const arg1 = tmp;
  let channelId;
  if (null != tmp) {
    channelId = tmp.channelId;
  }
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items1, () => {
    let sessionId;
    if (null != sessionById) {
      sessionId = tmp.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    return sessionById.getSessionById(str);
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
  const obj2 = arg1(dependencyMap[3]);
  if (null != stateFromStores) {
    channelId1 = stateFromStores.channelId;
  }
  obj.isConnectingToConsole = channelId1 === arg0;
  let channelId2;
  if (null != stateFromStores) {
    channelId2 = stateFromStores.channelId;
  }
  obj.isConnectingOrConnectedToConsole = channelId2 === arg0 || channelId === arg0;
  obj.icon = importDefault(dependencyMap[5])(str);
  const tmp8 = importDefault(dependencyMap[4])(stateFromStores);
  obj.text = arg1(dependencyMap[6]).getConsoleConnectingText(stateFromStores1, stateFromStores, channelId === arg0);
  obj.color = importDefault(dependencyMap[7])(str);
  obj.displayCancel = tmp8;
  return obj;
};
