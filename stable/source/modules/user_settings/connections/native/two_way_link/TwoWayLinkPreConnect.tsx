// Module ID: 9734
// Function ID: 9735
// Name: TwoWayLinkPreConnect
// Dependencies: [32, 5, 19, 17, 1072, 21, 3, 5014, 7347, 9735, 5709, 1375, 9730, 7348, 38, 572, 5717, 5624, 1113, 7292, 5634, 2]
// Exports: TwoWayLinkPreConnect

// Module 9734 (TwoWayLinkPreConnect)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 7347 */;
import TwoWayLinkType from "TwoWayLinkType" /* 9735 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let callbackState;

let c9;
let metroImportAll;
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
const View = react_native.View;
const WebBrowserType = Constants.WebBrowserType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let tmp3 = new LoggerDefault("TwoWayLink");
let closure_10 = tmp3;
let closure_11 = createStyles.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx");

export function TwoWayLinkPreConnect(platformType) {
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
  obj = platformType(onNext[12]);
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
    function authorizeLink() {
      return closure_1_12(...arguments);
    }
    v0(true);
    platformType = await authorizeLink(platformType);
    closure_129_3(false);
    const obj6 = platformType(onNext[13]);
    const state = obj6.getCallbackParamsFromURL(platformType).state;
    tmp(onNext[14])(null != state, "Authorize URL state query parameter must be present");
    closure_129_4.current = state;
    await "HermesInternal";
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
      obj = onError(onNext[15]);
      obj.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    };
  }, items2);
  const obj2 = { style: twoWayLinkStyles.container, children: items5 };
  const obj3 = { style: twoWayLinkStyles.content, children: items4 };
  const tmp12 = closure_8;
  const obj4 = { source: img, style: items3 };
  items3 = [tmp.image, ];
  const tmp13 = onError(onNext[16]);
  if (imgStyle == null) {
    imgStyle = false;
  }
  items3[1] = imgStyle;
  items4 = [tmp12(tmp13, obj4), , , ];
  const obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: title };
  items4[1] = tmp12(platformType(tmp3[17]).Text, obj5);
  let obj6 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items4[2] = tmp12(platformType(tmp3[17]).Text, obj6);
  let tmp12Result = null != redirectDestination;
  if (tmp12Result) {
    const obj7 = { style: tmp.redirect, variant: "text-sm/medium", color: "text-default", children: intl.format(platformType(tmp3[18]).t.XhlYYn, obj8) };
    const Text = tmp2(tmp3[17]).Text;
    intl = tmp2(tmp3[18]).intl;
    obj8 = { redirectUrl: redirectDestination };
    tmp12Result = tmp12(Text, obj7);
  }
  items4[3] = tmp12Result;
  items5 = [tmp10(tmp11, obj3), ];
  const obj9 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: tmp12(View, obj10) };
  obj10 = { style: twoWayLinkStyles.footerButton, children: tmp12(Button, obj11) };
  const SafeAreaPaddingView = tmp2(tmp3[19]).SafeAreaPaddingView;
  obj11 = { variant: "primary", size: "lg", text: intl2.string(platformType(tmp3[18]).t["3PatSz"]), onPress: callback, loading: tmp6 };
  Button = tmp2(tmp3[20]).Button;
  intl2 = tmp2(tmp3[18]).intl;
  items5[1] = tmp12(SafeAreaPaddingView, obj9);
  return closure_9(View, obj2);
}
