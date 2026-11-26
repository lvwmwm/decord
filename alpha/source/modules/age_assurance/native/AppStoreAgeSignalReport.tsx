// Module ID: 8062
// Function ID: 8063
// Name: AppStoreAgeSignalReport
// Dependencies: [32, 5, 1387, 2119, 1071, 8063, 7919, 1242, 1379, 8067, 8068, 8074, 8075, 8078, 5705, 5827, 2]
// Exports: beginAppStoreAgeSignalReport, isAppStoreAgeSignalColdLaunch, isAppStoreAgeSignalLaunchPending, queueAppStoreAgeSignalSubmit, resumeAppStoreAgeSignalReport, settleAppStoreAgeSignalReport, startPendingAppStoreAgeSignalReport

// Module 8062 (AppStoreAgeSignalReport)
import Constants from "Constants" /* 1071 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 7919 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1387 */;
import AppStateStore from "AppStateStore" /* 2119 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require, c0, c1, c2, c5, c6, closure_11, dependencyMap;

function collectAgeSignal() {
  return obj(...arguments);
}
let obj = function _collectAgeSignal() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj10;
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
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      let c3;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c3 = 1;
            value = {};
            const obj6 = { firstAgeGate: require("AppStoreAgeSignalSupport").MIN_AGE_GATE, secondAgeGate: require("AppStoreAgeSignalSupport").ADULT_AGE_GATE };
            const getAgeSignals = require("AppStoreAgeAssurance").default.getAgeSignals;
            const _default = require("AppStoreAgeAssurance").default;
            c5 = 2;
            c6 = 1;
            const obj7 = { value: getAgeSignals(obj6), done: false };
            return obj7;
          }
        } else if (1 === c5) {
          c3 = 0;
          value = closure_4;
          const obj8 = { tags: { source: "parental_consent_manager", step: "collect_age_signal" } };
          const obj3 = closure_130_1(closure_130_2[7]);
          obj3.captureException(value, obj8);
          let str = "android";
          const obj5 = closure_130_0(closure_130_2[8]);
          if (obj5.isIOS()) {
            str = "ios";
          }
          const obj9 = { signal: obj10, degraded: true };
          obj10 = { platform: str };
          c6 = 3;
          const obj11 = { value: obj9, done: true };
          return obj11;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          value.signal = value;
          value.degraded = false;
          c3 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp17) {
        closure_4 = tmp17;
        if (0 === c3) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _performAgeCheck() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_2;
    let obj10;
    let obj18;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      let c4;
      let closure_3;
      try {
        let tmp;
        let closure_5;
        let closure_6;
        let signal;
        let closure_8;
        let closure_9;
        let submitted;
        let trackAgeSignalReported;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let tmp121 = closure_0;
            closure_0 = undefined;
            tmp = undefined;
            closure_3 = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            signal = undefined;
            closure_8 = undefined;
            closure_9 = undefined;
            submitted = "failed";
            c4 = 2;
            const obj31 = require("AppStoreConsentReinstateEndpointExperiment");
            const isAppStoreConsentReinstateEndpointEnabled = obj31.getIsAppStoreConsentReinstateEndpointEnabled("appStoreAgeSignalReport", false);
            if (isAppStoreConsentReinstateEndpointEnabled) {
              tmp121 = null;
            }
            c4 = tmp121;
            if (isAppStoreConsentReinstateEndpointEnabled) {
              c5 = 3;
              c6 = 1;
              const obj7 = { value: collectAgeSignal(), done: false };
              return obj7;
            } else {
              const obj25 = require("AppStoreAgeSignalAttestation");
              const result = obj25.warmAgeSignalAttestation();
              trackAgeSignalReported = Promise;
              const items = [collectAgeSignal(), ];
              const obj26 = require("AppStoreAgeSignalAttestation");
              items[1] = obj26.getAgeSignalChallenge();
              c5 = 4;
              c6 = 1;
              const obj9 = { value: all(items), done: false };
              return obj9;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          trackAgeSignalReported = submitted;
          const obj24 = closure_130_0(closure_130_2[13]);
          const result1 = obj24.trackAgeSignalReported("app_start", submitted, closure_0);
          throw closure_3;
        } else {
          if (2 === c5) {
            c4 = 1;
            let closure_10 = closure_3;
            const obj11 = { tags: { source: "parental_consent_manager", step: "perform_age_check" } };
            const obj22 = closure_130_1(closure_130_2[7]);
            obj22.captureException(closure_10, obj11);
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const obj20 = closure_130_0(closure_130_2[13]);
              const result2 = obj20.trackAgeSignalReported("app_start", submitted, closure_0);
              c6 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              tmp = value;
              if (!value.degraded) {
                trackAgeSignalReported = closure_130_0(closure_130_2[10]);
                if (trackAgeSignalReported.isAgeSignalCached(tmp.signal)) {
                  submitted = "cache_hit";
                  c4 = 0;
                  const obj17 = closure_130_0(closure_130_2[13]);
                  const result3 = obj17.trackAgeSignalReported("app_start", submitted, closure_0);
                  c6 = 3;
                  return { value: "HermesInternal", done: "+95" };
                }
              }
              trackAgeSignalReported = closure_130_0(closure_130_2[11]);
              const result4 = trackAgeSignalReported.warmAgeSignalAttestation();
              c5 = 6;
              c6 = 1;
              const obj14 = { value: obj18.getAgeSignalChallenge(), done: false };
              obj18 = closure_130_0(closure_130_2[11]);
              return obj14;
            }
          } else {
            if (4 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                const obj15 = closure_130_0(closure_130_2[13]);
                const result5 = obj15.trackAgeSignalReported("app_start", submitted, closure_0);
                c6 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                closure_5 = value;
                trackAgeSignalReported = closure_130_3;
                closure_6 = closure_130_3(closure_5, 2);
                tmp = closure_6[0];
                closure_3 = closure_6[1];
              }
            } else if (5 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                const obj12 = closure_130_0(closure_130_2[13]);
                const result6 = obj12.trackAgeSignalReported("app_start", submitted, closure_0);
                c6 = 3;
                const obj19 = { value, done: true };
                return obj19;
              } else {
                closure_8 = value;
                c5 = 7;
                c6 = 1;
                const obj21 = { value: obj10.getAppStoreAgeSignalAssertion(signal, c4), done: false };
                obj10 = closure_130_0(closure_130_2[11]);
                return obj21;
              }
            } else if (6 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                const obj8 = closure_130_0(closure_130_2[13]);
                const result7 = obj8.trackAgeSignalReported("app_start", submitted, closure_0);
                c6 = 3;
                const obj23 = { value, done: true };
                return obj23;
              } else {
                closure_3 = value;
              }
            } else if (7 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                const obj6 = closure_130_0(closure_130_2[13]);
                const result8 = obj6.trackAgeSignalReported("app_start", submitted, closure_0);
                c6 = 3;
                const obj27 = { value, done: true };
                return obj27;
              } else {
                closure_9 = value;
                trackAgeSignalReported = closure_130_0;
                const obj4 = closure_130_0(closure_130_2[12]);
                c5 = 8;
                c6 = 1;
                const obj28 = { value: obj4.submitAgeSignal(signal, closure_8, c4, "app_start", closure_9), done: false };
                return obj28;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              const obj2 = closure_130_0(closure_130_2[13]);
              const result9 = obj2.trackAgeSignalReported("app_start", submitted, closure_0);
              c6 = 3;
              const obj29 = { value, done: true };
              return obj29;
            } else {
              closure_0 = value;
              submitted = "submitted";
              if (!tmp.degraded) {
                obj = closure_130_0(closure_130_2[10]);
                const result10 = obj.recordAgeSignalSubmitted(signal, closure_0);
              }
              c4 = 1;
            }
            signal = tmp.signal;
            trackAgeSignalReported = closure_130_0(closure_130_2[11]).getAgeSignalIntegrityToken;
            c5 = 5;
            c6 = 1;
            const obj30 = { value: trackAgeSignalReported(closure_3, signal), done: false };
            const tmp62 = closure_130_0(closure_130_2[11]);
            return obj30;
          }
          c4 = 0;
          trackAgeSignalReported = closure_130_0(closure_130_2[13]).trackAgeSignalReported;
          const tmp109 = closure_130_0(closure_130_2[13]);
          const result11 = trackAgeSignalReported("app_start", submitted, closure_0);
          c6 = 3;
          return { value: "HermesInternal", done: "+95" };
        }
      } catch (tmp129) {
        closure_3 = tmp129;
        if (0 === c4) {
          c6 = 3;
          throw tmp129;
        } else if (1 === tmp131) {
          c5 = 1;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function startAgeSignalReport(isColdLaunch, connection) {
  let closure_2;
  let obj2;
  let tmp = null != UserStore.getCurrentUser();
  if (tmp) {
    obj = require("AppStoreAgeSignalSupport");
    let result = obj.isAppStoreAgeSignalSupported();
    const tmp2 = _require;
    if (result) {
      const tmp2Result = tmp2(5705);
      result = tmp2Result.shouldCollectAppStoreSignal();
    }
    tmp = result;
  }
  if (tmp) {
    const obj3 = require("PlatformUtils");
    const isAndroidResult = obj3.isAndroid() && AppStateStore.getState() !== AppStates.ACTIVE;
    if (!isAndroidResult) {
      _require = isColdLaunch;
      let closure_1 = connection;
      function _run() {
        obj = _asyncToGenerator(async (arg0, value) => {
          function performAgeCheck() {
            return closure_1_15(...arguments);
          }
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: "+95" };
            }
          } else {
            let c3;
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_1 = tmp;
                  let closure_0 = tmp;
                  c3 = 1;
                  if (null != closure_2_2) {
                    c4 = 2;
                    c5 = 1;
                    const obj4 = { value: tmp27, done: false };
                    return obj4;
                  }
                }
              } else if (1 === c4) {
                c3 = 0;
                const tmp23 = closure_2;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                throw tmp23;
              } else if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  if (c11 === closure_129_4) {
                    c11 = null;
                  }
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else if (closure_129_1 !== closure_1_12) {
                  c3 = 0;
                  if (c11 === closure_129_4) {
                    c11 = null;
                  }
                  c5 = 3;
                  return { value: "HermesInternal", done: "+95" };
                } else if (closure_1_17()) {
                  const obj6 = { isColdLaunch: closure_129_0, connection: closure_129_1, until: "foreground" };
                  c3 = 0;
                  if (c11 === closure_129_4) {
                    c11 = null;
                  }
                  c5 = 3;
                  const obj7 = { value: undefined, done: true };
                  return obj7;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                return { value: "HermesInternal", done: "+95" };
              }
              c4 = 3;
              c5 = 1;
              const obj8 = { value: performAgeCheck(closure_129_0), done: false };
              return obj8;
            } catch (tmp31) {
              closure_2 = tmp31;
              if (0 === c3) {
                c5 = 3;
                throw tmp31;
              } else {
                c4 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      }
      dependencyMap = closure_11;
      const tmp13 = (function run() {
        return obj(...arguments);
      })();
      let closure_4 = tmp13;
      closure_11 = tmp13;
      let closure_9 = tmp13;
    }
  }
}
function mustWaitForForeground() {
  obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid() && AppStateStore.getState() !== AppStates.ACTIVE;
  return isAndroidResult;
}
obj = function _settleAppStoreAgeSignalReport() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != closure_2_9) {
            const items = [tmp11, ];
            const obj2 = require("TimeUtils");
            items[1] = obj2.sleep(15000);
            c1 = 1;
            c0 = 1;
            const obj5 = { value: race(items), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: "+95" };
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
const AppStates = Constants.AppStates;
let c8 = false;
let c9 = null;
let c10 = null;
let c11 = null;
let sum = 0;
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReport.tsx");

export function isAppStoreAgeSignalColdLaunch() {
  return 1 === sum;
}
export function isAppStoreAgeSignalLaunchPending() {
  return !c8;
}
export function queueAppStoreAgeSignalSubmit(submitUserInitiatedAgeSignal) {
  let closure_4;
  function settle() {
    return obj(...arguments);
  }
  let closure_0 = submitUserInitiatedAgeSignal;
  obj = function _settle() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+95" };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp3;
              const items = [closure_2_2];
              c1 = 1;
              c2 = 1;
              const obj4 = { value: Promise.allSettled(items), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (c11 === closure_128_4) {
              c11 = null;
            }
            c2 = 3;
            return { value: "HermesInternal", done: "+95" };
          }
        } catch (tmp10) {
          c2 = 3;
          throw tmp10;
        }
      }
    });
    return obj(...arguments);
  };
  let closure_1 = closure_11;
  const tmp = (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp3;
            if (null != closure_1) {
              c1 = 1;
              c2 = 1;
              const obj4 = { value: tmp4, done: false };
              return obj4;
            }
          }
        } else if (1 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj5 = { value, done: true };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 2;
        c2 = 1;
        const obj7 = { value: closure_128_0(), done: false };
        return obj7;
      } catch (tmp8) {
        c2 = 3;
        throw tmp8;
      }
    }
  })();
  let closure_2 = tmp;
  const tmp2 = settle();
  _asyncToGenerator = tmp2;
  closure_11 = tmp2;
  return tmp;
}
export function beginAppStoreAgeSignalReport(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  c8 = true;
  sum = sum + 1;
  c9 = null;
  let c10 = null;
  if (flag) {
    c10 = { isColdLaunch: !c8, connection: sum, until: "post_connection_open" };
    obj = { isColdLaunch: !c8, connection: sum, until: "post_connection_open" };
  } else {
    startAgeSignalReport(!c8, sum);
  }
}
export function startPendingAppStoreAgeSignalReport() {
  let until;
  if (_null != null) {
    until = tmp.until;
  }
  if ("post_connection_open" === until) {
    _null = null;
    startAgeSignalReport(_null.isColdLaunch, _null.connection);
  }
}
export function resumeAppStoreAgeSignalReport() {
  let require;
  const tmp = c10;
  let until;
  if (c10 != null) {
    until = tmp.until;
  }
  if ("foreground" === until) {
    c10 = null;
    let tmp6 = null != UserStore.getCurrentUser();
    if (tmp6) {
      const tmp3 = require;
      obj = AppStoreAgeSignalSupport;
      let result = obj.isAppStoreAgeSignalSupported();
      if (result) {
        const tmp3Result = tmp3(5705);
        result = tmp3Result.shouldCollectAppStoreSignal();
      }
      tmp6 = result;
    }
    if (tmp6) {
      ({ isColdLaunch: require, connection: importDefault } = tmp);
      obj = function _run() {
        obj = _asyncToGenerator(async (arg0, value) => {
          function performAgeCheck() {
            return closure_1_15(...arguments);
          }
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: "+95" };
            }
          } else {
            let c3;
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_1 = tmp;
                  let closure_0 = tmp;
                  c3 = 1;
                  if (null != closure_2_2) {
                    c4 = 2;
                    c5 = 1;
                    const obj4 = { value: tmp27, done: false };
                    return obj4;
                  }
                }
              } else if (1 === c4) {
                c3 = 0;
                const tmp23 = closure_2;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                throw tmp23;
              } else if (2 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  if (c11 === closure_129_4) {
                    c11 = null;
                  }
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else if (closure_129_1 !== closure_1_12) {
                  c3 = 0;
                  if (c11 === closure_129_4) {
                    c11 = null;
                  }
                  c5 = 3;
                  return { value: "HermesInternal", done: "+95" };
                } else if (closure_1_17()) {
                  const obj6 = { isColdLaunch: closure_129_0, connection: closure_129_1, until: "foreground" };
                  c3 = 0;
                  if (c11 === closure_129_4) {
                    c11 = null;
                  }
                  c5 = 3;
                  const obj7 = { value: undefined, done: true };
                  return obj7;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
                if (c11 === closure_129_4) {
                  c11 = null;
                }
                c5 = 3;
                return { value: "HermesInternal", done: "+95" };
              }
              c4 = 3;
              c5 = 1;
              const obj8 = { value: performAgeCheck(closure_129_0), done: false };
              return obj8;
            } catch (tmp31) {
              closure_2 = tmp31;
              if (0 === c3) {
                c5 = 3;
                throw tmp31;
              } else {
                c4 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      dependencyMap = closure_11;
      const tmp8 = (function run() {
        return obj(...arguments);
      })();
      let closure_4 = tmp8;
      closure_11 = tmp8;
      let closure_9 = tmp8;
    }
  }
}
export function settleAppStoreAgeSignalReport() {
  return obj(...arguments);
}
