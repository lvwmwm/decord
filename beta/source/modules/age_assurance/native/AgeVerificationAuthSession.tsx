// Module ID: 8734
// Function ID: 8735
// Name: AgeVerificationAuthSession
// Dependencies: [5, 3, 562, 4756, 1368, 558, 568, 2]
// Exports: closeAgeVerificationAuthSession, getIsAgeVerificationAuthSessionAwaitingResult, getIsAgeVerificationAuthSessionOpen, openAgeVerificationAuthSession

// Module 8734 (AgeVerificationAuthSession)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 568 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import NativeBrowserManagerModuleIOSDefault from "NativeBrowserManagerModuleIOS" /* 4756 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function release() {
  if (_null != null) {
    _null.remove();
  }
  _null = null;
  closure_5.setState({ isOpen: false });
}
function discard() {
  if (_null != null) {
    _null.remove();
  }
  _null = null;
  closure_5.setState({ isOpen: false });
  c6 = false;
}
let closure_10 = async function _openAgeVerificationAuthSession(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          if (obj8.isIOS()) {
            (function subscribeToFinish() {
              if (closure_7 != null) {
                closure_7.remove();
              }
              closure_7 = closure_1_1(closure_1_2[3]).onAuthSessionDidFinish(closure_1_8);
            })();
            state.setState({ isOpen: true });
            c6 = true;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: require("NativeBrowserManagerModuleIOS").openAuthSessionURL(tmp34, true), done: false };
            return obj5;
          } else {
            c6 = 3;
            return { value: false, done: true };
          }
          obj8 = PlatformUtils;
          tmp34 = closure_0;
          tmp36 = dependencyMap;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        const obj6 = { error: closure_129_1 };
        closure_130_4.warn("Failed to open the verification auth session", obj6);
        closure_130_9();
        c6 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_0 = value;
        if (!closure_129_0) {
          closure_130_9();
        }
        c4 = 0;
        c6 = 3;
        const obj = { value: closure_129_0, done: true };
        return obj;
      }
    } catch (tmp27) {
      closure_3 = tmp27;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp27;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_4 = new LoggerDefault("AgeVerificationAuthSession");
const module_562 = fn(562);
let closure_5 = module_562.create(() => ({ isOpen: false }));
let c6 = false;
let c7 = null;
const ReactCompilerGating = fn(558);
const tmp2 = new LoggerDefault("AgeVerificationAuthSession");
function getIsAgeVerificationAuthSessionOpen() {
  return closure_5.getState().isOpen;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationAuthSession.tsx");

export const openAgeVerificationAuthSession = function openAgeVerificationAuthSession() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const closeAgeVerificationAuthSession = function closeAgeVerificationAuthSession() {
  if (_null != null) {
    _null.remove();
  }
  _null = null;
  closure_5.setState({ isOpen: false });
  c6 = false;
  if (closure_5.getState().isOpen) {
    NativeBrowserManagerModuleIOSDefault.closeAuthSession();
  }
};
export function getIsAgeVerificationAuthSessionAwaitingResult() {
  return c6;
}
export const useIsAgeVerificationAuthSessionOpen = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isOpen) {
      return isOpen.isOpen;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_5(first);
}) : (() => closure_5((isOpen) => isOpen.isOpen));
export { getIsAgeVerificationAuthSessionOpen };
