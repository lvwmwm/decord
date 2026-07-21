// Module ID: 5588
// Function ID: 47398
// Name: dispatchLogout
// Dependencies: []

// Module 5588 (dispatchLogout)
function dispatchLogout(arg0) {
  let obj = importDefault(dependencyMap[7]);
  const result = obj.clearNavigationHistory();
  obj = { type: "LOGOUT" };
  const merged = Object.assign(arg0);
  const obj3 = importDefault(dependencyMap[8]);
  importDefault(dependencyMap[8]).dispatch(obj).catch((error) => {
    closure_16.error("Error while dispatching LOGOUT", error);
    if (null != DiscordErrors) {
      DiscordErrors.softCrash(error);
    }
    throw error;
  });
}
function handleLogout(source, CHANNELResult) {
  let DEFAULT_LOGGED_OUT = CHANNELResult;
  if (CHANNELResult === undefined) {
    DEFAULT_LOGGED_OUT = constants.DEFAULT_LOGGED_OUT;
  }
  dispatchLogout();
  if (null != DEFAULT_LOGGED_OUT) {
    const rootNavigationRef = CHANNELResult(dependencyMap[9]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      importDefault(dependencyMap[11]).popAll();
      let obj = { index: 0 };
      obj = { name: "auth" };
      const items = [obj];
      obj.routes = items;
      rootNavigationRef.reset(obj);
      const obj3 = importDefault(dependencyMap[11]);
    } else {
      obj = CHANNELResult(dependencyMap[10]);
      const obj1 = { source };
      obj.transitionTo(DEFAULT_LOGGED_OUT, obj1);
    }
    const obj6 = CHANNELResult(dependencyMap[9]);
  }
}
let closure_5 = importDefault(dependencyMap[0]);
const setPromoEmailConsentState = arg1(dependencyMap[1]).setPromoEmailConsentState;
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
({ Endpoints: closure_9, DEVICE_TOKEN: closure_10, DEVICE_VOIP_TOKEN: closure_11, AbortCodes: closure_12, Routes: closure_13 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_14, getDevicePushProvider: closure_15 } = arg1(dependencyMap[5]));
let importDefaultResult = importDefault(dependencyMap[6]);
importDefaultResult = new importDefaultResult("AuthenticationActionCreators");
let closure_17 = null;
let obj = { MFA: "MFA", SUCCESS: "SUCCESS" };
obj = {
  startSession(arg0) {
    const arg1 = arg0;
    importDefault(dependencyMap[8]).wait(() => {
      let obj = callback(closure_3[8]);
      obj = { type: "START_SESSION", token: arg0 };
      obj.dispatch(obj);
    });
  },
  login(login) {
    let giftCodeSKUId;
    let invite;
    let isMultiAccount;
    let source;
    let undelete;
    const arg1 = this;
    login = login.login;
    const importDefault = login;
    const password = login.password;
    const importAll = password;
    ({ invite, isMultiAccount } = login);
    const dependencyMap = isMultiAccount;
    ({ undelete, source, giftCodeSKUId } = login);
    let obj = importDefault(dependencyMap[8]);
    obj.dispatch({});
    let obj1 = importDefault(dependencyMap[12]);
    obj = { url: closure_9.LOGIN, body: { login, password, undelete, login_source: source, gift_code_sku_id: giftCodeSKUId }, retries: 2, oldFormErrors: true };
    obj = { event: arg1(dependencyMap[13]).NetworkActionNames.USER_LOGIN };
    obj1 = {};
    let code;
    if (null != invite) {
      code = invite.code;
    }
    obj1.invite_code = code;
    obj1.is_multi_account = isMultiAccount;
    obj.properties = obj1;
    obj.trackedActionData = obj;
    if (isMultiAccount) {
      const obj2 = {};
      const obj3 = { authorization: "" };
      obj2.headers = obj3;
      let obj4 = obj2;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    obj["rejectWithError"] = arg1(dependencyMap[14]).rejectWithMigratedError();
    const obj9 = arg1(dependencyMap[14]);
    return obj1.post(obj).then((body) => {
      let backup;
      let login_instance_id;
      let mfa;
      let required_actions;
      let sms;
      let ticket;
      let totp;
      let user_id;
      let webauthn;
      body = body.body;
      const token = body.token;
      ({ mfa, sms, webauthn, ticket, backup, user_id, required_actions, totp, login_instance_id } = body);
      let obj = login(isMultiAccount[8]);
      obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
      if (mfa) {
        obj = { type: "LOGIN_MFA_STEP", ticket, sms, webauthn, totp, backup, loginInstanceId: login_instance_id };
        login(isMultiAccount[8]).dispatch(obj);
        const obj4 = login(isMultiAccount[8]);
      } else if (isMultiAccount) {
        self.switchAccountToken(token);
      } else {
        obj = { type: "LOGIN_SUCCESS", token };
        login(isMultiAccount[8]).dispatch(obj);
        const obj2 = login(isMultiAccount[8]);
      }
    }, (body) => {
      const v6OrEarlierAPIError = new self(isMultiAccount[15]).V6OrEarlierAPIError(body);
      if (null != body.body) {
        body = body.body;
        let suspended_user_token;
        if (null != body) {
          suspended_user_token = body.suspended_user_token;
        }
        if (null != suspended_user_token) {
          let obj = { type: "LOGIN_SUSPENDED_USER" };
          const body3 = body.body;
          let suspended_user_token1;
          if (null != body3) {
            suspended_user_token1 = body3.suspended_user_token;
          }
          obj.suspendedUserToken = suspended_user_token1;
          login(isMultiAccount[8]).dispatch(obj);
          throw v6OrEarlierAPIError;
        }
      }
      const body2 = body.body;
      let code;
      if (null != body2) {
        code = body2.code;
      }
      if (code === constants.ACCOUNT_SCHEDULED_FOR_DELETION) {
        if (null != password) {
          if ("" !== password) {
            obj = { type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION" };
            const obj1 = { login, password };
            obj.credentials = obj1;
            login(isMultiAccount[8]).dispatch(obj);
            const obj9 = login(isMultiAccount[8]);
          }
          throw v6OrEarlierAPIError;
        }
      }
      if (code === constants.ACCOUNT_DISABLED) {
        if (null != password) {
          if ("" !== password) {
            let obj5 = login(isMultiAccount[8]);
            let obj2 = { type: "LOGIN_ACCOUNT_DISABLED" };
            const obj3 = { login, password };
            obj2.credentials = obj3;
            obj5.dispatch(obj2);
          }
        }
      }
      if (code === constants.PHONE_VERIFICATION_REQUIRED) {
        obj2 = login(isMultiAccount[8]);
        const obj4 = { type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED" };
        obj5 = { login, password };
        obj4.credentials = obj5;
        obj2.dispatch(obj4);
      } else {
        obj = login(isMultiAccount[8]);
        const obj6 = { type: "LOGIN_FAILURE", error: v6OrEarlierAPIError };
        obj.dispatch(obj6);
      }
    });
  },
  loginMFAv2(arg0) {
    let code;
    let giftCodeSKUId;
    let loginInstanceId;
    let mfaType;
    let source;
    let ticket;
    const arg1 = this;
    ({ isMultiAccount: closure_1, loginInstanceId } = arg0);
    ({ code, ticket, source, giftCodeSKUId, mfaType } = arg0);
    let obj = importDefault(dependencyMap[12]);
    obj = { url: closure_9.LOGIN_MFA(mfaType) };
    obj = { code, ticket, login_source: source, gift_code_sku_id: giftCodeSKUId };
    if (null == loginInstanceId) {
      loginInstanceId = authStore.getLoginInstanceId();
    }
    obj.login_instance_id = loginInstanceId;
    obj.body = obj;
    obj.trackedActionData = { event: arg1(dependencyMap[13]).NetworkActionNames.USER_LOGIN_MFA };
    const obj1 = { event: arg1(dependencyMap[13]).NetworkActionNames.USER_LOGIN_MFA };
    const postResult = obj.post(obj);
    return obj.post(obj).then((body) => {
      if (callback) {
        self.switchAccountToken(body.body.token);
      } else {
        let obj = callback(closure_3[8]);
        obj = { type: "LOGIN_SUCCESS", token: body.body.token };
        obj.dispatch(obj);
      }
    }).catch((body) => {
      if (null != body.body) {
        if (null != body.body.suspended_user_token) {
          let obj = callback(closure_3[8]);
          obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: body.body.suspended_user_token };
          obj.dispatch(obj);
        }
      }
      body = body.body;
      let code;
      if (null != body) {
        code = body.code;
      }
      if (code === constants.MFA_INVALID_CODE) {
        const _Error = Error;
        const error = new Error(body.body.message);
        throw error;
      } else {
        throw body;
      }
    });
  },
  authenticatePasswordless(arg0) {
    ({ authenticateFunc: closure_0, conditionalMediationAbortController: closure_1, source: closure_2, giftCodeSKUId: closure_3, isMultiAccount: closure_4 } = arg0);
    const callback = this;
    return callback(async () => {
      if (null != lib) {
        lib.abort("Starting non-conditional mediation");
      }
      let obj = lib(closure_3[8]);
      obj.dispatch({ type: "PASSWORDLESS_START" });
      const tmp4 = yield callback(closure_3[16]).fetchWebAuthnPasswordlessChallenge();
      const obj2 = callback(closure_3[16]);
      obj = { ticket: tmp4.ticket, credential: yield closure_0(tmp4.challenge), source: closure_2, giftCodeSKUId: closure_3, isMultiAccount: closure_4 };
      yield closure_5.loginWebAuthn(obj);
    })();
  },
  loginWebAuthn(isMultiAccount) {
    let credential;
    let giftCodeSKUId;
    let source;
    let ticket;
    const arg1 = this;
    const importDefault = isMultiAccount.isMultiAccount;
    ({ ticket, credential, source, giftCodeSKUId } = isMultiAccount);
    let obj = importDefault(dependencyMap[12]);
    obj = { url: closure_9.WEBAUTHN_CONDITIONAL_UI_LOGIN, body: { credential, ticket, source, giftCodeSKUId }, retries: 1 };
    obj = { event: arg1(dependencyMap[13]).NetworkActionNames.USER_LOGIN_PASSWORDLESS };
    obj.trackedActionData = obj;
    obj.rejectWithError = true;
    const postResult = obj.post(obj);
    return obj.post(obj).then((body) => {
      let required_actions;
      let user_id;
      body = body.body;
      const token = body.token;
      ({ user_id, required_actions } = body);
      let obj = isMultiAccount(closure_3[8]);
      obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
      if (isMultiAccount) {
        self.switchAccountToken(token);
      } else {
        obj = { type: "LOGIN_SUCCESS", token };
        isMultiAccount(closure_3[8]).dispatch(obj);
        const obj2 = isMultiAccount(closure_3[8]);
      }
    }).catch((body) => {
      let aPIError = body;
      if (body instanceof self(closure_3[14]).HTTPResponseError) {
        if (null != body.body.suspended_user_token) {
          let obj = isMultiAccount(closure_3[8]);
          obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: body.body.suspended_user_token };
          obj.dispatch(obj);
        } else {
          const APIError = self(closure_3[15]).APIError;
          const prototype = APIError.prototype;
          aPIError = new APIError(body);
        }
      }
      throw aPIError;
    });
  },
  loginToken(Authorization, arg1) {
    let flag = arg1;
    arg1 = this;
    const importDefault = Authorization;
    if (arg1 === undefined) {
      flag = true;
    }
    const importAll = flag;
    importDefault(dependencyMap[8]).dispatch({ type: "LOGIN" });
    const obj = importDefault(dependencyMap[8]);
    return new Promise((arg0) => {
      const self = arg0;
      setImmediate(() => {
        let obj = callback(closure_3[8]);
        obj = { type: "LOGIN_SUCCESS", token: callback };
        obj.dispatch(obj);
        if (closure_2) {
          arg0.startSession(callback);
        }
        arg0();
      });
    });
  },
  oneTimeLogin(arg0) {
    const arg1 = arg0;
    const importDefault = this;
    return callback(async () => {
      let obj = callback2(closure_3[8]);
      obj.dispatch({ type: "LOGIN" });
      let obj1 = callback2(closure_3[12]);
      obj = { url: constants.ONE_TIME_LOGIN, body: obj, oldFormErrors: true };
      obj = { ticket: callback };
      obj1 = { event: callback(closure_3[13]).NetworkActionNames.USER_ONE_TIME_LOGIN };
      obj.trackedActionData = obj1;
      obj.rejectWithError = true;
      const token = yield obj1.post(obj).body.token;
      if (token) {
        yield closure_1.loginToken(tmp2, false);
        return token;
      } else {
        const _Error = Error;
        const error = new Error("No token in response");
        throw error;
      }
    })();
  },
  loginReset(isMultiAccount) {
    let obj = importDefault(dependencyMap[8]);
    obj = { type: "LOGIN_RESET", isMultiAccount };
    obj.dispatch(obj);
  },
  loginStatusReset() {
    importDefault(dependencyMap[8]).dispatch({ type: "LOGIN_STATUS_RESET" });
  },
  logoutInternal(arg0) {
    dispatchLogout(arg0);
  },
  logout(TTI_test, LOGIN) {
    let DEFAULT_LOGGED_OUT = LOGIN;
    LOGIN = TTI_test;
    if (LOGIN === undefined) {
      DEFAULT_LOGGED_OUT = constants.DEFAULT_LOGGED_OUT;
    }
    const importDefault = DEFAULT_LOGGED_OUT;
    const importAll = arg2;
    let obj = importDefault(dependencyMap[12]);
    obj = { url: closure_9.LOGOUT };
    obj = { provider: callback2() };
    const Storage = LOGIN(dependencyMap[18]).Storage;
    obj.token = Storage.get(closure_10);
    obj.voip_provider = closure_14;
    const Storage2 = LOGIN(dependencyMap[18]).Storage;
    obj.voip_token = Storage2.get(closure_11);
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.trackedActionData = { event: LOGIN(dependencyMap[13]).NetworkActionNames.USER_LOGOUT, properties: obj2 };
    let tmp2 = null != arg2;
    if (tmp2) {
      const obj3 = {};
      const obj4 = {};
      const token = importAll(dependencyMap[19]).getToken(arg2);
      let str = "";
      if (null != token) {
        str = token;
      }
      obj4.authorization = str;
      obj3.headers = obj4;
      tmp2 = obj3;
      const obj8 = importAll(dependencyMap[19]);
    }
    const merged = Object.assign(tmp2);
    const obj1 = { event: LOGIN(dependencyMap[13]).NetworkActionNames.USER_LOGOUT, properties: obj2 };
    obj["rejectWithError"] = LOGIN(dependencyMap[14]).rejectWithMigratedError();
    const obj9 = LOGIN(dependencyMap[14]);
    return obj.post(obj).finally(() => {
      let tmp = null != arg2;
      if (tmp) {
        tmp = arg2 !== id.getId();
      }
      if (!tmp) {
        callback(arg0, DEFAULT_LOGGED_OUT);
      }
    });
  },
  switchAccountToken(token, switchSynchronously) {
    let flag = switchSynchronously;
    const self = this;
    switchSynchronously = token;
    if (switchSynchronously === undefined) {
      flag = true;
    }
    token = authStore.getToken();
    let obj = { wasLoggedIn: null != token, tokenHasChanged: token !== token };
    importDefaultResult.log("Switching accounts", obj);
    obj = { isSwitchingAccount: true, goHomeAfterSwitching: flag };
    dispatchLogout(obj);
    return self.loginToken(token, true).then(() => {
      const tmp = arg0 === token.getToken();
      closure_16.log("Switched accounts finished", { isCorrectToken: tmp });
      return tmp;
    });
  },
  verifySSOToken(arg0) {
    let DEFAULT_LOGGED_OUT = arg1;
    const arg1 = arg0;
    if (arg1 === undefined) {
      DEFAULT_LOGGED_OUT = constants.DEFAULT_LOGGED_OUT;
    }
    const importDefault = DEFAULT_LOGGED_OUT;
    const HTTP = arg1(dependencyMap[14]).HTTP;
    const obj = { lc: null, type: null, end: null, url: closure_9.ME };
    const value = HTTP.get(obj);
    return value.catch(() => {
      callback(arg0, DEFAULT_LOGGED_OUT);
    });
  },
  verify(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      let obj = callback2(closure_3[12]);
      obj = { url: constants.VERIFY, body: obj };
      obj = { token: callback, trackedActionData: { event: callback(closure_3[13]).NetworkActionNames.USER_VERIFY } };
      const obj1 = { event: callback(closure_3[13]).NetworkActionNames.USER_VERIFY };
      obj.rejectWithError = callback(closure_3[14]).rejectWithMigratedError();
      const tmp = yield obj.post(obj);
      const obj5 = callback(closure_3[14]);
      callback2(closure_3[8]).dispatch({ type: "LOGIN_SUCCESS", token: tmp.body.token });
      return tmp.body.user_id;
    })();
  },
  authorizePayment(token) {
    let obj = importDefault(dependencyMap[12]);
    obj = { url: closure_9.AUTHORIZE_PAYMENT, body: obj };
    obj = { token, trackedActionData: { event: arg1(dependencyMap[13]).NetworkActionNames.AUTHORIZE_PAYMENT }, rejectWithError: true };
    return obj.post(obj);
  },
  authorizeIPAddress(token) {
    let obj = importDefault(dependencyMap[12]);
    obj = { url: closure_9.AUTHORIZE_IP, body: obj };
    obj = { token, trackedActionData: { event: arg1(dependencyMap[13]).NetworkActionNames.AUTHORIZE_IP }, rejectWithError: true };
    return obj.post(obj);
  },
  verifyResend() {
    let obj = importDefault(dependencyMap[12]);
    obj = { url: closure_9.VERIFY_RESEND, oldFormErrors: true };
    obj = { event: arg1(dependencyMap[13]).NetworkActionNames.USER_VERIFY_RESEND };
    obj.trackedActionData = obj;
    obj.rejectWithError = arg1(dependencyMap[14]).rejectWithMigratedError();
    return obj.post(obj);
  },
  resetPassword(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const importAll = arg2;
    return callback(async () => {
      let obj = callback2(closure_3[8]);
      obj.dispatch({ type: "LOGIN" });
      obj = { token: callback, password: callback2, source: closure_2 };
      const Storage = callback(closure_3[18]).Storage;
      let value = Storage.get(closure_10);
      const tmp4 = callback3();
      if (tmp5) {
        tmp2.push_provider = tmp4;
        tmp2.push_token = value;
      }
      const Storage2 = callback(closure_3[18]).Storage;
      value = Storage2.get(closure_11);
      if (tmp8) {
        tmp2.push_voip_provider = closure_14;
        tmp2.push_voip_token = value;
      }
      let obj2 = callback2(closure_3[12]);
      obj = { url: constants.RESET_PASSWORD, body: obj, oldFormErrors: true, trackedActionData: { event: callback(closure_3[13]).NetworkActionNames.USER_RESET_PASSWORD } };
      const obj1 = { event: callback(closure_3[13]).NetworkActionNames.USER_RESET_PASSWORD };
      const tmp5 = null != tmp4 && null != value;
      const tmp8 = null != closure_14 && null != value;
      obj.rejectWithError = callback(closure_3[14]).rejectWithMigratedError();
      const body = yield obj2.post(obj).body;
      obj2 = { result: body.mfa ? tmp11.MFA : tmp11.SUCCESS, sms: body.sms, webauthn: body.webauthn, ticket: body.ticket, token: body.token, backup: body.backup, totp: body.totp };
      return obj2;
    })();
  },
  resetPasswordMFAv2(arg0) {
    ({ method: closure_0, code: closure_1, ticket: closure_2, password: closure_3, token: closure_4, source: closure_5 } = arg0);
    return callback(async () => {
      let obj = callback2(closure_3[8]);
      obj.dispatch({ type: "LOGIN_MFA" });
      let obj1 = callback2(closure_3[12]);
      obj = { url: constants.RESET_PASSWORD, body: obj, oldFormErrors: true };
      obj = { code: callback2, ticket: closure_2, password: closure_3, token: closure_4, source: closure_5, method: callback };
      obj1 = { event: callback(closure_3[13]).NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: true } };
      obj.trackedActionData = obj1;
      obj.rejectWithError = true;
      return yield obj1.post(obj).body.token;
    })();
  },
  forgotPassword(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      let obj = callback2(closure_3[8]);
      obj.dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
      let obj1 = callback2(closure_3[12]);
      obj = { url: constants.FORGOT_PASSWORD, body: obj, oldFormErrors: true };
      obj = { login: callback };
      obj1 = { event: callback(closure_3[13]).NetworkActionNames.FORGOT_PASSWORD };
      obj.trackedActionData = obj1;
      obj.rejectWithError = callback(closure_3[14]).rejectWithMigratedError();
      const obj6 = callback(closure_3[14]);
      const tmp2 = yield obj1.post(obj);
      callback2(closure_3[8]).dispatch({ type: "FORGOT_PASSWORD_SENT" });
      return tmp2.body.method;
    })();
  },
  setFingerprint(fingerprint) {
    let obj = importDefault(dependencyMap[8]);
    obj = { type: "FINGERPRINT", fingerprint };
    obj.dispatch(obj);
  },
  getExperiments(withGuildExperiments) {
    let obj = importDefault(dependencyMap[8]);
    obj = { type: "EXPERIMENTS_FETCH", withGuildExperiments };
    obj.dispatch(obj);
  },
  getLocationMetadata() {
    if (null != closure_17) {
      let nextPromise = closure_17;
    } else {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback(closure_3[8]).dispatch({});
      }, 5000);
      const HTTP = arg1(dependencyMap[14]).HTTP;
      const obj = { url: closure_9.AUTH_LOCATION_METADATA };
      const value = HTTP.get(obj);
      nextPromise = value.then((body) => {
        clearTimeout(closure_4);
        if (null == authenticationConsentRequired.getAuthenticationConsentRequired()) {
          let consent_required;
          if (null != body) {
            body = body.body;
            if (null != body) {
              consent_required = body.consent_required;
            }
          }
          let obj = callback(closure_3[8]);
          obj = { type: "SET_CONSENT_REQUIRED", consentRequired: null == consent_required || consent_required };
          obj.dispatch(obj);
          const tmp3 = null == consent_required || consent_required;
        }
        obj = { type: "SET_LOCATION_METADATA" };
        let country_code;
        if (null != body) {
          const body2 = body.body;
          if (null != body2) {
            country_code = body2.country_code;
          }
        }
        let tmp8;
        if (null != country_code) {
          tmp8 = country_code;
        }
        obj.countryCode = tmp8;
        callback(closure_3[8]).dispatch(obj);
        let closure_17 = null;
        let prop;
        if (null != body) {
          const body3 = body.body;
          if (null != body3) {
            prop = body3.promotional_email_opt_in;
          }
        }
        if (null != prop) {
          ({ required: obj5.required, pre_checked: obj5.checked, pre_checked: obj5.preChecked } = body.body.promotional_email_opt_in);
          callback2({});
          const obj1 = {};
        }
      }, () => {
        clearTimeout(closure_4);
        callback(closure_3[8]).dispatch({});
        let closure_17 = null;
      });
      closure_17 = nextPromise;
    }
    return nextPromise;
  },
  closeSuspendedUser() {
    importDefault(dependencyMap[8]).dispatch({ type: "CLOSE_SUSPENDED_USER" });
  }
};
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("actions/AuthenticationActionCreators.tsx");

export default obj;
export const PasswordResetResult = obj;
