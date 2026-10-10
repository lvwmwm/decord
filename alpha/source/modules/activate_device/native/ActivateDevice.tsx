// Module ID: 14079
// Function ID: 14080
// Name: ActivateDevice
// Dependencies: [32, 19, 17, 21, 5092, 587, 558, 576, 14080, 14082, 10862, 12338, 14083, 9226, 14084, 1899, 14085, 14089, 14090, 1415, 14091, 6156, 6813, 2]

// Module 14079 (ActivateDevice)
import nativeDefault from "native" /* 587 */;
import react_nativeDefault from "react-native" /* 1899 */;
import ConsoleOAuthApplications from "ConsoleOAuthApplications" /* 12338 */;
import _modDef14083 from "module_14083" /* 14083 */;
import _modDef14084 from "module_14084" /* 14084 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, obj1, onClose, openOAuth2ModalResult;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire, ScrollView: metroImportDefault, StyleSheet } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: { flex: 1 }, imageStyle: obj2, safeArea: { flex: 1, justifyContent: "center", alignItems: "center" }, content: obj3, scroller: { alignSelf: "stretch", flexGrow: 0 }, scrollerContent: { flexDirection: "column", gap: 16 } };
obj2 = { width: undefined, height: undefined, marginVertical: 0, resizeMode: "cover", backgroundColor: nativeDefault.colors.TEXT_BRAND };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { maxWidth: 480, backgroundColor: nativeDefault.colors.PANEL_BG, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg, padding: 24, marginHorizontal: 24, marginVertical: 36, shadowColor: nativeDefault.colors.BLACK, shadowOpacity: 0.2, shadowOffset: { width: 0, height: 4 }, shadowRadius: 4 };
let closure_10 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let closure_1;
  let closure_3;
  let deviceCodeAuthorizeCallback;
  let first;
  let first1;
  let first2;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp36;
  const tmp = first1;
  let obj = first1(first2[7]);
  const cResult = obj.c(39);
  onClose = onClose.onClose;
  const tmp4 = closure_10();
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
    const fn = function b() {
      closure_1({ type: "user-code-input" });
    };
    cResult[1] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function w(userCodeData) {
      const obj = { type: "success", userCodeData };
      closure_1(obj);
    };
    cResult[2] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor(userCodeData) {
        const obj = { type: "error", userCodeData };
        closure_1(obj);
      }
    }
    cResult[3] = L;
    tmp13 = L;
  } else {
    class L {
      constructor(userCodeData) {
        const obj = { type: "error", userCodeData };
        closure_1(obj);
      }
    }
  }
  const tmpResult2 = tmp(first2[9]);
  deviceCodeAuthorizeCallback = tmpResult2.useDeviceCodeAuthorizeCallback(tmp11, tmp13, tmp12);
  if (cResult[4] !== deviceCodeAuthorizeCallback) {
    class U {
      constructor(arg0) {
        closure_0 = onClose;
        obj = { type: "authorization", userCodeData: onClose };
        tmp = closure_1(obj);
        obj2 = closure_0(closure_2[10]);
        obj1 = {
          clientId: onClose.clientId,
          scopes: onClose.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
                  return deviceCodeAuthorizeCallback(userCodeData, arg0);
                }
        };
        openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
        return;
      }
    }
    cResult[4] = deviceCodeAuthorizeCallback;
    cResult[5] = U;
  } else {
    class U {
      constructor(arg0) {
        closure_0 = onClose;
        obj = { type: "authorization", userCodeData: onClose };
        tmp = closure_1(obj);
        obj2 = closure_0(closure_2[10]);
        obj1 = {
          clientId: onClose.clientId,
          scopes: onClose.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
                  return deviceCodeAuthorizeCallback(userCodeData, arg0);
                }
        };
        openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
        return;
      }
    }
  }
  if (cResult[6] !== first1) {
    class U {
      constructor(arg0) {
        closure_0 = onClose;
        obj = { type: "authorization", userCodeData: onClose };
        tmp = closure_1(obj);
        obj2 = closure_0(closure_2[10]);
        obj1 = {
          clientId: onClose.clientId,
          scopes: onClose.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
                  return deviceCodeAuthorizeCallback(userCodeData, arg0);
                }
        };
        openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
        return;
      }
    }
    let items = [first1];
    cResult[6] = first1;
    cResult[7] = tmp18;
    cResult[8] = items;
    tmp17 = items;
    tmp16 = tmp18;
  } else {
    class U {
      constructor(arg0) {
        closure_0 = onClose;
        obj = { type: "authorization", userCodeData: onClose };
        tmp = closure_1(obj);
        obj2 = closure_0(closure_2[10]);
        obj1 = {
          clientId: onClose.clientId,
          scopes: onClose.scopes,
          responseType: "code",
          isTrustedName: true,
          isEmbeddedFlow: true,
          withBackPressHandler: false,
          callbackWithoutPost(arg0) {
                  return deviceCodeAuthorizeCallback(userCodeData, arg0);
                }
        };
        openOAuth2ModalResult = obj2.openOAuth2Modal(obj1);
        return;
      }
    }
    tmp17 = cResult[8];
  }
  const effect = obj3.useEffect(tmp16, tmp17);
  if (cResult[9] !== first2) {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
    const items1 = [first2];
    cResult[9] = first2;
    cResult[10] = R;
    cResult[11] = items1;
    tmp21 = items1;
    tmp20 = R;
  } else {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
    tmp21 = cResult[11];
  }
  const effect1 = obj3.useEffect(tmp20, tmp21);
  const type = first1.type;
  if ("user-code-input" === type) {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
    if (first1.usePrefilledCode) {
      class R {
        constructor() {
          if (null != first2) {
            const obj2 = { uri: tmp };
            const obj = react_nativeDefault;
            obj.preload(obj2);
          }
        }
      }
    }
    if (cResult[12] === onClose) {
      class R {
        constructor() {
          if (null != first2) {
            const obj2 = { uri: tmp };
            const obj = react_nativeDefault;
            obj.preload(obj2);
          }
        }
      }
    }
    const obj4 = { prefilledUserCode: tmp32, onUserCodeAccepted: tmp15, onClose };
    cResult[12] = onClose;
    cResult[13] = tmp32;
    cResult[14] = tmp15;
    cResult[15] = closure_8(tmp(first2[16]).UserCodeInput, obj4);
    const tmp35 = closure_8(tmp(first2[16]).UserCodeInput, obj4);
  } else {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
    if ("authorization" === type) {
      let tmp29;
      class R {
        constructor() {
          if (null != first2) {
            const obj2 = { uri: tmp };
            const obj = react_nativeDefault;
            obj.preload(obj2);
          }
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        const tmp31 = closure_8(closure_6, { animating: true });
        cResult[16] = tmp31;
        tmp29 = tmp31;
      } else {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
      }
      tmp23 = tmp29;
    } else {
      class R {
        constructor() {
          if (null != first2) {
            const obj2 = { uri: tmp };
            const obj = react_nativeDefault;
            obj.preload(obj2);
          }
        }
      }
      if ("success" === type) {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        const obj5 = { onComplete: onClose, data: first1.userCodeData, successImage: first2 };
        cResult[17] = onClose;
        cResult[18] = first1.userCodeData;
        cResult[19] = first2;
        cResult[20] = closure_8(tmp(first2[17]).ActivateDeviceSuccess, obj5);
        const tmp28 = closure_8(tmp(first2[17]).ActivateDeviceSuccess, obj5);
      } else {
        class R {
          constructor() {
            if (null != first2) {
              const obj2 = { uri: tmp };
              const obj = react_nativeDefault;
              obj.preload(obj2);
            }
          }
        }
        tmp23 = null;
        if ("error" === type) {
          let tmp24;
          class R {
            constructor() {
              if (null != first2) {
                const obj2 = { uri: tmp };
                const obj = react_nativeDefault;
                obj.preload(obj2);
              }
            }
          }
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                if (null != first2) {
                  const obj2 = { uri: tmp };
                  const obj = react_nativeDefault;
                  obj.preload(obj2);
                }
              }
            }
            const obj6 = { onRetry: tmp11 };
            const tmp25 = closure_8(tmp(first2[18]).ActivateDeviceError, obj6);
            cResult[21] = tmp25;
            tmp24 = tmp25;
          } else {
            class R {
              constructor() {
                if (null != first2) {
                  const obj2 = { uri: tmp };
                  const obj = react_nativeDefault;
                  obj.preload(obj2);
                }
              }
            }
          }
          tmp23 = tmp24;
        }
      }
    }
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
    const source = obj9.makeSource(require("module_14091"));
    cResult[22] = source;
    tmp36 = source;
  } else {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
  }
  if (cResult[23] !== tmp4.imageStyle) {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
    const obj7 = { source: tmp36, style: tmp4.imageStyle };
    cResult[23] = tmp4.imageStyle;
    cResult[24] = closure_8(require("FastImage"), obj7);
    const tmp41 = closure_8(require("FastImage"), obj7);
  } else {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
  }
  if (cResult[25] === tmp23) {
    class R {
      constructor() {
        if (null != first2) {
          const obj2 = { uri: tmp };
          const obj = react_nativeDefault;
          obj.preload(obj2);
        }
      }
    }
  }
  const obj8 = { bounces: false, style: tmp4.scroller, contentContainerStyle: tmp4.scrollerContent, children: tmp23 };
  cResult[25] = tmp23;
  cResult[26] = tmp4.scroller;
  cResult[27] = tmp4.scrollerContent;
  cResult[28] = closure_8(closure_7, obj8);
  closure_8(closure_7, obj8);
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
  const tmp = closure_10();
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
        closure_3(_modDef14083);
      } else {
        const scopes = userCodeData.scopes;
        if (scopes.some((item) => {
          const obj = first(first1[13]);
          return obj.isSocialLayerUmbrellaScope(item);
        })) {
          closure_3(_modDef14084);
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
    const tmp21 = closure_8;
    if (first.usePrefilledCode) {
      tmp22 = prefilledUserCode;
    }
    let obj3 = { prefilledUserCode: tmp22, onUserCodeAccepted: callback3, onClose };
    tmp21Result = tmp21(UserCodeInput, obj3);
  } else if ("authorization" === type) {
    tmp21Result = closure_8(closure_6, { animating: true });
  } else if ("success" === type) {
    const obj4 = { onComplete: onClose, data: first.userCodeData, successImage: first1 };
    tmp21Result = closure_8(tmp7(tmp8[17]).ActivateDeviceSuccess, obj4);
  } else {
    tmp21Result = null;
    if ("error" === type) {
      const obj5 = { onRetry: callback };
      tmp21Result = closure_8(tmp7(tmp8[18]).ActivateDeviceError, obj5);
    }
  }
  const obj6 = { style: tmp.background, children: items6 };
  const obj7 = { source: tmp7Result.makeSource(require("module_14091")), style: tmp.imageStyle };
  const tmp23 = require("FastImage");
  tmp7Result = first(first1[19]);
  items6 = [closure_8(tmp23, obj7), ];
  const rect = { bottom: true, top: true, style: tmp.safeArea, children: closure_8(closure_5, obj8) };
  obj8 = { style: tmp.content, children: closure_8(closure_7, obj9) };
  obj9 = { bounces: false, style: tmp.scroller, contentContainerStyle: tmp.scrollerContent, children: tmp21Result };
  const SafeAreaPaddingView = tmp7(tmp8[22]).SafeAreaPaddingView;
  items6[1] = closure_8(SafeAreaPaddingView, rect);
  return closure_9(closure_5, obj6);
});
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDevice.tsx");

export const ActivateDevice = tmp6;
