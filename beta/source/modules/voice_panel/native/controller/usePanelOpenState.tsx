// Module ID: 16915
// Function ID: 16916
// Name: usePanelOpenState
// Dependencies: [32, 19, 5044, 11755, 1074, 4566, 1110, 12305, 4660, 4673, 12298, 8761, 2]
// Exports: default

// Module 16915 (usePanelOpenState)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VoicePanelStore from "VoicePanelStore" /* 5044 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, pathname;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
({ ComponentActions: metroImportDefault, Routes: metroImportAll } = Constants);
const __initData = { code: "function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}" };
const __initData2 = { code: "function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}" };
const result = size.fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default function usePanelOpenState(arg0, arg1, arg2, connected) {
  let closure_2;
  let closure_6;
  let constants2;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  _slicedToArray = connected;
  function doCloseChannel() {
    const state = VoicePanelStore.getState();
    return state.closeChannel(closure_0);
  }
  let obj = require("ReanimatedRexport");
  const fn = function f() {
    const obj = { connected: connected.get() };
    return obj;
  };
  fn.__closure = { connected };
  fn.__workletHash = 8350408810765;
  fn.__initData = __initData;
  class O {
    constructor(connected, connected2) {
      let connected1;
      connected = connected.connected;
      if (connected2 != null) {
        connected1 = connected2.connected;
      }
      const tmp2 = true === connected1 && !connected;
      if (tmp2) {
        const obj = ReanimatedRexport;
        obj.runOnJS(doCloseChannel)();
      }
    }
  }
  let obj2 = { runOnJS: require("ReanimatedRexport").runOnJS, doCloseChannel };
  O.__closure = obj2;
  O.__workletHash = 9166012598595;
  O.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, O);
  const items = [arg0, arg1, arg2, connected];
  const effect = doCloseChannel.useEffect(() => {
    function componentActionOpen(channelId) {
      const tmp = componentActionOpen === channelId.channelId && componentActionClose.get() !== constants.PANEL;
      if (tmp) {
        closure_1_2(constants.PANEL);
      }
    }
    function componentActionClose() {
      if (connected.get()) {
        if (componentActionClose.get() !== constants.PIP) {
          closure_1_2(tmp5.PIP);
        }
      } else {
        const state = first.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = closure_0(closure_2[6]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = closure_0(closure_2[6]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(metroImportDefault.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(metroImportDefault.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items);
  [first, closure_6] = doCloseChannel.useState(() => {
    const obj = closure_1(closure_2[7]);
    return obj.getHistory().location.pathname;
  });
  const items1 = [arg0, first];
  const effect1 = doCloseChannel.useEffect(() => {
    let obj = closure_1(closure_2[7]);
    closure_0 = obj.addRouteChangeListener((pathname) => {
      let CHANNEL;
      let RouteParam2;
      let guildIdResult;
      if (first !== pathname.pathname) {
        closure_1_6(tmp);
        const obj = { path: CHANNEL(guildIdResult, RouteParam2.channelId()) };
        const matchPath = closure_0(closure_2[8]).matchPath;
        pathname = pathname.pathname;
        CHANNEL = constants2.CHANNEL;
        closure_0(closure_2[8]);
        const RouteParam = closure_0(closure_2[9]).RouteParam;
        guildIdResult = RouteParam.guildId();
        RouteParam2 = closure_0(closure_2[9]).RouteParam;
        const matchPathResult = matchPath(pathname, obj);
        const obj2 = closure_0(closure_2[10]);
        const tmp9 = closure_2;
        if (null == obj2.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          const tmp2 = null != matchPathResult && matchPathResult.params.channelId === closure_0;
          if (!tmp2) {
            closure_1(tmp9[11])();
          }
        }
      }
    });
    return () => {
      closure_0();
    };
  }, items1);
};
