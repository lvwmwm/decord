// Module ID: 11727
// Function ID: 11728
// Name: VoicePanelDockLayout
// Dependencies: [19, 5564, 6403, 11728, 504, 1630, 11730, 2]
// Exports: useChannelDockHeight, useChatDockHeight, useVoicePanelDockHeight

// Module 11727 (VoicePanelDockLayout)
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11728 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5564 */;
import VoicePanelStore from "VoicePanelStore" /* 6403 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp5;
const MainTabsNavigatorPanelContextDefault = tmp5(11730);
const f101935 = (voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0;
const f101936 = () => {
  const tmp = closure_0 && null != RTCConnectionStore.getChannelId();
  return tmp;
};
const f101937 = (voicePanelsWithDock) => {
  const arr = Array.from(voicePanelsWithDock.voicePanelsWithDock);
  return arr.some((item) => {
    const voicePanelsPIP = voicePanelsWithDock.voicePanelsPIP;
    return voicePanelsPIP.has(item);
  });
};
const getVoicePanelDockHeight = VoicePanelDockConstants.getVoicePanelDockHeight;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockLayout.tsx");

export function useVoicePanelDockHeight() {
  let closure_0;
  let num;
  const tmp = VoicePanelStore(f101935);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f101936, items1);
  VoicePanelStore(f101937);
  if (stateFromStores) {
    num = getVoicePanelDockHeight(tmp4);
  } else {
    num = 0;
  }
  return num;
}
export function useChatDockHeight() {
  let closure_0;
  let num;
  const tmp = VoicePanelStore(f101935);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f101936, items1);
  VoicePanelStore(f101937);
  if (stateFromStores) {
    num = getVoicePanelDockHeight(tmp6);
  } else {
    num = 0;
  }
  let num2 = 0;
  if (!react.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList) {
    num2 = num;
  }
  return num2;
}
export function useChannelDockHeight() {
  let closure_0;
  let num;
  let tmp = VoicePanelStore(f101935);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f101936, items1);
  VoicePanelStore(f101937);
  if (stateFromStores) {
    num = getVoicePanelDockHeight(tmp6);
  } else {
    num = 0;
  }
  let num2 = 0;
  const obj2 = react;
  if (!react.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList) {
    num2 = num;
  }
  let num3 = 0;
  if (obj2.useContext(MainTabsNavigatorPanelContextDefault).isInMainTabs) {
    num3 = num2;
  }
  return num3;
}
