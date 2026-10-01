// Module ID: 8546
// Function ID: 8547
// Name: TwoWayLinkDiscordConsent
// Dependencies: [5, 32, 19, 17, 21, 3, 4836, 8538, 5718, 8514, 38, 5890, 6544, 5281, 1115, 2]
// Exports: TwoWayLinkDiscordConsent

// Module 8546 (TwoWayLinkDiscordConsent)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let v0;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsxs: metroImportAll, jsx: c9 } = Fragment);
const tmp4 = new LoggerDefault("TwoWayLinkDiscordConsentNative");
let closure_10 = tmp4;
let closure_11 = createStyles.createStyles({ scroller: { alignSelf: "stretch", flexShrink: 1 }, flex: { flex: 1 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkDiscordConsent.tsx");

export const TwoWayLinkDiscordConsent = function TwoWayLinkDiscordConsent(callbackCode) {
  let Button;
  let appDetails;
  let body;
  let clientId;
  let closure_5;
  let header;
  let intl;
  let items2;
  let items3;
  let items4;
  let obj3;
  let obj4;
  let obj9;
  let redirectUri;
  let scopes;
  let tmp10Result;
  let tmp12;
  let tmp13;
  let tmp14;
  callbackCode = callbackCode.callbackCode;
  const callbackState = callbackCode.callbackState;
  const platformType = callbackCode.platformType;
  const onNext = callbackCode.onNext;
  const onError = callbackCode.onError;
  react = undefined;
  ({ clientId, scopes, redirectUri } = callbackCode);
  const tmp = closure_11();
  const tmp3 = platformType;
  const obj = callbackCode(platformType[7]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const tmp5 = onError(react.useState(false), 2);
  react = tmp5[1];
  const first = tmp5[0];
  const useCallback = react.useCallback;
  let closure_0 = onNext((arg0) => {
    let closure_3;
    let _location = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, value) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let code;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              body = tmp;
              _location = undefined;
              code = undefined;
              v0 = 1;
              _location = _location.location;
              const obj2 = callbackState(platformType[8]);
              body = obj2.completeTwoWayLink(body, _location, _location, body);
              c5 = 2;
              c6 = 1;
              return { value: body, done: false };
            }
          } else {
            if (1 === tmp4) {
              v0 = 0;
              body = tmp32;
              const _HermesInternal = HermesInternal;
              logger.error("" + body + " link error:", body);
              body = body.body;
              code = undefined;
              if (body != null) {
                code = body.code;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              _location = value;
              v0 = 0;
            }
            if (null != _location) {
              tmp32();
            } else {
              body = v0;
              v0(code);
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp32) {
          if (0 === v0) {
            c6 = 3;
            throw tmp32;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  const items = [callbackCode, callbackState, platformType, onNext, onError];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const tmp8 = callbackState(platformType[9])({ clientId, scopes, responseType: "code", callback, isTrustedName: true, isEmbeddedFlow: true, redirectUri, withBackPressHandler: false });
  const sendAuthorize = tmp8.sendAuthorize;
  const items1 = [sendAuthorize];
  ({ header, body, appDetails } = tmp8);
  let obj2 = { style: twoWayLinkStyles.container, children: tmp10(tmp12, obj3) };
  const callback1 = react.useCallback(() => {
    _modDef38(null != sendAuthorize, "sendAuthorize not available");
    closure_5(true);
    sendAuthorize({ isAuthorized: true });
  }, items1);
  obj3 = { style: tmp.flex, children: tmp13(tmp14, obj4) };
  obj4 = { style: tmp.scroller, children: items4 };
  const obj5 = { style: twoWayLinkStyles.body, children: items2 };
  items2 = [header, ];
  const obj6 = { style: twoWayLinkStyles.bodyContent, children: items3 };
  items3 = [body, appDetails];
  tmp12 = callbackState(platformType[11]);
  items2[1] = closure_8(sendAuthorize, obj6);
  items4 = [closure_8(sendAuthorize, obj5), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: tmp10Result };
  tmp10Result = null != sendAuthorize;
  const SafeAreaPaddingView = callbackCode(platformType[12]).SafeAreaPaddingView;
  tmp13 = closure_8;
  tmp14 = closure_7;
  if (tmp10Result) {
    const obj8 = { style: twoWayLinkStyles.footerButton, children: closure_9(Button, obj9) };
    obj9 = { size: "lg", variant: "primary", text: intl.string(callbackCode(tmp3[14]).t.ZN4hkc), onPress: callback1, loading: first };
    Button = tmp2(tmp3[13]).Button;
    intl = tmp2(tmp3[14]).intl;
    tmp10Result = tmp10(tmp11, obj8);
  }
  items4[1] = closure_9(SafeAreaPaddingView, obj7);
  return closure_9(sendAuthorize, obj2);
};
