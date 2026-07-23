// Module ID: 8300
// Function ID: 65528
// Name: PlayerState
// Dependencies: [31, 27, 33, 477, 4130, 3991, 4131, 3827, 7547, 2]

// Module 8300 (PlayerState)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "jsxProd";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ ActivityIndicator: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let str = "";
if (set.isIOS()) {
  str = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
let obj = { UNREADY: 0, [0]: "UNREADY", READY: 1, [1]: "READY", ERRORED: 2, [2]: "ERRORED", UNSTARTED: 3, [3]: "UNSTARTED", ENDED: 4, [4]: "ENDED", PLAYING: 5, [5]: "PLAYING", PAUSED: 6, [6]: "PAUSED", BUFFERING: 7, [7]: "BUFFERING", VIDEO_CUED: 8, [8]: "VIDEO_CUED" };
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ loading: { top: 0, left: 0, right: 0, bottom: 0, position: "absolute", alignItems: "center", justifyContent: "center" } });
let closure_11 = { code: "function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
let closure_12 = { code: "function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
let result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebView.tsx");

export default importAllResult.memo(importAllResult.forwardRef((playerState) => {
  let injectedJavaScript;
  let style;
  playerState = playerState.playerState;
  const onDataReceived = playerState.onDataReceived;
  const baseURL = playerState.baseURL;
  const panGestureConfig = playerState.panGestureConfig;
  let obj = { style: 0, playerState: 0, onDataReceived: 0, baseURL: 0, injectedJavaScript: 0, panGestureConfig: 0 };
  ({ style, injectedJavaScript } = playerState);
  Object.setPrototypeOf(null);
  const merged = Object.assign(playerState, obj);
  let obj1 = playerState(baseURL[5]);
  const sharedValue = obj1.useSharedValue(1);
  let obj2 = playerState(baseURL[5]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = playerState(baseURL[5]);
  const fn = function f() {
    const obj = { opacity: playerState(baseURL[6]).withTiming(sharedValue1.get()) };
    return obj;
  };
  obj = { withTiming: playerState(baseURL[6]).withTiming, webviewOpacity: sharedValue1 };
  fn.__closure = obj;
  fn.__workletHash = 2179142865986;
  fn.__initData = closure_11;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp3 = callback2();
  class S {
    constructor() {
      obj = {};
      obj2 = playerState(baseURL[6]);
      obj.opacity = obj2.withTiming(closure_4.get());
      return obj;
    }
  }
  obj = { withTiming: playerState(baseURL[6]).withTiming, loaderOpacity: sharedValue };
  S.__closure = obj;
  S.__workletHash = 7752174298017;
  S.__initData = closure_12;
  const items = [playerState, sharedValue, sharedValue1];
  const animatedStyle1 = playerState(baseURL[5]).useAnimatedStyle(S);
  const effect = panGestureConfig.useEffect(() => {
    let tmp = playerState !== outer1_9.BUFFERING;
    if (tmp) {
      tmp = playerState !== outer1_9.PLAYING;
    }
    if (tmp) {
      tmp = playerState !== outer1_9.ERRORED;
    }
    if (!tmp) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1);
    }
  }, items);
  const items1 = [onDataReceived, panGestureConfig];
  const items2 = [baseURL];
  const callback = panGestureConfig.useCallback((nativeEvent) => {
    let overlayEnabled;
    let overlayEnabled2;
    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
    if (null != parsed) {
      if ("click" === parsed.event) {
        ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = panGestureConfig);
        const result = overlayEnabled.set(!overlayEnabled2.get());
      }
    }
    onDataReceived(nativeEvent.nativeEvent.data);
  }, items1);
  obj1 = { style };
  const callback1 = panGestureConfig.useCallback((url) => {
    let tmp = "about:blank" !== url.url;
    if (tmp) {
      url = url.url;
      tmp = !url.startsWith(baseURL);
    }
    if (tmp) {
      tmp = null == url.isTopFrame || url.isTopFrame;
      const tmp4 = null == url.isTopFrame || url.isTopFrame;
    }
    let flag = !tmp;
    if (!flag) {
      onDataReceived(baseURL[7]).openURL(url.url);
      flag = false;
      const obj = onDataReceived(baseURL[7]);
    }
    return flag;
  }, items2);
  obj2 = { style: items3 };
  items3 = [animatedStyle, { flex: 1 }];
  obj3 = {};
  const obj6 = playerState(baseURL[5]);
  const tmp11 = closure_7;
  const tmp12 = sharedValue1;
  const merged1 = Object.assign(merged);
  obj3["injectedJavaScript"] = "" + injectedJavaScript + "\n" + str;
  obj3["bounces"] = false;
  obj3["ref"] = arg1;
  obj3["scrollEnabled"] = false;
  obj3["javaScriptEnabled"] = true;
  obj3["onMessage"] = callback;
  obj3["allowsInlineMediaPlayback"] = true;
  obj3["mediaPlaybackRequiresUserAction"] = false;
  obj3["onShouldStartLoadWithRequest"] = callback1;
  obj2.children = callback(onDataReceived(baseURL[8]), obj3);
  const items4 = [callback(onDataReceived(baseURL[5]).View, obj2), ];
  let tmp15 = playerState !== obj.PLAYING;
  if (tmp15) {
    tmp15 = playerState !== obj.PAUSED;
  }
  if (tmp15) {
    const obj4 = {};
    const items5 = [animatedStyle1, tmp3.loading];
    obj4.style = items5;
    obj4.children = callback(sharedValue, { color: "white", size: "large" });
    tmp15 = callback(onDataReceived(baseURL[5]).View, obj4);
  }
  items4[1] = tmp15;
  obj1.children = items4;
  return tmp11(tmp12, obj1);
}));
export const PlayerState = obj;
