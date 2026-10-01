// Module ID: 14301
// Function ID: 14302
// Name: useAvailableAgeVerificationMethods
// Dependencies: [32, 19, 7888, 573, 7889, 2]
// Exports: useAvailableAgeVerificationMethods

// Module 14301 (useAvailableAgeVerificationMethods)
import AgeVerificationMethodsV2 from "AgeVerificationMethodsV2" /* 7888 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAvailableAgeVerificationMethods.tsx");

export const useAvailableAgeVerificationMethods = function useAvailableAgeVerificationMethods() {
  let tmp2;
  let tmp = _slicedToArray(react.useState({ methods: null, loading: true }), 2);
  [tmp2, require] = tmp;
  const effect = react.useEffect(() => {
    let _true;
    let c0 = false;
    let obj = AgeVerificationMethodsV2;
    const ageVerificationMethodsV2SuspendedUser = obj.fetchAgeVerificationMethodsV2SuspendedUser();
    const nextPromise = ageVerificationMethodsV2SuspendedUser.then((methods) => {
      const obj = closure_1_1(closure_1_2[3]);
      const obj2 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: methods.methods, footerMessage: methods.footerMessage, outageBannerMessage: methods.outageBannerMessage };
      obj.dispatch(obj2);
      const obj3 = _true(closure_1_2[4]);
      return obj3.getAvailableMethodsV2(methods.methods);
    });
    const nextPromise1 = nextPromise.then((methods) => {
      const tmp = c0;
      if (!tmp) {
        const obj = { methods, loading: false };
        require(obj);
      }
    });
    nextPromise1.catch(() => {
      const tmp = c0;
      if (!tmp) {
        require({ methods: null, loading: false });
      }
    });
    return () => {
      let c0 = true;
    };
  }, []);
  return tmp2;
};
