// Module ID: 1194
// Function ID: 13658
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1195, 1196, 653, 1197, 3, 684, 587, 1198, 675, 13111, 686, 13112, 9200, 4030, 490, 13113, 1184, 11454, 566, 10463, 13114, 1328, 1881, 2]

// Module 1194 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "ME";
import dispatcher from "dispatcher";
import getAuthenticationErrorsFromAPIError from "getAuthenticationErrorsFromAPIError";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import result from "result";
import importDefaultResult from "_getPrototypeOf";
import importDefaultResult1 from "dispatcher";

let EXISTING_USER_AGE_GATE_MODAL_KEY;
let LoginStates;
let NEW_USER_AGE_GATE_MODAL_KEY;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function logInfo(arg0) {
  let obj = importAll(684);
  const Storage = require(587) /* Storage */.Storage;
  obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_15) };
  importDefaultResult.verbose(arg0, obj);
}
function readInstallation() {
  const Storage = require(587) /* Storage */.Storage;
  let value = Storage.get(analytics_installation);
  if (null != value) {
    if (value.length > 0) {
      return value;
    }
  }
  const Storage2 = require(587) /* Storage */.Storage;
  value = Storage2.get("analytics_installation");
  let tmp = null;
  if (null != value) {
    tmp = null;
    if (value.length > 0) {
      const Storage3 = require(587) /* Storage */.Storage;
      const result = Storage3.set(analytics_installation, value);
      tmp = value;
    }
  }
  return tmp;
}
function fetchFingerprint(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const Storage = require(587) /* Storage */.Storage;
  let closure_26 = Storage.get(fingerprint);
  let closure_28 = readInstallation();
  if (null != c38) {
    return c38;
  } else {
    if (null != closure_26) {
      let token = closure_26;
    } else {
      let obj = importAll(684);
      token = obj.getToken();
    }
    if (obj2.isValidFingerprintRoute()) {
      if (flag) {
        if (!handoffAvailable.isHandoffAvailable()) {
          obj = { withGuildExperiments: true };
          let resolved = loadExperiments(obj);
        }
        return resolved;
      }
    }
    resolved = Promise.resolve();
    obj2 = require(1198) /* shouldNavigate */;
  }
}
function loadExperiments(withGuildExperiments) {
  let obj = {};
  const superPropertiesBase64 = importDefault(675).getSuperPropertiesBase64();
  if (null != superPropertiesBase64) {
    obj["X-Super-Properties"] = superPropertiesBase64;
  }
  if (null != c26) {
    obj["X-Fingerprint"] = c26;
  }
  if (null != c28) {
    obj["X-Installation-ID"] = c28;
  }
  const obj2 = importDefault(675);
  obj = { withGuildExperiments: withGuildExperiments.withGuildExperiments, headers: obj };
  obj = {};
  let obj3 = require(13111) /* fetchExperiments */;
  obj.location = require(1198) /* shouldNavigate */.getFingerprintLocation();
  obj.context = obj;
  const experiments = obj3.fetchExperiments(obj);
  const nextPromise = experiments.then((body) => {
    let assignments;
    let fingerprint;
    let guild_experiments;
    let installation;
    body = body.body;
    ({ fingerprint, installation } = body);
    let tmp = null != installation;
    ({ assignments, guild_experiments } = body);
    if (tmp) {
      tmp = installation.length > 0;
    }
    if (tmp) {
      let obj = outer1_1(outer1_3[15]);
      obj = { type: "INSTALLATION_ID", installation };
      obj.dispatch(obj);
    }
    if (fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint };
      outer1_1(outer1_3[15]).dispatch(obj);
      const obj3 = outer1_1(outer1_3[15]);
    }
    outer1_1(outer1_3[15]).dispatch({ type: "EXPERIMENTS_FETCH_SUCCESS", fingerprint, experiments: assignments, guildExperiments: guild_experiments });
    const obj5 = outer1_1(outer1_3[15]);
    outer1_0(outer1_3[16]).onExperimentsLoaded();
  }, () => {
    outer1_1(outer1_3[15]).dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
  });
  return nextPromise;
}
function clearFingerprint() {
  let closure_27 = c26;
  c26 = null;
  const Storage = require(587) /* Storage */.Storage;
  Storage.remove(fingerprint);
}
function setAuthToken(token, id) {
  logInfo("setAuthToken called.");
  let tmp2 = null != id;
  if (tmp2) {
    tmp2 = id === c22;
  }
  if (!tmp2) {
    importAll(684).removeAnalyticsToken();
    const obj = importAll(684);
  }
  importAll(684).setToken(token, id);
}
function setAnalyticsToken(arg0) {
  let closure_29 = arg0;
  importAll(684).setAnalyticsToken(arg0);
}
function removeAuthToken() {
  logInfo("removeAuthToken called.");
  importAll(684).removeAnalyticsToken();
  const obj = importAll(684);
  return importAll(684).removeToken();
}
function updateMFAMethods() {
  const items = [];
  if (null != c35) {
    let obj = { type: "webauthn", challenge: c35 };
    items.push(obj);
  }
  if (c36) {
    obj = { type: "totp" };
    items.push(obj);
  }
  if (c37) {
    obj = { type: "backup" };
    items.push(obj);
  }
  if (c34) {
    const obj1 = { type: "sms" };
    items.push(obj1);
  }
}
function handleInstallationId(installation) {
  installation = installation.installation;
  if (null != installation) {
    if (installation.length > 0) {
      return false;
    }
  }
  if (obj.canUseInstallationId()) {
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(analytics_installation, installation);
  }
}
function handleAgeGateUnderage() {
  let c31 = true;
  handleLogout();
  importDefault(686).wait(() => {
    outer1_0(outer1_3[12]).transitionTo(outer1_14.REGISTER);
  });
}
function handleLogout(isSwitchingAccount) {
  logInfo("handleLogout called.");
  isSwitchingAccount = undefined;
  if (null != isSwitchingAccount) {
    isSwitchingAccount = isSwitchingAccount.isSwitchingAccount;
  }
  if (!tmp4) {
    if (tmp2) {
      clearFingerprint();
    }
    fetchFingerprint();
  }
  const PersistedStore = importDefault(566).PersistedStore;
  const obj = { omit: ["InstallationManagerStore", "AgeGateStore", "NativePermissionsStore", "MultiAccountStore", "DraftStore", "OverlayStoreV2", "StreamerModeStore", "LoginRequiredActionStore", "LayoutStore", "OverlaySettingsStore", "ApexExperimentStore"] };
  let str = "all";
  if (null != isSwitchingAccount) {
    str = "all";
    if (isSwitchingAccount.isSwitchingAccount) {
      str = "user-data-only";
    }
  }
  obj.type = str;
  PersistedStore.clearAll(obj);
  const Store = importDefault(566).Store;
  const result = Store.removeAllConditionalListeners();
  closure_10.clearAll();
  tmp2 = removeAuthToken();
  tmp4 = null != isSwitchingAccount && isSwitchingAccount;
  importDefault(1184).clearUser();
  const Storage = require(587) /* Storage */.Storage;
  Storage.remove(user_id_cache);
  let c22 = null;
  let c23 = null;
  if (null != isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      let NONE = LoginStates.LOGGING_IN;
    }
    let c33 = "";
    let c35 = null;
    let c34 = false;
    let c40 = false;
    let c41 = false;
    updateMFAMethods();
  }
  NONE = LoginStates.NONE;
}
({ AnalyticEvents: closure_11, LoginStates } = ME);
({ Platforms: closure_13, Routes: closure_14, TOKEN_KEY: closure_15 } = ME);
({ EXISTING_USER_AGE_GATE_MODAL_KEY, NEW_USER_AGE_GATE_MODAL_KEY } = result);
importDefaultResult = new importDefaultResult("AuthenticationStore");
let fingerprint = "fingerprint";
const analytics_installation = "analytics_installation";
const user_id_cache = "user_id_cache";
let c22 = null;
let c23 = null;
let c24 = null;
let c25 = null;
let c26 = null;
let c27 = null;
let c28 = null;
let c29 = null;
let NONE = LoginStates.NONE;
let c31 = false;
let closure_32 = [];
let c33 = "";
let c34 = false;
let c35 = null;
let c36 = false;
let c37 = false;
let c38 = null;
let c39 = null;
let c40 = false;
let c41 = false;
let closure_42 = [];
let tmp6 = ((Store) => {
  class AuthenticationStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, AuthenticationStore);
      obj = outer1_7(AuthenticationStore);
      tmp2 = outer1_6;
      if (outer1_43()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AuthenticationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      function fireApex() {
        const installationExperiments = AuthenticationStore(outer2_3[24]).fetchInstallationExperiments(null);
      }
      const Storage = AuthenticationStore(outer1_3[11]).Storage;
      const outer1_22 = Storage.get(outer1_21);
      const outer1_28 = outer1_45();
      if (null == obj.getToken()) {
        let tmp2 = null == outer1_28;
        if (!tmp2) {
          tmp2 = 0 === outer1_28.length;
        }
        if (tmp2) {
          promise.then(fireApex, fireApex);
        }
        promise = outer1_46();
      }
      self.addChangeListener(() => AuthenticationStore(outer2_3[25]).setClientState(outer2_22));
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getLoginStatus",
    value() {
      return outer1_30;
    }
  };
  items[1] = obj;
  obj = {
    key: "getId",
    value() {
      return outer1_22;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSessionId",
    value() {
      return outer1_23;
    }
  };
  items[4] = {
    key: "getAuthSessionIdHash",
    value() {
      return outer1_24;
    }
  };
  items[5] = {
    key: "getStaticAuthSessionId",
    value() {
      return outer1_25;
    }
  };
  items[6] = {
    key: "getToken",
    value() {
      return AuthenticationStore(outer1_3[26]).getToken();
    }
  };
  items[7] = {
    key: "isAuthenticated",
    value() {
      return AuthenticationStore(outer1_3[26]).isAuthenticated();
    }
  };
  items[8] = {
    key: "getFingerprint",
    value() {
      return outer1_26;
    }
  };
  items[9] = {
    key: "getInstallationForTracking",
    value() {
      let tmp = null;
      if (obj.canUseInstallationId()) {
        tmp = outer1_28;
      }
      return tmp;
    }
  };
  items[10] = {
    key: "getAnalyticsToken",
    value() {
      if (null != outer1_29) {
        let analyticsToken = outer1_29;
      } else {
        analyticsToken = outer1_2(outer1_3[10]).getAnalyticsToken();
        const obj = outer1_2(outer1_3[10]);
      }
      return analyticsToken;
    }
  };
  items[11] = {
    key: "getMFATicket",
    value() {
      return outer1_33;
    }
  };
  items[12] = {
    key: "getMFAMethods",
    value() {
      return outer1_42;
    }
  };
  items[13] = {
    key: "getLoginInstanceId",
    value() {
      return outer1_17;
    }
  };
  items[14] = {
    key: "hasTOTPEnabled",
    value() {
      return outer1_32.includes(AuthenticationStore(outer1_3[27]).AuthenticatorType.TOTP);
    }
  };
  items[15] = {
    key: "getCredentials",
    value() {
      if (null == outer1_16) {
        const _Error = Error;
        const error = new Error("no credentials");
        throw error;
      } else {
        return outer1_16;
      }
    }
  };
  items[16] = {
    key: "allowLogoutRedirect",
    value() {
      return !outer1_31;
    }
  };
  items[17] = {
    key: "getSuspendedUserToken",
    value() {
      return outer1_39;
    }
  };
  items[18] = {
    key: "getIsPasswordlessActive",
    value() {
      return outer1_40;
    }
  };
  items[19] = {
    key: "attemptedPasswordLogin",
    value() {
      return outer1_41;
    }
  };
  return callback(AuthenticationStore, items);
})(require("initialize").Store);
tmp6.displayName = "AuthenticationStore";
tmp6 = new tmp6(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let analyticsToken;
    let apexExperiments;
    let auth;
    let authSessionIdHash;
    let email;
    let id;
    let sessionId;
    let staticAuthSessionId;
    let user;
    let username;
    ({ user, auth, apexExperiments } = arg0);
    ({ sessionId, authSessionIdHash, analyticsToken, staticAuthSessionId } = arg0);
    logInfo("handleConnectionOpen called");
    let obj = importDefault(1184);
    ({ id, username, email } = user);
    let tmp2;
    if (null != email) {
      tmp2 = email;
    }
    obj.setUser(id, username, tmp2, importDefault(11454)(user));
    setAnalyticsToken(analyticsToken);
    id = user.id;
    if (undefined !== auth) {
      const authenticator_types = auth.authenticator_types;
    }
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(user_id_cache, user.id);
    let installation;
    if (null != apexExperiments) {
      installation = apexExperiments.installation;
    }
    if (null != installation) {
      obj = { type: "INSTALLATION_ID", installation: apexExperiments.installation };
      handleInstallationId(obj);
    }
    const Storage2 = require(587) /* Storage */.Storage;
    if (Storage2.get(constants.APP_FIRST_LOGIN, true)) {
      obj = { platform: constants2.IOS };
      importDefault(675).track(constants.APP_FIRST_LOGIN, obj);
      const Storage3 = require(587) /* Storage */.Storage;
      const result1 = Storage3.set(constants.APP_FIRST_LOGIN, false);
      const obj3 = importDefault(675);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    let analyticsToken;
    let email;
    let id;
    let sessionId;
    let token;
    let user;
    let username;
    ({ user, analyticsToken } = arg0);
    ({ sessionId, token } = arg0);
    ({ id, username, email } = user);
    let tmp;
    if (null != email) {
      tmp = email;
    }
    importDefault(1184).setUser(id, username, tmp, importDefault(11454)(user));
    setAuthToken(token, user.id);
    if (null != analyticsToken) {
      setAnalyticsToken(analyticsToken);
    }
    clearFingerprint();
    id = user.id;
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(user_id_cache, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    code = code.code;
    logInfo("handleConnectionClosed called with code " + code + ".");
    if (4004 === code) {
      if (c31) {
        handleAgeGateUnderage();
      } else {
        let obj = importDefault(675);
        obj = {};
        const Storage = require(587) /* Storage */.Storage;
        obj.user_id = Storage.get(user_id_cache);
        obj.track(constants.APP_USER_DEAUTHENTICATED, obj);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => outer1_0(outer1_3[12]).transitionTo(outer1_14.DEFAULT_LOGGED_OUT));
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
  },
  LOGIN: function handleLogin(arg0) {
    const LOGGING_IN = LoginStates.LOGGING_IN;
    let tmp2 = c41;
    if (!c41) {
      tmp2 = true === tmp;
    }
    c41 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    const NONE = LoginStates.NONE;
    setAuthToken(token.token);
    clearFingerprint();
    let c33 = "";
    let c34 = false;
    let c35 = null;
    let c17 = null;
    updateMFAMethods();
    let c40 = false;
  },
  LOGIN_FAILURE: function handleLoginFailure(error) {
    let c33 = "";
    let c34 = false;
    let c35 = null;
    let c17 = null;
    updateMFAMethods();
    if (null != obj.getAuthenticationErrorsFromV6OrEarlierAPIError(error.error).date_of_birth) {
      let NONE = LoginStates.LOGIN_AGE_GATE;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  LOGIN_MFA_STEP: function handleLoginMFAStep(arg0) {
    let ticket;
    let webauthn;
    ({ ticket, webauthn } = arg0);
    if (null != ticket) {
      let c34 = tmp;
      let tmp5 = null;
      if (null != webauthn) {
        tmp5 = webauthn;
      }
      let c35 = tmp5;
      let c37 = tmp2;
      let c36 = tmp3;
      let closure_17 = tmp4;
      updateMFAMethods();
    }
    const MFA_STEP = LoginStates.MFA_STEP;
  },
  LOGIN_MFA: function handleLoginMFA() {
    const LOGGING_IN_MFA = LoginStates.LOGGING_IN_MFA;
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function handleLoginAccountPendingDeletion(credentials) {
    let closure_30 = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
    credentials = credentials.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
    const ACCOUNT_DISABLED = LoginStates.ACCOUNT_DISABLED;
    credentials = credentials.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
    let closure_30 = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
    credentials = credentials.credentials;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
    const PHONE_IP_AUTHORIZATION = LoginStates.PHONE_IP_AUTHORIZATION;
    credentials = credentials.credentials;
  },
  LOGIN_RESET: function handleLoginReset(isMultiAccount) {
    const NONE = LoginStates.NONE;
    let c33 = "";
    let c34 = false;
    let c35 = null;
    let c17 = null;
    let c16 = null;
    if (!isMultiAccount.isMultiAccount) {
      updateMFAMethods();
      removeAuthToken();
      fetchFingerprint(false);
    }
  },
  LOGIN_STATUS_RESET: function handleLoginStatusReset() {
    const NONE = LoginStates.NONE;
  },
  LOGIN_SUSPENDED_USER: function handleSuspendedUserLogin(suspendedUserToken) {
    let c40 = false;
    suspendedUserToken = suspendedUserToken.suspendedUserToken;
    setImmediate(() => outer1_0(outer1_3[12]).transitionTo(outer1_14.ACCOUNT_STANDING));
  },
  LOGOUT: handleLogout,
  FINGERPRINT: function handleFingerprint(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (null == fingerprint) {
      if (null != fingerprint) {
        let obj = {};
        let extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = require(490) /* extractId */.extractId(fingerprint);
          const obj7 = require(490) /* extractId */;
        }
        obj.old_fingerprint = extractIdResult;
        const obj5 = importDefault(675);
        obj.new_fingerprint = require(490) /* extractId */.extractId(fingerprint);
        obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
        const Storage = require(587) /* Storage */.Storage;
        const result = Storage.set(fingerprint, fingerprint);
        const obj8 = require(490) /* extractId */;
      } else {
        fetchFingerprint();
      }
    } else {
      let tmp2 = null != fingerprint;
      if (tmp2) {
        tmp2 = fingerprint !== fingerprint;
      }
      if (tmp2) {
        obj = importDefault(675);
        obj = { fingerprint: require(490) /* extractId */.extractId(fingerprint) };
        const obj3 = require(490) /* extractId */;
        obj.dropped_fingerprint = require(490) /* extractId */.extractId(fingerprint);
        obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
        const obj4 = require(490) /* extractId */;
      }
    }
  },
  INSTALLATION_ID: handleInstallationId,
  REGISTER_SUCCESS: function handleRegisterSuccess(token) {
    setAuthToken(token.token);
    clearFingerprint();
  },
  FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
    const FORGOT_PASSWORD = LoginStates.FORGOT_PASSWORD;
  },
  FORGOT_PASSWORD_SENT: function handleForgotPasswordSent() {
    const NONE = LoginStates.NONE;
  },
  UPDATE_TOKEN: function handleUpdateToken(arg0) {
    let token;
    let userId;
    ({ token, userId } = arg0);
    logInfo("handleUpdateToken called");
    setAuthToken(token, userId);
    clearFingerprint();
  },
  EXPERIMENTS_FETCH(withGuildExperiments) {
    loadExperiments(withGuildExperiments);
  },
  CURRENT_USER_UPDATE: function handleUserUpdate(user) {
    user = user.user;
    const id = user.id;
    if (undefined !== user.authenticator_types) {
      const authenticator_types = user.authenticator_types;
    }
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(user_id_cache, user.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: handleAgeGateUnderage,
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    let c39 = null;
    const NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => outer1_0(outer1_3[12]).transitionTo(outer1_14.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    let c33 = "";
    let c34 = false;
    let c35 = null;
    let c40 = false;
    let c17 = null;
    if (error instanceof importDefault(4030)) {
      if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
        let NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
      obj = require(9200) /* getAuthenticationErrorsFromAPIError */;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  PASSWORDLESS_START: function handlePasswordlessStart() {
    let c40 = true;
  }
}, require("dispatcher").DispatchBand.Early);
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let analyticsToken;
    let apexExperiments;
    let auth;
    let authSessionIdHash;
    let email;
    let id;
    let sessionId;
    let staticAuthSessionId;
    let user;
    let username;
    ({ user, auth, apexExperiments } = arg0);
    ({ sessionId, authSessionIdHash, analyticsToken, staticAuthSessionId } = arg0);
    logInfo("handleConnectionOpen called");
    let obj = importDefault(1184);
    ({ id, username, email } = user);
    let tmp2;
    if (null != email) {
      tmp2 = email;
    }
    obj.setUser(id, username, tmp2, importDefault(11454)(user));
    setAnalyticsToken(analyticsToken);
    id = user.id;
    if (undefined !== auth) {
      const authenticator_types = auth.authenticator_types;
    }
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(user_id_cache, user.id);
    let installation;
    if (null != apexExperiments) {
      installation = apexExperiments.installation;
    }
    if (null != installation) {
      obj = { type: "INSTALLATION_ID", installation: apexExperiments.installation };
      handleInstallationId(obj);
    }
    const Storage2 = require(587) /* Storage */.Storage;
    if (Storage2.get(constants.APP_FIRST_LOGIN, true)) {
      obj = { platform: constants2.IOS };
      importDefault(675).track(constants.APP_FIRST_LOGIN, obj);
      const Storage3 = require(587) /* Storage */.Storage;
      const result1 = Storage3.set(constants.APP_FIRST_LOGIN, false);
      const obj3 = importDefault(675);
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    let analyticsToken;
    let email;
    let id;
    let sessionId;
    let token;
    let user;
    let username;
    ({ user, analyticsToken } = arg0);
    ({ sessionId, token } = arg0);
    ({ id, username, email } = user);
    let tmp;
    if (null != email) {
      tmp = email;
    }
    importDefault(1184).setUser(id, username, tmp, importDefault(11454)(user));
    setAuthToken(token, user.id);
    if (null != analyticsToken) {
      setAnalyticsToken(analyticsToken);
    }
    clearFingerprint();
    id = user.id;
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(user_id_cache, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    code = code.code;
    logInfo("handleConnectionClosed called with code " + code + ".");
    if (4004 === code) {
      if (c31) {
        handleAgeGateUnderage();
      } else {
        let obj = importDefault(675);
        obj = {};
        const Storage = require(587) /* Storage */.Storage;
        obj.user_id = Storage.get(user_id_cache);
        obj.track(constants.APP_USER_DEAUTHENTICATED, obj);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => outer1_0(outer1_3[12]).transitionTo(outer1_14.DEFAULT_LOGGED_OUT));
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
  },
  LOGIN: function handleLogin(arg0) {
    const LOGGING_IN = LoginStates.LOGGING_IN;
    let tmp2 = c41;
    if (!c41) {
      tmp2 = true === tmp;
    }
    c41 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    const NONE = LoginStates.NONE;
    setAuthToken(token.token);
    clearFingerprint();
    let c33 = "";
    let c34 = false;
    let c35 = null;
    let c17 = null;
    updateMFAMethods();
    let c40 = false;
  },
  LOGIN_FAILURE: function handleLoginFailure(error) {
    let c33 = "";
    let c34 = false;
    let c35 = null;
    let c17 = null;
    updateMFAMethods();
    if (null != obj.getAuthenticationErrorsFromV6OrEarlierAPIError(error.error).date_of_birth) {
      let NONE = LoginStates.LOGIN_AGE_GATE;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  LOGIN_MFA_STEP: function handleLoginMFAStep(arg0) {
    let ticket;
    let webauthn;
    ({ ticket, webauthn } = arg0);
    if (null != ticket) {
      let c34 = tmp;
      let tmp5 = null;
      if (null != webauthn) {
        tmp5 = webauthn;
      }
      let c35 = tmp5;
      let c37 = tmp2;
      let c36 = tmp3;
      let closure_17 = tmp4;
      updateMFAMethods();
    }
    const MFA_STEP = LoginStates.MFA_STEP;
  },
  LOGIN_MFA: function handleLoginMFA() {
    const LOGGING_IN_MFA = LoginStates.LOGGING_IN_MFA;
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function handleLoginAccountPendingDeletion(credentials) {
    let closure_30 = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
    credentials = credentials.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
    const ACCOUNT_DISABLED = LoginStates.ACCOUNT_DISABLED;
    credentials = credentials.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
    let closure_30 = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
    credentials = credentials.credentials;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
    const PHONE_IP_AUTHORIZATION = LoginStates.PHONE_IP_AUTHORIZATION;
    credentials = credentials.credentials;
  },
  LOGIN_RESET: function handleLoginReset(isMultiAccount) {
    const NONE = LoginStates.NONE;
    let c33 = "";
    let c34 = false;
    let c35 = null;
    let c17 = null;
    let c16 = null;
    if (!isMultiAccount.isMultiAccount) {
      updateMFAMethods();
      removeAuthToken();
      fetchFingerprint(false);
    }
  },
  LOGIN_STATUS_RESET: function handleLoginStatusReset() {
    const NONE = LoginStates.NONE;
  },
  LOGIN_SUSPENDED_USER: function handleSuspendedUserLogin(suspendedUserToken) {
    let c40 = false;
    suspendedUserToken = suspendedUserToken.suspendedUserToken;
    setImmediate(() => outer1_0(outer1_3[12]).transitionTo(outer1_14.ACCOUNT_STANDING));
  },
  LOGOUT: handleLogout,
  FINGERPRINT: function handleFingerprint(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (null == fingerprint) {
      if (null != fingerprint) {
        let obj = {};
        let extractIdResult = null;
        if (null != fingerprint) {
          extractIdResult = require(490) /* extractId */.extractId(fingerprint);
          const obj7 = require(490) /* extractId */;
        }
        obj.old_fingerprint = extractIdResult;
        const obj5 = importDefault(675);
        obj.new_fingerprint = require(490) /* extractId */.extractId(fingerprint);
        obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
        const Storage = require(587) /* Storage */.Storage;
        const result = Storage.set(fingerprint, fingerprint);
        const obj8 = require(490) /* extractId */;
      } else {
        fetchFingerprint();
      }
    } else {
      let tmp2 = null != fingerprint;
      if (tmp2) {
        tmp2 = fingerprint !== fingerprint;
      }
      if (tmp2) {
        obj = importDefault(675);
        obj = { fingerprint: require(490) /* extractId */.extractId(fingerprint) };
        const obj3 = require(490) /* extractId */;
        obj.dropped_fingerprint = require(490) /* extractId */.extractId(fingerprint);
        obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
        const obj4 = require(490) /* extractId */;
      }
    }
  },
  INSTALLATION_ID: handleInstallationId,
  REGISTER_SUCCESS: function handleRegisterSuccess(token) {
    setAuthToken(token.token);
    clearFingerprint();
  },
  FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
    const FORGOT_PASSWORD = LoginStates.FORGOT_PASSWORD;
  },
  FORGOT_PASSWORD_SENT: function handleForgotPasswordSent() {
    const NONE = LoginStates.NONE;
  },
  UPDATE_TOKEN: function handleUpdateToken(arg0) {
    let token;
    let userId;
    ({ token, userId } = arg0);
    logInfo("handleUpdateToken called");
    setAuthToken(token, userId);
    clearFingerprint();
  },
  EXPERIMENTS_FETCH(withGuildExperiments) {
    loadExperiments(withGuildExperiments);
  },
  CURRENT_USER_UPDATE: function handleUserUpdate(user) {
    user = user.user;
    const id = user.id;
    if (undefined !== user.authenticator_types) {
      const authenticator_types = user.authenticator_types;
    }
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set(user_id_cache, user.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: handleAgeGateUnderage,
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    let c39 = null;
    const NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => outer1_0(outer1_3[12]).transitionTo(outer1_14.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    let c33 = "";
    let c34 = false;
    let c35 = null;
    let c40 = false;
    let c17 = null;
    if (error instanceof importDefault(4030)) {
      if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
        let NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
      obj = require(9200) /* getAuthenticationErrorsFromAPIError */;
    } else {
      NONE = LoginStates.NONE;
    }
  },
  PASSWORDLESS_START: function handlePasswordlessStart() {
    let c40 = true;
  }
};
result = require("_possibleConstructorReturn").fileFinishedImporting("stores/AuthenticationStore.tsx");

export default tmp6;
