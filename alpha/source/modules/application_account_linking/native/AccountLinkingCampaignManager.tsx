// Module ID: 20891
// Function ID: 20892
// Name: AccountLinkingCampaignManager
// Dependencies: [5, 16216, 6846, 1388, 19831, 1072, 7882, 559, 1380, 19836, 16218, 2]

// Module 20891 (AccountLinkingCampaignManager)
import BackoffDefault from "Backoff" /* 559 */;
import Constants from "Constants" /* 1072 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 16216 */;
import ConsentStore from "ConsentStore" /* 6846 */;
import UserStore from "UserStore" /* 1388 */;
import AccountLinkingCampaignStore from "AccountLinkingCampaignStore" /* 19831 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;
import size from "module_2" /* 2 */;

let _self, closure_4, currentUser, sessionGeneration;

const Consents = Constants.Consents;
class AccountLinkingCampaignManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.backoff = new BackoffDefault(60000, 3600000, false);
    applyArgumentsResult.retryAt = 0;
    applyArgumentsResult.sessionKey = null;
    applyArgumentsResult.pendingSession = null;
    applyArgumentsResult.actions = {
      LOGOUT() {
        applyArgumentsResult.resetRetryState();
        applyArgumentsResult.sessionKey = null;
        applyArgumentsResult.pendingSession = null;
      },
      POST_CONNECTION_OPEN() {
        return applyArgumentsResult.handlePostConnectionOpen();
      }
    };
    new BackoffDefault(60000, 3600000, false);
    return applyArgumentsResult;
  }
  resetRetryState() {
    const backoff = this.backoff;
    backoff.succeed();
    this.retryAt = 0;
  }
  handlePostConnectionOpen() {
    const self = this;
    return (async (arg0, value) => {
      let appInstalled;
      let closure_0;
      let tmp;
      let tmp3;
      if (sessionGeneration === 2) {
        sessionGeneration = 3;
        const str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c5;
        try {
          let combined;
          let isCurrent;
          let fail;
          let closure_7;
          let closure_8;
          let pendingSession;
          let closure_10;
          sessionGeneration = 2;
          const tmp4 = currentUser;
          if (0 === currentUser) {
            if (arg0 === 1) {
              sessionGeneration = 3;
              throw value;
            } else if (arg0 === 2) {
              sessionGeneration = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_3 = tmp;
              sessionGeneration = undefined;
              combined = undefined;
              isCurrent = undefined;
              let c4;
              let onFailure;
              fail = undefined;
              closure_7 = undefined;
              closure_8 = undefined;
              pendingSession = undefined;
              closure_10 = undefined;
              currentUser = currentUser.getCurrentUser();
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (null != id) {
                const obj12 = sessionGeneration;
                sessionGeneration = sessionGeneration.getSessionGeneration();
                const _HermesInternal = HermesInternal;
                combined = "" + id + ":" + sessionGeneration;
                if (self.sessionKey !== combined) {
                  self.resetRetryState();
                  self.sessionKey = combined;
                }
                if (!obj12.hasFetched()) {
                  let _Date = Date;
                  if (Date.now() >= self.retryAt) {
                    if (self.pendingSession !== combined) {
                      self.pendingSession = combined;
                      isCurrent = function isCurrent() {
                        let tmp = closure_2_0.sessionKey === combined;
                        if (tmp) {
                          fail = fail.getCurrentUser();
                          id = undefined;
                          if (fail != null) {
                            id = fail.id;
                          }
                          tmp = id === id;
                        }
                        if (tmp) {
                          tmp = c7.getSessionGeneration() === sessionGeneration;
                        }
                        return tmp;
                      };
                      c4 = 0;
                      onFailure = function onFailure(arg0) {
                        closure_4 = Math.max(closure_4, arg0);
                      };
                      fail = function fail() {
                        if (typeof isCurrent === "function") {
                          let tmp3 = closure_2_0.sessionKey === combined;
                          if (tmp3) {
                            fail = fail.getCurrentUser();
                            id = undefined;
                            if (fail != null) {
                              id = fail.id;
                            }
                            tmp3 = id === id;
                          }
                          if (tmp3) {
                            tmp3 = c7.getSessionGeneration() === sessionGeneration;
                          }
                          if (tmp3) {
                            const _Date = Date;
                            const _Math = Math;
                            const _Math2 = Math;
                            const timestamp = Date.now();
                            const backoff = tmp.backoff;
                            const random = Math.random();
                            closure_2_0.retryAt = timestamp + max(1000, random * backoff.fail(), c4);
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      };
                      c5 = 2;
                      closure_7 = {};
                      pendingSession = _self(pendingSession[8]);
                      if (pendingSession.isAndroid()) {
                        pendingSession = c5.hasConsented;
                        if (pendingSession(Consents.PERSONALIZATION)) {
                          const obj8 = _self(pendingSession[9]);
                          pendingSession = obj8.fetchAccountLinkingCampaignDetectableApps(onFailure);
                          currentUser = 3;
                          sessionGeneration = 1;
                          const obj5 = { value: pendingSession, done: false };
                          return obj5;
                        }
                      }
                      if (isCurrent()) {
                        pendingSession = c5.hasConsented;
                        if (!pendingSession(Consents.PERSONALIZATION)) {
                          closure_7 = {};
                        }
                        const obj6 = _self(pendingSession[9]);
                        pendingSession = obj6.fetchAccountLinkingCampaigns(closure_7, onFailure);
                        currentUser = 7;
                        sessionGeneration = 1;
                        const obj7 = { value: pendingSession, done: false };
                        return obj7;
                      } else {
                        c5 = 0;
                        if (closure_131_0.pendingSession === combined) {
                          closure_131_0.pendingSession = null;
                        }
                        sessionGeneration = 3;
                        return { value: "HermesInternal", done: null };
                      }
                    }
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c5 = 0;
            pendingSession = combined;
            const tmp84 = appInstalled;
            if (closure_131_0.pendingSession === combined) {
              pendingSession = closure_131_0;
              closure_131_0.pendingSession = null;
            }
            throw tmp84;
          } else {
            if (2 === tmp4) {
              c5 = 1;
              fail();
            } else if (3 === tmp4) {
              if (arg0 === 1) {
                sessionGeneration = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                if (closure_131_0.pendingSession === combined) {
                  closure_131_0.pendingSession = null;
                }
                sessionGeneration = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                closure_8 = value;
                if (isCurrent()) {
                  if (null == closure_8) {
                    fail();
                    c5 = 0;
                    if (closure_131_0.pendingSession === combined) {
                      closure_131_0.pendingSession = null;
                    }
                    sessionGeneration = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    c5 = 3;
                    const obj3 = _self(pendingSession[10]);
                    pendingSession = obj3.detectLocalApps(closure_8);
                    currentUser = 5;
                    sessionGeneration = 1;
                    const obj10 = { value: pendingSession, done: false };
                    return obj10;
                  }
                } else {
                  c5 = 0;
                  if (closure_131_0.pendingSession === combined) {
                    closure_131_0.pendingSession = null;
                  }
                  sessionGeneration = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            } else if (4 === tmp4) {
              c5 = 2;
              closure_7 = {};
            } else if (5 === tmp4) {
              if (arg0 === 1) {
                sessionGeneration = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                if (closure_131_0.pendingSession === combined) {
                  closure_131_0.pendingSession = null;
                }
                sessionGeneration = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else if (isCurrent()) {
                let closure_1 = closure_8;
                _self = closure_8[Symbol.iterator]();
                pendingSession = _self.next();
                while (_self !== undefined) {
                  closure_7[pendingSession] = appInstalled.isAppInstalled(pendingSession);
                  c5 = 3;
                  continue;
                }
                c5 = 2;
              } else {
                c5 = 0;
                if (closure_131_0.pendingSession === combined) {
                  closure_131_0.pendingSession = null;
                }
                sessionGeneration = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (6 === tmp4) {
              c5 = 3;
              pendingSession = _self;
              _self.return();
              throw appInstalled;
            } else if (arg0 === 1) {
              sessionGeneration = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              if (closure_131_0.pendingSession === combined) {
                closure_131_0.pendingSession = null;
              }
              sessionGeneration = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_10 = value;
              if (isCurrent()) {
                if (null == closure_10) {
                  fail();
                } else {
                  pendingSession = closure_131_0;
                  closure_131_0.resetRetryState();
                }
                c5 = 1;
              } else {
                c5 = 0;
                if (closure_131_0.pendingSession === combined) {
                  closure_131_0.pendingSession = null;
                }
                sessionGeneration = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            c5 = 0;
            pendingSession = closure_131_0.pendingSession;
            if (pendingSession === combined) {
              closure_131_0.pendingSession = null;
            }
          }
          sessionGeneration = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp114) {
          appInstalled = tmp114;
          if (0 === c5) {
            sessionGeneration = 3;
            throw tmp114;
          } else if (1 === c5) {
            currentUser = 1;
          } else if (2 === c5) {
            currentUser = 2;
          } else if (3 === c5) {
            currentUser = 4;
          } else {
            currentUser = 6;
          }
        }
      }
    })();
  }
}
const prototype = AccountLinkingCampaignManager.prototype;
AccountLinkingCampaignManager.displayName = "AccountLinkingCampaignManager";
const accountLinkingCampaignManager = new AccountLinkingCampaignManager();
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkingCampaignManager.tsx");

export default accountLinkingCampaignManager;
