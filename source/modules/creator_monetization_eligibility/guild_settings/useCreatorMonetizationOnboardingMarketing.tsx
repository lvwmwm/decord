// Module ID: 16411
// Function ID: 127927
// Name: useCreatorMonetizationOnboardingMarketing
// Dependencies: [5, 57, 31, 16380, 4029, 2]
// Exports: default

// Module 16411 (useCreatorMonetizationOnboardingMarketing)
import set from "set";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useCreatorMonetizationOnboardingMarketing.tsx");

export default function useCreatorMonetizationOnboardingMarketing(arg0) {
  let set;
  let dependencyMap;
  let importAll;
  let tmp2;
  let tmp4;
  let tmp6;
  let closure_0 = arg0;
  [tmp2, importAll] = callback(React.useState(true), 2);
  const tmp = callback(React.useState(true), 2);
  [tmp4, dependencyMap] = callback(React.useState(), 2);
  const tmp3 = callback(React.useState(), 2);
  [tmp6, set] = callback(React.useState(), 2);
  callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_3(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), []);
  const items = [arg0, callback];
  const effect = React.useEffect(() => {
    callback(closure_0);
  }, items);
  return { isLoading, error, creatorMonetizationOnboardingMarketing };
};
