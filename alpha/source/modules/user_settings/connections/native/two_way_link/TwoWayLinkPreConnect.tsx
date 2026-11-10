// Module ID: 9830
// Function ID: 9831
// Name: TwoWayLinkPreConnect
// Dependencies: [32, 5, 19, 17, 1072, 21, 3, 5142, 7411, 9831, 9826, 5836, 1377, 7412, 38, 5724, 572, 5844, 5753, 1113, 7358, 5760, 2]
// Exports: TwoWayLinkPreConnect

// Module 9830 (TwoWayLinkPreConnect)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 7411 */;
import TwoWayLinkType from "TwoWayLinkType" /* 9831 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let _undefined, c5, callbackState;

let c9;
let metroImportAll;
let obj = function _fetchAuthorizeURL() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let closure_0 = arg0;
    const obj4 = { twoWayLinkType: TwoWayLinkType.TwoWayLinkType.MOBILE };
    const authorize = ConnectedAccountsActionCreatorsDefault.authorize;
    await authorize(closure_0, obj4);
    return arg1.body.url;
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
const WebBrowserType = Constants.WebBrowserType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let tmp3 = new LoggerDefault("TwoWayLink");
let closure_10 = tmp3;
let closure_11 = createStyles.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx");

export function TwoWayLinkPreConnect(platformType) {
  let Button;
  let autoStart;
  let body;
  let c4;
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
  let onNext = platformType.onNext;
  ({ imgStyle, redirectDestination, autoStart } = platformType);
  ({ img, title, body } = platformType);
  if (autoStart === undefined) {
    autoStart = false;
  }
  _asyncToGenerator = undefined;
  react = undefined;
  let tmp = closure_11();
  const tmp3 = onNext;
  obj = platformType(onNext[10]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [tmp6, c4] = autoStart(react.useState(false), 2);
  const tmp5 = autoStart(react.useState(false), 2);
  react = react.useRef(undefined);
  let closure_6 = react.useRef(false);
  const effect = react.useEffect(() => {
    closure_6.current = true;
    return () => {
      closure_1_6.current = false;
    };
  }, []);
  const items = [onError, platformType];
  const onPress = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_1;
    let closure_2;
    let v1;
    function fetchAuthorizeURL() {
      return closure_1_12(...arguments);
    }
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let state;
        c5 = 2;
        if (0 === _undefined) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            platformType = undefined;
            state = undefined;
            _undefined(true);
            c3 = 1;
            _undefined = 2;
            c5 = 1;
            const obj5 = { value: fetchAuthorizeURL(platformType), done: false };
            return obj5;
          }
        } else if (1 === _undefined) {
          c3 = 0;
          if (closure_129_6.current) {
            closure_129_4(false);
            closure_129_1();
            c5 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else {
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          platformType = value;
          c3 = 0;
          if (closure_129_6.current) {
            let IN_APP;
            const openURL = tmp(onNext[11]).openURL;
            const tmp9 = tmp(onNext[11]);
            obj = platformType(onNext[12]);
            const tmp10 = platformType;
            if (obj.isAndroid()) {
              IN_APP = tmp14.CHROME;
            } else {
              IN_APP = tmp14.IN_APP;
            }
            openURL(tmp10, IN_APP);
            closure_129_4(false);
            const obj2 = platformType(onNext[13]);
            state = obj2.getCallbackParamsFromURL(platformType).state;
            tmp(onNext[14])(null != state, "Authorize URL state query parameter must be present");
            closure_129_5.current = state;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp40) {
        onNext = tmp40;
        if (0 === c3) {
          c5 = 3;
          throw tmp40;
        } else {
          _undefined = 1;
        }
      }
    }
  }), items);
  let tmp9 = onError(onNext[15])(() => {
    const tmp = autoStart;
    if (tmp) {
      callback();
    }
  });
  const items1 = [platformType, onNext];
  const callback1 = react.useCallback((callbackState) => {
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
  const effect1 = react.useEffect(() => {
    obj = DispatcherDefault;
    const subscription = obj.subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    return () => {
      obj = onError(onNext[16]);
      obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    };
  }, items2);
  let obj2 = { style: twoWayLinkStyles.container, children: items5 };
  let obj3 = { style: twoWayLinkStyles.content, children: items4 };
  const tmp14 = callback1;
  let obj4 = { source: img, style: items3 };
  items3 = [tmp.image, ];
  const tmp15 = onError(onNext[17]);
  if (imgStyle == null) {
    imgStyle = false;
  }
  items3[1] = imgStyle;
  items4 = [tmp14(tmp15, obj4), , , ];
  let obj5 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: title };
  items4[1] = tmp14(platformType(tmp3[18]).Text, obj5);
  let obj6 = { variant: "body-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items4[2] = tmp14(platformType(tmp3[18]).Text, obj6);
  let tmp14Result = null != redirectDestination;
  if (tmp14Result) {
    let obj7 = { style: tmp.redirect, variant: "body-sm/medium", color: "text-default", children: intl.format(tmp2(tmp3[19]).t.XhlYYn, obj8) };
    const Text = tmp2(tmp3[18]).Text;
    intl = tmp2(tmp3[19]).intl;
    obj8 = { redirectUrl: redirectDestination };
    tmp14Result = tmp14(Text, obj7);
  }
  items4[3] = tmp14Result;
  items5 = [tmp12(tmp13, obj3), ];
  const obj9 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: tmp14(closure_6, obj10) };
  obj10 = { style: twoWayLinkStyles.footerButton, children: tmp14(Button, obj11) };
  const SafeAreaPaddingView = tmp2(tmp3[20]).SafeAreaPaddingView;
  obj11 = { variant: "primary", size: "lg", text: intl2.string(platformType(tmp3[19]).t["3PatSz"]), onPress, loading: tmp6 };
  Button = tmp2(tmp3[21]).Button;
  intl2 = tmp2(tmp3[19]).intl;
  items5[1] = tmp14(SafeAreaPaddingView, obj9);
  return closure_9(closure_6, obj2);
}
