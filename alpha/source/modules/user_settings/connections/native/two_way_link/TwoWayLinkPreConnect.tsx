// Module ID: 9218
// Function ID: 9219
// Name: TwoWayLinkPreConnect
// Dependencies: [32, 5, 19, 17, 1085, 21, 3, 5092, 6874, 9219, 4806, 1382, 558, 576, 9214, 6875, 38, 584, 6156, 5088, 1126, 5379, 6813, 2]

// Module 9218 (TwoWayLinkPreConnect)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 6874 */;
import TwoWayLinkType from "TwoWayLinkType" /* 9219 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
function authorizeLink() {
  return obj(...arguments);
}
let obj = function _authorizeLink() {
  obj = _asyncToGenerator(async (arg0) => {
    let IN_APP;
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let closure_0 = arg0;
    const obj4 = { twoWayLinkType: TwoWayLinkType.TwoWayLinkType.MOBILE };
    const authorize = ConnectedAccountsActionCreatorsDefault.authorize;
    await authorize(closure_0, obj4);
    const url = arg1.body.url;
    const openURL = closure_130_1(closure_130_2[10]).openURL;
    const tmp15 = closure_130_1(closure_130_2[10]);
    const obj6 = closure_130_0(closure_130_2[11]);
    const tmp16 = url;
    if (obj6.isAndroid()) {
      IN_APP = tmp20.CHROME;
    } else {
      IN_APP = tmp20.IN_APP;
    }
    openURL(tmp16, IN_APP);
    return url;
  });
  return obj(...arguments);
};
let _slicedToArray = _slicedToArray_mod;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
const WebBrowserType = Constants.WebBrowserType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let tmp3 = new LoggerDefault("TwoWayLink");
let closure_10 = tmp3;
let closure_11 = createStyles.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function TwoWayLinkPreConnect(platformType) {
  let body;
  let closure_5;
  let img;
  let imgStyle;
  let intl;
  let items1;
  let logger;
  let obj6;
  let onNext;
  let redirectDestination;
  let ref;
  let title;
  let tmp13;
  const tmp = platformType;
  obj = platformType(onNext[13]);
  const cResult = obj.c(44);
  platformType = platformType.platformType;
  const onError = platformType.onError;
  onNext = platformType.onNext;
  ({ img, imgStyle, title, body, redirectDestination } = platformType);
  const tmp4 = closure_11();
  const obj2 = platformType(onNext[14]);
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  const obj3 = react;
  const tmp6 = _slicedToArray(react.useState(false), 2);
  [r10030, _slicedToArray] = tmp6;
  _asyncToGenerator = react.useRef(undefined);
  if (cResult[0] === onError) {
    if (cResult[3] === onNext) {
      let tmp8;
      let tmp10;
      let tmp9;
      if (cResult[4] === platformType) {
        tmp8 = cResult[5];
      }
      react = tmp8;
      if (cResult[6] !== tmp8) {
        class I {
          constructor() {
            obj = closure_1(closure_2[17]);
            subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
            return () => {
              obj = onError(onNext[17]);
              obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
            };
          }
        }
        const items = [tmp8];
        cResult[6] = tmp8;
        cResult[7] = I;
        cResult[8] = items;
        tmp10 = items;
        tmp9 = I;
      } else {
        class I {
          constructor() {
            obj = closure_1(closure_2[17]);
            subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
            return () => {
              obj = onError(onNext[17]);
              obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
            };
          }
        }
        tmp10 = cResult[8];
      }
      const effect = obj3.useEffect(tmp9, tmp10);
      const container = twoWayLinkStyles.container;
      if (imgStyle == null) {
        class I {
          constructor() {
            obj = closure_1(closure_2[17]);
            subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
            return () => {
              obj = onError(onNext[17]);
              obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
            };
          }
        }
      }
      if (cResult[9] === tmp4.image) {
        class I {
          constructor() {
            obj = closure_1(closure_2[17]);
            subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
            return () => {
              obj = onError(onNext[17]);
              obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
            };
          }
        }
        if (cResult[12] === img) {
          class I {
            constructor() {
              obj = closure_1(closure_2[17]);
              subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
              return () => {
                obj = onError(onNext[17]);
                obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
              };
            }
          }
          if (cResult[15] === twoWayLinkStyles.title) {
            class I {
              constructor() {
                obj = closure_1(closure_2[17]);
                subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                return () => {
                  obj = onError(onNext[17]);
                  obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                };
              }
            }
            if (cResult[18] === body) {
              class I {
                constructor() {
                  obj = closure_1(closure_2[17]);
                  subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                  return () => {
                    obj = onError(onNext[17]);
                    obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                  };
                }
              }
              if (cResult[21] === redirectDestination) {
                class I {
                  constructor() {
                    obj = closure_1(closure_2[17]);
                    subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                    return () => {
                      obj = onError(onNext[17]);
                      obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                    };
                  }
                }
                if (cResult[24] === twoWayLinkStyles.content) {
                  class I {
                    constructor() {
                      obj = closure_1(closure_2[17]);
                      subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                      return () => {
                        obj = onError(onNext[17]);
                        obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                      };
                    }
                  }
                }
                const obj4 = { style: twoWayLinkStyles.content, children: items1 };
                items1 = [tmp14, tmp18, tmp21, tmp24];
                const tmp29 = closure_9(View, obj4);
                cResult[24] = twoWayLinkStyles.content;
                cResult[25] = tmp21;
                cResult[26] = tmp24;
                cResult[27] = tmp14;
                cResult[28] = tmp18;
                cResult[29] = tmp29;
              }
              let tmp25 = null != redirectDestination;
              if (tmp25) {
                class I {
                  constructor() {
                    obj = closure_1(closure_2[17]);
                    subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_5);
                    return () => {
                      obj = onError(onNext[17]);
                      obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", closure_1_5);
                    };
                  }
                }
                const obj5 = { style: tmp4.redirect, variant: "text-sm/medium", color: "text-default", children: intl.format(tmp(tmp2[20]).t.XhlYYn, obj6) };
                const Text = tmp(tmp2[19]).Text;
                intl = tmp(tmp2[20]).intl;
                obj6 = { redirectUrl: redirectDestination };
                tmp25 = closure_8(Text, obj5);
              }
              cResult[21] = redirectDestination;
              cResult[22] = tmp4.redirect;
              cResult[23] = tmp25;
            }
            const obj7 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
            const tmp23 = closure_8(tmp(onNext[19]).Text, obj7);
            cResult[18] = body;
            cResult[19] = twoWayLinkStyles.body;
            cResult[20] = tmp23;
          }
          const obj8 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: title };
          const tmp20 = closure_8(tmp(onNext[19]).Text, obj8);
          cResult[15] = twoWayLinkStyles.title;
          cResult[16] = title;
          cResult[17] = tmp20;
        }
        const obj9 = { source: img, style: tmp13 };
        const tmp17 = closure_8(onError(onNext[18]), obj9);
        cResult[12] = img;
        cResult[13] = tmp13;
        cResult[14] = tmp17;
      }
      const items2 = [tmp4.image, imgStyle];
      cResult[9] = tmp4.image;
      cResult[10] = imgStyle;
      cResult[11] = items2;
      tmp13 = items2;
    }
    const fn = function z(callbackState) {
      callbackState = callbackState.callbackState;
      if (callbackState === ref.current) {
        obj = { callbackCode: tmp, callbackState };
        onNext(obj);
      } else {
        const _HermesInternal = HermesInternal;
        logger.warn("" + platformType + " link: received mismatching callback state!");
      }
    };
    cResult[3] = onNext;
    cResult[4] = platformType;
    cResult[5] = fn;
    tmp8 = fn;
  }
  let closure_0 = _asyncToGenerator(async () => {
    let c5;
    let closure_1;
    let closure_2;
    let v0;
    closure_0 = tmp4;
    c3(true);
    closure_0 = await closure_2_12(closure_0);
    c3(false);
    const obj6 = closure_0(onNext[15]);
    const state = obj6.getCallbackParamsFromURL(closure_0).state;
    onError(onNext[16])(null != state, "Authorize URL state query parameter must be present");
    c4.current = state;
    await "IconComponent";
    tmp();
  });
  function t1() {
    return closure_0(...arguments);
  }
  cResult[0] = onError;
  cResult[1] = platformType;
  cResult[2] = t1;
}) : (function TwoWayLinkPreConnect(platformType) {
  let Button;
  let body;
  let c3;
  let img;
  let imgStyle;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let logger;
  let obj10;
  let obj11;
  let obj8;
  let redirectDestination;
  let ref;
  let title;
  let tmp6;
  platformType = platformType.platformType;
  const onError = platformType.onError;
  const onNext = platformType.onNext;
  ({ imgStyle, redirectDestination } = platformType);
  _slicedToArray = undefined;
  let callback1;
  ({ img, title, body } = platformType);
  const tmp = closure_11();
  const tmp3 = onNext;
  obj = platformType(onNext[14]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [tmp6, c3] = _slicedToArray(callback1.useState(false), 2);
  const tmp5 = _slicedToArray(callback1.useState(false), 2);
  _asyncToGenerator = callback1.useRef(undefined);
  const items = [onError, platformType];
  const items1 = [platformType, onNext];
  const callback = callback1.useCallback(_asyncToGenerator(async () => {
    let c4;
    let c5;
    let closure_0;
    let closure_1;
    let closure_2;
    v0(true);
    platformType = await closure_1_12(platformType);
    closure_129_3(false);
    const obj6 = platformType(onNext[15]);
    const state = obj6.getCallbackParamsFromURL(platformType).state;
    tmp(onNext[16])(null != state, "Authorize URL state query parameter must be present");
    closure_129_4.current = state;
    await "IconComponent";
    closure_129_1();
  }), items);
  callback1 = callback1.useCallback((callbackState) => {
    callbackState = callbackState.callbackState;
    if (callbackState === ref.current) {
      obj = { callbackCode: tmp, callbackState };
      onNext(obj);
    } else {
      const _HermesInternal = HermesInternal;
      logger.warn("" + platformType + " link: received mismatching callback state!");
    }
  }, items1);
  const items2 = [callback1];
  const effect = callback1.useEffect(() => {
    obj = DispatcherDefault;
    const subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    return () => {
      obj = onError(onNext[17]);
      obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    };
  }, items2);
  const obj2 = { style: twoWayLinkStyles.container, children: items5 };
  const obj3 = { style: twoWayLinkStyles.content, children: items4 };
  const obj4 = { source: img, style: items3 };
  items3 = [tmp.image, ];
  const tmp13 = onError(onNext[18]);
  if (imgStyle == null) {
    imgStyle = false;
  }
  items3[1] = imgStyle;
  items4 = [tmp12(tmp13, obj4), , , ];
  const obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: title };
  items4[1] = closure_8(platformType(tmp3[19]).Text, obj5);
  let obj6 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items4[2] = closure_8(platformType(tmp3[19]).Text, obj6);
  let tmp12Result = null != redirectDestination;
  if (tmp12Result) {
    const obj7 = { style: tmp.redirect, variant: "text-sm/medium", color: "text-default", children: intl.format(platformType(tmp3[20]).t.XhlYYn, obj8) };
    const Text = tmp2(tmp3[19]).Text;
    intl = tmp2(tmp3[20]).intl;
    obj8 = { redirectUrl: redirectDestination };
    tmp12Result = tmp12(Text, obj7);
  }
  items4[3] = tmp12Result;
  items5 = [tmp10(tmp11, obj3), ];
  const obj9 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: closure_8(View, obj10) };
  obj10 = { style: twoWayLinkStyles.footerButton, children: closure_8(Button, obj11) };
  const SafeAreaPaddingView = tmp2(tmp3[22]).SafeAreaPaddingView;
  obj11 = { variant: "primary", size: "lg", text: intl2.string(platformType(tmp3[20]).t["3PatSz"]), onPress: callback, loading: tmp6 };
  Button = tmp2(tmp3[21]).Button;
  intl2 = tmp2(tmp3[20]).intl;
  items5[1] = closure_8(SafeAreaPaddingView, obj9);
  return closure_9(View, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx");

export const TwoWayLinkPreConnect = tmp4;
