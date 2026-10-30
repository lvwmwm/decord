// Module ID: 8862
// Function ID: 8863
// Name: MediaModalWebViewBase
// Dependencies: [19, 17, 21, 1376, 5009, 5090, 5249, 5704, 7971, 2]

// Module 8862 (MediaModalWebViewBase)
import timing from "timing" /* 5249 */;
import LinkingDefault from "Linking" /* 5704 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let url;

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
const __initData = { code: "function MediaModalWebViewBaseTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
const __initData2 = { code: "function MediaModalWebViewBaseTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
const memoResult = react.memo(function MediaModalWebViewBase(baseURL) {
  let items3;
  let items4;
  let items5;
  let obj9;
  let ref;
  let style;
  let tmp15;
  baseURL = baseURL.baseURL;
  str = baseURL.injectedJavaScript;
  if (str === undefined) {
    str = "";
  }
  const onDataReceived = baseURL.onDataReceived;
  const onToggleOverlay = baseURL.onToggleOverlay;
  const playerState = baseURL.playerState;
  ({ style, ref } = baseURL);
  const merged = Object.assign(baseURL, Object.assign({ baseURL: 0, injectedJavaScript: 0, onDataReceived: 0, onToggleOverlay: 0, playerState: 0, style: 0, ref: 0 }));
  let tmp3 = onToggleOverlay;
  const tmp2 = closure_10();
  let obj = baseURL(onToggleOverlay[5]);
  const sharedValue = obj.useSharedValue(1);
  let obj2 = baseURL(onToggleOverlay[5]);
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = baseURL(onToggleOverlay[5]);
  class S {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withTiming(sharedValue1.get()) };
      obj2 = timing;
      return obj;
    }
  }
  S.__closure = { withTiming: baseURL(onToggleOverlay[6]).withTiming, webviewOpacity: sharedValue1 };
  S.__workletHash = 10763244381367;
  S.__initData = __initData;
  ({ withTiming: baseURL(onToggleOverlay[6]).withTiming, webviewOpacity: sharedValue1 });
  const animatedStyle = obj3.useAnimatedStyle(S);
  const fn = function f() {
    let obj2;
    const obj = { opacity: obj2.withTiming(sharedValue.get()) };
    obj2 = timing;
    return obj;
  };
  const obj5 = baseURL(onToggleOverlay[5]);
  fn.__closure = { withTiming: baseURL(onToggleOverlay[6]).withTiming, loaderOpacity: sharedValue };
  fn.__workletHash = 335623571284;
  fn.__initData = __initData2;
  const items = [playerState, sharedValue, sharedValue1];
  ({ withTiming: baseURL(onToggleOverlay[6]).withTiming, loaderOpacity: sharedValue });
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const effect = playerState.useEffect(() => {
    const tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
    if (!tmp3) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1);
    }
  }, items);
  const items1 = [onDataReceived, onToggleOverlay];
  const items2 = [baseURL];
  const callback = playerState.useCallback((nativeEvent) => {
    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
    if (null != parsed) {
      if ("click" === parsed.event) {
        onToggleOverlay();
      }
    }
    onDataReceived(nativeEvent.nativeEvent.data);
  }, items1);
  const obj7 = { style, children: items4 };
  const callback1 = playerState.useCallback((url) => {
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
  const View = onDataReceived(onToggleOverlay[5]).View;
  obj9 = { ref, allowsInlineMediaPlayback: true, bounces: false, injectedJavaScript: "" + str + "\n" + str, javaScriptEnabled: true, mediaPlaybackRequiresUserAction: false, onMessage: callback, onShouldStartLoadWithRequest: callback1, scrollEnabled: false };
  tmp15 = onDataReceived(onToggleOverlay[8]);
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
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebViewBase.tsx");

export default memoResult;
export { PlayerState };
