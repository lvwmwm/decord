// Module ID: 8021
// Function ID: 8022
// Name: PlayAgeSignals
// Dependencies: [5, 8022, 8023, 2]
// Exports: getAgeSignals

// Module 8021 (PlayAgeSignals)
import NativePlayAgeSignalsModuleDefault from "NativePlayAgeSignalsModule" /* 8022 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _getAgeSignals(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
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
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          if (null == NativePlayAgeSignalsModuleDefault) {
            const _Error = Error;
            const error = new Error("NativePlayAgeSignalsModule is not available on this platform");
            throw error;
          } else {
            (function applyFakeAgeSignalsScenarioFromExperiment() {
              if (null != closure_1_1(closure_1_2[1])) {
                const fakePlayAgeSignalsConfig = closure_1_0(tmp2[2]).getFakePlayAgeSignalsConfig("PlayAgeSignals.getAgeSignals");
                ({ enabled, scenario } = fakePlayAgeSignalsConfig);
                const obj = closure_1_0(tmp2[2]);
                let str2 = "";
                if (enabled) {
                  str2 = scenario;
                }
                const result = closure_1_1(tmp2[1]).setFakeAgeSignalsScenario(str2);
                const tmpResult = closure_1_1(tmp2[1]);
              }
            })();
            c1 = 1;
            c0 = 1;
            const obj4 = { value: tmp5(tmp6[1]).getAgeSignals(), done: false };
            return obj4;
          }
          tmp5 = importDefault;
          tmp6 = dependencyMap;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c0 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp14) {
      c0 = tmp;
      throw tmp14;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/PlayAgeSignals.tsx");

export const AgeSignalsStatus = { UNSPECIFIED: 0, SHARED: 1, NOT_SHARED: 2, VERIFICATION_REQUIRED: 3 };
export const AgeRangeSource = { UNSPECIFIED: 0, TIER_A: 1, TIER_B: 2, TIER_C: 3, TIER_D: 4 };
export const SignificantChangeStatus = { UNSPECIFIED: 0, APPROVED: 1, PENDING: 2, DECLINED: 3 };
export const getAgeSignals = function getAgeSignals() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
