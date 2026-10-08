// Module ID: 13927
// Function ID: 13928
// Name: ActivateDevice
// Dependencies: [32, 19, 17, 21, 5090, 587, 558, 576, 13928, 13930, 10640, 9156, 13931, 9132, 13932, 1898, 13933, 13937, 13938, 1414, 13939, 6803, 2]

// Module 13927 (ActivateDevice)
import nativeDefault from "native" /* 587 */;
import react_nativeDefault from "react-native" /* 1898 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 9156 */;
import _modDef13931 from "module_13931" /* 13931 */;
import _modDef13932 from "module_13932" /* 13932 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, obj1, onClose, preloadResult, tmp2, tmp3, tmp5, tmp7, tmp8;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Image: metroRequire, ActivityIndicator: metroImportDefault, ScrollView: metroImportAll, StyleSheet } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: { flex: 1 }, imageStyle: obj2, safeArea: { flex: 1, justifyContent: "center", alignItems: "center" }, content: obj3, scroller: { alignSelf: "stretch", flexGrow: 0 }, scrollerContent: { flexDirection: "column", gap: 16 } };
obj2 = { width: undefined, height: undefined, marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { maxWidth: 480, backgroundColor: nativeDefault.colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
let closure_11 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let closure_1;
  let closure_3;
  let deviceCodeAuthorizeCallback;
  let first;
  let first1;
  let first2;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp36;
  const tmp = first1;
  let obj = first1(first2[7]);
  const cResult = obj.c(39);
  onClose = onClose.onClose;
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { type: "user-code-input", usePrefilledCode: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let obj3 = deviceCodeAuthorizeCallback;
  [first1, importDefault] = deviceCodeAuthorizeCallback.useState(first);
  [first2, _slicedToArray] = deviceCodeAuthorizeCallback.useState(null);
  const tmpResult = tmp(first2[8]);
  const activateDeviceStepTracking = tmpResult.useActivateDeviceStepTracking(first1);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        tmp = closure_1({ type: "user-code-input" });
        return;
      }
    }
    cResult[1] = S;
  } else {
    class S {
      constructor() {
        tmp = closure_1({ type: "user-code-input" });
        return;
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(arg0) {
        obj = { type: "success", userCodeData: onClose };
        tmp = closure_1(obj);
        return;
      }
    }
    cResult[2] = N;
    tmp12 = N;
  } else {
    class N {
      constructor(arg0) {
        obj = { type: "success", userCodeData: onClose };
        tmp = closure_1(obj);
        return;
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(arg0) {
        obj = { type: "error", userCodeData: onClose };
        tmp = closure_1(obj);
        return;
      }
    }
    cResult[3] = E;
    tmp13 = E;
  } else {
    class E {
      constructor(arg0) {
        obj = { type: "error", userCodeData: onClose };
        tmp = closure_1(obj);
        return;
      }
    }
  }
  const tmpResult2 = tmp(first2[9]);
  deviceCodeAuthorizeCallback = tmpResult2.useDeviceCodeAuthorizeCallback(tmp11, tmp13, tmp12);
  if (cResult[4] !== deviceCodeAuthorizeCallback) {
    class E {
      constructor(arg0) {
        obj = { type: "error", userCodeData: onClose };
        tmp = closure_1(obj);
        return;
      }
    }
    cResult[4] = deviceCodeAuthorizeCallback;
    cResult[5] = tmp16;
  } else {
    class E {
      constructor(arg0) {
        obj = { type: "error", userCodeData: onClose };
        tmp = closure_1(obj);
        return;
      }
    }
  }
  if (cResult[6] !== first1) {
    class G {
      constructor() {
        if ("userCodeData" in closure_0) {
          userCodeData = closure_0.userCodeData;
          tmp = closure_0;
          tmp2 = closure_2;
          items = [, ];
          items[0] = closure_0(closure_2[11]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
          items[1] = closure_0(closure_2[11]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
          if (items.includes(userCodeData.clientId)) {
            tmp6 = closure_3;
            tmp7 = closure_1;
            tmp8 = closure_3(closure_1(tmp2[12]));
          } else {
            scopes = userCodeData.scopes;
            if (scopes.some(() => { /* body not rendered: F145064 */ })) {
              tmp3 = closure_3;
              tmp4 = closure_1;
              tmp5 = closure_3(closure_1(tmp2[14]));
            }
          }
        }
        return;
      }
    }
    let items = [first1];
    cResult[6] = first1;
    cResult[7] = G;
    cResult[8] = items;
    tmp18 = items;
    tmp17 = G;
  } else {
    class G {
      constructor() {
        if ("userCodeData" in closure_0) {
          userCodeData = closure_0.userCodeData;
          tmp = closure_0;
          tmp2 = closure_2;
          items = [, ];
          items[0] = closure_0(closure_2[11]).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
          items[1] = closure_0(closure_2[11]).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
          if (items.includes(userCodeData.clientId)) {
            tmp6 = closure_3;
            tmp7 = closure_1;
            tmp8 = closure_3(closure_1(tmp2[12]));
          } else {
            scopes = userCodeData.scopes;
            if (scopes.some(() => { /* body not rendered: F145064 */ })) {
              tmp3 = closure_3;
              tmp4 = closure_1;
              tmp5 = closure_3(closure_1(tmp2[14]));
            }
          }
        }
        return;
      }
    }
    tmp18 = cResult[8];
  }
  const effect = obj3.useEffect(tmp17, tmp18);
  if (cResult[9] !== first2) {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    const items1 = [first2];
    cResult[9] = first2;
    cResult[10] = V;
    cResult[11] = items1;
    tmp21 = items1;
    tmp20 = V;
  } else {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    tmp21 = cResult[11];
  }
  const effect1 = obj3.useEffect(tmp20, tmp21);
  const type = first1.type;
  if ("user-code-input" === type) {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    if (first1.usePrefilledCode) {
      class V {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
    }
    if (cResult[12] === onClose) {
      class V {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
    }
    const obj4 = { prefilledUserCode: tmp32, onUserCodeAccepted: tmp15, onClose };
    cResult[12] = onClose;
    cResult[13] = tmp32;
    cResult[14] = tmp15;
    cResult[15] = closure_9(tmp(first2[16]).UserCodeInput, obj4);
    const tmp35 = closure_9(tmp(first2[16]).UserCodeInput, obj4);
  } else {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    if ("authorization" === type) {
      let tmp29;
      class V {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              obj1 = { uri: null };
              obj1.uri = tmp;
              preloadResult = obj.preload(obj1);
            }
            return;
          }
        }
        const tmp31 = closure_9(closure_7, { animating: true });
        cResult[16] = tmp31;
        tmp29 = tmp31;
      } else {
        class V {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              obj1 = { uri: null };
              obj1.uri = tmp;
              preloadResult = obj.preload(obj1);
            }
            return;
          }
        }
      }
      tmp23 = tmp29;
    } else {
      class V {
        constructor() {
          if (null != closure_2) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[15]);
            obj1 = { uri: null };
            obj1.uri = tmp;
            preloadResult = obj.preload(obj1);
          }
          return;
        }
      }
      if ("success" === type) {
        class V {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              obj1 = { uri: null };
              obj1.uri = tmp;
              preloadResult = obj.preload(obj1);
            }
            return;
          }
        }
        const obj5 = { onComplete: onClose, data: first1.userCodeData, successImage: first2 };
        cResult[17] = onClose;
        cResult[18] = first1.userCodeData;
        cResult[19] = first2;
        cResult[20] = closure_9(tmp(first2[17]).ActivateDeviceSuccess, obj5);
        const tmp28 = closure_9(tmp(first2[17]).ActivateDeviceSuccess, obj5);
      } else {
        class V {
          constructor() {
            if (null != closure_2) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              obj = closure_1(closure_2[15]);
              obj1 = { uri: null };
              obj1.uri = tmp;
              preloadResult = obj.preload(obj1);
            }
            return;
          }
        }
        tmp23 = null;
        if ("error" === type) {
          let tmp24;
          class V {
            constructor() {
              if (null != closure_2) {
                tmp2 = closure_1;
                tmp3 = closure_2;
                obj = closure_1(closure_2[15]);
                obj1 = { uri: null };
                obj1.uri = tmp;
                preloadResult = obj.preload(obj1);
              }
              return;
            }
          }
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class V {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  obj1 = { uri: null };
                  obj1.uri = tmp;
                  preloadResult = obj.preload(obj1);
                }
                return;
              }
            }
            const obj6 = { onRetry: tmp11 };
            const tmp25 = closure_9(tmp(first2[18]).ActivateDeviceError, obj6);
            cResult[21] = tmp25;
            tmp24 = tmp25;
          } else {
            class V {
              constructor() {
                if (null != closure_2) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[15]);
                  obj1 = { uri: null };
                  obj1.uri = tmp;
                  preloadResult = obj.preload(obj1);
                }
                return;
              }
            }
          }
          tmp23 = tmp24;
        }
      }
    }
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    const source = obj9.makeSource(require("module_13939"));
    cResult[22] = source;
    tmp36 = source;
  } else {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
  }
  if (cResult[23] !== tmp4.imageStyle) {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
    const obj7 = { source: tmp36, style: tmp4.imageStyle };
    cResult[23] = tmp4.imageStyle;
    cResult[24] = closure_9(closure_6, obj7);
    const tmp41 = closure_9(closure_6, obj7);
  } else {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
  }
  if (cResult[25] === tmp23) {
    class V {
      constructor() {
        if (null != closure_2) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[15]);
          obj1 = { uri: null };
          obj1.uri = tmp;
          preloadResult = obj.preload(obj1);
        }
        return;
      }
    }
  }
  const obj8 = { bounces: false, style: tmp4.scroller, contentContainerStyle: tmp4.scrollerContent, children: tmp23 };
  cResult[25] = tmp23;
  cResult[26] = tmp4.scroller;
  cResult[27] = tmp4.scrollerContent;
  cResult[28] = closure_9(closure_8, obj8);
  closure_9(closure_8, obj8);
}) : ((onClose) => {
  let closure_1;
  let closure_3;
  let first;
  let first1;
  let items6;
  let obj8;
  let obj9;
  let tmp21Result;
  let tmp4;
  let tmp7Result;
  onClose = onClose.onClose;
  first = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  let deviceCodeAuthorizeCallback;
  const prefilledUserCode = onClose.prefilledUserCode;
  const tmp = closure_11();
  [first, tmp4] = deviceCodeAuthorizeCallback.useState({ type: "user-code-input", usePrefilledCode: true });
  importDefault = tmp4;
  [first1, _slicedToArray] = deviceCodeAuthorizeCallback.useState(null);
  let obj = first(first1[8]);
  const activateDeviceStepTracking = obj.useActivateDeviceStepTracking(first);
  let items = [tmp4];
  const callback = deviceCodeAuthorizeCallback.useCallback(() => {
    closure_1({ type: "user-code-input" });
  }, items);
  const items1 = [tmp4];
  const items2 = [tmp4];
  const callback1 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    const obj = { type: "success", userCodeData };
    closure_1(obj);
  }, items1);
  const callback2 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    const obj = { type: "error", userCodeData };
    closure_1(obj);
  }, items2);
  let obj2 = first(first1[9]);
  deviceCodeAuthorizeCallback = obj2.useDeviceCodeAuthorizeCallback(callback, callback2, callback1);
  const items3 = [deviceCodeAuthorizeCallback];
  const items4 = [first];
  const callback3 = deviceCodeAuthorizeCallback.useCallback((userCodeData) => {
    let closure_0 = userCodeData;
    const obj = { type: "authorization", userCodeData };
    closure_1(obj);
    const obj2 = first(first1[10]);
    const obj3 = {
      clientId: userCodeData.clientId,
      scopes: userCodeData.scopes,
      responseType: "code",
      isTrustedName: true,
      isEmbeddedFlow: true,
      withBackPressHandler: false,
      callbackWithoutPost(arg0) {
        return deviceCodeAuthorizeCallback(userCodeData, arg0);
      }
    };
    obj2.openOAuth2Modal(obj3);
  }, items3);
  const effect = deviceCodeAuthorizeCallback.useEffect(() => {
    if ("userCodeData" in first) {
      const userCodeData = first.userCodeData;
      const items = [ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID, ConsoleOAuthApplications.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID];
      if (items.includes(userCodeData.clientId)) {
        closure_3(_modDef13931);
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((item) => {
          const obj = first(first1[13]);
          return obj.isSocialLayerUmbrellaScope(item);
        })) {
          closure_3(_modDef13932);
        }
      }
    }
  }, items4);
  const items5 = [first1];
  const effect1 = deviceCodeAuthorizeCallback.useEffect(() => {
    if (null != first1) {
      const obj2 = { uri: tmp };
      const obj = react_nativeDefault;
      obj.preload(obj2);
    }
  }, items5);
  const type = first.type;
  if ("user-code-input" === type) {
    let tmp22;
    const UserCodeInput = tmp7(tmp8[16]).UserCodeInput;
    const tmp21 = closure_9;
    if (first.usePrefilledCode) {
      tmp22 = prefilledUserCode;
    }
    let obj3 = { prefilledUserCode: tmp22, onUserCodeAccepted: callback3, onClose };
    tmp21Result = tmp21(UserCodeInput, obj3);
  } else if ("authorization" === type) {
    tmp21Result = closure_9(closure_7, { animating: true });
  } else if ("success" === type) {
    const obj4 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = closure_9(tmp7(tmp8[17]).ActivateDeviceSuccess, obj4);
  } else {
    tmp21Result = null;
    if ("error" === type) {
      const obj5 = { onRetry: callback };
      tmp21Result = closure_9(tmp7(tmp8[18]).ActivateDeviceError, obj5);
    }
  }
  const obj6 = { style: tmp.background, children: items6 };
  const obj7 = { source: tmp7Result.makeSource(require("module_13939")), style: tmp.imageStyle };
  tmp7Result = first(first1[19]);
  items6 = [closure_9(closure_6, obj7), ];
  const rect = { bottom: true, top: true, style: tmp.safeArea, children: closure_9(closure_5, obj8) };
  obj8 = { style: tmp.content, children: closure_9(closure_8, obj9) };
  obj9 = { bounces: false, style: tmp.scroller, contentContainerStyle: tmp.scrollerContent, children: tmp21Result };
  const SafeAreaPaddingView = tmp7(tmp8[21]).SafeAreaPaddingView;
  items6[1] = closure_9(SafeAreaPaddingView, rect);
  return closure_10(closure_5, obj6);
});
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = tmp6;
