// Module ID: 7745
// Function ID: 7746
// Name: MediaModalWebView
// Dependencies: [19, 17, 21, 1364, 4836, 4566, 4837, 4525, 7746, 2]

// Module 7745 (MediaModalWebView)
import LinkingDefault from "Linking" /* 4525 */;
import timing from "timing" /* 4837 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let playerState, url;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let str = "";
if (PlatformUtils.isIOS()) {
  str = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
const PlayerState = { UNREADY: 0, [0]: "UNREADY", READY: 1, [1]: "READY", ERRORED: 2, [2]: "ERRORED", UNSTARTED: 3, [3]: "UNSTARTED", ENDED: 4, [4]: "ENDED", PLAYING: 5, [5]: "PLAYING", PAUSED: 6, [6]: "PAUSED", BUFFERING: 7, [7]: "BUFFERING", VIDEO_CUED: 8, [8]: "VIDEO_CUED" };
let closure_10 = createStyles.createStyles({ loading: { top: 0, left: 0, right: 0, bottom: 0, position: "absolute", alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
const __initData2 = { code: "function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
const memoResult = react.memo(react.forwardRef((playerState, ref) => {
  let injectedJavaScript;
  let items3;
  let items4;
  let items5;
  let obj9;
  let style;
  let tmp15;
  playerState = playerState.playerState;
  const onDataReceived = playerState.onDataReceived;
  const baseURL = playerState.baseURL;
  const panGestureConfig = playerState.panGestureConfig;
  ({ style, injectedJavaScript } = playerState);
  const merged = Object.assign(playerState, Object.assign({ style: 0, playerState: 0, onDataReceived: 0, baseURL: 0, injectedJavaScript: 0, panGestureConfig: 0 }));
  let tmp3 = baseURL;
  const tmp2 = closure_10();
  let obj = playerState(baseURL[5]);
  const sharedValue = obj.useSharedValue(1);
  let obj2 = playerState(baseURL[5]);
  const sharedValue1 = obj2.useSharedValue(0);
  const fn = function f() {
    let obj2;
    const obj = { opacity: obj2.withTiming(sharedValue1.get()) };
    obj2 = timing;
    return obj;
  };
  const obj3 = playerState(baseURL[5]);
  fn.__closure = { withTiming: playerState(baseURL[6]).withTiming, webviewOpacity: sharedValue1 };
  fn.__workletHash = 2179142865986;
  fn.__initData = __initData;
  ({ withTiming: playerState(baseURL[6]).withTiming, webviewOpacity: sharedValue1 });
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj5 = playerState(baseURL[5]);
  class S {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withTiming(sharedValue.get()) };
      obj2 = timing;
      return obj;
    }
  }
  S.__closure = { withTiming: playerState(baseURL[6]).withTiming, loaderOpacity: sharedValue };
  S.__workletHash = 7752174298017;
  S.__initData = __initData2;
  const items = [playerState, sharedValue, sharedValue1];
  ({ withTiming: playerState(baseURL[6]).withTiming, loaderOpacity: sharedValue });
  const animatedStyle1 = obj5.useAnimatedStyle(S);
  const effect = panGestureConfig.useEffect(() => {
    const tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
    if (!tmp3) {
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
  const obj7 = { style, children: items4 };
  const callback1 = panGestureConfig.useCallback((url) => {
    let tmp = "about:blank" !== url.url;
    if (tmp) {
      url = url.url;
      tmp = !url.startsWith(baseURL);
    }
    if (tmp) {
      tmp = null == url.isTopFrame || url.isTopFrame;
    }
    let flag = !tmp;
    if (tmp) {
      const obj = LinkingDefault;
      obj.openURL(url.url);
      flag = false;
    }
    return flag;
  }, items2);
  const obj8 = { style: items3, children: closure_6(tmp15, obj9) };
  items3 = [animatedStyle, { flex: 1 }];
  const View = onDataReceived(baseURL[5]).View;
  obj9 = { injectedJavaScript: "" + injectedJavaScript + "\n" + str, bounces: false, ref, scrollEnabled: false, javaScriptEnabled: true, onMessage: callback, allowsInlineMediaPlayback: true, mediaPlaybackRequiresUserAction: false, onShouldStartLoadWithRequest: callback1 };
  tmp15 = onDataReceived(baseURL[8]);
  const merged1 = Object.assign(merged);
  items4 = [closure_6(View, obj8), ];
  let tmp13Result = playerState !== obj.PLAYING && playerState !== obj.PAUSED;
  const tmp11 = closure_7;
  const tmp12 = sharedValue1;
  const tmp14 = onDataReceived;
  if (tmp13Result) {
    const obj10 = { style: items5, children: closure_6(sharedValue, { color: "white", size: "large" }) };
    items5 = [animatedStyle1, tmp2.loading];
    const View2 = tmp14(tmp3[5]).View;
    tmp13Result = tmp13(View2, obj10);
  }
  items4[1] = tmp13Result;
  return tmp11(tmp12, obj7);
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebView.tsx");

export default memoResult;
export { PlayerState };
