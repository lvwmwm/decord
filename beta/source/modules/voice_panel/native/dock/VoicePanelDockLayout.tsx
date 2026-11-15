// Module ID: 11411
// Function ID: 11412
// Name: VoicePanelDockLayout
// Dependencies: [19, 5925, 6963, 11412, 504, 1627, 11414, 2]
// Exports: useChannelDockHeight, useChatDockHeight, useVoicePanelDockHeight

// Module 11411 (VoicePanelDockLayout)
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11412 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5925 */;
import VoicePanelStore from "VoicePanelStore" /* 6963 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp5;
const MainTabsNavigatorPanelContextDefault = tmp5(11414);
const f100791 = (voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0;
const f100792 = () => {
  const tmp = closure_0 && null != RTCConnectionStore.getChannelId();
  return tmp;
};
const f100793 = (voicePanelsWithDock) => {
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
  const tmp = VoicePanelStore(f100791);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f100792, items1);
  VoicePanelStore(f100793);
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
  let num2;
  const tmp = VoicePanelStore(f100791);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f100792, items1);
  VoicePanelStore(f100793);
  if (stateFromStores) {
    num = getVoicePanelDockHeight(tmp6);
  } else {
    num = 0;
  }
  const isNavigatorPanelsBesideChannelList = react.useContext(MainTabsNavigatorPanelContextDefault).isNavigatorPanelsBesideChannelList;
  if (undefined === isNavigatorPanelsBesideChannelList) {
    num2 = num;
  } else {
    num2 = 0;
  }
  return num2;
}
export function useChannelDockHeight() {
  let closure_0;
  let num;
  let num2;
  let tmp = VoicePanelStore(f100791);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f100792, items1);
  VoicePanelStore(f100793);
  if (stateFromStores) {
    num = getVoicePanelDockHeight(tmp6);
  } else {
    num = 0;
  }
  const isNavigatorPanelsBesideChannelList = react.useContext(tmp5(11414)).isNavigatorPanelsBesideChannelList;
  const obj2 = react;
  if (undefined === isNavigatorPanelsBesideChannelList) {
    num2 = num;
  } else {
    num2 = 0;
  }
  let num3 = 0;
  if (obj2.useContext(MainTabsNavigatorPanelContextDefault).isInMainTabs) {
    num3 = num2;
  }
  return num3;
}
