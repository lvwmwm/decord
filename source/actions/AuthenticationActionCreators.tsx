// Module ID: 5588
// Function ID: 47434
// Name: dispatchLogout
// Dependencies: [5, 5589, 1194, 5590, 653, 5591, 3, 4124, 686, 3982, 1198, 4337, 4942, 480, 507, 4029, 5592, 5593, 587, 684, 2]

// Module 5588 (dispatchLogout)
import closure_5 from "str2";
import { setPromoEmailConsentState } from "setPromoEmailConsentState";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "_isNativeReflectConstruct";
import str2 from "str2";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_9;
const require = arg1;
function dispatchLogout(arg0) {
  let obj = importDefault(4124);
  const result = obj.clearNavigationHistory();
  obj = { type: "LOGOUT" };
  const merged = Object.assign(arg0);
  const obj3 = importDefault(686);
  importDefault(686).dispatch(obj).catch((error) => {
    outer1_16.error("Error while dispatching LOGOUT", error);
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
    const rootNavigationRef = require(3982) /* getRootNavigationRef */.getRootNavigationRef();
    if (null != rootNavigationRef) {
      importDefault(4337).popAll();
      let obj = { index: 0 };
      obj = { name: "auth" };
      const items = [obj];
      obj.routes = items;
      rootNavigationRef.reset(obj);
      const obj3 = importDefault(4337);
    } else {
      obj = require(1198) /* shouldNavigate */;
      const obj1 = { source };
      obj.transitionTo(DEFAULT_LOGGED_OUT, obj1);
    }
    const obj6 = require(3982) /* getRootNavigationRef */;
  }
}
({ Endpoints: closure_9, DEVICE_TOKEN: closure_10, DEVICE_VOIP_TOKEN: closure_11, AbortCodes: closure_12, Routes: closure_13 } = ME);
({ DEVICE_PUSH_VOIP_PROVIDER: closure_14, getDevicePushProvider: closure_15 } = require("str2"));
importDefaultResult = new importDefaultResult("AuthenticationActionCreators");
let c17 = null;
let obj = { MFA: "MFA", SUCCESS: "SUCCESS" };
obj = {
  startSession(arg0) {
    let closure_0 = arg0;
    importDefault(686).wait(() => {
      let obj = outer1_1(outer1_3[8]);
      obj = { type: "START_SESSION", token: closure_0 };
      obj.dispatch(obj);
    });
  },
  login(login) {
    let giftCodeSKUId;
    let invite;
    let isMultiAccount;
    let source;
    let undelete;
    const self = this;
    login = login.login;
    const password = login.password;
    ({ invite, isMultiAccount } = login);
    ({ undelete, source, giftCodeSKUId } = login);
    let obj = login(isMultiAccount[8]);
    obj.dispatch({ type: "LOGIN", isPasswordAttempt: true });
    let obj1 = login(isMultiAccount[12]);
    obj = { url: closure_9.LOGIN, body: { login, password, undelete, login_source: source, gift_code_sku_id: giftCodeSKUId }, retries: 2, oldFormErrors: true };
    obj = { event: self(isMultiAccount[13]).NetworkActionNames.USER_LOGIN };
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
      let obj2 = {};
      let obj3 = { authorization: "" };
      obj2.headers = obj3;
      let obj4 = obj2;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    obj["rejectWithError"] = self(isMultiAccount[14]).rejectWithMigratedError();
    let obj9 = self(isMultiAccount[14]);
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
      if (code === outer1_12.ACCOUNT_SCHEDULED_FOR_DELETION) {
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
      if (code === outer1_12.ACCOUNT_DISABLED) {
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
      if (code === outer1_12.PHONE_VERIFICATION_REQUIRED) {
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
    let importDefault;
    let loginInstanceId;
    let mfaType;
    let source;
    let ticket;
    const self = this;
    ({ isMultiAccount: importDefault, loginInstanceId } = arg0);
    ({ code, ticket, source, giftCodeSKUId, mfaType } = arg0);
    let obj = importDefault(4942);
    obj = { url: closure_9.LOGIN_MFA(mfaType), body: null, retries: 2, oldFormErrors: true, trackedActionData: null, rejectWithError: true };
    obj = { code, ticket, login_source: source, gift_code_sku_id: giftCodeSKUId };
    if (null == loginInstanceId) {
      loginInstanceId = authStore.getLoginInstanceId();
    }
    obj.login_instance_id = loginInstanceId;
    obj.body = obj;
    obj.trackedActionData = { event: self(480).NetworkActionNames.USER_LOGIN_MFA };
    const obj1 = { event: self(480).NetworkActionNames.USER_LOGIN_MFA };
    const postResult = obj.post(obj);
    return obj.post(obj).then((body) => {
      if (closure_1) {
        self.switchAccountToken(body.body.token);
      } else {
        let obj = outer1_1(outer1_3[8]);
        obj = { type: "LOGIN_SUCCESS", token: body.body.token };
        obj.dispatch(obj);
      }
    }).catch((body) => {
      if (null != body.body) {
        if (null != body.body.suspended_user_token) {
          let obj = outer1_1(outer1_3[8]);
          obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: body.body.suspended_user_token };
          obj.dispatch(obj);
        }
      }
      body = body.body;
      let code;
      if (null != body) {
        code = body.code;
      }
      if (code === outer1_12.MFA_INVALID_CODE) {
        const _Error = Error;
        const error = new Error(body.body.message);
        throw error;
      } else {
        throw body;
      }
    });
  },
  authenticatePasswordless(arg0) {
    let closure_4;
    let dependencyMap;
    let importAll;
    let importDefault;
    let require;
    ({ authenticateFunc: require, conditionalMediationAbortController: importDefault, source: importAll, giftCodeSKUId: dependencyMap, isMultiAccount: closure_4 } = arg0);
    const self = this;
    return self(async () => {
      if (null != outer1_1) {
        outer1_1.abort("Starting non-conditional mediation");
      }
      let obj = outer2_1(outer2_3[8]);
      obj.dispatch({ type: "PASSWORDLESS_START" });
      const tmp4 = yield outer2_0(outer2_3[16]).fetchWebAuthnPasswordlessChallenge();
      const obj2 = outer2_0(outer2_3[16]);
      obj = { ticket: tmp4.ticket, credential: yield outer1_0(tmp4.challenge), source: outer1_2, giftCodeSKUId: outer1_3, isMultiAccount: outer1_4 };
      yield outer1_5.loginWebAuthn(obj);
    })();
  },
  loginWebAuthn(isMultiAccount) {
    let credential;
    let giftCodeSKUId;
    let source;
    let ticket;
    const self = this;
    isMultiAccount = isMultiAccount.isMultiAccount;
    ({ ticket, credential, source, giftCodeSKUId } = isMultiAccount);
    let obj = isMultiAccount(4942);
    obj = { url: closure_9.WEBAUTHN_CONDITIONAL_UI_LOGIN, body: { credential, ticket, source, giftCodeSKUId }, retries: 1 };
    obj = { event: self(480).NetworkActionNames.USER_LOGIN_PASSWORDLESS };
    obj.trackedActionData = obj;
    obj.rejectWithError = true;
    const postResult = obj.post(obj);
    return obj.post(obj).then((body) => {
      let required_actions;
      let user_id;
      body = body.body;
      const token = body.token;
      ({ user_id, required_actions } = body);
      let obj = isMultiAccount(outer1_3[8]);
      obj.dispatch({ type: "LOGIN_ATTEMPTED", user_id, required_actions });
      if (isMultiAccount) {
        self.switchAccountToken(token);
      } else {
        obj = { type: "LOGIN_SUCCESS", token };
        isMultiAccount(outer1_3[8]).dispatch(obj);
        const obj2 = isMultiAccount(outer1_3[8]);
      }
    }).catch((body) => {
      let aPIError = body;
      if (body instanceof self(outer1_3[14]).HTTPResponseError) {
        if (null != body.body.suspended_user_token) {
          let obj = isMultiAccount(outer1_3[8]);
          obj = { type: "LOGIN_SUSPENDED_USER", suspendedUserToken: body.body.suspended_user_token };
          obj.dispatch(obj);
        } else {
          const APIError = self(outer1_3[15]).APIError;
          const prototype = APIError.prototype;
          aPIError = new APIError(body);
        }
      }
      throw aPIError;
    });
  },
  loginToken(Authorization, arg1) {
    let flag = arg1;
    const self = this;
    const importDefault = Authorization;
    if (arg1 === undefined) {
      flag = true;
    }
    importDefault(686).dispatch({ type: "LOGIN" });
    let obj = importDefault(686);
    return new Promise((arg0) => {
      let closure_0 = arg0;
      setImmediate(() => {
        let obj = callback(outer2_3[8]);
        obj = { type: "LOGIN_SUCCESS", token: outer1_1 };
        obj.dispatch(obj);
        if (outer1_2) {
          lib.startSession(outer1_1);
        }
        lib();
      });
    });
  },
  oneTimeLogin(arg0) {
    let closure_0 = arg0;
    const self = this;
    return callback(async () => {
      let obj = self(outer2_3[8]);
      obj.dispatch({ type: "LOGIN" });
      let obj1 = self(outer2_3[12]);
      obj = { url: outer2_9.ONE_TIME_LOGIN, body: obj, oldFormErrors: true };
      obj = { ticket: outer1_0 };
      obj1 = { event: callback(outer2_3[13]).NetworkActionNames.USER_ONE_TIME_LOGIN };
      obj.trackedActionData = obj1;
      obj.rejectWithError = true;
      const token = yield obj1.post(obj).body.token;
      if (token) {
        yield outer1_1.loginToken(tmp2, false);
        return token;
      } else {
        const _Error = Error;
        const error = new Error("No token in response");
        throw error;
      }
    })();
  },
  loginReset(isMultiAccount) {
    let obj = importDefault(686);
    obj = { type: "LOGIN_RESET", isMultiAccount };
    obj.dispatch(obj);
  },
  loginStatusReset() {
    importDefault(686).dispatch({ type: "LOGIN_STATUS_RESET" });
  },
  logoutInternal(arg0) {
    dispatchLogout(arg0);
  },
  logout(TTI_test, LOGIN) {
    let DEFAULT_LOGGED_OUT = LOGIN;
    const _require = TTI_test;
    if (LOGIN === undefined) {
      DEFAULT_LOGGED_OUT = constants.DEFAULT_LOGGED_OUT;
    }
    const importAll = arg2;
    let obj = DEFAULT_LOGGED_OUT(4942);
    obj = { url: closure_9.LOGOUT };
    obj = { provider: callback2() };
    const Storage = _require(587).Storage;
    obj.token = Storage.get(closure_10);
    obj.voip_provider = closure_14;
    const Storage2 = _require(587).Storage;
    obj.voip_token = Storage2.get(closure_11);
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.trackedActionData = { event: _require(480).NetworkActionNames.USER_LOGOUT, properties: obj2 };
    let tmp2 = null != arg2;
    if (tmp2) {
      const obj3 = {};
      const obj4 = {};
      const token = importAll(684).getToken(arg2);
      let str = "";
      if (null != token) {
        str = token;
      }
      obj4.authorization = str;
      obj3.headers = obj4;
      tmp2 = obj3;
      const obj8 = importAll(684);
    }
    const merged = Object.assign(tmp2);
    const obj1 = { event: _require(480).NetworkActionNames.USER_LOGOUT, properties: obj2 };
    obj["rejectWithError"] = _require(507).rejectWithMigratedError();
    const obj9 = _require(507);
    return obj.post(obj).finally(() => {
      let tmp = null != closure_2;
      if (tmp) {
        tmp = closure_2 !== outer1_7.getId();
      }
      if (!tmp) {
        outer1_20(closure_0, DEFAULT_LOGGED_OUT);
      }
    });
  },
  switchAccountToken(token, switchSynchronously) {
    let flag = switchSynchronously;
    const self = this;
    let closure_0 = token;
    if (switchSynchronously === undefined) {
      flag = true;
    }
    token = authStore.getToken();
    let obj = { wasLoggedIn: null != token, tokenHasChanged: token !== token };
    importDefaultResult.log("Switching accounts", obj);
    obj = { isSwitchingAccount: true, goHomeAfterSwitching: flag };
    dispatchLogout(obj);
    return self.loginToken(token, true).then(() => {
      const tmp = closure_0 === outer1_7.getToken();
      outer1_16.log("Switched accounts finished", { isCorrectToken: tmp });
      return tmp;
    });
  },
  verifySSOToken(arg0) {
    let DEFAULT_LOGGED_OUT = arg1;
    const _require = arg0;
    if (arg1 === undefined) {
      DEFAULT_LOGGED_OUT = constants.DEFAULT_LOGGED_OUT;
    }
    const HTTP = _require(507).HTTP;
    const obj = { url: closure_9.ME, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    return value.catch(() => {
      outer1_20(closure_0, DEFAULT_LOGGED_OUT);
    });
  },
  verify(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      let obj = outer2_1(outer2_3[12]);
      obj = { url: outer2_9.VERIFY, body: obj };
      obj = { token: outer1_0, trackedActionData: { event: callback(outer2_3[13]).NetworkActionNames.USER_VERIFY } };
      const obj1 = { event: callback(outer2_3[13]).NetworkActionNames.USER_VERIFY };
      obj.rejectWithError = callback(outer2_3[14]).rejectWithMigratedError();
      const tmp = yield obj.post(obj);
      const obj5 = callback(outer2_3[14]);
      outer2_1(outer2_3[8]).dispatch({ type: "LOGIN_SUCCESS", token: tmp.body.token });
      return tmp.body.user_id;
    })();
  },
  authorizePayment(token) {
    let obj = importDefault(4942);
    obj = { url: closure_9.AUTHORIZE_PAYMENT, body: obj };
    obj = { token, trackedActionData: { event: require(480) /* isThrottled */.NetworkActionNames.AUTHORIZE_PAYMENT }, rejectWithError: true };
    return obj.post(obj);
  },
  authorizeIPAddress(token) {
    let obj = importDefault(4942);
    obj = { url: closure_9.AUTHORIZE_IP, body: obj };
    obj = { token, trackedActionData: { event: require(480) /* isThrottled */.NetworkActionNames.AUTHORIZE_IP }, rejectWithError: true };
    return obj.post(obj);
  },
  verifyResend() {
    let obj = importDefault(4942);
    obj = { url: closure_9.VERIFY_RESEND, oldFormErrors: true };
    obj = { event: require(480) /* isThrottled */.NetworkActionNames.USER_VERIFY_RESEND };
    obj.trackedActionData = obj;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return obj.post(obj);
  },
  resetPassword(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return callback(async () => {
      let obj = callback2(outer2_3[8]);
      obj.dispatch({ type: "LOGIN" });
      obj = { token: outer1_0, password: outer1_1, source: outer1_2 };
      const Storage = callback(outer2_3[18]).Storage;
      let value = Storage.get(outer2_10);
      const tmp4 = outer2_15();
      if (tmp5) {
        tmp2.push_provider = tmp4;
        tmp2.push_token = value;
      }
      const Storage2 = callback(outer2_3[18]).Storage;
      value = Storage2.get(outer2_11);
      if (tmp8) {
        tmp2.push_voip_provider = outer2_14;
        tmp2.push_voip_token = value;
      }
      let obj2 = callback2(outer2_3[12]);
      obj = { url: outer2_9.RESET_PASSWORD, body: obj, oldFormErrors: true, trackedActionData: { event: callback(outer2_3[13]).NetworkActionNames.USER_RESET_PASSWORD } };
      const obj1 = { event: callback(outer2_3[13]).NetworkActionNames.USER_RESET_PASSWORD };
      tmp5 = null != tmp4 && null != value;
      tmp8 = null != outer2_14 && null != value;
      obj.rejectWithError = callback(outer2_3[14]).rejectWithMigratedError();
      const body = yield obj2.post(obj).body;
      obj2 = { result: body.mfa ? tmp11.MFA : tmp11.SUCCESS, sms: body.sms, webauthn: body.webauthn, ticket: body.ticket, token: body.token, backup: body.backup, totp: body.totp };
      return obj2;
    })();
  },
  resetPasswordMFAv2(arg0) {
    let closure_4;
    let closure_5;
    let dependencyMap;
    let importAll;
    let importDefault;
    let require;
    ({ method: require, code: importDefault, ticket: importAll, password: dependencyMap, token: closure_4, source: closure_5 } = arg0);
    return callback(async () => {
      let obj = outer2_1(outer2_3[8]);
      obj.dispatch({ type: "LOGIN_MFA" });
      let obj1 = outer2_1(outer2_3[12]);
      obj = { url: outer2_9.RESET_PASSWORD, body: obj, oldFormErrors: true };
      obj = { code: outer1_1, ticket: outer1_2, password: outer1_3, token: outer1_4, source: outer1_5, method: outer1_0 };
      obj1 = { event: outer2_0(outer2_3[13]).NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: true } };
      obj.trackedActionData = obj1;
      obj.rejectWithError = true;
      return yield obj1.post(obj).body.token;
    })();
  },
  forgotPassword(arg0) {
    let closure_0 = arg0;
    return callback(async () => {
      let obj = outer2_1(outer2_3[8]);
      obj.dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
      let obj1 = outer2_1(outer2_3[12]);
      obj = { url: outer2_9.FORGOT_PASSWORD, body: obj, oldFormErrors: true };
      obj = { login: outer1_0 };
      obj1 = { event: callback(outer2_3[13]).NetworkActionNames.FORGOT_PASSWORD };
      obj.trackedActionData = obj1;
      obj.rejectWithError = callback(outer2_3[14]).rejectWithMigratedError();
      const obj6 = callback(outer2_3[14]);
      const tmp2 = yield obj1.post(obj);
      outer2_1(outer2_3[8]).dispatch({ type: "FORGOT_PASSWORD_SENT" });
      return tmp2.body.method;
    })();
  },
  setFingerprint(fingerprint) {
    let obj = importDefault(686);
    obj = { type: "FINGERPRINT", fingerprint };
    obj.dispatch(obj);
  },
  getExperiments(withGuildExperiments) {
    let obj = importDefault(686);
    obj = { type: "EXPERIMENTS_FETCH", withGuildExperiments };
    obj.dispatch(obj);
  },
  getLocationMetadata() {
    if (null == nextPromise) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        outer1_1(outer1_3[8]).dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: true });
      }, 5000);
      const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      let obj = { url: closure_9.AUTH_LOCATION_METADATA, retries: 2, oldFormErrors: true, rejectWithError: true };
      const value = HTTP.get(obj);
      nextPromise = value.then((body) => {
        clearTimeout(closure_4);
        if (null == outer1_8.getAuthenticationConsentRequired()) {
          let consent_required;
          if (null != body) {
            body = body.body;
            if (null != body) {
              consent_required = body.consent_required;
            }
          }
          let obj = outer1_1(outer1_3[8]);
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
        outer1_1(outer1_3[8]).dispatch(obj);
        let prop;
        if (null != body) {
          const body3 = body.body;
          if (null != body3) {
            prop = body3.promotional_email_opt_in;
          }
        }
        if (null != prop) {
          ({ required: obj5.required, pre_checked: obj5.checked, pre_checked: obj5.preChecked } = body.body.promotional_email_opt_in);
          outer1_6({});
          const obj1 = {};
        }
      }, () => {
        clearTimeout(closure_4);
        outer1_1(outer1_3[8]).dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: true });
      });
    }
    return nextPromise;
  },
  closeSuspendedUser() {
    importDefault(686).dispatch({ type: "CLOSE_SUSPENDED_USER" });
  }
};
let result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/AuthenticationActionCreators.tsx");

export default obj;
export const PasswordResetResult = obj;
