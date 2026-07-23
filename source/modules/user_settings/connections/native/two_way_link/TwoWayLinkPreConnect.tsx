// Module ID: 8947
// Function ID: 70498
// Name: _authorizeLink
// Dependencies: [57, 5, 31, 27, 653, 33, 3, 4130, 4938, 8948, 3827, 477, 8943, 4939, 44, 686, 4126, 1212, 5121, 4543, 2]
// Exports: TwoWayLinkPreConnect

// Module 8947 (_authorizeLink)
import _slicedToArray from "_slicedToArray";
import closure_4 from "jsxProd";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { WebBrowserType } from "ME";
import jsxProd from "jsxProd";
import importDefaultResult from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
function _authorizeLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
({ Image: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
importDefaultResult = new importDefaultResult("TwoWayLink");
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ image: { marginBottom: 32 }, redirect: { marginTop: 8 } });
const result = require("result").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkPreConnect.tsx");

export const TwoWayLinkPreConnect = function TwoWayLinkPreConnect(platformType) {
  let body;
  let _slicedToArray;
  let img;
  let imgStyle;
  let redirectDestination;
  let title;
  let tmp4;
  platformType = platformType.platformType;
  const onError = platformType.onError;
  const onNext = platformType.onNext;
  ({ imgStyle, redirectDestination } = platformType);
  ({ img, title, body } = platformType);
  const tmp = callback4();
  let obj = platformType(onNext[12]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  [tmp4, _slicedToArray] = callback(callback1.useState(false), 2);
  const ref = callback1.useRef(undefined);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [onError, platformType];
  const items1 = [platformType, onNext];
  callback = callback1.useCallback(ref(ref), items);
  callback1 = callback1.useCallback((callbackState) => {
    callbackState = callbackState.callbackState;
    if (callbackState === ref.current) {
      const obj = { callbackCode: tmp, callbackState };
      onNext(obj);
    } else {
      const _HermesInternal = HermesInternal;
      outer1_11.warn("" + platformType + " link: received mismatching callback state!");
    }
  }, items1);
  const items2 = [callback1];
  const effect = callback1.useEffect(() => {
    const subscription = onError(onNext[15]).subscribe("USER_CONNECTIONS_LINK_CALLBACK", callback1);
    return () => {
      onError(onNext[15]).unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", outer1_5);
    };
  }, items2);
  obj = { style: twoWayLinkStyles.container };
  obj = { style: twoWayLinkStyles.content };
  const obj1 = { source: img };
  const items3 = [tmp.image, ];
  let tmp13 = null != imgStyle;
  if (tmp13) {
    tmp13 = imgStyle;
  }
  items3[1] = tmp13;
  obj1.style = items3;
  const items4 = [callback3(closure_6, obj1), , , ];
  const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, accessibilityRole: "header", children: title };
  items4[1] = callback3(platformType(onNext[16]).Text, obj2);
  const obj3 = { variant: "text-md/medium", color: "text-default", style: twoWayLinkStyles.body, children: body };
  items4[2] = callback3(platformType(onNext[16]).Text, obj3);
  let tmp14 = null != redirectDestination;
  if (tmp14) {
    const obj4 = { style: tmp.redirect, variant: "text-sm/medium", color: "text-default" };
    const intl = platformType(onNext[17]).intl;
    const obj5 = { redirectUrl: redirectDestination };
    obj4.children = intl.format(platformType(onNext[17]).t.XhlYYn, obj5);
    tmp14 = callback3(platformType(onNext[16]).Text, obj4);
  }
  items4[3] = tmp14;
  obj.children = items4;
  const items5 = [closure_10(closure_7, obj), ];
  const obj6 = { bottom: true, style: twoWayLinkStyles.footerContainer };
  const obj7 = { style: twoWayLinkStyles.footerButton };
  const obj8 = { variant: "primary", size: "lg" };
  const intl2 = platformType(onNext[17]).intl;
  obj8.text = intl2.string(platformType(onNext[17]).t["3PatSz"]);
  obj8.onPress = callback;
  obj8.loading = tmp4;
  obj7.children = callback3(platformType(onNext[19]).Button, obj8);
  obj6.children = callback3(closure_7, obj7);
  items5[1] = callback3(platformType(onNext[18]).SafeAreaPaddingView, obj6);
  obj.children = items5;
  return closure_10(closure_7, obj);
};
