// Module ID: 8293
// Function ID: 65479
// Name: PlayerState
// Dependencies: []

// Module 8293 (PlayerState)
const importAllResult = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let str = "";
if (obj2.isIOS()) {
  str = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
const obj = { UNREADY: 0, [0]: "UNREADY", READY: 1, [1]: "READY", ERRORED: 2, [2]: "ERRORED", UNSTARTED: 3, [3]: "UNSTARTED", ENDED: 4, [4]: "ENDED", PLAYING: 5, [5]: "PLAYING", PAUSED: 6, [6]: "PAUSED", BUFFERING: 7, [7]: "BUFFERING", VIDEO_CUED: 8, [8]: "VIDEO_CUED" };
const obj2 = arg1(dependencyMap[3]);
let closure_10 = arg1(dependencyMap[4]).createStyles({ loading: { 9223372036854775807: 1879048719, 9223372036854775807: null, 9223372036854775807: null, 0: null, 0: null, 9223372036854775807: null, 0: null } });
let closure_11 = { code: "function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
let closure_12 = { code: "function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
const obj4 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo(importAllResult.forwardRef((playerState) => {
  let injectedJavaScript;
  let style;
  playerState = playerState.playerState;
  const arg1 = playerState;
  const onDataReceived = playerState.onDataReceived;
  const importDefault = onDataReceived;
  const baseURL = playerState.baseURL;
  const dependencyMap = baseURL;
  const panGestureConfig = playerState.panGestureConfig;
  let obj = { LIGHT: true, st: true, accessible: true, hash: true, height: true, getChannel: true };
  ({ style, injectedJavaScript } = playerState);
  Object.setPrototypeOf(null);
  const merged = Object.assign(playerState, obj);
  let obj1 = arg1(dependencyMap[5]);
  const sharedValue = obj1.useSharedValue(1);
  let obj2 = arg1(dependencyMap[5]);
  const sharedValue1 = obj2.useSharedValue(0);
  let obj3 = arg1(dependencyMap[5]);
  const fn = function f() {
    const obj = { opacity: playerState(baseURL[6]).withTiming(sharedValue1.get()) };
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[6]).withTiming, webviewOpacity: sharedValue1 };
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
  obj = { withTiming: arg1(dependencyMap[6]).withTiming, loaderOpacity: sharedValue };
  S.__closure = obj;
  S.__workletHash = 7752174298017;
  S.__initData = closure_12;
  const items = [playerState, sharedValue, sharedValue1];
  const animatedStyle1 = arg1(dependencyMap[5]).useAnimatedStyle(S);
  const effect = importAllResult.useEffect(() => {
    let tmp = playerState !== constants.BUFFERING;
    if (tmp) {
      tmp = playerState !== constants.PLAYING;
    }
    if (tmp) {
      tmp = playerState !== constants.ERRORED;
    }
    if (!tmp) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1);
    }
  }, items);
  const items1 = [onDataReceived, panGestureConfig];
  const items2 = [baseURL];
  const callback = importAllResult.useCallback((nativeEvent) => {
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
  const callback1 = importAllResult.useCallback((url) => {
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
  const items3 = [animatedStyle, { flex: 1 }];
  obj3 = {};
  const obj6 = arg1(dependencyMap[5]);
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
  obj2.children = callback(importDefault(dependencyMap[8]), obj3);
  const items4 = [callback(importDefault(dependencyMap[5]).View, obj2), ];
  let tmp15 = playerState !== obj.PLAYING;
  if (tmp15) {
    tmp15 = playerState !== obj.PAUSED;
  }
  if (tmp15) {
    const obj4 = {};
    const items5 = [animatedStyle1, tmp3.loading];
    obj4.style = items5;
    obj4.children = callback(sharedValue, {});
    tmp15 = callback(importDefault(dependencyMap[5]).View, obj4);
  }
  items4[1] = tmp15;
  obj1.children = items4;
  return tmp11(tmp12, obj1);
}));
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebView.tsx");

export default memoResult;
export const PlayerState = obj;
