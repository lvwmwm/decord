// Module ID: 8407
// Function ID: 8408
// Name: MediaModalWebViewBase
// Dependencies: [109, 19, 17, 21, 1382, 5091, 558, 576, 4811, 5092, 4765, 7518, 2]

// Module 8407 (MediaModalWebViewBase)
import LinkingDefault from "Linking" /* 4765 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import WebViewDefault from "WebView" /* 7518 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["baseURL", "injectedJavaScript", "onDataReceived", "onToggleOverlay", "playerState", "style", "ref"];
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let str = "";
if (PlatformUtils.isIOS()) {
  str = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
let obj = { UNREADY: 0, [0]: "UNREADY", READY: 1, [1]: "READY", ERRORED: 2, [2]: "ERRORED", UNSTARTED: 3, [3]: "UNSTARTED", ENDED: 4, [4]: "ENDED", PLAYING: 5, [5]: "PLAYING", PAUSED: 6, [6]: "PAUSED", BUFFERING: 7, [7]: "BUFFERING", VIDEO_CUED: 8, [8]: "VIDEO_CUED" };
let closure_12 = createStyles.createStyles({ loading: { top: 0, left: 0, right: 0, bottom: 0, position: "absolute", alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function MediaModalWebViewBaseTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
const __initData2 = { code: "function MediaModalWebViewBaseTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
const __initData3 = { code: "function MediaModalWebViewBaseTsx3(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
const __initData4 = { code: "function MediaModalWebViewBaseTsx4(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalWebViewBase(baseURL) {
  let closure_0;
  let closure_1;
  let closure_2;
  let injectedJavaScript;
  let items2;
  let onDataReceived;
  let ref;
  let sharedValue;
  let style;
  let tmp10;
  let tmp11;
  let tmp4;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(39);
  if (cResult[0] !== baseURL) {
    baseURL = baseURL.baseURL;
    _require = baseURL;
    ({ injectedJavaScript, onDataReceived } = baseURL);
    importDefault = onDataReceived;
    const onToggleOverlay = baseURL.onToggleOverlay;
    dependencyMap = onToggleOverlay;
    const playerState = baseURL.playerState;
    closure_3 = playerState;
    ({ style, ref } = baseURL);
    const tmp14 = sharedValue(baseURL, closure_3);
    cResult[0] = baseURL;
    cResult[1] = baseURL;
    cResult[2] = onDataReceived;
    cResult[3] = onToggleOverlay;
    class A {
      constructor() {
        let obj2;
        const obj = { opacity: obj2.withTiming(sharedValue1.get()) };
        obj2 = timing;
        return obj;
      }
    }
    cResult[4] = playerState;
    cResult[5] = ref;
    cResult[6] = style;
    cResult[7] = injectedJavaScript;
    cResult[8] = tmp14;
    tmp11 = tmp14;
    tmp10 = injectedJavaScript;
    class U {
      constructor() {
        let obj2;
        const obj = { opacity: obj2.withTiming(sharedValue.get()) };
        obj2 = timing;
        return obj;
      }
    }
    tmp8 = ref;
    tmp4 = baseURL;
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
    dependencyMap = cResult[3];
    closure_3 = cResult[4];
    tmp8 = cResult[5];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
  }
  str = "";
  if (undefined !== tmp10) {
    str = tmp10;
  }
  const tmp15 = closure_12();
  const tmpResult = tmp(4811);
  sharedValue = tmpResult.useSharedValue(1);
  const tmpResult4 = tmp(4811);
  const sharedValue1 = tmpResult4.useSharedValue(0);
  const tmpResult5 = tmp(4811);
  class A {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withTiming(sharedValue1.get()) };
      obj2 = timing;
      return obj;
    }
  }
  let obj2 = { withTiming: tmp(5092).withTiming, webviewOpacity: sharedValue1 };
  A.__closure = obj2;
  A.__workletHash = 10763244381367;
  A.__initData = __initData;
  const animatedStyle = tmpResult5.useAnimatedStyle(A);
  const tmpResult6 = tmp(4811);
  class U {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withTiming(sharedValue.get()) };
      obj2 = timing;
      return obj;
    }
  }
  U.__closure = { withTiming: tmp(5092).withTiming, loaderOpacity: sharedValue };
  U.__workletHash = 335623571284;
  U.__initData = __initData2;
  ({ withTiming: tmp(5092).withTiming, loaderOpacity: sharedValue });
  const animatedStyle1 = tmpResult6.useAnimatedStyle(U);
  if (cResult[9] === sharedValue) {
    if (cResult[10] === tmp7) {
      let tmp20;
      let tmp21;
      if (cResult[11] === sharedValue1) {
        tmp20 = cResult[12];
        tmp21 = cResult[13];
      }
      const effect = sharedValue1.useEffect(tmp20, tmp21);
      if (cResult[14] === tmp5) {
        let tmp24;
        let tmp25;
        let tmp27;
        let tmp28;
        if (cResult[15] === tmp6) {
          tmp24 = cResult[16];
        }
        if (cResult[17] !== tmp4) {
          const fn = function j(url) {
            let tmp = "about:blank" !== url.url;
            if (tmp) {
              url = url.url;
              tmp = !url.startsWith(closure_0);
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
          };
          cResult[17] = tmp4;
          class V {
            constructor(nativeEvent) {
              const parsed = JSON.parse(nativeEvent.nativeEvent.data);
              if (null != parsed) {
                if ("click" === parsed.event) {
                  closure_2();
                }
              }
              closure_1(nativeEvent.nativeEvent.data);
            }
          }
          tmp25 = fn;
        } else {
          tmp25 = cResult[18];
        }
        const _Symbol = Symbol;
        class V {
          constructor(nativeEvent) {
            const parsed = JSON.parse(nativeEvent.nativeEvent.data);
            if (null != parsed) {
              if ("click" === parsed.event) {
                closure_2();
              }
            }
            closure_1(nativeEvent.nativeEvent.data);
          }
        }
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { flex: 1 };
          cResult[19] = obj4;
          tmp27 = obj4;
        } else {
          tmp27 = cResult[19];
        }
        if (cResult[20] !== animatedStyle) {
          const items = [animatedStyle, tmp27];
          class V {
            constructor(nativeEvent) {
              const parsed = JSON.parse(nativeEvent.nativeEvent.data);
              if (null != parsed) {
                if ("click" === parsed.event) {
                  closure_2();
                }
              }
              closure_1(nativeEvent.nativeEvent.data);
            }
          }
          cResult[21] = items;
          tmp28 = items;
        } else {
          tmp28 = cResult[21];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + str + "\n" + str;
        if (cResult[22] === tmp24) {
          if (cResult[23] === tmp25) {
            if (cResult[24] === tmp8) {
              if (cResult[25] === combined) {
                let tmp31;
                if (cResult[26] === tmp11) {
                  tmp31 = cResult[27];
                }
                if (cResult[28] === tmp28) {
                  let tmp39;
                  if (cResult[29] === tmp31) {
                    tmp39 = cResult[30];
                  }
                  if (cResult[31] === animatedStyle1) {
                    if (cResult[32] === tmp7) {
                      let tmp44;
                      if (cResult[33] === tmp15) {
                        tmp44 = cResult[34];
                      }
                      if (cResult[35] === tmp9) {
                        if (cResult[36] === tmp39) {
                          let tmp49;
                          if (cResult[37] === tmp44) {
                            tmp49 = cResult[38];
                          }
                          return tmp49;
                        }
                      }
                      class V {
                        constructor(nativeEvent) {
                          const parsed = JSON.parse(nativeEvent.nativeEvent.data);
                          if (null != parsed) {
                            if ("click" === parsed.event) {
                              closure_2();
                            }
                          }
                          closure_1(nativeEvent.nativeEvent.data);
                        }
                      }
                      tmp52[0] = tmp9;
                      const items1 = [tmp39, tmp44];
                      tmp52[1] = items1;
                      const tmp53 = closure_9(closure_7, tmp52);
                      cResult[35] = tmp9;
                      cResult[36] = tmp39;
                      cResult[37] = tmp44;
                      cResult[38] = tmp53;
                      tmp49 = tmp53;
                    }
                  }
                  let tmp45 = tmp7 !== obj.PLAYING && tmp7 !== obj.PAUSED;
                  if (tmp45) {
                    const obj5 = { style: items2, children: closure_8(closure_6, { color: "white", size: "large" }) };
                    items2 = [, ];
                    class V {
                      constructor(nativeEvent) {
                        const parsed = JSON.parse(nativeEvent.nativeEvent.data);
                        if (null != parsed) {
                          if ("click" === parsed.event) {
                            closure_2();
                          }
                        }
                        closure_1(nativeEvent.nativeEvent.data);
                      }
                    }
                    items2[1] = tmp15.loading;
                    const View = ReanimatedRexportDefault.View;
                    tmp45 = closure_8(View, obj5);
                  }
                  class V {
                    constructor(nativeEvent) {
                      const parsed = JSON.parse(nativeEvent.nativeEvent.data);
                      if (null != parsed) {
                        if ("click" === parsed.event) {
                          closure_2();
                        }
                      }
                      closure_1(nativeEvent.nativeEvent.data);
                    }
                  }
                  cResult[31] = animatedStyle1;
                  cResult[32] = tmp7;
                  cResult[33] = tmp15;
                  cResult[34] = tmp45;
                  tmp44 = tmp45;
                }
                class V {
                  constructor(nativeEvent) {
                    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
                    if (null != parsed) {
                      if ("click" === parsed.event) {
                        closure_2();
                      }
                    }
                    closure_1(nativeEvent.nativeEvent.data);
                  }
                }
                tmp42[0] = tmp28;
                tmp42[1] = tmp31;
                const tmp43 = closure_8(ReanimatedRexportDefault.View, tmp42);
                cResult[28] = tmp28;
                cResult[29] = tmp31;
                cResult[30] = tmp43;
                tmp39 = tmp43;
              }
            }
          }
        }
        const obj6 = { ref: tmp8, bounces: false, injectedJavaScript: combined, javaScriptEnabled: true, mediaPlaybackRequiresUserAction: false, onMessage: tmp24, onShouldStartLoadWithRequest: tmp25, scrollEnabled: false };
        const tmp34 = WebViewDefault;
        const merged = Object.assign(tmp11);
        let flag = true;
        class A {
          constructor() {
            let obj2;
            const obj = { opacity: obj2.withTiming(sharedValue1.get()) };
            obj2 = timing;
            return obj;
          }
        }
        const tmp38 = closure_8(tmp34, obj6);
        cResult[22] = tmp24;
        class U {
          constructor() {
            let obj2;
            const obj = { opacity: obj2.withTiming(sharedValue.get()) };
            obj2 = timing;
            return obj;
          }
        }
        cResult[23] = tmp25;
        cResult[24] = tmp8;
        cResult[25] = combined;
        cResult[26] = tmp11;
        cResult[27] = tmp38;
        tmp31 = tmp38;
      }
      class V {
        constructor(nativeEvent) {
          const parsed = JSON.parse(nativeEvent.nativeEvent.data);
          if (null != parsed) {
            if ("click" === parsed.event) {
              closure_2();
            }
          }
          closure_1(nativeEvent.nativeEvent.data);
        }
      }
      cResult[14] = tmp5;
      cResult[15] = tmp6;
      cResult[16] = V;
      tmp24 = V;
    }
  }
  class M {
    constructor() {
      const tmp3 = closure_3 !== obj.BUFFERING && closure_3 !== obj.PLAYING && closure_3 !== obj.ERRORED;
      if (!tmp3) {
        const result = sharedValue.set(0);
        const result1 = sharedValue1.set(1);
      }
    }
  }
  const items3 = [tmp7, sharedValue, sharedValue1];
  cResult[9] = sharedValue;
  cResult[10] = tmp7;
  cResult[11] = sharedValue1;
  cResult[12] = M;
  cResult[13] = items3;
  tmp21 = items3;
  tmp20 = M;
}) : (function MediaModalWebViewBase(baseURL) {
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
  const tmp2 = closure_12();
  let obj = baseURL(onToggleOverlay[8]);
  const sharedValue = obj.useSharedValue(1);
  let obj2 = baseURL(onToggleOverlay[8]);
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = baseURL(onToggleOverlay[8]);
  class T {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withTiming(sharedValue1.get()) };
      obj2 = timing;
      return obj;
    }
  }
  T.__closure = { withTiming: baseURL(onToggleOverlay[9]).withTiming, webviewOpacity: sharedValue1 };
  T.__workletHash = 16767151708533;
  T.__initData = __initData3;
  ({ withTiming: baseURL(onToggleOverlay[9]).withTiming, webviewOpacity: sharedValue1 });
  const animatedStyle = obj3.useAnimatedStyle(T);
  const fn = function f() {
    let obj2;
    const obj = { opacity: obj2.withTiming(sharedValue.get()) };
    obj2 = timing;
    return obj;
  };
  const obj5 = baseURL(onToggleOverlay[8]);
  fn.__closure = { withTiming: baseURL(onToggleOverlay[9]).withTiming, loaderOpacity: sharedValue };
  fn.__workletHash = 8432104026386;
  fn.__initData = __initData4;
  const items = [playerState, sharedValue, sharedValue1];
  ({ withTiming: baseURL(onToggleOverlay[9]).withTiming, loaderOpacity: sharedValue });
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const effect = sharedValue1.useEffect(() => {
    const tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
    if (!tmp3) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1);
    }
  }, items);
  const items1 = [onDataReceived, onToggleOverlay];
  const items2 = [baseURL];
  const callback = sharedValue1.useCallback((nativeEvent) => {
    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
    if (null != parsed) {
      if ("click" === parsed.event) {
        onToggleOverlay();
      }
    }
    onDataReceived(nativeEvent.nativeEvent.data);
  }, items1);
  const obj7 = { style, children: items4 };
  const callback1 = sharedValue1.useCallback((url) => {
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
  const obj8 = { style: items3, children: closure_8(tmp15, obj9) };
  items3 = [animatedStyle, { flex: 1 }];
  const View = onDataReceived(onToggleOverlay[8]).View;
  obj9 = { ref, allowsInlineMediaPlayback: true, bounces: false, injectedJavaScript: "" + str + "\n" + str, javaScriptEnabled: true, mediaPlaybackRequiresUserAction: false, onMessage: callback, onShouldStartLoadWithRequest: callback1, scrollEnabled: false };
  tmp15 = onDataReceived(onToggleOverlay[11]);
  const merged1 = Object.assign(merged);
  items4 = [closure_8(View, obj8), ];
  let tmp13Result = playerState !== obj.PLAYING && playerState !== obj.PAUSED;
  const tmp11 = closure_9;
  const tmp12 = closure_7;
  const tmp14 = onDataReceived;
  if (tmp13Result) {
    const obj10 = { style: items5, children: closure_8(closure_6, { color: "white", size: "large" }) };
    items5 = [animatedStyle1, tmp2.loading];
    const View2 = tmp14(tmp3[8]).View;
    tmp13Result = tmp13(View2, obj10);
  }
  items4[1] = tmp13Result;
  return tmp11(tmp12, obj7);
}));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebViewBase.tsx");

export default memoResult;
export const PlayerState = obj;
