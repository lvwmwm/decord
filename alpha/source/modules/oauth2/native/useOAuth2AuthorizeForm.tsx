// Module ID: 9830
// Function ID: 9831
// Name: useOAuth2AuthorizeForm
// Dependencies: [5, 32, 19, 17, 5087, 5141, 2140, 6627, 1385, 9831, 1072, 21, 5140, 5077, 504, 5390, 1652, 5370, 6936, 9832, 9833, 1084, 9834, 1282, 1266, 9835, 9837, 9839, 5775, 7393, 1242, 9840, 9841, 5889, 9842, 6154, 9843, 5758, 1113, 7015, 6629, 9845, 9847, 8984, 9838, 14847, 14851, 14850, 14852, 14853, 14854, 14856, 14859, 7363, 2]
// Exports: default

// Module 9830 (useOAuth2AuthorizeForm)
import react_native from "react-native" /* 17 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import PermissionUtilsAll from "PermissionUtils" /* 5077 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 5775 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5889 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6936 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 7015 */;
import Authorize from "Authorize" /* 9832 */;
import react_nativeDefault from "react-native" /* 9834 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import module_5087 from "module_5087" /* 5087 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import ApplicationRecord from "ApplicationRecord" /* 2140 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6627 */;
import UserStore from "UserStore" /* 1385 */;
import Constants_mod from "Constants" /* 9831 */;
import Constants_mod2 from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let _require, c5, c6, isAuthorized;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
let tmp4;
const scopes2 = tmp4(9833);
let View = react_native.View;
let Constants = Constants_mod2;
({ EMOJI_POINTING_DOWN_CODE_POINT: map1, OAuth2Steps: closure_14 } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: closure_15, Endpoints: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
let closure_20 = createStyles.createStyles({ loading: { flex: 1, alignSelf: "center", justifyContent: "center" } });
let closure_21 = { code: "(function useOAuth2AuthorizeFormTsx1(){let[shouldReduceMotion,withSequence,withTiming,Easing,withRepeat]=this.__closure;const TOTAL=500;if(shouldReduceMotion)return{};return{transform:[{translateY:withSequence(withTiming(-5,{duration:TOTAL/2,easing:Easing.inOut(Easing.quad)}),withRepeat(withTiming(5,{duration:TOTAL,easing:Easing.inOut(Easing.quad)}),-1,true))}]};})" };
let result = size.fileFinishedImporting("modules/oauth2/native/useOAuth2AuthorizeForm.tsx");

export default function useOAuth2AuthorizeForm(clientId) {
  let Button;
  let Button2;
  let channelId;
  let guildId;
  let hasItem;
  let integrationType;
  let intl;
  let intl2;
  let intl3;
  let items28;
  let items30;
  let items31;
  let items32;
  let obj30;
  let obj4;
  let obj5;
  let obj6;
  let redirect_uri;
  let str6;
  let tmp112;
  let tmp128;
  let tmp132Result;
  let tmp132Result3;
  let tmp133;
  let tmp138;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp87;
  let tmp89Result11;
  let tmp89Result12;
  clientId = clientId.clientId;
  let responseType = clientId.responseType;
  let redirectUri = clientId.redirectUri;
  let codeChallenge = clientId.codeChallenge;
  let codeChallengeMethod = clientId.codeChallengeMethod;
  let state = clientId.state;
  let nonce = clientId.nonce;
  const _prompt = clientId.prompt;
  let scopes = clientId.scopes;
  const permissions = clientId.permissions;
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
  const callback = clientId.callback;
  const callbackWithoutPost = clientId.callbackWithoutPost;
  const dismissOAuthModal = clientId.dismissOAuthModal;
  let disclosures = clientId.disclosures;
  const connectedAccountProvider = clientId.connectedAccountProvider;
  let flag5 = clientId.wasDeepLink;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let first1;
  let first4;
  let closure_27;
  let first5;
  let closure_29;
  let first6;
  let closure_31;
  let nsfwAllowed;
  let memo;
  let closure_34;
  let first7;
  let closure_36;
  let first8;
  let closure_38;
  let isScreenReaderEnabled;
  let memo1;
  let first9;
  let closure_42;
  let memo2;
  let requestedScopes;
  let memo4;
  let first10;
  let closure_47;
  let ref;
  let first12;
  let closure_50;
  let first13;
  let closure_52;
  let callback1;
  let callback2;
  let closure_55;
  let closure_56;
  let callback3;
  let memo5;
  let ref2;
  let AUTHORIZE_SCOPES;
  let callback5;
  let AUTHORIZE_BOT_PERMISSIONS;
  const loading = first1();
  let obj = nonce;
  let tmp = state;
  let tmp2 = state(nonce.useState(null), 2);
  const first = tmp2[0];
  let closure_19 = tmp2[1];
  let tmp4 = state(nonce.useState(null), 2);
  first1 = tmp4[0];
  closure_21 = tmp4[1];
  const tmp6 = state(nonce.useState(null), 2);
  const first2 = tmp6[0];
  let closure_23 = tmp6[1];
  const tmp8 = state(nonce.useState(false), 2);
  let closure_24 = tmp8[1];
  let guilds;
  const first3 = tmp8[0];
  if (first != null) {
    guilds = first.guilds;
  }
  const useState = obj.useState;
  if (guildId == null) {
    guildId = null;
  }
  const tmpResult = tmp(useState(guildId), 2);
  first4 = tmpResult[0];
  closure_27 = tmp13;
  const useState2 = obj.useState;
  if (channelId == null) {
    channelId = null;
  }
  const tmpResult10 = tmp(useState2(channelId), 2);
  first5 = tmpResult10[0];
  closure_29 = tmp16;
  const tmp18 = codeChallenge;
  const tmpResult11 = tmp(obj.useState(redirectUri(codeChallenge[13]).NONE), 2);
  first6 = tmpResult11[0];
  closure_31 = tmpResult11[1];
  let tmp21 = clientId;
  let obj2 = clientId(codeChallenge[14]);
  let items = [callbackWithoutPost];
  const stateFromStores = obj2.useStateFromStores(items, () => callbackWithoutPost.getCurrentUser());
  nsfwAllowed = undefined;
  if (stateFromStores != null) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items1 = [guilds, first4];
  memo = obj.useMemo(() => {
    let found;
    const arr = guilds;
    if (guilds != null) {
      found = arr.find((id) => id.id === first4);
    }
    return found;
  }, items1);
  const items2 = [callback];
  const items3 = [connectedAccountProvider];
  const tmp21Result = tmp21(tmp18[14]);
  const stateFromStores1 = tmp21Result.useStateFromStores(items2, () => {
    let tmp = null;
    if (null != connectedAccountProvider) {
      const accounts = ConnectedAccountsStore.getAccounts();
      let found = accounts.find((type) => type.type === connectedAccountProvider);
      if (found == null) {
        found = null;
      }
      tmp = found;
    }
    return tmp;
  }, items3);
  let tmp26 = null == connectedAccountProvider || null != stateFromStores1;
  closure_34 = tmp26;
  const tmpResult12 = tmp(obj.useState(null), 2);
  first7 = tmpResult12[0];
  closure_36 = tmpResult12[1];
  const tmpResult13 = tmp(obj.useState(false), 2);
  first8 = tmpResult13[0];
  closure_38 = tmp31;
  const items4 = [permissions];
  const tmp21Result8 = tmp21(tmp18[14]);
  const stateFromStores2 = tmp21Result8.useStateFromStores(items4, () => permissions.useReducedMotion);
  const tmp21Result9 = tmp21(tmp18[15]);
  isScreenReaderEnabled = tmp21Result9.useIsScreenReaderEnabled();
  const items5 = [closure_21, stateFromStores2, , , , ];
  const useAnimatedStyle = tmp21(tmp18[16]).useAnimatedStyle;
  tmp21(tmp18[16]);
  items5[2] = tmp21(tmp18[16]).withSequence;
  items5[3] = tmp21(tmp18[17]).withTiming;
  items5[4] = tmp21(tmp18[16]).Easing;
  items5[5] = tmp21(tmp18[16]).withRepeat;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40] = items5;
  function useOAuth2AuthorizeFormTsx1() {
    let items;
    let obj;
    let obj4;
    let tmp5;
    const tmp = c0;
    if (tmp) {
      obj = {};
    } else {
      obj = { transform: items };
      const obj2 = { translateY: _undefined(tmp5, _undefined4(_undefined2(5, obj4), -1, true)) };
      const obj3 = { duration: 250, easing: _undefined3.inOut(_undefined3.quad) };
      obj4 = { duration: 500, easing: _undefined3.inOut(_undefined3.quad) };
      items = [obj2];
      tmp5 = _undefined2(-5, obj3);
    }
    return obj;
  }
  const items6 = [tmp36, tmp37, tmp38, tmp39, tmp40];
  useOAuth2AuthorizeFormTsx1.__closure = items6;
  useOAuth2AuthorizeFormTsx1.__workletHash = 9714380430000;
  useOAuth2AuthorizeFormTsx1.__initData = tmp35;
  const animatedStyle = useAnimatedStyle(useOAuth2AuthorizeFormTsx1);
  let length;
  const useMemo = obj.useMemo;
  if (scopes != null) {
    length = scopes.length;
  }
  const items7 = [length, redirectUri, integrationType];
  memo1 = useMemo(() => {
    let tmp = null == integrationType;
    if (tmp) {
      let num;
      if (scopes != null) {
        num = scopes.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp = 0 === num;
    }
    if (tmp) {
      tmp = null == redirectUri;
    }
    return tmp;
  }, items7);
  const tmpResult14 = tmp(obj.useState(null), 2);
  first9 = tmpResult14[0];
  closure_42 = tmpResult14[1];
  const items8 = [clientId, memo1];
  const effect = obj.useEffect(() => {
    const tmp = memo1;
    if (tmp) {
      const obj = ApplicationActionCreatorsDefault;
      const application = obj.fetchApplication(clientId);
      application.then((result) => closure_1_42(integrationType.createFromServer(result)));
    }
  }, items8);
  let prop;
  const useMemo2 = obj.useMemo;
  if (first9 != null) {
    prop = first9.integrationTypesConfig;
  }
  const items9 = [prop, first7];
  memo2 = useMemo2(() => {
    let tmp2 = null;
    if (null != first7) {
      let oauth2InstallParams;
      if (first9 != null) {
        const integrationTypesConfig = first9.integrationTypesConfig;
        if (integrationTypesConfig != null) {
          if (integrationTypesConfig[tmp] != null) {
            oauth2InstallParams = tmp4.oauth2InstallParams;
          }
        }
      }
      tmp2 = oauth2InstallParams;
    }
    return tmp2;
  }, items9);
  let scopes1;
  const useMemo3 = obj.useMemo;
  if (memo2 != null) {
    scopes1 = memo2.scopes;
  }
  const items10 = [scopes1, scopes, memo1];
  const memo3 = useMemo3(() => {
    let items;
    const tmp = memo1;
    if (tmp) {
      scopes = undefined;
      if (memo2 != null) {
        scopes = memo2.scopes;
      }
      items = scopes;
    } else {
      items = scopes;
    }
    const filterScopes = Authorize.filterScopes;
    Authorize;
    if (items == null) {
      items = [];
    }
    const filterScopesResult = filterScopes(items);
    const OrderedAccountScopes = scopes2.OrderedAccountScopes;
    const obj = { requestedScopes: filterScopesResult, accountScopes: OrderedAccountScopes.filter((item) => filterScopesResult.includes(item)) };
    return obj;
  }, items10);
  requestedScopes = memo3.requestedScopes;
  const accountScopes = memo3.accountScopes;
  let permissions1;
  const useMemo4 = obj.useMemo;
  if (memo2 != null) {
    permissions1 = memo2.permissions;
  }
  const items11 = [permissions1, permissions, memo1];
  memo4 = useMemo4(() => {
    let NONE;
    const tmp = memo1;
    if (tmp) {
      let num;
      const deserialize = BigFlagUtilsAll.deserialize;
      BigFlagUtilsAll;
      if (memo2 != null) {
        num = memo2.permissions;
      }
      if (num == null) {
        num = 0;
      }
      NONE = deserialize(num);
    } else {
      NONE = permissions;
    }
    if (NONE == null) {
      NONE = PermissionUtilsAll.NONE;
    }
    return NONE;
  }, items11);
  const tmpResult15 = tmp(obj.useState(false), 2);
  first10 = tmpResult15[0];
  closure_47 = tmpResult15[1];
  const items12 = [clientId];
  const effect1 = obj.useEffect(() => {
    const obj = react_nativeDefault;
    const checkIfOAuthRequestResult = obj.checkIfOAuthRequest(clientId);
    checkIfOAuthRequestResult.then(closure_47);
  }, items12);
  const first11 = tmp(obj.useState(null), 2)[0];
  let tmp59 = state;
  tmp(obj.useState(null), 2);
  if (first10) {
    tmp21(tmp18[23]);
    let str = "/v6";
    const text = `${obj6.getAPIBaseURL(false)}/v6${flag5.OAUTH2_AUTHORIZE_SAMSUNG_CALLBACK}`;
    redirectUri = text;
    const tmp62 = null == state && null == first11;
    if (tmp62) {
      const tmp21Result12 = tmp21(tmp18[24]);
      tmp58(tmp21Result12.v4());
    }
    let tmp64 = state;
    if (null != first11) {
      let text1 = state;
      if (state == null) {
        let str2 = "SA";
        text1 = `SA${tmp57}`;
      }
      state = text1;
      tmp64 = text1;
    }
    tmp59 = tmp64;
    redirectUri = text;
  }
  ref = obj.useRef(false);
  let items13 = disclosures;
  const useState3 = obj.useState;
  if (disclosures == null) {
    items13 = [];
  }
  const tmpResult17 = tmp(useState3(items13), 2);
  first12 = tmpResult17[0];
  closure_50 = tmp68;
  const tmpResult18 = tmp(obj.useState(null != disclosures), 2);
  first13 = tmpResult18[0];
  closure_52 = tmp71;
  const items14 = [clientId, disclosures, tmp68, tmp71];
  const effect2 = obj.useEffect(() => {
    function doGetDisclosures() {
      return obj(...arguments);
    }
    let obj = function _doGetDisclosures() {
      obj = _asyncToGenerator(async function(arg0, value) {
        let obj2;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          let c3;
          let body;
          try {
            let closure_0;
            let allAcked;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                disclosures = undefined;
                allAcked = undefined;
                body = undefined;
                closure_1_48.current = true;
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj5 = { value: obj2.getDisclosures(closure_0), done: false };
                obj2 = closure_2_0(codeChallenge[25]);
                return obj5;
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_1_48.current = false;
              throw body;
            } else {
              if (2 === c4) {
                let message;
                c3 = 1;
                body = body.body;
                const _Error = Error;
                const tmp21 = closure_1_23;
                if (null != body.message) {
                  message = body.message;
                } else {
                  const _Object = Object;
                  const _Object2 = Object;
                  const _HermesInternal = HermesInternal;
                  message = "" + Object.keys(body)[0] + ": " + Object.values(body)[0];
                }
                const self = this;
                const self2 = this;
                const _Error1 = new _Error(message);
                tmp21(_Error1);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_1_48.current = false;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                disclosures = closure_0.disclosures;
                allAcked = closure_0.allAcked;
                closure_1_52(!allAcked);
                closure_1_50(disclosures);
                c3 = 1;
              }
              c3 = 0;
              closure_1_48.current = false;
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp42) {
            body = tmp42;
            if (0 === c3) {
              c5 = 3;
              throw tmp42;
            } else if (1 === tmp44) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (!ref.current) {
      const tmp = disclosures;
      if (null == disclosures) {
        const tmp3 = doGetDisclosures();
      }
    }
  }, items14);
  let prop1;
  if (first != null) {
    prop1 = first.application.content_classification;
  }
  if (prop1 == null) {
    let prop2;
    if (first9 != null) {
      prop2 = first9.contentClassification;
    }
    prop1 = prop2;
  }
  const tmp21Result13 = tmp21(tmp18[26]);
  let result = tmp21Result13.isContentClassificationRestricted(prop1, nsfwAllowed);
  const useCallback = obj.useCallback;
  _require = codeChallengeMethod(function*(arg0, value) {
    let application;
    let authorize;
    let c0;
    let c1;
    let c2;
    let closure_2;
    let obj5;
    let obj9;
    let tmp107;
    let tmp99;
    if (1 === state) {
      if (arg0 === 1) {
        nonce = 3;
        throw value;
      } else if (arg0 === 2) {
        nonce = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else if (null != callbackWithoutPost) {
        closure_1_24(true);
        callbackWithoutPost(authorize);
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
        nonce = 3;
        const obj7 = { value: undefined, done: true };
        return obj7;
      } else if (null != integrationType) {
        codeChallengeMethod = 2;
        closure_1_24(true);
        const obj8 = { authorize, clientId, scopes, responseType, redirectUri: tmp, codeChallenge, codeChallengeMethod, state, nonce, permissions: obj9.remove(memo4, first6), guildId: tmp99, channelId: tmp107, integrationType, connectedAccountProvider };
        authorize = clientId(codeChallenge[27]).authorize;
        const tmp82 = clientId(codeChallenge[27]);
        obj9 = redirectUri(codeChallenge[21]);
        tmp99 = undefined;
        if (integrationType === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
          if (null != first4) {
            tmp99 = first4;
          }
        }
        tmp107 = undefined;
        if (integrationType === clientId(codeChallenge[28]).ApplicationIntegrationType.GUILD_INSTALL) {
          if (null != first5) {
            tmp107 = first5;
          }
        }
        state = 4;
        nonce = 1;
        const obj10 = { value: authorize(obj8), done: false };
        return obj10;
      } else {
        const _Error2 = Error;
        const self5 = this;
        const self6 = this;
        const error = new Error("No integration type was selected.");
        closure_1_23(error);
      }
    } else if (2 === state) {
      codeChallengeMethod = 0;
      closure_1_24(false);
      throw codeChallenge;
    } else {
      if (3 === state) {
        codeChallengeMethod = 1;
        const body = codeChallenge.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        if (null != message) {
          if ("" !== body.message) {
            const _Error = Error;
            const self3 = this;
            const self4 = this;
            const error1 = new Error(body.message);
            closure_1_23(error1);
            closure_1_21(constants.AUTHORIZE_SCOPES);
          }
        }
        closure_1_23(body);
        closure_1_21(constants.AUTHORIZE_SCOPES);
      } else {
        if (4 === state) {
          if (arg0 === 1) {
            nonce = 3;
            throw value;
          } else if (arg0 === 2) {
            codeChallengeMethod = 0;
            closure_1_24(false);
            nonce = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            codeChallenge = value;
            const tmp138 = authorize;
            if (tmp138) {
              const obj4 = responseType(codeChallenge[29]);
              const response = obj4.fetch();
              state = 5;
              nonce = 1;
              const obj12 = { value: obj5.ackDisclosures(clientId, first12), done: false };
              obj5 = clientId(codeChallenge[25]);
              return obj12;
            }
          }
        } else {
          if (5 === state) {
            if (arg0 === 1) {
              nonce = 3;
              throw value;
            } else if (arg0 === 2) {
              codeChallengeMethod = 0;
              closure_1_24(false);
              nonce = 3;
              const obj13 = { value, done: true };
              return obj13;
            }
          } else if (arg0 === 1) {
            nonce = 3;
            throw value;
          } else if (arg0 === 2) {
            codeChallengeMethod = 0;
            closure_1_24(false);
            nonce = 3;
            const obj = { value, done: true };
            return obj;
          } else if (callback != null) {
            const obj14 = { canceled: tmp, application, guild, wasDeepLink };
            const merged = Object.assign(codeChallenge);
            application = undefined;
            if (application != null) {
              application = application.application;
            }
            tmp6(obj14);
          }
          codeChallengeMethod = 1;
        }
        if (null != responseType) {
          responseType(codeChallenge.location);
        } else {
          if (dismissOAuthModal != null) {
            dismissOAuthModal();
          }
          const self = this;
          const self2 = this;
          const promise = new Promise((arg0) => setTimeout(arg0, 100));
          state = 6;
          nonce = 1;
          const obj15 = { value: promise, done: false };
          return obj15;
        }
      }
      codeChallengeMethod = 0;
      closure_1_24(false);
    }
    yield "HermesInternal";
    responseType = tmp4;
    ({ isAuthorized: c0, overrideSuccessCallback: c1, canceled: c2 } = clientId);
    return "flexDirection";
  });
  const items15 = [first7, callbackWithoutPost, clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp59, nonce, memo4, first6, first4, first5, first12, dismissOAuthModal, callback, flag5, , , ];
  let application;
  const tmp76 = codeChallengeMethod;
  if (first != null) {
    application = first.application;
  }
  items15[18] = application;
  items15[19] = memo;
  items15[20] = connectedAccountProvider;
  callback1 = useCallback(function(arg0) {
    return closure_0(...arguments);
  }, items15);
  const items16 = [callback1];
  callback2 = obj.useCallback((isAuthorized) => {
    const promise = new Promise((arg0) => {
      isAuthorized = arg0;
      const obj = {
        isAuthorized,
        overrideSuccessCallback(arg0) {
          closure_0(arg0);
        }
      };
      return callback1(obj);
    });
    return promise;
  }, items16);
  const items17 = [clientId, first10, responseType, callback1, callback2, tmp59, dismissOAuthModal, requestedScopes];
  closure_55 = obj.useCallback((isAuthorized) => {
    let closure_0 = isAuthorized;
    let tmp = first10;
    if (tmp) {
      const obj2 = responseType(codeChallenge[22]);
      const result = obj2.showConnectionDisclaimer();
      const nextPromise = result.then(() => {
        const obj = responseType(codeChallenge[22]);
        return obj.getAccountUrlAndAuthCode();
      });
      const nextPromise1 = nextPromise.then((result) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        const items = [tmp2, ];
        const obj = clientId(codeChallenge[27]);
        items[1] = obj.startSamsungAuthorization(isAuthorized, requestedScopes, responseType, tmp, state);
        return all(items);
      });
      const nextPromise2 = nextPromise1.then((result) => {
        let tmp;
        [tmp, ] = result;
        const items = [tmp, ];
        items[1] = callback2(isAuthorized);
        return all(items);
      });
      const nextPromise3 = nextPromise2.then((result) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = result;
        const obj = responseType(codeChallenge[22]);
        return obj.finishSamsungAuthorization(tmp, tmp2, state);
      });
      const nextPromise4 = nextPromise3.then(() => {
        let tmp;
        if (dismissOAuthModal != null) {
          tmp = dismissOAuthModal();
        }
        return tmp;
      });
      nextPromise4.catch((error) => {
        const obj = responseType(codeChallenge[30]);
        obj.captureException(error);
      });
    } else {
      const tmp2 = callback1;
      let obj = { isAuthorized };
      callback1(obj);
    }
  }, items17);
  closure_56 = obj.useRef(false);
  const items18 = [clientId, requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, tmp59, first7, connectedAccountProvider, _prompt, callback1, first13, nsfwAllowed];
  callback3 = obj.useCallback(tmp76(function*(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c4;
      let body;
      try {
        let application;
        let closure_2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            integrationType = undefined;
            application = undefined;
            closure_2 = undefined;
            body = undefined;
            if (!ref.current) {
              ref.current = true;
              c4 = 2;
              const obj4 = { clientId, scopes: requestedScopes, responseType, redirectUri, codeChallenge, codeChallengeMethod, state, integrationType, connectedAccountProvider };
              const tmp46 = integrationType(body[27]);
              integrationType = first7;
              const fetchAuthorization = tmp46.fetchAuthorization;
              if (first7 == null) {
                integrationType = undefined;
              }
              c5 = 3;
              c6 = 1;
              const obj5 = { value: fetchAuthorization(obj4), done: false };
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_130_56.current = false;
          throw body;
        } else {
          if (2 === c5) {
            let message;
            c4 = 1;
            body = body.body;
            const _Error = Error;
            const tmp26 = closure_130_23;
            if (null != body.message) {
              message = body.message;
            } else {
              const _Object = Object;
              const _Object2 = Object;
              const _HermesInternal = HermesInternal;
              message = "" + Object.keys(body)[0] + ": " + Object.values(body)[0];
            }
            const self = this;
            const self2 = this;
            const _Error1 = new _Error(message);
            tmp26(_Error1);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_56.current = false;
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            integrationType = value;
            const obj8 = integrationType(body[31]);
            application = obj8.convertOAuth2Authorization(integrationType);
            closure_130_19(application);
            const obj9 = integrationType(body[26]);
            closure_2 = obj9.isContentClassificationRestricted(application.application.content_classification, closure_130_32);
            const tmp7 = closure_130_7 !== integrationType(body[32]).OAuth2Prompts.NONE || !integrationType.authorized || closure_130_51 || closure_2;
            if (!tmp7) {
              closure_130_53({ isAuthorized: true });
            }
            const obj7 = { application_id: integrationType.application.id };
            const obj = integrationType(body[33]);
            obj.trackWithMetadata(connectedAccountProvider.OAUTH2_AUTHORIZE_VIEWED, obj7);
            c4 = 1;
          }
          c4 = 0;
          closure_130_56.current = false;
        }
        c6 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp57) {
        body = tmp57;
        if (0 === c4) {
          c6 = 3;
          throw tmp57;
        } else if (1 === tmp59) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  }), items18);
  const items19 = [first9, memo1];
  memo5 = obj.useMemo(() => {
    if (null != first9) {
      const tmp2 = memo1;
      if (tmp2) {
        let prop = tmp.integrationTypesConfig;
        const _Object = Object;
        if (prop == null) {
          prop = {};
        }
        const entries1 = entries(prop);
        const found = entries1.filter((item) => {
          let tmp;
          [, tmp] = item;
          return null != tmp.oauth2InstallParams;
        });
        const mapped = found.map((item) => {
          let tmp;
          [tmp, ] = item;
          return Number(tmp);
        });
      }
      return [];
    }
  }, items19);
  ref2 = obj.useRef(null);
  const items20 = [clientId, first7, memo4, requestedScopes, first1];
  const effect3 = obj.useEffect(() => {
    if (first1 !== ref2.current) {
      ref2.current = first1;
      const obj = { step: first1, application_id: clientId, integration_type: first7, scopes: requestedScopes, permissions: memo4.toString() };
      const trackWithMetadata = AppAnalyticsUtils.trackWithMetadata;
      const OAUTH2_AUTHORIZE_STEP_VIEWED = connectedAccountProvider.OAUTH2_AUTHORIZE_STEP_VIEWED;
      AppAnalyticsUtils;
      trackWithMetadata(OAUTH2_AUTHORIZE_STEP_VIEWED, obj);
    }
  }, items20);
  const items21 = [memo5, first9, memo1, integrationType, first1, connectedAccountProvider, tmp26];
  const effect4 = obj.useEffect(() => {
    let tmp = null != first1;
    if (!tmp) {
      tmp = memo1 && null == first9;
      const tmp2 = memo1 && null == first9;
    }
    if (!tmp) {
      if (null != connectedAccountProvider) {
        const tmp5 = closure_34;
        if (!tmp5) {
          closure_21(disclosures.CONNECT_ACCOUNT);
        }
      }
      if (memo5.length > 1) {
        closure_21(disclosures.SELECT_INSTALL_TYPE);
      } else if (1 === memo5.length) {
        closure_36(memo5[0]);
        closure_21(disclosures.AUTHORIZE_SCOPES);
      } else if (null != integrationType) {
        closure_36(tmp9);
        closure_21(disclosures.AUTHORIZE_SCOPES);
      } else {
        closure_36(ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL);
        closure_21(disclosures.AUTHORIZE_SCOPES);
      }
    }
  }, items21);
  const items22 = [first1, tmp26, integrationType];
  const effect5 = obj.useEffect(() => {
    let tmp2 = first1 === disclosures.CONNECT_ACCOUNT;
    const tmp = disclosures;
    if (tmp2) {
      tmp2 = closure_34;
    }
    if (tmp2) {
      let USER_INSTALL = integrationType;
      const tmp3 = closure_36;
      if (integrationType == null) {
        USER_INSTALL = ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL;
      }
      tmp3(USER_INSTALL);
      closure_21(tmp.AUTHORIZE_SCOPES);
    }
  }, items22);
  const items23 = [callback3, requestedScopes, memo4, first7, first, first2];
  const effect6 = obj.useEffect(function() {
    if (null != first7) {
      if (null == first) {
        if (null == first2) {
          const tmp27 = require;
          if (tmp === ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL) {
            closure_27(null);
            closure_29(null);
          }
          const found = requestedScopes.filter((item) => {
            const ValidScopes = clientId(codeChallenge[20]).ValidScopes;
            return !ValidScopes.includes(item);
          });
          if (0 === requestedScopes.length) {
            const _Error3 = Error;
            const self5 = this;
            const self6 = this;
            const error = new Error("No scopes were provided.");
            closure_23(error);
          } else if (found.length > 0) {
            const _Error2 = Error;
            const _HermesInternal = HermesInternal;
            const self3 = this;
            const self4 = this;
            const error1 = new Error("Invalid scope: " + found[0]);
            closure_23(error1);
          } else {
            const tmp27Result = tmp27(9842);
            if (tmp27Result.containsDisallowedPermission(memo4)) {
              const _Error = Error;
              const self = this;
              const self2 = this;
              const error2 = new Error("Invalid permission(s) provided.");
              closure_23(error2);
            } else {
              callback3();
            }
          }
        }
      }
    }
  }, items23);
  const items24 = [isScreenReaderEnabled, first8];
  const callback4 = obj.useCallback(() => {
    const tmp = isScreenReaderEnabled && !first8;
    if (tmp) {
      closure_38(true);
    }
  }, items24);
  if (first1 === disclosures.AUTHORIZE_SCOPES) {
    let num = 1;
    if (memo5.length > 1) {
      const SELECT_INSTALL_TYPE = tmp86.SELECT_INSTALL_TYPE;
      AUTHORIZE_SCOPES = SELECT_INSTALL_TYPE;
      tmp87 = SELECT_INSTALL_TYPE;
    }
    const items25 = [tmp87, dismissOAuthModal, callback1];
    callback5 = obj.useCallback(() => {
      if (null != AUTHORIZE_SCOPES) {
        closure_21(tmp);
      } else {
        callback1({ isAuthorized: false, canceled: true });
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
      }
      return true;
    }, items25);
    responseType(tmp18[35])(callback5, flag4);
    const callback6 = obj.useCallback((arg0) => {
      closure_36(arg0);
      closure_19(null);
      closure_21(disclosures.AUTHORIZE_SCOPES);
    }, []);
    let _Error = Error;
    if (first2 instanceof Error) {
      let obj3 = { body: loading(tmp89(tmp18[36]), obj4), goBackOrCancel: callback5, footer: loading(Button2, obj5), obscured: false };
      obj4 = { error: first2.message, hideFooter: true };
      obj5 = {
        size: "lg",
        text: intl3.string(tmp21(tmp18[38]).t.cpT0Cq),
        onPress() {
              return callback5();
            }
      };
      Button2 = tmp21(tmp18[37]).Button;
      intl3 = tmp21(tmp18[38]).intl;
      return obj3;
    } else {
      let str4 = "";
      if (null != connectedAccountProvider) {
        const tmp89Result = responseType(tmp18[40]);
        const value = tmp89Result.get(connectedAccountProvider);
        let str5;
        class Spinner {
          constructor() {
            const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
            return loading(View, obj);
          }
        }
        if (str5 == null) {
          str5 = "";
        }
        str4 = str5;
      }
      class Spinner {
        constructor() {
          const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
          return loading(View, obj);
        }
      }
      if (null === first1) {
        let obj7 = { body: loading(Spinner, {}), obscured: false };
        class Spinner {
          constructor() {
            const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
            return loading(View, obj);
          }
        }
      } else {
        let tmp96;
        let flag9;
        let flag6;
        let flag7;
        let flag8;
        if (disclosures.CONNECT_ACCOUNT === first1) {
          let obj8 = { clientId, platformType: null, platformName: str4 };
          class Spinner {
            constructor() {
              const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
              return loading(View, obj);
            }
          }
          tmp96 = loading(tmp89(tmp18[41]), obj8);
          flag9 = true;
          flag6 = false;
          flag7 = false;
          flag8 = false;
        } else if (disclosures.SELECT_INSTALL_TYPE === first1) {
          if (null == first9) {
            let obj9 = { body: loading(Spinner, {}), obscured: false };
            class Spinner {
              constructor() {
                const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                return loading(View, obj);
              }
            }
          } else {
            let obj10 = { application: first9, onSelect: null };
            class Spinner {
              constructor() {
                const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                return loading(View, obj);
              }
            }
            tmp96 = loading(tmp89(tmp18[42]), obj10);
            flag6 = false;
            flag7 = false;
            flag8 = false;
            flag9 = false;
          }
        } else if (disclosures.AUTHORIZE_SCOPES === first1) {
          if (null != first) {
            if (null != stateFromStores) {
              if (null != first7) {
                let obj11;
                let sorted;
                if (null == first2) {
                  obj11 = {};
                } else {
                  let _Error2 = Error;
                  obj11 = first2;
                }
                if (guilds != null) {
                  sorted = guilds.sort((name, name2) => {
                    const str = name.name;
                    const formatted = str.toLowerCase();
                    const str2 = name2.name;
                    return formatted.localeCompare(str2.toLowerCase());
                  });
                }
                class Spinner {
                  constructor() {
                    const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                    return loading(View, obj);
                  }
                }
                if (hasItem) {
                  hasItem = requestedScopes.includes(tmp21(tmp18[43]).OAuth2Scopes.WEBHOOK_INCOMING);
                }
                let tmp100 = hasItem;
                if (!tmp100) {
                  const tmp101 = first7 === tmp21(tmp18[28]).ApplicationIntegrationType.GUILD_INSTALL;
                  if (tmp101) {
                    const hasItem1 = requestedScopes.includes(tmp21(tmp18[43]).OAuth2Scopes.BOT) || requestedScopes.includes(tmp21(tmp18[43]).OAuth2Scopes.APPLICATIONS_COMMANDS);
                    class Spinner {
                      constructor() {
                        const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                        return loading(View, obj);
                      }
                    }
                  }
                  tmp100 = tmp101;
                }
                let tmp106 = null;
                const tmp21Result14 = tmp21(tmp18[44]);
                const isSocialLayerParentApplication = tmp21Result14.getIsSocialLayerParentApplication(first.application);
                if (null != stateFromStores1) {
                  tmp106 = null;
                  if (tmp26) {
                    let tmp107 = loading;
                    let obj12 = { platformType: stateFromStores1.type, platformName: null, connectedAccount: stateFromStores1, applicationName: first.application.name };
                    class Spinner {
                      constructor() {
                        const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                        return loading(View, obj);
                      }
                    }
                    tmp106 = loading(tmp21(tmp18[41]).ConnectedAccountCard, obj12);
                  }
                }
                const items26 = [tmp106, , , , ];
                let obj13 = { application: first.application, accountScopes };
                items26[1] = loading(responseType(tmp18[45]), obj13);
                let obj14 = { application: first.application, accountScopes, requestedScopes, integrationType: first7, errors: obj11, isTrustedName: flag2 };
                const tmp89Result7 = responseType(tmp18[46]);
                if (!flag2) {
                  flag2 = isSocialLayerParentApplication;
                }
                items26[2] = loading(tmp89Result7, obj14);
                let tmp104Result = null;
                if (tmp100) {
                  const items27 = [tmp108(tmp21(tmp18[47]).AuthorizeFormSeparator, {}), ];
                  const tmp89Result8 = responseType(tmp18[48]);
                  class Spinner {
                    constructor() {
                      const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                      return loading(View, obj);
                    }
                  }
                  if (items28 == null) {
                    items28 = obj11[tmp21(undefined, tmp18[43]).OAuth2Scopes.APPLICATIONS_COMMANDS];
                  }
                  if (items28 == null) {
                    items28 = [];
                  }
                  let obj15 = { error: items28[0], selectedGuildId: first4, onGuildChange: tmp13, guilds: sorted, disabled: tmp112 };
                  if (sorted == null) {
                    sorted = [];
                  }
                  const obj16 = { children: items27 };
                  tmp112 = "" !== first4 && true === flag;
                  items27[1] = loading(tmp89Result8, obj15);
                  tmp104Result = tmp104(tmp105, obj16);
                }
                items26[3] = tmp104Result;
                let tmp104Result3 = null;
                if (hasItem) {
                  const items29 = [tmp108(tmp21(tmp18[47]).AuthorizeFormSeparator, {}), ];
                  const tmp89Result9 = responseType(tmp18[49]);
                  class Spinner {
                    constructor() {
                      const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                      return loading(View, obj);
                    }
                  }
                  if (items30 == null) {
                    items30 = [];
                  }
                  const obj17 = { children: items29 };
                  const obj18 = { error: items30[0], selectedChannelId: first5, selectedGuildId: first4, onChannelChange: tmpResult10[1] };
                  items29[1] = loading(tmp89Result9, obj18);
                  tmp104Result3 = tmp104(tmp105, obj17);
                }
                const obj19 = { children: items26 };
                items26[4] = tmp104Result3;
                const tmp104Result4 = closure_19(first, obj19);
                let hasItem2 = requestedScopes.includes(tmp21(tmp18[43]).OAuth2Scopes.BOT);
                if (hasItem2) {
                  const tmp17Result = redirectUri(tmp18[21]);
                  hasItem2 = !tmp17Result.equals(memo4, tmp17(tmp18[13]).NONE);
                }
                if (hasItem2) {
                  AUTHORIZE_BOT_PERMISSIONS = tmp86.AUTHORIZE_BOT_PERMISSIONS;
                }
                if (tmp100) {
                  tmp100 = null == memo;
                }
                if (!tmp100) {
                  if (hasItem) {
                    hasItem = null == first5;
                  }
                  tmp100 = hasItem;
                }
                if (!tmp100) {
                  tmp100 = !first8;
                }
                flag6 = true;
                flag8 = tmp100;
                flag7 = true;
                flag9 = true;
                tmp96 = tmp104Result4;
              }
            }
          }
          const obj20 = { body: null, obscured: false };
          class Spinner {
            constructor() {
              const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
              return loading(View, obj);
            }
          }
          return obj20;
        } else {
          flag6 = true;
          flag7 = true;
          flag8 = false;
          class Spinner {
            constructor() {
              const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
              return loading(View, obj);
            }
          }
          if (disclosures.AUTHORIZE_BOT_PERMISSIONS === first1) {
            if (null == first) {
              ({ body: loading(Spinner, {}), obscured: false });
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
            } else {
              const obj22 = { application: first.application, permissions: null, deniedPermissions: first6, onPermissionsChange: tmp92, guild: memo };
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
              tmp96 = loading(tmp89(tmp18[50]), obj22);
              flag6 = true;
              flag7 = true;
              flag8 = false;
              flag9 = true;
            }
          }
        }
        let tmp125Result;
        if (flag7) {
          if (tmp97 !== disclosures.AUTHORIZE_BOT_PERMISSIONS) {
            if (null != first) {
              let prop3;
              if (first != null) {
                prop3 = first.application.approximate_guild_count;
              }
              if (prop3 == null) {
                let prop4;
                if (first != null) {
                  const bot = first.bot;
                  if (bot != null) {
                    prop4 = bot.approximate_guild_count;
                  }
                }
                prop3 = prop4;
              }
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
              const obj23 = { application: first.application, scopes: requestedScopes, disclosures: first12, redirectUri: redirect_uri, approximateGuildCount: tmp128, isEmbeddedFlow: flag3, connectedAccount: stateFromStores1 };
              redirect_uri = first.redirect_uri;
              const tmp89Result10 = responseType(tmp18[51]);
              if (redirect_uri == null) {
                redirect_uri = null;
              }
              tmp128 = null;
              if (undefined !== prop3) {
                tmp128 = prop3;
              }
              tmp125Result = tmp125(tmp89Result10, obj23);
            }
          }
        }
        class Spinner {
          constructor() {
            const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
            return loading(View, obj);
          }
        }
        if (flag6) {
          flag6 = null != stateFromStores;
        }
        let tmp129;
        if (flag6) {
          const obj24 = { user: stateFromStores, application: null, accountScopes, bot: first.bot };
          class Spinner {
            constructor() {
              const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
              return loading(View, obj);
            }
          }
          tmp129 = loading(tmp89(tmp18[52]), obj24);
        }
        const obj25 = { header: tmp129, body: tmp96, footer: tmp132(tmp133, obj33), appDetails: tmp125Result, backStep: tmp87, sendAuthorize: callback1, goBackOrCancel: callback5, allContentSeen: first8, setAllContentSeen: tmpResult13[1], hasContentBackground: flag9, obscured: result };
        let tmp132Result4 = null;
        tmp133 = first;
        if (first1 !== disclosures.SELECT_INSTALL_TYPE) {
          tmp132Result4 = null;
          if (first1 !== disclosures.CONNECT_ACCOUNT) {
            const obj26 = { accessibilityElementsHidden: flag8 && !first8, importantForAccessibility: str6, children: loading(Button, obj30) };
            str6 = "auto";
            class Spinner {
              constructor() {
                const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                return loading(View, obj);
              }
            }
            if (flag8 && !first8) {
              str6 = "no-hide-descendants";
            }
            Button = tmp21(tmp18[37]).Button;
            if (null != tmp97) {
              const string = tmp21(tmp18[38]).intl.string;
              const t = tmp21(tmp18[38]).t;
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
              const obj27 = {
                size: "lg",
                text: tmp141,
                icon: tmp132Result,
                iconPosition: "end",
                onPress() {
                              return closure_21(AUTHORIZE_BOT_PERMISSIONS);
                            },
                disabled: flag8,
                accessibilityActions: items31,
                onAccessibilityAction: callback4
              };
              tmp132Result = undefined;
              if (!first8) {
                if (flag8) {
                  const obj28 = { style: animatedStyle, children: loading(tmp89Result11, tmp144) };
                  const View2 = tmp89(tmp18[16]).View;
                  class Spinner {
                    constructor() {
                      const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                      return loading(View, obj);
                    }
                  }
                  const convert2 = scopes.convert;
                  tmp89Result11 = responseType(tmp18[53]);
                  tmp144[0] = convert2.fromCodePoint(dismissOAuthModal);
                  tmp132Result = tmp132(View2, obj28);
                }
              }
              if (!flag8) {
                flag8 = result;
              }
              const obj29 = { name: "enable", label: intl2.string(tmp21(tmp18[38]).t.eIL75W) };
              intl2 = tmp21(tmp18[38]).intl;
              items31 = [obj29];
              obj30 = obj27;
            } else {
              const string2 = tmp21(tmp18[38]).intl.string;
              const t2 = tmp21(tmp18[38]).t;
              class Spinner {
                constructor() {
                  const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                  return loading(View, obj);
                }
              }
              obj30 = {
                size: "lg",
                text: tmp135,
                onPress() {
                              closure_55(true);
                            },
                icon: tmp132Result3,
                iconPosition: "end",
                disabled: flag8 || result,
                loading: first3,
                accessibilityActions: items32,
                onAccessibilityAction: callback4
              };
              tmp132Result3 = undefined;
              if (!first8) {
                const obj31 = { style: animatedStyle, children: loading(tmp89Result12, tmp138) };
                View = tmp89(tmp18[16]).View;
                class Spinner {
                  constructor() {
                    const obj = { style: loading.loading, children: loading(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
                    return loading(View, obj);
                  }
                }
                const convert = scopes.convert;
                tmp89Result12 = responseType(tmp18[53]);
                tmp138[0] = convert.fromCodePoint(dismissOAuthModal);
                tmp132Result3 = tmp132(View, obj31);
              }
              const obj32 = { name: "enable", label: intl.string(tmp21(tmp18[38]).t.eIL75W) };
              intl = tmp21(tmp18[38]).intl;
              items32 = [obj32];
            }
            tmp132Result4 = tmp132(tmp149, obj26);
          }
        }
        return obj25;
      }
    }
  }
  if (first1 === disclosures.AUTHORIZE_BOT_PERMISSIONS) {
    AUTHORIZE_SCOPES = tmp86.AUTHORIZE_SCOPES;
    tmp87 = AUTHORIZE_SCOPES;
  }
};
