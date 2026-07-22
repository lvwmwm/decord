// Module ID: 1194
// Function ID: 13657
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1194 (_isNativeReflectConstruct)
let EXISTING_USER_AGE_GATE_MODAL_KEY;
let LoginStates;
let NEW_USER_AGE_GATE_MODAL_KEY;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function logInfo(arg0) {
  let obj = importAll(dependencyMap[10]);
  const Storage = arg1(dependencyMap[11]).Storage;
  obj = { tokenManagerHasToken: null != obj.getToken(), storageHasToken: null != Storage.get(closure_15) };
  importDefaultResult.verbose(arg0, obj);
}
function readInstallation() {
  const Storage = arg1(dependencyMap[11]).Storage;
  let value = Storage.get(closure_20);
  if (null != value) {
    if (value.length > 0) {
      return value;
    }
  }
  const Storage2 = arg1(dependencyMap[11]).Storage;
  value = Storage2.get("analytics_installation");
  let tmp = null;
  if (null != value) {
    tmp = null;
    if (value.length > 0) {
      const Storage3 = arg1(dependencyMap[11]).Storage;
      const result = Storage3.set(closure_20, value);
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
  const Storage = arg1(dependencyMap[11]).Storage;
  let closure_26 = Storage.get(closure_19);
  let closure_28 = readInstallation();
  if (null != closure_38) {
    return closure_38;
  } else {
    if (null != closure_26) {
      let token = closure_26;
    } else {
      let obj = importAll(dependencyMap[10]);
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
    const obj2 = arg1(dependencyMap[12]);
  }
}
function loadExperiments(withGuildExperiments) {
  let obj = {};
  const superPropertiesBase64 = importDefault(dependencyMap[13]).getSuperPropertiesBase64();
  if (null != superPropertiesBase64) {
    obj.X-Super-Properties = superPropertiesBase64;
  }
  if (null != closure_26) {
    obj.X-Fingerprint = closure_26;
  }
  if (null != closure_28) {
    obj.X-Installation-ID = closure_28;
  }
  const obj2 = importDefault(dependencyMap[13]);
  obj = { withGuildExperiments: withGuildExperiments.withGuildExperiments, headers: obj };
  obj = {};
  const obj3 = arg1(dependencyMap[14]);
  obj.location = arg1(dependencyMap[12]).getFingerprintLocation();
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
      let obj = callback2(closure_3[15]);
      obj = { type: "INSTALLATION_ID", installation };
      obj.dispatch(obj);
    }
    if (fingerprint) {
      obj = { type: "FINGERPRINT", fingerprint };
      callback2(closure_3[15]).dispatch(obj);
      const obj3 = callback2(closure_3[15]);
    }
    callback2(closure_3[15]).dispatch({ type: "EXPERIMENTS_FETCH_SUCCESS", fingerprint, experiments: assignments, guildExperiments: guild_experiments });
    let closure_38 = null;
    const obj5 = callback2(closure_3[15]);
    callback(closure_3[16]).onExperimentsLoaded();
  }, () => {
    let closure_38 = null;
    callback2(closure_3[15]).dispatch({ type: "EXPERIMENTS_FETCH_FAILURE" });
  });
  let closure_38 = nextPromise;
  return nextPromise;
}
function clearFingerprint() {
  let closure_27 = closure_26;
  closure_26 = null;
  const Storage = arg1(dependencyMap[11]).Storage;
  Storage.remove(closure_19);
}
function setAuthToken(token, id) {
  logInfo("setAuthToken called.");
  let tmp2 = null != id;
  if (tmp2) {
    tmp2 = id === closure_22;
  }
  if (!tmp2) {
    importAll(dependencyMap[10]).removeAnalyticsToken();
    const obj = importAll(dependencyMap[10]);
  }
  importAll(dependencyMap[10]).setToken(token, id);
}
function setAnalyticsToken(arg0) {
  let closure_29 = arg0;
  importAll(dependencyMap[10]).setAnalyticsToken(arg0);
}
function removeAuthToken() {
  logInfo("removeAuthToken called.");
  importAll(dependencyMap[10]).removeAnalyticsToken();
  const obj = importAll(dependencyMap[10]);
  return importAll(dependencyMap[10]).removeToken();
}
function updateMFAMethods() {
  const items = [];
  if (null != closure_35) {
    let obj = { type: "webauthn", challenge: closure_35 };
    items.push(obj);
  }
  if (closure_36) {
    obj = { type: "totp" };
    items.push(obj);
  }
  if (closure_37) {
    obj = { type: "backup" };
    items.push(obj);
  }
  if (closure_34) {
    const obj1 = { type: "sms" };
    items.push(obj1);
  }
  let closure_42 = items;
}
function handleInstallationId(installation) {
  installation = installation.installation;
  if (null != length) {
    if (length.length > 0) {
      return false;
    }
  }
  if (obj.canUseInstallationId()) {
    const Storage = arg1(dependencyMap[11]).Storage;
    const result = Storage.set(closure_20, installation);
  }
}
function handleAgeGateUnderage() {
  let closure_31 = true;
  handleLogout();
  importDefault(dependencyMap[15]).wait(() => {
    callback(closure_3[12]).transitionTo(constants.REGISTER);
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
  const PersistedStore = importDefault(dependencyMap[23]).PersistedStore;
  const obj = { omit: [] };
  let str = "all";
  if (null != isSwitchingAccount) {
    str = "all";
    if (isSwitchingAccount.isSwitchingAccount) {
      str = "user-data-only";
    }
  }
  obj.type = str;
  PersistedStore.clearAll(obj);
  const Store = importDefault(dependencyMap[23]).Store;
  const result = Store.removeAllConditionalListeners();
  closure_10.clearAll();
  const tmp2 = removeAuthToken();
  const tmp4 = null != isSwitchingAccount && isSwitchingAccount;
  importDefault(dependencyMap[21]).clearUser();
  const Storage = arg1(dependencyMap[11]).Storage;
  Storage.remove(closure_21);
  let closure_22 = null;
  let closure_23 = null;
  if (null != isSwitchingAccount) {
    if (isSwitchingAccount.isSwitchingAccount) {
      let NONE = LoginStates.LOGGING_IN;
    }
    let closure_33 = "";
    let closure_35 = null;
    let closure_34 = false;
    let closure_40 = false;
    let closure_41 = false;
    updateMFAMethods();
  }
  NONE = LoginStates.NONE;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[7]);
({ AnalyticEvents: closure_11, LoginStates } = tmp2);
({ Platforms: closure_13, Routes: closure_14, TOKEN_KEY: closure_15 } = tmp2);
({ EXISTING_USER_AGE_GATE_MODAL_KEY, NEW_USER_AGE_GATE_MODAL_KEY } = arg1(dependencyMap[8]));
let importDefaultResult = importDefault(dependencyMap[9]);
importDefaultResult = new importDefaultResult("AuthenticationStore");
let closure_19 = "fingerprint";
let closure_20 = "analytics_installation";
let closure_21 = "user_id_cache";
let closure_22 = null;
let closure_23 = null;
let closure_24 = null;
let closure_25 = null;
let closure_26 = null;
let closure_27 = null;
let closure_28 = null;
let closure_29 = null;
const NONE = LoginStates.NONE;
let closure_31 = false;
let closure_32 = [];
let closure_33 = "";
let closure_34 = false;
let closure_35 = null;
let closure_36 = false;
let closure_37 = false;
let closure_38 = null;
let closure_39 = null;
let closure_40 = false;
let closure_41 = false;
let closure_42 = [];
let tmp6 = (Store) => {
  class AuthenticationStore {
    constructor() {
      self = this;
      tmp = closure_4(this, AuthenticationStore);
      obj = closure_7(AuthenticationStore);
      tmp2 = closure_6;
      if (closure_43()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = AuthenticationStore;
  callback2(AuthenticationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      function fireApex() {
        const installationExperiments = callback(closure_3[24]).fetchInstallationExperiments(null);
      }
      const Storage = AuthenticationStore(closure_3[11]).Storage;
      let closure_22 = Storage.get(closure_21);
      const length = callback6();
      if (null == obj.getToken()) {
        let tmp2 = null == length;
        if (!tmp2) {
          tmp2 = 0 === length.length;
        }
        if (tmp2) {
          promise.then(fireApex, fireApex);
        }
        const promise = callback7();
      }
      self.addChangeListener(() => callback(closure_3[25]).setClientState(closure_22));
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getLoginStatus",
    value() {
      return closure_30;
    }
  };
  items[1] = obj;
  obj = {
    key: "getId",
    value() {
      return closure_22;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSessionId",
    value() {
      return closure_23;
    }
  };
  items[4] = {
    key: "getAuthSessionIdHash",
    value() {
      return closure_24;
    }
  };
  items[5] = {
    key: "getStaticAuthSessionId",
    value() {
      return closure_25;
    }
  };
  items[6] = {
    key: "getToken",
    value() {
      return AuthenticationStore(closure_3[26]).getToken();
    }
  };
  items[7] = {
    key: "isAuthenticated",
    value() {
      return AuthenticationStore(closure_3[26]).isAuthenticated();
    }
  };
  items[8] = {
    key: "getFingerprint",
    value() {
      return closure_26;
    }
  };
  items[9] = {
    key: "getInstallationForTracking",
    value() {
      let tmp = null;
      if (obj.canUseInstallationId()) {
        tmp = closure_28;
      }
      return tmp;
    }
  };
  items[10] = {
    key: "getAnalyticsToken",
    value() {
      if (null != closure_29) {
        let analyticsToken = closure_29;
      } else {
        analyticsToken = callback2(closure_3[10]).getAnalyticsToken();
        const obj = callback2(closure_3[10]);
      }
      return analyticsToken;
    }
  };
  items[11] = {
    key: "getMFATicket",
    value() {
      return closure_33;
    }
  };
  items[12] = {
    key: "getMFAMethods",
    value() {
      return closure_42;
    }
  };
  items[13] = {
    key: "getLoginInstanceId",
    value() {
      return closure_17;
    }
  };
  items[14] = {
    key: "hasTOTPEnabled",
    value() {
      return closure_32.includes(AuthenticationStore(closure_3[27]).AuthenticatorType.TOTP);
    }
  };
  items[15] = {
    key: "getCredentials",
    value() {
      if (null == closure_16) {
        const _Error = Error;
        const error = new Error("no credentials");
        throw error;
      } else {
        return closure_16;
      }
    }
  };
  items[16] = {
    key: "allowLogoutRedirect",
    value() {
      return !closure_31;
    }
  };
  items[17] = {
    key: "getSuspendedUserToken",
    value() {
      return closure_39;
    }
  };
  items[18] = {
    key: "getIsPasswordlessActive",
    value() {
      return closure_40;
    }
  };
  items[19] = {
    key: "attemptedPasswordLogin",
    value() {
      return closure_41;
    }
  };
  return callback(AuthenticationStore, items);
}(importDefault(dependencyMap[23]).Store);
tmp6.displayName = "AuthenticationStore";
const tmp3 = arg1(dependencyMap[8]);
tmp6 = new tmp6(importDefault(dependencyMap[15]), {
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
    let obj = importDefault(dependencyMap[21]);
    ({ id, username, email } = user);
    let tmp2;
    if (null != email) {
      tmp2 = email;
    }
    obj.setUser(id, username, tmp2, importDefault(dependencyMap[22])(user));
    let closure_23 = sessionId;
    let closure_24 = authSessionIdHash;
    let closure_25 = staticAuthSessionId;
    setAnalyticsToken(analyticsToken);
    const id2 = user.id;
    if (undefined !== auth) {
      const authenticator_types = auth.authenticator_types;
    }
    const Storage = arg1(dependencyMap[11]).Storage;
    const result = Storage.set(closure_21, user.id);
    let installation;
    if (null != apexExperiments) {
      installation = apexExperiments.installation;
    }
    if (null != installation) {
      obj = { type: "INSTALLATION_ID", installation: apexExperiments.installation };
      handleInstallationId(obj);
    }
    const Storage2 = arg1(dependencyMap[11]).Storage;
    if (Storage2.get(constants.APP_FIRST_LOGIN, true)) {
      obj = { platform: constants2.IOS };
      importDefault(dependencyMap[13]).track(constants.APP_FIRST_LOGIN, obj);
      const Storage3 = arg1(dependencyMap[11]).Storage;
      const result1 = Storage3.set(constants.APP_FIRST_LOGIN, false);
      const obj3 = importDefault(dependencyMap[13]);
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
    importDefault(dependencyMap[21]).setUser(id, username, tmp, importDefault(dependencyMap[22])(user));
    let closure_23 = sessionId;
    let closure_29 = analyticsToken;
    setAuthToken(token, user.id);
    if (null != analyticsToken) {
      setAnalyticsToken(analyticsToken);
    }
    clearFingerprint();
    const id2 = user.id;
    const Storage = arg1(dependencyMap[11]).Storage;
    const result = Storage.set(closure_21, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    code = code.code;
    logInfo("handleConnectionClosed called with code " + code + ".");
    if (4004 === code) {
      if (closure_31) {
        handleAgeGateUnderage();
      } else {
        let obj = importDefault(dependencyMap[13]);
        obj = {};
        const Storage = arg1(dependencyMap[11]).Storage;
        obj.user_id = Storage.get(closure_21);
        obj.track(constants.APP_USER_DEAUTHENTICATED, obj);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => callback(closure_3[12]).transitionTo(constants.DEFAULT_LOGGED_OUT));
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
    if (null != authSessionIdHash) {
      let closure_24 = authSessionIdHash;
    }
  },
  LOGIN: function handleLogin(arg0) {
    const NONE = LoginStates.LOGGING_IN;
    let tmp2 = closure_41;
    if (!closure_41) {
      tmp2 = true === tmp;
    }
    closure_41 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    const NONE = LoginStates.NONE;
    setAuthToken(token.token);
    clearFingerprint();
    let closure_33 = "";
    let closure_34 = false;
    let closure_35 = null;
    let closure_17 = null;
    updateMFAMethods();
    let closure_40 = false;
  },
  LOGIN_FAILURE: function handleLoginFailure(error) {
    let closure_33 = "";
    let closure_34 = false;
    let closure_35 = null;
    let closure_17 = null;
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
      let closure_33 = ticket;
      let closure_34 = tmp;
      let tmp5 = null;
      if (null != webauthn) {
        tmp5 = webauthn;
      }
      let closure_35 = tmp5;
      let closure_37 = tmp2;
      let closure_36 = tmp3;
      updateMFAMethods();
    }
    const NONE = LoginStates.MFA_STEP;
  },
  LOGIN_MFA: function handleLoginMFA() {
    const NONE = LoginStates.LOGGING_IN_MFA;
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function handleLoginAccountPendingDeletion(credentials) {
    let closure_30 = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
    credentials = credentials.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
    const NONE = LoginStates.ACCOUNT_DISABLED;
    credentials = credentials.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
    let closure_30 = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
    credentials = credentials.credentials;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
    const NONE = LoginStates.PHONE_IP_AUTHORIZATION;
    credentials = credentials.credentials;
  },
  LOGIN_RESET: function handleLoginReset(isMultiAccount) {
    const NONE = LoginStates.NONE;
    let closure_33 = "";
    let closure_34 = false;
    let closure_35 = null;
    let closure_17 = null;
    let closure_16 = null;
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
    let closure_40 = false;
    suspendedUserToken = suspendedUserToken.suspendedUserToken;
    setImmediate(() => callback(closure_3[12]).transitionTo(constants.ACCOUNT_STANDING));
  },
  LOGOUT: handleLogout,
  FINGERPRINT: function handleFingerprint(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (null == closure_26) {
      if (null != fingerprint) {
        let obj = {};
        let extractIdResult = null;
        if (null != closure_27) {
          extractIdResult = arg1(dependencyMap[19]).extractId(closure_27);
          const obj7 = arg1(dependencyMap[19]);
        }
        obj.old_fingerprint = extractIdResult;
        const obj5 = importDefault(dependencyMap[13]);
        obj.new_fingerprint = arg1(dependencyMap[19]).extractId(fingerprint);
        obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
        closure_26 = fingerprint;
        closure_27 = fingerprint;
        const Storage = arg1(dependencyMap[11]).Storage;
        const result = Storage.set(closure_19, closure_26);
        const obj8 = arg1(dependencyMap[19]);
      } else {
        fetchFingerprint();
      }
    } else {
      let tmp2 = null != fingerprint;
      if (tmp2) {
        tmp2 = closure_26 !== fingerprint;
      }
      if (tmp2) {
        obj = importDefault(dependencyMap[13]);
        obj = { fingerprint: arg1(dependencyMap[19]).extractId(closure_26) };
        const obj3 = arg1(dependencyMap[19]);
        obj.dropped_fingerprint = arg1(dependencyMap[19]).extractId(fingerprint);
        obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
        const obj4 = arg1(dependencyMap[19]);
      }
    }
  },
  INSTALLATION_ID: handleInstallationId,
  REGISTER_SUCCESS: function handleRegisterSuccess(token) {
    setAuthToken(token.token);
    clearFingerprint();
  },
  FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
    const NONE = LoginStates.FORGOT_PASSWORD;
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
    const Storage = arg1(dependencyMap[11]).Storage;
    const result = Storage.set(closure_21, user.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: handleAgeGateUnderage,
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    let closure_39 = null;
    const NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => callback(closure_3[12]).transitionTo(constants.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    let closure_33 = "";
    let closure_34 = false;
    let closure_35 = null;
    let closure_40 = false;
    let closure_17 = null;
    if (error instanceof importDefault(dependencyMap[18])) {
      if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
        let NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
      const obj = arg1(dependencyMap[17]);
    } else {
      NONE = LoginStates.NONE;
    }
  },
  PASSWORDLESS_START: function handlePasswordlessStart() {
    let closure_40 = true;
  }
}, arg1(dependencyMap[15]).DispatchBand.Early);
const importDefaultResult1 = importDefault(dependencyMap[15]);
const obj = {
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
    let obj = importDefault(dependencyMap[21]);
    ({ id, username, email } = user);
    let tmp2;
    if (null != email) {
      tmp2 = email;
    }
    obj.setUser(id, username, tmp2, importDefault(dependencyMap[22])(user));
    let closure_23 = sessionId;
    let closure_24 = authSessionIdHash;
    let closure_25 = staticAuthSessionId;
    setAnalyticsToken(analyticsToken);
    const id2 = user.id;
    if (undefined !== auth) {
      const authenticator_types = auth.authenticator_types;
    }
    const Storage = arg1(dependencyMap[11]).Storage;
    const result = Storage.set(closure_21, user.id);
    let installation;
    if (null != apexExperiments) {
      installation = apexExperiments.installation;
    }
    if (null != installation) {
      obj = { type: "INSTALLATION_ID", installation: apexExperiments.installation };
      handleInstallationId(obj);
    }
    const Storage2 = arg1(dependencyMap[11]).Storage;
    if (Storage2.get(constants.APP_FIRST_LOGIN, true)) {
      obj = { platform: constants2.IOS };
      importDefault(dependencyMap[13]).track(constants.APP_FIRST_LOGIN, obj);
      const Storage3 = arg1(dependencyMap[11]).Storage;
      const result1 = Storage3.set(constants.APP_FIRST_LOGIN, false);
      const obj3 = importDefault(dependencyMap[13]);
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
    importDefault(dependencyMap[21]).setUser(id, username, tmp, importDefault(dependencyMap[22])(user));
    let closure_23 = sessionId;
    let closure_29 = analyticsToken;
    setAuthToken(token, user.id);
    if (null != analyticsToken) {
      setAnalyticsToken(analyticsToken);
    }
    clearFingerprint();
    const id2 = user.id;
    const Storage = arg1(dependencyMap[11]).Storage;
    const result = Storage.set(closure_21, user.id);
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    code = code.code;
    logInfo("handleConnectionClosed called with code " + code + ".");
    if (4004 === code) {
      if (closure_31) {
        handleAgeGateUnderage();
      } else {
        let obj = importDefault(dependencyMap[13]);
        obj = {};
        const Storage = arg1(dependencyMap[11]).Storage;
        obj.user_id = Storage.get(closure_21);
        obj.track(constants.APP_USER_DEAUTHENTICATED, obj);
        handleLogout();
        const _setImmediate = setImmediate;
        setImmediate(() => callback(closure_3[12]).transitionTo(constants.DEFAULT_LOGGED_OUT));
      }
    }
  },
  AUTH_SESSION_CHANGE: function handleAuthSessionChange(authSessionIdHash) {
    authSessionIdHash = authSessionIdHash.authSessionIdHash;
    if (null != authSessionIdHash) {
      let closure_24 = authSessionIdHash;
    }
  },
  LOGIN: function handleLogin(arg0) {
    const NONE = LoginStates.LOGGING_IN;
    let tmp2 = closure_41;
    if (!closure_41) {
      tmp2 = true === tmp;
    }
    closure_41 = tmp2;
  },
  LOGIN_SUCCESS: function handleLoginSuccess(token) {
    const NONE = LoginStates.NONE;
    setAuthToken(token.token);
    clearFingerprint();
    let closure_33 = "";
    let closure_34 = false;
    let closure_35 = null;
    let closure_17 = null;
    updateMFAMethods();
    let closure_40 = false;
  },
  LOGIN_FAILURE: function handleLoginFailure(error) {
    let closure_33 = "";
    let closure_34 = false;
    let closure_35 = null;
    let closure_17 = null;
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
      let closure_33 = ticket;
      let closure_34 = tmp;
      let tmp5 = null;
      if (null != webauthn) {
        tmp5 = webauthn;
      }
      let closure_35 = tmp5;
      let closure_37 = tmp2;
      let closure_36 = tmp3;
      updateMFAMethods();
    }
    const NONE = LoginStates.MFA_STEP;
  },
  LOGIN_MFA: function handleLoginMFA() {
    const NONE = LoginStates.LOGGING_IN_MFA;
  },
  LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION: function handleLoginAccountPendingDeletion(credentials) {
    let closure_30 = LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION;
    credentials = credentials.credentials;
  },
  LOGIN_ACCOUNT_DISABLED: function handleLoginAccountDisabled(credentials) {
    const NONE = LoginStates.ACCOUNT_DISABLED;
    credentials = credentials.credentials;
  },
  LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION: function handleLoginPasswordRecoveryPhoneVerification(credentials) {
    let closure_30 = LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION;
    credentials = credentials.credentials;
  },
  LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED: function handleLoginPhoneIPAuthorizationRequired(credentials) {
    const NONE = LoginStates.PHONE_IP_AUTHORIZATION;
    credentials = credentials.credentials;
  },
  LOGIN_RESET: function handleLoginReset(isMultiAccount) {
    const NONE = LoginStates.NONE;
    let closure_33 = "";
    let closure_34 = false;
    let closure_35 = null;
    let closure_17 = null;
    let closure_16 = null;
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
    let closure_40 = false;
    suspendedUserToken = suspendedUserToken.suspendedUserToken;
    setImmediate(() => callback(closure_3[12]).transitionTo(constants.ACCOUNT_STANDING));
  },
  LOGOUT: handleLogout,
  FINGERPRINT: function handleFingerprint(fingerprint) {
    fingerprint = fingerprint.fingerprint;
    if (null == closure_26) {
      if (null != fingerprint) {
        let obj = {};
        let extractIdResult = null;
        if (null != closure_27) {
          extractIdResult = arg1(dependencyMap[19]).extractId(closure_27);
          const obj7 = arg1(dependencyMap[19]);
        }
        obj.old_fingerprint = extractIdResult;
        const obj5 = importDefault(dependencyMap[13]);
        obj.new_fingerprint = arg1(dependencyMap[19]).extractId(fingerprint);
        obj5.track(constants.USER_FINGERPRINT_CHANGED, obj);
        closure_26 = fingerprint;
        closure_27 = fingerprint;
        const Storage = arg1(dependencyMap[11]).Storage;
        const result = Storage.set(closure_19, closure_26);
        const obj8 = arg1(dependencyMap[19]);
      } else {
        fetchFingerprint();
      }
    } else {
      let tmp2 = null != fingerprint;
      if (tmp2) {
        tmp2 = closure_26 !== fingerprint;
      }
      if (tmp2) {
        obj = importDefault(dependencyMap[13]);
        obj = { fingerprint: arg1(dependencyMap[19]).extractId(closure_26) };
        const obj3 = arg1(dependencyMap[19]);
        obj.dropped_fingerprint = arg1(dependencyMap[19]).extractId(fingerprint);
        obj.track(constants.EXTERNAL_FINGERPRINT_DROPPED, obj);
        const obj4 = arg1(dependencyMap[19]);
      }
    }
  },
  INSTALLATION_ID: handleInstallationId,
  REGISTER_SUCCESS: function handleRegisterSuccess(token) {
    setAuthToken(token.token);
    clearFingerprint();
  },
  FORGOT_PASSWORD_REQUEST: function handleForgotPasswordRequest() {
    const NONE = LoginStates.FORGOT_PASSWORD;
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
    const Storage = arg1(dependencyMap[11]).Storage;
    const result = Storage.set(closure_21, user.id);
  },
  AGE_GATE_LOGOUT_UNDERAGE_NEW_USER: handleAgeGateUnderage,
  CLOSE_SUSPENDED_USER: function handleSuspendedUserClosed() {
    let closure_39 = null;
    const NONE = LoginStates.NONE;
    handleLogout();
    setImmediate(() => callback(closure_3[12]).transitionTo(constants.DEFAULT_LOGGED_OUT));
  },
  PASSWORDLESS_FAILURE: function handlePasswordlessFailure(error) {
    error = error.error;
    let closure_33 = "";
    let closure_34 = false;
    let closure_35 = null;
    let closure_40 = false;
    let closure_17 = null;
    if (error instanceof importDefault(dependencyMap[18])) {
      if (null != obj.getAuthenticationErrorsFromAPIError(error).date_of_birth) {
        let NONE = LoginStates.LOGIN_AGE_GATE;
      } else {
        NONE = LoginStates.NONE;
      }
      const obj = arg1(dependencyMap[17]);
    } else {
      NONE = LoginStates.NONE;
    }
  },
  PASSWORDLESS_START: function handlePasswordlessStart() {
    let closure_40 = true;
  }
};
const result = arg1(dependencyMap[28]).fileFinishedImporting("stores/AuthenticationStore.tsx");

export default tmp6;
