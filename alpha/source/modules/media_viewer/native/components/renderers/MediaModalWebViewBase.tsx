// Module ID: 9017
// Function ID: 9018
// Name: MediaModalWebViewBase
// Dependencies: [19, 17, 21, 1377, 5143, 1652, 5380, 5846, 8124, 2]

// Module 9017 (MediaModalWebViewBase)
import LinkingDefault from "Linking" /* 5846 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import createStyles from "createStyles" /* 5143 */;
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
let closure_11 = { code: "(function MediaModalWebViewBaseTsx1(){let[withTiming,webviewOpacity]=this.__closure;return{opacity:withTiming(webviewOpacity.get())};})" };
let closure_12 = { code: "(function MediaModalWebViewBaseTsx2(){let[withTiming,loaderOpacity]=this.__closure;return{opacity:withTiming(loaderOpacity.get())};})" };
const memoResult = react.memo(function MediaModalWebViewBase(baseURL) {
  let items7;
  let items8;
  let items9;
  let obj5;
  let ref;
  let style;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp24;
  let tmp8;
  let tmp9;
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
  let tmp3 = baseURL;
  const tmp4 = onToggleOverlay;
  const tmp2 = closure_10();
  let obj = baseURL(onToggleOverlay[5]);
  const sharedValue = obj.useSharedValue(1);
  const obj2 = baseURL(onToggleOverlay[5]);
  const sharedValue1 = obj2.useSharedValue(0);
  const items = [closure_11, , ];
  const useAnimatedStyle = baseURL(onToggleOverlay[5]).useAnimatedStyle;
  baseURL(onToggleOverlay[5]);
  items[1] = baseURL(onToggleOverlay[6]).withTiming;
  items[2] = sharedValue1;
  let c0;
  let c1;
  [tmp8, tmp9, tmp10] = items;
  class MediaModalWebViewBaseTsx1 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get()) };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10];
  MediaModalWebViewBaseTsx1.__closure = items1;
  MediaModalWebViewBaseTsx1.__workletHash = 11815479817806;
  MediaModalWebViewBaseTsx1.__initData = tmp8;
  const animatedStyle = useAnimatedStyle(MediaModalWebViewBaseTsx1);
  const items2 = [closure_12, , ];
  const useAnimatedStyle2 = tmp3(tmp4[5]).useAnimatedStyle;
  tmp3(tmp4[5]);
  items2[1] = tmp3(tmp4[6]).withTiming;
  items2[2] = sharedValue;
  c0 = undefined;
  c1 = undefined;
  [tmp13, tmp14, tmp15] = items2;
  class MediaModalWebViewBaseTsx2 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get()) };
      return obj;
    }
  }
  const items3 = [tmp14, tmp15];
  MediaModalWebViewBaseTsx2.__closure = items3;
  MediaModalWebViewBaseTsx2.__workletHash = 5577890850125;
  MediaModalWebViewBaseTsx2.__initData = tmp13;
  const items4 = [playerState, sharedValue, sharedValue1];
  const animatedStyle2 = useAnimatedStyle2(MediaModalWebViewBaseTsx2);
  const effect = playerState.useEffect(() => {
    const tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
    if (!tmp3) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1);
    }
  }, items4);
  const items5 = [onDataReceived, onToggleOverlay];
  const items6 = [baseURL];
  const callback = playerState.useCallback((nativeEvent) => {
    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
    if (null != parsed) {
      if ("click" === parsed.event) {
        onToggleOverlay();
      }
    }
    onDataReceived(nativeEvent.nativeEvent.data);
  }, items5);
  const obj3 = { style, children: items8 };
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
  }, items6);
  const obj4 = { style: items7, children: closure_6(tmp24, obj5) };
  items7 = [animatedStyle, { flex: 1 }];
  const View = onDataReceived(tmp4[5]).View;
  obj5 = { ref, allowsInlineMediaPlayback: true, bounces: false, injectedJavaScript: "" + str + "\n" + str, javaScriptEnabled: true, mediaPlaybackRequiresUserAction: false, onMessage: callback, onShouldStartLoadWithRequest: callback1, scrollEnabled: false };
  tmp24 = onDataReceived(tmp4[8]);
  const merged1 = Object.assign(merged);
  items8 = [closure_6(View, obj4), ];
  let tmp22Result = playerState !== obj.PLAYING && playerState !== obj.PAUSED;
  const tmp20 = closure_7;
  const tmp21 = sharedValue1;
  const tmp23 = onDataReceived;
  if (tmp22Result) {
    const obj6 = { style: items9, children: closure_6(sharedValue, { color: "white", size: "large" }) };
    items9 = [animatedStyle2, tmp2.loading];
    const View2 = tmp23(tmp4[5]).View;
    tmp22Result = tmp22(View2, obj6);
  }
  items8[1] = tmp22Result;
  return tmp20(tmp21, obj3);
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebViewBase.tsx");

export default memoResult;
export { PlayerState };
