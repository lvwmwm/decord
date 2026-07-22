// Module ID: 16290
// Function ID: 125737
// Name: useCreatorMonetizationEligibility
// Dependencies: []
// Exports: default

// Module 16290 (useCreatorMonetizationEligibility)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).CreatorMonetizationApplicationState;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationEligibility.tsx");

export default function useCreatorMonetizationEligibility(arg0) {
  let tmp2;
  let tmp4;
  let tmp6;
  const importDefault = arg0;
  [tmp2, closure_1] = callback(React.useState(null != arg0), 2);
  const tmp = callback(React.useState(null != arg0), 2);
  [tmp4, closure_2] = callback(React.useState(), 2);
  const tmp3 = callback(React.useState(), 2);
  [tmp6, closure_3] = callback(React.useState(), 2);
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), []);
  const tmp5 = callback(React.useState(), 2);
  const items = [arg0, callback];
  return {
    error: tmp4,
    loading: tmp2,
    eligibility: tmp6,
    refresh: React.useCallback(() => {
      if (null != arg0) {
        callback(arg0);
      }
    }, items)
  };
};
