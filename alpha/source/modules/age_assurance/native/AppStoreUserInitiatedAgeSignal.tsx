// Module ID: 8079
// Function ID: 8080
// Name: AppStoreUserInitiatedAgeSignal
// Dependencies: [32, 5, 8074, 8063, 7919, 8075, 8068, 8078, 2]
// Exports: submitUserInitiatedAgeSignal

// Module 8079 (AppStoreUserInitiatedAgeSignal)
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 7919 */;
import AppStoreAgeAssuranceDefault from "AppStoreAgeAssurance" /* 8063 */;
import AppStoreAgeSignalAttestation from "AppStoreAgeSignalAttestation" /* 8074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = function _submitUserInitiatedAgeSignal() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj11;
    let obj8;
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
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      let appleVerifiedMethod;
      try {
        let closure_0;
        let closure_1;
        let closure_3;
        let closure_4;
        let closure_5;
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
            closure_0 = undefined;
            closure_1 = undefined;
            appleVerifiedMethod = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            value = undefined;
            c3 = 1;
            const obj18 = AppStoreAgeSignalAttestation;
            const result = obj18.warmAgeSignalAttestation();
            const obj6 = { firstAgeGate: AppStoreAgeSignalSupport.MIN_AGE_GATE, secondAgeGate: AppStoreAgeSignalSupport.ADULT_AGE_GATE };
            const getAgeSignals = AppStoreAgeAssuranceDefault.getAgeSignals;
            const items = [getAgeSignals(obj6), ];
            const obj20 = AppStoreAgeSignalAttestation;
            items[1] = obj20.getAgeSignalChallenge();
            c4 = 2;
            c5 = 1;
            const obj7 = { value: all(items), done: false };
            return obj7;
          }
        } else if (1 === c4) {
          c3 = 0;
          let closure_7 = appleVerifiedMethod;
          const obj14 = closure_129_0(closure_129_2[7]);
          const result1 = obj14.trackAgeSignalReported("user_initiated", "failed");
          throw closure_7;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_0 = value;
            closure_1 = closure_129_3(closure_0, 2);
            appleVerifiedMethod = closure_1[0];
            closure_3 = closure_1[1];
            if ("declined" === appleVerifiedMethod.appleVerifiedMethod) {
              c3 = 0;
              c5 = 3;
              return { value: null, done: true };
            } else {
              c4 = 3;
              c5 = 1;
              const obj10 = { value: obj11.getAgeSignalIntegrityToken(closure_3, appleVerifiedMethod), done: false };
              obj11 = closure_129_0(closure_129_2[2]);
              return obj10;
            }
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_4 = value;
            c4 = 4;
            c5 = 1;
            const obj13 = { value: obj8.getAppStoreAgeSignalAssertion(appleVerifiedMethod, false), done: false };
            obj8 = closure_129_0(closure_129_2[2]);
            return obj13;
          }
        } else if (4 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            closure_5 = value;
            const obj5 = closure_129_0(closure_129_2[5]);
            c4 = 5;
            c5 = 1;
            const obj16 = { value: obj5.submitAgeSignal(appleVerifiedMethod, closure_4, false, "user_initiated", closure_5), done: false };
            return obj16;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          obj = closure_129_0(closure_129_2[6]);
          const result2 = obj.recordAgeSignalSubmitted(appleVerifiedMethod, value);
          const obj2 = closure_129_0(closure_129_2[7]);
          const result3 = obj2.trackAgeSignalReported("user_initiated", "submitted", value);
          c3 = 0;
          c5 = 3;
          const obj19 = { value, done: true };
          return obj19;
        }
      } catch (tmp43) {
        appleVerifiedMethod = tmp43;
        if (0 === c3) {
          c5 = 3;
          throw tmp43;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreUserInitiatedAgeSignal.tsx");

export function submitUserInitiatedAgeSignal() {
  return obj(...arguments);
}
