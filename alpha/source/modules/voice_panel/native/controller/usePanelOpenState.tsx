// Module ID: 19360
// Function ID: 19361
// Name: usePanelOpenState
// Dependencies: [32, 19, 6995, 11360, 1072, 1652, 1705, 1108, 12203, 5177, 5190, 12196, 11066, 2]
// Exports: default

// Module 19360 (usePanelOpenState)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11360 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VoicePanelStore from "VoicePanelStore" /* 6995 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, pathname;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ ComponentActions: metroImportDefault, Routes: metroImportAll } = Constants);
let closure_9 = { code: "(function usePanelOpenStateTsx1(){let[connected]=this.__closure;return{connected:connected.get()};})" };
let closure_10 = { code: "(function usePanelOpenStateTsx2(props,previous){let[scheduleOnRN,doCloseChannel]=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){scheduleOnRN(doCloseChannel);}})" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default function usePanelOpenState(arg0, arg1, arg2, arg3) {
  let closure_2;
  let closure_3;
  let closure_5;
  let constants2;
  let constants3;
  let first;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  _slicedToArray = arg3;
  let tmp = _require;
  let tmp2 = dependencyMap;
  const items = [closure_9, arg3];
  [tmp4, tmp5] = items;
  function usePanelOpenStateTsx1() {
    const obj = { connected: _undefined.get() };
    return obj;
  }
  const items1 = [tmp5];
  usePanelOpenStateTsx1.__closure = items1;
  usePanelOpenStateTsx1.__workletHash = 11139062009940;
  usePanelOpenStateTsx1.__initData = tmp4;
  const items2 = [closure_10, , ];
  const useAnimatedReaction = require("module_1652").useAnimatedReaction;
  const tmp3 = require("module_1652");
  items2[1] = tmp(1705).scheduleOnRN;
  items2[2] = function doCloseChannel() {
    const state = VoicePanelStore.getState();
    return state.closeChannel(closure_0);
  };
  let c0;
  let c1;
  [tmp6, tmp7, tmp8] = items2;
  function usePanelOpenStateTsx2(connected, connected2) {
    let connected1;
    connected = connected.connected;
    if (connected2 != null) {
      connected1 = connected2.connected;
    }
    const tmp2 = true === connected1 && !connected;
    if (tmp2) {
      _undefined(c1);
    }
  }
  const items3 = [tmp7, tmp8];
  usePanelOpenStateTsx2.__closure = items3;
  usePanelOpenStateTsx2.__workletHash = 9904230510523;
  usePanelOpenStateTsx2.__initData = tmp6;
  const animatedReaction = useAnimatedReaction(usePanelOpenStateTsx1, usePanelOpenStateTsx2);
  const items4 = [arg0, arg1, arg2, arg3];
  const effect = first.useEffect(() => {
    function componentActionOpen(channelId) {
      const tmp = componentActionOpen === channelId.channelId && componentActionClose.get() !== constants.PANEL;
      if (tmp) {
        closure_1_2(constants.PANEL);
      }
    }
    function componentActionClose() {
      if (closure_1_3.get()) {
        if (componentActionClose.get() !== constants.PIP) {
          closure_1_2(tmp5.PIP);
        }
      } else {
        state = state.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = closure_0(closure_2[7]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants2.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = closure_0(closure_2[7]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants2.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(metroImportDefault.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(metroImportDefault.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items4);
  [first, closure_5] = first.useState(() => {
    const obj = closure_1(closure_2[8]);
    return obj.getHistory().location.pathname;
  });
  const items5 = [arg0, first];
  const effect1 = first.useEffect(() => {
    let obj = closure_1(closure_2[8]);
    closure_0 = obj.addRouteChangeListener((pathname) => {
      let CHANNEL;
      let RouteParam2;
      let guildIdResult;
      if (first !== pathname.pathname) {
        closure_1_5(tmp);
        const obj = { path: CHANNEL(guildIdResult, RouteParam2.channelId()) };
        const matchPath = closure_0(closure_2[9]).matchPath;
        pathname = pathname.pathname;
        CHANNEL = constants3.CHANNEL;
        closure_0(closure_2[9]);
        const RouteParam = closure_0(closure_2[10]).RouteParam;
        guildIdResult = RouteParam.guildId();
        RouteParam2 = closure_0(closure_2[10]).RouteParam;
        const matchPathResult = matchPath(pathname, obj);
        const obj2 = closure_0(closure_2[11]);
        const tmp9 = closure_2;
        if (null == obj2.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          const tmp2 = null != matchPathResult && matchPathResult.params.channelId === closure_0;
          if (!tmp2) {
            closure_1(tmp9[12])();
          }
        }
      }
    });
    return () => {
      closure_0();
    };
  }, items5);
};
