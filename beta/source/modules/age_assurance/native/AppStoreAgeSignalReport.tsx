// Module ID: 17229
// Function ID: 17230
// Name: AppStoreAgeSignalReport
// Dependencies: [32, 5, 1372, 1074, 8028, 7890, 1231, 1364, 8024, 8025, 1241, 5735, 4865, 2]
// Exports: beginAppStoreAgeSignalReport, settleAppStoreAgeSignalReport

// Module 17229 (AppStoreAgeSignalReport)
import Constants from "Constants" /* 1074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c5, c6, closure_9, dependencyMap, importDefault;

function collectAgeSignal() {
  return obj(...arguments);
}
let obj = function _collectAgeSignal() {
  obj = _asyncToGenerator(async (arg0, value) => {
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
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
            closure_0 = tmp4;
            c3 = 1;
            const obj6 = { firstAgeGate: require("AppStoreAgeSignalSupport").MIN_AGE_GATE, secondAgeGate: require("AppStoreAgeSignalSupport").ADULT_AGE_GATE };
            const getAgeSignals = require("AppStoreAgeAssurance").default.getAgeSignals;
            const _default = require("AppStoreAgeAssurance").default;
            c4 = 2;
            c5 = 1;
            const obj7 = { value: getAgeSignals(obj6), done: false };
            return obj7;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          const obj8 = { tags: { source: "parental_consent_manager", step: "collect_age_signal" } };
          const obj3 = closure_129_1(closure_129_2[6]);
          obj3.captureException(closure_0, obj8);
          let str = "android";
          const obj5 = closure_129_0(closure_129_2[7]);
          if (obj5.isIOS()) {
            str = "ios";
          }
          const obj9 = { platform: str };
          c5 = 3;
          const obj10 = { value: obj9, done: true };
          return obj10;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp15) {
        closure_2 = tmp15;
        if (0 === c3) {
          c5 = 3;
          throw tmp15;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _performAgeCheck() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj10;
    let obj2;
    let obj7;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c4;
      let closure_3;
      try {
        let closure_1;
        let closure_2;
        let closure_4;
        let closure_5;
        let closure_6;
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
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            c4 = 1;
            const obj18 = require("AppStoreAgeSignalAttestation");
            const result = obj18.warmAgeSignalAttestation();
            const items = [collectAgeSignal(), ];
            const obj19 = require("AppStoreAgeSignalAttestation");
            items[1] = obj19.getAgeSignalChallenge();
            c5 = 2;
            c6 = 1;
            const obj6 = { value: all(items), done: false };
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            let closure_7 = closure_3;
            const obj8 = { tags: { source: "parental_consent_manager", step: "perform_age_check" } };
            const obj13 = closure_130_1(closure_130_2[6]);
            obj13.captureException(closure_7, obj8);
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_1 = value;
              closure_2 = closure_130_3(closure_1, 2);
              closure_3 = closure_2[0];
              closure_4 = closure_2[1];
              c5 = 3;
              c6 = 1;
              const obj11 = { value: obj10.getAgeSignalIntegrityToken(closure_4, closure_3), done: false };
              obj10 = closure_130_0(closure_130_2[8]);
              return obj11;
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              closure_5 = value;
              c5 = 4;
              c6 = 1;
              const obj14 = { value: obj7.getAppStoreAgeSignalAssertion(closure_3, closure_0), done: false };
              obj7 = closure_130_0(closure_130_2[8]);
              return obj14;
            }
          } else if (4 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_6 = value;
              const obj4 = closure_130_0(closure_130_2[9]);
              c5 = 5;
              c6 = 1;
              const obj16 = { value: obj4.submitAgeSignal(closure_3, closure_5, closure_0, "app_start", closure_6), done: false };
              return obj16;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            obj = { platform: obj2.getNativePlatform() };
            const track = closure_130_1(closure_130_2[10]).track;
            const PARENTAL_CONSENT_CHECKED = closure_130_6.PARENTAL_CONSENT_CHECKED;
            const tmp8 = closure_130_1(closure_130_2[10]);
            obj2 = closure_130_0(closure_130_2[7]);
            track(PARENTAL_CONSENT_CHECKED, obj);
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp46) {
        closure_3 = tmp46;
        if (0 === c4) {
          c6 = 3;
          throw tmp46;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
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
        return { value: "HermesInternal", done: null };
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
          } else if (null != closure_2_8) {
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
        return { value: "HermesInternal", done: null };
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
let c7 = false;
let c8 = null;
let c9 = null;
let c10 = 0;
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReport.tsx");

export const beginAppStoreAgeSignalReport = function beginAppStoreAgeSignalReport() {
  function run() {
    return obj(...arguments);
  }
  c7 = true;
  const sum = c10 + 1;
  c10 = sum;
  let closure_8 = null;
  const tmp = c7;
  let result = null != UserStore.getCurrentUser();
  if (result) {
    obj = require("AppStoreAgeSignalSupport");
    result = obj.isAppStoreAgeSignalSupported();
  }
  if (result) {
    let obj2 = require("RegionalFeatureConfigUtils");
    result = obj2.shouldCollectAppStoreSignal();
  }
  if (result) {
    _require = !tmp;
    importDefault = sum;
    obj = function _run() {
      obj = _asyncToGenerator(async (arg0, value) => {
        function performAgeCheck() {
          return closure_1_13(...arguments);
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
            return { value: "HermesInternal", done: null };
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
                closure_0 = tmp;
                c3 = 1;
                if (null != closure_2_2) {
                  c4 = 3;
                  c5 = 1;
                  const obj4 = { value: tmp22, done: false };
                  return obj4;
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              const tmp18 = closure_2;
              if (c9 === closure_129_4) {
                c9 = null;
              }
              throw tmp18;
            } else if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                if (c9 === closure_129_4) {
                  c9 = null;
                }
                c5 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                c3 = 0;
                if (c9 === closure_129_4) {
                  c9 = null;
                }
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              if (c9 === closure_129_4) {
                c9 = null;
              }
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else if (closure_129_1 !== closure_1_10) {
              c3 = 0;
              if (c9 === closure_129_4) {
                c9 = null;
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            c4 = 2;
            c5 = 1;
            const obj6 = { value: performAgeCheck(closure_129_0), done: false };
            return obj6;
          } catch (tmp26) {
            closure_2 = tmp26;
            if (0 === c3) {
              c5 = 3;
              throw tmp26;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    dependencyMap = closure_9;
    const tmp9 = run();
    let closure_4 = tmp9;
    closure_9 = tmp9;
    closure_8 = tmp9;
  }
};
export const settleAppStoreAgeSignalReport = function settleAppStoreAgeSignalReport() {
  return obj(...arguments);
};
