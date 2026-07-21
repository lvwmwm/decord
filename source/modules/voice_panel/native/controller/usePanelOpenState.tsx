// Module ID: 15648
// Function ID: 119510
// Name: usePanelOpenState
// Dependencies: [31, 10005, 2, 57, 31, 4139, 10006, 10004, 4144, 33, 10005, 682, 477]
// Exports: default

// Module 15648 (usePanelOpenState)
import closure_3 from "module_31";
import dismissPanel from "dismissPanel";
import result2 from "result2";
import { VoicePanelModes } from "_slicedToArray";
import module_31 from "module_31";
import module_477 from "module_477";

({ ComponentActions: closure_7, Routes: closure_8 } = module_31);
let closure_9 = { code: "function usePanelOpenStateTsx1(){const{connected}=this.__closure;return{connected:connected.get()};}" };
let closure_10 = { code: "function usePanelOpenStateTsx2(props,previous){const{runOnJS,doCloseChannel}=this.__closure;const isConnected=props.connected;const wasConnected=(previous===null||previous===void 0?void 0:previous.connected)===true;if(wasConnected&&!isConnected){runOnJS(doCloseChannel)();}}" };
const result = module_477.fileFinishedImporting("modules/voice_panel/native/controller/usePanelOpenState.tsx");

export default function usePanelOpenState(arg0, arg1, arg2, connected) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const callback = connected;
  function doCloseChannel() {
    const state = state.getState();
    return state.closeChannel(arg0);
  }
  const VoicePanelModes = doCloseChannel;
  let obj = arg1(dependencyMap[5]);
  const fn = function f() {
    return { connected: arg3.get() };
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
        tmp3 = arg0;
        tmp4 = arg2;
        num = 5;
        obj = arg0(arg2[5]);
        tmp5 = doCloseChannel;
        tmp6 = obj.runOnJS(doCloseChannel)();
      }
      return;
    }
  }
  obj = { runOnJS: arg1(dependencyMap[5]).runOnJS, doCloseChannel };
  O.__closure = obj;
  O.__workletHash = 9166012598595;
  O.__initData = closure_10;
  const animatedReaction = obj.useAnimatedReaction(fn, O);
  const items = [arg0, arg1, arg2, connected];
  const effect = React.useEffect(() => {
    function componentActionOpen(channelId) {
      let tmp = componentActionOpen === channelId.channelId;
      if (tmp) {
        tmp = componentActionClose.get() !== constants.PANEL;
      }
      if (tmp) {
        callback(constants.PANEL);
      }
    }
    const arg0 = componentActionOpen;
    function componentActionClose() {
      if (closure_3.get()) {
        if (componentActionClose.get() !== constants.PIP) {
          callback(constants.PIP);
        }
      } else {
        const state = state.getState();
        state.closeChannel(componentActionOpen);
      }
    }
    const arg1 = componentActionClose;
    const ComponentDispatch = arg0(arg2[6]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_OPEN, componentActionOpen);
    const ComponentDispatch2 = arg0(arg2[6]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.VOICE_PANEL_CLOSE, componentActionClose);
    return () => {
      const ComponentDispatch = componentActionOpen(closure_2[6]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_OPEN, componentActionOpen);
      const ComponentDispatch2 = componentActionOpen(closure_2[6]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants2.VOICE_PANEL_CLOSE, componentActionClose);
    };
  }, items);
  const tmp3 = callback(React.useState(() => arg1(arg2[7]).getHistory().location.pathname), 2);
  const first = tmp3[0];
  const React = first;
  let result2 = tmp3[1];
  const items1 = [arg0, first];
  const effect1 = React.useEffect(() => {
    let closure_0 = arg1(arg2[7]).addRouteChangeListener((pathname) => {
      if (dismissPanel !== pathname.pathname) {
        callback3(dismissPanel);
        let obj = callback(closure_2[8]);
        obj = {};
        const RouteParam = callback(closure_2[9]).RouteParam;
        const RouteParam2 = callback(closure_2[9]).RouteParam;
        obj.path = closure_8.CHANNEL(RouteParam.guildId(), RouteParam2.channelId());
        const matchPathResult = obj.matchPath(pathname.pathname, obj);
        const guildIdResult = RouteParam.guildId();
        if (null == obj3.extractParamsFromVoiceModalRoute(pathname).voiceChannelId) {
          let tmp = null != matchPathResult;
          if (tmp) {
            tmp = matchPathResult.params.channelId === callback;
          }
          if (!tmp) {
            callback2(closure_2[11])();
          }
        }
        const obj3 = callback(closure_2[10]);
      }
    });
    return () => {
      callback();
    };
  }, items1);
};
