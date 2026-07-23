// Module ID: 15773
// Function ID: 121726
// Name: usePanelOpenState
// Dependencies: [57, 31, 4342, 10015, 653, 3991, 1207, 10811, 3952, 3965, 10804, 10484, 2]
// Exports: default

// Module 15773 (usePanelOpenState)
import _slicedToArray from "_slicedToArray";
import result from "result";
import withEqualityFn from "withEqualityFn";
import { VoicePanelModes } from "VoicePanelModes";
import ME from "ME";

let closure_7;
let closure_8;
const require = arg1;
({ ComponentActions: closure_7, Routes: closure_8 } = ME);
let closure_9 = { code: "function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}" };
let closure_10 = { code: "function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}" };
const result = require("withEqualityFn").fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default function usePanelOpenState(arg0, arg1, arg2, connected) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const callback = connected;
  function doCloseChannel() {
    state = state.getState();
    return state.closeChannel(closure_0);
  }
  let obj = _require(3991);
  const fn = function f() {
    return { connected: connected.get() };
  };
  fn.__closure = { connected };
  fn.__workletHash = 8350408810765;
  fn.__initData = closure_9;
  class O {
    constructor(arg0, arg1) {
      connected = undefined;
      if (null != arg1) {
        connected = arg1.connected;
      }
      tmp2 = true === connected && !arg0.connected;
      if (tmp2) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        num = 5;
        obj = closure_0(closure_2[5]);
        tmp5 = doCloseChannel;
        tmp6 = obj.runOnJS(doCloseChannel)();
      }
      return;
    }
  }
  obj = { runOnJS: _require(3991).runOnJS, doCloseChannel };
  O.__closure = obj;
  O.__workletHash = 9166012598595;
  O.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, O);
  const items = [arg0, arg1, arg2, connected];
  const effect = first.useEffect(() => {
    function componentActionOpen(channelId) {
      let tmp = componentActionOpen === channelId.channelId;
      if (tmp) {
        tmp = componentActionClose.get() !== doCloseChannel.PANEL;
      }
      if (tmp) {
        outer1_2(doCloseChannel.PANEL);
      }
    }
    function componentActionClose() {
      if (outer1_3.get()) {
        if (componentActionClose.get() !== doCloseChannel.PIP) {
          outer1_2(doCloseChannel.PIP);
        }
      } else {
        state = state.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    let ComponentDispatch = callback(1207).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(outer1_7.VOICE_PANEL_OPEN, componentActionOpen);
    let ComponentDispatch2 = callback(1207).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(outer1_7.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = componentActionOpen(1207).ComponentDispatch;
      ComponentDispatch.unsubscribe(outer2_7.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = componentActionOpen(1207).ComponentDispatch;
      ComponentDispatch2.unsubscribe(outer2_7.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items);
  const tmp3 = callback(first.useState(() => callback2(10811).getHistory().location.pathname), 2);
  first = tmp3[0];
  let withEqualityFn = tmp3[1];
  const items1 = [arg0, first];
  const effect1 = first.useEffect(() => {
    let closure_0 = callback2(10811).addRouteChangeListener((pathname) => {
      if (outer1_4 !== pathname.pathname) {
        outer1_5(outer1_4);
        let obj = callback(3952);
        obj = {};
        const RouteParam = callback(3965).RouteParam;
        const RouteParam2 = callback(3965).RouteParam;
        obj.path = outer2_8.CHANNEL(RouteParam.guildId(), RouteParam2.channelId());
        const matchPathResult = obj.matchPath(pathname.pathname, obj);
        const guildIdResult = RouteParam.guildId();
        if (null == obj3.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          let tmp = null != matchPathResult;
          if (tmp) {
            tmp = matchPathResult.params.channelId === callback;
          }
          if (!tmp) {
            callback2(10484)();
          }
        }
        obj3 = callback(10804);
      }
    });
    return () => {
      callback();
    };
  }, items1);
};
