// Module ID: 16407
// Function ID: 127911
// Name: useCreatorMonetizationEligibility
// Dependencies: [5, 57, 31, 16377, 16380, 4030, 2]
// Exports: default

// Module 16407 (useCreatorMonetizationEligibility)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { CreatorMonetizationApplicationState as closure_6 } from "CreatorMonetizationApplicationState";

const result = require("result").fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx");

export default function useCreatorMonetizationEligibility(arg0) {
  let _isNativeReflectConstruct;
  let dependencyMap;
  let importAll;
  let tmp2;
  let tmp4;
  let tmp6;
  let closure_0 = arg0;
  [tmp2, importAll] = callback(React.useState(null != arg0), 2);
  const tmp = callback(React.useState(null != arg0), 2);
  [tmp4, dependencyMap] = callback(React.useState(), 2);
  const tmp3 = callback(React.useState(), 2);
  [tmp6, _isNativeReflectConstruct] = callback(React.useState(), 2);
  callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), []);
  const tmp5 = callback(React.useState(), 2);
  const items = [arg0, callback];
  return {
    error: tmp4,
    loading: tmp2,
    eligibility: tmp6,
    refresh: React.useCallback(() => {
      if (null != closure_0) {
        callback(closure_0);
      }
    }, items)
  };
};
