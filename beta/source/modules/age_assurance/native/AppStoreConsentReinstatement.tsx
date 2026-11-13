// Module ID: 20031
// Function ID: 20032
// Name: AppStoreConsentReinstatement
// Dependencies: [5, 5850, 1385, 3, 20032, 8258, 1377, 8250, 8251, 2]
// Exports: beginAppStoreConsentReinstatement, cancelAppStoreConsentReinstatement, isAppStoreConsentReinstatementEnabledForSession, settleAppStoreConsentReinstatement

// Module 20031 (AppStoreConsentReinstatement)
import LoggerDefault from "Logger" /* 3 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 8258 */;
import AppStoreConsentReinstateEndpointExperiment from "AppStoreConsentReinstateEndpointExperiment" /* 20032 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5850 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let _null, c4, c5;

function isStillCurrentUser(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return id === arg0;
}
function getConsentSession() {
  let obj4;
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != _null;
  if (tmp2) {
    let id;
    const userId = _null.userId;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp2 = userId !== id;
  }
  if (tmp2) {
    _null.decide({ reinstatement: null });
    _null = null;
  }
  if (null == currentUser) {
    return null;
  } else {
    if (null == _null) {
      const self = this;
      const self2 = this;
      const self3 = this;
      const self4 = this;
      const promise = new Promise((arg0) => {
        let closure_1_0 = arg0;
      });
      const promise2 = new Promise((arg0) => {
        let closure_1_1 = arg0;
      });
      obj = {
        userId: currentUser.id,
        enabled: obj4.getIsAppStoreConsentReinstateEndpointEnabled("parentalConsentManager"),
        decision: promise,
        decide(reinstatement) {
              const tmp = null == reinstatement.reinstatement && null == obj.reinstatement;
              if (tmp) {
                obj.settled = true;
              }
              closure_1_0(reinstatement);
            },
        reinstatement: null,
        settled: false,
        cancelled: false,
        cancellation: promise2,
        cancel
      };
      _null = obj;
      let enabled = obj.enabled;
      obj4 = AppStoreConsentReinstateEndpointExperiment;
      if (enabled) {
        const tmp15Result = AppStoreAgeSignalReport;
        let result = tmp15Result.isAppStoreAgeSignalLaunchPending();
        if (!result) {
          const tmp15Result2 = AppStoreAgeSignalReport;
          result = tmp15Result2.isAppStoreAgeSignalColdLaunch();
        }
        enabled = result;
      }
      if (!enabled) {
        _null.decide({ reinstatement: null });
      }
    }
    return _null;
  }
}
let obj = function _settleAppStoreConsentReinstatement() {
  let appStoreConsentRevoked;
  obj = _asyncToGenerator(async function(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c3;
      try {
        let c0;
        let c2;
        let tmp;
        let removeChangeListener;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            c0 = undefined;
            c2 = undefined;
            const tmp49 = getConsentSession();
            tmp = tmp49;
            let str = "android";
            const obj9 = PlatformUtils;
            if (obj9.isIOS()) {
              str = "ios";
            }
            if (null != tmp49) {
              if (!tmp49.settled) {
                if (tmp49.enabled) {
                  const tmp50Result = AppStoreAgeSignalReport;
                  if (tmp50Result.isAppStoreAgeSignalLaunchPending()) {
                    const self = this;
                    const self2 = this;
                    const promise = new Promise((arg0) => {
                      function l() {
                        const userId = closure_2_1.userId;
                        const currentUser = authStore.getCurrentUser();
                        let id;
                        if (currentUser != null) {
                          id = currentUser.id;
                        }
                        if (id !== userId) {
                          closure_2_1.decide({ reinstatement: null });
                          if (c6 === closure_2_1) {
                            c6 = null;
                          }
                          l();
                        }
                      }
                      closure_1_4.addChangeListener(l);
                      if (typeof l === "function") {
                        let userId = closure_1_1.userId;
                        let currentUser = authStore.getCurrentUser();
                        let id;
                        if (currentUser != null) {
                          id = currentUser.id;
                        }
                        if (id !== userId) {
                          closure_1_1.decide({ reinstatement: null });
                          if (c6 === closure_1_1) {
                            c6 = null;
                          }
                          closure_128_0();
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                    const self3 = this;
                    const self4 = this;
                    const tmp35 = (() => {
                      let closure_0 = closure_2(function*(arg0, value) {
                        if (c3 === 2) {
                          c3 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj2 = { value, done: true };
                            return obj2;
                          } else {
                            return { value: "HermesInternal", done: "HermesInternal" };
                          }
                        } else {
                          try {
                            let reinstatement;
                            c3 = 2;
                            if (0 === c2) {
                              if (arg0 === 1) {
                                c3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c3 = 3;
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                closure_1 = tmp3;
                                let c0 = 0;
                                reinstatement = undefined;
                                c2 = 1;
                                c3 = 1;
                                const obj4 = { value: closure_1.decision, done: false };
                                return obj4;
                              }
                            } else {
                              if (1 === c2) {
                                if (arg0 === 1) {
                                  c3 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c3 = 3;
                                  const obj5 = { value, done: true };
                                  return obj5;
                                } else {
                                  reinstatement = value.reinstatement;
                                  const tmp8 = closure_2_7(closure_1.userId) && null != reinstatement;
                                  if (tmp8) {
                                    c2 = 2;
                                    c3 = 1;
                                    const obj6 = { value: reinstatement, done: false };
                                    return obj6;
                                  }
                                }
                              } else if (arg0 === 1) {
                                c3 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c3 = 3;
                                obj = { value, done: true };
                                return obj;
                              }
                              c3 = 3;
                              return { value: "HermesInternal", done: "HermesInternal" };
                            }
                          } catch (tmp14) {
                            c3 = 3;
                            throw tmp14;
                          }
                        }
                      });
                      return function waitForReinstatement() {
                        return closure_0(...arguments);
                      };
                    })();
                    const promise2 = new Promise((arg0) => {
                      const timeout = setTimeout(arg0, 15000);
                    });
                    c3 = 1;
                    const items = [tmp35(), tmp49.cancellation, promise, promise2];
                    removeChangeListener = race(items);
                    c4 = 2;
                    c5 = 1;
                    let obj4 = { value: removeChangeListener, done: false };
                    return obj4;
                  } else {
                    const tmp50Result2 = AppStoreAgeSignalReport;
                  }
                }
              }
            }
            let tmp39 = null != tmp49 && !tmp49.cancelled;
            if (tmp39) {
              removeChangeListener = isStillCurrentUser;
              tmp39 = isStillCurrentUser(tmp49.userId);
            }
            c5 = 3;
            let obj5 = { value: tmp39, done: true };
            return obj5;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          const _clearTimeout3 = clearTimeout;
          clearTimeout(c2);
          authStore.removeChangeListener(c0);
          throw closure_2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          const _clearTimeout2 = clearTimeout;
          clearTimeout(c2);
          removeChangeListener = authStore;
          authStore.removeChangeListener(c0);
          c5 = 3;
          let obj6 = { value, done: true };
          return obj6;
        } else {
          const cancelled = tmp.cancelled;
          let tmp7 = !cancelled;
          if (tmp7) {
            let tmp8 = removeChangeListener;
            removeChangeListener = closure_129_7;
            tmp7 = closure_129_7(tmp.userId);
          }
          c3 = 0;
          const _clearTimeout = clearTimeout;
          clearTimeout(c2);
          removeChangeListener = authStore.removeChangeListener;
          removeChangeListener(c0);
          c5 = 3;
          obj = { value: tmp7, done: true };
          return obj;
        }
      } catch (tmp40) {
        closure_2 = tmp40;
        if (0 === c3) {
          c5 = 3;
          throw tmp40;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let tmp2 = new LoggerDefault("AppStoreConsentReinstatement");
let closure_5 = tmp2;
let c6 = null;
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreConsentReinstatement.tsx");

export function isAppStoreConsentReinstatementEnabledForSession() {
  const tmp = getConsentSession();
  let flag;
  if (tmp != null) {
    flag = tmp.enabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function cancelAppStoreConsentReinstatement() {
  if (null != _null) {
    _null.decide({ reinstatement: null });
    _null.cancelled = true;
    _null.settled = true;
    _null.cancel();
    _null = null;
  }
}
export function beginAppStoreConsentReinstatement() {
  let str;
  obj = getConsentSession();
  if (null != obj) {
    let tmp6 = obj;
    let tmp7 = str;
    let obj4 = obj(str[6]);
    str = "android";
    if (obj4.isIOS()) {
      str = "ios";
    }
    if (obj.enabled) {
      const tmp6Result = tmp6(tmp7[5]);
      if (tmp6Result.isAppStoreAgeSignalColdLaunch()) {
        let tmp = RegionalFeatureConfigStore;
        if (RegionalFeatureConfigStore.isAppStoreConsentRevoked(str)) {
          if (null == obj.reinstatement) {
            const userId = obj.userId;
            const tmp3 = userId;
            let tmp4 = userId(function*(arg0, value) {
              let closure_2;
              let tmp;
              let warn;
              if (c5 === 2) {
                c5 = 3;
                const str2 = "Generator functions may not be called on executing generators";
                throw new TypeError("Generator functions may not be called on executing generators");
              } else {
                const str3 = "Consent reinstatement request failed";
                const str4 = "rate_limited";
                const str5 = "request_failed";
                if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } else {
                  let c3;
                  try {
                    let error;
                    let status;
                    c5 = 2;
                    const tmp4 = c4;
                    if (0 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        let obj4 = { value, done: true };
                        return obj4;
                      } else {
                        error = tmp;
                        let closure_0 = tmp4;
                        status = undefined;
                        c3 = 2;
                        let obj3 = closure_0(error[5]);
                        c4 = 3;
                        c5 = 1;
                        let obj5 = {
                          value: obj3.queueAppStoreAgeSignalSubmit(tmp28(function*(arg0, value) {
                                      let closure_1;
                                      let obj10;
                                      let obj6;
                                      if (c3 === 2) {
                                        c3 = 3;
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
                                        try {
                                          let tmp;
                                          c3 = 2;
                                          if (0 === c2) {
                                            if (arg0 === 1) {
                                              c3 = 3;
                                              throw value;
                                            } else if (arg0 === 2) {
                                              c3 = 3;
                                              const obj3 = { value, done: true };
                                              return obj3;
                                            } else {
                                              closure_0 = undefined;
                                              tmp = undefined;
                                              if (closure_2_7(c2)) {
                                                const obj9 = closure_2_0(platform[5]);
                                                if (obj9.isAppStoreAgeSignalColdLaunch()) {
                                                  c2 = 1;
                                                  c3 = 1;
                                                  const obj4 = { value: obj10.getAppStoreConsentReinstatementProof(), done: false };
                                                  obj10 = closure_2_0(platform[7]);
                                                  return obj4;
                                                }
                                              }
                                            }
                                          } else if (1 === c2) {
                                            if (arg0 === 1) {
                                              c3 = 3;
                                              throw value;
                                            } else if (arg0 === 2) {
                                              c3 = 3;
                                              const obj5 = { value, done: true };
                                              return obj5;
                                            } else {
                                              closure_0 = value;
                                              if (null != closure_0) {
                                                if (closure_2_7(c2)) {
                                                  c2 = 2;
                                                  c3 = 1;
                                                  const obj7 = { value: obj6.reinstateAppStoreConsent(closure_0), done: false };
                                                  obj6 = closure_2_0(platform[8]);
                                                  return obj7;
                                                }
                                              } else {
                                                const obj8 = { platform: tmp, outcome: "proof_failed" };
                                                logger.warn("Consent reinstatement proof unavailable", obj8);
                                              }
                                            }
                                          } else if (arg0 === 1) {
                                            c3 = 3;
                                            throw value;
                                          } else if (arg0 === 2) {
                                            c3 = 3;
                                            const obj11 = { value, done: true };
                                            return obj11;
                                          } else {
                                            tmp = value;
                                            if ("reinstated" !== tmp) {
                                              if ("no_revocation" !== tmp) {
                                                if ("outside_mandate" !== tmp) {
                                                  if ("verification_failed" !== tmp) {
                                                    obj = { platform: tmp, outcome: tmp };
                                                    logger.warn("Consent reinstatement returned an unknown outcome", obj);
                                                  }
                                                }
                                                const obj12 = { platform: tmp, outcome: tmp };
                                                logger.warn("Consent reinstatement declined", obj12);
                                              }
                                            }
                                            const obj13 = { platform: tmp, outcome: tmp };
                                            logger.info("Consent reinstatement completed", obj13);
                                          }
                                          c3 = 3;
                                          return { value: "HermesInternal", done: "HermesInternal" };
                                        } catch (tmp36) {
                                          c3 = 3;
                                          throw tmp36;
                                        }
                                      }
                                    })),
                          done: false
                        };
                        return obj5;
                      }
                    } else if (1 === tmp4) {
                      c3 = 0;
                      closure_129_0.settled = true;
                      throw tmp28;
                    } else {
                      if (2 === tmp4) {
                        c3 = 1;
                        error = tmp28;
                        status = undefined;
                        if (error != null) {
                          status = error.status;
                        }
                        let obj6 = { platform, outcome: str, error };
                        str = "request_failed";
                        c5 = c5.warn;
                        if (429 === status) {
                          str = "rate_limited";
                        }
                        const warnResult = c5("Consent reinstatement request failed", obj6);
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        closure_129_0.settled = true;
                        c5 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        c3 = 1;
                      }
                      c3 = 0;
                      closure_129_0.settled = true;
                      c5 = 3;
                      return { value: "HermesInternal", done: "HermesInternal" };
                    }
                  } catch (tmp28) {
                    if (0 === c3) {
                      c5 = 3;
                      throw tmp28;
                    } else if (1 === tmp30) {
                      c4 = 1;
                    } else {
                      c4 = 2;
                    }
                  }
                }
              }
            })();
            obj.reinstatement = tmp4;
            let obj2 = { reinstatement: tmp4 };
            obj.decide(obj2);
          }
        }
      }
    }
    obj.decide({ reinstatement: null });
  }
}
export function settleAppStoreConsentReinstatement() {
  return obj(...arguments);
}
