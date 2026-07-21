// Module ID: 8944
// Function ID: 70458
// Name: useOAuth2AuthorizeForm
// Dependencies: []
// Exports: default

// Module 8944 (useOAuth2AuthorizeForm)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
({ EMOJI_POINTING_DOWN_CODE_POINT: closure_13, OAuth2Steps: closure_14 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
({ AnalyticEvents: closure_15, Endpoints: closure_16 } = arg1(dependencyMap[10]));
const tmp3 = arg1(dependencyMap[10]);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = arg1(dependencyMap[11]));
const tmp4 = arg1(dependencyMap[11]);
let closure_20 = arg1(dependencyMap[12]).createStyles({ loading: {} });
let closure_21 = { code: "function useOAuth2AuthorizeFormTsx1(){const{shouldReduceMotion,withSequence,withTiming,Easing,withRepeat}=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};}" };
const obj = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[54]).fileFinishedImporting("modules/oauth2/native/useOAuth2AuthorizeForm.tsx");

export default function useOAuth2AuthorizeForm(clientId) {
  let channelId;
  let guildId;
  let integrationType;
  clientId = clientId.clientId;
  const arg1 = clientId;
  const responseType = clientId.responseType;
  const importDefault = responseType;
  let redirectUri = clientId.redirectUri;
  let importAll = redirectUri;
  const codeChallenge = clientId.codeChallenge;
  const dependencyMap = codeChallenge;
  const codeChallengeMethod = clientId.codeChallengeMethod;
  let callback = codeChallengeMethod;
  const state = clientId.state;
  let callback2 = state;
  const nonce = clientId.nonce;
  const React = nonce;
  const _prompt = clientId.prompt;
  const View = _prompt;
  const scopes = clientId.scopes;
  let closure_8 = scopes;
  let permissions = clientId.permissions;
  let closure_9 = permissions;
  ({ guildId, channelId, integrationType } = clientId);
  let closure_10 = integrationType;
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
  callback = clientId.callback;
  let closure_11 = callback;
  const callbackWithoutPost = clientId.callbackWithoutPost;
  let closure_12 = callbackWithoutPost;
  const dismissOAuthModal = clientId.dismissOAuthModal;
  const disclosures = clientId.disclosures;
  const connectedAccountProvider = clientId.connectedAccountProvider;
  let flag5 = clientId.wasDeepLink;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let callback3;
  let first;
  let closure_19;
  let callback4;
  let closure_21;
  let first2;
  let closure_23;
  let closure_24;
  let guilds;
  let first3;
  let tmp13;
  let first4;
  let tmp18;
  let first5;
  let closure_31;
  let nsfwAllowed;
  let memo;
  let tmp25;
  let first6;
  let closure_36;
  let first7;
  let tmp31;
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
  let tmp69;
  let first12;
  let tmp72;
  callback = undefined;
  let callback1;
  let closure_56;
  let ref;
  callback2 = undefined;
  let memo5;
  let closure_60;
  let AUTHORIZE_SCOPES;
  callback4 = undefined;
  let AUTHORIZE_BOT_PERMISSIONS;
  class Spinner {
    constructor() {
      obj = { style: clientId.loading, children: clientId(clientId(codeChallenge[39]).ActivityIndicator, {}) };
      return clientId(prompt, obj);
    }
  }
  callback3 = callback4();
  let name = callback2(React.useState(null), 2);
  first = name[0];
  closure_19 = name[1];
  const tmp3 = callback2(React.useState(null), 2);
  const first1 = tmp3[0];
  callback4 = first1;
  closure_21 = tmp3[1];
  const tmp5 = callback2(React.useState(null), 2);
  first2 = tmp5[0];
  closure_23 = tmp5[1];
  const tmp7 = callback2(React.useState(false), 2);
  closure_24 = tmp7[1];
  guilds = undefined;
  if (null != first) {
    guilds = first.guilds;
  }
  let tmp10 = null;
  if (null != guildId) {
    tmp10 = guildId;
  }
  const tmp11 = callback2(React.useState(tmp10), 2);
  first3 = tmp11[0];
  tmp13 = tmp11[1];
  let tmp15 = null;
  if (null != channelId) {
    tmp15 = channelId;
  }
  const tmp16 = callback2(React.useState(tmp15), 2);
  first4 = tmp16[0];
  tmp18 = tmp16[1];
  const tmp19 = callback2(React.useState(importAll(dependencyMap[13]).NONE), 2);
  first5 = tmp19[0];
  closure_31 = tmp19[1];
  let obj = arg1(dependencyMap[14]);
  const items = [closure_12];
  const stateFromStores = obj.useStateFromStores(items, () => callbackWithoutPost.getCurrentUser());
  nsfwAllowed = undefined;
  if (null != stateFromStores) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items1 = [guilds, first3];
  memo = React.useMemo(() => {
    let found;
    if (null != guilds) {
      found = guilds.find((id) => id.id === closure_26);
    }
    return found;
  }, items1);
  let obj1 = arg1(dependencyMap[14]);
  const items2 = [closure_11];
  const items3 = [connectedAccountProvider];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let tmp = null;
    if (null != connectedAccountProvider) {
      const accounts = callback.getAccounts();
      const found = accounts.find((type) => type.type === closure_15);
      let tmp4 = null;
      if (null != found) {
        tmp4 = found;
      }
      tmp = tmp4;
    }
    return tmp;
  }, items3);
  tmp25 = null == connectedAccountProvider || null != stateFromStores1;
  const tmp27 = callback2(React.useState(null), 2);
  first6 = tmp27[0];
  closure_36 = tmp27[1];
  const tmp29 = callback2(React.useState(false), 2);
  first7 = tmp29[0];
  tmp31 = tmp29[1];
  let obj2 = arg1(dependencyMap[14]);
  const items4 = [closure_9];
  stateFromStores2 = obj2.useStateFromStores(items4, () => permissions.useReducedMotion);
  let obj3 = arg1(dependencyMap[15]);
  isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
  let num = 16;
  let obj4 = arg1(dependencyMap[16]);
  class X {
    constructor() {
      if (closure_39) {
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
  obj = { shouldReduceMotion: stateFromStores2, withSequence: arg1(dependencyMap[16]).withSequence, withTiming: arg1(dependencyMap[17]).withTiming, Easing: arg1(dependencyMap[16]).Easing, withRepeat: arg1(dependencyMap[16]).withRepeat };
  X.__closure = obj;
  X.__workletHash = 1476082137097;
  X.__initData = closure_21;
  let animatedStyle = obj4.useAnimatedStyle(X);
  let length;
  if (null != scopes) {
    length = scopes.length;
  }
  const items5 = [length, redirectUri, integrationType];
  memo1 = React.useMemo(() => {
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
      tmp = null == text;
    }
    return tmp;
  }, items5);
  const tmp38 = callback2(React.useState(null), 2);
  first8 = tmp38[0];
  closure_43 = tmp38[1];
  const items6 = [clientId, memo1];
  const effect = React.useEffect(() => {
    if (memo1) {
      const application = responseType(codeChallenge[18]).fetchApplication(clientId);
      application.then((arg0) => callback(closure_10.createFromServer(arg0)));
      const obj = responseType(codeChallenge[18]);
    }
  }, items6);
  let prop;
  if (null != first8) {
    prop = first8.integrationTypesConfig;
  }
  const items7 = [prop, first6];
  memo2 = React.useMemo(() => {
    let tmp = null;
    if (null != first6) {
      let oauth2InstallParams;
      if (null != first8) {
        const integrationTypesConfig = first8.integrationTypesConfig;
        if (null != integrationTypesConfig) {
          if (null != integrationTypesConfig[closure_35]) {
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
  const memo3 = React.useMemo(() => {
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
    const clientId = filterScopesResult;
    const OrderedAccountScopes = clientId(codeChallenge[20]).OrderedAccountScopes;
    obj = { requestedScopes: filterScopesResult, accountScopes: OrderedAccountScopes.filter((arg0) => filterScopesResult.includes(arg0)) };
    return obj;
  }, items8);
  requestedScopes = memo3.requestedScopes;
  const accountScopes = memo3.accountScopes;
  permissions = undefined;
  if (null != memo2) {
    permissions = memo2.permissions;
  }
  const items9 = [permissions, permissions, memo1];
  memo4 = React.useMemo(() => {
    if (memo1) {
      let permissions;
      if (null != memo2) {
        permissions = memo2.permissions;
      }
      let num2 = 0;
      if (null != permissions) {
        num2 = permissions;
      }
      let NONE = text(codeChallenge[21]).deserialize(num2);
      const obj = text(codeChallenge[21]);
    } else {
      NONE = permissions;
    }
    if (null == NONE) {
      NONE = text(codeChallenge[13]).NONE;
    }
    return NONE;
  }, items9);
  const tmp49 = callback2(React.useState(false), 2);
  first9 = tmp49[0];
  closure_48 = tmp49[1];
  const items10 = [clientId];
  const effect1 = React.useEffect(() => {
    const obj = responseType(codeChallenge[22]);
    responseType(codeChallenge[22]).checkIfOAuthRequest(clientId).then(closure_48);
  }, items10);
  const first10 = callback2(React.useState(null), 2)[0];
  let tmp55 = state;
  if (first9) {
    let obj6 = arg1(dependencyMap[23]);
    const text = `${obj7.getAPIBaseURL(false)}/v6${closure_16.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK}`;
    importAll = text;
    if (tmp60) {
      let obj7 = arg1(dependencyMap[24]);
      tmp54(obj7.v4());
    }
    let tmp64 = state;
    if (null != first10) {
      let text1 = state;
      if (null == state) {
        text1 = `SA${tmp53}`;
      }
      callback2 = text1;
      tmp64 = text1;
    }
    tmp55 = tmp64;
    redirectUri = text;
    const tmp60 = null == state && null == first10;
  }
  closure_49 = React.useRef(false);
  let items11 = disclosures;
  if (null == disclosures) {
    items11 = [];
  }
  const tmp67 = callback2(React.useState(items11), 2);
  first11 = tmp67[0];
  tmp69 = tmp67[1];
  const tmp70 = callback2(React.useState(null != disclosures), 2);
  first12 = tmp70[0];
  tmp72 = tmp70[1];
  const items12 = [clientId, disclosures, tmp69, tmp72];
  const effect2 = React.useEffect(() => {
    function _doGetDisclosures() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _doGetDisclosures = obj;
      return obj(...arguments);
    }
    if (!ref.current) {
      if (null == disclosures) {
        function doGetDisclosures() {
          return _doGetDisclosures(...arguments);
        }();
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
  let obj8 = arg1(dependencyMap[26]);
  const result = obj8.isContentClassificationRestricted(prop1, nsfwAllowed);
  const items13 = [first6, callbackWithoutPost, clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp55, nonce, memo4, first5, first3, first4, first11, dismissOAuthModal, callback, flag5, , , ];
  let application;
  const tmp52 = callback2(React.useState(null), 2);
  if (null != first) {
    application = first.application;
  }
  items13[18] = application;
  items13[19] = memo;
  items13[20] = connectedAccountProvider;
  callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = codeChallengeMethod(tmp);
    return function(arg0) {
      return callback(...arguments);
    };
  }(), items13);
  const items14 = [callback];
  callback1 = React.useCallback((arg0) => {
    const clientId = arg0;
    return new Promise((arg0) => callback({
      isAuthorized: arg0,
      overrideSuccessCallback(location) {
        location(location);
      }
    }));
  }, items14);
  const items15 = [clientId, first9, responseType, callback, callback1, tmp55, dismissOAuthModal, requestedScopes];
  closure_56 = React.useCallback((isAuthorized) => {
    const clientId = isAuthorized;
    if (first9) {
      const result = responseType(codeChallenge[22]).showConnectionDisclaimer();
      const obj2 = responseType(codeChallenge[22]);
      const nextPromise = result.then(() => callback(closure_3[22]).getAccountUrlAndAuthCode());
      const nextPromise1 = result.then(() => callback(closure_3[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, arg0(closure_3[27]).startSamsungAuthorization(arg0, closure_45, closure_1, tmp, closure_5)];
        return Promise.all(items);
      });
      const nextPromise2 = result.then(() => callback(closure_3[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, arg0(closure_3[27]).startSamsungAuthorization(arg0, closure_45, closure_1, tmp, closure_5)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, callback3(arg0)];
        return Promise.all(items);
      });
      const nextPromise3 = result.then(() => callback(closure_3[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, arg0(closure_3[27]).startSamsungAuthorization(arg0, closure_45, closure_1, tmp, closure_5)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, callback3(arg0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return callback(closure_3[22]).finishSamsungAuthorization(tmp, tmp2, closure_5);
      });
      result.then(() => callback(closure_3[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, arg0(closure_3[27]).startSamsungAuthorization(arg0, closure_45, closure_1, tmp, closure_5)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, callback3(arg0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return callback(closure_3[22]).finishSamsungAuthorization(tmp, tmp2, closure_5);
      }).then(() => {
        let tmp;
        if (null != callback2) {
          tmp = callback2();
        }
        return tmp;
      }).catch((arg0) => {
        callback(closure_3[30]).captureException(arg0);
      });
      const nextPromise4 = result.then(() => callback(closure_3[22]).getAccountUrlAndAuthCode()).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        const items = [tmp2, arg0(closure_3[27]).startSamsungAuthorization(arg0, closure_45, closure_1, tmp, closure_5)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        [tmp, ] = arg0;
        const items = [tmp, callback3(arg0)];
        return Promise.all(items);
      }).then((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return callback(closure_3[22]).finishSamsungAuthorization(tmp, tmp2, closure_5);
      }).then(() => {
        let tmp;
        if (null != callback2) {
          tmp = callback2();
        }
        return tmp;
      });
    } else {
      const obj = { isAuthorized };
      callback(obj);
    }
  }, items15);
  ref = React.useRef(false);
  // CreateGeneratorClosureLongIndex (0x67)
  const items16 = [clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp55, first6, connectedAccountProvider, _prompt, callback, first12, nsfwAllowed];
  callback2 = React.useCallback(callback(ref), items16);
  const items17 = [first8, memo1];
  memo5 = React.useMemo(() => {
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
  closure_60 = React.useRef(null);
  const items18 = [clientId, first6, memo4, requestedScopes, first1];
  const effect3 = React.useEffect(() => {
    if (first1 !== ref2.current) {
      ref2.current = first1;
      let obj = clientId(codeChallenge[33]);
      obj = { step: first1, application_id: clientId, integration_type: first6, scopes: requestedScopes, permissions: memo4.toString() };
      obj.trackWithMetadata(connectedAccountProvider.OAUTH2_AUTHORIZE_STEP_VIEWED, obj);
    }
  }, items18);
  const items19 = [memo5, first8, memo1, integrationType, first1, connectedAccountProvider, tmp25];
  const effect4 = React.useEffect(() => {
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
        if (!tmp25) {
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
  const items20 = [first1, tmp25, integrationType];
  const effect5 = React.useEffect(() => {
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
  const effect6 = React.useEffect(() => {
    if (null != first6) {
      if (null == first) {
        if (null == first2) {
          if (first6 === clientId(codeChallenge[28]).ApplicationIntegrationType.USER_INSTALL) {
            tmp13(null);
            tmp18(null);
          }
          const found = requestedScopes.filter((arg0) => {
            const ValidScopes = callback(closure_3[20]).ValidScopes;
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
              const tmp18 = callback3(error2);
            } else {
              callback2();
            }
            const obj = clientId(codeChallenge[34]);
          }
        }
      }
    }
  }, items21);
  const items22 = [isScreenReaderEnabled, first7];
  callback3 = React.useCallback(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = !first7;
    }
    if (tmp) {
      tmp31(true);
    }
  }, items22);
  if (first1 === disclosures.AUTHORIZE_SCOPES) {
    if (memo5.length > 1) {
      const SELECT_INSTALL_TYPE = disclosures.SELECT_INSTALL_TYPE;
      AUTHORIZE_SCOPES = SELECT_INSTALL_TYPE;
      let tmp89 = SELECT_INSTALL_TYPE;
    }
    const items23 = [tmp89, dismissOAuthModal, callback];
    callback4 = React.useCallback(() => {
      if (null != AUTHORIZE_SCOPES) {
        callback2(AUTHORIZE_SCOPES);
      } else {
        callback({ paddingBottom: null, type: null });
        if (null != dismissOAuthModal) {
          dismissOAuthModal();
        }
      }
      return true;
    }, items23);
    importDefault(dependencyMap[35])(callback4, flag4);
    const callback5 = React.useCallback((arg0) => {
      callback5(arg0);
      callback(null);
      callback2(disclosures.AUTHORIZE_SCOPES);
    }, []);
    const _Error = Error;
    if (first2 instanceof Error) {
      obj = {};
      name = callback3;
      name = importDefault;
      name = dependencyMap;
      obj1 = { error: first2.message, hideFooter: true };
      obj.body = callback3(importDefault(dependencyMap[36]), obj1);
      obj.goBackOrCancel = callback4;
      name = arg1;
      obj2 = { size: "lg" };
      const intl4 = arg1(dependencyMap[38]).intl;
      obj2.text = intl4.string(arg1(dependencyMap[38]).t.cpT0Cq);
      obj2.onPress = function onPress() {
        return callback4();
      };
      obj.footer = callback3(arg1(dependencyMap[37]).Button, obj2);
      obj.obscured = false;
      return obj;
    } else {
      let str4 = "";
      if (null != connectedAccountProvider) {
        name = importDefault;
        name = dependencyMap;
        let obj9 = importDefault(dependencyMap[40]);
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
        name = callback3;
        obj3.body = callback3(Spinner, {});
        obj3.obscured = false;
        return obj3;
      } else {
        name = disclosures;
        if (disclosures.CONNECT_ACCOUNT === first1) {
          name = callback3;
          name = importDefault;
          name = dependencyMap;
          obj4 = { clientId, platformType: connectedAccountProvider, platformName: str4 };
          name = callback3(importDefault(dependencyMap[41]), obj4);
          let flag6 = true;
          let items29 = false;
          let flag7 = false;
          let flag8 = false;
        } else {
          name = disclosures;
          if (disclosures.SELECT_INSTALL_TYPE === first1) {
            if (null == first8) {
              const obj5 = {};
              name = callback3;
              obj5.body = callback3(Spinner, {});
              obj5.obscured = false;
              return obj5;
            } else {
              name = callback3;
              name = importDefault;
              name = dependencyMap;
              obj6 = { application: first8, onSelect: callback5 };
              name = callback3(importDefault(dependencyMap[42]), obj6);
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
                      const _Error2 = Error;
                      obj7 = first2;
                    }
                    if (null != guilds) {
                      let sorted = guilds.sort((name, name2) => {
                        const formatted = name.name.toLowerCase();
                        return formatted.localeCompare(name2.name.toLowerCase());
                      });
                    }
                    name = arg1;
                    name = dependencyMap;
                    name = first6 === arg1(dependencyMap[28]).ApplicationIntegrationType.GUILD_INSTALL;
                    if (name) {
                      name = arg1;
                      name = dependencyMap;
                      name = requestedScopes.includes(arg1(dependencyMap[43]).OAuth2Scopes.WEBHOOK_INCOMING);
                    }
                    if (!name) {
                      name = arg1;
                      name = dependencyMap;
                      name = first6 === arg1(dependencyMap[28]).ApplicationIntegrationType.GUILD_INSTALL;
                      if (name) {
                        name = arg1;
                        name = dependencyMap;
                        name = requestedScopes.includes(arg1(dependencyMap[43]).OAuth2Scopes.BOT);
                        if (!name) {
                          name = arg1;
                          name = dependencyMap;
                          name = requestedScopes.includes(arg1(dependencyMap[43]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                        }
                      }
                    }
                    name = arg1;
                    name = dependencyMap;
                    let obj13 = arg1(dependencyMap[44]);
                    obj8 = {};
                    name = null;
                    name = obj13.getIsSocialLayerParentApplication(first.application);
                    name = closure_19;
                    name = first;
                    if (null != stateFromStores1) {
                      name = null;
                      if (tmp25) {
                        name = callback3;
                        name = arg1;
                        name = dependencyMap;
                        obj9 = { platformType: stateFromStores1.type, platformName: str4, connectedAccount: stateFromStores1, applicationName: first.application.name };
                        name = callback3(arg1(dependencyMap[41]).ConnectedAccountCard, obj9);
                      }
                    }
                    const items24 = [name, , , , ];
                    name = importDefault;
                    name = dependencyMap;
                    name = callback3;
                    const obj10 = { application: first.application, accountScopes };
                    items24[1] = callback3(importDefault(dependencyMap[45]), obj10);
                    const obj11 = { application: first.application, accountScopes, requestedScopes, integrationType: first6, errors: obj7 };
                    name = importDefault(dependencyMap[46]);
                    if (!flag2) {
                      flag2 = name;
                    }
                    obj11.isTrustedName = flag2;
                    items24[2] = name(name, obj11);
                    name = null;
                    if (name) {
                      const obj12 = {};
                      name = arg1;
                      name = dependencyMap;
                      name = closure_19;
                      name = first;
                      name = callback3;
                      const items25 = [callback3(arg1(dependencyMap[47]).AuthorizeFormSeparator, {}), ];
                      name = importDefault;
                      obj13 = {};
                      name = importDefault(dependencyMap[48]);
                      let items26 = obj7[closure_0(undefined, closure_3[43]).OAuth2Scopes.BOT];
                      if (null == items26) {
                        name = arg1;
                        name = dependencyMap;
                        items26 = obj7[closure_0(undefined, closure_3[43]).OAuth2Scopes.APPLICATIONS_COMMANDS];
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
                      name = arg1;
                      name = dependencyMap;
                      name = closure_19;
                      name = first;
                      name = callback3;
                      const items27 = [callback3(arg1(dependencyMap[47]).AuthorizeFormSeparator, {}), ];
                      name = importDefault;
                      const obj15 = {};
                      name = importDefault(dependencyMap[49]);
                      let items28 = obj7[closure_0(undefined, closure_3[43]).OAuth2Scopes.WEBHOOK_INCOMING];
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
                    name = arg1;
                    name = dependencyMap;
                    name = name(name, obj8);
                    name = requestedScopes.includes(arg1(dependencyMap[43]).OAuth2Scopes.BOT);
                    if (name) {
                      name = importAll;
                      name = dependencyMap;
                      let obj22 = importAll(dependencyMap[21]);
                      name = !obj22.equals(memo4, importAll(dependencyMap[13]).NONE);
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
              name = callback3;
              obj16.body = callback3(Spinner, {});
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
                  name = callback3;
                  obj17.body = callback3(Spinner, {});
                  obj17.obscured = false;
                  return obj17;
                } else {
                  name = callback3;
                  name = importDefault;
                  name = dependencyMap;
                  const obj18 = { application: first.application, permissions: memo4, deniedPermissions: first5, onPermissionsChange: tmp98, guild: memo };
                  name = callback3(importDefault(dependencyMap[50]), obj18);
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
              name = importDefault;
              name = dependencyMap;
              name = callback3;
              const obj19 = { application: first.application, scopes: requestedScopes, disclosures: first11 };
              const redirect_uri = first.redirect_uri;
              name = null;
              name = importDefault(dependencyMap[51]);
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
          name = callback3;
          name = importDefault;
          name = dependencyMap;
          const obj20 = { user: stateFromStores, application: first.application, accountScopes, bot: first.bot };
          name = callback3(importDefault(dependencyMap[52]), obj20);
        }
        name = items29;
        if (items29) {
          name = !first7;
        }
        const obj21 = { header: name, body: name };
        obj22 = {};
        name = disclosures;
        name = null;
        name = callback3;
        name = first;
        if (first1 !== disclosures.SELECT_INSTALL_TYPE) {
          name = disclosures;
          name = null;
          if (first1 !== disclosures.CONNECT_ACCOUNT) {
            const obj23 = { accessibilityElementsHidden: name };
            let str5 = "auto";
            name = callback3;
            name = View;
            if (name) {
              str5 = "no-hide-descendants";
            }
            obj23.importantForAccessibility = str5;
            name = arg1;
            name = dependencyMap;
            name = callback3;
            if (null != name) {
              const obj24 = { size: "lg" };
              name = arg1;
              name = dependencyMap;
              const intl2 = arg1(dependencyMap[38]).intl;
              const string = intl2.string;
              let BwwiSM2 = arg1(dependencyMap[38]).t;
              if (items29) {
                if (first7) {
                  BwwiSM2 = BwwiSM2.BwwiSM;
                  name = string(BwwiSM2);
                } else {
                  name = string(BwwiSM2.N22i9F);
                }
              } else {
                obj24.text = string(BwwiSM2.3PatSz);
                name = undefined;
                if (!first7) {
                  if (items29) {
                    name = callback3;
                    name = importDefault;
                    name = dependencyMap;
                    const obj25 = { style: animatedStyle };
                    const obj26 = {};
                    name = closure_8;
                    const convert2 = closure_8.convert;
                    name = dismissOAuthModal;
                    name = importDefault(dependencyMap[53]);
                    obj26.name = convert2.fromCodePoint(dismissOAuthModal);
                    animatedStyle = callback3(name, obj26);
                    obj25.children = animatedStyle;
                    name = callback3(importDefault(dependencyMap[num]).View, obj25);
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
                name = arg1;
                name = dependencyMap;
                const intl3 = arg1(dependencyMap[38]).intl;
                num = intl3.string;
                obj27.label = num(arg1(dependencyMap[38]).t.eIL75W);
                items29 = [obj27];
                obj24.accessibilityActions = items29;
                obj24.onAccessibilityAction = callback3;
                let obj28 = obj24;
              }
            } else {
              obj28 = { size: "lg" };
              name = arg1;
              name = dependencyMap;
              const intl5 = arg1(dependencyMap[38]).intl;
              const string2 = intl5.string;
              let BwwiSM = arg1(dependencyMap[38]).t;
              if (items29) {
                if (first7) {
                  BwwiSM = BwwiSM.BwwiSM;
                  name = string2(BwwiSM);
                } else {
                  name = string2(BwwiSM.N22i9F);
                }
              } else {
                obj28.text = string2(BwwiSM.y+/PE9);
                obj28.onPress = function onPress() {
                  callback6(true);
                };
                name = undefined;
                if (!first7) {
                  name = callback3;
                  name = importDefault;
                  name = dependencyMap;
                  const obj29 = { style: animatedStyle };
                  const obj30 = {};
                  name = closure_8;
                  const convert = closure_8.convert;
                  name = dismissOAuthModal;
                  name = importDefault(dependencyMap[53]);
                  obj30.name = convert.fromCodePoint(dismissOAuthModal);
                  obj29.children = callback3(name, obj30);
                  name = callback3(importDefault(dependencyMap[num]).View, obj29);
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
                name = arg1;
                name = dependencyMap;
                const intl = arg1(dependencyMap[38]).intl;
                obj31.label = intl.string(arg1(dependencyMap[38]).t.eIL75W);
                const items30 = [obj31];
                obj28.accessibilityActions = items30;
                obj28.onAccessibilityAction = callback3;
              }
            }
            obj23.children = name(arg1(dependencyMap[37]).Button, obj28);
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
