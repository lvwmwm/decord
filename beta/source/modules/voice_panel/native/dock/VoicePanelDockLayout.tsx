// Module ID: 11767
// Function ID: 11768
// Name: VoicePanelDockLayout
// Dependencies: [19, 5654, 6495, 11768, 504, 1628, 11770, 2]
// Exports: useChannelDockHeight, useChatDockHeight, useVoicePanelDockHeight

// Module 11767 (VoicePanelDockLayout)
import VoicePanelDockConstants from "VoicePanelDockConstants" /* 11768 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5654 */;
import VoicePanelStore from "VoicePanelStore" /* 6495 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp5;
const MainTabsNavigatorPanelContextDefault = tmp5(11770);
const f100531 = (voicePanelsWithDock) => voicePanelsWithDock.voicePanelsWithDock.size > 0;
const f100532 = () => {
  const tmp = closure_0 && null != RTCConnectionStore.getChannelId();
  return tmp;
};
const f100533 = (voicePanelsWithDock) => {
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
  const tmp = VoicePanelStore(f100531);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f100532, items1);
  VoicePanelStore(f100533);
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
  const tmp = VoicePanelStore(f100531);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f100532, items1);
  VoicePanelStore(f100533);
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
  let tmp = VoicePanelStore(f100531);
  _require = tmp;
  const items = [RTCConnectionStore];
  const items1 = [tmp];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f100532, items1);
  VoicePanelStore(f100533);
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
