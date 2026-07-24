// Module ID: 7611
// Function ID: 60621
// Name: useAgeVerificationMethodsV2
// Dependencies: [5, 57, 31, 7612, 2]
// Exports: useAgeVerificationMethodsV2

// Module 7611 (useAgeVerificationMethodsV2)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethodsV2.tsx");

export const useAgeVerificationMethodsV2 = function useAgeVerificationMethodsV2() {
  let asyncGeneratorStep;
  let tmp4;
  const methods = callback2(refetch.useState([]), 2);
  let closure_0 = methods[1];
  const loading = callback2(refetch.useState(true), 2);
  let closure_1 = loading[1];
  [tmp4, asyncGeneratorStep] = callback2(refetch.useState(false), 2);
  callback2 = refetch.useRef(true);
  refetch = refetch.useCallback(callback(async () => {
    outer1_1(true);
    outer1_2(false);
    const obj = callback(table[3]);
    if (outer1_3.current) {
      outer1_0(tmp3);
    }
    while (true) {
      let tmp6 = outer1_3;
      if (!outer1_3.current) {
        break;
      } else {
        let tmp7 = outer1_1;
        let tmp8 = outer1_1(false);
        break;
      }
    }
  }), []);
  const items = [refetch];
  const effect = refetch.useEffect(() => {
    _slicedToArray.current = true;
    refetch();
    return () => {
      outer1_3.current = false;
    };
  }, items);
  return { loading: loading[0], error, methods: methods[0], refetch };
};
