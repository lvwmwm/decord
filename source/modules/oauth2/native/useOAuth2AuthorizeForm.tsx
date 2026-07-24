// Module ID: 8991
// Function ID: 70738
// Name: useOAuth2AuthorizeForm
// Dependencies: [5, 57, 31, 27, 3772, 4122, 4153, 4812, 1849, 8992, 653, 33, 4130, 3763, 566, 4528, 3991, 4131, 5463, 8993, 8994, 483, 8995, 507, 491, 8996, 8998, 9000, 8224, 5470, 1184, 9001, 9002, 4324, 9003, 4540, 9004, 4543, 1212, 5584, 4814, 9006, 9047, 8354, 8999, 9052, 9056, 9055, 9057, 9058, 9059, 9061, 9070, 5151, 2]
// Exports: default

// Module 8991 (useOAuth2AuthorizeForm)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import convertOAuth2Authorization from "convertOAuth2Authorization";
import { View } from "getLocationContextServer";
import createText from "createText";
import closure_9 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import OAuth2Steps from "OAuth2Steps";
import ME from "ME";
import jsxProd from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
const require = arg1;
({ EMOJI_POINTING_DOWN_CODE_POINT: closure_13, OAuth2Steps: closure_14 } = OAuth2Steps);
({ AnalyticEvents: closure_15, Endpoints: closure_16 } = ME);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = _createForOfIteratorHelperLoose.createStyles({ loading: { flex: 1, alignSelf: "center", justifyContent: "center" } });
let closure_21 = { code: "function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}" };
let result = require("result").fileFinishedImporting("modules/oauth2/native/useOAuth2AuthorizeForm.tsx");

export default function useOAuth2AuthorizeForm(clientId) {
  let channelId;
  let guildId;
  let integrationType;
  clientId = clientId.clientId;
  const responseType = clientId.responseType;
  let redirectUri = clientId.redirectUri;
  const codeChallenge = clientId.codeChallenge;
  const codeChallengeMethod = clientId.codeChallengeMethod;
  const state = clientId.state;
  let text1 = state;
  const nonce = clientId.nonce;
  const _prompt = clientId.prompt;
  let scopes = clientId.scopes;
  let permissions = clientId.permissions;
  ({ guildId, channelId, integrationType } = clientId);
  let flag = clientId.disableGuildSelect;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = clientId.isTrustedName;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = clientId.isEmbeddedFlow;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = clientId.withBackPressHandler;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let callback = clientId.callback;
  const callbackWithoutPost = clientId.callbackWithoutPost;
  const dismissOAuthModal = clientId.dismissOAuthModal;
  const disclosures = clientId.disclosures;
  const connectedAccountProvider = clientId.connectedAccountProvider;
  let flag5 = clientId.wasDeepLink;
  if (flag5 === undefined) {
    flag5 = false;
  }
  callback = undefined;
  let first;
  let closure_19;
  let first1;
  let closure_21;
  let first2;
  let closure_23;
  let closure_24;
  let guilds;
  let first3;
  let c27;
  let first4;
  let c29;
  let first5;
  let closure_31;
  let nsfwAllowed;
  let memo;
  let c34;
  let first6;
  let closure_36;
  let first7;
  let c38;
  let stateFromStores2;
  let isScreenReaderEnabled;
  let memo1;
  let first8;
  let closure_43;
  let memo2;
  let requestedScopes;
  let memo4;
  let first9;
  let closure_48;
  let closure_49;
  let first11;
  let c51;
  let first12;
  let c53;
  callback = undefined;
  let callback1;
  let closure_56;
  let ref;
  let callback2;
  let memo5;
  let closure_60;
  let AUTHORIZE_SCOPES;
  let callback4;
  let AUTHORIZE_BOT_PERMISSIONS;
  class Spinner {
    constructor() {
      obj = { style: closure_17.loading, children: closure_17(clientId(codeChallenge[39]).ActivityIndicator, {}) };
      return closure_17(prompt, obj);
    }
  }
  callback = first1();
  let name = text1(nonce.useState(null), 2);
  first = name[0];
  closure_19 = name[1];
  const tmp3 = text1(nonce.useState(null), 2);
  first1 = tmp3[0];
  closure_21 = tmp3[1];
  const tmp5 = text1(nonce.useState(null), 2);
  first2 = tmp5[0];
  closure_23 = tmp5[1];
  const tmp7 = text1(nonce.useState(false), 2);
  closure_24 = tmp7[1];
  guilds = undefined;
  if (null != first) {
    guilds = first.guilds;
  }
  let tmp10 = null;
  if (null != guildId) {
    tmp10 = guildId;
  }
  const tmp11 = text1(nonce.useState(tmp10), 2);
  first3 = tmp11[0];
  c27 = tmp13;
  let tmp15 = null;
  if (null != channelId) {
    tmp15 = channelId;
  }
  const tmp16 = text1(nonce.useState(tmp15), 2);
  first4 = tmp16[0];
  c29 = tmp18;
  const tmp19 = text1(nonce.useState(redirectUri(codeChallenge[13]).NONE), 2);
  first5 = tmp19[0];
  closure_31 = tmp19[1];
  let obj = clientId(codeChallenge[14]);
  let items = [callbackWithoutPost];
  const stateFromStores = obj.useStateFromStores(items, () => callbackWithoutPost.getCurrentUser());
  nsfwAllowed = undefined;
  if (null != stateFromStores) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items1 = [guilds, first3];
  memo = nonce.useMemo(() => {
    let found;
    if (null != guilds) {
      found = guilds.find((id) => id.id === outer1_26);
    }
    return found;
  }, items1);
  let obj1 = clientId(codeChallenge[14]);
  const items2 = [callback];
  const items3 = [connectedAccountProvider];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let tmp = null;
    if (null != connectedAccountProvider) {
      const accounts = callback.getAccounts();
      const found = accounts.find((type) => type.type === outer1_15);
      let tmp4 = null;
      if (null != found) {
        tmp4 = found;
      }
      tmp = tmp4;
    }
    return tmp;
  }, items3);
  c34 = tmp25;
  const tmp27 = text1(nonce.useState(null), 2);
  first6 = tmp27[0];
  closure_36 = tmp27[1];
  const tmp29 = text1(nonce.useState(false), 2);
  first7 = tmp29[0];
  c38 = tmp31;
  let obj2 = clientId(codeChallenge[14]);
  const items4 = [permissions];
  stateFromStores2 = obj2.useStateFromStores(items4, () => permissions.useReducedMotion);
  let obj3 = clientId(codeChallenge[15]);
  isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  let num = 16;
  let obj4 = clientId(codeChallenge[16]);
  class X {
    constructor() {
      if (c39) {
        obj = {};
      } else {
        obj = {};
        obj = {};
        tmp = clientId;
        tmp2 = codeChallenge;
        num = 16;
        obj3 = clientId(codeChallenge[16]);
        num2 = 17;
        obj4 = clientId(codeChallenge[17]);
        obj1 = {};
        num3 = 250;
        obj1.duration = 250;
        Easing = clientId(codeChallenge[16]).Easing;
        obj1.easing = Easing.inOut(clientId(codeChallenge[16]).Easing.quad);
        num4 = -5;
        withTimingResult = obj4.withTiming(-5, obj1);
        obj6 = clientId(codeChallenge[16]);
        obj7 = clientId(codeChallenge[17]);
        obj2 = {};
        num5 = 500;
        obj2.duration = 500;
        Easing2 = clientId(codeChallenge[16]).Easing;
        obj2.easing = Easing2.inOut(clientId(codeChallenge[16]).Easing.quad);
        num6 = 5;
        num7 = -1;
        flag = true;
        obj.translateY = obj3.withSequence(withTimingResult, obj6.withRepeat(obj7.withTiming(5, obj2), -1, true));
        items = [];
        items[0] = obj;
        obj.transform = items;
      }
      return obj;
    }
  }
  obj = { shouldReduceMotion: stateFromStores2, withSequence: clientId(codeChallenge[16]).withSequence, withTiming: clientId(codeChallenge[17]).withTiming, Easing: clientId(codeChallenge[16]).Easing, withRepeat: clientId(codeChallenge[16]).withRepeat };
  X.__closure = obj;
  X.__workletHash = 1476082137097;
  X.__initData = closure_21;
  let animatedStyle = obj4.useAnimatedStyle(X);
  let length;
  if (null != scopes) {
    length = scopes.length;
  }
  const items5 = [length, redirectUri, integrationType];
  memo1 = nonce.useMemo(() => {
    let tmp = null == integrationType;
    if (tmp) {
      let length;
      if (null != scopes) {
        length = scopes.length;
      }
      let num2 = 0;
      if (null != length) {
        num2 = length;
      }
      tmp = 0 === num2;
    }
    if (tmp) {
      tmp = null == redirectUri;
    }
    return tmp;
  }, items5);
  const tmp38 = text1(nonce.useState(null), 2);
  first8 = tmp38[0];
  closure_43 = tmp38[1];
  const items6 = [clientId, memo1];
  const effect = nonce.useEffect(() => {
    if (memo1) {
      const application = responseType(codeChallenge[18]).fetchApplication(clientId);
      application.then((arg0) => outer1_43(integrationType.createFromServer(arg0)));
      const obj = responseType(codeChallenge[18]);
    }
  }, items6);
  let prop;
  if (null != first8) {
    prop = first8.integrationTypesConfig;
  }
  const items7 = [prop, first6];
  memo2 = nonce.useMemo(() => {
    let tmp = null;
    if (null != first6) {
      let oauth2InstallParams;
      if (null != first8) {
        const integrationTypesConfig = first8.integrationTypesConfig;
        if (null != integrationTypesConfig) {
          if (null != integrationTypesConfig[first6]) {
            oauth2InstallParams = tmp6.oauth2InstallParams;
          }
        }
      }
      tmp = oauth2InstallParams;
    }
    return tmp;
  }, items7);
  let scopes1;
  if (null != memo2) {
    scopes1 = memo2.scopes;
  }
  const items8 = [scopes1, scopes, memo1];
  const memo3 = nonce.useMemo(() => {
    if (memo1) {
      let scopes;
      if (null != memo2) {
        scopes = memo2.scopes;
      }
      let items = scopes;
    } else {
      items = scopes;
    }
    let obj = clientId(codeChallenge[19]);
    if (null == items) {
      items = [];
    }
    const filterScopesResult = obj.filterScopes(items);
    clientId = filterScopesResult;
    const OrderedAccountScopes = clientId(codeChallenge[20]).OrderedAccountScopes;
    obj = { requestedScopes: filterScopesResult, accountScopes: OrderedAccountScopes.filter((arg0) => closure_0.includes(arg0)) };
    return obj;
  }, items8);
  requestedScopes = memo3.requestedScopes;
  const accountScopes = memo3.accountScopes;
  permissions = undefined;
  if (null != memo2) {
    permissions = memo2.permissions;
  }
  const items9 = [permissions, permissions, memo1];
  memo4 = nonce.useMemo(() => {
    if (memo1) {
      let permissions;
      if (null != memo2) {
        permissions = memo2.permissions;
      }
      let num2 = 0;
      if (null != permissions) {
        num2 = permissions;
      }
      let NONE = redirectUri(codeChallenge[21]).deserialize(num2);
      const obj = redirectUri(codeChallenge[21]);
    } else {
      NONE = permissions;
    }
    if (null == NONE) {
      NONE = redirectUri(codeChallenge[13]).NONE;
    }
    return NONE;
  }, items9);
  const tmp49 = text1(nonce.useState(false), 2);
  first9 = tmp49[0];
  closure_48 = tmp49[1];
  const items10 = [clientId];
  const effect1 = nonce.useEffect(() => {
    const obj = responseType(codeChallenge[22]);
    responseType(codeChallenge[22]).checkIfOAuthRequest(clientId).then(closure_48);
  }, items10);
  const first10 = text1(nonce.useState(null), 2)[0];
  let tmp55 = state;
  if (first9) {
    let obj6 = clientId(codeChallenge[23]);
    const text = `${obj7.getAPIBaseURL(false)}/v6${flag5.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK}`;
    redirectUri = text;
    if (tmp60) {
      obj7 = clientId(codeChallenge[24]);
      tmp54(obj7.v4());
    }
    let tmp64 = state;
    if (null != first10) {
      text1 = state;
      if (null == state) {
        text1 = `SA${tmp53}`;
      }
      tmp64 = text1;
    }
    tmp55 = tmp64;
    redirectUri = text;
    tmp60 = null == state && null == first10;
  }
  closure_49 = nonce.useRef(false);
  let items11 = disclosures;
  if (null == disclosures) {
    items11 = [];
  }
  const tmp67 = text1(nonce.useState(items11), 2);
  first11 = tmp67[0];
  c51 = tmp69;
  const tmp70 = text1(nonce.useState(null != disclosures), 2);
  first12 = tmp70[0];
  c53 = tmp72;
  const items12 = [clientId, disclosures, tmp67[1], tmp70[1]];
  const effect2 = nonce.useEffect(() => {
    function _doGetDisclosures() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = codeChallengeMethod(tmp);
      return obj(...arguments);
    }
    if (!ref.current) {
      if (null == disclosures) {
        (function doGetDisclosures() {
          return _doGetDisclosures(...arguments);
        })();
      }
    }
  }, items12);
  let prop1;
  if (null != first) {
    prop1 = first.application.content_classification;
  }
  if (null == prop1) {
    let prop2;
    if (null != first8) {
      prop2 = first8.contentClassification;
    }
    prop1 = prop2;
  }
  let obj8 = clientId(codeChallenge[26]);
  let result = obj8.isContentClassificationRestricted(prop1, nsfwAllowed);
  const items13 = [first6, callbackWithoutPost, clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp55, nonce, memo4, first5, first3, first4, first11, dismissOAuthModal, callback, flag5, , , ];
  let application;
  const tmp52 = text1(nonce.useState(null), 2);
  if (null != first) {
    application = first.application;
  }
  items13[18] = application;
  items13[19] = memo;
  items13[20] = connectedAccountProvider;
  callback = nonce.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = codeChallengeMethod(tmp);
    return function(arg0) {
      return callback(...arguments);
    };
  })(), items13);
  const items14 = [callback];
  callback1 = nonce.useCallback((arg0) => {
    let closure_0 = arg0;
    return new Promise((arg0) => {
      let closure_0 = arg0;
      return outer1_54({
        isAuthorized: closure_0,
        overrideSuccessCallback(location) {
          callback(location);
        }
      });
    });
  }, items14);
  const items15 = [clientId, first9, responseType, callback, callback1, tmp55, dismissOAuthModal, requestedScopes];
  closure_56 = nonce.useCallback((isAuthorized) => {
    let closure_0 = isAuthorized;
    if (first9) {
      const result = responseType(codeChallenge[22]).showConnectionDisclaimer();
      const obj2 = responseType(codeChallenge[22]);
      const nextPromise = result.then(() => responseType(codeChallenge[22]).getAccountUrlAndAuthCode());
      const nextPromise1 = result.then(() => responseType(codeChallenge[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, clientId(codeChallenge[27]).startSamsungAuthorization(closure_0, outer1_45, outer1_1, tmp, outer1_5)];
        return Promise.all(items);
      });
      const nextPromise2 = result.then(() => responseType(codeChallenge[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, clientId(codeChallenge[27]).startSamsungAuthorization(closure_0, outer1_45, outer1_1, tmp, outer1_5)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, outer1_55(closure_0)];
        return Promise.all(items);
      });
      const nextPromise3 = result.then(() => responseType(codeChallenge[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, clientId(codeChallenge[27]).startSamsungAuthorization(closure_0, outer1_45, outer1_1, tmp, outer1_5)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, outer1_55(closure_0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return responseType(codeChallenge[22]).finishSamsungAuthorization(tmp, tmp2, outer1_5);
      });
      result.then(() => responseType(codeChallenge[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, clientId(codeChallenge[27]).startSamsungAuthorization(closure_0, outer1_45, outer1_1, tmp, outer1_5)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, outer1_55(closure_0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return responseType(codeChallenge[22]).finishSamsungAuthorization(tmp, tmp2, outer1_5);
      }).then(() => {
        let tmp;
        if (null != outer1_13) {
          tmp = outer1_13();
        }
        return tmp;
      }).catch((arg0) => {
        responseType(codeChallenge[30]).captureException(arg0);
      });
      const nextPromise4 = result.then(() => responseType(codeChallenge[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, clientId(codeChallenge[27]).startSamsungAuthorization(closure_0, outer1_45, outer1_1, tmp, outer1_5)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, outer1_55(closure_0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return responseType(codeChallenge[22]).finishSamsungAuthorization(tmp, tmp2, outer1_5);
      }).then(() => {
        let tmp;
        if (null != outer1_13) {
          tmp = outer1_13();
        }
        return tmp;
      });
    } else {
      const obj = { isAuthorized };
      callback(obj);
    }
  }, items15);
  ref = nonce.useRef(false);
  // CreateGeneratorClosureLongIndex (0x67)
  const items16 = [clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp55, first6, connectedAccountProvider, _prompt, callback, first12, nsfwAllowed];
  callback2 = nonce.useCallback(codeChallengeMethod(ref), items16);
  const items17 = [first8, memo1];
  memo5 = nonce.useMemo(() => {
    if (null != first8) {
      if (memo1) {
        let prop = first8.integrationTypesConfig;
        if (null == prop) {
          prop = {};
        }
        const entries = Object.entries(prop);
        const found = entries.filter((arg0) => {
          let tmp;
          [, tmp] = arg0;
          return null != tmp.oauth2InstallParams;
        });
        const mapped = found.map((arg0) => {
          let tmp;
          [tmp, ] = arg0;
          return Number(tmp);
        });
      }
      return [];
    }
  }, items17);
  closure_60 = nonce.useRef(null);
  const items18 = [clientId, first6, memo4, requestedScopes, first1];
  const effect3 = nonce.useEffect(() => {
    if (first1 !== ref2.current) {
      ref2.current = first1;
      let obj = clientId(codeChallenge[33]);
      obj = { step: first1, application_id: clientId, integration_type: first6, scopes: requestedScopes, permissions: memo4.toString() };
      obj.trackWithMetadata(connectedAccountProvider.OAUTH2_AUTHORIZE_STEP_VIEWED, obj);
    }
  }, items18);
  const items19 = [memo5, first8, memo1, integrationType, first1, connectedAccountProvider, null == connectedAccountProvider || null != stateFromStores1];
  const effect4 = nonce.useEffect(() => {
    let tmp = null != first1;
    if (!tmp) {
      let tmp2 = memo1;
      if (memo1) {
        tmp2 = null == first8;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      if (null != connectedAccountProvider) {
        if (!c34) {
          callback2(disclosures.CONNECT_ACCOUNT);
        }
      }
      if (memo5.length > 1) {
        callback2(disclosures.SELECT_INSTALL_TYPE);
      } else if (1 === memo5.length) {
        callback5(memo5[0]);
        callback2(disclosures.AUTHORIZE_SCOPES);
      } else if (null != integrationType) {
        callback5(integrationType);
        callback2(disclosures.AUTHORIZE_SCOPES);
      } else {
        callback5(clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL);
        callback2(disclosures.AUTHORIZE_SCOPES);
      }
    }
  }, items19);
  const items20 = [first1, null == connectedAccountProvider || null != stateFromStores1, integrationType];
  const effect5 = nonce.useEffect(() => {
    if (tmp) {
      if (null != integrationType) {
        let USER_INSTALL = integrationType;
      } else {
        USER_INSTALL = clientId(codeChallenge[28]).ApplicationIntegrationType.USER_INSTALL;
      }
      closure_36(USER_INSTALL);
      callback2(disclosures.AUTHORIZE_SCOPES);
      const tmp2 = closure_36;
    }
  }, items20);
  const items21 = [callback2, requestedScopes, memo4, first6, first, first2];
  const effect6 = nonce.useEffect(() => {
    if (null != first6) {
      if (null == first) {
        if (null == first2) {
          if (first6 === clientId(codeChallenge[28]).ApplicationIntegrationType.USER_INSTALL) {
            _undefined(null);
            _undefined2(null);
          }
          const found = requestedScopes.filter((arg0) => {
            const ValidScopes = clientId(codeChallenge[20]).ValidScopes;
            return !ValidScopes.includes(arg0);
          });
          if (0 === requestedScopes.length) {
            const _Error3 = Error;
            const error = new Error("No scopes were provided.");
            callback3(error);
          } else if (found.length > 0) {
            const _Error2 = Error;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Invalid scope: " + found[0]);
            callback3(error1);
          } else {
            if (obj.containsDisallowedPermission(memo4)) {
              const _Error = Error;
              const error2 = new Error("Invalid permission(s) provided.");
              callback3(error2);
            } else {
              callback2();
            }
            obj = clientId(codeChallenge[34]);
          }
        }
      }
    }
  }, items21);
  const items22 = [isScreenReaderEnabled, first7];
  const callback3 = nonce.useCallback(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = !first7;
    }
    if (tmp) {
      _undefined3(true);
    }
  }, items22);
  if (first1 === disclosures.AUTHORIZE_SCOPES) {
    if (memo5.length > 1) {
      const SELECT_INSTALL_TYPE = disclosures.SELECT_INSTALL_TYPE;
      AUTHORIZE_SCOPES = SELECT_INSTALL_TYPE;
      let tmp89 = SELECT_INSTALL_TYPE;
    }
    const items23 = [tmp89, dismissOAuthModal, callback];
    callback4 = nonce.useCallback(() => {
      if (null != AUTHORIZE_SCOPES) {
        callback2(AUTHORIZE_SCOPES);
      } else {
        callback({ isAuthorized: false, canceled: true });
        if (null != dismissOAuthModal) {
          dismissOAuthModal();
        }
      }
      return true;
    }, items23);
    responseType(codeChallenge[35])(callback4, flag4);
    const callback5 = nonce.useCallback((arg0) => {
      callback5(arg0);
      callback(null);
      callback2(disclosures.AUTHORIZE_SCOPES);
    }, []);
    let _Error = Error;
    if (first2 instanceof Error) {
      obj = {};
      name = callback;
      name = responseType;
      name = codeChallenge;
      obj1 = { error: first2.message, hideFooter: true };
      obj.body = callback(responseType(codeChallenge[36]), obj1);
      obj.goBackOrCancel = callback4;
      name = clientId;
      obj2 = { size: "lg" };
      const intl4 = clientId(codeChallenge[38]).intl;
      obj2.text = intl4.string(clientId(codeChallenge[38]).t.cpT0Cq);
      obj2.onPress = function onPress() {
        return callback4();
      };
      obj.footer = callback(clientId(codeChallenge[37]).Button, obj2);
      obj.obscured = false;
      return obj;
    } else {
      let str4 = "";
      if (null != connectedAccountProvider) {
        name = responseType;
        name = codeChallenge;
        let obj9 = responseType(codeChallenge[40]);
        name = obj9.get(connectedAccountProvider);
        name = undefined;
        if (null != name) {
          name = name.name;
        }
        str4 = "";
        if (null != name) {
          str4 = name;
        }
      }
      if (null === first1) {
        obj3 = {};
        name = callback;
        obj3.body = callback(Spinner, {});
        obj3.obscured = false;
        return obj3;
      } else {
        name = disclosures;
        if (disclosures.CONNECT_ACCOUNT === first1) {
          name = callback;
          name = responseType;
          name = codeChallenge;
          obj4 = { clientId, platformType: connectedAccountProvider, platformName: str4 };
          name = callback(responseType(codeChallenge[41]), obj4);
          let flag6 = true;
          let items29 = false;
          let flag7 = false;
          let flag8 = false;
        } else {
          name = disclosures;
          if (disclosures.SELECT_INSTALL_TYPE === first1) {
            if (null == first8) {
              const obj5 = {};
              name = callback;
              obj5.body = callback(Spinner, {});
              obj5.obscured = false;
              return obj5;
            } else {
              name = callback;
              name = responseType;
              name = codeChallenge;
              obj6 = { application: first8, onSelect: callback5 };
              name = callback(responseType(codeChallenge[42]), obj6);
              flag6 = false;
              items29 = false;
              flag7 = false;
              flag8 = false;
            }
          } else {
            name = disclosures;
            if (disclosures.AUTHORIZE_SCOPES === first1) {
              if (null != first) {
                if (null != stateFromStores) {
                  if (null != first6) {
                    if (null == first2) {
                      obj7 = {};
                    } else {
                      let _Error2 = Error;
                      obj7 = first2;
                    }
                    if (null != guilds) {
                      let sorted = guilds.sort((name, name2) => {
                        const formatted = name.name.toLowerCase();
                        return formatted.localeCompare(name2.name.toLowerCase());
                      });
                    }
                    name = clientId;
                    name = codeChallenge;
                    name = first6 === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL;
                    if (name) {
                      name = clientId;
                      name = codeChallenge;
                      name = requestedScopes.includes(clientId(codeChallenge[43]).OAuth2Scopes.WEBHOOK_INCOMING);
                    }
                    if (!name) {
                      name = clientId;
                      name = codeChallenge;
                      name = first6 === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL;
                      if (name) {
                        name = clientId;
                        name = codeChallenge;
                        name = requestedScopes.includes(clientId(codeChallenge[43]).OAuth2Scopes.BOT);
                        if (!name) {
                          name = clientId;
                          name = codeChallenge;
                          name = requestedScopes.includes(clientId(codeChallenge[43]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                        }
                      }
                    }
                    name = clientId;
                    name = codeChallenge;
                    let obj13 = clientId(codeChallenge[44]);
                    obj8 = {};
                    name = null;
                    name = obj13.getIsSocialLayerParentApplication(first.application);
                    name = closure_19;
                    name = first;
                    if (null != stateFromStores1) {
                      name = null;
                      if (tmp25) {
                        name = callback;
                        name = clientId;
                        name = codeChallenge;
                        obj9 = { platformType: stateFromStores1.type, platformName: str4, connectedAccount: stateFromStores1, applicationName: first.application.name };
                        name = callback(clientId(codeChallenge[41]).ConnectedAccountCard, obj9);
                      }
                    }
                    const items24 = [name, , , , ];
                    name = responseType;
                    name = codeChallenge;
                    name = callback;
                    const obj10 = { application: first.application, accountScopes };
                    items24[1] = callback(responseType(codeChallenge[45]), obj10);
                    const obj11 = { application: first.application, accountScopes, requestedScopes, integrationType: first6, errors: obj7 };
                    name = responseType(codeChallenge[46]);
                    if (!flag2) {
                      flag2 = name;
                    }
                    obj11.isTrustedName = flag2;
                    items24[2] = name(name, obj11);
                    name = null;
                    if (name) {
                      const obj12 = {};
                      name = clientId;
                      name = codeChallenge;
                      name = closure_19;
                      name = first;
                      name = callback;
                      const items25 = [callback(clientId(codeChallenge[47]).AuthorizeFormSeparator, {}), ];
                      name = responseType;
                      obj13 = {};
                      name = responseType(codeChallenge[48]);
                      let items26 = obj7[clientId(undefined, codeChallenge[43]).OAuth2Scopes.BOT];
                      if (null == items26) {
                        name = clientId;
                        name = codeChallenge;
                        items26 = obj7[clientId(undefined, codeChallenge[43]).OAuth2Scopes.APPLICATIONS_COMMANDS];
                      }
                      if (null == items26) {
                        items26 = [];
                      }
                      obj13.error = items26[0];
                      obj13.selectedGuildId = first3;
                      obj13.onGuildChange = tmp13;
                      if (null == sorted) {
                        sorted = [];
                      }
                      obj13.guilds = sorted;
                      name = "" !== first3;
                      if (name) {
                        name = true === flag;
                      }
                      obj13.disabled = name;
                      items25[1] = name(name, obj13);
                      obj12.children = items25;
                      name = name(name, obj12);
                    }
                    items24[3] = name;
                    name = null;
                    if (name) {
                      const obj14 = {};
                      name = clientId;
                      name = codeChallenge;
                      name = closure_19;
                      name = first;
                      name = callback;
                      const items27 = [callback(clientId(codeChallenge[47]).AuthorizeFormSeparator, {}), ];
                      name = responseType;
                      const obj15 = {};
                      name = responseType(codeChallenge[49]);
                      let items28 = obj7[clientId(undefined, codeChallenge[43]).OAuth2Scopes.WEBHOOK_INCOMING];
                      if (null == items28) {
                        items28 = [];
                      }
                      obj15.error = items28[0];
                      obj15.selectedChannelId = first4;
                      obj15.selectedGuildId = first3;
                      obj15.onChannelChange = tmp18;
                      items27[1] = name(name, obj15);
                      obj14.children = items27;
                      name = name(name, obj14);
                    }
                    items24[4] = name;
                    obj8.children = items24;
                    name = clientId;
                    name = codeChallenge;
                    name = name(name, obj8);
                    name = requestedScopes.includes(clientId(codeChallenge[43]).OAuth2Scopes.BOT);
                    if (name) {
                      name = redirectUri;
                      name = codeChallenge;
                      let obj22 = redirectUri(codeChallenge[21]);
                      name = !obj22.equals(memo4, redirectUri(codeChallenge[13]).NONE);
                    }
                    name = undefined;
                    if (name) {
                      name = disclosures;
                      AUTHORIZE_BOT_PERMISSIONS = disclosures.AUTHORIZE_BOT_PERMISSIONS;
                      name = AUTHORIZE_BOT_PERMISSIONS;
                    }
                    if (name) {
                      name = null == memo;
                    }
                    if (!name) {
                      if (name) {
                        name = null == first4;
                      }
                    }
                    if (!name) {
                      name = !first7;
                    }
                    flag6 = true;
                    items29 = name;
                    flag7 = true;
                    flag8 = true;
                  }
                }
              }
              const obj16 = {};
              name = callback;
              obj16.body = callback(Spinner, {});
              obj16.obscured = false;
              return obj16;
            } else {
              name = disclosures;
              flag6 = false;
              items29 = false;
              flag7 = true;
              flag8 = true;
              if (disclosures.AUTHORIZE_BOT_PERMISSIONS === first1) {
                if (null == first) {
                  const obj17 = {};
                  name = callback;
                  obj17.body = callback(Spinner, {});
                  obj17.obscured = false;
                  return obj17;
                } else {
                  name = callback;
                  name = responseType;
                  name = codeChallenge;
                  const obj18 = { application: first.application, permissions: memo4, deniedPermissions: first5, onPermissionsChange: tmp98, guild: memo };
                  name = callback(responseType(codeChallenge[50]), obj18);
                  flag6 = true;
                  items29 = false;
                  flag7 = true;
                  flag8 = true;
                }
              }
            }
          }
        }
        name = undefined;
        if (flag7) {
          name = disclosures;
          if (name !== disclosures.AUTHORIZE_BOT_PERMISSIONS) {
            if (null != first) {
              name = undefined;
              if (null != first) {
                name = first.application.approximate_guild_count;
              }
              if (null == name) {
                name = undefined;
                if (null != first) {
                  const bot = first.bot;
                  if (null != bot) {
                    name = bot.approximate_guild_count;
                  }
                }
              }
              name = responseType;
              name = codeChallenge;
              name = callback;
              const obj19 = { application: first.application, scopes: requestedScopes, disclosures: first11 };
              const redirect_uri = first.redirect_uri;
              name = null;
              name = responseType(codeChallenge[51]);
              if (null != redirect_uri) {
                name = redirect_uri;
              }
              obj19.redirectUri = name;
              name = null;
              obj19.approximateGuildCount = name;
              obj19.isEmbeddedFlow = flag3;
              obj19.connectedAccount = stateFromStores1;
              name = name(name, obj19);
            }
          }
        }
        if (flag8) {
          flag8 = null != first;
        }
        if (flag8) {
          flag8 = null != stateFromStores;
        }
        name = undefined;
        if (flag8) {
          name = callback;
          name = responseType;
          name = codeChallenge;
          const obj20 = { user: stateFromStores, application: first.application, accountScopes, bot: first.bot };
          name = callback(responseType(codeChallenge[52]), obj20);
        }
        name = items29;
        if (items29) {
          name = !first7;
        }
        const obj21 = { header: name, body: name };
        obj22 = {};
        name = disclosures;
        name = null;
        name = callback;
        name = first;
        if (first1 !== disclosures.SELECT_INSTALL_TYPE) {
          name = disclosures;
          name = null;
          if (first1 !== disclosures.CONNECT_ACCOUNT) {
            const obj23 = { accessibilityElementsHidden: name };
            let str5 = "auto";
            name = callback;
            name = _prompt;
            if (name) {
              str5 = "no-hide-descendants";
            }
            obj23.importantForAccessibility = str5;
            name = clientId;
            name = codeChallenge;
            name = callback;
            if (null != name) {
              const obj24 = { size: "lg" };
              name = clientId;
              name = codeChallenge;
              const intl2 = clientId(codeChallenge[38]).intl;
              const string = intl2.string;
              let BwwiSM2 = clientId(codeChallenge[38]).t;
              if (items29) {
                if (first7) {
                  BwwiSM2 = BwwiSM2.BwwiSM;
                  name = string(BwwiSM2);
                } else {
                  name = string(BwwiSM2.N22i9F);
                }
              } else {
                obj24.text = string(BwwiSM2["3PatSz"]);
                name = undefined;
                if (!first7) {
                  if (items29) {
                    name = callback;
                    name = responseType;
                    name = codeChallenge;
                    const obj25 = { style: animatedStyle };
                    const obj26 = {};
                    name = scopes;
                    const convert2 = scopes.convert;
                    name = dismissOAuthModal;
                    name = responseType(codeChallenge[53]);
                    obj26.name = convert2.fromCodePoint(dismissOAuthModal);
                    animatedStyle = callback(name, obj26);
                    obj25.children = animatedStyle;
                    name = callback(responseType(codeChallenge[num]).View, obj25);
                  }
                }
                obj24.icon = name;
                obj24.iconPosition = "end";
                obj24.onPress = function onPress() {
                  return callback2(AUTHORIZE_BOT_PERMISSIONS);
                };
                if (!items29) {
                  items29 = result;
                }
                obj24.disabled = items29;
                const obj27 = { name: "enable" };
                name = clientId;
                name = codeChallenge;
                const intl3 = clientId(codeChallenge[38]).intl;
                num = intl3.string;
                obj27.label = num(clientId(codeChallenge[38]).t.eIL75W);
                items29 = [obj27];
                obj24.accessibilityActions = items29;
                obj24.onAccessibilityAction = callback3;
                let obj28 = obj24;
              }
            } else {
              obj28 = { size: "lg" };
              name = clientId;
              name = codeChallenge;
              const intl5 = clientId(codeChallenge[38]).intl;
              const string2 = intl5.string;
              let BwwiSM = clientId(codeChallenge[38]).t;
              if (items29) {
                if (first7) {
                  BwwiSM = BwwiSM.BwwiSM;
                  name = string2(BwwiSM);
                } else {
                  name = string2(BwwiSM.N22i9F);
                }
              } else {
                obj28.text = string2(BwwiSM["y+/PE9"]);
                obj28.onPress = function onPress() {
                  callback6(true);
                };
                name = undefined;
                if (!first7) {
                  name = callback;
                  name = responseType;
                  name = codeChallenge;
                  const obj29 = { style: animatedStyle };
                  const obj30 = {};
                  name = scopes;
                  const convert = scopes.convert;
                  name = dismissOAuthModal;
                  name = responseType(codeChallenge[53]);
                  obj30.name = convert.fromCodePoint(dismissOAuthModal);
                  obj29.children = callback(name, obj30);
                  name = callback(responseType(codeChallenge[num]).View, obj29);
                }
                obj28.icon = name;
                obj28.iconPosition = "end";
                name = items29;
                if (!items29) {
                  name = result;
                }
                obj28.disabled = name;
                obj28.loading = tmp7[0];
                const obj31 = { name: "enable" };
                name = clientId;
                name = codeChallenge;
                const intl = clientId(codeChallenge[38]).intl;
                obj31.label = intl.string(clientId(codeChallenge[38]).t.eIL75W);
                const items30 = [obj31];
                obj28.accessibilityActions = items30;
                obj28.onAccessibilityAction = callback3;
              }
            }
            obj23.children = name(clientId(codeChallenge[37]).Button, obj28);
            name = name(name, obj23);
          }
        }
        obj22.children = name;
        obj21.footer = name(name, obj22);
        obj21.appDetails = name;
        obj21.backStep = tmp89;
        obj21.sendAuthorize = callback;
        obj21.goBackOrCancel = callback4;
        obj21.allContentSeen = first7;
        obj21.setAllContentSeen = tmp31;
        obj21.hasContentBackground = flag6;
        obj21.obscured = result;
        return obj21;
      }
    }
  }
  if (first1 === disclosures.AUTHORIZE_BOT_PERMISSIONS) {
    AUTHORIZE_SCOPES = disclosures.AUTHORIZE_SCOPES;
    tmp89 = AUTHORIZE_SCOPES;
  }
};
